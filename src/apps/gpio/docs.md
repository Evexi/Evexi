# Read State

Reads the current level of all 8 GPIO pins and which of them are outputs. Pins are numbered 0-7 and every mask is 8 bits, where bit n is pin n. Only available on BrightSign. Every other platform refuses with `GPIO is not supported on this platform`.

```typescript
const state = await Evexi.gpio.read()
if (state.success) {
  console.log('Levels', state.mask.toString(2))     // bit n = pin n
  console.log('Outputs', state.outputs.toString(2)) // pins configured as outputs
}
```

Events only report changes, so read once on start-up to learn a state that was already set before your content loaded, e.g. a door that was already open.

GPIO 0-7 are logical numbers, not physical pin numbers. Find which terminal is which from the labels on the connector or the hardware guide for your player model. The connector has 8 GPIO, 2 x 3.3V and 2 x GND.

# Configure Pin

Makes a pin an input or an output. Every pin boots as an input. A pin must be an output before `write`, `writeAll` or `pulse` can drive it.

```typescript
const response = await Evexi.gpio.configure(2, 'output')
if (!response.success) console.error(response.error)
```

Pin configuration and output state persist across content changes until the player restarts, so configure the pins your content uses on start-up rather than assuming the boot state.

# Write Pin

Drives one output pin high (3.3V) or low (0V).

```typescript
await Evexi.gpio.configure(2, 'output')
await Evexi.gpio.write(2, true)  // 3.3V
await Evexi.gpio.write(2, false) // 0V
```

Writing to a pin that is still an input is refused with `The pin is not configured as an output`. Outputs are 3.3V logic with a 100 ohm series resistor and a 24mA limit per pin. That is enough for an LED. Drive anything larger through a relay or MOSFET, and never connect 5V.

# Write All

Drives every output pin at once from a bitmask, with no flicker between pins. Bits for pins that are not outputs are ignored.

```typescript
// Pins 0, 2, 4 and 6 high, the other outputs low
await Evexi.gpio.writeAll(0b01010101)
```

# Pulse Pin

Repeats an on/off pattern on an output pin in hardware, so it keeps running with no JavaScript timers. The cycle of `milliseconds` is split into `slices` equal steps and bit n of `pattern` turns the pin on during step n.

```typescript
await Evexi.gpio.configure(2, 'output')
// 0x0F over 8 slices: on for the first half, off for the second. 1000ms = 1Hz blink
await Evexi.gpio.pulse(2, 0x0F, { milliseconds: 1000, slices: 8 })
```

The timing is global on BrightSign: every pulsing pin shares one `milliseconds` and `slices`, so the last call sets the speed for all of them. Each pin keeps its own pattern. The default here is a slow 2 second cycle, so a multimeter has time to follow it between 3.3V and 0V.

# Stop Pulse

Stops a pin's pulse pattern.

```typescript
await Evexi.gpio.stopPulse(2)
await Evexi.gpio.write(2, false) // leave it solidly off
```

Follow with `write` to leave the pin in a known state.

# Listen for Events

Receives every change on an input pin. There is nothing to open: GPIO is always on and events arrive as soon as a callback is registered.

```typescript
Evexi.gpio.onEvent(({ pin, state, mask, at }) => {
  // state is 'down' (active, e.g. button pressed) or 'up' (released)
  console.log(`GPIO ${pin} ${state}`, mask.toString(2), at)
})
```

Inputs have a 1k ohm pull-up to 3.3V, so wire a button between the GPIO pin and GND. Closing the contact gives `down` and opening it gives `up`. The input thresholds are 2.0V high and 0.8V low.

**Note:** `onEvent` is a single slot. A second call replaces the first callback, and the Input Sweep and Loopback run tests below take it over.

# Run Test 1 - Reset

Run tests 1 to 5 in order to prove every pin works with a multimeter. Each test logs exactly what the meter should read and when.

**Kit:**
- A multimeter set to DC volts (20V range).
- One jumper wire.
- The pin labels for your player's GPIO connector (or its hardware guide).

**Before you start:**
- Black probe on a GND pin, red probe on a 3.3V pin. It should read about 3.3V.
- Set the meter to continuity and check the two GND pins beep to each other.
- Put the meter back on DC volts and leave the black probe on GND for every test.

**Safety:**
- Only measure volts on the GPIO pins. Never put the meter in current (mA) mode across an output that is driven high: 3.3V through the 100 ohm resistor is about 33mA, over the 24mA limit.
- Never connect 5V to any pin.

This test stops any pulses and puts all 8 pins back to inputs. It passes when no pin is an output. Each idle input should measure about 2.3V (measured on an HD1026). That is the resting level set by the internal pull-up, and anything above 2.0V counts as high. The 3.3V pins themselves should read about 3.3V.

# Run Test 2 - Output Sweep

Drives each pin in turn, 0 to 7, as the only output: HIGH for the hold time, then LOW for the hold time. Move the red probe to the pin named in the log.

- HIGH: expect 3.2V to 3.3V.
- LOW: expect under 0.2V.

A driven HIGH reads higher than an idle input (about 3.3V against about 2.3V), but the HIGH reading on its own proves little. The drop to 0V on LOW is what proves the pin is being driven. Mark a pin failed if it does not swing between the two.

The test also reads the state back after each HIGH and fails if the player does not report the pin as an output that is high. Raise the hold time if you need longer to move the probe.

# Run Test 3 - Neighbour Short Check

Makes all 8 pins outputs and drives two patterns, each held for the hold time:

- `0x55`: GPIO 0, 2, 4, 6 at 3.3V and GPIO 1, 3, 5, 7 at 0V.
- `0xAA`: the reverse.

Between the two patterns every pin drops to 0V for 5 seconds, so the switch is easy to spot on the meter.

Measure every pin in each pattern. Each pin should read 3.3V in one pattern and 0V in the other. A pin that reads the same in both is stuck or bridged to a neighbour, usually from a stray strand of wire in the terminal block. The pins go back to inputs at the end.

# Run Test 4 - Input Sweep

Checks every input with just the jumper wire. Put all pins back to inputs, then briefly touch each GPIO pin to GND, one at a time, in any order.

Each pin must report `down` when touched and `up` when released, and the log counts them off. The test passes when all 8 have been seen and fails at the timeout, listing the pins that never reported.

A pin that passes the Output Sweep but fails here, or the other way round, points to a fault on that line inside the player rather than the wiring.

# Run Test 5 - Loopback

An optional check with no meter. Connect the jumper from the output pin to the input pin. The test then switches the output low and high three times and expects `down` then `up` on the input each time.

This works because the 100 ohm output pulls against the input's 1k ohm pull-up, giving about 0.3V when low, which is under the 0.8V threshold. Change the pins and run it again to check other pairs.
