import { log } from '../../common'
import Evexi from 'evexi'

// XHR request to Square
async function squareRequest() {

  log.info(' -- TESTING SQUARE REQUEST -- ')

  try {
    const res = await Evexi.proxy<any>('/square/v2/catalog/list', {
      method: 'GET',
    })
    if (res && res.ok) log.success(`SQUARE REQUEST Success: ${JSON.stringify(res).substring(0, 100)}`)
    else if (res && !res.ok) log.success(`SQUARE REQUEST Not Ok: ${JSON.stringify(res)}`)
    else log.error(`SQUARE REQUEST Error: ${JSON.stringify(res)}`)
  } catch (e) {
    log.error(`SQUARE REQUEST: caught .. ${JSON.stringify(e)}`)
  }

  log.info('')

}

// Triggers when the player plays the content
Evexi.lifecycle.playing(async (item) => {

  // Lets see whats inside item param
  log.info('loaded: ' + JSON.stringify(item))

  // Check we have the required env vars
  log.success(`ENVIRONMENT: ${await Evexi.env('ENVIRONMENT')}`)
  log.success(`LOCATION: ${await Evexi.env('LOCATION')}`)
  log.success(`TERMINAL_ID: ${await Evexi.env('ENVIRONMENT')}`)

  // Listen for Square web hook messages
  Evexi.square.event(msg => {
    // Log them to the display
    log.success(JSON.stringify(msg))
  })

  // Make XHR request to Square via Evexi platform and log to display
  await squareRequest()

})
