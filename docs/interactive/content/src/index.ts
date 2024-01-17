import {log} from './../../../common'
import {Evexi} from 'evexi'

// list of client id's connected
const clientsIds: string[] = []

const Interactive = new class Interactive {


  async create() {
    try {
      const res = await Evexi.interactive.create(180000, 'https://a420-178-17-44-81.ngrok.io', 2)
      if(!res) throw new Error()
      if(res.qr !== '' && res.sessionId && res.url !== '') log.success(`CREATE success: ${JSON.stringify(res)}`)
      else throw new Error()

      return res
    } catch (e) {
      log.error('CREATE error')
    }
  }

  start() {
    try {
      Evexi.interactive.start()
      log.success('START success')
    } catch (e) {
      log.error('START error')
    }
  }

  destroy() {
    try {
      Evexi.interactive.destroy()
      log.success('DESTROY success')
    } catch (e) {
      log.error('DESTROY error')
    }
  }

}

window.playing = async function playing(item) {

  Evexi ? log.success('API Found') : log.error('API ERROR')

  log.info('')

  log.info(' -- TESTING INFO -- ')
  const create = await Interactive.create()

  if (create) (document.getElementById('qr') as HTMLImageElement).src = create.qr

  Evexi.interactive.onConnect((clientId) => {
    log.info(`client connected: ${clientId}`)
    clientsIds.push(clientId)
    Interactive.start()
    ;(document.getElementById('qr') as HTMLImageElement).src = ''
  })

  Evexi.interactive.onDisconnect((clientId) => {
    log.info(`client disconnected: ${clientId} .. running destroy in 5 seconds`)
    window.setTimeout(Interactive.destroy, 5000)
  })

  Evexi.interactive.onKick((clientId) => {
    log.info(`client kicked: ${clientId}`)
  })

  Evexi.interactive.onMessage((message) => {
    log.info(`message: ${JSON.stringify(message)}`)
  })

}

window.stopping = async function stopping() {
  log.clear()
}

// @ts-ignore
window.kick = () => {
  log.info(`kicking client ${clientsIds[0]}`)
  Evexi.interactive.kick(clientsIds[0])
  clientsIds.shift()
}

// @ts-ignore
window.broadcast = () => {
  log.info(`sending broadcast`)
  Evexi.interactive.message('broadcast message')
}

// @ts-ignore
window.message = (who: 'oldest' | 'newest') => {
  log.info(`sending message to ${clientsIds[who === 'oldest' ? 0 : clientsIds.length]}`)
  Evexi.interactive.message('direct message', clientsIds[who === 'oldest' ? 0 : clientsIds.length])
}
