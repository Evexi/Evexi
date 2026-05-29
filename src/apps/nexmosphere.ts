import { addLog } from "@/hooks/useLogger"
import { TestRunner } from "@/utils/test-runner"
import Evexi from "evexi"

class NexmosphereApp implements App {
  name = 'nexmosphere'
  label = 'Nexmosphere'
  platforms: Platform[] = ['windows', 'linux', 'android', 'tizen']

  tests: AppTest[] = [
    new TestRunner({
      label: 'Open Connection',
      documentation: `# Open Connection

Establishes a USB connection to the Nexmosphere device. The message listener should always be registered before opening the connection to avoid missing early events.

\`\`\`typescript
Evexi.nexmosphere.onMessage((msg) => {
  // e.g. 'X003A[3]' for a button press on port 003
  console.log(msg)
})

const success = await Evexi.nexmosphere.open()
\`\`\`

Requires Evexi player 2.9.0+ on Windows or Linux.`,
      properties: [],
      async execute() {
        try {
          // Evexi.nexmosphere.onMessage() registers a callback to receive formatted command strings from the controller (e.g. 'X003A[3]' for a button press); register before opening to avoid missing messages
          Evexi.nexmosphere.onMessage((message) => {
            addLog({
              message: 'Nexmosphere message received: ' + message,
              type: 'info',
            })
          })

          // Evexi.nexmosphere.open() establishes a USB connection to the Nexmosphere device; returns true on success
          const response = await Evexi.nexmosphere.open()

          if (response) {
            addLog({
              message: 'Nexmosphere connection opened.',
              type: 'info',
            })

            return true
          }

          addLog({
            message: 'Failed to open Nexmosphere connection.',
            type: 'error',
          })

          return false
        } catch (e) {
          addLog({
            message: 'Failed to open Nexmosphere connection. Trace: ' + e,
            type: 'error',
          })

          return false
        }
      }
    }),

    new TestRunner({
      label: 'Write Command',
      documentation: `# Write Command

Sends a command string to the Nexmosphere controller. Commands follow the Nexmosphere protocol format and can be used to control LEDs, triggers, and other peripherals connected to the controller.

\`\`\`typescript
// Set port 111 to white
await Evexi.nexmosphere.write('X111B[Lc=R99008]')

// Set port 111 to red
await Evexi.nexmosphere.write('X111B[Lc=R99108]')
\`\`\`

Use the command input above to send a custom command to the controller.`,
      properties: [
        { key: 'command', label: 'Command', type: 'text', default: 'X111B[Lc=R99008]' },
      ],
      async execute() {
        const command = this.getProperty<string>('command')
        try {
          // Evexi.nexmosphere.write() sends a command string to the Nexmosphere controller (e.g. to set LED colours on a specific port)
          const response = await Evexi.nexmosphere.write(command)

          if (response) {
            addLog({
              message: 'Nexmosphere command written successfully.',
              type: 'info',
            })

            return true
          }

          addLog({
            message: 'Failed to write Nexmosphere command.',
            type: 'error',
          })

          return false
        } catch (e) {
          addLog({
            message: 'Failed to write Nexmosphere command. Trace: ' + e,
            type: 'error',
          })

          return false
        }
      }
    }),

    new TestRunner({
      label: 'Close Connection',
      documentation: `# Close Connection

Terminates the USB connection to the Nexmosphere device. The player handles this automatically during its own lifecycle, but you can call it manually if needed.

\`\`\`typescript
const success = await Evexi.nexmosphere.close()
\`\`\`

If you intend to re-open the connection, re-register \`onMessage\` first as the listener is cleared on close.`,
      properties: [],
      async execute() {
        try {
          // Evexi.nexmosphere.close() terminates the USB connection to the Nexmosphere device
          const response = await Evexi.nexmosphere.close()

          if (response) {
            addLog({
              message: 'Nexmosphere connection closed.',
              type: 'info',
            })

            return true
          }

          addLog({
            message: 'Failed to close Nexmosphere connection.',
            type: 'error',
          })

          return false
        } catch (e) {
          addLog({
            message: 'Failed to close Nexmosphere connection. Trace: ' + e,
            type: 'error',
          })

          return false
        }
      }
    }),
  ]
}

export default new NexmosphereApp()
