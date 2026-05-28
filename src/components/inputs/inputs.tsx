import { Component, For, Show, createMemo } from 'solid-js'
import { useStore } from '@/hooks/useStore'
import { inputValues, setInputValue } from '@/hooks/useInputStore'
import styles from './style.module.css'

const Inputs: Component = () => {
  const { activeApp, activeAppTest } = useStore()

  const properties = createMemo(() => activeAppTest()?.properties ?? [])

  const getValue = (key: string): unknown => {
    const app = activeApp()
    const test = activeAppTest()
    if (!app || !test) return undefined
    return inputValues()[app.name]?.[test.label]?.[key] ?? test.properties.find(p => p.key === key)?.default
  }

  const handleChange = (key: string, value: unknown) => {
    const app = activeApp()
    const test = activeAppTest()
    if (!app || !test) return
    setInputValue(app.name, test.label, key, value)
  }

  return (
    <Show when={properties().length > 0}>
      <div class={styles.inputs}>
        <For each={properties()}>
          {(prop) => (
            <div class={styles.group}>
              <label class={styles.label} for={prop.key}>{prop.label}</label>
              <Show when={prop.type === 'text'}>
                <input
                  id={prop.key}
                  class={styles.control}
                  type="text"
                  value={getValue(prop.key) as string}
                  onInput={(e) => handleChange(prop.key, e.currentTarget.value)}
                />
              </Show>
              <Show when={prop.type === 'number'}>
                <input
                  id={prop.key}
                  class={`${styles.control} ${styles.number}`}
                  type="number"
                  value={getValue(prop.key) as number}
                  onInput={(e) => handleChange(prop.key, Number(e.currentTarget.value))}
                />
              </Show>
              <Show when={prop.type === 'union'}>
                <select
                  id={prop.key}
                  class={`${styles.control} ${styles.select}`}
                  onChange={(e) => handleChange(prop.key, e.currentTarget.value)}
                >
                  <For each={prop.options ?? []}>
                    {(option) => (
                      <option value={option} selected={getValue(prop.key) === option}>
                        {option}
                      </option>
                    )}
                  </For>
                </select>
              </Show>
            </div>
          )}
        </For>
      </div>
    </Show>
  )
}

export default Inputs
