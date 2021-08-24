# Misc
The following can be used to get version, platform details and other platform related tasks.

#

### Version
You can get the players version by the following.
````typescript
window.Evexi.version // 2.4.0
````

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