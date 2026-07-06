import { addLog } from "@/hooks/useLogger"
import { TestRunner } from "@/utils/test-runner"
import Evexi from "evexi"
import { parseDocs } from "@/utils/docs"
import documentation from "./docs.md?raw"

const doc = parseDocs(documentation)

class CecApp implements App {
  name = 'cec'
  label = 'CEC'
  platforms: Platform[] = ['brightsign']

  tests: AppTest[] = [
    new TestRunner({
      label: 'Send CEC Frame',
      documentation: doc('Send CEC Frame'),
      properties: [
        { key: 'code', label: 'CEC Frame (hex)', type: 'text', default: 'BF822000' },
      ],
      async execute() {
        const code = this.getProperty<string>('code')
        try {
          // Evexi.cec.send() sends a raw HDMI-CEC hex frame to the display; only available on BrightSign with a CEC-enabled display
          const response = await Evexi.cec.send(code)

          if (response.success) {
            addLog({
              message: 'CEC frame sent successfully.',
              type: 'info',
            })

            return true
          }

          addLog({
            message: 'CEC frame send failed. Error: ' + response.error,
            type: 'error',
          })

          return false
        } catch (e) {
          addLog({
            message: 'Failed to send CEC frame. Trace: ' + e,
            type: 'error',
          })

          return false
        }
      }
    }),
  ]
}

export default new CecApp()
