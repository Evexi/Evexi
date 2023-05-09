# Mock & Proxy Server
The Evexi package includes a EvexiMock class which can be used to mock various Evexi API endpoints. This is useful for local development when you want to develop in chrome and deploy as a Evexi later. We have also included a local proxy server (server.js) which can be ran locally to mock any communications to Square or Stripe integration services when calling `Evexi.proxy()` method. You can view a [working example here](./src/index.ts).

#

Note: `Make sure you don't include this class in production`

#

### Mock
You can mock all of the Evexi API by calling `.all()`. You can additionally mock returns of some of the Evexi API sets. All mocks can be chained against a single EvexiMock instance.

````typescript
import {Evexi, EvexiMock} from 'evexi'

new EvexiMock(Evexi)
  .all() // Mock the whole API

  // Mock the evexi KEY=>VALUE environment variables
  .env({
    foo: 'bar',
    biz: 'baz'
  })

  // Proxy can mock messages and responses to communicate with a hosted SAS payment provider (Square and Stripe)
  .proxy([
    {
      endpoint: '/square/a?ver=123',
      response: {foo: 'bar with ver'}
    }
  ])

  // Mock tizen barcode scanner return value
  .tizen({barcodeReturn: '12345'})

  // Evexi.oti.pay() method will return this TransactionStatus
  .oti(TransactionStatus.Cancelled)

  // Evexi.serial.write with the data of 'foo' will trigger a onMessage event with 'bar'
  .serial({'foo': 'bar', 'aaa': 'bbb'})
````

#

As part of the evexi package there is a proxy.js file included. You can call this file with a auth token. The auth token is either a Square or a Stripe auth token:
````bash
TOKEN=123 node node_modules/evexi/dist/proxy.js
````
This will start a service which will expose all endpoints that you can then direct EvexiMock class to proxy to. This can be used to check against live and sandbox data when working on your application locally. If you like you can copy this script as needed to mimic providers responses and check how your application responds.

#

### Mocking Proxy
````typescript
import {Evexi, EvexiMock} from 'evexi'

new EvexiMock(Evexi)
  .proxy('http://localhost:9063') // All proxy messages will be sent here
````

#

### Mocking Nexmosphere messages
You can mock the requests to Nexmosphere controller by calling the method `nexmosphereMessage()` on the instance of the `EvexiMock` class.

````typescript
import {Evexi, EvexiMock} from 'evexi'

const mock = new EvexiMock(Evexi)
  .nexmosphere()

Evexi.nexmosphere.open()
Evexi.nexmosphere.onMessage(msg => {
  // msg === 'X001A[A2]'
})

mock.nexmosphereMessage('X001A[A2]') // Fire a message as the controller
````