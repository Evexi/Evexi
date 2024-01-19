import { log } from '../../common'
import Evexi from 'evexi'

log.info('loaded')

Evexi.square.event(msg => {
  log.success(JSON.stringify(msg))
})
