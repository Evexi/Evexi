import styles from './style.module.css'
import { Component, createMemo, createSignal, For, Show } from "solid-js";
import { useStore } from '@/hooks/useStore';
import apps from '@/utils/registry';

const handleRunAll = () => {
  // TODO: run all apps
}

const handleTestClick = (app: App, test: App['tests'][number]) => {
  // TODO: handle test click
}

const Sidebar: Component = () => {
  const { activeApp, setActiveApp, activeAppTest, setActiveAppTest } = useStore()

  const allApps = createMemo(() => Object.values(apps).map(m => m.default))
  const totalCases = createMemo(() => allApps().reduce((sum, a) => sum + a.tests.length, 0))

  const [expanded, setExpanded] = createSignal<Set<string>>(
    new Set(activeApp() ? [activeApp()!.name] : [])
  )

  const toggleApp = (name: string) => {
    setExpanded(prev => {
      const next = new Set(prev)
      if (next.has(name)) next.delete(name)
      else next.add(name)
      return next
    })
  }

  const errorCount = (app: App) => app.tests.filter(t => t.status === 'error').length

  return (
    <div class={styles.sidebar}>

      <div class={styles.autorunCard}>
        <div class={styles.autorunHeader}>
          <span class={styles.autorunTitle}>Global autorun</span>
          <span class={styles.autorunMeta}>{allApps().length} apps · {totalCases()} cases</span>
        </div>
        <button class={styles.runAllBtn} onClick={handleRunAll}>
          <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 8.5L10 12.5L3 16.5V8.5Z" />
            <path d="M10 8.5L17 12.5L10 16.5V8.5Z" />
          </svg>
          Run all apps
        </button>
      </div>

      <div class={styles.appList}>
        <For each={allApps()}>
          {(app) => (
            <div class={styles.appSection}>
              <div class={styles.appRow} onClick={() => toggleApp(app.name)}>
                <div class={styles.appRowLeft}>
                  <svg
                    class={styles.chevron}
                    classList={{ [styles.chevronOpen]: expanded().has(app.name) }}
                    viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <svg class={styles.appIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 7C3 5.89543 3.89543 5 5 5H9.58579C9.851 5 10.1054 5.10536 10.2929 5.29289L11.7071 6.70711C11.8946 6.89464 12.149 7 12.4142 7H19C20.1046 7 21 7.89543 21 9V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V7Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
                  </svg>
                  <span class={styles.appLabel}>{app.label}</span>
                </div>
                <div class={styles.appBadges}>
                  <Show when={errorCount(app) > 0}>
                    <span class={`${styles.badge} ${styles.badgeError}`}>{errorCount(app)}</span>
                  </Show>
                  <span class={`${styles.badge} ${styles.badgeCount}`}>{app.tests.length}</span>
                </div>
              </div>

              <Show when={expanded().has(app.name)}>
                <div class={styles.testList}>
                  <For each={app.tests}>
                    {(test) => (
                      <div
                        class={styles.testRow}
                        classList={{ [styles.testRowActive]: activeAppTest() === test }}
                        onClick={() => { setActiveApp(app); setActiveAppTest(test); handleTestClick(app, test) }}
                      >
                        <div
                          class={styles.statusDot}
                          classList={{
                            [styles.statusSuccess]: test.status === 'success',
                            [styles.statusError]: test.status === 'error',
                            [styles.statusRunning]: test.status === 'running',
                          }}
                        />
                        <span class={styles.testLabel}>{test.label}</span>
                        <Show when={test.duration !== undefined}>
                          <span class={styles.testDuration}>{test.duration}ms</span>
                        </Show>
                      </div>
                    )}
                  </For>
                </div>
              </Show>
            </div>
          )}
        </For>
      </div>

    </div>
  )
}

export default Sidebar
