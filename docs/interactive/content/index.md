# Interactive Content
Interactive content will be displayed on the player and will use the player API to pause/resume the content and send and receive messages from the scanURL. Please see documentation on [packing your application](./../../../README.md#packaging) ready to deploy to a player.

You can view a [working example here](./src).

#

* [Event Listeners](#event-listeners)
* [Create Session](#create-session)
* [Start Session](#start-session)
* [Destroy Session](#destroy-session)
* [Message Client](#message-client)
* [Kick Client](#kick-client)

#

### Event Listeners
````typescript
Evexi.interactive.onConnect((clientId) => {
    // clientId (string of the clientId connected)
})

Evexi.interactive.onDisconnect((clientId) => {
    // clientId (string of the clientId disconnected)
})

Evexi.interactive.onKick((clientId) => {
    // clientId (string of the clientId kicked)
})

Evexi.interactive.onMessage((message, client) => {
    // message (string | Record<string, unknown>) // depends what the client sends
    // client (the clientId who sent the message)
})
````

#

### Create Session
When the interactive content is loaded create an interactive session. There are two different types of sessions.

#

Remote session's can be used when you wish a third part device to communicate with the player and vice versa.
````typescript
try {
    const res = await Evexi.interactive.create(
        180000, // maxRuntime (Once a user connects, after this time the content will timeout regardless of any noCommunicationTimeout set) (Once this timeout is reached the player will destroy the item and player will play the next asset)
        'http://localhost:1234/example', // clientUrl? / scanURL? (When user scans QR code this is the URL they will be taken too)
        2, // maxClients (How many people can connect into the session)
        undefined // noCommunicationTimeout? (If no messages are sent or received after how long time timeout the session) (When reached the player will destroy the item and player will play the next asset)
    ) //
    // Success
} catch(e) {
    // Catch error
}
````

#

Local session's can be used on the player when you wish to pause playback and timeout a particular session, maybe based on touch input etc where a user will interactive physically with the player device. This can be used when offline.
````typescript
try {
    const res = await Evexi.interactive.create(
        180000, // maxRuntime (Once a user connects, after this time the content will timeout) (Once this timeout is reached the player will destroy the item and player will play the next asset)
} catch (e) {
    // Catch error
}
````

#

### Start Session
Once a user has connected (or multiple), you can start the session. Starting the session will pause the player until the timeout is reached or session destroyed.
````typescript
try {
    Evexi.interactive.start()
} catch (e) {
    // Catch error
}
````

#

### Destroy Session
Destroying a session will cause the player to play the next piece of content. Anyone still connected to the scanURL will get disconnected and the QR code will become invalid. All timers and event listeners will be cleared.
````typescript
try {
    Evexi.interactive.destroy()
} catch (e) {
    // Catch error
}
````

#

### Message Client
Send a message to all connected clients or to a specified client from the content. Second argument to message is clientId.
````typescript
try {
    Evexi.interactive.message({foo: 'bar'})
} catch (e) {
    // Catch error
}
````

#

### Kick Client
The content can kick a particular client.
````typescript
try {
    Evexi.interactive.kick('1234')
} catch (e) {
    // Catch error
}
````