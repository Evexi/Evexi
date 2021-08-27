# Evexi API
![Logo](./logo.jpg)

## Introduction
The Evexi API is designed for use with background tasks, web items or zip items within the Evexi Player. It is important to note that it is the 
responsibility of the developer to manage any stored assets. On the Samsung TIZEN platform the API is only supported on firmware 2070 and above. Within the docs & examples directories there are examples of the filesystem communication, interactive and more. Please be aware the player supports multiple platforms, some of which only support ES5 and others early versions of ES6. Therefor its recommended to transpile your application down to ES5.
Please note all methods that return a promise are wrapped in a timeout of 5 seconds. If no response is received within this time they will throw an error in the catch statement.

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

#

### Install
The Evexi API is available for the content to access from the window object while running on the player so there is nothing to install. We provide the [typing definitions](./types/Evexi.d.ts) as part of this documentation repository. Please note the players API can change with the version so please ensure you are referring to the definitions that match the player version.

To setup the definitions:
````bash
yarn add MRXTechnology/Evexi
````

In your tsconfig.json file add the following:
````json
{
    "compilerOptions": {
        "types": ["evexi"]
    }
}
````

This will give you global access to typings for `window.Evexi` and `window.Scan`. If you are making a scanURL application you can also import the package as a global `import "evexi"` which provides the library and typings (for specified version). However for a scanUrl package it is recommenced to import the package via a CDN (Specifying the major version only) and add typings to tsconfig.json if needed. This way any issues or bugs will get addressed without having to deploy your application.

#

### Packaging
A '.zip' application should have no hidden files and be flat in structure (no nested directories).

zipinfo example for [example](./examples/fs-2.4.0.zip)
````bash
Archive:  fs-2.4.0.zip
Zip file size: 63872 bytes, number of entries: 3
drwxr-xr-x  3.0 unx        0 bx stor 21-Aug-24 08:17 fs-2.4.0/
-rw-r--r--  3.0 unx      319 tx defN 21-Aug-24 08:17 fs-2.4.0/index.html
-rw-r--r--  3.0 unx   368398 tx defN 21-Aug-24 08:17 fs-2.4.0/src.3fc41ee7.js
3 files, 368717 bytes uncompressed, 63362 bytes compressed:  82.8%
````

You can zip your package like so:
````bash
zip -r archive.zip archive -x '.*' -x '__MACOSX' -x '*.DS_Store'
````
Further example can be found [here](./build.sh#L17).

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