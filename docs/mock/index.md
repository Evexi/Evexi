# Mock & Proxy Server
The Evexi package includes a object which can be used to mock the Evexi API. This is useful for local development when you want to develop in chrome and deploy onto Evexi later. We have also included a local proxy server (server.js) which can be ran locally to mock any communications to Square or Stripe integration services.

When importing the mock all methods will be mocked by default. You can then override the proxy URL to point to your proxy.js service, or mock endpoints with static data, mock env variables, barcode results etc.

Note: `Make sure in production builds you don't use this class`

Note: `The player will trigger window.playing event. Remember to manually call this method when working locally`

#

You can view a [working example here](./src/index.ts).

### Stub Proxy
The following example would stub any calls to '/square/a?ver=123' and return the specified response.
````typescript
import {Evexi, EvexiMock} from 'evexi'

new EvexiMock(Evexi)
  .env({a: 'b', c: 'd'})
  .proxy([
    {
      endpoint: '/square/a?ver=123',
      response: {foo: 'bar with ver'}
    }
  ])
  .tizen({barcodeReturn: '12345'})
````

#

As part of the evexi package there is a proxy.js file included. You can call this file with a auth token. The auth token is either a Square or a Stripe auth token:
````bash
TOKEN=123 node node_modules/evexi/dist/proxy.js
````
This will start a service which will expose all endpoints that you can then direct EvexiMock class to proxy to. This can be used to check against live and sandbox data when working on your application locally. If you like you can copy this script as needed to mimic providers responses and check how your application responds.

#


Mock Proxy:
````typescript
import {Evexi, EvexiMock} from 'evexi'

new EvexiMock(Evexi)
  .proxy('http://localhost:9063')
````