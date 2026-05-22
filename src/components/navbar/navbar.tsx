import styles from './style.module.css'
import { Component, Show } from "solid-js";

import Logo from "/logo.svg"
import { useConnection } from '@/hooks/useConnection';
import { useStore } from '@/hooks/useStore';
import { useLogger, clearLogs } from '@/hooks/useLogger';
import apps from '@/utils/registry';

const Navbar: Component = () => {
  const connected = useConnection()
  const { info, docsVisible, setDocsVisible, setIsRunning, setActiveApp, setActiveAppTest, setResultsVisible } = useStore()
  const { errors, warnings } = useLogger()

  const toggleDocsVisible = () => {
    setDocsVisible(prev => !prev)
  }

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

  return (
    <div class={styles.navbar}>
      <img src={Logo} alt="Logo" />
      <div>

        <Show when={errors().length > 0 || warnings().length > 0}>
          <div class={styles['logs-info']} onClick={() => setResultsVisible(true)}>
            <Show when={warnings().length > 0}>
              <div class={styles['logs-info-warnings']}>
                <span>{warnings().length}</span>
                <svg fill="currentColor" viewBox="-5.5 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="currentColor"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>warning</title> <path d="M10.16 25.92c-2.6 0-8.72-0.24-9.88-2.24-1.28-2.28 2.040-8.24 3.080-10.040 1.040-1.76 4.64-7.56 7.12-7.56 2.8 0 7.24 7.48 8.56 10.12 1.92 3.84 2.48 6.4 1.56 7.6-1.52 2.040-8.96 2.12-10.44 2.12zM10.48 7.72c-0.72 0-3.080 2.36-5.64 6.76-2.76 4.68-3.48 7.72-3.080 8.4 0.32 0.56 3.2 1.4 8.4 1.4 5.44 0 8.64-0.88 9.080-1.48 0.28-0.36 0.040-2.28-1.72-5.84-2.64-5.28-6.12-9.24-7.040-9.24zM10.52 19.2c-0.48 0-0.84-0.36-0.84-0.84v-6.36c0-0.48 0.36-0.84 0.84-0.84s0.84 0.36 0.84 0.84v6.32c0 0.48-0.4 0.88-0.84 0.88zM11.36 21.36c0 0.464-0.376 0.84-0.84 0.84s-0.84-0.376-0.84-0.84c0-0.464 0.376-0.84 0.84-0.84s0.84 0.376 0.84 0.84z"></path> </g></svg>
              </div>
            </Show>
            <Show when={errors().length > 0}>
              <div class={styles['logs-info-errors']}>
                <span>{errors().length}</span>
                <svg viewBox="0 0 25 25" fill="transparent" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12.5 16V14.5M12.5 9V13M20.5 12.5C20.5 16.9183 16.9183 20.5 12.5 20.5C8.08172 20.5 4.5 16.9183 4.5 12.5C4.5 8.08172 8.08172 4.5 12.5 4.5C16.9183 4.5 20.5 8.08172 20.5 12.5Z" stroke="currentColor" stroke-width="1.2"></path> </g></svg>
              </div>
            </Show>
          </div>
        </Show>

        <button class={styles.resetBtn} onClick={handleReset}>
          Reset
        </button>

        <div class={styles.info}>
          <div class={styles['connected-icon']} classList={{
            [styles.connected]: connected()
          }}>
            <div></div>
          </div>
          <span>{info()?.provider || 'Unknown'}</span>
          <span>{info()?.version || 'v3.12.0'}</span>
        </div>
        <div class={styles.divider}></div>
        <svg class={styles['settings-toggle']} onClick={toggleDocsVisible} classList={{
          [styles.toggled]: docsVisible()
        }} viewBox="0 0 24 24" fill="transparent" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M15.75 9H8.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M15.75 15H8.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
      </div>
    </div>
  )
}

export default Navbar;
