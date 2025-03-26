# PIP (Picture In Picture)

The Picture In Picture APIs include the following

You can view a [working example here](./src/index.ts).

- [Show](#show)
- [Hide](#hide)

#

### Show

The show method is used to display a single input source on the display.

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

