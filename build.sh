#!/usr/bin/env bash

# Get the package version from package.json file
PACKAGE_VERSION=$(cat package.json \
  | grep version \
  | head -1 \
  | awk -F: '{ print $2 }' \
  | sed 's/[",]//g' \
  | tr -d '[[:space:]]')

NAME=fs

function build {
  # package
  node_modules/.bin/parcel build $NAME docs/fs/src/index.html -d $NAME --no-cache --no-minify --no-source-maps --public-url ./

  # Zip
  zip -r $NAME.zip $NAME -x '.*' -x '__MACOSX' -x '*.DS_Store'
  mv -f ./$NAME.zip ./docs/fs/$NAME'-'$PACKAGE_VERSION'.zip'

  # tidy
  rm -r $NAME
}

build