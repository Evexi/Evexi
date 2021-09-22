# Kiosk
The Samsung Kiosk has two hardware peripherals both of which can be controlled via the Evexi API.

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