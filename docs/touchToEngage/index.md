# Touch To Engage

This feature can be used when you want to display a playlist or standard media and trigger an application when the user touches with the display.
The assigned application should not have a splash screen and should control its own session. When the applications session is finished the application should trigger the Evexi.interactive.destroy() (Triggering this method will return the display to its previous playlist/media content). We well as assigning touch to engage media you can assign a overlay image. This overlay image will sit on top of any content playing on the device (Indicating to the end user to touch the device).

You can view a [working example here](./src).


````typescript
try {
    Evexi.interactive.destroy()
} catch (e) {
    //
}