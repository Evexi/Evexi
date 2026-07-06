import { addLog } from "@/hooks/useLogger"
import { TestRunner } from "@/utils/test-runner"
import Evexi from "evexi"
import { parseDocs } from "@/utils/docs"
import documentation from "./docs.md?raw"

const doc = parseDocs(documentation)

class FsApp implements App {
  name = 'fs'
  label = 'File System'

  tests: AppTest[] = [
    new TestRunner({
      label: 'Put File',
      documentation: doc('Put File'),
      properties: [
        { key: 'filename', label: 'Filename', type: 'text', default: 'My JSON.json' },
        { key: 'content', label: 'Content', type: 'text', default: '{"content": "Hello World!"}' },
      ],
      async execute() {
        const filename = this.getProperty<string>('filename')
        const content = this.getProperty<string>('content')
        try {
          // Evexi.fs.put() stores a text or JSON file in the player's local storage; the second argument can be a string, object, or boolean
          const response = await Evexi.fs.put(filename, content)
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
    }),

    new TestRunner({
      label: 'Get File',
      documentation: doc('Get File'),
      properties: [
        { key: 'filename', label: 'Filename', type: 'text', default: 'My JSON.json' },
        { key: 'expected', label: 'Expected Content', type: 'text', default: 'Hello World!' },
      ],
      async execute() {
        const filename = this.getProperty<string>('filename')
        const expected = this.getProperty<string>('expected')
        try {
          // Evexi.fs.get() retrieves a file from local storage; returns an object with 'data', 'type', 'name', and 'error' fields
          const response = await Evexi.fs.get(filename)

          if (response.error) {
            addLog({
              message: 'Failed to get file: ' + response.error,
              type: 'error',
            })

            return false
          }

          const parsed = JSON.parse(response.data ?? '{}')

          if (parsed.content === expected) {
            addLog({
              message: 'File received successfully. Content matches expected value',
              type: 'info',
            })

            return true
          }

          addLog({
            message: 'File received successfully. Content does not match expected value. Expected: ' + expected + ' but got: ' + response.data,
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
    }),

    new TestRunner({
      label: 'Check File Exists',
      documentation: doc('Check File Exists'),
      properties: [
        { key: 'filename', label: 'Filename', type: 'text', default: 'My JSON.json' },
      ],
      async execute() {
        const filename = this.getProperty<string>('filename')
        try {
          // Evexi.fs.exists() checks whether a named file is present in local storage; returns a boolean
          const response = await Evexi.fs.exists(filename)

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
    }),

    new TestRunner({
      label: 'Download File',
      documentation: doc('Download File'),
      properties: [
        { key: 'url', label: 'URL', type: 'text', default: 'https://www.w3schools.com/html/mov_bbb.mp4' },
        { key: 'filename', label: 'Filename', type: 'text', default: 'My Video.mp4' },
      ],
      async execute() {
        const url = this.getProperty<string>('url')
        const filename = this.getProperty<string>('filename')
        try {
          // Evexi.fs.download() fetches a remote file and saves it to local storage; an optional third argument supports bearer token authentication
          const response = await Evexi.fs.download(url, filename, { bearer: null })

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
    }),

    new TestRunner({
      label: 'List Files',
      documentation: doc('List Files'),
      properties: [],
      async execute() {
        try {
          // Evexi.fs.list() returns an array of filenames currently in local storage, or false if an error occurs
          const files = await Evexi.fs.list()

          if (!files) {
            addLog({
              message: 'No files found.',
              type: 'error',
            })

            return false
          }

          const expected = ['My Video.mp4', 'My JSON.json']

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
    }),

    new TestRunner({
      label: 'Delete File',
      documentation: doc('Delete File'),
      properties: [
        { key: 'filename', label: 'Filename', type: 'text', default: 'My Video.mp4' },
      ],
      async execute() {
        const filename = this.getProperty<string>('filename')
        try {
          // Evexi.fs.del() removes a single named file from local storage; returns true on success
          const response = await Evexi.fs.del(filename)
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
    }),

    new TestRunner({
      label: 'List Files (Post-Delete)',
      documentation: doc('List Files (Post-Delete)'),
      properties: [],
      async execute() {
        try {
          // Evexi.fs.list() returns an array of filenames currently in local storage, or false if an error occurs
          const files = await Evexi.fs.list()

          if (!files) {
            addLog({
              message: 'No files found.',
              type: 'error',
            })

            return false
          }

          const expected = ['My JSON.json']

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
    }),

    new TestRunner({
      label: 'Clear Files',
      documentation: doc('Clear Files'),
      properties: [],
      async execute() {
        try {
          // Evexi.fs.clear() deletes all files from local storage and returns the count of items removed
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
    }),
    new TestRunner({
      label: 'List Files (Post-Clear)',
      documentation: doc('List Files'),
      properties: [],
      async execute() {
        try {
          // Evexi.fs.list() returns an array of filenames currently in local storage, or false if an error occurs
          const files = await Evexi.fs.list()

          if (!files) {
            addLog({
              message: 'No files found.',
              type: 'error',
            })

            return false
          }

          if (files.length === 0) {
            addLog({
              message: 'No files found, as expected after clear.',
              type: 'info',
            })

            return true
          }

          addLog({
            message: 'Unexpected files found after clear: ' + files.join(', '),
            type: 'error',
          })

          return false
        } catch (e) {
          addLog({
            message: 'Failed to list files. Trace: ' + e,
            type: 'error',
          })

          return false
        }
      }
    }),
  ]
}

export default new FsApp()
