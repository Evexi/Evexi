import Evexi from 'evexi'
import { log } from '../../common'

// New
Evexi.lifecycle.playing(msg => log.info('EVEXI PLAYING -- ' + JSON.stringify(msg)))
Evexi.lifecycle.stopping(msg => log.info('EVEXI STOPPING -- ' + JSON.stringify(msg)))

// Old
window.playing = (item) => log.info('WINDOW PLAYING -- ' + JSON.stringify(item))
window.stopping = (item) => log.info('WINDOW STOPPING -- ' + JSON.stringify(item))

// If media is assigned as 'application' this function will end the session and cause the player to play assigned 'content'
// @ts-ignore
window.endSession = () => {
  log.info(' -- End Session Button Clicked -- ')
  Evexi.interactive.destroy()
}
