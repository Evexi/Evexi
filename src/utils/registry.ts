const modules = import.meta.glob('../apps/*.ts', { eager: true })

const apps = Object.fromEntries(
  Object.entries(modules).map(([path, mod]) => {
    const name = path.match(/\/([^/]+)\.ts$/)?.[1]
    return [name, mod]
  })
)

export default apps
