#!/usr/bin/env bash

# Get the package version from package.json file
PACKAGE_VERSION=$(cat package.json \
  | grep version \
  | head -1 \
  | awk -F: '{ print $2 }' \
  | sed 's/[",]//g' \
  | tr -d '[[:space:]]')

function build {

  # package
  node_modules/.bin/parcel build scan docs/interactive/scan/src/index.html -d ./examples/interactive-scan-$PACKAGE_VERSION --no-cache --no-minify --no-source-maps --public-url ./

}

build