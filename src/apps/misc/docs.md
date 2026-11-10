# Get Info

Returns general information about the player the content is running on.

```typescript
const info = await Evexi.info()
// { deviceId: 'abc123', version: '2.9.0', provider: 'WebOS', groupLeader: false }
```

- **deviceId** — unique identifier for the device
- **version** — current Evexi player software version
- **provider** — the platform the player is running on (e.g. `WebOS`, `Tizen`, `HTML`)
- **groupLeader** — `true` when this player is the leader of its sync group. Only the leader can start a synchronised play (`Evexi.playback.play(src, { sync: true })`); followers are refused with `SYNC_NOT_LEADER`. Re-read it before deciding, as the backend can move leadership at any time. Players older than 3.15 omit this field, so treat a missing value as `false`

# Write Log

Injects a message directly into the player's log file. Useful for debugging content behaviour from the admin portal.

```typescript
Evexi.log('Something happened in my content.')
```

Failed download events are also automatically written to the log by the API middleware.
