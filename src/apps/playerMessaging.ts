import { addLog } from "@/hooks/useLogger"
import { TestRunner } from "@/utils/test-runner"
import Evexi from "evexi"

class PlayerMessagingApp implements App {
  name = 'playerMessaging'
  label = 'Player Messaging'

  tests: AppTest[] = [
    new TestRunner({
      label: 'Register Message Listener',
      documentation: `# Register Message Listener

Registers a callback that fires whenever a message is received from another player in the same group. The message payload includes the sender's IP, the message data, and their player ID.

\`\`\`typescript
Evexi.playerMessaging.onMessage((message) => {
  const { ip, data, deviceId } = message
  console.log(\`Message from \${deviceId}: \${data}\`)
})
\`\`\`

Players must be in the same group on the Evexi CMS and on the same network.`,
      properties: [],
      async execute() {
        try {
          // Evexi.playerMessaging.onMessage() registers a callback that fires when a message is received from another player in the same group; the payload includes ip, data, and deviceId
          Evexi.playerMessaging.onMessage((message) => {
            addLog({
              message: `Message received from player ${message.deviceId} (${message.ip}): ${message.data}`,
              type: 'info',
            })
          })

          addLog({
            message: 'Message listener registered successfully.',
            type: 'info',
          })

          return true
        } catch (e) {
          addLog({
            message: 'Failed to register message listener. Trace: ' + e,
            type: 'error',
          })

          return false
        }
      }
    }),

    new TestRunner({
      label: 'Send Message',
      documentation: `# Send Message

Broadcasts a string message to all other players in the same group. The sender does not receive their own message.

\`\`\`typescript
const response = await Evexi.playerMessaging.send('Hello from player A')
if (response.success) {
  console.log('Message sent')
} else {
  console.error(response.error)
}
\`\`\`

Use the message input above to customise what is broadcast.`,
      properties: [
        { key: 'message', label: 'Message', type: 'text', default: 'Hello from Evexi API test suite.' },
      ],
      async execute() {
        const message = this.getProperty<string>('message')
        try {
          // Evexi.playerMessaging.send() broadcasts a message to all other players in the same group on the Evexi CMS, excluding the sender
          const response = await Evexi.playerMessaging.send(message)

          if (response.success) {
            addLog({
              message: 'Message sent successfully.',
              type: 'info',
            })

            return true
          }

          addLog({
            message: 'Message send failed. Error: ' + response.error,
            type: 'error',
          })

          return false
        } catch (e) {
          addLog({
            message: 'Failed to send message. Trace: ' + e,
            type: 'error',
          })

          return false
        }
      }
    }),
  ]
}

export default new PlayerMessagingApp()
