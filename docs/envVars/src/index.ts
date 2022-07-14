import {log} from './../../common'
import Evexi from 'evexi'

const env = new class {
  async env(name: string) {
    try {
      const foo = await Evexi.env(name)
      log.success(`Env Var foo:${foo}`)
    } catch (e) {
      log.error('Env Var error')
    }
  }
}

/**
 * Lifecycle event
 */
window.playing = (item) => {
  log.info('playing item ........' + JSON.stringify(item))
  try {
    Evexi ? log.success('API Found') : log.error('API ERROR - does not exist')
    env.env('foo')
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