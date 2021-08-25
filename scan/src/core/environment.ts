enum Environment {
  Prod = 'wss://mrx.cx/interactive/socket',
  Dev = 'wss://dev.mrx.cx/interactive/socket',
  Edge = 'wss://edge.mrx.cx/interactive/socket',
  Local = 'ws://localhost:1337',
}

export type EnvironmentKey = keyof typeof Environment

export function EnvironmentUrl(env?: EnvironmentKey): Environment {
  return Environment[env ? env : 'Prod']
}