# Printer

The Printer API provide the `.print` method, which handles connecting, sending payload and disconnecting from the printer.

Currently supported printers are:
- Star Micronics 
- Samsung Kiosk integrated printer

See a [working example here](./src/index.ts).

### Printer

The method will trigger the printer to print the provided data.

```typescript
try {
  const data =
    '                                          \n' +
    '                  EVEXI                   \n' +
    '                  EVEXI                   \n' +
    '                  EVEXI                   \n' +
    '                  EVEXI                   \n' +
    '                  EVEXI                   \n' +
    '                                          \n' +
    '                                          \n' +
    '                                          \n' +
    '                                          \n' +
    '                                          \n'

  const res = await Evexi.printer.print(data)
} catch (e) {
  //
}
```

The `Evexi.printer.print` method also takes an optional second argument, an object used to override settings for the printer. This is useful if the kiosk is on a different serial port or has a different baud rate. One or more overrides can be sent, and default values for everything else will be used. 

```typescript
await Evexi.printer.print('PRINT DATA', {
  port: 'PRINTERPORT1', // 'PRINTERPORT0' | 'PRINTERPORT1' | 'PRINTERPORT2'  // DEFAULT='PRINTERPORT1'
  baudRate: 115200, // DEFAULT=115200
  parity: 'NONE', // 'NONE' | 'ODD' | 'EVEN'  // DEFAULT='NONE'
  dataBits: 'BITS8', // 'BITS5' | 'BITS6' | 'BITS7' | 'BITS8'  // DEFAULT='BITS8'
  stopBits: '1', // '1' | '1.5' | '2'  // DEFAULT='1'
})
```

