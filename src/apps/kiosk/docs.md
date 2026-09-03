# Barcode Scan

Waits for the Samsung Kiosk integrated barcode scanner to read a code and returns the scanned value as a string.

```typescript
const barcode = await Evexi.tizen.barcode()
// Returns the scanned string, e.g. '1234567890128'
```

This test will wait for a scan for the duration set in the timeout input above. If no scan is detected within that time, the test logs a warning and passes — indicating the API is responsive but no barcode was presented.

# Open Serial Port

Registers a message listener and opens a named serial port for communication with a third-party serial device. Messages are received as hex-encoded strings.

```typescript
Evexi.serial.onMessage((msg) => {
  console.log('Received (hex):', msg)
})

const success = await Evexi.serial.open('PORT0')
```

Use the port input above to select which serial port to open.

# Close Serial Port

Terminates the connection on the given serial port.

```typescript
Evexi.serial.close('PORT0')
```

Use the port input above to select which port to close.
