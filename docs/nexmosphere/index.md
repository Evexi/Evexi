# Nexmosphere

[Nexmosphere](https://nexmosphere.com/) provides a variety of sensors that can be utilized by the Evexi platform to offer users content with sensor messages. You can see a [working example here](./src/index.ts).

#

If you are creating [interactive content](./../interactive/content/index.md#start-session), it is recommended that you call `Evexi.interactive.start()` within the `Evexi.nexmosphere.onMessage()` callback function once you receive the desired start message for your application. This will pause playback and display your application until the `Evexi.interactive.destroy()` method is invoked. If you attach your content to a player as engage content it will be loaded and in the background so you should open and listen for messages outside the [Evexi lifecycle](./../../readme.md#lifecycle-events) events.

#

When working locally, you are able to [mock](./../mock/index.md#mocking-nexmosphere-messages) the Evexi Nexmosphere API to mimic inbound messages.

#

It's important to note that this feature is currently only supported on Windows and Linux platforms, and on Evexi player 2.9.0 or higher.

#

### Open

To open a connection to the Nexmosphere device, connect the Nexmosphere controller to a USB port if you're on Windows or Linux, then run the `Evexi.nexmosphere.open()` method without any arguments.

```typescript
try {
  const res = await Evexi.nexmosphere.open()
} catch (e) {
  //
}
```

#

### OnMessage

To ensure that no messages are missed, it's best to start listening for messages before opening the connection. To do this, provide a callback method that will run every time a message is received from the Nexmosphere controller. The provided callback method will be destroyed when the `close()` method is invoked or when the player changes content and the window.stopping lifecycle method runs.

The Nexmosphere controller sends data bits to the Evexi player, which then groups and provides them to the content as a single message event based on the [Nexmosphere command structure](https://nexmosphere.com/document/API_Manual_Q3_2022.pdf). For example, a button press message would look like this: `X003A[3]`.

```typescript
Evexi.nexmosphere.onMessage((message) => {
  // message as a string // 'X003A[3]'
})
```

#

### Close

To stop Nexmosphere communication, you can close the connection using the `close()` method. Note that the Evexi player will manually close the connection as part of the Evexi lifecycle when `window.stopping()` is called. If you require Nexmosphere communication for the entire duration of your application, you don't need to call the `close()` method.

```typescript
try {
  const res = await Evexi.nexmosphere.close()
} catch (e) {
  //
}
```
