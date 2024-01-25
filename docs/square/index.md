# Square

Square support gives you the ability to query Square from inside your content as well as the ability to receive specific Square web hook events.

#

## Setup
* On the admin portal go to integration page then Square
* Select all the Square permissions your application will need and connect your Square account
* On the player/player group using the application add the following ENV vars

| NAME        | VALUE                | NOTES                                                |
|-------------|----------------------|------------------------------------------------------|
| LOCATION    | {square location id} | Used for orders and catalog (web hook events only)   |
| TERMINAL_ID | {square terminal id} | Used for payments (web hook events only)             |
| ENVIRONMENT | LIVE                 | "LIVE" or "SANDBOX" supported. Default value is LIVE |

#

## Proxy (Network request from content to Square API)
Proxy can be used when you wish to make Square requests from your players media content.

Proxy uses standard window.fetch under the hood. The second argument (request) should match the [RequestInit structure](https://microsoft.github.io/PowerBI-JavaScript/interfaces/_node_modules_typedoc_node_modules_typescript_lib_lib_dom_d_.requestinit.html). The only difference is by default the method will use `'Content-Type': 'application/json'`. This and any other options as part of the `RequestInit` can be overridden.

Please note you should only run a single proxy request at a time.


````typescript
try {
  // Default method is a GET and by default the player will use 'Content-Type': 'application/json'. All RequestInit options can be overridden using the second argument.
  const request: RequestInit = {
    method: 'POST'
  }
  const res = await Evexi.proxy('/square/v2/catalog/list', request) // A custom object will be returned with pre decoded json from the body
} catch (e) {
  console.log(`CAUGHT PROXY ${e}`)
}
````

#

Note: `While working locally if you want to mock the response to Evexi.proxy requests please see here:` [Mock & Server](/docs/mock/index.md)

#

## Web Hooks
Web Hooks will get triggered automatically when data changes on your Square account. Please note you need three env var's setup against a player to receive the events as well as any Square permissions under Square integration page on the admin portal.

Note: We use our own struct's for the data sent.

### Supported Webhooks

1. Catalog version updated - https://developer.squareup.com/reference/square/catalog-api/webhooks/catalog.version.updated
2. Order created - https://developer.squareup.com/reference/square/orders-api/webhooks/order.created
3. Order updated - https://developer.squareup.com/reference/square/orders-api/webhooks/order.updated
4. Payment updated - https://developer.squareup.com/reference/square/payments-api/webhooks/payment.updated
5. Terminal checkout updated - https://developer.squareup.com/reference/square/terminal-api/webhooks/terminal.checkout.updated
* how to receive web hook messages


### Listening For Events

You can listen to Square events like so:

```typescript
Evexi.square.event((msg) => {
  // msg is one of our supported structs.
})
```

#

## Sandbox
You can use Square sandbox by adjusting the player ENV variable `ENVIRONMENT` to the value of `SANDBOX`. This will cause any `Evexi.proxy()` requests and also any incoming web hook messages will be from your Square sandbox account. Please also not this will need to be enabled from the admin integrations page.