#!/usr/bin/env bash

# Clean and make dir
rm -r -f ./package
mkdir ./package

# package application
function buildLibrary {
  node_modules/.bin/parcel build src/index.ts -d ./package --no-cache --no-source-maps --public-url ./ --no-content-hash

  # Bake in the version number from current Evexi.js file in src
  VERSION=$(head -n 1 ./src/evexi/Evexi.js)
  (echo $VERSION && cat ./package/index.js) > ./package/index2.js && mv ./package/index2.js ./package/index.js
}

# package scan typings
function scanTypings {
  node_modules/.bin/tsc -p ./tsconfig.scan.json --declaration true --emitDeclarationOnly --outDir ./package/scanTypingsTemp
  node_modules/.bin/dts-bundle-generator -o ./package/Scan.d.ts ./package/scanTypingsTemp/Scan.d.ts --no-check --no-banner --inline-declare-global --project ./tsconfig.scan.json
  rm -r -f ./package/scanTypingsTemp
}

# package evexi typings
function evexiTypings {
  cp -R ./src/evexi/Evexi.d.ts ./package/Evexi.d.ts
}

# create index.d.ts to bundle both definition files
function createIndex {
  cp -R ./assets/index.d.ts ./package/index.d.ts
}

buildLibrary
scanTypings
evexiTypings
createIndex