import './styles/globals.css'

import type { Component } from 'solid-js';
import { onMount } from 'solid-js';
import Loading from '@/components/loading/loading'
import Helper from '@/components/helper/helper';
import Environment from "@/utils/environment"
import Error from './components/error/error';
import { useStore } from '@/hooks/useStore';
import Evexi from 'evexi';
import { runAll, runApp, runSingle } from '@/hooks/useRunner';
import { clearLogs } from '@/hooks/useLogger';
import Navbar from './components/navbar/navbar';
import Sidebar from './components/sidebar/sidebar';
import Logs from './components/logs/logs';
import Docs from './components/docs/docs';
import Results from './components/results/results';
import apps from './utils/registry';

const App: Component = () => {

  const { setInfo, setLoading, setDocsVisible, setActiveApp, setActiveAppTest, setResultsVisible, setLogFilter, setHelperVisible, setIsRunning, setReportsUrl, setError } = useStore()

  const handleReset = () => {
    setIsRunning(false)
    clearLogs()
    const allApps = Object.values(apps).map(m => m.default)
    for (const app of allApps) {
      for (const test of app.tests) {
        test.status = 'pending'
        test.duration = undefined
        test.logs = undefined
      }
    }
    const firstApp = allApps[0] ?? null
    setActiveApp(firstApp)
    setActiveAppTest(firstApp?.tests[0] ?? null)
  }

  const handleRun = (value: string) => {
    if (value === 'all') return runAll()

    const dot = value.indexOf('.')
    if (dot === -1) runApp(value.trim())
    else runSingle(value.slice(0, dot).trim(), value.slice(dot + 1).trim())
  }

  const parseFilter = (value: string | undefined) => ({
    info: value?.split(',').map(s => s.trim()).includes('info') ?? false,
    warning: value?.split(',').map(s => s.trim()).includes('warning') ?? false,
    error: value?.split(',').map(s => s.trim()).includes('error') ?? false,
  })

  onMount(async () => {
    // Start the interactive session
    Evexi.interactive.start()

    try {

      const [environment, info] = await Promise.all([
        Environment.retrieve(),
        Evexi.info(),
        new Promise(resolve => setTimeout(resolve, 5000)),
      ])

      setInfo(info)

      setDocsVisible(environment.docs)
      setHelperVisible(environment.helper)
      setLogFilter(parseFilter(environment.filter))
      setReportsUrl(environment.reportsUrl)
      setResultsVisible(environment.results)

      setActiveApp(apps.fs.default)
      setActiveAppTest(apps.fs.default.tests[0])

      if (environment.run) handleRun(environment.run)
      Environment.listen(['docs', 'helper', 'filter', 'results', 'reset', 'run', 'reports_url'], (item, value) => {
        switch (item) {
          case 'docs': {
            setDocsVisible(value === 'true')
            break
          }
          case 'helper': {
            setHelperVisible(value === 'true')
            break
          }
          case 'filter': {
            setLogFilter(parseFilter(value))
            break
          }
          case 'results': {
            setResultsVisible(value === 'true')
            break
          }
          case 'reset': {
            handleReset()
            break
          }
          case 'run': {
            if (value) handleRun(value)
            break
          }
          case 'reports_url': {
            setReportsUrl(value)
            break
          }
        }
      })
    } catch (e) {
      setError(`Failed to initialise the Evexi application: ${(e as Error).message}`)
    } finally {
      setLoading(false)
    }
  })

  return (
    <div class="wrapper">
      <Loading />
      <Helper />
      <Error />
      <Results />

      <Navbar />
      <div class='main-container'>
        <Sidebar />
        <Logs />
        <Docs />
      </div>
    </div>
  );
};

export default App;
