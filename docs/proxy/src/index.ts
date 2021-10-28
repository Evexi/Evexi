import '@babel/polyfill' // needed for SSSP2/4
import '../../../package/index.js' // importing the evexi API

import { log } from '../../common'

window.playing = (item) => {

    log.info('playing item ...' + JSON.stringify(item))

    try {

        window.Evexi ? log.success('API Found') : log.error('API ERROR - does not exist')

        if (window.Evexi) {
            log.info('')
            request()
        }

    } catch (e) {
        log.error('API ERROR - caught')
    }

}

// @ts-ignore
async function request() {

    log.info(' -- TESTING REQUEST -- ')

    try {
        const res = await window.Evexi.proxy('/square/v2/catalog/list', {
            method: 'GET',
            // method: 'POST',
            // body: JSON.stringify({ foo: 'bar' })
        })
        if (res && res.ok) log.success(`REQUEST Success: ${JSON.stringify(res)}`)
        else if (res && !res.ok) log.success(`REQUEST Not Ok: ${JSON.stringify(res)}`)
        else log.error(`REQUEST Error: ${JSON.stringify(res)}`)
    } catch (e) {
        log.error(`REQUEST: caught .. ${JSON.stringify(e)}`)
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