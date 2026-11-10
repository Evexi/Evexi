import { addLog } from "@/hooks/useLogger"
import { useStore } from "@/hooks/useStore"
import { TestRunner } from "@/utils/test-runner"
import Evexi, { PlaybackError, PlaybackEventType } from "evexi"
import type { PlaybackEvent, PlaybackPlayResponse, PlaybackStopResponse } from "evexi"
import { parseDocs } from "@/utils/docs"
import documentation from "./docs.md?raw"

const doc = parseDocs(documentation)

const DEFAULT_PATH = 'SD:/test.mp4'
const PATH_PROPERTY: PropertyDef = { key: 'path', label: 'Path', type: 'text', default: DEFAULT_PATH }

// How long a play or stop may take to be acknowledged before we call it a hang
const ACK_TIMEOUT = 15000
// How long a clip may take to reach the screen after play() is accepted
const START_TIMEOUT = 10000
// How long a stop() may take to produce its stopped event
const STOP_TIMEOUT = 10000

const TERMINAL = [
  PlaybackEventType.ENDED,
  PlaybackEventType.ERROR,
  PlaybackEventType.SUPERSEDED,
  PlaybackEventType.STOPPED,
]

// Refusals that mean the app is deployed wrongly rather than the API misbehaving
const DEPLOYMENT_ERRORS: string[] = [
  PlaybackError.NOT_OVERLAY,
  PlaybackError.PLAYLIST_NOT_RUNNING,
  PlaybackError.PLAYLIST_DRIVEN,
]

type Response = PlaybackPlayResponse | PlaybackStopResponse

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

// Thrown when the user presses Stop mid test, so execute() unwinds into its cleanup
class Stopped extends Error {
  constructor() { super('Stopped') }
}

// Sleeps up to ms, polling so Stop is noticed within a quarter second. Returns early once until() is true
const wait = async (ms: number, until?: () => boolean) => {
  const { isRunning } = useStore()
  const end = Date.now() + ms
  while (Date.now() < end) {
    if (!isRunning()) throw new Stopped()
    if (until?.()) return
    await sleep(Math.min(250, end - Date.now()))
  }
  if (!isRunning()) throw new Stopped()
}

// Rejects if the player never acknowledges, so a device that ignores the action fails instead of hanging the run
const withTimeout = <T>(promise: Promise<T>, label: string): Promise<T> =>
  new Promise<T>((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error(`${label} was not acknowledged within ${ACK_TIMEOUT / 1000}s`)), ACK_TIMEOUT)
    promise.then(
      value => { clearTimeout(timer); resolve(value) },
      error => { clearTimeout(timer); reject(error) },
    )
  })

const play = (path: string, options?: { sync?: boolean, mediaId?: string }) =>
  withTimeout(Evexi.playback.play(path, options), `play(${path})`)

const stop = (token?: string) =>
  withTimeout(Evexi.playback.stop(token), `stop(${token ?? ''})`)

// Stops like stop() and also blanks the video plane; valid with nothing playing. Old players never answer
// TEMP: unused while clear() is disabled for testing
// const clear = () =>
//   withTimeout(Evexi.playback.clear(), 'clear()')

// The mock in development stands in for a BrightSign so the BrightSign path can be exercised off-device
const isBrightSign = () => import.meta.env.DEV || useStore().info()?.provider === 'brightsign'

// Every event the player has pushed since the listener was registered
const events: PlaybackEvent[] = []
let listening = false

// onEvent has a single slot, so register once and fan out to the shared events array
const listen = () => {
  if (listening) return
  listening = true
  Evexi.playback.onEvent((event) => {
    events.push(event)
    const detail = 'error' in event ? ` error: ${event.error}`
      : 'by' in event ? ` by: ${event.by}`
        : 'reason' in event ? ` reason: ${event.reason}`
          : ''
    addLog({
      message: `Playback event: ${event.type} (token: ${event.token}, path: ${event.path}, synced: ${event.synced})${detail}`,
      type: event.type === PlaybackEventType.ERROR ? 'error' : 'info',
    })
  })
}

let prepared = false

// The first step of every playback test, run once per page load. App.tsx starts an interactive session on
// load, which holds the playlist paused; playback interrupts a running playlist and hands back to it, so
// end that session first, give the playlist a moment to resume, then register the event listener.
const prepare = async () => {
  if (!prepared) {
    prepared = true
    if (isBrightSign()) {
      // Evexi.interactive.destroy() ends the interactive session and returns the player to its playlist
      Evexi.interactive.destroy()
      addLog({ message: 'Interactive session destroyed so the playlist runs under playback.', type: 'info' })
      await wait(2000)
    }
  }
  listen()
}

// A synced play reports the player's own id as token and the id play() returned as requestToken
const forToken = (token: string) => events.filter(e => e.token === token || e.requestToken === token)

const findEvent = (token: string, types: PlaybackEventType[]) =>
  forToken(token).find(e => types.includes(e.type))

// Waits for the first event of one of the given types for this token, or null on timeout
const waitForEvent = async (token: string, types: PlaybackEventType[], timeoutMs: number) => {
  await wait(timeoutMs, () => !!findEvent(token, types))
  return findEvent(token, types) ?? null
}

// started must come first, followed by exactly one terminal event
const assertLifecycle = (token: string) => {
  const list = forToken(token)
  const terminals = list.filter(e => TERMINAL.includes(e.type))
  if (list[0]?.type !== PlaybackEventType.STARTED) {
    addLog({ message: `Lifecycle broken for ${token}: first event was ${list[0]?.type ?? 'none'}, expected started.`, type: 'error' })
    return false
  }
  if (terminals.length !== 1) {
    addLog({ message: `Lifecycle broken for ${token}: ${terminals.length} terminal events, expected exactly 1.`, type: 'error' })
    return false
  }
  addLog({ message: `Lifecycle OK for ${token}: started -> ${terminals[0].type}.`, type: 'info' })
  return true
}

const fail = (message: string) => {
  addLog({ message, type: 'error' })
  return false
}

// Logs a refused play, with a deployment hint when the refusal is about how the app is deployed
const refused = (res: Response, action: string) => {
  if (res.error && DEPLOYMENT_ERRORS.includes(res.error)) {
    return fail(`${action} refused: ${res.error}. Deploy this app as an overlay on top of a running, player-driven playlist.`)
  }
  return fail(`${action} refused. Error: ${res.error}`)
}

// Plays and returns the token once the clip is on screen, or null after logging why not
const playAndStart = async (path: string, options?: { sync?: boolean, mediaId?: string }) => {
  const res = await play(path, options)
  if (!res.success || !res.token) {
    refused(res, `Play ${path}`)
    return null
  }
  addLog({ message: `Play accepted. Token: ${res.token}`, type: 'info' })
  const started = await waitForEvent(res.token, [PlaybackEventType.STARTED], START_TIMEOUT)
  if (!started) {
    fail(`No started event for ${res.token} within ${START_TIMEOUT / 1000}s.`)
    return null
  }
  return res.token
}

// Passes only when the player refused with exactly the expected error
const expectRefusal = (res: Response, expected: PlaybackError, action: string) => {
  if (!res.success && res.error === expected) {
    addLog({ message: `${action} refused as expected: ${res.error}`, type: 'info' })
    return true
  }
  return fail(`${action} expected refusal "${expected}", got ${JSON.stringify(res)}`)
}

// Off BrightSign every call must come back cleanly refused with NO_PROVIDER, not throw, hang or succeed
const unsupported = async (calls: Array<[string, () => Promise<Response>]>) => {
  const provider = useStore().info()?.provider
  addLog({ message: `Provider is ${provider}, expecting a graceful NO_PROVIDER refusal.`, type: 'info' })
  for (const [action, call] of calls) {
    const res = await call()
    if (!expectRefusal(res, PlaybackError.NO_PROVIDER, action)) return false
  }
  addLog({ message: 'Playback gracefully refused on an unsupported platform.', type: 'info' })
  return true
}

// Runs after every test that plays: clears the video plane, so neither a playing clip nor the last frame
// of a finished one is left on screen, then waits until each clip the test started has a terminal event
const cleanup = async (...tokens: Array<string | null>) => {
  if (!isBrightSign()) return
  try {
    // TEMP: clear() disabled while testing; cleanup stops with stop() as before, which holds the last frame
    // const res = await clear()
    // if (res.success) {
    //   addLog({ message: 'Cleanup: video plane cleared.', type: 'info' })
    // } else if (res.error === PlaybackError.SYNCED_STOP) {
    //   addLog({ message: 'Cleanup: a synced clip is still playing and cannot be cleared; it will run to its end.', type: 'warning' })
    // } else {
    //   addLog({ message: `Cleanup: could not clear playback. Error: ${res.error}`, type: 'warning' })
    // }

    // No token: stops whatever is claimed, including a clip this test did not get a token for
    const res = await stop()
    if (res.success) {
      addLog({ message: 'Cleanup: stopped leftover playback.', type: 'info' })
    } else if (res.error === PlaybackError.SYNCED_STOP) {
      addLog({ message: 'Cleanup: a synced clip is still playing and cannot be stopped; it will run to its end.', type: 'warning' })
    } else if (res.error !== PlaybackError.NO_ACTIVE_PLAYBACK) {
      addLog({ message: `Cleanup: could not stop playback. Error: ${res.error}`, type: 'warning' })
    }

    for (const token of tokens) {
      if (!token || findEvent(token, TERMINAL)) continue
      // Not wait(): cleanup also runs after the user presses Stop, and must still finish
      const end = Date.now() + STOP_TIMEOUT
      while (!findEvent(token, TERMINAL) && Date.now() < end) await sleep(250)
      if (!findEvent(token, TERMINAL)) addLog({ message: `Cleanup: no terminal event for ${token} after stop.`, type: 'warning' })
    }
  } catch (e) {
    addLog({ message: 'Cleanup: failed to clear playback. Trace: ' + e, type: 'warning' })
  }
}

// Logs how a test ended early: a Stop is a warning, anything else is an error
const logFailure = (e: unknown, action: string) => {
  addLog(e instanceof Stopped
    ? { message: `${action} stopped.`, type: 'warning' }
    : { message: `${action} failed. Trace: ` + e, type: 'error' })
}

class PlaybackApp implements App {
  name = 'playback'
  label = 'Playback'
  // No platforms: the page runs everywhere so unsupported players can be checked for a graceful refusal

  tests: AppTest[] = [
    new TestRunner({
      label: 'Register Event Listener',
      documentation: doc('Register Event Listener'),
      properties: [],
      async execute() {
        try {
          // Evexi.playback.onEvent() registers the single callback that receives started and the terminal event for every clip
          await prepare()
          addLog({ message: 'Playback event listener registered.', type: 'info' })
          return true
        } catch (e) {
          logFailure(e, 'Register playback listener')
          return false
        }
      }
    }),

    new TestRunner({
      label: 'Play Video',
      documentation: doc('Play Video'),
      properties: [PATH_PROPERTY],
      async execute() {
        const path = this.getProperty<string>('path')
        let token: string | null = null
        try {
          await prepare()
          if (!isBrightSign()) return await unsupported([[`Play ${path}`, () => play(path)]])

          // Evexi.playback.play() takes the screen from the playlist; it resolves on accept, the clip itself is reported through onEvent
          token = await playAndStart(path)
          if (!token) return false
          addLog({ message: `Video is on screen (${token}).`, type: 'info' })

          await wait(3000)
          const res = await stop(token)
          if (!res.success) return refused(res, 'Stop')
          if (!await waitForEvent(token, [PlaybackEventType.STOPPED], STOP_TIMEOUT)) return fail(`No stopped event for ${token}.`)
          return assertLifecycle(token)
        } catch (e) {
          logFailure(e, 'Play video')
          return false
        } finally {
          await cleanup(token)
        }
      }
    }),

    new TestRunner({
      label: 'Stop Video',
      documentation: doc('Stop Video'),
      properties: [PATH_PROPERTY],
      async execute() {
        const path = this.getProperty<string>('path')
        let token: string | null = null
        try {
          await prepare()
          if (!isBrightSign()) return await unsupported([['Stop', () => stop()]])

          token = await playAndStart(path)
          if (!token) return false

          // Evexi.playback.stop() cuts the clip short and hands the screen back to the playlist; passing the token makes it a no-op once superseded
          const res = await stop(token)
          if (!res.success) return refused(res, 'Stop')
          addLog({ message: 'Stop accepted.', type: 'info' })

          const stopped = await waitForEvent(token, TERMINAL, STOP_TIMEOUT)
          if (!stopped) return fail(`No terminal event for ${token} within ${STOP_TIMEOUT / 1000}s.`)
          if (stopped.type !== PlaybackEventType.STOPPED) return fail(`Expected stopped, got ${stopped.type}.`)
          return assertLifecycle(token)
        } catch (e) {
          logFailure(e, 'Stop video')
          return false
        } finally {
          await cleanup(token)
        }
      }
    }),

    new TestRunner({
      label: 'Play To End',
      documentation: doc('Play To End'),
      properties: [
        PATH_PROPERTY,
        { key: 'timeout', label: 'Timeout (s)', type: 'number', default: 120 },
      ],
      async execute() {
        const path = this.getProperty<string>('path')
        const timeout = Number(this.getProperty<number>('timeout')) * 1000
        let token: string | null = null
        try {
          await prepare()
          if (!isBrightSign()) return await unsupported([[`Play ${path}`, () => play(path)]])

          token = await playAndStart(path)
          if (!token) return false

          // ended means a natural finish and nothing else, so it is the only event to act on for completion
          const terminal = await waitForEvent(token, TERMINAL, timeout)
          if (!terminal) return fail(`Clip did not finish within ${timeout / 1000}s. Increase the timeout for a longer clip.`)
          if (terminal.type !== PlaybackEventType.ENDED) return fail(`Expected ended, got ${terminal.type}.`)
          addLog({ message: `Clip played to its end in ${terminal.at - (findEvent(token, [PlaybackEventType.STARTED])?.at ?? terminal.at)}ms.`, type: 'info' })
          return assertLifecycle(token)
        } catch (e) {
          logFailure(e, 'Play to end')
          return false
        } finally {
          await cleanup(token)
        }
      }
    }),

    new TestRunner({
      label: 'Supersede',
      documentation: doc('Supersede'),
      properties: [PATH_PROPERTY],
      async execute() {
        const path = this.getProperty<string>('path')
        let first: string | null = null
        let second: string | null = null
        try {
          await prepare()
          if (!isBrightSign()) {
            return await unsupported([
              [`Play ${path}`, () => play(path)],
              [`Play ${path} again`, () => play(path)],
            ])
          }

          first = await playAndStart(path)
          if (!first) return false

          // A second play re-cuts straight away: the first clip reports superseded and the playlist is not resumed in between
          second = await playAndStart(path)
          if (!second) return false

          const superseded = await waitForEvent(first, TERMINAL, STOP_TIMEOUT)
          if (!superseded) return fail(`No terminal event for the first clip ${first}.`)
          if (superseded.type !== PlaybackEventType.SUPERSEDED) return fail(`Expected superseded for ${first}, got ${superseded.type}.`)
          if (superseded.by !== second) return fail(`superseded.by is ${superseded.by}, expected ${second}.`)
          addLog({ message: `First clip superseded by ${second}.`, type: 'info' })

          // Stopping the superseded token is a no-op, so the second clip must keep playing
          await stop(first)
          await wait(1000)
          if (findEvent(second, TERMINAL)) return fail('stop(firstToken) ended the second clip; it should be a no-op once superseded.')

          const res = await stop(second)
          if (!res.success) return refused(res, 'Stop')
          if (!await waitForEvent(second, [PlaybackEventType.STOPPED], STOP_TIMEOUT)) return fail(`No stopped event for ${second}.`)
          return assertLifecycle(first) && assertLifecycle(second)
        } catch (e) {
          logFailure(e, 'Supersede')
          return false
        } finally {
          await cleanup(first, second)
        }
      }
    }),

    new TestRunner({
      label: 'Stop With Nothing Playing',
      documentation: doc('Stop With Nothing Playing'),
      properties: [],
      async execute() {
        try {
          await prepare()
          if (!isBrightSign()) return await unsupported([['Stop', () => stop()]])

          return expectRefusal(await stop(), PlaybackError.NO_ACTIVE_PLAYBACK, 'Stop with nothing playing')
        } catch (e) {
          logFailure(e, 'Stop with nothing playing')
          return false
        }
      }
    }),

    new TestRunner({
      label: 'Invalid Path',
      documentation: doc('Invalid Path'),
      properties: [
        { key: 'remote', label: 'Remote URL', type: 'text', default: 'https://example.com/test.mp4' },
        { key: 'missing', label: 'Missing file', type: 'text', default: 'SD:/does-not-exist.mp4' },
      ],
      async execute() {
        const remote = this.getProperty<string>('remote')
        const missing = this.getProperty<string>('missing')
        // Each of these is refused up front: a URL, "://" after the drive, a parent traversal, a backslash and a pipe
        const invalid = [remote, 'SD://test.mp4', 'SD:/../test.mp4', 'SD:\\test.mp4', 'SD:/te|st.mp4']
        let token: string | null = null
        try {
          await prepare()
          if (!isBrightSign()) return await unsupported([[`Play ${remote}`, () => play(remote)]])

          // Only plain files in the player's own storage are accepted (SD:/file or /storage/sd/file); anything else is INVALID_PATH
          let ok = true
          for (const path of invalid) {
            if (!expectRefusal(await play(path), PlaybackError.INVALID_PATH, `Play ${path}`)) ok = false
          }

          // A well-formed path to a missing file may pass validation; the player then reports it as an error event instead
          const res = await play(missing)
          if (!res.success) {
            if (!expectRefusal(res, PlaybackError.INVALID_PATH, `Play ${missing}`)) ok = false
          } else if (res.token) {
            token = res.token
            addLog({ message: `Play ${missing} accepted (${token}); expecting an error event.`, type: 'info' })
            const terminal = await waitForEvent(token, TERMINAL, START_TIMEOUT)
            if (!terminal) {
              ok = fail(`No terminal event for missing file ${missing} within ${START_TIMEOUT / 1000}s.`)
            } else if (terminal.type !== PlaybackEventType.ERROR && terminal.type !== PlaybackEventType.STOPPED) {
              ok = fail(`Missing file ${missing} expected an error or stopped event, got ${terminal.type}.`)
            } else {
              addLog({ message: `Missing file reported as ${terminal.type} event${'error' in terminal ? `: ${terminal.error}` : ''}`, type: 'info' })
            }
            // started fires when the play is sent, so it can arrive before the error for a missing file
            if (findEvent(token, [PlaybackEventType.STARTED])) {
              addLog({ message: `Missing file ${missing} sent started before its ${terminal?.type ?? 'terminal'} event.`, type: 'info' })
            }
          } else {
            ok = fail(`Play ${missing} succeeded without a token.`)
          }
          return ok
        } catch (e) {
          logFailure(e, 'Invalid path')
          return false
        } finally {
          await cleanup(token)
        }
      }
    }),

    new TestRunner({
      label: 'Media ID',
      documentation: doc('Media ID'),
      properties: [
        PATH_PROPERTY,
        { key: 'mediaId', label: 'Media ID', type: 'text', default: 'test-media' },
      ],
      async execute() {
        const path = this.getProperty<string>('path')
        const mediaId = this.getProperty<string>('mediaId')
        let token: string | null = null
        try {
          await prepare()
          if (!isBrightSign()) return await unsupported([[`Play ${path} with mediaId`, () => play(path, { mediaId })]])

          // mediaId must be letters, digits, - and _, at most 64 characters
          if (!expectRefusal(await play(path, { mediaId: 'bad id!' }), PlaybackError.INVALID_MEDIA_ID, 'Play with mediaId "bad id!"')) return false

          // A valid mediaId is reported in proof of play and screenshots in place of this application
          token = await playAndStart(path, { mediaId })
          if (!token) return false
          addLog({ message: `Playing with mediaId ${mediaId}.`, type: 'info' })

          await wait(3000)
          const res = await stop(token)
          if (!res.success) return refused(res, 'Stop')
          if (!await waitForEvent(token, [PlaybackEventType.STOPPED], STOP_TIMEOUT)) return fail(`No stopped event for ${token}.`)
          return assertLifecycle(token)
        } catch (e) {
          logFailure(e, 'Media ID')
          return false
        } finally {
          await cleanup(token)
        }
      }
    }),

    new TestRunner({
      label: 'Sync Play',
      documentation: doc('Sync Play'),
      properties: [
        PATH_PROPERTY,
        { key: 'timeout', label: 'Timeout (s)', type: 'number', default: 120 },
      ],
      async execute() {
        const path = this.getProperty<string>('path')
        const timeout = Number(this.getProperty<number>('timeout')) * 1000
        let token: string | null = null
        try {
          await prepare()
          if (!isBrightSign()) return await unsupported([[`Sync play ${path}`, () => play(path, { sync: true })]])

          // sync: true plays across every panel in the group; only the leader is accepted
          const res = await play(path, { sync: true })
          if (!res.success || !res.token) {
            if (res.error === PlaybackError.SYNC_UNAVAILABLE || res.error === PlaybackError.SYNC_NOT_LEADER) {
              addLog({ message: `Sync play refused: ${res.error}. This is normal on an ungrouped panel or a follower.`, type: 'warning' })
              return true
            }
            return refused(res, 'Sync play')
          }
          token = res.token
          addLog({ message: `Sync play accepted as leader. Token: ${token}`, type: 'info' })

          if (!await waitForEvent(token, [PlaybackEventType.STARTED], START_TIMEOUT)) return fail(`No started event for ${token}.`)

          // A synced clip cannot be stopped on one panel, the leader included; it runs to its natural end
          if (!expectRefusal(await stop(token), PlaybackError.SYNCED_STOP, 'Stop synced clip')) return false

          const terminal = await waitForEvent(token, TERMINAL, timeout)
          if (!terminal) return fail(`Synced clip did not finish within ${timeout / 1000}s.`)
          if (terminal.type !== PlaybackEventType.ENDED) return fail(`Expected ended, got ${terminal.type}.`)
          if (!terminal.synced) return fail('Synced clip events should report synced: true.')
          return assertLifecycle(token)
        } catch (e) {
          logFailure(e, 'Sync play')
          return false
        } finally {
          await cleanup(token)
        }
      }
    }),

    // TEMP: Clear Video disabled while testing; re-enable to run playback.clear() as the last check
    /*
    new TestRunner({
      label: 'Clear Video',
      documentation: doc('Clear Video'),
      properties: [PATH_PROPERTY],
      async execute() {
        const path = this.getProperty<string>('path')
        let token: string | null = null
        try {
          await prepare()
          if (!isBrightSign()) return await unsupported([['Clear', () => clear()]])

          token = await playAndStart(path)
          if (!token) return false

          // Evexi.playback.clear() stops the clip like stop() and blanks the video plane, so no last frame is left behind
          const res = await clear()
          if (!res.success) return refused(res, 'Clear')
          addLog({ message: 'Clear accepted.', type: 'info' })

          const terminal = await waitForEvent(token, TERMINAL, STOP_TIMEOUT)
          if (!terminal) return fail(`No terminal event for ${token} within ${STOP_TIMEOUT / 1000}s.`)
          if (terminal.type !== PlaybackEventType.STOPPED) return fail(`Expected stopped, got ${terminal.type}.`)
          if (terminal.reason !== 'cleared') return fail(`Expected stopped reason 'cleared', got '${terminal.reason}'.`)
          if (!assertLifecycle(token)) return false

          // Unlike stop(), clear() is valid with nothing playing: it removes a finished clip's last frame
          const again = await clear()
          if (!again.success) return refused(again, 'Clear with nothing playing')
          addLog({ message: 'Clear with nothing playing accepted.', type: 'info' })
          return true
        } catch (e) {
          logFailure(e, 'Clear video')
          return false
        } finally {
          // The last check on the page, so the run always finishes with the video plane blank
          await cleanup(token)
        }
      }
    }),
    */
  ]
}

export default new PlaybackApp()
