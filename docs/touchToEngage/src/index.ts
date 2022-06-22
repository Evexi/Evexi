import {log} from './../../common'
import Evexi from 'evexi'

// @ts-ignore
window.end = async () => {
    log.info(' -- TESTING ENDING SESSION  -- ')
    try {
        Evexi.interactive.destroy()
    } catch (e) {
        log.error('INTERACTIVE DESTROY: caught')
    }
    log.info('')
}

/**
 * Lifecycle event
 */
 window.playing = (item) => {
  log.info('playing item ...' + JSON.stringify(item))
  try {
      Evexi ? log.success('API Found') : log.error('API ERROR - does not exist')
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