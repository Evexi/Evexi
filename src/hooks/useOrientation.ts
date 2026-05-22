import { createEffect, createSignal } from "solid-js"

const [orientation, setOrientation] = createSignal<'portrait' | 'landscape'>(window.innerWidth < window.innerHeight ? 'portrait' : 'landscape')

createEffect(() => {
  setOrientation(window.innerWidth < window.innerHeight ? 'portrait' : 'landscape')

  window.addEventListener('resize', () => {
    setOrientation(window.innerWidth < window.innerHeight ? 'portrait' : 'landscape')
  })
})

export const useOrientation = () => orientation
