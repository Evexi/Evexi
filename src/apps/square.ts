import { addLog } from "@/hooks/useLogger"
import { TestCase } from "@/utils/testCase"
import Evexi from "evexi"

class SquareApp implements App {
  name = 'square'
  label = 'Square'

  tests: AppTest[] = [
    new TestCase({
      label: 'Register Event Listener',
      documentation: `# Register Event Listener

Registers a callback to receive Square webhook events forwarded by the player. Supported event types:

- Catalog version updates
- Order creation / updates
- Payment updates
- Terminal checkout updates

\`\`\`typescript
Evexi.square.event((message) => {
  console.log(message) // parsed webhook payload
})
\`\`\`

Requires \`ENVIRONMENT\`, \`LOCATION\`, and \`TERMINAL_ID\` env variables to be set on the player from the admin portal.`,
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

    new TestCase({
      label: 'Proxy Request',
      documentation: `# Proxy Request

Routes an HTTP request through the Evexi platform to the Square API, using the credentials configured on the player. This avoids CORS issues and keeps credentials off the client.

\`\`\`typescript
const res = await Evexi.proxy('/square/v2/catalog/list', { method: 'GET' })
if (res.ok) {
  console.log(res.json)
}
\`\`\`

Requires \`LOCATION\`, \`TERMINAL_ID\`, and \`ENVIRONMENT\` (\`LIVE\` or \`SANDBOX\`) env variables set on the player. Use the endpoint and method inputs above to test a different Square API path.`,
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
