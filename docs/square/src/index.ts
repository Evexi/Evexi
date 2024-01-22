import { log } from '../../common'
import Evexi from 'evexi'

window.playing = async (item) => {

  log.info('loaded' + JSON.stringify(item))

  try {
    
    Evexi ? log.success('API Found') : log.error('API ERROR - does not exist')

    // Check we have the required env vars
    log.success(`ENVIRONMENT: ${await Evexi.env('ENVIRONMENT')}`)
    log.success(`LOCATION: ${await Evexi.env('LOCATION')}`)
    log.success(`TERMINAL_ID: ${await Evexi.env('ENVIRONMENT')}`)

    Evexi.square.event(msg => {
      log.success(JSON.stringify(msg))
    })

  } catch (e) {
    log.error('API ERROR - caught')
  }
}
