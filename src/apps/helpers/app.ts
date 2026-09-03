import { addLog } from "@/hooks/useLogger"
import { TestRunner } from "@/utils/test-runner"
import Evexi from "evexi"
import { parseDocs } from "@/utils/docs"
import documentation from "./docs.md?raw"

const doc = parseDocs(documentation)

class HelpersApp implements App {
  name = 'helpers'
  label = 'Helpers'

  tests: AppTest[] = [
    new TestRunner({
      label: 'Generate Receipt',
      documentation: doc('Generate Receipt'),
      properties: [
        { key: 'companyName', label: 'Company Name', type: 'text', default: 'COMPANY NAME' },
        { key: 'location', label: 'Location', type: 'text', default: 'COMPANY LOCATION' },
      ],
      async execute() {
        const companyName = this.getProperty<string>('companyName')
        const location = this.getProperty<string>('location')
        try {
          // Evexi.helper.receiptGenerator() builds receipt text for the Samsung Kiosk integrated printer; chain layout methods then call generate() to produce the final output
          const data = new Evexi.helper.receiptGenerator()
            .blank(2)
            .centre(companyName)
            .centre(location)
            .fill('*')
            .blank(2)
            .stretch('Subtotal', '£10.00')
            .stretch('VAT', '£1.00')
            .stretch('Total', '£11.00')
            .blank(2)
            .centre('THANK YOU')
            .generate()

          if (data) {
            addLog({
              message: 'Receipt generated successfully.',
              type: 'info',
            })

            return true
          }

          addLog({
            message: 'Receipt generator returned empty output.',
            type: 'error',
          })

          return false
        } catch (e) {
          addLog({
            message: 'Failed to generate receipt. Trace: ' + e,
            type: 'error',
          })

          return false
        }
      }
    }),

    new TestRunner({
      label: 'Star Receipt Generator',
      documentation: doc('Star Receipt Generator'),
      properties: [
        { key: 'companyName', label: 'Company Name', type: 'text', default: 'COMPANY NAME' },
        { key: 'location', label: 'Location', type: 'text', default: 'COMPANY LOCATION' },
      ],
      async execute() {
        const companyName = this.getProperty<string>('companyName')
        const location = this.getProperty<string>('location')
        try {
          // Evexi.helper.starReceiptGenerator() builds a receipt for Star Micronics printers with per-line styling; call build() to produce the buffer ready for Evexi.printer.print()
          const buffer = new Evexi.helper.starReceiptGenerator()
            .center(companyName, { fontSize: 2, fontWeight: 'bold' })
            .center(location, { fontSize: 1 })
            .fill('*')
            .blank(1)
            .stretch({ content: 'Subtotal' }, { content: '£10.00' })
            .stretch({ content: 'VAT' }, { content: '£1.00' })
            .stretch({ content: 'Total', styles: { fontWeight: 'bold' } }, { content: '£11.00', styles: { fontWeight: 'bold' } })
            .blank(1)
            .center('THANK YOU')
            .build()

          if (buffer) {
            addLog({
              message: 'Star receipt generated successfully.',
              type: 'info',
            })

            return true
          }

          addLog({
            message: 'Star receipt generator returned empty output.',
            type: 'error',
          })

          return false
        } catch (e) {
          addLog({
            message: 'Failed to generate star receipt. Trace: ' + e,
            type: 'error',
          })

          return false
        }
      }
    }),
  ]
}

export default new HelpersApp()
