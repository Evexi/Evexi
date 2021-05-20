# Picture in Picture [PIP] (Experimental - Do not use in production)

Picture in picture is supported within the lifecycle events of 'playing' & 'stopping'. 
Please see [here](examples/pip.html) for further details. 
The picture in picture feature provides control of the screens display port input and delivers the input feed within a window/pane of created content.


````typescript
const settings = {
    source: 'HDMI', // 'HDMI' | 'DVI' | 'DP'
    num: 1, // PORT 1
    x: '0px', // can be percentage or pixels
    y: '0px', // can be percentage or pixels
    width: '100%', // can be percentage or pixels
    height: '100%' // can be percentage or pixels
}

window.parent.postMessage(JSON.stringify({action: 'pip.show', data: settings}), '*');
````

Please then use the 'stopping' event to run 'pip.hide'. This will remove the picture in picture feed or remove the
fallback image if it is being displayed.

NOTE: Not running 'pip.hide' on the 'stopping' event may cause issues with further content.

````typescript
window.parent.postMessage(JSON.stringify({action: 'pip.hide'}), '*');
````