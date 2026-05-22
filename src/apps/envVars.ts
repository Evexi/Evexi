import { addLog } from "@/hooks/useLogger"
import { TestRunner } from "@/utils/test-runner"
import Evexi from "evexi"

class EnvVarsApp implements App {
  name = 'envVars'
  label = 'Env Variables'

  tests: AppTest[] = [
    new TestRunner({
      label: 'Get Env Variable',
      documentation: `# Get Env Variable

Retrieves a single environment variable assigned to the player from the admin portal.

\`\`\`typescript
const value = await Evexi.env('MY_KEY')
// Returns the value as a string, or undefined if the key is not set
\`\`\`

Environment variables are useful for passing configuration values (API keys, display IDs, feature flags) to content without hardcoding them. Use the key input above to test a specific variable set on this player.`,
      properties: [
        { key: 'key', label: 'Key', type: 'text', default: 'DISPLAY_ID' },
      ],
      async execute() {
        const key = this.getProperty<string>('key')
        try {
          // Evexi.env() retrieves a key-value pair assigned to the player from the admin portal; returns the value or undefined if not set
          const value = await Evexi.env(key)

          if (value !== undefined) {
            addLog({
              message: `Env variable ${key} retrieved: ${value}`,
              type: 'info',
            })

            return true
          }

          addLog({
            message: `Env variable ${key} is not set on this player.`,
            type: 'warning',
          })

          return false
        } catch (e) {
          addLog({
            message: 'Failed to get env variable. Trace: ' + e,
            type: 'error',
          })

          return false
        }
      }
    }),

    new TestRunner({
      label: 'Listen For Env Variable Change',
      documentation: `# Listen For Env Variable Change

Registers a listener that fires whenever the given environment variable's value is updated from the platform. The callback runs automatically whenever the value changes — no polling required.

\`\`\`typescript
Evexi.envChange('MY_KEY', (value) => {
  console.log('Value changed to:', value)
})
\`\`\`

**Note:** Monitoring the same key in multiple locations will cause unexpected behaviour. Only register one listener per key.`,
      properties: [
        { key: 'key', label: 'Key', type: 'text', default: 'DISPLAY_ID' },
      ],
      async execute() {
        const key = this.getProperty<string>('key')
        try {
          // Evexi.envChange() registers a listener that fires whenever the given env variable's value is updated from the platform
          Evexi.envChange(key, (value) => {
            addLog({
              message: `Env variable ${key} changed to: ${value}`,
              type: 'info',
            })
          })

          addLog({
            message: `Env variable change listener registered for ${key}.`,
            type: 'info',
          })

          return true
        } catch (e) {
          addLog({
            message: 'Failed to register env variable change listener. Trace: ' + e,
            type: 'error',
          })

          return false
        }
      }
    }),
  ]
}

export default new EnvVarsApp()
