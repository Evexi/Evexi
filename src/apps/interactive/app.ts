import { addLog } from "@/hooks/useLogger"
import { TestRunner } from "@/utils/test-runner"
import Evexi from "evexi"
import { parseDocs } from "@/utils/docs"
import documentation from "./docs.md?raw"

const doc = parseDocs(documentation)

class InteractiveApp implements App {
  name = 'interactive'
  label = 'Interactive'
  order = 0

  tests: AppTest[] = [
    new TestRunner({
      label: 'Destroy Session',
      documentation: doc('Destroy Session'),
      properties: [],
      async execute() {
        try {
          // Evexi.interactive.destroy() ends the interactive session and returns the player to its normal playlist
          Evexi.interactive.destroy()

          addLog({
            message: 'Interactive session destroyed.',
            type: 'info',
          })

          return true
        } catch (e) {
          addLog({
            message: 'Failed to destroy interactive session. Trace: ' + e,
            type: 'error',
          })

          return false
        }
      }
    }),

    new TestRunner({
      label: 'Create Local Session',
      documentation: doc('Create Local Session'),
      properties: [
        { key: 'maxRuntime', label: 'Max Runtime (ms)', type: 'number', default: 180000 },
      ],
      async execute() {
        const maxRuntime = this.getProperty<number>('maxRuntime')
        try {
          // Evexi.interactive.create() sets up an interactive session; passing only maxRuntime creates a local session with no QR scan required
          const response = await Evexi.interactive.create(maxRuntime)

          if (response) {
            addLog({
              message: 'Local interactive session created. Session ID: ' + response.sessionId,
              type: 'info',
            })

            return true
          }

          addLog({
            message: 'Failed to create interactive session.',
            type: 'error',
          })

          return false
        } catch (e) {
          addLog({
            message: 'Failed to create interactive session. Trace: ' + e,
            type: 'error',
          })

          return false
        }
      }
    }),

    new TestRunner({
      label: 'Start Session',
      documentation: doc('Start Session'),
      properties: [],
      async execute() {
        try {
          // Evexi.interactive.start() activates the session and pauses the player's playlist on the current content
          Evexi.interactive.start()

          addLog({
            message: 'Interactive session started.',
            type: 'info',
          })

          return true
        } catch (e) {
          addLog({
            message: 'Failed to start interactive session. Trace: ' + e,
            type: 'error',
          })

          return false
        }
      }
    }),
  ]
}

export default new InteractiveApp()
