// Unable to use the 'createStore' SolidJS API here due to platform compatibility issues
import { createSignal } from 'solid-js'

type InputMap = Record<string, Record<string, Record<string, unknown>>>

const [inputValues, setInputValues] = createSignal<InputMap>({})

export const getInputValue = (appName: string, testLabel: string, key: string): unknown => {
  return inputValues()[appName]?.[testLabel]?.[key]
}

export const setInputValue = (appName: string, testLabel: string, key: string, value: unknown): void => {
  setInputValues(prev => ({
    ...prev,
    [appName]: {
      ...prev[appName],
      [testLabel]: {
        ...prev[appName]?.[testLabel],
        [key]: value,
      },
    },
  }))
}

export { inputValues }
