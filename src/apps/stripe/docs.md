# Proxy Request

Routes an HTTP request through the Evexi platform to the Stripe API, using the credentials linked via the admin portal integration page. This avoids CORS issues and keeps secret keys off the client.

```typescript
const res = await Evexi.proxy('/stripe/v1/products', { method: 'GET' })
if (res.ok) {
  console.log(res.json)
}
```

**Important:** Only run a single proxy request at a time. For POST requests, include a `body` in the options:

```typescript
const res = await Evexi.proxy('/stripe/v1/payment_intents', {
  method: 'POST',
  body: JSON.stringify({ amount: 1000, currency: 'gbp' }),
})
```

Use the endpoint and method inputs above to test a different Stripe API path.
