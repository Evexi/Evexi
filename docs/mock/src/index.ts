import {log} from './../../common'
import {Evexi, EvexiMock} from 'evexi'

const mock = new EvexiMock(Evexi)
  .all() // Mock all objects
  .env({a: 'b', c: 'd'})
  .proxy([
    {
      endpoint: '/square/a?ver=123',
      response: {foo: 'bar with ver'}
    },
    {
      endpoint: '/square/a',
      response: {foo: 'bar'}
    }
  ])
  .tizen({barcodeReturn: '12345'})

const env = new class {
  async check(check: string, expect: string) {
    try {
      const val = await Evexi.env(check)
      if(val != expect) throw new Error('')
      log.success(`Env Var ${check}:${val}`)
    } catch(e) {
      log.error(`Env Var ${check.valueOf()} error`)
    }
  }
}

const proxy = new class {
  async check(url: string, expected: any) {
    try {
      const r = await Evexi.proxy(url)
      if(!r || JSON.stringify(r.json) !== JSON.stringify(expected)) throw new Error('')
      log.success(`proxy ${url.valueOf()}:${JSON.stringify(r.json)}`)
    } catch(e) {
      log.error(`proxy error ${url.valueOf()}`)
    }
  }
}

const barcode = new class {
  async check(expected: string) {
    try {
      const r = await Evexi.tizen.barcode()
      console.log(r)
      if(!r || r !== expected) throw new Error('')
      log.success(`barcode ${r}`)
    } catch(e) {
      log.error(`barcode error`)
    }
  }
}

window.playing = async (item) => {
  log.info('playing item ...' + JSON.stringify(item))

  Evexi.nexmosphere.onMessage(msg => {
    if(msg === 'message from nexmosphere controller') return log.success(msg)
    log.error(msg)
  })

  try {
    Evexi ? log.success('API Found') : log.error('API ERROR - does not exist')
    if (Evexi) log.info('')

    await env.check('a', 'b')
    // @ts-ignore
    await env.check('b', undefined)
    await env.check('c', 'd')

    log.info('')

    await proxy.check('/square/a?ver=123', {foo: 'bar with ver'})
    await proxy.check('/square/a', {foo: 'bar'})
    await proxy.check('/square/unknown', undefined)

    log.info('')

    await barcode.check('12345')

    log.info('')

    mock.nexmosphereMessage('message from nexmosphere controller')

  } catch (e) {
    log.error('API ERROR - caught')
  }
}

// @ts-ignore
window.playing({playlistHash: '', id: '', localMedia: '', duration: 0, type: 'ZIP'})