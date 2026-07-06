# Get Env Variable

Retrieves a single environment variable assigned to the player from the admin portal.

```typescript
const value = await Evexi.env('MY_KEY')
// Returns the value as a string, or undefined if the key is not set
```

Environment variables are useful for passing configuration values (API keys, display IDs, feature flags) to content without hardcoding them. Use the key input above to test a specific variable set on this player.

# Listen For Env Variable Change

Registers a listener that fires whenever the given environment variable's value is updated from the platform. The callback runs automatically whenever the value changes — no polling required.

```typescript
Evexi.envChange('MY_KEY', (value) => {
  console.log('Value changed to:', value)
})
```

**Note:** Monitoring the same key in multiple locations will cause the previous listener to be overwritten. Only register one listener per key.
