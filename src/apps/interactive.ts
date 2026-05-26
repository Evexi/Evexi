import { addLog } from "@/hooks/useLogger"
import { TestRunner } from "@/utils/test-runner"
import Evexi from "evexi"

class InteractiveApp implements App {
  name = 'interactive'
  label = 'Interactive'
  order = 0

  tests: AppTest[] = [
    new TestRunner({
      label: 'Destroy Session',
      documentation: `# Destroy Session

Ends the interactive session and returns the player to its normal playlist. Call this when the user interaction is complete or when the session times out.

\`\`\`typescript
Evexi.interactive.destroy()
\`\`\`

This is also used by the Touch To Engage pattern — assign your content as \`application content\` and call \`destroy()\` when you want to hand control back to the playlist.`,
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
      documentation: `# Create Local Session

Sets up a local interactive session on the player. Passing only \`maxRuntime\` creates a local session with no QR scan required — useful for offline or kiosk-style interactivity.

\`\`\`typescript
const session = await Evexi.interactive.create(180000)
// { sessionId: '...', qr: '', url: '' }
\`\`\`

For a remote session (with QR scan), pass a \`clientUrl\` as the second argument. Use the max runtime input above to adjust the session length in milliseconds.`,
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
      documentation: `# Start Session

Activates the interactive session and pauses the player's playlist on the current content. Call this after creating a session and once any required client has connected.

\`\`\`typescript
Evexi.interactive.start()
\`\`\``,
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
