import { useStore } from './useStore'
import { useLogger } from './useLogger'
import apps, { supportsPlatform } from '@/utils/registry'
import sendReport from '@/utils/sendReport'

const allApps = () => {
  const { info } = useStore()
  const platform = info()?.provider
  return Object.values(apps)
    .map((m) => m.default)
    .filter((app) => supportsPlatform(app, platform))
}

const runTest = async (app: App, test: AppTest) => {
  const { isRunning, setActiveApp, setActiveAppTest } = useStore()
  const { logs } = useLogger()

  setActiveApp(app)
  setActiveAppTest(test)
  test.status = 'running'
  test.duration = undefined
  test.logs = undefined
  const logsBefore = logs().length
  const start = Date.now()
  try {
    const [result] = await Promise.all([
      test.execute().then(r => { test.duration = Date.now() - start; return r }),
      new Promise(resolve => setTimeout(resolve, 1500)),
    ])
    if (!isRunning()) return
    test.logs = logs().slice(logsBefore)
    test.status = result ? 'success' : 'error'
  } catch {
    if (!isRunning()) return
    test.duration = Date.now() - start
    test.logs = logs().slice(logsBefore)
    test.status = 'error'
  }
}

export const runAll = async (onAppStart?: (app: App) => void) => {
  const { isRunning, setIsRunning, setResultsVisible } = useStore()

  if (isRunning()) return
  setIsRunning(true)
  for (const app of allApps()) {
    for (const test of app.tests) {
      test.status = 'pending'
      test.duration = undefined
      test.logs = undefined
    }
  }
  for (const app of allApps()) {
    if (!isRunning()) break
    onAppStart?.(app)
    for (const test of app.tests) {
      if (!isRunning()) break
      await runTest(app, test)
    }
  }
  if (isRunning()) {
    setIsRunning(false)
    setResultsVisible(true)
    await sendReport(allApps())
  }
}

export const runApp = async (appKey: string) => {
  const { isRunning, setIsRunning, setResultsVisible, info } = useStore()
  const mod = apps[appKey]
  if (!mod || isRunning()) return
  const app = mod.default
  if (!supportsPlatform(app, info()?.provider)) return
  setIsRunning(true)
  for (const test of app.tests) {
    test.status = 'pending'
    test.duration = undefined
    test.logs = undefined
  }
  for (const test of app.tests) {
    if (!isRunning()) break
    await runTest(app, test)
  }
  if (isRunning()) {
    setIsRunning(false)
    setResultsVisible(true)
    await sendReport(allApps())
  }
}

export const runSingle = async (appKey: string, testLabel: string) => {
  const { isRunning, setIsRunning, setResultsVisible, info } = useStore()
  const mod = apps[appKey]
  if (!mod || isRunning()) return
  const app = mod.default
  if (!supportsPlatform(app, info()?.provider)) return
  const test = app.tests.find(t => t.label.toLowerCase() === testLabel.toLowerCase().trim())
  if (!test) return
  setIsRunning(true)
  test.status = 'pending'
  test.duration = undefined
  test.logs = undefined
  await runTest(app, test)
  if (isRunning()) {
    setIsRunning(false)
    setResultsVisible(true)
    await sendReport(allApps())
  }
}

export { allApps, runTest }
