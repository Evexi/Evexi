import { addLog } from "@/hooks/useLogger"
import { TestCase } from "@/utils/testCase"
import Evexi from "evexi"

class MiscApp implements App {
  name = 'misc'
  label = 'Misc'

  tests: AppTest[] = [
    new TestCase({
      label: 'Get Info',
      documentation: `# Get Info

Returns general information about the player the content is running on.

\`\`\`typescript
const info = await Evexi.info()
// { deviceId: 'abc123', version: '2.9.0', provider: 'WebOS' }
\`\`\`

- **deviceId** — unique identifier for the device
- **version** — current Evexi player software version
- **provider** — the platform the player is running on (e.g. \`WebOS\`, \`Tizen\`, \`HTML\`)`,
      properties: [],
      async execute() {
        try {
          // Evexi.info() returns device details including the deviceId, software version, and platform provider
          const info = await Evexi.info()

          if (info.deviceId && info.version && info.provider) {
            addLog({
              message: `Info received. Device ID: ${info.deviceId}, Version: ${info.version}, Provider: ${info.provider}`,
              type: 'info',
            })

            return true
          }

          addLog({
            message: 'Info received but one or more expected fields are missing.',
            type: 'warning',
          })

          return false
        } catch (e) {
          addLog({
            message: 'Failed to get info. Trace: ' + e,
            type: 'error',
          })

          return false
        }
      }
    }),

    new TestCase({
      label: 'Write Log',
      documentation: `# Write Log

Injects a message directly into the player's log file. Useful for debugging content behaviour from the admin portal.

\`\`\`typescript
Evexi.log('Something happened in my content.')
\`\`\`

Failed download events are also automatically written to the log by the API middleware.`,
      properties: [
        { key: 'message', label: 'Message', type: 'text', default: 'Test log entry from Evexi API test suite.' },
      ],
      async execute() {
        const message = this.getProperty<string>('message')
        try {
          // Evexi.log() injects a message directly into the player's log file
          Evexi.log(message)

          addLog({
            message: 'Log entry written successfully.',
            type: 'info',
          })

          return true
        } catch (e) {
          addLog({
            message: 'Failed to write log entry. Trace: ' + e,
            type: 'error',
          })

          return false
        }
      }
    }),
  ]
}

export default new MiscApp()
