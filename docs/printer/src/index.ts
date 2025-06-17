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

const defaultText =
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


// @ts-ignore 
window.print = async () => {
  const text = document.querySelector('textarea')?.value || defaultText
  log.info(' -- PRINTING -- ')
  try {
    const res = await Evexi.printer.print(text)
    if (res) log.success('PRINT: resolved ' + JSON.stringify(res))
    else log.error('PRINT: false')
  } catch (e) {
    log.error('PRINT: caught')
    console.error(e)
  }
}
