import { addLog } from "@/hooks/useLogger"
import { TestRunner } from "@/utils/test-runner"
import Evexi from "evexi"
import { parseDocs } from "@/utils/docs"
import documentation from "./docs.md?raw"

const doc = parseDocs(documentation)

class SquareApp implements App {
  name = 'square'
  label = 'Square'

  tests: AppTest[] = [
    new TestRunner({
      label: 'Register Event Listener',
      documentation: doc('Register Event Listener'),
      properties: [],
      async execute() {
        try {
          // Evexi.square.event() registers a callback to receive Square webhook events forwarded by the player (e.g. order updates, payment confirmations, catalog version changes)
          Evexi.square.event((message) => {
            addLog({
              message: 'Square event received: ' + JSON.stringify(message),
              type: 'info',
            })
          })

          addLog({
            message: 'Square event listener registered.',
            type: 'info',
          })

          return true
        } catch (e) {
          addLog({
            message: 'Failed to register Square event listener. Trace: ' + e,
            type: 'error',
          })

          return false
        }
      }
    }),

    new TestRunner({
      label: 'Proxy Request',
      documentation: doc('Proxy Request'),
      properties: [
        { key: 'endpoint', label: 'Endpoint', type: 'text', default: '/square/v2/catalog/list' },
        { key: 'method', label: 'Method', type: 'union', default: 'GET', options: ['GET', 'POST'] },
      ],
      async execute() {
        const endpoint = this.getProperty<string>('endpoint')
        const method = this.getProperty<string>('method')
        try {
          // Evexi.proxy() routes an HTTP request through the Evexi platform to the Square API using the LOCATION, TERMINAL_ID and ENVIRONMENT credentials set on the player
          const response = await Evexi.proxy<any>(endpoint, { method })

          if (response && response.ok) {
            addLog({
              message: 'Square proxy request succeeded.',
              type: 'info',
            })

            return true
          }

          addLog({
            message: 'Square proxy request returned an unsuccessful response.',
            type: 'error',
          })

          return false
        } catch (e) {
          addLog({
            message: 'Failed to complete Square proxy request. Trace: ' + e,
            type: 'error',
          })

          return false
        }
      }
    }),
  ]
}

export default new SquareApp()
