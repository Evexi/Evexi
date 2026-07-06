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
