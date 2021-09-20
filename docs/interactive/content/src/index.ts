import '@babel/polyfill'
import './../../../../api/dist/Evexi'

import {log} from './../../../common'

// list of client id's connected
const clientsIds: string[] = []

const Interactive = new class Interactive {

  async create() {
    try {
      const res = await window.Evexi.interactive.create(180000, 'http://fb22-2a00-23c6-2992-b000-4071-55f7-893a-7333.ngrok.io', 2)

      if(res.qr !== '' && res.sessionId && res.url !== '') log.success(`CREATE success: ${JSON.stringify(res)}`)
      else throw new Error()

      return res
    } catch (e) {
      log.error('CREATE error')
    }
  }

  start() {
    try {
      window.Evexi.interactive.start()
      log.success('START success')
    } catch (e) {
      log.error('START error')
    }
  }

  destroy() {
    try {
      window.Evexi.interactive.destroy()
      log.success('DESTROY success')
    } catch (e) {
      log.error('DESTROY error')
    }
  }

}

window.playing = async function playing(item) {

  window.Evexi ? log.success('API Found') : log.error('API ERROR')

  log.info('')

  log.info(' -- TESTING INFO -- ')
  const create = await Interactive.create()

  if (create) (document.getElementById('qr') as HTMLImageElement).src = create.qr

  window.Evexi.interactive.onConnect((clientId) => {
    log.info(`client connected: ${clientId}`)
    clientsIds.push(clientId)
    Interactive.start()
    ;(document.getElementById('qr') as HTMLImageElement).src = ''
  })

  window.Evexi.interactive.onDisconnect((clientId) => {
    log.info(`client disconnected: ${clientId} .. running destroy in 5 seconds`)
    window.setTimeout(Interactive.destroy, 5000)
  })

  window.Evexi.interactive.onKick((clientId) => {
    log.info(`client kicked: ${clientId}`)
  })

  window.Evexi.interactive.onMessage((message) => {
    log.info(`message: ${JSON.stringify(message)}`)
  })

}

window.stopping = async function stopping() {
  log.clear()
}

// @ts-ignore
window.kick = () => {
  log.info(`kicking client ${clientsIds[0]}`)
  window.Evexi.interactive.kick(clientsIds[0])
  clientsIds.shift()
}

// @ts-ignore
window.broadcast = () => {
  log.info(`sending broadcast`)
  window.Evexi.interactive.message('broadcast message')
}

// @ts-ignore
window.message = (who: 'oldest' | 'newest') => {
  log.info(`sending message to ${clientsIds[who === 'oldest' ? 0 : clientsIds.length]}`)
  window.Evexi.interactive.message('direct message', clientsIds[who === 'oldest' ? 0 : clientsIds.length])
}