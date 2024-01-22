# Lifecycle Events
Lifecycle events are triggered by the player. You can listen for these events with your content like so.

#

### Playing

Triggered when the content is visible on the display.
You should use this function to trigger any animations or if your showing a picture in picture feed. Any code you put outside this will run when the content is loaded and before its displayed.
The item is passed in so feel free to check its duration, id or anything else required.

```typescript
Evexi.lifecycle.playing((item: MediaInterfaceLocal) => {
    console.log('PLAYING ITEM')
})
```

### Stopping

Triggered when the content has stopped showing and before the content is destroyed.
You should put any clean up or reset code here.

```typescript
Evexi.lifecycle.stopping((item: MediaInterfaceLocal) => {
    console.log('STOPPING ITEM')
})

```

