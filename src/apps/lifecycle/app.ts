import { addLog } from "@/hooks/useLogger"
import { TestRunner } from "@/utils/test-runner"
import Evexi from "evexi"
import { parseDocs } from "@/utils/docs"
import documentation from "./docs.md?raw"

const doc = parseDocs(documentation)

class LifecycleApp implements App {
  name = 'lifecycle'
  label = 'Lifecycle'

  tests: AppTest[] = [
    new TestRunner({
      label: 'Register Playing Handler',
      documentation: doc('Register Playing Handler'),
      properties: [],
      async execute() {
        try {
          // Evexi.lifecycle.playing() registers a callback that fires when content becomes visible on the display; the item object contains the duration, id, and type
          Evexi.lifecycle.playing((item) => {
            addLog({
              message: 'Playing event received. Item: ' + JSON.stringify(item),
              type: 'info',
            })
          })

          addLog({
            message: 'Playing handler registered successfully.',
            type: 'info',
          })

          return true
        } catch (e) {
          addLog({
            message: 'Failed to register playing handler. Trace: ' + e,
            type: 'error',
          })

          return false
        }
      }
    }),

    new TestRunner({
      label: 'Register Stopping Handler',
      documentation: doc('Register Stopping Handler'),
      properties: [],
      async execute() {
        try {
          // Evexi.lifecycle.stopping() registers a callback that fires just before content is hidden and destroyed; use this for any cleanup or reset logic
          Evexi.lifecycle.stopping((item) => {
            addLog({
              message: 'Stopping event received. Item: ' + JSON.stringify(item),
              type: 'info',
            })
          })

          addLog({
            message: 'Stopping handler registered successfully.',
            type: 'info',
          })

          return true
        } catch (e) {
          addLog({
            message: 'Failed to register stopping handler. Trace: ' + e,
            type: 'error',
          })

          return false
        }
      }
    }),

    new TestRunner({
      label: 'Register Changed Handler',
      documentation: doc('Register Changed Handler'),
      properties: [],
      async execute() {
        try {
          // Evexi.lifecycle.changed() registers a callback that fires each time a new piece of media begins to play on the player
          Evexi.lifecycle.changed((item) => {
            addLog({
              message: 'Changed event received. Item: ' + JSON.stringify(item),
              type: 'info',
            })
          })

          addLog({
            message: 'Changed handler registered successfully.',
            type: 'info',
          })

          return true
        } catch (e) {
          addLog({
            message: 'Failed to register changed handler. Trace: ' + e,
            type: 'error',
          })

          return false
        }
      }
    }),
  ]
}

export default new LifecycleApp()
