import { getInputValue } from '@/hooks/useInputStore'

export class TestCase implements AppTest {
  label: string
  status: AppTestStatus = 'pending'
  duration?: number
  documentation?: string
  properties: PropertyDef[]

  /** Set by the registry after module load so getProperty can resolve store values */
  _appName: string = ''

  private readonly _execute: (this: TestCase) => Promise<boolean>

  constructor(config: {
    label: string
    status?: AppTestStatus
    documentation?: string
    properties?: PropertyDef[]
    execute: (this: TestCase) => Promise<boolean>
  }) {
    this.label = config.label
    this.status = config.status ?? 'pending'
    this.documentation = config.documentation
    this.properties = config.properties ?? []
    this._execute = config.execute
  }

  /** Returns the current user-set value for the given property key, falling back to the property's default */
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
