#!/usr/bin/env bash

# Get the package version from package.json file
PACKAGE_VERSION=$(cat package.json \
  | grep version \
  | head -1 \
  | awk -F: '{ print $2 }' \
  | sed 's/[",]//g' \
  | tr -d '[[:space:]]')

if [ -d ".tmp" ]; then
  rm -r .tmp
fi

if [ -d "examples" ]; then
  rm -r examples
fi

mkdir .tmp
mkdir examples

function buildZip {

  local ZIP_NAME="$2 - v${PACKAGE_VERSION}"

  mkdir ".tmp/${ZIP_NAME}"

  # package
  node_modules/.bin/parcel build $1 --dist-dir ".tmp/${ZIP_NAME}" --no-cache --no-optimize --no-source-maps --no-content-hash --public-url ./

  # Zip - Remote (Zip like this when uploading to the platform)
  cd ".tmp/${ZIP_NAME}"
  zip -r "${ZIP_NAME}.zip" . -x '.*' -x '__MACOSX' -x '*.DS_Store'
  cd ../..
  mv ".tmp/${ZIP_NAME}/${ZIP_NAME}.zip" "examples/${ZIP_NAME}.zip"

  # tidy
  rm -r ".tmp/${ZIP_NAME}"

}

function buildDir {

  local DIR_NAME="$2 - v${PACKAGE_VERSION}"

  # package
  node_modules/.bin/parcel build $1 --dist-dir ".tmp/${DIR_NAME}" --no-cache --no-optimize --no-source-maps --no-content-hash --public-url ./

  mv ".tmp/${DIR_NAME}" examples

}

function copy {

  local ZIP_NAME="$2 - v${PACKAGE_VERSION}"

  cp -r $1 ".tmp/$2"
  cp -r node_modules/evexi/dist/evexi.legacy.iife.min.js ".tmp/$2"
  cd ".tmp/$2"
  zip -r "${ZIP_NAME}.zip" . -x '.*' -x '__MACOSX' -x '*.DS_Store'
  cd ../../
  mv ".tmp/$2/${ZIP_NAME}.zip" examples

}

buildZip docs/printer/src/index.html printer
buildZip docs/pip/src/index.html pip
buildZip docs/envVars/src/index.html envVars
buildZip docs/fs/src/index.html fs
buildZip docs/interactive/content/src/index.html interactive
buildDir docs/interactive/scan/src/index.html interactive-scan
buildZip docs/kiosk/src/index.html kiosk
buildZip docs/mock/src/index.html mock
buildZip docs/touchToEngage/src/index.html touchToEngage
copy docs/legacy/src legacy
buildZip docs/nexmosphere/src/index.html nexmosphere
buildZip docs/lifecycle/src/index.html lifecycle
buildZip docs/square/src/index.html square
buildZip docs/playerMessaging/src/index.html playerMessaging

rm -r .tmp
