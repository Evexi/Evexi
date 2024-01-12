import { log } from '../../common'
import Evexi from 'evexi'


// @ts-ignore
window.open = async (port?: string) => {

  // Listen for Square web hook messages. Setup before opening but should reinitialize if close has been ran
  Evexi.square.event(msg => log.info(msg))

}
