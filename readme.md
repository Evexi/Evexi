# Evexi API
![Logo](./logo.jpg)

## Introduction
The Evexi API is designed for use with background tasks, web items or zip items within the Evexi Player. It is important to note that it is the responsibility of the developer to manage any stored assets. The Evexi API has been tested to support Tizen firmware 2070 and later and we cannot guarantee the API to work reliably on previous firmware versions.
The docs & examples directories contain examples of filesystem communication, interactive and more. the player supports multiple platforms, some of which only support ES5 and others early versions of ES6. Therefore, its recommended to compile your application down to ES5. All methods returning a promise are wrapped in a timeout of 5 seconds. If no response is received within this time an error will be thrown within the catch statement.

![Tests](https://github.com/MRXTechnology/Evexi/actions/workflows/build.yml/badge.svg)

#

###### Details
* [Install](#install)
* [Packaging](#packaging)
* [Lifecycle Events](#lifecycle-events)

#

###### API Details
* [File System](docs/fs/index.md)
* [Interactive](docs/interactive/index.md)
* [Misc](docs/misc/index.md)
* [Kiosk](docs/kiosk/index.md)
* [Proxy](docs/proxy/index.md)
* [Environment Variables](docs/envVars/index.md)

#

### Install
The repo provides a package containing both `window.Evexi` for content API methods and `window.Scan` (remote part of interactive content). Included are type definitions, examples and full documentation. The Evexi API is subject to change on a per version basis so ensure to check the app definitions match the player version

To setup:
````bash
yarn add evexi
````

`import 'evexi'` or `import Scan from 'evexi/package/Scan'.`

Add definitions only as follows:
````json
{
    "compilerOptions": {
        "types": ["evexi"]
    }
}
````
NOTE: `import @babel/polyfill` if you are targeting SSSP2 or SSSP4 platforms.

#

### Packaging

A '.zip' application must not contain hidden files and consist of a flat structure (no nested directories).
Zip the package as follows:

zipinfo example for [example](./examples/fs-240.zip)
````bash
Archive:  fs-240.zip
Zip file size: 73108 bytes, number of entries: 2
-rw-r--r--  3.0 unx      346 tx defN 21-Sep-21 09:35 index.html
-rw-r--r--  3.0 unx   317567 tx defN 21-Sep-21 09:35 src.77de5100.js
2 files, 317913 bytes uncompressed, 72780 bytes compressed:  77.1%
````

You can zip your package like so:
````bash
cd $1'-'$PACKAGE_VERSION_ADJUSTED # go into directory
zip -r $1'-'$PACKAGE_VERSION_ADJUSTED.zip . -x '.*' -x '__MACOSX' -x '*.DS_Store' # zip all files at current level
````
Further examples can be found [here](./.build/buildExamples.sh#L18-L22).

#

### Lifecycle Events
Lifecycle events are triggered by the player if the functions exist within the inner content. To use this feature create a named function on the window object within the script of the loaded content.

````html
<script type="text/javascript">
    
/**
 * Lifecycle event (This function is triggered by the player to indicate the content is visible on the display.
 * You should use this function to trigger any animations or if your showing a picture in picture feed you
 * should do it here). Any code you put outside this will be ran when the content is loaded and before its displayed.
 * The item is passed in so feel free to check its duration, id or anything else required.
 */
function playing(item: MediaInterfaceLocal) {
    console.log('PLAYING ITEM')
}

/**
 * Lifecycle event (Triggered when the content has stopped showing and before the content is destroyed.
 * You should put any clean up or reset code here.)
 */
function stopping(item: MediaInterfaceLocal) {
    console.log('STOPPING ITEM')
}

</script>
````