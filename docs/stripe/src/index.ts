import { log } from '../../common'
import Evexi from 'evexi'

// XHR request to Stripe
async function stripeRequest() {

  log.info(' -- TESTING STRIPE REQUEST -- ')

  try {
    const res = await Evexi.proxy('/stripe/v1/products', {
      method: 'GET',
      // method: 'POST',
      // body: JSON.stringify({ foo: 'bar' })
    })
    if (res && res.ok) log.success(`STRIPE REQUEST Success: ${JSON.stringify(res).substring(0, 100)}`)
    else if (res && !res.ok) log.success(`STRIPE REQUEST Not Ok: ${JSON.stringify(res)}`)
    else log.error(`STRIPE REQUEST Error: ${JSON.stringify(res)}`)
  } catch (e) {
    log.error(`STRIPE REQUEST: caught .. ${JSON.stringify(e)}`)
  }

  log.info('')

}


// Triggers when the player plays the content
Evexi.lifecycle.playing(async (item) => {

  // Lets see whats inside item param
  log.info('loaded: ' + JSON.stringify(item))

  // Make XHR request to Stripe via Evexi platform and log to display
  await stripeRequest()

})
