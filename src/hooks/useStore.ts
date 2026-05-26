// Unable to use the 'createStore' SolidJS API here due to platform compatibility issues
import Evexi from "evexi"
import { createEffect, createSignal } from "solid-js"

type Info = Awaited<ReturnType<typeof Evexi.info>>

const [loading, setLoading] = createSignal<boolean>(true)
const [isRunning, setIsRunning] = createSignal<boolean>(false)
const [activeApp, setActiveApp] = createSignal<App | null>(null)
const [activeAppTest, setActiveAppTest] = createSignal<AppTest | null>(null)
const [orientation, setOrientation] = createSignal<'portrait' | 'landscape'>(window.innerWidth < window.innerHeight ? 'portrait' : 'landscape')
const [docsVisible, setDocsVisible] = createSignal<boolean>(false)
const [resultsVisible, setResultsVisible] = createSignal<boolean>(false)
const [info, setInfo] = createSignal<Info | null>(null)
const [logFilter, setLogFilter] = createSignal({ info: false, warning: false, error: false })
const [helperVisible, setHelperVisible] = createSignal<boolean>(false)
const [reportsUrl, setReportsUrl] = createSignal<string | undefined>(undefined)

createEffect(() => {
  setOrientation(window.innerWidth < window.innerHeight ? 'portrait' : 'landscape')
})

export const useStore = () => ({
  loading,
  setLoading,
  isRunning,
  setIsRunning,
  activeApp,
  setActiveApp,
  activeAppTest,
  setActiveAppTest,
  orientation,
  setOrientation,
  info,
  setInfo,
  docsVisible,
  setDocsVisible,
  resultsVisible,
  setResultsVisible,
  logFilter,
  setLogFilter,
  helperVisible,
  setHelperVisible,
  reportsUrl,
  setReportsUrl,
})
