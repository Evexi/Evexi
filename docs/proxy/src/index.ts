import '@babel/polyfill' // needed for SSSP2/4
import '../../../package/index.js' // importing the evexi API

import { log } from '../../common'

window.playing = async (item) => {

    log.info('playing item ...' + JSON.stringify(item))

    try {

        window.Evexi ? log.success('API Found') : log.error('API ERROR - does not exist')

        if (window.Evexi) {
            log.info('')
            await squareRequest()
            await stripeRequest()
        }

    } catch (e) {
        log.error('API ERROR - caught')
    }

}

async function squareRequest() {

    log.info(' -- TESTING SQUARE REQUEST -- ')

    try {
        const res = await window.Evexi.proxy('/square/v2/catalog/list', {
            method: 'GET',
            // method: 'POST',
            // body: JSON.stringify({ foo: 'bar' })
        })
        if (res && res.ok) log.success(`SQUARE REQUEST Success: ${JSON.stringify(res).substring(0, 100)}`)
        else if (res && !res.ok) log.success(`SQUARE REQUEST Not Ok: ${JSON.stringify(res)}`)
        else log.error(`SQUARE REQUEST Error: ${JSON.stringify(res)}`)
    } catch (e) {
        log.error(`SQUARE REQUEST: caught .. ${JSON.stringify(e)}`)
    }

    log.info('')

}

async function stripeRequest() {

    log.info(' -- TESTING STRIPE REQUEST -- ')

    try {
        const res = await window.Evexi.proxy('/stripe/v1/products', {
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

/**
 * Lifecycle event to indicate the item has stopped playing
 */
window.stopping = () => {
    log.clear()
    log.info(' -- STOPPING -- ')
}