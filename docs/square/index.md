# Square Webhooks

Customers who use Square can now receive a specified number of supported Webhooks directly into your content application. This method avoids having to poll Square data in certain scenarios.

#

Note: You need to grant the relevant Square permissions per hook you plan to use
Note: We use our own structs rather than the structs on the Square documentation
Note: You need to add a bespoke player env var to be able to get the Square web hooks events sent


## Supported Webhooks

1. Catalog version updated - https://developer.squareup.com/reference/square/catalog-api/webhooks/catalog.version.updated
2. Order created - https://developer.squareup.com/reference/square/orders-api/webhooks/order.created
3. Order updated - https://developer.squareup.com/reference/square/orders-api/webhooks/order.updated
4. Payment updated - https://developer.squareup.com/reference/square/payments-api/webhooks/payment.updated
5. Terminal checkout updated - https://developer.squareup.com/reference/square/terminal-api/webhooks/terminal.checkout.updated  

#

### Configure

To get the webhook data sent to a player you need to add some player environment variables (these can either be at group or player level):

| NAME        | VALUE                | NOTES                         |
|-------------|----------------------|-------------------------------|
| LOCATION    | {square location id} | Used for orders and catalog   |
| TERMINAL_ID | {square terminal id} | Used for payments             |
| ENVIRONMENT | LIVE                 | "LIVE" or "SANDBOX" supported |

#

### Listen

You can listen to Square events like so:

```typescript
Evexi.square.event((msg) => {
  // msg is one of our supported structs.
})
```
