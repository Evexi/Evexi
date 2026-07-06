import { addLog } from "@/hooks/useLogger"
import { TestRunner } from "@/utils/test-runner"
import Evexi from "evexi"
import { parseDocs } from "@/utils/docs"
import documentation from "./docs.md?raw"

const doc = parseDocs(documentation)

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
          // Evexi.helper.receiptGenerator() builds formatted receipt text; chain layout methods then call generate() to produce the data ready for printing
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
            addLog({
              message: 'Receipt printed successfully.',
              type: 'info',
            })

            return true
          }

          addLog({
            message: 'Failed to print receipt.',
            type: 'error',
          })

          return false
        } catch (e) {
          addLog({
            message: 'Failed to print receipt. Trace: ' + e,
            type: 'error',
          })

          return false
        }
      }
    }),
  ]
}

export default new PrinterApp()
