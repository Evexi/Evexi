# Evexi API
![Banner](./banner.png)

## Introduction
The Evexi API provides content connectivity to either the underlying player hardware, software or evexi platform features. This can be used in either zip media, web media, background tasks or assigned applications.

It is important to note that it is the responsibility of the developer to manage any stored assets. The Evexi API has been tested to support Tizen firmware 2070 and later and we cannot guarantee the API to work reliably on previous firmware versions.

All filesystem methods returning a promise are wrapped in a timeout of 5 seconds. If no response is received within this time an error will be thrown within the catch statement.

#

###### Overview
* [Install](#install)
* [Build](#build)
* [Packaging](#packaging)
* [Developer Tools](docs/mock/index.md)

###### API Features & Methods
* [Lifecycle](docs/lifecycle/index.md)
* [File System](docs/fs/index.md)
* [Touch To Engage](docs/touchToEngage/index.md)
* [Interactive](docs/interactive/index.md)
* [Misc](docs/misc/index.md)
* [Kiosk](docs/kiosk/index.md)
* [Environment Variables](docs/envVars/index.md)
* [Nexmosphere](docs/nexmosphere/index.md)
* [Helpers](docs/helpers/index.md)
* [Square](docs/square/index.md)
* [Stripe](docs/stripe/index.md)

#

### Install
Install the Evexi package from [NPM](https://www.npmjs.com/package/evexi). This Github repo provides examples and documentation. The Evexi API is subject to change on a per version basis so ensure to check the app definitions match the player version.

````bash
yarn add evexi
npm i evexi
````

````typescript
import {Evexi, EvexiMock} from 'evexi'
````

> Note: If you plan to target SSSP2 or SSSP4 platform you should use the legacy script. [Example Here](/docs/legacy/index.md)

#

### Build

All examples shown in [/docs](./docs/) directory are built on Github CI and available to download from [Github Actions](https://github.com/Evexi/Evexi/actions/workflows/build-examples.yml). Alternatively clone this repo and build the examples locally. Once built you can upload to the Evexi platform and assign to a player. ![Build-Examples](https://github.com/Evexi/Evexi/actions/workflows/build-examples.yml/badge.svg)

```bash
yarn run build
```

#

### Packaging

A Evexi `.zip` application must not contain hidden files and consist of a flat structure (no nested directories for SSSP2). The `index.html` should be in the root of the zip. A zip should contain at least an index.html file in the root level.

If you run `zipinfo` against the .zip file you should see an output like so.
````bash
Archive:  fs-240.zip
Zip file size: 73108 bytes, number of entries: 2
-rw-r--r--  3.0 unx      346 tx defN 21-Sep-21 09:35 index.html
-rw-r--r--  3.0 unx   317567 tx defN 21-Sep-21 09:35 src.77de5100.js
2 files, 317913 bytes uncompressed, 72780 bytes compressed:  77.1%
````

#

You can zip your application using standard `zip` CLI.
````bash
cd app # go into directory
zip app.zip . -x '.*' -x '__MACOSX' -x '*.DS_Store' # zip all files at current level
````
Further examples can be found [here](./.build/build.sh#L63-L71).