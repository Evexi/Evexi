import { addLog } from "@/hooks/useLogger"
import { useStore } from "@/hooks/useStore"
import { TestRunner } from "@/utils/test-runner"
import Evexi from "evexi"
import type { GpioEvent, GpioMode, GpioResponse } from "evexi"
import { parseDocs } from "@/utils/docs"
import documentation from "./docs.md?raw"

const doc = parseDocs(documentation)

const PINS = [0, 1, 2, 3, 4, 5, 6, 7]
const PIN_OPTIONS = PINS.map(String)
const INPUT = 'input' as GpioMode
const OUTPUT = 'output' as GpioMode

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

// Thrown when the user presses Stop mid run test, so execute() unwinds into its cleanup
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

// onEvent has a single slot and no way to unregister, so park it on a no-op once a run test is done with it
const releaseEvents = () => Evexi.gpio.onEvent(() => { })

// Renders a mask as one column per pin, pin 7 on the left, e.g. "7 6 5 4 3 2 1 0 / 0 0 0 0 0 1 0 1"
const bits = (mask: number) =>
  PINS.slice().reverse().join(' ') + ' / ' + PINS.slice().reverse().map(pin => (mask >> pin) & 1).join(' ')

// Logs a refused command and returns whether it succeeded
const check = (response: GpioResponse, action: string) => {
  if (response.success) return true

  addLog({
    message: `${action} failed. Error: ${response.error}`,
    type: 'error',
  })

  return false
}

// Puts every pin back to an input so no pin is left driven after a run test
const resetToInputs = async () => {
  for (const pin of PINS) {
    if (!check(await Evexi.gpio.configure(pin, INPUT), `Configure GPIO ${pin} as input`)) return false
  }

  return true
}

// Stops every pulse and puts every pin back to an input. Run tests call it before they start, so they never
// depend on what an earlier test left behind, and in finally, so no pin is left driven after a failure or Stop
const releasePins = async () => {
  try {
    // stopPulse is refused on a pin that is not pulsing, which is fine here
    for (const pin of PINS) await Evexi.gpio.stopPulse(pin)
    return await resetToInputs()
  } catch (e) {
    addLog({
      message: 'Failed to release GPIO pins. Trace: ' + e,
      type: 'error',
    })

    return false
  }
}

// Logs how a run test ended early: a Stop is a warning, anything else is an error
const logFailure = (e: unknown, action: string) => {
  addLog(e instanceof Stopped
    ? { message: `${action} stopped. Pins released.`, type: 'warning' }
    : { message: `${action} failed. Trace: ` + e, type: 'error' })
}

class GpioApp implements App {
  name = 'gpio'
  label = 'GPIO'
  platforms: Platform[] = ['brightsign']
  // These tests drive real pins and need a person with a meter or jumper, so Run All skips them
  excludeFromRunAll = true

  tests: AppTest[] = [
    new TestRunner({
      label: 'Read State',
      documentation: doc('Read State'),
      properties: [],
      async execute() {
        try {
          // Evexi.gpio.read() returns the level of all 8 pins (mask) and which pins are outputs (outputs), bit n = pin n
          const response = await Evexi.gpio.read()

          if (!check(response, 'GPIO read')) return false

          addLog({
            message: `Levels:  ${bits(response.mask)}`,
            type: 'info',
          })
          addLog({
            message: `Outputs: ${bits(response.outputs)}`,
            type: 'info',
          })

          return true
        } catch (e) {
          addLog({
            message: 'Failed to read GPIO. Trace: ' + e,
            type: 'error',
          })

          return false
        }
      }
    }),

    new TestRunner({
      label: 'Configure Pin',
      documentation: doc('Configure Pin'),
      properties: [
        { key: 'pin', label: 'Pin', type: 'union', default: '0', options: PIN_OPTIONS },
        { key: 'mode', label: 'Mode', type: 'union', default: 'output', options: ['input', 'output'] },
      ],
      async execute() {
        const pin = Number(this.getProperty<string>('pin'))
        const mode = this.getProperty<string>('mode') as GpioMode
        try {
          // Evexi.gpio.configure() makes a pin an input or an output; pins must be outputs before write, writeAll or pulse can drive them
          const response = await Evexi.gpio.configure(pin, mode)

          if (!check(response, `Configure GPIO ${pin}`)) return false

          addLog({
            message: `GPIO ${pin} configured as ${mode}.`,
            type: 'info',
          })

          return true
        } catch (e) {
          addLog({
            message: 'Failed to configure GPIO pin. Trace: ' + e,
            type: 'error',
          })

          return false
        }
      }
    }),

    new TestRunner({
      label: 'Write Pin',
      documentation: doc('Write Pin'),
      properties: [
        { key: 'pin', label: 'Pin', type: 'union', default: '0', options: PIN_OPTIONS },
        { key: 'state', label: 'State', type: 'union', default: 'on', options: ['on', 'off'] },
      ],
      async execute() {
        const pin = Number(this.getProperty<string>('pin'))
        const on = this.getProperty<string>('state') === 'on'
        try {
          // Evexi.gpio.write() drives one output pin high (3.3V) or low; refused with NOT_OUTPUT on an input pin
          const response = await Evexi.gpio.write(pin, on)

          if (!check(response, `Write GPIO ${pin}`)) return false

          addLog({
            message: `GPIO ${pin} set ${on ? 'HIGH (≈3.3V)' : 'LOW (≈0V)'}.`,
            type: 'info',
          })

          return true
        } catch (e) {
          addLog({
            message: 'Failed to write GPIO pin. Trace: ' + e,
            type: 'error',
          })

          return false
        }
      }
    }),

    new TestRunner({
      label: 'Write All',
      documentation: doc('Write All'),
      properties: [
        { key: 'mask', label: 'Mask (0-255)', type: 'number', default: 85 },
      ],
      async execute() {
        const mask = Number(this.getProperty<number>('mask'))
        try {
          // Evexi.gpio.writeAll() drives every output pin at once from a bitmask; bits for pins that are not outputs are ignored
          const response = await Evexi.gpio.writeAll(mask)

          if (!check(response, 'Write all GPIO')) return false

          addLog({
            message: `Wrote mask ${bits(mask)} to the output pins.`,
            type: 'info',
          })

          return true
        } catch (e) {
          addLog({
            message: 'Failed to write GPIO mask. Trace: ' + e,
            type: 'error',
          })

          return false
        }
      }
    }),

    new TestRunner({
      label: 'Pulse Pin',
      documentation: doc('Pulse Pin'),
      properties: [
        { key: 'pin', label: 'Pin', type: 'union', default: '0', options: PIN_OPTIONS },
        { key: 'pattern', label: 'Pattern (0-255)', type: 'number', default: 15 },
        { key: 'milliseconds', label: 'Cycle (ms)', type: 'number', default: 2000 },
        { key: 'slices', label: 'Slices', type: 'number', default: 8 },
      ],
      async execute() {
        const pin = Number(this.getProperty<string>('pin'))
        const pattern = Number(this.getProperty<number>('pattern'))
        const milliseconds = Number(this.getProperty<number>('milliseconds'))
        const slices = Number(this.getProperty<number>('slices'))
        try {
          // Evexi.gpio.pulse() repeats an on/off pattern in hardware; bit n of pattern turns the pin on during slice n. The timing is shared by every pulsing pin
          const response = await Evexi.gpio.pulse(pin, pattern, { milliseconds, slices })

          if (!check(response, `Pulse GPIO ${pin}`)) return false

          addLog({
            message: `GPIO ${pin} pulsing pattern ${bits(pattern)} over ${milliseconds}ms in ${slices} slices.`,
            type: 'info',
          })

          return true
        } catch (e) {
          addLog({
            message: 'Failed to pulse GPIO pin. Trace: ' + e,
            type: 'error',
          })

          return false
        }
      }
    }),

    new TestRunner({
      label: 'Stop Pulse',
      documentation: doc('Stop Pulse'),
      properties: [
        { key: 'pin', label: 'Pin', type: 'union', default: '0', options: PIN_OPTIONS },
      ],
      async execute() {
        const pin = Number(this.getProperty<string>('pin'))
        try {
          // Evexi.gpio.stopPulse() stops a pin's pulse pattern; follow with write to leave it solidly on or off
          const response = await Evexi.gpio.stopPulse(pin)

          if (!check(response, `Stop pulse on GPIO ${pin}`)) return false

          addLog({
            message: `GPIO ${pin} pulse stopped.`,
            type: 'info',
          })

          return true
        } catch (e) {
          addLog({
            message: 'Failed to stop GPIO pulse. Trace: ' + e,
            type: 'error',
          })

          return false
        }
      }
    }),

    new TestRunner({
      label: 'Listen for Events',
      documentation: doc('Listen for Events'),
      properties: [],
      async execute() {
        try {
          // Evexi.gpio.onEvent() receives every change on an input pin; a second call replaces the first callback
          Evexi.gpio.onEvent((event) => {
            addLog({
              message: `GPIO ${event.pin} ${event.state.toUpperCase()}  levels ${bits(event.mask)}`,
              type: 'info',
            })
          })

          addLog({
            message: 'Listening for GPIO input events.',
            type: 'info',
          })

          return true
        } catch (e) {
          addLog({
            message: 'Failed to listen for GPIO events. Trace: ' + e,
            type: 'error',
          })

          return false
        }
      }
    }),

    new TestRunner({
      label: 'Run Test 1 - Reset',
      documentation: doc('Run Test 1 - Reset'),
      properties: [],
      async execute() {
        try {
          if (!await releasePins()) return false

          const response = await Evexi.gpio.read()
          if (!check(response, 'GPIO read')) return false

          addLog({
            message: `Idle levels: ${bits(response.mask)}`,
            type: 'info',
          })

          if (response.outputs !== 0) {
            addLog({
              message: `Pins still outputs after reset: ${bits(response.outputs)}`,
              type: 'error',
            })

            return false
          }

          addLog({
            message: 'All 8 pins are inputs. Every pin should now measure ≈2.3V to GND (idle pull-up, above the 2.0V high threshold).',
            type: 'info',
          })

          return true
        } catch (e) {
          addLog({
            message: 'Failed to reset GPIO. Trace: ' + e,
            type: 'error',
          })

          return false
        }
      }
    }),

    new TestRunner({
      label: 'Run Test 2 - Output Sweep',
      documentation: doc('Run Test 2 - Output Sweep'),
      properties: [
        { key: 'hold', label: 'Hold (seconds)', type: 'number', default: 8 },
      ],
      async execute() {
        const hold = Number(this.getProperty<number>('hold')) * 1000
        let passed = true
        try {
          // Start from all inputs, no pulses, so the read-back below only sees the pin under test
          if (!await releasePins()) return false

          for (const pin of PINS) {
            const bit = 1 << pin

            if (!check(await Evexi.gpio.configure(pin, OUTPUT), `Configure GPIO ${pin} as output`)) return false
            if (!check(await Evexi.gpio.writeAll(bit), `Drive GPIO ${pin} high`)) return false

            // Software check that the player reports what was asked for, independent of the meter reading
            const state = await Evexi.gpio.read()
            if (!check(state, 'GPIO read')) return false
            if (state.outputs !== bit || !(state.mask & bit)) {
              passed = false
              addLog({
                message: `GPIO ${pin} read-back mismatch. Levels ${bits(state.mask)}, outputs ${bits(state.outputs)}`,
                type: 'error',
              })
            }

            addLog({
              message: `GPIO ${pin} HIGH: measure ≈3.3V now`,
              type: 'warning',
            })
            await wait(hold)

            if (!check(await Evexi.gpio.writeAll(0), `Drive GPIO ${pin} low`)) return false
            addLog({
              message: `GPIO ${pin} LOW: expect ≈0V`,
              type: 'warning',
            })
            await wait(hold)

            if (!check(await Evexi.gpio.configure(pin, INPUT), `Configure GPIO ${pin} as input`)) return false
          }

          addLog({
            message: passed
              ? 'Output sweep complete. Fail any pin that did not swing between ≈3.3V and ≈0V on the meter.'
              : 'Output sweep complete with read-back mismatches.',
            type: passed ? 'info' : 'error',
          })

          return passed
        } catch (e) {
          logFailure(e, 'Output sweep')

          return false
        } finally {
          await releasePins()
        }
      }
    }),

    new TestRunner({
      label: 'Run Test 3 - Neighbour Short Check',
      documentation: doc('Run Test 3 - Neighbour Short Check'),
      properties: [
        { key: 'hold', label: 'Hold (seconds)', type: 'number', default: 20 },
      ],
      async execute() {
        const hold = Number(this.getProperty<number>('hold')) * 1000
        try {
          // Clear any pulse first, a pulsing pin would override the patterns below
          if (!await releasePins()) return false

          for (const pin of PINS) {
            if (!check(await Evexi.gpio.configure(pin, OUTPUT), `Configure GPIO ${pin} as output`)) return false
          }

          // 0x55 drives the even pins high, 0xAA the odd pins: every pin sits opposite both neighbours
          const patterns = [0x55, 0xAA]
          for (const [i, mask] of patterns.entries()) {
            if (i > 0) {
              // All pins low between patterns so the switch is obvious on the meter
              if (!check(await Evexi.gpio.writeAll(0), 'Write all GPIO')) return false
              addLog({
                message: `Pattern ${i} done. All pins ≈0V, pattern ${i + 1} starts in 5 seconds`,
                type: 'info',
              })
              await wait(5000)
            }

            if (!check(await Evexi.gpio.writeAll(mask), 'Write all GPIO')) return false

            const high = PINS.filter(pin => mask & (1 << pin)).join(', ')
            const low = PINS.filter(pin => !(mask & (1 << pin))).join(', ')
            addLog({
              message: `Pattern ${i + 1} of ${patterns.length} ${bits(mask)}: GPIO ${high} ≈3.3V, GPIO ${low} ≈0V. Measure every pin now`,
              type: 'warning',
            })
            await wait(hold)
          }

          addLog({
            message: 'Short check complete. A pin that read the same in both patterns is bridged or stuck.',
            type: 'info',
          })

          return true
        } catch (e) {
          logFailure(e, 'Neighbour short check')

          return false
        } finally {
          await releasePins()
        }
      }
    }),

    new TestRunner({
      label: 'Run Test 4 - Input Sweep',
      documentation: doc('Run Test 4 - Input Sweep'),
      properties: [
        { key: 'timeout', label: 'Timeout (seconds)', type: 'number', default: 90 },
      ],
      async execute() {
        const timeout = Number(this.getProperty<number>('timeout')) * 1000
        const down = new Set<number>()
        const done = new Set<number>()
        try {
          if (!await releasePins()) return false

          Evexi.gpio.onEvent((event: GpioEvent) => {
            if (event.state === 'down') {
              down.add(event.pin)
            } else if (down.has(event.pin) && !done.has(event.pin)) {
              done.add(event.pin)
              addLog({
                message: `GPIO ${event.pin} OK (down + up). ${done.size}/8`,
                type: 'info',
              })
            }
          })

          addLog({
            message: 'Touch each GPIO pin to GND with a jumper, one at a time.',
            type: 'warning',
          })

          await wait(timeout, () => done.size === PINS.length)

          if (done.size === PINS.length) {
            addLog({
              message: 'All 8 inputs reported down and up.',
              type: 'info',
            })

            return true
          }

          addLog({
            message: `Timed out. No down + up from GPIO ${PINS.filter(pin => !done.has(pin)).join(', ')}`,
            type: 'error',
          })

          return false
        } catch (e) {
          logFailure(e, 'Input sweep')

          return false
        } finally {
          releaseEvents()
        }
      }
    }),

    new TestRunner({
      label: 'Run Test 5 - Loopback',
      documentation: doc('Run Test 5 - Loopback'),
      properties: [
        { key: 'out', label: 'Output Pin', type: 'union', default: '0', options: PIN_OPTIONS },
        { key: 'in', label: 'Input Pin', type: 'union', default: '1', options: PIN_OPTIONS },
      ],
      async execute() {
        const out = Number(this.getProperty<string>('out'))
        const input = Number(this.getProperty<string>('in'))
        const cycles = 3
        const events: string[] = []
        try {
          if (out === input) {
            addLog({
              message: 'Output and input pin must be different.',
              type: 'error',
            })

            return false
          }

          // Every pin an input and no pulses, so only the chosen output can move the input
          if (!await releasePins()) return false
          if (!check(await Evexi.gpio.configure(out, OUTPUT), `Configure GPIO ${out} as output`)) return false
          if (!check(await Evexi.gpio.write(out, true), `Drive GPIO ${out} high`)) return false
          await wait(200)

          Evexi.gpio.onEvent((event) => {
            if (event.pin === input) events.push(event.state)
          })

          for (let i = 0; i < cycles; i++) {
            if (!check(await Evexi.gpio.write(out, false), `Drive GPIO ${out} low`)) return false
            await wait(300)
            if (!check(await Evexi.gpio.write(out, true), `Drive GPIO ${out} high`)) return false
            await wait(300)
          }

          const expected = Array.from({ length: cycles }, () => 'down,up').join(',')
          if (events.join(',') === expected) {
            addLog({
              message: `GPIO ${out} → GPIO ${input}: ${cycles} down/up cycles received.`,
              type: 'info',
            })

            return true
          }

          addLog({
            message: `GPIO ${out} → GPIO ${input}: expected ${cycles} down/up cycles, got [${events.join(', ')}]. Check the jumper.`,
            type: 'error',
          })

          return false
        } catch (e) {
          logFailure(e, 'Loopback')

          return false
        } finally {
          releaseEvents()
          await releasePins()
        }
      }
    }),
  ]
}

export default new GpioApp()
