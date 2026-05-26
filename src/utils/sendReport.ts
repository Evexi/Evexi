import { useStore } from '@/hooks/useStore'

const sendReport = async (allApps: App[]) => {
  const { reportsUrl } = useStore()
  const url = reportsUrl()
  if (!url) return

  const failed = allApps.reduce<{ app: string; test: App['tests'][number] }[]>((acc, app) => {
    const appFailed = app.tests
      .filter(t => t.status === 'error')
      .map(t => ({ app: app.label, test: t }))
    return acc.concat(appFailed)
  }, [])

  const warned = allApps.reduce<{ app: string; label: string; log: NonNullable<App['tests'][number]['logs']>[number] }[]>((acc, app) => {
    const appWarned = app.tests.reduce<{ app: string; label: string; log: NonNullable<App['tests'][number]['logs']>[number] }[]>((innerAcc, t) => {
      const testWarned = (t.logs ?? [])
        .filter(l => l.type === 'warning')
        .map(l => ({ app: app.label, label: t.label, log: l }))
      return innerAcc.concat(testWarned)
    }, [])
    return acc.concat(appWarned)
  }, [])

  const total = allApps.reduce((n, a) => n + a.tests.length, 0)
  const passed = total - failed.length
  const statusEmoji = failed.length === 0 ? ':white_check_mark:' : ':x:'

  const blocks: object[] = [
    {
      type: 'header',
      text: { type: 'plain_text', text: `${statusEmoji} Autorun Report`, emoji: true },
    },
    {
      type: 'section',
      fields: [
        { type: 'mrkdwn', text: `*Total*\n${total}` },
        { type: 'mrkdwn', text: `*Passed*\n${passed}` },
        { type: 'mrkdwn', text: `*Failed*\n${failed.length}` },
        { type: 'mrkdwn', text: `*Warnings*\n${warned.length}` },
      ],
    },
  ]

  if (failed.length > 0) {
    blocks.push({ type: 'divider' })
    blocks.push({
      type: 'section',
      text: { type: 'mrkdwn', text: '*:x: Failures*' },
    })
    for (let i = 0; i < failed.length; i++) {
      const { app, test } = failed[i]
      const errorLogs = (test.logs ?? []).filter(l => l.type === 'error')
      const detail = errorLogs.length > 0
        ? errorLogs.map(l => `> ${l.message}`).join('\n')
        : '> No error logs captured.'
      blocks.push({
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `*${app} — ${test.label}*${test.duration != null ? ` _(${test.duration}ms)_` : ''}\n${detail}`,
        },
      })
    }
  }

  if (warned.length > 0) {
    blocks.push({ type: 'divider' })
    blocks.push({
      type: 'section',
      text: { type: 'mrkdwn', text: '*:warning: Warnings*' },
    })
    const warningLines = warned.map(w => `• *${w.app} — ${w.label}*: ${w.log.message}`).join('\n')
    blocks.push({
      type: 'section',
      text: { type: 'mrkdwn', text: warningLines },
    })
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
    xhr.send(JSON.stringify({ blocks }))
  })
}

export default sendReport
