import { addLog } from "@/hooks/useLogger"
import { TestRunner } from "@/utils/test-runner"
import withTimeout from "@/utils/timeout"
import Evexi from "evexi"
import { parseDocs } from "@/utils/docs"
import documentation from "./docs.md?raw"

const doc = parseDocs(documentation)

class KioskApp implements App {
  name = 'kiosk'
  label = 'Kiosk'
  platforms: Platform[] = ['tizen', 'windows', 'linux', 'mac', 'android']

  tests: AppTest[] = [
    new TestRunner({
      label: 'Barcode Scan',
      documentation: doc('Barcode Scan'),
      properties: [
        { key: 'timeout', label: 'Timeout (ms)', type: 'number', default: 10000 },
      ],
      async execute() {
        const timeout = this.getProperty<number>('timeout')
        try {
          // Evexi.tizen.barcode() waits for the Samsung Kiosk integrated barcode scanner to read a code and returns the scanned string value
          const barcode = await withTimeout(Evexi.tizen.barcode(), timeout)

          if (barcode === null) {
            addLog({
              message: `Barcode scan timed out after ${timeout}ms. No scan was detected.`,
              type: 'warning',
            })

            return true
          }

          if (barcode) {
            addLog({
              message: 'Barcode scanned: ' + barcode,
              type: 'info',
            })

            return true
          }

          addLog({
            message: 'Barcode scan returned an empty result.',
            type: 'error',
          })

          return false
        } catch (e) {
          addLog({
            message: 'Failed to scan barcode. Trace: ' + e,
            type: 'error',
          })

          return false
        }
      }
    }),

    new TestRunner({
      label: 'Open Serial Port',
      documentation: doc('Open Serial Port'),
      properties: [
        { key: 'port', label: 'Port', type: 'union', default: 'PORT0', options: ['PORT0', 'PORT1', 'PORT2'] },
      ],
      async execute() {
        const port = this.getProperty<string>('port')
        try {
          // Evexi.serial.onMessage() registers a callback to receive hex-encoded messages from a device connected via the serial port
          Evexi.serial.onMessage((message) => {
            addLog({
              message: 'Serial message received: ' + message,
              type: 'info',
            })
          })

          // Evexi.serial.open() opens a named serial port (e.g. 'PORT0') and returns true on success
          const response = await Evexi.serial.open(port)

          if (response) {
            addLog({
              message: `Serial port ${port} opened.`,
              type: 'info',
            })

            return true
          }

          addLog({
            message: `Failed to open serial port ${port}.`,
            type: 'error',
          })

          return false
        } catch (e) {
          addLog({
            message: 'Failed to open serial port. Trace: ' + e,
            type: 'error',
          })

          return false
        }
      }
    }),

    new TestRunner({
      label: 'Close Serial Port',
      documentation: doc('Close Serial Port'),
      properties: [
        { key: 'port', label: 'Port', type: 'union', default: 'PORT0', options: ['PORT0', 'PORT1', 'PORT2'] },
      ],
      async execute() {
        const port = this.getProperty<string>('port')
        try {
          // Evexi.serial.close() terminates the connection on the given serial port
          Evexi.serial.close(port)

          addLog({
            message: `Serial port ${port} closed.`,
            type: 'info',
          })

          return true
        } catch (e) {
          addLog({
            message: 'Failed to close serial port. Trace: ' + e,
            type: 'error',
          })

          return false
        }
      }
    }),
  ]
}

export default new KioskApp()
