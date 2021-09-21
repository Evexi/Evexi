#!/usr/bin/env bash

# Clean and make dir
rm -r -f ./package
mkdir ./package

# package application
function buildScan {
  node_modules/.bin/parcel build src/scan/Scan.ts -d ./package --no-cache --no-source-maps --public-url ./ --no-content-hash
}

# package application
function buildEvexi {
  cp -R ./src/evexi/Evexi.js ./package/Evexi.js
}

# package typings
function scanTypings {
  node_modules/.bin/tsc -p ./tsconfig.scan.json --declaration true --emitDeclarationOnly --outDir ./package/scanTypingsTemp
  node_modules/.bin/dts-bundle-generator -o ./package/Scan.d.ts ./package/scanTypingsTemp/Scan.d.ts --no-check --no-banner --inline-declare-global --project ./tsconfig.scan.json
  rm -r -f ./package/scanTypingsTemp
}

# package typings
function evexiTypings {
  cp -R ./src/evexi/Evexi.d.ts ./package/Evexi.d.ts
}

# buildScan
# buildEvexi
# scanTypings
# evexiTypings

# package application
function build {
  node_modules/.bin/parcel build src/index.ts -d ./package --no-cache --no-source-maps --public-url ./ --no-content-hash
}

function move {
  cp -R ./assets/index.d.ts ./package/index.d.ts
}

build
scanTypings
evexiTypings
move