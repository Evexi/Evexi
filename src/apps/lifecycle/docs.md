# Register Playing Handler

Registers a callback that fires when the content becomes visible on the display. This is the primary entry point for starting animations, sessions, or any logic that should only run while the content is on screen.

```typescript
Evexi.lifecycle.playing((item) => {
  console.log('Now playing:', item.id, item.duration)
})
```

The `item` object includes the content `id`, `duration`, `type`, and other metadata. Any code placed outside this handler runs when the content loads — before it is visible.

# Register Stopping Handler

Registers a callback that fires just before the content is hidden and destroyed. Use this for cleanup, resetting state, or stopping timers and intervals.

```typescript
Evexi.lifecycle.stopping((item) => {
  clearInterval(myTimer)
  resetUI()
})
```

# Register Changed Handler

Registers a callback that fires each time a new piece of media begins to play on the player. Use this to react to playlist changes — for example, updating a UI overlay or preloading assets for the next item.

```typescript
Evexi.lifecycle.changed((item) => {
  console.log('Next item:', item.id)
})
```
