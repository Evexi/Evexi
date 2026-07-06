# Destroy Session

Ends the interactive session and returns the player to its normal playlist. Call this when the user interaction is complete or when the session times out.

```typescript
Evexi.interactive.destroy()
```

This is also used by the Touch To Engage pattern — assign your content as `application content` and call `destroy()` when you want to hand control back to the playlist.

# Create Local Session

Sets up a local interactive session on the player. Passing only `maxRuntime` creates a local session with no QR scan required — useful for offline or kiosk-style interactivity.

```typescript
const session = await Evexi.interactive.create(180000)
// { sessionId: '...', qr: '', url: '' }
```

For a remote session (with QR scan), pass a `clientUrl` as the second argument. Use the max runtime input above to adjust the session length in milliseconds.

# Start Session

Activates the interactive session and pauses the player's playlist on the current content. Call this after creating a session and once any required client has connected.

```typescript
Evexi.interactive.start()
```
