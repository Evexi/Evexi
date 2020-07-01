# Evexi API
![Logo](./logo.jpg)

### Introduction

The Evexi API is available to be used on background tasks, web items or zip items used within Evexi Player. The API will manage the user_files directory within the player, when using the API it's the developers responsibility to manage stored assets correctly. On the TIZEN platform the API is only available on firmware 2070 and higher.



#### Communication

You can communicate with the API by doing a window.parent postMessage call with structured data. The API will then respond on on window with a standard 'message' event.

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

Get information about the player itself such as its ID, its version or the provider interface the player is using to communicate with the display.

````javascript
window.parent.postMessage(JSON.stringify({action: 'info'}), '*');
````

````javascript
{deviceId: '', version: '', provider: ''}
````



##### Log

You are able to add logs to the MRX log file via the following method. Most args can be provided however the method only takes one param. Please be careful with this and avoid using in production. Failed download events will already be stored within logs via our API middleware. NOTE: This is likely to be removed in later versions so please check if the function exists before using it.

````javascript
window.parent.postMessage(JSON.stringify({action: 'log', data: 'My log details'}), '*');
````



#### Storage Methods

The storgage API can be accessed by the following:



##### Get

Get a single item from storage. The returned data will be different based on the type of file you are getting. If you get an item that ends with '.json' suffix the data will be returned as a JSON decoded object. If the item you are getting has the suffix ('.html', '.jpg', '.jpeg', 'png', 'bmp') then the data returned will be a path to where the file is within the file system.

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

This can be used for .json files ONLY. The data (second param should be JSON.parse object E.G standard json NON stringify). The PUT method will encode the data provided before it stores on the file system and the GET method will decode (if its of type text) before its returned within the callback. The response will be a boolean of if the event has been successful or not.

````javascript
window.parent.postMessage(JSON.stringify({action: 'storage.put', name: 'text.json', data: 'my data string'}), '*');
````



##### Delete

Use to delete a single file or image. Response will be a success boolean.

````javascript
window.parent.postMessage(JSON.stringify({action: 'storage.delete', name: 'mrx.png'}), '*');
````



##### List

List all the items currently in storage. Boolean false will be returned if there was an issue with listing the items only. An empty array will be returned if the response is successful but no items exist.

````javascript
window.parent.postMessage(JSON.stringify({action: 'storage.list'}), '*');
````

An array of strings will be returned.



##### Clear

Clear ALL the items from storage (user_files directory). Will return a count of how many items have been deleted. No errors are returned from this function.

````javascript
window.parent.postMessage(JSON.stringify({action: 'storage.clear'}), '*');
````



##### Download

Download will download the file provided. Download only works for the following types ('.html', '.jpg', '.jpeg'). If a unsupported url is provided the download will return an error string.

Note: You dont need to check if the file exists before downloading (like you need to on SSSP2). If the file already exists the function will return as if it were a successful download. Note: Nested folders are not supported. Downloads will be stored in the root of the user_files directory.

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

Check if a file exists on the file system. Response will be a boolean if the file exists or not.

````javascript
window.parent.postMessage(JSON.stringify({action: 'storage.exists', name: 'mrx.png'}), '*');
````
