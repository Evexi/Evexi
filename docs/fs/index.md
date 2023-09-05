# File System

The storage API contains the following commands:

You can view a [working example here](./src).

- [Get](#get)
- [Put](#put)
- [Delete](#delete)
- [List](#list)
- [Clear](#clear)
- [Download](#download)
- [Exists](#exists)

#

### GET

Get a single item from storage. The returned '.data' will vary depending on the requested file type. If the item is an asset such as a video or image, the '.data' will be a path string for the item. If its a '.json' file then the '.data' will be the items content.

```typescript
try {
  const res = await Evexi.fs.get('image.jpg');
  // Successful {name: 'image.jpg', error: null, type: 'image', data: '/mtd_down/common/MrPlayer/user_files/image.jpg'}
  // Failed {name: 'image.jpg', error: 'File does not exist', type: 'image', data: null}
} catch (e) {
  // Catch error
}
```

#

### PUT

Put is used solely for .json files. The method will automatically encode on the PUT method and decode on the GET method, so the second argument can be a string, object or bool. The response will be a boolean of if the event has been successful or not.

```typescript
try {
  const res = await Evexi.fs.put('text2.json', 'my text file'); // boolean
} catch (e) {
  // Catch error
}
```

#

### DELETE

Deletes a single asset. A successful response will return boolean.

```typescript
try {
  const res = await Evexi.fs.delete('text2.json'); // boolean
} catch (e) {
  // Catch error
}
```

#

### LIST

Lists all items currently in storage for the player.
Boolean false will be returned if an issue occurs when listing the items.
An empty array will be returned if the response is successful but no items exist.

```typescript
try {
  const res = await Evexi.fs.list(); // ['fileA.png', 'fileB.png'] || false
} catch (e) {
  // Catch error
}
```

#

### CLEAR

Clears ALL the items from storage (user_files directory) and will return a count of the number of deleted items.

```typescript
try {
  const res = await Evexi.fs.clear(); // 3 number of items deleted
} catch (e) {
  // Catch error
}
```

#

### DOWNLOAD

Download’s the requested file. Download only supports the following file types .html, .jpg, .jpeg & .png. If an unsupported URL is provided the download assume it's a HTML type.

NOTE: It is not necessary to validate prior to downloading a file (this was required in previous Samsung platform releases, example, SSSP2 & SSSP3). If the downloaded file already exists, the function will return as if it were a successful download.

NOTE: Nested folders are not supported. Downloaded files are always stored in the user_files root directory.

```typescript
try {
  const download = await Evexi.fs.download(
    'https://admin.evexi.technology/img/logo/Evexi_logo_whitered.png'
  );
  // success {url: 'https://admin.evexi.technology/img/logo/Evexi_logo_whitered.png', data: '/mtd_down/common/MrPlayer/user_files/mrx.png', error: null}

  // error {url: 'https://admin.evexi.technology/img/logo/Evexi_logo_whitered.png', data: null, error: 'file download failed'}
} catch (e) {
  Log.error('DOWNLOAD: error');
}
```

#

### Exists

Validates if a file exists on the file system. The response will return boolean confirming if the file exists or not.

```typescript
try {
  const res = await Evexi.fs.exists('image.png'); // boolean
} catch (e) {
  // Catch error
}
```
