import styles from './style.module.css'

import { useStore } from "@/hooks/useStore";
import { Component, For, onCleanup, onMount } from "solid-js";
import Logo from "/logo.svg"
import apps from "@/utils/registry";

const ENV_VARS = [
  {
    name: 'autorun',
    values: 'true | false',
    description: 'Automatically runs all test suites when the application starts. Also fires whenever this value is changed to true.',
    example: 'autorun = true',
  },
  {
    name: 'docs',
    values: 'true | false',
    description: 'Shows or hides the documentation panel on the right side of the screen.',
    example: 'docs = true',
  },
  {
    name: 'run',
    values: '{appKey} | {appKey}.{testLabel}',
    description: 'Runs a specific app or an individual test case. Fires whenever this value is changed. Set to an app key to run all tests in that app, or use dot notation to target a single test by its exact label as shown in the sidebar.',
    example: null,
  },
  {
    name: 'reset',
    values: 'any value',
    description: 'Resets all tests back to pending and clears all logs. The actual value does not matter — only the change triggers it. Increment a number each time you want to reset.',
    example: 'reset = 1  →  reset = 2  →  reset = 3',
  },
  {
    name: 'filter',
    values: 'info | warning | error',
    description: 'Pre-sets which log types are visible in the live log panel. Accepts a single value or a comma-separated combination. Leave unset to show all log types.',
    example: 'filter = error,warning',
  },
  {
    name: 'results',
    values: 'true | false',
    description: 'Opens or closes the run summary modal, which shows a breakdown of passed, failed, and warned tests.',
    example: 'results = true',
  },
  {
    name: 'reports_url',
    values: 'URL string',
    description: 'When set, posts a JSON summary report to this URL at the end of every autorun. The payload includes errors and warnings grouped by app and test label.',
    example: null,
  },
  {
    name: 'helper',
    values: 'true | false',
    description: 'Shows or hides this overlay.',
    example: 'helper = false',
  },
]

const Helper: Component = () => {
  const { helperVisible, setHelperVisible } = useStore()

  const appKeys = () => Object.keys(apps)

  onMount(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && helperVisible()) setHelperVisible(false)
    }
    window.addEventListener('keydown', onKeyDown)
    onCleanup(() => window.removeEventListener('keydown', onKeyDown))
  })

  return (
    <div class={styles.helper} classList={{ [styles.visible]: helperVisible() }}>
      <div class={styles.content}>

        <div class={styles.header}>
          <div class={styles.logoWrap}>
            <img src={Logo} alt="Logo" />
          </div>
          <div class={styles.headerText}>
            <span class={styles.title}>QA Helper</span>
            <span class={styles.subtitle}>Set these variables from the device or group settings in the Evexi admin portal. Changes take effect immediately — no restart required.</span>
          </div>
        </div>

        <div class={styles.divider} />

        <div class={styles.vars}>
          <For each={ENV_VARS}>
            {(v) => (
              <div class={styles.var}>
                <div class={styles.varHeader}>
                  <span class={styles.varName}>{v.name}</span>
                  <span class={styles.varValues}>{v.values}</span>
                </div>
                <p class={styles.varDesc}>{v.description}</p>
                {v.name === 'run' && (
                  <div class={styles.varAppKeys}>
                    <span class={styles.varAppKeysLabel}>Available app keys:</span>
                    <div class={styles.varAppKeysList}>
                      <For each={appKeys()}>
                        {(key) => <span class={styles.varAppKey}>{key}</span>}
                      </For>
                    </div>
                    <p class={styles.varExample}>run = fs &nbsp;&nbsp; run = fs.Put File</p>
                  </div>
                )}
                {v.example && (
                  <p class={styles.varExample}>{v.example}</p>
                )}
              </div>
            )}
          </For>
        </div>

        <div class={styles.divider} />

        <p class={styles.footer}>To update a variable, open the Evexi admin portal, navigate to device or group settings, and set the value there.</p>

      </div>
    </div>
  )
}

export default Helper
