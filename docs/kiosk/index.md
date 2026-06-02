# Kiosk

The Samsung Kiosk includes two integrated hardware peripherals both controllable via the Evexi API. Additionally communication to an OTI payment device or communicate with a third party serial device on the additional ports is supported.

See a [working example here](./src/index.ts).

#

* [Barcode](#barcode)

#

### Barcode

This method triggers the integrated barcode scanner for a 30 second period. Following a successful barcode scan, the method will return the barcode as a promise. If no barcode is scanned or there was an error else where the promise will be rejected.

```typescript
try {
  const res = await Evexi.tizen.barcode() // string
} catch (e) {
  //
}
```
