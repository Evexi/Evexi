# Get Info

Returns general information about the player the content is running on.

```typescript
const info = await Evexi.info()
// { deviceId: 'abc123', version: '2.9.0', provider: 'WebOS' }
```

- **deviceId** — unique identifier for the device
- **version** — current Evexi player software version
- **provider** — the platform the player is running on (e.g. `WebOS`, `Tizen`, `HTML`)

# Write Log

Injects a message directly into the player's log file. Useful for debugging content behaviour from the admin portal.

```typescript
Evexi.log('Something happened in my content.')
```

Failed download events are also automatically written to the log by the API middleware.
