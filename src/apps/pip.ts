import { addLog } from "@/hooks/useLogger"
import { TestRunner } from "@/utils/test-runner"
import Evexi from "evexi"

class PipApp implements App {
  name = 'pip'
  label = 'Picture in Picture'

  tests: AppTest[] = [
    new TestRunner({
      label: 'Show PIP',
      documentation: `# Show PIP

Overlays an external input source (e.g. HDMI) in a defined screen region. Only supported on WebOS platforms.

\`\`\`typescript
const res = await Evexi.pip.show({
  type: 'HDMI',
  number: 1,
  x: 0,
  y: 0,
  width: 400,
  height: 300,
})
// { success: true, error: undefined }
\`\`\`

Valid input types and numbers are platform-dependent. See the [WebOS SCAP documentation](https://webossignage.developer.lge.com/apis/scap-api/v1.8-inputsource) for reference. Use the inputs above to configure the source and dimensions.`,
      properties: [
        { key: 'type', label: 'Type', type: 'union', default: 'HDMI', options: ['HDMI', 'DVI', 'RGB', 'COMPONENT'] },
        { key: 'number', label: 'Number', type: 'number', default: 1 },
        { key: 'x', label: 'X', type: 'number', default: 0 },
        { key: 'y', label: 'Y', type: 'number', default: 0 },
        { key: 'width', label: 'Width', type: 'number', default: 400 },
        { key: 'height', label: 'Height', type: 'number', default: 300 },
      ],
      async execute() {
        const type = this.getProperty<string>('type')
        const number = this.getProperty<number>('number')
        const x = this.getProperty<number>('x')
        const y = this.getProperty<number>('y')
        const width = this.getProperty<number>('width')
        const height = this.getProperty<number>('height')
        try {
          // Evexi.pip.show() overlays an external input source (e.g. HDMI) in a defined region on screen; type and number are platform-dependent
          const response = await Evexi.pip.show({ type, number, x, y, width, height })

          if (response.success) {
            addLog({
              message: 'PIP shown successfully.',
              type: 'info',
            })

            return true
          }

          addLog({
            message: 'Failed to show PIP. Error: ' + response.error,
            type: 'error',
          })

          return false
        } catch (e) {
          addLog({
            message: 'Failed to show PIP. Trace: ' + e,
            type: 'error',
          })

          return false
        }
      }
    }),

    new TestRunner({
      label: 'Hide PIP',
      documentation: `# Hide PIP

Removes the currently visible input source overlay from the display.

\`\`\`typescript
const success = await Evexi.pip.hide()
// Returns true on success
\`\`\``,
      properties: [],
      async execute() {
        try {
          // Evexi.pip.hide() removes the currently visible input source from the display
          const response = await Evexi.pip.hide()

          if (response) {
            addLog({
              message: 'PIP hidden successfully.',
              type: 'info',
            })

            return true
          }

          addLog({
            message: 'Failed to hide PIP.',
            type: 'error',
          })

          return false
        } catch (e) {
          addLog({
            message: 'Failed to hide PIP. Trace: ' + e,
            type: 'error',
          })

          return false
        }
      }
    }),
  ]
}

export default new PipApp()
