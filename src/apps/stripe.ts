import { addLog } from "@/hooks/useLogger"
import { TestRunner } from "@/utils/test-runner"
import Evexi from "evexi"

class StripeApp implements App {
  name = 'stripe'
  label = 'Stripe'

  tests: AppTest[] = [
    new TestRunner({
      label: 'Proxy Request',
      documentation: `# Proxy Request

Routes an HTTP request through the Evexi platform to the Stripe API, using the credentials linked via the admin portal integration page. This avoids CORS issues and keeps secret keys off the client.

\`\`\`typescript
const res = await Evexi.proxy('/stripe/v1/products', { method: 'GET' })
if (res.ok) {
  console.log(res.json)
}
\`\`\`

**Important:** Only run a single proxy request at a time. For POST requests, include a \`body\` in the options:

\`\`\`typescript
const res = await Evexi.proxy('/stripe/v1/payment_intents', {
  method: 'POST',
  body: JSON.stringify({ amount: 1000, currency: 'gbp' }),
})
\`\`\`

Use the endpoint and method inputs above to test a different Stripe API path.`,
      properties: [
        { key: 'endpoint', label: 'Endpoint', type: 'text', default: '/stripe/v1/products' },
        { key: 'method', label: 'Method', type: 'union', default: 'GET', options: ['GET', 'POST'] },
      ],
      async execute() {
        const endpoint = this.getProperty<string>('endpoint')
        const method = this.getProperty<string>('method')
        try {
          // Evexi.proxy() routes an HTTP request through the Evexi platform to the Stripe API using the credentials linked via the admin portal integration page
          const response = await Evexi.proxy<any>(endpoint, { method })

          if (response && response.ok) {
            addLog({
              message: 'Stripe proxy request succeeded.',
              type: 'info',
            })

            return true
          }

          addLog({
            message: 'Stripe proxy request returned an unsuccessful response.',
            type: 'error',
          })

          return false
        } catch (e) {
          addLog({
            message: 'Failed to complete Stripe proxy request. Trace: ' + e,
            type: 'error',
          })

          return false
        }
      }
    }),
  ]
}

export default new StripeApp()
