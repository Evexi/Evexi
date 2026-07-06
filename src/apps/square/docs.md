# Register Event Listener

Registers a callback to receive Square webhook events forwarded by the player. Supported event types:

- Catalog version updates
- Order creation / updates
- Payment updates
- Terminal checkout updates

```typescript
Evexi.square.event((message) => {
  console.log(message) // parsed webhook payload
})
```

Requires `ENVIRONMENT`, `LOCATION`, and `TERMINAL_ID` env variables to be set on the player from the admin portal.

# Proxy Request

Routes an HTTP request through the Evexi platform to the Square API, using the credentials configured on the player. This avoids CORS issues and keeps credentials off the client.

```typescript
const res = await Evexi.proxy('/square/v2/catalog/list', { method: 'GET' })
if (res.ok) {
  console.log(res.json)
}
```

Requires `LOCATION`, `TERMINAL_ID`, and `ENVIRONMENT` (`LIVE` or `SANDBOX`) env variables set on the player. Use the endpoint and method inputs above to test a different Square API path.
