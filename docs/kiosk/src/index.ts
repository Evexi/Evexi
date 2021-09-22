import '@babel/polyfill' // needed for SSSP2/4
import '../../../package/index.js' // importing the evexi API

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
        if(res) log.success('BARCODE: resolved ' + JSON.stringify(res))
        else log.error('BARCODE: false')
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
        if(res) log.success('PRINTER: resolved ' + JSON.stringify(res))
        else log.error('PRINTER: false')
    } catch (e) {
        log.error('PRINTER: caught')
    }

    log.info('')

}

// @ts-ignore
window.printWrongPort = async () => {
    
    log.info(' -- TESTING PRINTER - WRONG PORT -- ')
    
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

        const res = await window.Evexi.tizen.printer(data, {port: 'PRINTERPORT0'})
        if(res) log.success('PRINTER: resolved ' + JSON.stringify(res))
        else log.error('PRINTER: false')
    } catch (e) {
        log.error('PRINTER: caught' + JSON.stringify(e))
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