import { log } from '../../common'
import Evexi from 'evexi'

window.playing = (item) => {

  log.info('playing item ...' + JSON.stringify(item))

  try {
    Evexi ? log.success('API Found') : log.error('API ERROR - does not exist')
    if (Evexi) log.info('')
  } catch (e) {
    log.error('API ERROR - caught')
  }

}

/**
 * Lifecycle event to indicate the item has stopped playing
 */
window.stopping = () => {
  log.clear()
  log.info(' -- STOPPING -- ')
}

// @ts-ignore
window.open = async (port?: string) => {

  // Listen for nexmosphere messages. Setup before opening but should reinitialize if close has been ran
  Evexi.nexmosphere.onMessage(msg => log.info(msg))

  const res = await Evexi.nexmosphere.open();
  log.info(` -- OPENING NEXMOSPHERE ${port} ${res} -- `)

}

// @ts-ignore
window.close = async () => {
  const res = await Evexi.nexmosphere.close();
  log.info(` -- CLOSED NEXMOSPHERE -- ${res}`)
}

// @ts-ignore
window.write = async (message: string) => {
  const res = await Evexi.nexmosphere.write(message);
  log.info(` -- NEXMOSPHERE WRITE -- ${res}`)
}