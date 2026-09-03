import { addLog } from "@/hooks/useLogger"
import { TestRunner } from "@/utils/test-runner"
import Evexi from "evexi"
import { parseDocs } from "@/utils/docs"
import documentation from "./docs.md?raw"

const doc = parseDocs(documentation)

class MiscApp implements App {
  name = 'misc'
  label = 'Misc'

  tests: AppTest[] = [
    new TestRunner({
      label: 'Get Info',
      documentation: doc('Get Info'),
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

    new TestRunner({
      label: 'Write Log',
      documentation: doc('Write Log'),
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
