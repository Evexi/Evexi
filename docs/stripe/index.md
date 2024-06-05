# Stripe

Stripe support gives you the ability to query Stripe from inside your media or application content.

You can view a [working example here](./src/index.ts).

#

## Setup
* On the admin portal go to integration page then Stripe
* Authenticate your stripe account against Evexi

#

## Proxy (Network request from content to Stripe API)
Proxy can be used when you wish to make Stripe requests from your players media content.

Proxy uses standard window.fetch under the hood. The second argument (request) should match the [RequestInit structure](https://microsoft.github.io/PowerBI-JavaScript/interfaces/_node_modules_typedoc_node_modules_typescript_lib_lib_dom_d_.requestinit.html). The only difference is by default the method will use `'Content-Type': 'application/json'`. This and any other options as part of the `RequestInit` can be overridden.

> Please note you should only run a single proxy request at a time.


````typescript
try {
  // Default method is a GET and 'Content-Type': 'application/json' header will be used. All RequestInit options can be overridden using the second argument.
  const request: RequestInit = {
    method: 'POST'
  }
  const res = await Evexi.proxy<any>('/stripe', request) // A custom object will be returned with pre decoded json from the body
} catch (e) {
  console.log(`CAUGHT PROXY ${e}`)
}
````

> Note: While working locally if you want to mock the response to Evexi.proxy requests please see here: [Mock & Server](/docs/mock/index.md)
