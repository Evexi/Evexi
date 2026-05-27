import { useStore } from '@/hooks/useStore'

interface TestResult {
  label: string
  status: AppTestStatus
  logs: Log[]
}

type Summary = Record<string, TestResult[]>

const sendReport = async (allApps: App[]) => {
  const { reportsUrl, info } = useStore()
  const url = reportsUrl()
  if (!url) return

  const summary: Summary = {}

  for (const app of allApps) {
    summary[app.label] = app.tests.map(test => ({
      label: test.label,
      status: test.status,
      logs: test.logs ?? [],
    }))
  }

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
    xhr.send(JSON.stringify({ summary, info: info() }))
  })
}

export default sendReport
