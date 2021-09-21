#!/usr/bin/env bash

# Get the package version from package.json file
PACKAGE_VERSION=$(cat package.json \
  | grep version \
  | head -1 \
  | awk -F: '{ print $2 }' \
  | sed 's/[",]//g' \
  | tr -d '[[:space:]]')

PACKAGE_VERSION_ADJUSTED="${PACKAGE_VERSION//./}"

function build {

  # package
  node_modules/.bin/parcel build $1 docs/$2/index.html -d $1'-LOCAL' --no-cache --no-minify --no-source-maps --public-url ./ --no-content-hash

  # Zip - Local
  zip -r $1'-LOCAL'.zip $1'-LOCAL' -x '.*' -x '__MACOSX' -x '*.DS_Store'
  mv -f ./$1'-LOCAL'.zip ./examples/$1'-LOCAL.zip'

  # tidy
  rm -r $1'-LOCAL'

}

build $1 $2