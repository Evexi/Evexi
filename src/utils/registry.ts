interface Module {
  default: App
}

const modules = import.meta.glob<Module>('../apps/*.ts', { eager: true })

const apps = Object.fromEntries(
  Object.entries(modules).map(([path, mod]) => {
    const name = path.match(/\/([^/]+)\.ts$/)?.[1]
    // Wire _appName onto each TestRunner so getProperty can resolve values from the input store
    mod.default.tests.forEach(t => ((t as any)._appName = mod.default.name))
    return [name, mod] as [string, Module]
  })
)

export default apps as Record<string, Module>
