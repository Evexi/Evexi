import { createEffect, createSignal } from "solid-js"

const [connected, setConnected] = createSignal<boolean>(navigator.onLine)

createEffect(() => {
  window.addEventListener('online', () => {
    setConnected(true)
  })

  window.addEventListener('offline', () => {
    setConnected(false)
  })
})

export const useConnection = () => connected
