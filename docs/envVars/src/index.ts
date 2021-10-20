import '@babel/polyfill' // needed for SSSP2/4
import '../../../package/index.js' // importing the evexi API

import {log} from './../../common'

const envVar = new class {

  async env(name: string) {
    try {
      const foo = await window.Evexi.env(name)
      log.success(`Env Var foo:${foo}`)
    } catch(e) {
      log.error('Env Var error')
    }
  }

}

window.playing = async (item) => {
    
  log.info('playing item ...' + JSON.stringify(item))

  try {
      
      window.Evexi ? log.success('API Found') : log.error('API ERROR - does not exist')

      if(window.Evexi) {

          log.info('')

          envVar.env('foo')

      }

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