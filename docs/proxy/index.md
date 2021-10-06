# Proxy
Proxy can be used when you wish to make server side requests from your player to one of the enabled integrations on your account.

Proxy uses standard window.fetch under the hood. The second argument (request) should match the [RequestInit structure](https://github.com/microsoft/TypeScript/blob/main/lib/lib.webworker.d.ts#L436-L489). The only difference is by default the method will use `'Content-Type': 'application/json'`. This and any other options as part of the `RequestInit` can be overridden.

Please note you should only run a single proxy request at a time.

#

You can view a [working example here](./src).

#

````typescript
try {
 
  // First segment is the name, remaining segments will be the endpoints for the related platform
  const url = '/square'
  
  // Default method is a GET and by default the player will use 'Content-Type': 'application/json'. All RequestInit options can be overridden using the second argument.
  const request: RequestInit = {
    method: 'POST'
  }

  const res = await window.Evexi.proxy(url, request) // A custom object will be returned with pre decoded json from the body

} catch (e) {
  console.log(`CAUGHT PROXY ${e}`)
}
````