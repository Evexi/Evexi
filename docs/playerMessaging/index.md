# Message

The Evexi Player Message API allows you to communicate between players that are assigned in the same group on the Evexi CMS that are part of the same network.

### Send

To send a message to the rest of the players in the same group, use the `send()` method. The message can be any string and will be received by all players in the same group, excluding the sender.

```typescript
const response = await Evexi.playerMessaging.send('Hello World')
if (!response.success) {
  console.error(response.error)
} else {
  console.log('Message sent successfully')
}
```

#

### onMessage

To listen for messages sent by other players in the same group, use the `onMessage()` method. 

```typescript
Evexi.playerMessaging.onMessage((message) => {
  const { ip, data, playerId } = message
})
```
