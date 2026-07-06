import { addLog } from "@/hooks/useLogger"
import { TestRunner } from "@/utils/test-runner"
import Evexi from "evexi"
import { parseDocs } from "@/utils/docs"
import documentation from "./docs.md?raw"

const doc = parseDocs(documentation)

class PlayerMessagingApp implements App {
  name = 'playerMessaging'
  label = 'Player Messaging'
  platforms: Platform[] = ['tizen', 'windows', 'linux', 'mac', 'android']

  tests: AppTest[] = [
    new TestRunner({
      label: 'Register Message Listener',
      documentation: doc('Register Message Listener'),
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
      documentation: doc('Send Message'),
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
