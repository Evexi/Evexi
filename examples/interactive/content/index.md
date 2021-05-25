# Interactive Content
Interactive content will be displayed on the player and will use the player API to pause/resume the content and send and receieve messages from the scanURL.

#

First create the interactive session:

````typescript
window.parent.postMessage(JSON.stringify({
    
    action: 'interact.create', 
    
    maxRuntime: 60000, // The maximum runtime for the content item in seconds

    clientUrl: 'http://url.com', // [OPTIONAL] - If the content is going to be controlled by the user, a QR code will be generated for this address by the player for the user to scan. Once scanned their device will send them to this configured url

    maxClients: 2  // [Required when using clientUrl] - Limit the number of people who can connect to the display scan URL. This will depend on the content 

    noCommunicationTimeout: 50000 // [OPTIONAL] [Only available when using clientUrl] // If there is no communication between the clientUrl and the content after how long to timeout the session (in seconds).

}), '*');
````

You listen for messages on the page like so:

````javascript
window.addEventListener("message", function(e) {
  var data = JSON.parse(e.data);
});
````

An 'interact.create' response will return the following:

````javascript
export interface InteractiveCreateRes {
    qr: string // base64 of the url
    url: string // url behind the QR code
    sessionId: string // current sessionId
}
````

The message can be picked up like so. You can then display the QR code within your application for a user to interact with using the base64 provided. Please note until the QR code is scanned the interactive session is not initalized, the content will continue to run for its configured duration at this point until the scanURL is connected. If your interactive content does not require a QR code or external control (no scanURL being provided) this process works the exact same. The 'interact.create' event is triggered and you are ready to then pause the content.

````javascript
window.addEventListener("message", function(e) {
    var data = JSON.parse(e.data);

    if(data.action === 'interact.create') {
        // data.response.qr 
        // data.response.url 
        // data.response.sessionId 
    }
})
````

You will then get messages into the content whenever a user connects, disconnects or messages from the scan URL as so:

````javascript
window.addEventListener("message", function(e) {
    
    var data = JSON.parse(e.data);

    // A user has connected via the scanURL
    if(data.action === 'interact.message' && data.event === 'connect') {
        // data.client // client id string

        // You can either start the interactive session now or wait for more users
        // window.parent.postMessage(JSON.stringify({action: 'interact.start'}))
    }

    // A message has been sent from a user to the content
    if(data.action === 'interact.message' && data.event === 'message') {
        // data.client // client id string
        // data.data // can be a string or an object containing any data
    }

    // A user has disconnected from the scanURL
    if(data.action === 'interact.message' && data.event === 'disconnect') {
        // You can destroy the interactive session now if you want
        // window.parent.postMessage(JSON.stringify({action: 'interact.destroy'}))
    }

    // A user has been kicked from the interactive session
    if(data.action === 'interact.message' && data.event === 'kick') {
        // You can destroy the interactive session now if you want
        // window.parent.postMessage(JSON.stringify({action: 'interact.destroy'}))
    }

})
````

You can then start the interactive session by doing the following. The interactive session runTime and other config from create has already been automatically applied:

````javascript
window.parent.postMessage(JSON.stringify({action: 'interact.start'}))
````

You can also destroy the session. When destroying a session the next peice of content will start to play immediately

````javascript
window.parent.postMessage(JSON.stringify({action: 'interact.destroy'}))
````