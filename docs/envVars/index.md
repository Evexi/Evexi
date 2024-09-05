# Env Variables

The platform has the ability to send key to value pairs to a player. The environment variables can be assigned from the admin portal on the individual player page.
A player will only be able to get updates for Environment Variables if it's connected to the platform and has internet access.

#

### Get Environment Variable

You can get individual values by running the following. A promise is returned with either the value or undefined.

```typescript
try {
  const res = await Evexi.env('FOO'); // bar || undefined
} catch (e) {
  // Catch error
}
```

### Listen For Environment Variable Change

You can listen to env var value changes by adding the following. If the Env Variable exists and the value changes, the callback will run.

Note: Monitoring the same key in multiple locations will result in the functionality not working as expected.

```typescript
Evexi.envChange('FOO', (res) => {
  // Add code here
})
```
