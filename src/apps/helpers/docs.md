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
