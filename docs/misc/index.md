# Misc
The following can be used to get version, platform details and other platform related tasks.

#

### Info
Info will return further details about the type of player the content is running on.
````typescript
try {
  const info = await window.Evexi.info() // {deviceId: '', version: '', provider: 'HTML'}
} catch (e) {
  // Catch error
}
````

#

### Logs
Evexi supports injecting logs to the Player log file using the below method. Failed download events are already supported and stored within logs via the API middleware.
````typescript
try {
  window.Evexi.log('')
} catch (e) {
  // Catch error
}
````

#

### Proxy
Proxy can be used when you wish to make server side requests from your player to one of the enabled integrations on your account.
````typescript
try {
 
  // First segment is the name, remaining segments will be the endpoints for the related platform
  const url = '/square'
  
  // window.fetch RequestInit type https://github.com/microsoft/TypeScript/blob/main/lib/lib.webworker.d.ts#L436-L489
  // Default method is a GET and by default the player will use 'Content-Type': 'application/json'. All RequestInit options can be overridden using the second argument.
  const request: RequestInit = {
    method: 'POST'
  }

  const res = await window.Evexi.proxy(url, request) // A custom object will be returned with pre decoded json from the body

} catch (e) {
  console.log(`CAUGHT PROXY ${e}`)
}
````