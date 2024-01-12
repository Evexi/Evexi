import { log } from '../../common'
import Evexi from 'evexi'

window.onmessage = (data) => {
  debugger;
    Evexi.square.event(msg => {
      debugger;
      log.info(JSON.stringify(msg))
    })
  }


