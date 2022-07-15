# Evexi API
![Banner](./banner.png)

## Introduction
The Evexi API provides content connectivity to either the underlying player hardware, software or evexi platform features. This can be used in either zip items, web items or background tasks.

It is important to note that it is the responsibility of the developer to manage any stored assets. The Evexi API has been tested to support Tizen firmware 2070 and later and we cannot guarantee the API to work reliably on previous firmware versions.

All filesystem methods returning a promise are wrapped in a timeout of 5 seconds. If no response is received within this time an error will be thrown within the catch statement.

#

All examples shown in /docs directory are built at CI level and available to download from Github Actions:

![Build-Examples](https://github.com/Evexi/Evexi/actions/workflows/build-examples.yml/badge.svg)
[Download](https://github.com/Evexi/Evexi/actions/workflows/build-examples.yml)

###### Overview
* [Install](#install)
* [Packaging](#packaging)
* [Lifecycle Events](#lifecycle-events)
* [Legacy Script](docs/legacy/index.md)

#

###### API Features & Methods
* [File System](docs/fs/index.md)
* [Interactive](docs/interactive/index.md)
* [Misc](docs/misc/index.md)
* [Kiosk](docs/kiosk/index.md)
* [Proxy](docs/proxy/index.md)
* [Environment Variables](docs/envVars/index.md)
* [Mock & Server](docs/mock/index.md)
* [Helpers](docs/helpers/index.md)

#

### Install
Install the evexi package from NPM. This repo provides examples and documentation. The Evexi API is subject to change on a per version basis so ensure to check the app definitions match the player version.

To setup:
````bash
yarn add evexi
````

````typescript
import {Evexi, EvexiMock} from 'evexi'
````

NOTE: Use the legacy script if your targeting SSSP2 or SSSP4 platforms `evexi/dist/evexi.legacy.iife.min.js`. It contains all polyfills needed.

#

### Packaging

A '.zip' application must not contain hidden files and consist of a flat structure (no nested directories for SSSP2). A zip should contain at least an index.html file in the root level.

````bash
Archive:  fs-240.zip
Zip file size: 73108 bytes, number of entries: 2
-rw-r--r--  3.0 unx      346 tx defN 21-Sep-21 09:35 index.html
-rw-r--r--  3.0 unx   317567 tx defN 21-Sep-21 09:35 src.77de5100.js
2 files, 317913 bytes uncompressed, 72780 bytes compressed:  77.1%
````

You can zip your application like so:
````bash
cd app # go into directory
zip app.zip . -x '.*' -x '__MACOSX' -x '*.DS_Store' # zip all files at current level
````
Further examples can be found [here](./.build/build.sh#L18-L33).

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