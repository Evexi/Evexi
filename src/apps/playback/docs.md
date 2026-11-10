# Register Event Listener

`Evexi.playback` plays a video file from the player's own storage on its native decoder, on top of the running playlist. Available on **BrightSign only** from SDK **3.15.0**. Every other platform refuses each call with `PlaybackError.NO_PROVIDER`. There is no capability query, so call `play` and handle the refusal instead of checking for support first.

Requirements:
- The caller must be **overlay content**. Anything else is refused with `NOT_OVERLAY`.
- A player-driven playlist must be running. Otherwise the call is refused with `PLAYLIST_NOT_RUNNING` or `PLAYLIST_DRIVEN`.
- The path must be a plain file in the player's local storage (BrightSign: `SD:/...` or `/storage/sd/...`; the drive is case-sensitive, and `SD://` is refused). Stream and http URLs are refused.

Before each playback test makes its first call it runs `Evexi.interactive.destroy()`. This app starts an interactive session when it loads, which holds the playlist paused, and playback needs a running playlist to interrupt and hand back to. When the test ends, passes or fails, or when Stop is pressed, it runs `Evexi.interactive.start()` to put the session back, so a test leaves the player as it found it and the page can be run again. Register Event Listener only registers the callback and leaves the session alone. Your own overlay content should not hold an interactive session open while it uses `Evexi.playback`.

Every test that plays a clip calls `clear()` when it finishes, passes or fails, or when Stop is pressed, then waits for the clip's terminal event. The playlist is back on screen, with no leftover video frame, before the next test starts. **Clear Video** is the last test on the page, so a run always ends with the video plane blank.

`onEvent` registers the single callback that receives every playback event. A later call replaces the previous callback. Each clip emits `started`, then **exactly one** terminal event:

| Type | Meaning |
|---|---|
| `started` | The play was sent to the video player. For a local clip this is before the first frame, so it is the cue to hide your own UI. For a synced clip it fires just before the first frame, by the sync lead time. A clip that fails to play (missing or undecodable file) still gets `started`, followed by `error` |
| `ended` | Terminal. Reached its natural end. This is the only event that means the clip completed |
| `error` | Terminal. Failed to play, or failed part way through. Carries `error` |
| `superseded` | Terminal. A later `play` took the screen. Carries `by` (the new token). The playlist was not resumed in between |
| `stopped` | Terminal. Cut short by `stop()`, `clear()` or the player's safety timeout. `reason` is `'stopped'`, `'cleared'` or `'timeout'` |

```typescript
import Evexi, { PlaybackEventType } from 'evexi'

Evexi.playback.onEvent((event) => {
  // { type, token, requestToken?, path, synced, at }
  if (event.type === PlaybackEventType.ENDED) console.log('Finished', event.token)
})
```

Every refusal comes back as `{ success: false, error }`. The `error` is one of the `PlaybackError` strings:

| `PlaybackError` | When |
|---|---|
| `NO_PROVIDER` | Not supported on this platform (anything other than BrightSign) |
| `NOT_OVERLAY` | Caller is not overlay content |
| `PLAYLIST_NOT_RUNNING` | Nothing is playing to interrupt |
| `PLAYLIST_DRIVEN` | The playlist is externally driven |
| `INVALID_PATH` | Not a plain file in local storage (e.g. a URL or `SD://`). A missing file is accepted and reported as an `error` event instead |
| `INVALID_MEDIA_ID` | `mediaId` is not letters, digits, `-`, `_` (max 64) |
| `SEND_FAILED` | The play could not be sent to the video player |
| `NO_ACTIVE_PLAYBACK` | `stop` with nothing playing |
| `SYNC_UNAVAILABLE` | `sync: true` on a player that is not in a group |
| `SYNC_NOT_LEADER` | `sync: true` on a follower. This is normal, not a fault |
| `SYNCED_STOP` | `stop` on a synced clip, which no panel may stop |

# Play Video

Plays a local file and takes the screen from the playlist. The player pauses its playlist, records proof of play, plays the clip, then restores the interrupted item. The returned promise resolves when the player **accepts or refuses** the play, not when the clip finishes. Use the returned `token` to match the events that follow.

```typescript
const res = await Evexi.playback.play('SD:/test.mp4')
// { success: true, token: 'abc123' }
// { success: false, error: 'Playback is not supported on this platform' }
```

The test plays the file at the path above (default `SD:/test.mp4`, copied to each device by hand). It waits for `started`, keeps the clip on screen for 3 seconds, then stops it. On non-BrightSign players the test passes when `play` is cleanly refused with `NO_PROVIDER`.

# Stop Video

Stops the current clip and hands the screen back to the playlist. Called without an argument, it stops whatever is playing. Called with a token, it does nothing if that clip has already been superseded, so it cannot cut off a newer clip.

```typescript
const res = await Evexi.playback.stop(token)
// { success: true }  -> a 'stopped' event follows for token
```

`stop()` leaves the clip's last frame on the video plane. It shows through anything the playlist puts on screen next that doesn't cover it, such as HTML content or a letterboxed image. Use `clear()` to stop **and** blank it.

The test plays, waits for `started`, stops, and expects a `stopped` event for the same token.

# Play To End

Plays the clip through and waits for `ended`. Content that should react only when a clip completes must match `ended` alone. `stopped`, `superseded` and `error` are not completions.

```typescript
const { token } = await Evexi.playback.play('SD:/test.mp4')
Evexi.playback.onEvent((event) => {
  if (event.token === token && event.type === 'ended') showNextScene()
})
```

Set the timeout above to longer than the clip.

# Supersede

Calling `play` while a clip is running re-cuts immediately. The first clip gets `superseded`, with `by` set to the new token, and the playlist is not resumed in between. A `superseded` clip has already been replaced on screen, so it is no cue to restore anything.

```typescript
const a = await Evexi.playback.play('SD:/a.mp4')
const b = await Evexi.playback.play('SD:/b.mp4')
// event: { type: 'superseded', token: a.token, by: b.token }
await Evexi.playback.stop(a.token) // no-op: a was superseded, b keeps playing
```

# Stop With Nothing Playing

`stop` with no clip playing is refused with `NO_ACTIVE_PLAYBACK`.

```typescript
const res = await Evexi.playback.stop()
// { success: false, error: 'No active playback' }
```

# Invalid Path

Only a plain file in the player's own storage is accepted. The storage root depends on the platform, so content that runs on more than one platform should read the path from a setting rather than hard-coding it. On BrightSign the SD card can be written two ways:

| Path | Result |
|---|---|
| `SD:/test.mp4` | ✅ plays `test.mp4` from the card root |
| `/storage/sd/test.mp4` | ✅ the same file, written as the full device path |
| `SD://test.mp4` | ❌ contains `://` |
| `SD:/test.mp4` | ❌ the drive name is case-sensitive and must be `SD:` |
| `SD:/../x.mp4`, a backslash, or `\|` | ❌ |

Stream URLs (`rtsp://`, `udp://`, `https://...m3u8`) are refused too. Overlay content therefore cannot display remote media or open outbound connections. Every refusal returns the same `INVALID_PATH` error, because the fix is the same in each case.

A well-formed path to a file that doesn't exist is **not** refused by `play`. The play is accepted with a token, `started` arrives as for any play, and the failure then arrives as an `error` event for that token. Content that plays files it hasn't checked should handle `error` as well as `INVALID_PATH`.

```typescript
const res = await Evexi.playback.play('SD:/does-not-exist.mp4')
// { success: true, token: 'pb6' }
// event: { type: 'error', token: 'pb6', error: '...' }
```

```typescript
await Evexi.playback.play('https://example.com/test.mp4')
// { success: false, error: "A media path must be a file in this player's local storage" }
```

The test expects `INVALID_PATH` for the remote URL, `SD://test.mp4`, `SD:/../test.mp4`, a backslash path and a path containing `|`. For the missing file it accepts either an `INVALID_PATH` refusal or an accepted play that ends in an `error` (or `stopped`) event. A `started` event before that error is expected and only logged.

# Media ID

Pass the clip's Evexi media id as `mediaId`, and proof of play and screenshots report that media instead of your application. Only letters, digits, `-` and `_` are allowed, at most 64 characters. Anything else is refused with `INVALID_MEDIA_ID`.

```typescript
await Evexi.playback.play('SD:/test.mp4', { mediaId: 'test-media' })
```

On a synced play the `mediaId` applies only to the panel that called `play`. Every other panel reports the overlay application.

# Sync Play

`sync: true` plays the clip on every panel in the player's sync group at the same moment. The player joins its own group and the backend elects the leader, so there is nothing to configure. Only the leader is accepted. Followers are refused with `SYNC_NOT_LEADER`, which is normal, so fire on your own interval and ignore the refusal. `Evexi.info().groupLeader` tells you the current role.

```typescript
const res = await Evexi.playback.play('SD:/test.mp4', { sync: true })
// leader:    { success: true, token }
// follower:  { success: false, error: 'This player is not the sync leader' }
// no group:  { success: false, error: 'This player is not in a group, so it cannot play in sync' }
```

Synced events carry `synced: true`, and `requestToken` holds the token `play` returned. A synced clip **cannot be stopped** on any panel, the leader included (`SYNCED_STOP`). It ends only at its natural end or at the player's safety timeout. While a local (unsynced) play is on screen, that panel refuses incoming synced starts and the other panels still take them.

The test passes when the play is refused with `SYNC_UNAVAILABLE` or `SYNC_NOT_LEADER`, and logs a warning. On the leader it checks that `stop` is refused and that the clip runs to `ended`.

# Clear Video

Stops the current clip, as `stop()` does, and also **blanks the video plane**, so its last frame isn't left on screen. The clip reports `stopped` with `reason: 'cleared'`.

```typescript
const res = await Evexi.playback.clear()
// { success: true }  -> a 'stopped' event with reason 'cleared' follows for the playing clip
```

Differences from `stop()`:
- `clear()` takes no token, and is valid with **nothing playing**. A clip that has already ended or been stopped leaves its last frame behind, and `clear()` removes it.
- It never interrupts the playlist's own video, which already covers the plane.
- A synced clip is refused with `SYNCED_STOP`, as for `stop()`.
- Players older than SDK 3.15.0-alpha.5 don't answer, so the request times out. The test treats no answer within 15s as a failure.

Call `clear()` when your content is done with playback and wants nothing left on screen. Use `stop()` only when something else will immediately cover the video plane.

The test plays, waits for `started`, then calls `clear()`. It expects a `stopped` event with reason `cleared`, then calls `clear()` again with nothing playing and expects that to succeed. It is the last test on the page, and like every playback test it ends by clearing, so a run finishes with no video left on screen. On non-BrightSign players it passes when `clear()` is cleanly refused with `NO_PROVIDER`.
