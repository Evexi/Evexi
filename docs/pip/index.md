# PIP (Picture In Picture)

The Picture In Picture APIs include the following. Please note this is only currently supported on WebOS platforms.

You can view a [working example here](./src/index.ts).

- [Show](#show)
- [Hide](#hide)

#

### Show

The show method is used to display a single input source on the display. The type and number provided will be platform dependent. Please see: https://webossignage.developer.lge.com/apis/idcap-api/externalinput or https://webossignage.developer.lge.com/apis/scap-api/v1.8-inputsource.


```typescript
try {
  const res = await Evexi.pip.show({ type: "HDMI", number: 1, x: 20, y: '100px', width: 400, height: '20%'});
  // Successful {success: true, error: undefined}
  // Failed {success: false, error: "Error message"}
} catch (e) {
  // Catch error
}
```

#

### Hide

The hide method is used to hide the input source from the display.
```typescript
try {
  const res = await Evexi.pip.hide(); // boolean
} catch (e) {
  // Catch error
}
```

