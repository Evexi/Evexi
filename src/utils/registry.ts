interface Module {
  default: App
}

const modules = import.meta.glob<Module>('../apps/*.ts', { eager: true })

const apps = Object.fromEntries(
  Object.entries(modules).map(([path, mod]) => {
    const name = path.match(/\/([^/]+)\.ts$/)?.[1]
    return [name, mod] as [string, Module]
  })
)

export default apps as Record<string, Module>
