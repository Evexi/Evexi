# Env Variables

The platform has the ability to send key to value pairs to a player. The environment variables can be assigned from the admin portal on the individual player page. A player will only be able to get Environment Variables if it's connected to the platform and has internet access. Environment Variables are only ever held in memory and will never get written to a players hard disk. Secure environment variables will only get sent to a player if it's also marked as secure.

#

### Get Var

You can get individual values by running the following. A promise is returned with either the value or undefined.

```typescript
try {
  const res = await Evexi.env('foo'); // bar || undefined
} catch (e) {
  // Catch error
}
```

### Env Var OnChange

You can listen to env var value changes by adding the following. If the Env Variable exists and the value changes, the callback will run.

```typescript
Evexi.envChange('FOO', (res) => {
  // Add code here
})

```