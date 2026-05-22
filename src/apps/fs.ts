import { addLog } from "@/hooks/useLogger"
import { TestCase } from "@/utils/testCase"
import Evexi from "evexi"

class FsApp implements App {
  name = 'fs'
  label = 'File System'

  tests: AppTest[] = [
    new TestCase({
      label: 'Put File',
      documentation: `# Put File

Writes a file to the player's local storage. The second argument can be a string, object, or boolean — it is automatically encoded on write and decoded on read.

\`\`\`typescript
const success = await Evexi.fs.put('myFile.txt', 'Hello World!')
// Returns true on success, false on failure
\`\`\`

Only \`.txt\` and \`.json\` files are supported. Use the filename and content inputs above to customise this test.`,
      properties: [
        { key: 'filename', label: 'Filename', type: 'text', default: 'My Text.txt' },
        { key: 'content', label: 'Content', type: 'text', default: 'Hello World!' },
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

    new TestCase({
      label: 'Get File',
      documentation: `# Get File

Retrieves a file from local storage and validates its content against the expected value.

\`\`\`typescript
const res = await Evexi.fs.get('myFile.txt')
// { name: 'myFile.txt', data: 'Hello World!', type: 'text', error: null }
\`\`\`

For media files (images, video) \`data\` will be a local file path rather than the file's content.`,
      properties: [
        { key: 'filename', label: 'Filename', type: 'text', default: 'My Text.txt' },
        { key: 'expected', label: 'Expected Content', type: 'text', default: 'Hello World!' },
      ],
      async execute() {
        const filename = this.getProperty<string>('filename')
        const expected = this.getProperty<string>('expected')
        try {
          // Evexi.fs.get() retrieves a file from local storage; returns an object with 'data', 'type', 'name', and 'error' fields
          const response = await Evexi.fs.get(filename)

          if (response.data === expected) {
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
    }),

    new TestCase({
      label: 'Check File Exists',
      documentation: `# Check File Exists

Validates whether a named file is present in local storage.

\`\`\`typescript
const exists = await Evexi.fs.exists('myFile.txt')
// Returns true if the file exists, false otherwise
\`\`\``,
      properties: [
        { key: 'filename', label: 'Filename', type: 'text', default: 'My Text.txt' },
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

    new TestCase({
      label: 'Download File',
      documentation: `# Download File

Downloads a remote file and saves it to local storage. Supported types: \`.html\`, \`.jpg\`, \`.jpeg\`, \`.png\`, \`.mp4\`. If the file already exists it returns as a successful download.

\`\`\`typescript
const res = await Evexi.fs.download('https://example.com/video.mp4', 'video.mp4')
// { url: '...', data: '/path/to/video.mp4', error: null }
\`\`\`

An optional third argument supports bearer token authentication: \`{ bearer: 'Bearer TOKEN' }\`.`,
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

    new TestCase({
      label: 'List Files',
      documentation: `# List Files

Returns all filenames currently in local storage. Expects both the text file and video file from previous tests to be present.

\`\`\`typescript
const files = await Evexi.fs.list()
// ['My Video.mp4', 'My Text.txt'] or false on error
\`\`\`

An empty array is returned if storage is empty. \`false\` indicates an error.`,
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
    }),

    new TestCase({
      label: 'Delete File',
      documentation: `# Delete File

Removes a single named file from local storage.

\`\`\`typescript
const success = await Evexi.fs.del('myFile.txt')
// Returns true on success, false on failure
\`\`\``,
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

    new TestCase({
      label: 'List Files (Post-Delete)',
      documentation: `# List Files (Post-Delete)

Validates that the deleted video file is gone and only the text file remains.

\`\`\`typescript
const files = await Evexi.fs.list()
// Should now only contain ['My Text.txt']
\`\`\``,
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
    }),

    new TestCase({
      label: 'Clear Files',
      documentation: `# Clear Files

Deletes all files from local storage and returns the count of items removed.

\`\`\`typescript
const count = await Evexi.fs.clear()
// Returns the number of files deleted (e.g. 1)
// Returns 0 if storage was already empty
\`\`\``,
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
  ]
}

export default new FsApp()
