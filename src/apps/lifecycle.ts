import { addLog } from "@/hooks/useLogger"
import { TestCase } from "@/utils/testCase"
import Evexi from "evexi"

class LifecycleApp implements App {
  name = 'lifecycle'
  label = 'Lifecycle'

  tests: AppTest[] = [
    new TestCase({
      label: 'Register Playing Handler',
      documentation: `# Register Playing Handler

Registers a callback that fires when the content becomes visible on the display. This is the primary entry point for starting animations, sessions, or any logic that should only run while the content is on screen.

\`\`\`typescript
Evexi.lifecycle.playing((item) => {
  console.log('Now playing:', item.id, item.duration)
})
\`\`\`

The \`item\` object includes the content \`id\`, \`duration\`, \`type\`, and other metadata. Any code placed outside this handler runs when the content loads — before it is visible.`,
      properties: [],
      async execute() {
        try {
          // Evexi.lifecycle.playing() registers a callback that fires when content becomes visible on the display; the item object contains the duration, id, and type
          Evexi.lifecycle.playing((item) => {
            addLog({
              message: 'Playing event received. Item: ' + JSON.stringify(item),
              type: 'info',
            })
          })

          addLog({
            message: 'Playing handler registered successfully.',
            type: 'info',
          })

          return true
        } catch (e) {
          addLog({
            message: 'Failed to register playing handler. Trace: ' + e,
            type: 'error',
          })

          return false
        }
      }
    }),

    new TestCase({
      label: 'Register Stopping Handler',
      documentation: `# Register Stopping Handler

Registers a callback that fires just before the content is hidden and destroyed. Use this for cleanup, resetting state, or stopping timers and intervals.

\`\`\`typescript
Evexi.lifecycle.stopping((item) => {
  clearInterval(myTimer)
  resetUI()
})
\`\`\``,
      properties: [],
      async execute() {
        try {
          // Evexi.lifecycle.stopping() registers a callback that fires just before content is hidden and destroyed; use this for any cleanup or reset logic
          Evexi.lifecycle.stopping((item) => {
            addLog({
              message: 'Stopping event received. Item: ' + JSON.stringify(item),
              type: 'info',
            })
          })

          addLog({
            message: 'Stopping handler registered successfully.',
            type: 'info',
          })

          return true
        } catch (e) {
          addLog({
            message: 'Failed to register stopping handler. Trace: ' + e,
            type: 'error',
          })

          return false
        }
      }
    }),

    new TestCase({
      label: 'Register Changed Handler',
      documentation: `# Register Changed Handler

Registers a callback that fires each time a new piece of media begins to play on the player. Use this to react to playlist changes — for example, updating a UI overlay or preloading assets for the next item.

\`\`\`typescript
Evexi.lifecycle.changed((item) => {
  console.log('Next item:', item.id)
})
\`\`\``,
      properties: [],
      async execute() {
        try {
          // Evexi.lifecycle.changed() registers a callback that fires each time a new piece of media begins to play on the player
          Evexi.lifecycle.changed((item) => {
            addLog({
              message: 'Changed event received. Item: ' + JSON.stringify(item),
              type: 'info',
            })
          })

          addLog({
            message: 'Changed handler registered successfully.',
            type: 'info',
          })

          return true
        } catch (e) {
          addLog({
            message: 'Failed to register changed handler. Trace: ' + e,
            type: 'error',
          })

          return false
        }
      }
    }),
  ]
}

export default new LifecycleApp()
