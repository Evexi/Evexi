# Send CEC Frame

Sends a raw HDMI-CEC frame to the display over the HDMI connection. The frame is a hex string following the HDMI-CEC protocol. Only available on BrightSign with a CEC-enabled display.

```typescript
// Active Source 2.0.0.0
const response = await Evexi.cec.send('BF822000')
if (response.success) {
  console.log('CEC frame sent')
} else {
  console.error(response.error)
}
```

Use the code input above to send a custom raw CEC hex frame.
