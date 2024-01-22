import Evexi from 'evexi'
import { log } from '../../common'

Evexi.lifecycle.playing(msg => log.info(JSON.stringify(msg)))

Evexi.lifecycle.stopping(msg => log.info(JSON.stringify(msg)))