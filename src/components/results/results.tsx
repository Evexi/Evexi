import styles from './style.module.css'
import { Component, createMemo, For, Show } from 'solid-js'
import { useStore } from '@/hooks/useStore'
import { useLogger } from '@/hooks/useLogger'
import apps from '@/utils/registry'

const Results: Component = () => {
  const { resultsVisible, setResultsVisible } = useStore()
  const { errors, warnings } = useLogger()
  // used only for stats row counts

  const allApps = createMemo(() => Object.values(apps).map(m => m.default))

  const stats = createMemo(() => {
    let passed = 0, failed = 0, pending = 0, total = 0
    for (const app of allApps()) {
      for (const test of app.tests) {
        total++
        if (test.status === 'success') passed++
        else if (test.status === 'error') failed++
        else if (test.status === 'pending') pending++
      }
    }
    return { passed, failed, pending, total }
  })

  const failedTests = createMemo(() =>
    allApps().flatMap(app =>
      app.tests
        .filter(t => t.status === 'error')
        .map(t => ({ app, test: t }))
    )
  )

  const warnedTests = createMemo(() =>
    allApps().flatMap(app =>
      app.tests
        .filter(t => t.status === 'success' && t.logs?.some(l => l.type === 'warning'))
        .map(t => ({ app, test: t }))
    )
  )

  const formatTime = (ms: number) => {
    const d = new Date(ms)
    return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
  }

  return (
    <Show when={resultsVisible()}>
      <div class={styles.overlay} onClick={() => setResultsVisible(false)}>
        <div class={styles.modal} onClick={e => e.stopPropagation()}>

          <div class={styles.corner} data-pos="tl" />
          <div class={styles.corner} data-pos="tr" />
          <div class={styles.corner} data-pos="bl" />
          <div class={styles.corner} data-pos="br" />

          <div class={styles.header}>
            <div class={styles.headerLeft}>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 11L12 14L22 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M21 12V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <span>Run Summary</span>
            </div>
            <button class={styles.closeBtn} onClick={() => setResultsVisible(false)}>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
              </svg>
            </button>
          </div>

          {/* Stats row */}
          <div class={styles.statsRow}>
            <div class={`${styles.stat} ${styles.statTotal}`}>
              <span class={styles.statValue}>{stats().total}</span>
              <span class={styles.statLabel}>Total</span>
            </div>
            <div class={`${styles.stat} ${styles.statPassed}`}>
              <span class={styles.statValue}>{stats().passed}</span>
              <span class={styles.statLabel}>Passed</span>
            </div>
            <div class={`${styles.stat} ${styles.statFailed}`}>
              <span class={styles.statValue}>{stats().failed}</span>
              <span class={styles.statLabel}>Failed</span>
            </div>
            <div class={`${styles.stat} ${styles.statPending}`}>
              <span class={styles.statValue}>{stats().pending}</span>
              <span class={styles.statLabel}>Pending</span>
            </div>
            <div class={`${styles.stat} ${styles.statWarnings}`}>
              <span class={styles.statValue}>{warnings().length}</span>
              <span class={styles.statLabel}>Warnings</span>
            </div>
            <div class={`${styles.stat} ${styles.statErrors}`}>
              <span class={styles.statValue}>{errors().length}</span>
              <span class={styles.statLabel}>Errors</span>
            </div>
          </div>

          <div class={styles.body}>

            {/* Failed Tests */}
            <Show when={failedTests().length > 0}>
              <div class={styles.section}>
                <div class={styles.sectionTitle}>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 8V12M12 16H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                  </svg>
                  Failed Tests
                  <span class={styles.sectionCount}>{failedTests().length}</span>
                </div>
                <div class={styles.testList}>
                  <For each={failedTests()}>
                    {({ app, test }) => (
                      <div class={styles.testCard}>
                        <div class={styles.testCardHeader}>
                          <div class={styles.testRowLeft}>
                            <span class={styles.appTag}>{app.label}</span>
                            <span class={styles.testName}>{test.label}</span>
                          </div>
                          <Show when={test.duration !== undefined}>
                            <span class={styles.duration}>{test.duration}ms</span>
                          </Show>
                        </div>
                        <Show when={test.logs && test.logs.length > 0}>
                          <div class={styles.inlineLogs}>
                            <For each={test.logs}>
                              {(log) => (
                                <div class={`${styles.inlineLog} ${log.type === 'error' ? styles.inlineLogError : styles.inlineLogWarning}`}>
                                  <span class={styles.inlineLogType}>{log.type}</span>
                                  <span class={styles.inlineLogTime}>{formatTime(log.time)}</span>
                                  <span class={styles.inlineLogMessage}>{log.message}</span>
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
            </Show>

            {/* Tests that passed but produced warnings */}
            <Show when={warnedTests().length > 0}>
              <div class={styles.section}>
                <div class={styles.sectionTitle}>
                  <svg viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.16 25.92c-2.6 0-8.72-0.24-9.88-2.24-1.28-2.28 2.040-8.24 3.080-10.040 1.040-1.76 4.64-7.56 7.12-7.56 2.8 0 7.24 7.48 8.56 10.12 1.92 3.84 2.48 6.4 1.56 7.6-1.52 2.040-8.96 2.12-10.44 2.12zM10.48 7.72c-0.72 0-3.080 2.36-5.64 6.76-2.76 4.68-3.48 7.72-3.080 8.4 0.32 0.56 3.2 1.4 8.4 1.4 5.44 0 8.64-0.88 9.080-1.48 0.28-0.36 0.040-2.28-1.72-5.84-2.64-5.28-6.12-9.24-7.040-9.24zM10.52 19.2c-0.48 0-0.84-0.36-0.84-0.84v-6.36c0-0.48 0.36-0.84 0.84-0.84s0.84 0.36 0.84 0.84v6.32c0 0.48-0.4 0.88-0.84 0.88zM11.36 21.36c0 0.464-0.376 0.84-0.84 0.84s-0.84-0.376-0.84-0.84c0-0.464 0.376-0.84 0.84-0.84s0.84 0.376 0.84 0.84z" />
                  </svg>
                  Passed with Warnings
                  <span class={styles.sectionCount}>{warnedTests().length}</span>
                </div>
                <div class={styles.testList}>
                  <For each={warnedTests()}>
                    {({ app, test }) => (
                      <div class={styles.testCard}>
                        <div class={styles.testCardHeader}>
                          <div class={styles.testRowLeft}>
                            <span class={styles.appTag}>{app.label}</span>
                            <span class={styles.testName}>{test.label}</span>
                          </div>
                          <Show when={test.duration !== undefined}>
                            <span class={styles.duration}>{test.duration}ms</span>
                          </Show>
                        </div>
                        <div class={styles.inlineLogs}>
                          <For each={test.logs!.filter(l => l.type === 'warning')}>
                            {(log) => (
                              <div class={`${styles.inlineLog} ${styles.inlineLogWarning}`}>
                                <span class={styles.inlineLogType}>{log.type}</span>
                                <span class={styles.inlineLogTime}>{formatTime(log.time)}</span>
                                <span class={styles.inlineLogMessage}>{log.message}</span>
                              </div>
                            )}
                          </For>
                        </div>
                      </div>
                    )}
                  </For>
                </div>
              </div>
            </Show>

            <Show when={failedTests().length === 0 && warnedTests().length === 0}>
              <div class={styles.allClear}>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <span>All tests passed with no issues</span>
              </div>
            </Show>

          </div>
        </div>
      </div>
    </Show>
  )
}

export default Results
