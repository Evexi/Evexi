import { addLog } from "@/hooks/useLogger"
import Evexi from "evexi"

class FsApp implements App {
  name = 'fs'
  label = 'File System'

  tests: AppTest[] = [
    {
      label: 'Put File',
      status: 'pending',
      execute: async () => {
        try {
          const response = await Evexi.fs.put('My Text.txt', 'Hello World!')
          if (response) {
            addLog({
              message: 'File put successfully',
              type: 'info',
            })

            return true
          }

          addLog({
            message: 'Failed to put file',
            type: 'error',
          })

          return false

        } catch (e) {
          addLog({
            message: 'Failed to put file. Trace: ' + e,
            type: 'error',
          })

          return false
        }
      }
    },
    {
      label: 'Get File',
      status: 'pending',
      execute: async () => {
        try {
          const response = await Evexi.fs.get('My Text.txt')

          if (response.data === 'Hello World') {
            addLog({
              message: 'File received successfully. Content matches expected value',
              type: 'info',
            })

            return true
          }

          addLog({
            message: 'File received successfully. Content does not match expected value',
            type: 'warning',
          })

          return false
        } catch (e) {
          addLog({
            message: 'Failed to get file. Trace: ' + e,
            type: 'error',
          })

          return false
        }
      }
    },
    {
      label: 'Check File Exists',
      status: 'pending',
      execute: async () => {
        try {
          const response = await Evexi.fs.exists('My Text.txt')

          if (response) {
            addLog({
              message: 'File exists',
              type: 'info',
            })

            return true
          }

          addLog({
            message: 'File does not exist',
            type: 'warning',
          })

          return false
        } catch (e) {
          addLog({
            message: 'Failed to check file exists. Trace: ' + e,
            type: 'error',
          })

          return false
        }
      }
    },
    {
      label: 'Download File',
      status: 'pending',
      execute: async () => {
        try {
          const response = await Evexi.fs.download('https://www.w3schools.com/html/mov_bbb.mp4', 'My Video.mp4', { bearer: null })

          if (response.error) {
            addLog({
              message: 'Failed to download file. Trace: ' + response.error,
              type: 'error',
            })

            return false
          }

          addLog({
            message: 'File downloaded successfully. Saved to: ' + response.data || 'Unknown path.',
            type: 'info',
          })

          return true
        } catch (e) {
          addLog({
            message: 'Failed to download file. Trace: ' + e,
            type: 'error',
          })

          return false
        }
      }
    },
    {
      label: 'List Files',
      status: 'pending',
      execute: async () => {
        try {
          const files = await Evexi.fs.list()

          if (!files) {
            addLog({
              message: 'No files found.',
              type: 'error',
            })

            return false
          }

          const expected = ['My Video.mp4', 'My Text.txt']

          const hasExpectedFiles = expected.every((file) => files.includes(file))
          if (hasExpectedFiles) {
            addLog({
              message: 'Expected files found: ' + expected.join(', '),
              type: 'info',
            })

            return true
          } else {
            addLog({
              message: 'Expected files not found: ' + expected.join(', '),
              type: 'error',
            })

            return false
          }

        } catch (e) {
          addLog({
            message: 'Failed to list files. Trace: ' + e,
            type: 'error',
          })

          return false
        }
      }
    },
    {
      label: 'Delete File',
      status: 'pending',
      execute: async () => {
        try {
          const response = await Evexi.fs.del('My Video.mp4')
          if (response) {
            addLog({
              message: 'File deleted successfully.',
              type: 'info',
            })

            return true
          }

          addLog({
            message: 'Failed to delete file.',
            type: 'error',
          })

          return false
        } catch (e) {
          addLog({
            message: 'Failed to delete file. Trace: ' + e,
            type: 'error',
          })

          return false
        }
      }
    },
    {
      label: 'List Files',
      status: 'pending',
      execute: async () => {
        try {
          const files = await Evexi.fs.list()

          if (!files) {
            addLog({
              message: 'No files found.',
              type: 'error',
            })

            return false
          }

          const expected = ['My Text.txt']

          const hasExpectedFiles = expected.every((file) => files.includes(file))
          if (hasExpectedFiles) {
            addLog({
              message: 'Expected files found: ' + expected.join(', '),
              type: 'info',
            })

            return true
          } else {
            addLog({
              message: 'Expected files not found: ' + expected.join(', '),
              type: 'error',
            })

            return false
          }

        } catch (e) {
          addLog({
            message: 'Failed to list files. Trace: ' + e,
            type: 'error',
          })

          return false
        }
      }
    },
    {
      label: 'Clear Files',
      status: 'pending',
      execute: async () => {
        try {
          const response = await Evexi.fs.clear()

          if (response === 0) {
            addLog({
              message: 'No files were cleared.',
              type: 'error',
            })

            return false
          }

          if (response === 1) {
            addLog({
              message: 'Files cleared.',
              type: 'info',
            })

            return true

          }

          addLog({
            message: 'Unexpected response: ' + response,
            type: 'warning',
          })

          return true
        } catch (e) {
          addLog({
            message: 'Trace: ' + e,
            type: 'error',
          })

          return false
        }
      }
    }
  ]
}

export default new FsApp()
