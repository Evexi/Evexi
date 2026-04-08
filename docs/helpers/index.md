# Helpers

* [Receipt Generator](#Receipt-generator)
* [Star Receipt Generator](#star-receipt-generator)

#

### Receipt Generator
This class can be used to generate receipt text that will fit correctly to the receipt printer on the Samsung Kiosk. The class will return a string with the correct line breaks in the correct places and provides methods to design up the perfect receipt.

````typescript
import Evexi from 'evexi'

const items = new Evexi.helper.receiptGenerator()
  .stretch('Item A', '£2.64')

const data = new Evexi.helper.receiptGenerator()
  .blank(2)
  .centre('COMPANY NAME')
  .centre('COMPANY LOCATION')
  .fill('*')
  .blank(2)
  .right('Address Line 1')
  .right('Address Line 2')
  .right('Address Line 3')
  .right('Address Line 4')
  .right('Address Line 5')
  .blank(2)
  .right(`Date: ${this.date()}`)
  .blank(2)
  .stretch('Payment Details:', 'Payment Confirmation')
  .blank(2)
  .centre('PURCHASE ITEMS')
  .blank()
  .inject(items.generate(false))
  .blank(2)
  .stretch('Subtotal', '£2.00')
  .stretch('VAT', '£0.20')
  .stretch('Total', '£2.20')
  .blank(2)
  .centre('THANK YOU')
  .generate()
````

* [Star Receipt Generator](#Star-Receipt-generator)

#

### Star Receipt Generator
The star printer generator class is used to generate receipts that are designed to be printed on the star printer. It provides methods to design up the perfect receipt and can also include a logo and QR code, as well as different font sizes and weights.

````typescript
import Evexi from 'evexi'

const generator = new Evexi.helper.starReceiptGenerator()

await generator.image(url)

generator
  .blank(1)
  .center('Order Number', { fontSize: 1.5 })
  .center('#7719', { fontSize: 2, fontWeight: 'bold' })
  .blank(1)
  .right(dateTimeString, { fontSize: 1 })
  .right(`Payment ID: 123`, { fontSize: 1 })
  .blank(1)
  .center('PURCHASE ITEMS', { fontSize: 1, fontWeight: 'bold', underline: true })
  .blank(1)
  .left('--------------------------------')
  .left('Total:', { fontWeight: 'bold' })
  .right('$30.00', { fontWeight: 'bold' })
  .blank(2)
  .center('Thank you for your purchase!', { fontSize: 1 })
  .blank(1)
  .center('Scan for more info:')
  .qrCode('URL', 4)
  .blank(3)
  .build()

````

