# File System

The storage API contains the below commands. You can find an example [here](./index.html)

#

### Get

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

#


### Put

Put is used solely for .json files. The second data param should be JSON.parse object, e.g. standard json NON stringify). 
The PUT method will encode the data provided before it is stored on the file system. 
The GET method will decode (if it’s of type text) before its returned within the callback. 
The response will be a boolean of if the event has been successful or not.

````javascript
window.parent.postMessage(JSON.stringify({action: 'storage.put', name: 'text.json', data: 'my data string'}), '*');
````

#


### Delete

Deletes a single file or image. A successful response will return boolean.

````javascript
window.parent.postMessage(JSON.stringify({action: 'storage.delete', name: 'mrx.png'}), '*');
````

#

### List

Lists all items currently in storage. 
Boolean false will be returned if an issue occurs when listing the items. 
An empty array will be returned if the response is successful but no items exist.

````javascript
window.parent.postMessage(JSON.stringify({action: 'storage.list'}), '*');
````

An array of strings will be returned.


#


### Clear

Clears ALL the items from storage (user_files directory) and will return a count of the number of deleted items. 
No errors are returned from this function.

````javascript
window.parent.postMessage(JSON.stringify({action: 'storage.clear'}), '*');
````

#


### Download

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
export interface DownloadResponse {
    url: string | null | undefined
    data: string | null // file path or null if error
    error: string | null
}
````

#


### Exists

Validates if a file exists on the file system. The response will return boolean confirming if the file exists or not.

````javascript
window.parent.postMessage(JSON.stringify({action: 'storage.exists', name: 'mrx.png'}), '*');
````
