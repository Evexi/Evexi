# Kiosk
The Samsung Kiosk has two hardware peripherals both of which can be controlled via the Evexi API. Additionally you can connect a OTI payment device or communicate with a third party serial device on the additional ports.

You can view a [working example here](./src).

#

* [Barcode](#barcode)
* [Printer](#printer)
* [Touch To Engage](./../touchToEngage/index.md)
* [Serial](#serial)
* [OTI](#oti)

#

### Barcode
This method will trigger the barcode scanner for 30 seconds. Once a barcode has been scanned the method will return the barcode as a promise. If no barcode is scanned or there was a error else where the promise will be rejected.

````typescript
try {
    const res = await Evexi.tizen.barcode() // string
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

    const res = await Evexi.tizen.printer(data)
} catch (e) {
    //
}
````

The second optional argument can take an object of override settings for the printer. This can be used if the kiosk is on a different serial port or has a different baud rate. One of more overrides can be sent. Default values for everything else will be used. If you want to check what the print settings should be for a particular device you can click the 'SELF' button on the printer to print a test page which lists out what these settings should be for that particular device.

````typescript
await Evexi.tizen.printer('PRINT DATA', {
    port: 'PRINTERPORT1', // 'PRINTERPORT0' | 'PRINTERPORT1' | 'PRINTERPORT2'  // DEFAULT='PRINTERPORT1'
    baudRate: 115200, // DEFAULT=115200
    parity: 'NONE', // 'NONE' | 'ODD' | 'EVEN'  // DEFAULT='NONE'
    dataBits: 'BITS8', // 'BITS5' | 'BITS6' | 'BITS7' | 'BITS8'  // DEFAULT='BITS8'
    stopBits: '1' // '1' | '1.5' | '2'  // DEFAULT='1'
})
````

#

### Serial
Serial methods can be used to communicate with a serial connected device. When writing data it will be sent as provided so if you wish to send hex please convert your string to hex before writing. Each returned message will be 8 bits in length by default.

````typescript
// Messages from the serial device to the Kiosk
Evexi.serial.onMessage(msg => {
    // msg string (hex)
})

// Open the communication port (Top port on Samsung Kiosk)
const res = await Evexi.serial.open('PORT0') // bool

// Write data to the serial port
await Evexi.serial.write('PORT0', data) // bool

// Close the communication port
Evexi.serial.close('PORT0')
````

##
You can override serial port configuration with the second argument to the open method. One or more overrides can be provided.

````typescript
export interface SerialOptions {
    baudRate: number // Default: 9600
    parity: string // Default: 'None'
    dataBits: string // Default: 'BITS8'
    stopBits: string // Default: '1'
}
````

#

### OTI
OTI Telebox can be connected to the Samsung Kiosk on the middle port. Once connected your content can control the device using the pay and cancel methods. Once the Kiosk has established communication 'Welcome' will be displayed on the reader. If for what ever reason the OTI device is not able to process payments it will present 'Not Ready' on the reader and 'Error' will be returned if currently running a transaction.

##

OTI configuration should include the following: Note: OTI should be on firmware 5.2.05 or higher.

````bash
# kiosk mode should be turned on
KIOSK_ENABLED=1
# Shorter messages so less to decode
KIOSK_SHORT_MESSAGES=1

# connected to host via serial
SERIAL_SCRIPT_INTERFACE_ENABLED=1
# reader connected to dex serial port
SERIAL_SCRIPT_INTERFACE_USE_DEX=1

# disable min price
MIN_PRICE_LIMIT=0
````

##
Create a payment. If OTI is not ready to take a payment (no internet connection or updating etc) 'Error' will be returned.
````typescript
try {
    const res = await Evexi.oti.pay(5.20) // Payment for £5.20
    // res = OK | Declined | Error | Timeout | Cancelled
} catch (e) {
    //
}
````
You can override the currency code with the second argument and the timeout with the third. By default the timeout is 60 seconds unless specified.

````typescript
Evexi.oti.pay(0.55, 978, 30) // 0.55 Euros with timeout if no payment within 30 seconds
````

##
You can also cancel a running transaction. When ran you should continue to wait for the response on oti.pay method which should be 'Cancelled' after running this method (if canceled in time). If no transaction is currently running nothing will happen.
````typescript
try {
    Evexi.oti.cancel()
} catch (e) {
    //
}
````