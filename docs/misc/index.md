# Misc
The following can be used to get version, platform details and other platform related tasks.

#

### Info
Info will return further details about the type of player the content is running on.
````typescript
try {
  const info = await Evexi.info() // {deviceId: '', version: '', provider: 'HTML'}
} catch (e) {
  // Catch error
}
````

#

### Logs
Evexi supports injecting logs to the Player log file using the below method. Failed download events are already supported and stored within logs via the API middleware.
````typescript
try {
  Evexi.log('')
} catch (e) {
  // Catch error
}
````