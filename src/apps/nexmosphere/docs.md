# Open Connection

Establishes a USB connection to the Nexmosphere device. The message listener should always be registered before opening the connection to avoid missing early events.

```typescript
Evexi.nexmosphere.onMessage((msg) => {
  // e.g. 'X003A[3]' for a button press on port 003
  console.log(msg)
})

const success = await Evexi.nexmosphere.open()
```

Requires Evexi player 2.9.0+ on Windows or Linux.

# Write Command

Sends a command string to the Nexmosphere controller. Commands follow the Nexmosphere protocol format and can be used to control LEDs, triggers, and other peripherals connected to the controller.

```typescript
// Set port 111 to white
await Evexi.nexmosphere.write('X111B[Lc=R99008]')

// Set port 111 to red
await Evexi.nexmosphere.write('X111B[Lc=R99108]')
```

Use the command input above to send a custom command to the controller.

# Close Connection

Terminates the USB connection to the Nexmosphere device. The player handles this automatically during its own lifecycle, but you can call it manually if needed.

```typescript
const success = await Evexi.nexmosphere.close()
```

If you intend to re-open the connection, re-register `onMessage` first as the listener is cleared on close.
