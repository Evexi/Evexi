import { createSignal } from "solid-js";

const [logs, setLogs] = createSignal<Log[]>([])
const [warnings, setWarnings] = createSignal<Log[]>([])
const [errors, setErrors] = createSignal<Log[]>([])

const addLog = (log: Omit<Log, 'time'>) => {
  const _log = { ...log, time: Date.now() } as Log
  setLogs((prev) => [...prev, _log])

  switch (_log.type) {
    case 'error':
      setErrors((prev) => [...prev, _log])
      break
    case 'warning':
      setWarnings((prev) => [...prev, _log])
      break

    default: break
  }
}

const clearLogs = () => {
  setLogs([])
  setWarnings([])
  setErrors([])
}

const useLogger = () => ({ logs, warnings, errors })

export { useLogger, addLog, clearLogs }
