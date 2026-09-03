# Generate Receipt

Builds formatted receipt text for the Samsung Kiosk integrated printer. Chain layout methods to design the receipt, then call `generate()` to produce the final output ready for `Evexi.printer.print()`.

```typescript
const data = new Evexi.helper.receiptGenerator()
  .blank(2)
  .centre('COMPANY NAME')
  .fill('*')
  .stretch('Total', '£11.00')
  .blank(2)
  .centre('THANK YOU')
  .generate()
```

**Available methods:** `blank(n)`, `centre(text)`, `left(text)`, `right(text)`, `stretch(left, right)`, `fill(char)`, `inject(data)`, `generate()`

# Star Receipt Generator

Builds richly-styled receipts for Star Micronics printers. Unlike `receiptGenerator` (which produces plain text for the Samsung Kiosk printer), this generator supports per-line font sizing, weight, underline, images and QR codes. Chain layout methods, then call `build()` to produce the `Buffer` ready for `Evexi.printer.print()`.

```typescript
const generator = new Evexi.helper.starReceiptGenerator()

// image() is async — it rasterises a base64 image before chaining continues
await generator.image(base64Png)

const buffer = generator
  .blank(1)
  .center('COMPANY NAME', { fontSize: 2, fontWeight: 'bold' })
  .stretch({ content: 'Total', styles: { fontWeight: 'bold' } }, { content: '£11.00', styles: { fontWeight: 'bold' } })
  .blank(1)
  .center('Scan for more info:')
  .qrCode('https://evexi.com', 4)
  .blank(3)
  .build()

await Evexi.printer.print(buffer)
```

**Text styles** (`ReceiptTextStyles`, optional second argument): `fontSize` (number), `fontWeight` (`normal` | `bold`), `underline` (boolean).

**Available methods:** `left(text, styles?)`, `center(text, styles?)`, `right(text, styles?)`, `stretch(left, right, lineWidth?)`, `qrCode(url, size?)`, `image(base64)` *(async)*, `blank(n)`, `fill(char, lineWidth?)`, `reset()`, `build()`
