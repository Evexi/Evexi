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
  node_modules/.bin/parcel build $1 docs/$2/index.html -d $1'-'$PACKAGE_VERSION --no-cache --no-minify --no-source-maps --public-url ./ --no-content-hash

  # Zip
  zip -r $1'-'$PACKAGE_VERSION.zip $1'-'$PACKAGE_VERSION -x '.*' -x '__MACOSX' -x '*.DS_Store'
  mv -f ./$1'-'$PACKAGE_VERSION.zip ./examples/$1'-'$PACKAGE_VERSION'.zip'

  # # tidy
  rm -r $1'-'$PACKAGE_VERSION
}

build $1 $2