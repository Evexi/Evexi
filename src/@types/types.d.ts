declare global {
  interface App {
    name: string
    label: string
  }

  type AppTestStatus = 'success' | 'error' | 'pending'

  interface AppTest {
    label: string
    status: AppTestStatus
  }
}

export { }
