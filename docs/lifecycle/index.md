# Lifecycle Events
Lifecycle events are triggered by the player. You can listen for these events with your content and use to start animations, sessions or whatever is needed within your application. You can also pre-load content outside these methods.

#

### Playing

Triggered when the content is visible on the display.
You should use this function to trigger any animations or if your showing a picture in picture feed. Any code you put outside this will run when the content is loaded and before its displayed.
The item is passed in so feel free to check its duration, id or anything else required.

```typescript
Evexi.lifecycle.playing(item => {
    console.log('PLAYING ITEM', item)
})
```

#

### Stopping

Triggered when the content has stopped showing and before the content is destroyed.
You should put any clean up or reset code here.

```typescript
Evexi.lifecycle.stopping(item => {
    console.log('STOPPING ITEM', item)
})

```

