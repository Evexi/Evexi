import { createSignal } from 'solid-js'
import { getInputValue } from '@/hooks/useInputStore'

export class TestRunner implements AppTest {
  label: string
  documentation?: string
  properties: PropertyDef[]

  _appName: string = ''

  private readonly _statusSignal: ReturnType<typeof createSignal<AppTestStatus>>
  private readonly _durationSignal: ReturnType<typeof createSignal<number | undefined>>

  private readonly _execute: (this: TestRunner) => Promise<boolean>

  constructor(config: {
    label: string
    status?: AppTestStatus
    documentation?: string
    properties?: PropertyDef[]
    execute: (this: TestRunner) => Promise<boolean>
  }) {
    this.label = config.label
    this._statusSignal = createSignal<AppTestStatus>(config.status ?? 'pending')
    this._durationSignal = createSignal<number | undefined>(undefined)
    this.documentation = config.documentation
    this.properties = config.properties ?? []
    this._execute = config.execute
  }

  get status(): AppTestStatus { return this._statusSignal[0]() }
  set status(v: AppTestStatus) { this._statusSignal[1](v) }

  get duration(): number | undefined { return this._durationSignal[0]() }
  set duration(v: number | undefined) { this._durationSignal[1](v) }

  getProperty<T = unknown>(key: string): T {
    const stored = getInputValue(this._appName, this.label, key)
    if (stored !== undefined) return stored as T
    const prop = this.properties.find(p => p.key === key)
    return prop?.default as T
  }

  async execute(): Promise<boolean> {
    return this._execute.call(this)
  }
}
