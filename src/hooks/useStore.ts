// Unable to use the 'createStore' SolidJS API here due to platform compatibility issues
import Evexi from "evexi"
import { createEffect, createSignal } from "solid-js"

type Info = Awaited<ReturnType<typeof Evexi.info>>

const [loading, setLoading] = createSignal<boolean>(true)
const [activeApp, setActiveApp] = createSignal<App | null>(null)
const [activeAppTest, setActiveAppTest] = createSignal<AppTest | null>(null)
const [orientation, setOrientation] = createSignal<'portrait' | 'landscape'>(window.innerWidth < window.innerHeight ? 'portrait' : 'landscape')
const [info, setInfo] = createSignal<Info | null>(null)

createEffect(() => {
  setOrientation(window.innerWidth < window.innerHeight ? 'portrait' : 'landscape')
})

export const useStore = () => ({
  loading,
  setLoading,
  activeApp,
  setActiveApp,
  activeAppTest,
  setActiveAppTest,
  orientation,
  setOrientation,
  info,
  setInfo,
})
