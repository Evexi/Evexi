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
  node_modules/.bin/parcel build $1 docs/$2/index.html -d $1'-'$PACKAGE_VERSION_ADJUSTED --no-cache --no-minify --no-source-maps --public-url ./ --no-content-hash

  # Zip - Remote (Zip like this when uploading to the platform)
  cd $1'-'$PACKAGE_VERSION_ADJUSTED
  zip -r $1'-'$PACKAGE_VERSION_ADJUSTED.zip . -x '.*' -x '__MACOSX' -x '*.DS_Store'
  cd ..
  mv $1'-'$PACKAGE_VERSION_ADJUSTED/$1'-'$PACKAGE_VERSION_ADJUSTED.zip ./examples/$1'-'$PACKAGE_VERSION_ADJUSTED'.zip'

  # tidy
  rm -r $1'-'$PACKAGE_VERSION_ADJUSTED

}

build $1 $2