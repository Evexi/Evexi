# Register Message Listener

Registers a callback that fires whenever a message is received from another player in the same group. The message payload includes the sender's IP, the message data, and their player ID.

```typescript
Evexi.playerMessaging.onMessage((message) => {
  const { ip, data, deviceId } = message
  console.log(`Message from ${deviceId}: ${data}`)
})
```

Players must be in the same group on the Evexi CMS and on the same network.

# Send Message

Broadcasts a string message to all other players in the same group. The sender does not receive their own message.

```typescript
const response = await Evexi.playerMessaging.send('Hello from player A')
if (response.success) {
  console.log('Message sent')
} else {
  console.error(response.error)
}
```

Use the message input above to customise what is broadcast.
