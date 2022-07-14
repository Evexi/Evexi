# Helpers

* [Receipt Generator](#Receipt-generator)

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