# Square Webhooks

Customers who use Square can now receive a specified number of supported Webhooks directly into your content application. This method avoids having to poll Square data in certain scenarios.

#

Note: You need to grant the relivant Square permissions per hook you plan to use
Note: We use our own structs rather than the structs on the Square documentation

## Supported Webhooks

1. Catalog version updated - https://developer.squareup.com/reference/square/catalog-api/webhooks/catalog.version.updated
2. Order created - https://developer.squareup.com/reference/square/orders-api/webhooks/order.created
3. Order updated - https://developer.squareup.com/reference/square/orders-api/webhooks/order.updated
4. Payment updated - https://developer.squareup.com/reference/square/payments-api/webhooks/payment.updated
5. Terminal checkout updated - https://developer.squareup.com/reference/square/terminal-api/webhooks/terminal.checkout.updated  

### Listen

You can listen to Square events like so:

```typescript
Evexi.square.event((msg) => {
  // msg is one of our supported structs.
})
```
