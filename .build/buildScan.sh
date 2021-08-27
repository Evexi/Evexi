#!/usr/bin/env bash

# Clean and make dir
rm -r -f ./scan/dist
mkdir ./scan/dist

# package application
function build {
  node_modules/.bin/parcel build scan scan/src/Scan.ts -d ./scan/dist --no-cache --no-source-maps --public-url ./ --no-content-hash
}

# package typings
function typings {
  node_modules/.bin/tsc -p ./tsconfig.scan.json --declaration true --emitDeclarationOnly --outDir ./scan/dist/temp
  node_modules/.bin/dts-bundle-generator -o ./scan/dist/Scan.d.ts ./scan/dist/temp/Scan.d.ts --no-check --no-banner --inline-declare-global --project ./tsconfig.scan.json
  rm -r -f ./scan/dist/temp
}

build
typings