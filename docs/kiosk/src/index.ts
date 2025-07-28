import { log } from './../../common'
import Evexi from 'evexi'

window.playing = (item) => {
  log.info('playing item ...' + JSON.stringify(item))
  try {
    Evexi ? log.success('API Found') : log.error('API ERROR - does not exist')
    if (Evexi) log.info('')
  } catch (e) {
    log.error('API ERROR - caught')
  }
}

/**
 * Lifecycle event to indicate the item has stopped playing
 */
window.stopping = () => {
  log.clear()
  log.info(' -- STOPPING -- ')
}

// @ts-ignore
window.barcode = async () => {
  log.info(' -- TESTING BARCODE -- ')
  try {
    const res = await Evexi.tizen.barcode()
    if (res) log.success('BARCODE: resolved ' + JSON.stringify(res))
    else log.error('BARCODE: false')
  } catch (e) {
    log.error('BARCODE: caught')
  }
  log.info('')
}

// @ts-ignore
window.serialOpen = async () => {
  Evexi.serial.onMessage(msg => log.info(`serial message: ${msg}`))
  const res = await Evexi.serial.open('PORT0') // Top port on Samsung Kiosk
  log.info(` -- OPENING SERIAL PORT0 ${res} -- `)
}

// @ts-ignore
window.serialWriteData = async (data: string) => {
  const res = await Evexi.serial.write('PORT0', data)
  log.info(` -- WRITING DATA PORT0: RES ${res} -- `)
}

// @ts-ignore
window.serialClose = async () => {
  Evexi.serial.close('PORT0')
  log.info(' -- CLOSING SERIAL PORT0 -- ')
  log.info('')
  log.info('')
}

let count = 0

// @ts-ignore
window.otiPay = async (amount: number, currencyCode?: number, duration?: number) => {
  new PayWrapper()
    .run(amount, currencyCode, duration)
}

class PayWrapper {

  private readonly id: number

  constructor() {
    this.id = count
    count++
  }

  async run(amount: number, currencyCode?: number, duration?: number) {
    log.info(` -- STARTING OTI PAY ${this.id} -- `)
    try {
      const res = await Evexi.oti.pay(amount, currencyCode ?? undefined, duration ?? undefined)
      log.info(` -- FINISHED OTI PAY ${this.id}: ${JSON.stringify(res)} -- `)
    } catch(e) {
      log.info(` -- FINISHED OTI PAY ${this.id}: CAUGHT -- ${e}`)
    }
  }

}

// @ts-ignore
window.otiCancel = async () => {
  log.info(` -- OTI CANCEL -- `)
  Evexi.oti.cancel()
}
