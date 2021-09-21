import '@babel/polyfill'
import '../../../package/index.js'

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
window.print = async () => {
    
    log.info(' -- TESTING PRINTER -- ')
    
    try {

        const data = 
            '                                          \n' +
            '                  EVEXI                   \n' +
            '                  EVEXI                   \n' +
            '                  EVEXI                   \n' +
            '                  EVEXI                   \n' +
            '                  EVEXI                   \n' +
            '                                          \n' +
            '                                          \n' +
            '                                          \n' +
            '                                          \n' +
            '                                          \n'

        const res = await window.Evexi.tizen.printer(data)
        log.success('PRINTER: resolved ' + JSON.stringify(res))
    } catch (e) {
        log.error('PRINTER: caught')
    }

    log.info('')

}