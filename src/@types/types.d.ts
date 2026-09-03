import type Evexi from "evexi"

declare global {
  type Platform = Awaited<ReturnType<typeof Evexi.info>>['provider']

  interface PropertyDef {
    key: string
    label: string
    type: 'text' | 'number' | 'union'
    default: string | number
    options?: string[]
  }

  interface App {
    name: string
    label: string
    order?: number
    skip?: boolean
    platforms?: Platform[]
    tests: AppTest[]
  }

  type AppTestStatus = 'success' | 'error' | 'pending' | 'running'

  interface AppTest {
    label: string
    status: AppTestStatus
    duration?: number
    logs?: Log[]
    documentation?: string
    properties: PropertyDef[]
    getProperty<T = unknown>(key: string): T
    execute(): Promise<boolean>
  }

  interface Log {
    type: 'info' | 'error' | 'warning'
    time: number
    message: string
  }
}

export { }
