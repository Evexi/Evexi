import { useStore } from '@/hooks/useStore'

type AppLabel = string
type TestLabel = string

interface Summary {
  errors?: Record<AppLabel, Record<TestLabel, string[]>>
  warnings?: Record<AppLabel, Record<TestLabel, string[]>>
}

const sendReport = async (allApps: App[]) => {
  const { reportsUrl } = useStore()
  const url = reportsUrl()
  if (!url) return

  const errors: Record<AppLabel, Record<TestLabel, string[]>> = {}
  const warnings: Record<AppLabel, Record<TestLabel, string[]>> = {}

  for (const app of allApps) {
    for (const test of app.tests) {
      for (const log of test.logs ?? []) {
        if (log.type === 'error') {
          errors[app.label] ??= {}
          errors[app.label][test.label] ??= []
          errors[app.label][test.label].push(log.message)
        } else if (log.type === 'warning') {
          warnings[app.label] ??= {}
          warnings[app.label][test.label] ??= []
          warnings[app.label][test.label].push(log.message)
        }
      }
    }
  }

  const summary: Summary = {}
  if (Object.keys(errors).length > 0) summary.errors = errors
  if (Object.keys(warnings).length > 0) summary.warnings = warnings

  await new Promise<void>((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open('POST', url, true)
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve()
      } else {
        reject(new Error(`Request failed with status ${xhr.status}`))
      }
    }
    xhr.onerror = () => reject(new Error('Network error'))
    xhr.send(JSON.stringify({ summary }))
  })
}

export default sendReport
