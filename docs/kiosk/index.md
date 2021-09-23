# Kiosk
The Samsung Kiosk has two hardware peripherals both of which can be controlled via the Evexi API.

You can view a [working example here](./src).

#

* [Barcode](#barcode)
* [Printer](#printer)

#

### Barcode
This method will trigger the barcode scanner for 30 seconds. Once a barcode has been scanned the method will return the barcode as a promise. If no barcode is scanned or there was a error else where the promise will be rejected.

````typescript
try {
    const res = await window.Evexi.tizen.barcode() // string
} catch (e) {
    //
}
````

#

### Printer
The method will trigger the printer to print the provided data.

````typescript
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

    const res = await window.Evexi.tizen.printer(data)
} catch (e) {
    //
}
````

The second optional argument can take an object of override settings for the printer. This can be used if the kiosk is on a different serial port or has a different baud rate. One of more overrides can be sent. Default values for everything else will be used.

````typescript
await window.Evexi.tizen.printer('PRINT DATA', {
    port: 'PRINTERPORT1', // 'PRINTERPORT0' | 'PRINTERPORT1' | 'PRINTERPORT2'  // DEFAULT='PRINTERPORT1'
    baudRate: 115200, // DEFAULT=115200
    parity: 'NONE', // 'NONE' | 'ODD' | 'EVEN'  // DEFAULT='NONE'
    dataBits: 'BITS8', // 'BITS5' | 'BITS6' | 'BITS7' | 'BITS8'  // DEFAULT='BITS8'
    stopBits: '1' // '1' | '1.5' | '2'  // DEFAULT='1'
})
````