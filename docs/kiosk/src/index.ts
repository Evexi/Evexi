import { log } from './../../common'
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
window.barcode = async () => {
  log.info(' -- TESTING BARCODE -- ')
  try {
    const res = await Evexi.tizen.barcode()
    if (res) log.success('BARCODE: resolved ' + JSON.stringify(res))
    else log.error('BARCODE: false')
  } catch (e) {
    log.error('BARCODE: caught')
  }
  log.info('')
}
