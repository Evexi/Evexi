import '@babel/polyfill'
import './../../../api/dist/Evexi'

import {log} from './../../common'

window.playing = (item) => {
    
    log.info('playing item ...' + JSON.stringify(item))

    try {
        
        window.Evexi ? log.success('API Found') : log.error('API ERROR - does not exist')

        if(window.Evexi) {
            log.info('')
        }

    } catch (e) {
        log.error('API ERROR - caught')
    }

}

// @ts-ignore
window.barcode = async () => {
    
    log.info(' -- TESTING BARCODE -- ')
    
    try {
        const res = await window.Evexi.tizen.barcode()
        log.success('BARCODE: resolved ' + JSON.stringify(res))
    } catch (e) {
        log.error('BARCODE: caught')
    }

    log.info('')

}

// @ts-ignore
window.print = () => {
    // TODO
}