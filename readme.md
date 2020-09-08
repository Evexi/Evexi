# Evexi API
![Logo](./logo.jpg)

### Introduction

The Evexi API is designed for use with background tasks, web items or zip items within the Evexi Player and the API’ 
role is to manage the user_files directory within the Player. That being said, it is important to note that it is the 
responsibility of the developer to manage the stored assets. On the Samsung TIZEN platform the API is only supported on 
firmware 2070 and above. Within the examples directory are examples of the filesystem communication including picture 
in picture support. Example filesystem API methods are [here](examples/index.html)



#### Communication

Communication with the API is achieved with a window.parent postMessage call with structured data. The API responds with a standard 'message' event.

````javascript
window.parent.postMessage(JSON.stringify({action: 'storage.get', name: 'text.json'}), '*');
````

````javascript
window.addEventListener("message", function(e) {
  // e = response format
});
````



### Supported Calls

##### Info

Retrieving information about the players’ ID, version or the provider interface is achieved as follows:

````javascript
window.parent.postMessage(JSON.stringify({action: 'info'}), '*');
````

````javascript
{deviceId: '', version: '', provider: ''}
````



##### Log

Evexi supports injecting logs to the Player logfile using the below method. 
Most args can be provided however the method only takes one param at a time. 
Failed download events are already supported and stored within logs via the API middleware.

NOTE: Use with caution in a production environment. 
Also this is likely to be removed in later versions, therefore remember to check if the function exists before using it.

````javascript
window.parent.postMessage(JSON.stringify({action: 'log', data: 'My log details'}), '*');
````



#### Storage Methods

The storage API is accessible as follows:


##### Get

Get a single item from storage. The returned data will vary depending on the requested file type. 
If an item has a ‘.json’ suffix the returned data will be returned as a JSON decoded object. Similarly, 
if an item has the suffix ('.html', '.jpg', '.jpeg', 'png', 'bmp') then the data returned will be a path to where 
the file is within the file system.


````javascript
window.parent.postMessage(JSON.stringify({action: 'storage.get', name: 'text.json'}), '*');
````

````typescript
export interface GetResponse {
    name: string;
    error: (string | null);
    type: string; // image | text | web
    data: (null | object | string);
}
````

````javascript
// Successful
{name: 'image.jpg', error: null, type: 'image', data: '/mtd_down/common/MrPlayer/user_files/image.jpg'}

// Failed
{name: 'image.jpg', error: 'File does not exist', type: 'image', data: null}
````



##### Put

Put is used solely for .json files. The second data param should be JSON.parse object, e.g. standard json NON stringify). 
The PUT method will encode the data provided before it is stored on the file system. 
The GET method will decode (if it’s of type text) before its returned within the callback. 
The response will be a boolean of if the event has been successful or not.

````javascript
window.parent.postMessage(JSON.stringify({action: 'storage.put', name: 'text.json', data: 'my data string'}), '*');
````



##### Delete

Deletes a single file or image. A successful response will return boolean.

````javascript
window.parent.postMessage(JSON.stringify({action: 'storage.delete', name: 'mrx.png'}), '*');
````



##### List

Lists all items currently in storage. 
Boolean false will be returned if an issue occurs when listing the items. 
An empty array will be returned if the response is successful but no items exist.

````javascript
window.parent.postMessage(JSON.stringify({action: 'storage.list'}), '*');
````

An array of strings will be returned.



##### Clear

Clears ALL the items from storage (user_files directory) and will return a count of the number of deleted items. 
No errors are returned from this function.

````javascript
window.parent.postMessage(JSON.stringify({action: 'storage.clear'}), '*');
````



##### Download

Download’s the requested file. Download only supports the following file types '.html', '.jpg', '.jpeg'. If a unsupported url is provided the download will return an error string.

NOTE: It is not necessary to validate prior to downloading a file (this was required in previous Samsung platform releases, example, SSSP2 & SSSP3). If the downloaded file already exists the function will return as if it were a successful download.

NOTE: Nested folders are not supported. Downloaded files are always stored in the user_files root directory.

````javascript
// a.png will be used for the file name
window.parent.postMessage(JSON.stringify({action: 'storage.download', url: 'https://mrx.technology/assets/images/compatible/a.png'}), '*');

// new.png will be used for the file name
window.parent.postMessage(JSON.stringify({action: 'storage.download', url: 'https://mrx.technology/assets/images/compatible/a.png', name: 'new.png'}), '*');
````

````typescript
export interface GetResponse {
    name: string;
    error: (string | null);
    type: string; // image | text | web
    data: (null | object | string);
}
````



##### Exists

Validates if a file exists on the file system. The response will return boolean confirming if the file exists or not.

````javascript
window.parent.postMessage(JSON.stringify({action: 'storage.exists', name: 'mrx.png'}), '*');
````


##### Picture in Picture [PIP] (>2.0.0)

Picture in picture is supported within the lifecycle events of 'playing' & 'stopping'. 
Please see [here](examples/pip.html) for further details. 
The picture in picture feature provides control of the screens display port input and delivers the input feed within a window/pane of created content.


````typescript
const settings = {
    source: 'HDMI', // 'HDMI' | 'DVI' | 'DP'
    num: 1, // PORT 1
    x: '0px', // can be percentage or pixels
    y: '0px', // can be percentage or pixels
    width: '100%', // can be percentage or pixels
    height: '100%' // can be percentage or pixels
}

window.parent.postMessage(JSON.stringify({action: 'pip.show', data: settings}), '*');
````

Please then use the 'stopping' event to run 'pip.hide'. This will remove the picture in picture feed or remove the
fallback image if it is being displayed.

NOTE: Not running 'pip.hide' on the 'stopping' event may cause issues with further content.

````typescript
window.parent.postMessage(JSON.stringify({action: 'pip.hide'}), '*');
````



##### Lifecycle Events (>2.0.0)

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
For further information click [here](examples/pip.html) for an example of lifecycle events.


````typescript
export type MediaType = 'WEB' | 'INTERACTIVE' | 'IMAGE' | 'VIDEO' | 'ZIP' | 'PIP'

export interface MediaInterface {
    id: string
    duration: number
    type: MediaType,
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
