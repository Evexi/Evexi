# Put File

Writes a file to the player's local storage. The second argument can be a string, object, or boolean — it is automatically encoded on write and decoded on read.

```typescript
const success = await Evexi.fs.put('myFile.txt', 'Hello World!')
// Returns true on success, false on failure
```

Only `.txt` and `.json` files are supported. Use the filename and content inputs above to customise this test.

# Get File

Retrieves a file from local storage and validates its content against the expected value.

```typescript
const res = await Evexi.fs.get('myFile.txt')
// { name: 'myFile.txt', data: 'Hello World!', type: 'text', error: null }
```

For media files (images, video) `data` will be a local file path rather than the file's content.

# Check File Exists

Validates whether a named file is present in local storage.

```typescript
const exists = await Evexi.fs.exists('myFile.txt')
// Returns true if the file exists, false otherwise
```

# Download File

Downloads a remote file and saves it to local storage. Supported types: `.html`, `.jpg`, `.jpeg`, `.png`, `.mp4`. If the file already exists it returns as a successful download.

```typescript
const res = await Evexi.fs.download('https://example.com/video.mp4', 'video.mp4')
// { url: '...', data: '/path/to/video.mp4', error: null }
```

An optional third argument supports bearer token authentication: `{ bearer: 'Bearer TOKEN' }`.

# List Files

Returns all filenames currently in local storage. Expects both the text file and video file from previous tests to be present.

```typescript
const files = await Evexi.fs.list()
// ['My Video.mp4', 'My JSON.json'] or false on error
```

An empty array is returned if storage is empty. `false` indicates an error.

# Delete File

Removes a single named file from local storage.

```typescript
const success = await Evexi.fs.del('myFile.txt')
// Returns true on success, false on failure
```

# List Files (Post-Delete)

Validates that the deleted video file is gone and only the text file remains.

```typescript
const files = await Evexi.fs.list()
// Should now only contain ['My JSON.json']
```

# Clear Files

Deletes all files from local storage and returns the count of items removed.

```typescript
const count = await Evexi.fs.clear()
// Returns the number of files deleted (e.g. 1)
// Returns 0 if storage was already empty
```
