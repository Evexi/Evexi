import { addLog } from "@/hooks/useLogger"
import { TestRunner } from "@/utils/test-runner"
import Evexi from "evexi"
import type { ReceiptTextStyles } from "evexi"
import { parseDocs } from "@/utils/docs"
import documentation from "./docs.md?raw"
import { DEFAULT_LOGO } from "./logo"

const doc = parseDocs(documentation)

// Sends a Star receipt buffer to the connected printer and logs the outcome.
const printStarBuffer = async (buffer: Buffer, label: string): Promise<boolean> => {
  try {
    // Evexi.printer.print() sends the buffer produced by starReceiptGenerator().build() to the connected Star Micronics printer
    const response = await Evexi.printer.print(buffer)

    if (response) {
      addLog({ message: `${label} printed successfully.`, type: 'info' })
      return true
    }

    addLog({ message: `Failed to print ${label.toLowerCase()}.`, type: 'error' })
    return false
  } catch (e) {
    addLog({ message: `Failed to print ${label.toLowerCase()}. Trace: ` + e, type: 'error' })
    return false
  }
}

// Star's image() expects a base64 data URL. Data URLs pass through unchanged; remote URLs are rasterised via a canvas first.
const resolveImageData = async (url: string): Promise<string> => {
  if (url.startsWith('data:image')) return url

  const img = new Image()
  img.crossOrigin = 'Anonymous'
  img.src = url

  return new Promise<string>((resolve, reject) => {
    img.onload = () => {
      const canvas = document.createElement('canvas')
      canvas.width = img.width
      canvas.height = img.height
      const ctx = canvas.getContext('2d')
      if (ctx) {
        ctx.drawImage(img, 0, 0)
        resolve(canvas.toDataURL('image/png'))
      } else {
        reject(new Error('Could not get canvas context'))
      }
    }
    img.onerror = () => reject(new Error('Could not load image: ' + url))
  })
}

class PrinterApp implements App {
  name = 'printer'
  label = 'Printer'
  platforms: Platform[] = ['tizen', 'windows', 'linux', 'mac', 'android']

  tests: AppTest[] = [
    new TestRunner({
      label: 'Print Receipt',
      documentation: doc('Print Receipt'),
      properties: [
        { key: 'title', label: 'Title', type: 'text', default: 'EVEXI TEST PRINT' },
      ],
      async execute() {
        const title = this.getProperty<string>('title')
        try {
          // Evexi.helper.receiptGenerator() builds formatted receipt text for the Samsung Kiosk integrated printer; chain layout methods then call generate()
          const data = new Evexi.helper.receiptGenerator()
            .blank(2)
            .centre(title)
            .centre('API Test Suite')
            .blank(1)
            .stretch('Test:', 'Pass')
            .blank(2)
            .generate()

          // Evexi.printer.print() sends the formatted data to the connected printer (Samsung Kiosk or Star Micronics)
          const response = await Evexi.printer.print(data)

          if (response) {
            addLog({ message: 'Receipt printed successfully.', type: 'info' })
            return true
          }

          addLog({ message: 'Failed to print receipt.', type: 'error' })
          return false
        } catch (e) {
          addLog({ message: 'Failed to print receipt. Trace: ' + e, type: 'error' })
          return false
        }
      }
    }),

    new TestRunner({
      label: 'Print Styled Text',
      documentation: doc('Print Styled Text'),
      properties: [
        { key: 'text', label: 'Text', type: 'text', default: 'Hello World!' },
        { key: 'alignment', label: 'Alignment', type: 'union', default: 'center', options: ['left', 'center', 'right'] },
        { key: 'fontSize', label: 'Font Size', type: 'number', default: 2 },
        { key: 'fontWeight', label: 'Font Weight', type: 'union', default: 'normal', options: ['normal', 'bold'] },
        { key: 'underline', label: 'Underline', type: 'union', default: 'false', options: ['false', 'true'] },
      ],
      async execute() {
        const text = this.getProperty<string>('text')
        const alignment = this.getProperty<'left' | 'center' | 'right'>('alignment')
        const styles: ReceiptTextStyles = {
          fontSize: this.getProperty<number>('fontSize'),
          fontWeight: this.getProperty<'normal' | 'bold'>('fontWeight'),
          underline: this.getProperty<string>('underline') === 'true',
        }
        try {
          // starReceiptGenerator exposes left/center/right(text, styles) with per-line font size, weight and underline
          const generator = new Evexi.helper.starReceiptGenerator()

          if (alignment === 'left') generator.left(text, styles)
          else if (alignment === 'right') generator.right(text, styles)
          else generator.center(text, styles)

          return await printStarBuffer(generator.build(), 'Styled text')
        } catch (e) {
          addLog({ message: 'Failed to print styled text. Trace: ' + e, type: 'error' })
          return false
        }
      }
    }),

    new TestRunner({
      label: 'Print All Alignments',
      documentation: doc('Print All Alignments'),
      properties: [
        { key: 'text', label: 'Text', type: 'text', default: 'Hello World!' },
      ],
      async execute() {
        const text = this.getProperty<string>('text')
        try {
          const buffer = new Evexi.helper.starReceiptGenerator()
            .left(`Left: ${text}`)
            .blank(1)
            .center(`Center: ${text}`)
            .blank(1)
            .right(`Right: ${text}`)
            .build()

          return await printStarBuffer(buffer, 'All alignments')
        } catch (e) {
          addLog({ message: 'Failed to print all alignments. Trace: ' + e, type: 'error' })
          return false
        }
      }
    }),

    new TestRunner({
      label: 'Print QR Code',
      documentation: doc('Print QR Code'),
      properties: [
        { key: 'url', label: 'URL', type: 'text', default: 'https://evexi.com' },
        { key: 'size', label: 'Size', type: 'number', default: 3 },
      ],
      async execute() {
        const url = this.getProperty<string>('url')
        const size = this.getProperty<number>('size')
        try {
          // qrCode(url, size) renders a scannable QR code into the receipt
          const buffer = new Evexi.helper.starReceiptGenerator()
            .qrCode(url, size)
            .build()

          return await printStarBuffer(buffer, 'QR code')
        } catch (e) {
          addLog({ message: 'Failed to print QR code. Trace: ' + e, type: 'error' })
          return false
        }
      }
    }),

    new TestRunner({
      label: 'Print QR Code with Text',
      documentation: doc('Print QR Code with Text'),
      properties: [
        { key: 'url', label: 'URL', type: 'text', default: 'https://evexi.com' },
        { key: 'size', label: 'Size', type: 'number', default: 3 },
        { key: 'text', label: 'Caption', type: 'text', default: 'Scan me!' },
      ],
      async execute() {
        const url = this.getProperty<string>('url')
        const size = this.getProperty<number>('size')
        const text = this.getProperty<string>('text')
        try {
          const buffer = new Evexi.helper.starReceiptGenerator()
            .center('Scan the QR Code', { fontSize: 2, fontWeight: 'bold' })
            .blank(1)
            .qrCode(url, size)
            .blank(1)
            .center(text)
            .build()

          return await printStarBuffer(buffer, 'QR code with text')
        } catch (e) {
          addLog({ message: 'Failed to print QR code with text. Trace: ' + e, type: 'error' })
          return false
        }
      }
    }),

    new TestRunner({
      label: 'Print Logo',
      documentation: doc('Print Logo'),
      properties: [
        { key: 'logoUrl', label: 'Logo URL', type: 'text', default: '' },
      ],
      async execute() {
        const logoUrl = this.getProperty<string>('logoUrl') || DEFAULT_LOGO
        try {
          const data = await resolveImageData(logoUrl)
          const generator = new Evexi.helper.starReceiptGenerator()
          // image() is async as it rasterises the logo; it resolves to the same generator for chaining
          await generator.image(data)

          return await printStarBuffer(generator.build(), 'Logo')
        } catch (e) {
          addLog({ message: 'Failed to print logo. Trace: ' + e, type: 'error' })
          return false
        }
      }
    }),

    new TestRunner({
      label: 'Print Logo with Text',
      documentation: doc('Print Logo with Text'),
      properties: [
        { key: 'logoUrl', label: 'Logo URL', type: 'text', default: '' },
        { key: 'text', label: 'Text', type: 'text', default: 'Welcome to Evexi!' },
      ],
      async execute() {
        const logoUrl = this.getProperty<string>('logoUrl') || DEFAULT_LOGO
        const text = this.getProperty<string>('text')
        try {
          const data = await resolveImageData(logoUrl)
          const generator = new Evexi.helper.starReceiptGenerator()
          await generator.image(data)

          const buffer = generator
            .blank(1)
            .center(text, { fontSize: 2 })
            .build()

          return await printStarBuffer(buffer, 'Logo with text')
        } catch (e) {
          addLog({ message: 'Failed to print logo with text. Trace: ' + e, type: 'error' })
          return false
        }
      }
    }),

    new TestRunner({
      label: 'Print Full Receipt',
      documentation: doc('Print Full Receipt'),
      properties: [
        { key: 'logoUrl', label: 'Logo URL', type: 'text', default: '' },
        { key: 'orderNumber', label: 'Order Number', type: 'text', default: '#7719' },
        { key: 'qrUrl', label: 'QR URL', type: 'text', default: 'https://evexi.com' },
      ],
      async execute() {
        const logoUrl = this.getProperty<string>('logoUrl') || DEFAULT_LOGO
        const orderNumber = this.getProperty<string>('orderNumber')
        const qrUrl = this.getProperty<string>('qrUrl')
        try {
          const now = new Date()
          const formattedDate = new Intl.DateTimeFormat('en-GB', {
            day: '2-digit', month: '2-digit', year: 'numeric',
          }).format(now)
          const formattedTime = new Intl.DateTimeFormat('en-GB', {
            hour: '2-digit', minute: '2-digit',
          }).format(now)
          const dateTimeString = `Date: ${formattedDate} ${formattedTime}`

          const items = [
            { name: 'Item 1', price: '£10.00', quantity: 1, modifiers: ['Add Cherries', 'Option 1'] },
            { name: 'Item 2', price: '£4.00', quantity: 3, modifiers: ['Add Blueberries'] },
            { name: 'Item 3', price: '£5.00', quantity: 2, modifiers: [] },
            { name: 'Item 4', price: '£2.00', quantity: 5, modifiers: ['Option 3'] },
          ]

          const data = await resolveImageData(logoUrl)
          const generator = new Evexi.helper.starReceiptGenerator()
          await generator.image(data)

          generator
            .blank(1)
            .center('Order Number', { fontSize: 1.5 })
            .center(orderNumber, { fontSize: 2, fontWeight: 'bold' })
            .blank(1)
            .right(dateTimeString, { fontSize: 1 })
            .right('Payment ID: 123', { fontSize: 1 })
            .blank(1)
            .center('PURCHASE ITEMS', { fontSize: 1, fontWeight: 'bold', underline: true })

          items.forEach(item => {
            // stretch() places left/right content on the same line, filling the gap between them
            generator.stretch(
              { content: item.name },
              { content: `(${item.quantity}) ${item.price}` },
            )

            item.modifiers.forEach(modifier => {
              generator.left(`  - ${modifier}`, { fontSize: 1 })
            })
          })

          const buffer = generator
            .blank(1)
            .left('--------------------------------')
            .left('Total:', { fontWeight: 'bold' })
            .right('£30.00', { fontWeight: 'bold' })
            .blank(2)
            .center('Thank you for your purchase!', { fontSize: 1 })
            .blank(1)
            .center('Scan for more info:')
            .qrCode(qrUrl, 4)
            .blank(3)
            .build()

          return await printStarBuffer(buffer, 'Full receipt')
        } catch (e) {
          addLog({ message: 'Failed to print full receipt. Trace: ' + e, type: 'error' })
          return false
        }
      }
    }),

    new TestRunner({
      label: 'Print Blank Lines',
      documentation: doc('Print Blank Lines'),
      properties: [
        { key: 'lines', label: 'Lines', type: 'number', default: 5 },
      ],
      async execute() {
        const lines = this.getProperty<number>('lines')
        try {
          // blank(n) feeds n empty lines — useful for spacing or advancing the paper
          const buffer = new Evexi.helper.starReceiptGenerator()
            .blank(lines)
            .build()

          return await printStarBuffer(buffer, 'Blank lines')
        } catch (e) {
          addLog({ message: 'Failed to print blank lines. Trace: ' + e, type: 'error' })
          return false
        }
      }
    }),
  ]
}

export default new PrinterApp()
