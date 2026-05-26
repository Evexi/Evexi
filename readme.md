# Evexi
![Banner](./banner.png)

## Introduction

This repository contains the interactive API documentation and test suite for the **Evexi Player SDK**. It runs directly on Evexi-managed displays (WebOS, Tizen, and HTML platforms) and provides a live environment for validating every API surface the SDK exposes — file system operations, lifecycle events, payment integrations, hardware peripherals, and more.

The application is fully self-contained and deploys as a single ZIP archive to the Evexi platform. Each API group is represented as a standalone test module with inline documentation, configurable inputs, and real-time result logging.

---

## Environment Variables

The application reads two environment variables from the Evexi admin portal at startup.

### `autorun`

Determines which API test suite is loaded and ran by default when the application starts.

### `docs`

Controls whether the inline documentation panel is visible for the currently selected test.

| Value | Behaviour |
|---|---|
| `true` | The documentation panel is shown, displaying contextual notes and usage guidance for the selected API test |
| `false` | The documentation panel is hidden |

This is useful when deploying to a display where screen space should be reserved entirely for testing and results, with documentation toggled off unless needed.

### `filter`

Pre-sets which log types are visible in the live log panel. Accepts a comma-separated list of log type names.

| Value | Behaviour |
|---|---|
| `info` | Show only info logs |
| `warning` | Show only warning logs |
| `error` | Show only error logs |
| `error,warning` | Show errors and warnings only |
| *(unset)* | All log types are visible |

The filter can be changed at any time and the log panel updates immediately. Setting it back to an empty value restores the default (show all).

### `results`

Controls whether the run summary modal is open.

| Value | Behaviour |
|---|---|
| `true` | Opens the run summary modal |
| `false` | Closes the run summary modal |

Useful for surfacing the results view on a remote display without physically interacting with the screen.

### `reports_url`

When set, the application will POST a JSON report to this URL at the end of every autorun. The payload has the following shape:

```json
{
  "summary": {
    "errors": {
      "fs": { "Put File": ["error message"] }
    },
    "warnings": {
      "fs": { "List Files": ["warning message"] }
    }
  }
}
```

`errors` and `warnings` are only included when non-empty. Each key is an app label, with test labels as sub-keys mapping to arrays of log messages.

| Value | Behaviour |
|---|---|
| *(unset)* | No report is sent |
| `https://example.com/hook` | POSTs the summary JSON to the given URL after each autorun |

---

## Development

```bash
npm install
npm run dev       # Start dev server at http://localhost:3000
npm run build     # Produce dist/ and Evexi.zip in builds/
```

In development, an `EvexiMock` instance is automatically configured so the SDK can be exercised without a live player. Selective mocking is supported — only the API namespaces you need can be stubbed:

```ts
new EvexiMock(Evexi).fs().info().env({ autorun: 'true', docs: 'false' })
```

---

## API Reference

### `Evexi.fs` — File System

Local file storage on the player device.

| Method | Signature | Description |
|---|---|---|
| `put` | `(filename, content)` | Write a text or JSON file |
| `get` | `(filename)` | Read a file |
| `exists` | `(filename)` | Check whether a file exists |
| `download` | `(url, filename, options?)` | Download a remote file; accepts optional `{ bearer }` token |
| `list` | `()` | List all stored files |
| `del` | `(filename)` | Delete a file |
| `clear` | `()` | Delete all files |

**Supported extensions:** `.txt` `.json` `.html` `.jpg` `.jpeg` `.png` `.mp4`

---

### `Evexi.env` — Environment Variables

Variables are set per-device or per-group via the Evexi admin portal.

| Method | Signature | Description |
|---|---|---|
| `env` | `(key)` | Retrieve the current value of an env variable |
| `envChange` | `(key, callback)` | Subscribe to value changes; callback fires on every update |

---

### `Evexi.lifecycle` — Playback Lifecycle

Hook into the player's content lifecycle.

| Method | Description |
|---|---|
| `playing(callback)` | Fires when the content becomes visible on the display |
| `stopping(callback)` | Fires just before content is hidden or destroyed |
| `changed(callback)` | Fires when the active media item changes |

---

### `Evexi.printer` — Printing

Send receipts and formatted data to connected thermal printers.

**Supported hardware:** Samsung Kiosk (integrated), Star Micronics

| Method | Signature | Description |
|---|---|---|
| `printer.print` | `(data, options?)` | Send data to printer |
| `helper.receiptGenerator` | `()` | Returns a chainable receipt builder |

**`receiptGenerator` builder methods:**

```ts
Evexi.helper.receiptGenerator()
  .blank(2)
  .centre('Thank you!')
  .left('Item A')
  .right('$4.99')
  .stretch('Subtotal', '$9.99')
  .fill('-')
  .inject(rawData)
  .generate()   // → string
```

**`print` options:**

| Option | Values | Default |
|---|---|---|
| `port` | `PRINTERPORT0` \| `PRINTERPORT1` \| `PRINTERPORT2` | — |
| `baudRate` | number | `115200` |
| `parity` | `NONE` \| `ODD` \| `EVEN` | `NONE` |

---

### `Evexi.interactive` — Interactive Sessions

Pause the playlist and hand control to an interactive experience, either locally or via a QR-scanned remote session.

| Method | Signature | Description |
|---|---|---|
| `create` | `(maxRuntime, clientUrl?)` | Create a session. Pass `clientUrl` to generate a QR code for remote access |
| `start` | `()` | Activate the session and pause the playlist |
| `destroy` | `()` | End the session and resume the playlist |

**`create` response:**

```ts
{ sessionId: string, qr: string, url: string }
```

---

### `Evexi.playerMessaging` — Inter-Player Messaging

Broadcast messages between players in the same group.

| Method | Signature | Description |
|---|---|---|
| `onMessage` | `(callback)` | Register a listener for incoming messages |
| `send` | `(message)` | Broadcast a message to the group |

**Message shape:**

```ts
{ ip: string, data: string, playerId: string }
```

**`send` response:**

```ts
{ success: boolean, error?: string }
```

---

### `Evexi.proxy` — HTTP Proxy

Route HTTP requests through the player's secure proxy to avoid CORS issues and keep API credentials off the client. Credentials are configured in the Evexi admin portal and never exposed to the frontend.

```ts
const result = await Evexi.proxy<MyType>('/v1/endpoint', {
  method: 'POST',
  body: JSON.stringify(payload)
})
// result: { ok: boolean, json: MyType }
```

Used by the **Stripe** and **Square** integrations.

---

### `Evexi.square` — Square Integration

| Method | Signature | Description |
|---|---|---|
| `square.event` | `(callback)` | Subscribe to Square webhook events (catalog, orders, payments, terminal checkout) |
| `proxy` | `(endpoint, options)` | Proxy requests to the Square API |

**Required env variables:** `ENVIRONMENT` (`LIVE` \| `SANDBOX`), `LOCATION`, `TERMINAL_ID`

---

### `Evexi.tizen` — Samsung Kiosk

| Method | Description |
|---|---|
| `tizen.barcode()` | Read from the integrated barcode scanner |

---

### `Evexi.serial` — Serial Ports

| Method | Signature | Description |
|---|---|---|
| `open` | `(port)` | Open a serial port (`PORT0` \| `PORT1` \| `PORT2`) |
| `close` | `(port)` | Close a serial port |
| `onMessage` | `(callback)` | Receive hex-encoded messages from the open port |
| `write` | `(data)` | Send data to the open port |

---

### `Evexi.pip` — Picture-in-Picture *(WebOS only)*

Overlay an external input source over the player content.

| Method | Signature | Description |
|---|---|---|
| `pip.show` | `(config)` | Display a PIP overlay |
| `pip.hide` | `()` | Remove the PIP overlay |

**`show` config:**

```ts
{
  type: 'HDMI' | 'DVI' | 'RGB' | 'COMPONENT',
  number: number,
  x: number,
  y: number,
  width: number,
  height: number
}
```

---

### `Evexi.nexmosphere` — Nexmosphere Devices

Control Nexmosphere experience triggers over USB. Requires Evexi **2.9.0+** on Windows or Linux.

| Method | Signature | Description |
|---|---|---|
| `open` | `()` | Establish a USB connection |
| `write` | `(command)` | Send a protocol command (e.g. `'X111B[Lc=R99008]'` to set LED colour) |
| `onMessage` | `(callback)` | Receive messages from the device (e.g. `'X003A[3]'` for a button press) |
| `close` | `()` | Terminate the connection |

---

### `Evexi.info` — Player Info

```ts
const info = await Evexi.info()
// { deviceId: string, version: string, provider: 'WebOS' | 'Tizen' | 'HTML' }
```

---

### `Evexi.log` — Player Logging

```ts
Evexi.log('message')   // Writes to the player's on-device log file
```

---

## Changelog

See [CHANGELOG.md](./CHANGELOG.md) for the full version history.

---

## Support

If you need help integrating the Evexi Player SDK, have a question about a specific API, or encounter an issue you cannot resolve, please get in touch with us directly.

**Email:** [development@managedracks.co.uk](mailto:development@managedracks.co.uk)

We're happy to assist.

---

## License

MIT — Copyright Evexi
