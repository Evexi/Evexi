# Show PIP

Overlays an external input source (e.g. HDMI) in a defined screen region. Only supported on WebOS platforms.

```typescript
const res = await Evexi.pip.show({
  type: 'HDMI',
  number: 1,
  x: 0,
  y: 0,
  width: 400,
  height: 300,
})
// { success: true, error: undefined }
```

Valid input types and numbers are platform-dependent. See the [WebOS SCAP documentation](https://webossignage.developer.lge.com/apis/scap-api/v1.8-inputsource) for reference. Use the inputs above to configure the source and dimensions.

# Hide PIP

Removes the currently visible input source overlay from the display.

```typescript
const success = await Evexi.pip.hide()
// Returns true on success
```
