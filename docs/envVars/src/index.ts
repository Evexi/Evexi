import Evexi from 'evexi'
import {log} from './../../common'

// Listen for platform changes on the env var
Evexi.envChange('FOO', res => {
  log.success(`CHANGE - Env Var FOO value changed ${JSON.stringify(res)}`)
})

// Listen for platform changes on the env var
Evexi.envChange('FIZZ', res => {
  log.success(`CHANGE - Env Var FIZZ value changed ${JSON.stringify(res)}`)
})

/**
 * Lifecycle event
 */
Evexi.lifecycle.playing(async (item) => {

  // Log the playing instance  
  log.info('LIFECYCLE -- playing item ........' + JSON.stringify(item))
  log.info('')

  try {
    // Request the FOO env var
    const foo = await Evexi.env('FOO')
    log.success(`LOAD -- LIFECYCLE - Env Var FOO:${foo}`)
  } catch (e) {
    log.error(`LOAD -- LIFECYCLE - Error ${e}`)
  }

})

/**
 * Lifecycle event to indicate the item has stopped playing
 */
Evexi.lifecycle.stopping(() => {
  log.clear()
  log.info(' -- STOPPING -- ')
})
