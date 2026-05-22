import { addLog } from "@/hooks/useLogger"
import { TestRunner } from "@/utils/test-runner"
import Evexi from "evexi"

class HelpersApp implements App {
  name = 'helpers'
  label = 'Helpers'

  tests: AppTest[] = [
    new TestRunner({
      label: 'Generate Receipt',
      documentation: `# Generate Receipt

Builds formatted receipt text for the Samsung Kiosk integrated printer. Chain layout methods to design the receipt, then call \`generate()\` to produce the final output ready for \`Evexi.printer.print()\`.

\`\`\`typescript
const data = new Evexi.helper.receiptGenerator()
  .blank(2)
  .centre('COMPANY NAME')
  .fill('*')
  .stretch('Total', '£11.00')
  .blank(2)
  .centre('THANK YOU')
  .generate()
\`\`\`

**Available methods:** \`blank(n)\`, \`centre(text)\`, \`left(text)\`, \`right(text)\`, \`stretch(left, right)\`, \`fill(char)\`, \`inject(data)\`, \`generate()\``,
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
  ]
}

export default new HelpersApp()
