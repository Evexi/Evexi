import { addLog } from "@/hooks/useLogger"
import { TestRunner } from "@/utils/test-runner"
import Evexi from "evexi"

class CecApp implements App {
  name = 'cec'
  label = 'HDMI-CEC'
  platforms: Platform[] = ['brightsign']

  tests: AppTest[] = [
    new TestRunner({
      label: 'Send CEC Frame',
      documentation: `# Send CEC Frame

Sends a raw HDMI-CEC frame to the display over the HDMI connection. The frame is a hex string following the HDMI-CEC protocol. Only available on BrightSign with a CEC-enabled display.

\`\`\`typescript
// Active Source 2.0.0.0
const response = await Evexi.cec.send('BF822000')
if (response.success) {
  console.log('CEC frame sent')
} else {
  console.error(response.error)
}
\`\`\`

Use the code input above to send a custom raw CEC hex frame.`,
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
