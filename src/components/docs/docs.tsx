import { Component, Show, createMemo } from 'solid-js'
import { useStore } from '@/hooks/useStore'
import parseMarkdown from '@/utils/markdown'
import styles from './style.module.css'

const Docs: Component = () => {
  const { activeApp, activeAppTest, docsVisible } = useStore()

  const html = createMemo(() => {
    const doc = activeAppTest()?.documentation
    return doc ? parseMarkdown(doc) : ''
  })

  return (
    <div class={styles.docs} classList={{ [styles.visible]: docsVisible() }}>
      <div class={styles.header}>
        <Show when={activeAppTest()} fallback={<span class={styles['header-title']}>Documentation</span>}>
          <span class={styles['header-app']}>{activeApp()?.label}</span>
          <span class={styles['header-sep']}>/</span>
          <span class={styles['header-title']}>{activeAppTest()?.label}</span>
        </Show>
      </div>

      <div class={styles.body}>
        <Show
          when={html()}
          fallback={
            <div class={styles.empty}>
              <span>No documentation for this test case.</span>
            </div>
          }
        >
          <div class={styles.content} innerHTML={html()} />
        </Show>
      </div>
    </div>
  )
}

export default Docs
