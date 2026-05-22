import { useStore } from '@/hooks/useStore';
import styles from './style.module.css'
import { Component, For, Show, createEffect, createMemo, createSignal, onCleanup, onMount } from "solid-js";
import { numberFormat } from '@/utils/misc';
import { useLogger, addLog } from '@/hooks/useLogger';

const Logs: Component = () => {
  const { activeApp, activeAppTest } = useStore()
  const { logs } = useLogger()

  const [filters, setFilters] = createSignal({
    info: false,
    error: false,
    warning: false,
  })

  let logsContainer!: HTMLDivElement

  const toggleFilter = (filter: keyof ReturnType<typeof filters>) => {
    setFilters(prev => ({ ...prev, [filter]: !prev[filter] }))
  }

  const formatLogTime = (timestamp: number) => {
    const date = new Date(timestamp)
    return date.toLocaleTimeString()
  }

  const filteredLogs = createMemo(() => {
    const active = Object.entries(filters()).filter(([, v]) => v).map(([k]) => k)
    if (active.length === 0) return logs()
    return logs().filter(log => active.includes(log.type))
  })

  createEffect(() => {
    filteredLogs();
    logsContainer.scrollTo({ top: logsContainer.scrollHeight, behavior: 'smooth' })
  })

  // onMount(() => {
  //   const id = setInterval(() => {
  //     const rand = Math.random()
  //     const type = rand < 0.1 ? 'error' : rand < 0.4 ? 'warning' : 'info'
  //     addLog({
  //       type,
  //       message: `This is a ${type} log message`
  //     })
  //   }, 200)
  //   onCleanup(() => clearInterval(id))
  // })

  return (
    <div class={styles.logs}>
      <div class={styles['logs-nav']}>
        <div class={styles['logs-nav-left']}>
          <Show when={activeApp()}>
            <span class={styles['logs-active-app']}>{activeApp()?.label}
              <Show when={activeAppTest()}>
                {" / "}
                <span class={styles['logs-active-app-test']}>
                  {activeAppTest()?.label}
                </span>
              </Show>
            </span>
            <span class={styles['logs-nav-separator']}>/</span>
          </Show>
          <span class={styles['logs-nav-title']}>Live Logs</span>
          <span class={styles['logs-live-count']}>{numberFormat(logs().length || 0)}</span>
        </div>

        <div class={styles['logs-nav-filter-wrapper']}>
          <div class={styles['logs-nav-filter']} classList={{
            [styles.active]: filters().info
          }} onClick={() => toggleFilter('info')}>
            <div class={`${styles['logs-nav-filter-indicator']} ${styles.info}`}></div>
            <span class={styles['logs-nav-filter-name']}>Info</span>
          </div>
          <div class={styles['logs-nav-filter']} classList={{
            [styles.active]: filters().warning
          }} onClick={() => toggleFilter('warning')}>
            <div class={`${styles['logs-nav-filter-indicator']} ${styles.warning}`}></div>
            <span class={styles['logs-nav-filter-name']}>Warning</span>
          </div>
          <div class={styles['logs-nav-filter']} classList={{
            [styles.active]: filters().error
          }} onClick={() => toggleFilter('error')}>
            <div class={`${styles['logs-nav-filter-indicator']} ${styles.error}`}></div>
            <span class={styles['logs-nav-filter-name']}>Error</span>
          </div>
        </div>
      </div>

      <div class={styles['logs-content-container']} ref={logsContainer}>
        <For each={filteredLogs()}>
          {(log) => <div class={`${styles.log} ${styles[log.type]}`}>
            <span class={styles['log-time']}>{formatLogTime(log.time)}</span>
            <span class={`${styles['log-type']} ${styles[log.type]}`}>{log.type === 'warning' ? 'warn' : log.type}</span>
            <span class={styles['log-message']}>{log.message}</span>
          </div>}
        </For>
      </div>
    </div>
  )
}

export default Logs
