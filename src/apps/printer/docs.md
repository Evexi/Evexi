# Print Receipt

Generates a receipt using the receipt generator helper and sends it to the connected printer. Supported printers: Samsung Kiosk integrated printer and Star Micronics.

```typescript
const data = new Evexi.helper.receiptGenerator()
  .centre('TITLE')
  .generate()

const success = await Evexi.printer.print(data)
```

**Optional override parameters** (second argument):
- `port` — `PRINTERPORT0`, `PRINTERPORT1` (default), `PRINTERPORT2`
- `baudRate` — default `115200`
- `parity` — `NONE` (default), `ODD`, `EVEN`

Use the title input above to customise the receipt header.

# Print Styled Text

Prints a single line of text on a Star Micronics printer using the `starReceiptGenerator`, honouring the alignment, font size, weight and underline selected above.

```typescript
const buffer = new Evexi.helper.starReceiptGenerator()
  .center('Hello World!', { fontSize: 2, fontWeight: 'bold', underline: true })
  .build()

await Evexi.printer.print(buffer)
```

Alignment is applied by calling `left()`, `center()` or `right()`. The `styles` object accepts `fontSize` (number), `fontWeight` (`normal` | `bold`) and `underline` (boolean).

# Print All Alignments

Demonstrates all three alignments in a single receipt.

```typescript
const buffer = new Evexi.helper.starReceiptGenerator()
  .left('Left: Hello World!')
  .blank(1)
  .center('Center: Hello World!')
  .blank(1)
  .right('Right: Hello World!')
  .build()

await Evexi.printer.print(buffer)
```

# Print QR Code

Renders a scannable QR code. The second argument controls the module size.

```typescript
const buffer = new Evexi.helper.starReceiptGenerator()
  .qrCode('https://evexi.com', 3)
  .build()

await Evexi.printer.print(buffer)
```

# Print QR Code with Text

Combines a heading, a QR code and a caption.

```typescript
const buffer = new Evexi.helper.starReceiptGenerator()
  .center('Scan the QR Code', { fontSize: 2, fontWeight: 'bold' })
  .blank(1)
  .qrCode('https://evexi.com', 3)
  .blank(1)
  .center('Scan me!')
  .build()

await Evexi.printer.print(buffer)
```

# Print Logo

Prints an image at the top of the receipt. `image()` is asynchronous and expects a base64 data URL — remote URLs are rasterised via a canvas before being passed in. Leave the input blank to use the bundled Evexi logo.

```typescript
const generator = new Evexi.helper.starReceiptGenerator()
await generator.image(base64Png)

await Evexi.printer.print(generator.build())
```

# Print Logo with Text

Prints a logo followed by a caption.

```typescript
const generator = new Evexi.helper.starReceiptGenerator()
await generator.image(base64Png)

const buffer = generator
  .blank(1)
  .center('Welcome to Evexi!', { fontSize: 2 })
  .build()

await Evexi.printer.print(buffer)
```

# Print Full Receipt

An end-to-end example: a logo, order details, itemised lines built with `stretch()`, a total and a QR code footer.

```typescript
const generator = new Evexi.helper.starReceiptGenerator()
await generator.image(base64Png)

generator
  .blank(1)
  .center('Order Number', { fontSize: 1.5 })
  .center('#7719', { fontSize: 2, fontWeight: 'bold' })
  .blank(1)
  .center('PURCHASE ITEMS', { fontSize: 1, fontWeight: 'bold', underline: true })

generator.stretch({ content: 'Item 1' }, { content: '(1) £10.00' })

const buffer = generator
  .blank(1)
  .left('Total:', { fontWeight: 'bold' })
  .right('£30.00', { fontWeight: 'bold' })
  .blank(1)
  .center('Scan for more info:')
  .qrCode('https://evexi.com', 4)
  .blank(3)
  .build()

await Evexi.printer.print(buffer)
```

# Print Blank Lines

Feeds a number of empty lines — useful for spacing or advancing the paper. Set the number of lines above.

```typescript
const buffer = new Evexi.helper.starReceiptGenerator()
  .blank(5)
  .build()

await Evexi.printer.print(buffer)
```
