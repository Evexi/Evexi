import {Evexi} from 'evexi'
import {log} from './../../common'


async function env(name: string) {
  console.log('here ')
  log.info('aaa')
  try {
    const foo = await Evexi.env(name)
    log.success(`Env Var foo:${foo}`)
  } catch(e) {
    log.error('Env Var error')
  }
}


window.playing = async (item) => {

  log.info('playing item ........' + JSON.stringify(item))

  try {

      Evexi ? log.success('API Found') : log.error('API ERROR - does not exist')


      console.log('a')

          await env('foo')

          console.log('b')


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