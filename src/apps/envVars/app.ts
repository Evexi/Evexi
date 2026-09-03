import { addLog } from "@/hooks/useLogger"
import { TestRunner } from "@/utils/test-runner"
import Evexi from "evexi"
import { parseDocs } from "@/utils/docs"
import documentation from "./docs.md?raw"

const doc = parseDocs(documentation)

class EnvVarsApp implements App {
  name = 'envVars'
  label = 'Env Variables'

  tests: AppTest[] = [
    new TestRunner({
      label: 'Get Env Variable',
      documentation: doc('Get Env Variable'),
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
      documentation: doc('Listen For Env Variable Change'),
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
