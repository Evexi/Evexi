interface Module {
  default: App
}

export const supportsPlatform = (app: App, platform: Platform | undefined) => {
  if (!app.platforms?.length) return true
  if (!platform) return false
  return app.platforms.includes(platform)
}

const modules = import.meta.glob<Module>('../apps/*/app.ts', { eager: true })

const apps = Object.fromEntries(
  Object.entries(modules)
    .sort(([, a], [, b]) => {
      const aOrder = a.default.order ?? Infinity
      const bOrder = b.default.order ?? Infinity
      return aOrder - bOrder
    })
    .filter(([, mod]) => !mod.default.skip)
    .map(([path, mod]) => {
      const name = path.match(/\/([^/]+)\/app\.ts$/)?.[1]
      // Wire _appName onto each TestRunner so getProperty can resolve values from the input store
      mod.default.tests.forEach(t => ((t as any)._appName = mod.default.name))
      return [name, mod] as [string, Module]
    })
)

export default apps as Record<string, Module>
