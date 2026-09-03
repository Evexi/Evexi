import { addLog } from "@/hooks/useLogger"
import { TestRunner } from "@/utils/test-runner"
import Evexi from "evexi"
import { parseDocs } from "@/utils/docs"
import documentation from "./docs.md?raw"

const doc = parseDocs(documentation)

class NexmosphereApp implements App {
  name = 'nexmosphere'
  label = 'Nexmosphere'
  platforms: Platform[] = ['windows', 'linux', 'android', 'tizen', 'brightsign', 'mac']

  tests: AppTest[] = [
    new TestRunner({
      label: 'Open Connection',
      documentation: doc('Open Connection'),
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
      documentation: doc('Write Command'),
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
      documentation: doc('Close Connection'),
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
