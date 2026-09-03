import { createEffect, createSignal, onCleanup } from "solid-js"

const [connected, setConnected] = createSignal<boolean>(navigator.onLine)

function handleOnline() {
  setConnected(true)
}

function handleOffline() {
  setConnected(false)
}

createEffect(() => {
  window.addEventListener('online', handleOnline)
  window.addEventListener('offline', handleOffline)
})

onCleanup(() => {
  window.removeEventListener('online', handleOnline)
  window.removeEventListener('offline', handleOffline)
})

export const useConnection = () => connected
