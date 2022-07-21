import { log } from './../../common'
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
window.playing = () => {
  try {
    log.info(' -- PLAYING -- ')
    if(!Evexi) log.error('API ERROR - does not exist')
  } catch (e) {
    log.error('API ERROR - caught')
  }
}

/**
 * Lifecycle event to indicate the item has stopped playing
 */
window.stopping = () => {
  log.info(' -- STOPPING -- ')
}