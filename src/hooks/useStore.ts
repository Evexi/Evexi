// Unable to use the 'createStore' SolidJS API here due to platform compatibility issues
import { createEffect, createSignal } from "solid-js"

const [loading, setLoading] = createSignal<boolean>(true)
const [activeApp, setActiveApp] = createSignal<App | null>(null)
const [activeAppTest, setActiveAppTest] = createSignal<AppTest | null>(null)
const [orientation, setOrientation] = createSignal<'portrait' | 'landscape'>(window.innerWidth < window.innerHeight ? 'portrait' : 'landscape')

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
})
