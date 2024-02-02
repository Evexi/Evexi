import Evexi from 'evexi'
import {log} from './../../common'

// Listen for platform changes on the env var
Evexi.envChange('FOO', res => {
  log.info(`Env Var FOO value changed ${JSON.stringify(res)}`)
})

// Listen for platform changes on the env var
Evexi.envChange('FIZZ', res => {
  log.info(`Env Var FIZZ value changed ${JSON.stringify(res)}`)
})

/**
 * Lifecycle event
 */
Evexi.lifecycle.playing(async (item) => {

  // Log the playing instance  
  log.info('playing item ........' + JSON.stringify(item))
  log.info('')

  // Request the FOO env var
  const foo = await Evexi.env('FOO')
  log.success(`Env Var FOO:${foo}`)

})

/**
 * Lifecycle event to indicate the item has stopped playing
 */
Evexi.lifecycle.stopping(() => {
  log.clear()
  log.info(' -- STOPPING -- ')
})
