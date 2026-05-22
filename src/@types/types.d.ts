declare global {
  interface App {
    name: string
    label: string
    tests: AppTest[]
  }

  type AppTestStatus = 'success' | 'error' | 'pending' | 'running'

  interface AppTest {
    label: string
    status: AppTestStatus
    duration?: number
    execute: () => Promise<boolean>
  }

  interface Log {
    type: 'info' | 'error' | 'warning'
    time: number
    message: string
  }
}

export { }
