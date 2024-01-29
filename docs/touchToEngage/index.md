# Touch To Engage

This feature can be used when you want to display a playlist or standard media and trigger an application when the user interacts with a display by a touch event, nexmosphere trigger or in any other way.

#

## Setup
On the admin portal assign your content as `application content`. If you want the application to be launched on a touch event please an an `overlay` image (if you want a touch event but no overlay you can use a blank png). You should also add content to the 'content' section which will be played outside or your application.

>Note: Your application should also manage its own session.

#

## Details

The assigned application should not have a splash screen and should control its own session when configured in this way. When the applications session is finished the application should trigger the `Evexi.interactive.destroy()` (Triggering this method will return the display to its previous playlist/media content). We well as assigning touch to engage media you can assign a overlay image. This overlay image will sit on top of any content playing on the device (Indicating to the end user to touch the device).

The player will trigger the [lifecycle.playing](./../lifecycle/index.md) and [lifecycle.stopping](./../lifecycle/index.md) methods to indicate the start and end of sessions to the content.

You can view a [working example here](./src/index.ts).

#

```typescript
import Evexi from 'evexi'

Evexi.interactive.destroy()
```
