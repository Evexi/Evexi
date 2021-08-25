import Scan from './../../src/Scan'
import {Server} from 'mock-socket'

let mockServer: Server

describe('scan', () => {

  beforeEach(() => {
    mockServer = new Server('wss://mrx.cx/interactive/socket' + '/123');
  })

  afterEach(() => {
    mockServer.close()
    // @ts-ignore
    mockServer = null
  })

  it('check onclose', (end) => {

    new Scan('123')
      .onClose(function() {
        end()
      })
      .onOpen(function() {
        mockServer.close()
      })

  }, 100)
  
  it('check messaging back and forth', (end) => {

    mockServer.on('connection', (socket: any) => {
      socket.on('message', (data: any) => {
        const a = JSON.parse(data)

        if(a.action !== 'ping') {
          expect(a).toEqual({action: 'message', data: 'up'})
          socket.send(JSON.stringify({action: 'message', data: 'down'}))
        }

      })
    })

    const a = new Scan('123')
      .onMessage(function(message) {
        expect(message).toEqual('down')
        a.destroy()
        end()
      })
      .onOpen(function() {
        // @ts-ignore
        this.send('up')
      })

  })

  it('check destroying', (end) => {

    const Interactive = new Scan('123')
      .onOpen(function() {
        // @ts-ignore
        this.send('up')
      })
      .onClose(function() {
        // console.log('close')
      })
      .onMessage(function() {
        // console.log('message')
      })

    setTimeout(() => {
      expect(typeof Interactive['socket']).toBe('object')
      Interactive.destroy()
      expect(Interactive['socket']).toEqual(null)
      expect(Interactive['events'].onOpen).toEqual(null)
      expect(Interactive['events'].onMessage).toEqual(null)
      expect(Interactive['events'].onClose).toEqual(null)
      end()
    }, 100)

  })

  it('check getting url param', async () => {

    mockServer.on('connection', (socket: any) => {
      //
    })

    // @ts-ignore
    delete window.location
    window.location = Object.create(window)
    window.location.href = 'http://localhost?session=123'
    window.location.search = '?session=123'
  
    expect(Scan.urlParam()).toEqual('123')

    // @ts-ignore
    delete window.location
    window.location = Object.create(window)
    window.location.href = 'http://localhost?session=123'
    window.location.search = '?else=456'
  
    expect(Scan.urlParam('else')).toEqual('456')

  })

  it('check pings', async () => {

    jest.useFakeTimers()
    
    const messages: any = []

    mockServer.on('connection', (socket: any) => {
      socket.on('message', (data: any) => {
        const msg = JSON.parse(data)
        messages.push(msg.action)
      })
    })

    const Interactive = new Scan('123')

    jest.advanceTimersByTime(10020)

    expect(messages).toEqual(['ping', 'ping'])
    Interactive.destroy()

  })

  it('should throw error if initalised without session', () => {

    expect(() => {
      // @ts-expect-error
      new Scan()
    }).toThrowError('sessionId not provided')

  })

})