import {EnvironmentUrl, EnvironmentKey} from "./core/environment"
import {InitializationError} from "./core/errors"

interface Events {
  onMessage: ((message: string) => void) | null
  onOpen: (() => void) | null
  onClose: ((code: number) => void) | null
}

declare global {
  interface Window {
    Scan: typeof Scan
  }
}

class Scan {

  private socket: WebSocket | null = null
  private readonly pingInterval: number | null = null

  private readonly events: Events = {
    onMessage: null,
    onOpen: null,
    onClose: null
  }

  constructor(readonly sessionId: string | null, readonly environmentKey?: EnvironmentKey) {
    if (!sessionId) throw new InitializationError('sessionId not provided')

    this.socket = new WebSocket(`${EnvironmentUrl(environmentKey)}/${sessionId}`)

    this.socket.onmessage = (message: MessageEvent<string>) => {
      if (!this.events.onMessage) return
      const msg = JSON.parse(message.data)
      if (msg.action === 'ping' || msg.action === 'pong') return
      this.events.onMessage(msg.data)
    }

    this.socket.onopen = () => {
      if (this.events.onOpen) this.events.onOpen()
    }

    this.socket.onclose = (event) => {
      if (this.events.onClose)this.events.onClose(event.code)
      this.destroy()
    }

    this.pingInterval = window.setInterval(() => this.send('ping', 'ping'), 5000)
  }

  /**
   * Send a relay message to all clients (broadcast)
   */
  send(data: any, action: 'message' | 'ping' = 'message'): void {
    if (!this.socket || this.socket!.readyState !== WebSocket.OPEN) return
    this.socket.send(JSON.stringify({action, data}))
  }

  /**
   * On Open
   */
  onOpen(cb: () => void): Scan {
    this.events.onOpen = cb.bind(this)
    return this
  }

  /**
   * On Close
   */
  onClose(cb: (code: number) => void): Scan {
    this.events.onClose = cb.bind(this)
    return this
  }

  /**
   * listener for messages
   */
  onMessage(cb: (message: string) => void): Scan {
    this.events.onMessage = cb.bind(this)
    return this
  }

  /**
   * the item has finshed, manually close the WS connection for the client (runs automatically when page closes)
   */
  destroy(): void {
    if (this.socket) this.socket.close(1000)
    this.events.onMessage = null
    this.events.onOpen = null
    this.events.onClose = null
    this.socket = null
    if (this.pingInterval) window.clearInterval(this.pingInterval)
  }

  /**
   * get query string param
   */
  static urlParam(query: string = 'session'): string | null {
    const urlParams = new URLSearchParams(window.location.search)
    return urlParams.get(query)
  }

}

export default Scan
window.Scan = Scan