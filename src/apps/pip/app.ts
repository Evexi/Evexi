import { addLog } from "@/hooks/useLogger"
import { TestRunner } from "@/utils/test-runner"
import Evexi from "evexi"
import { parseDocs } from "@/utils/docs"
import documentation from "./docs.md?raw"

const doc = parseDocs(documentation)

class PipApp implements App {
  name = 'pip'
  label = 'Picture in Picture'
  platforms: Platform[] = ['webos', 'tizen']

  tests: AppTest[] = [
    new TestRunner({
      label: 'Show PIP',
      documentation: doc('Show PIP'),
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
      documentation: doc('Hide PIP'),
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
