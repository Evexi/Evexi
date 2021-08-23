# Evexi API
![Logo](./logo.jpg)

## Introduction

The Evexi API is designed for use with background tasks, web items or zip items within the Evexi Player. It is important to note that it is the 
responsibility of the developer to manage any stored assets. On the Samsung TIZEN platform the API is only supported on firmware 2070 and above. Within the examples directory are examples of the filesystem communication, picture in picture, interactive and more.

#

###### Please see the following examples here:
* [File System](examples/fileSystem/index.md)
* [Picture In Picture](examples/pip/index.md)
* [Interactive](examples/interactive/index.md)
* [Misk](examples/misk/index.md) (info and log)

#

#### Communication

Communication with the API is achieved with a window.parent postMessage call with structured data. The API responds with a standard 'message' event.

````javascript
window.parent.postMessage(
    JSON.stringify({action: 'storage.get', name: 'text.json'}), 
    '*'
)
````

````javascript
window.addEventListener("message", function(e) {
  // e = response format
});
````

#


#### Lifecycle Events

Lifecycle events are triggered by the player if the functions exist within the inner content.

`````typescript
export enum LifeCycleEvent {
    PLAYING = 'playing',
    STOPPING = 'stopping'
}
`````

To use this feature create a named function within the script of the loaded content.

NOTE: It is important to note that content is pre-loaded in the background prior to being played. 
When using picture in picture or animation triggers it must be done within the ‘playing’ function.


````typescript
export interface MediaInterface {
    id: string
    duration: number
    type: 'WEB' | 'INTERACTIVE' | 'IMAGE' | 'VIDEO' | 'ZIP' | 'PIP',
}
````

````html
<script type="text/javascript">
    
    /**
     * Lifecycle event (This function is triggered by the player to indicate the content is visible on the display.
     * You should use this function to trigger any animations or if your showing a picture in picture feed you
     * should do it here). Any code you put outside this will be ran when the content is loaded and before its displayed.
     * The item is passed in so feel free to check its duration, id or anything else required.
     */
    function playing(item: MediaInterface) {
        console.log('PLAYING ITEM')
    }
    
    /**
     * Lifecycle event (Triggered when the content has stopped showing and before the content is destroyed.
     * You should put any clean up or reset code here.)
     */
    function stopping(item: MediaInterface) {
        console.log('STOPPING ITEM')
    }

</script>
````