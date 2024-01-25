#!/usr/bin/env bash

# Get the package version from package.json file
PACKAGE_VERSION=$(cat package.json \
  | grep version \
  | head -1 \
  | awk -F: '{ print $2 }' \
  | sed 's/[",]//g' \
  | tr -d '[[:space:]]')

PACKAGE_VERSION_ADJUSTED="${PACKAGE_VERSION//./}"

if [ -d ".tmp" ]; then
  rm -r .tmp
fi

if [ -d "examples" ]; then
  rm -r examples
fi

mkdir .tmp
mkdir examples

function buildZip {

  mkdir .tmp/$2"-"$PACKAGE_VERSION_ADJUSTED

  # package
  node_modules/.bin/parcel build $1 --dist-dir .tmp/$2"-"$PACKAGE_VERSION_ADJUSTED --no-cache --no-optimize --no-source-maps --no-content-hash --public-url ./

  # Zip - Remote (Zip like this when uploading to the platform)
  cd .tmp/$2"-"$PACKAGE_VERSION_ADJUSTED
  zip -r $2"-"$PACKAGE_VERSION_ADJUSTED.zip . -x '.*' -x '__MACOSX' -x '*.DS_Store'
  cd ..
  cd ..
  mv .tmp/$2"-"$PACKAGE_VERSION_ADJUSTED/$2'-'$PACKAGE_VERSION_ADJUSTED.zip examples/$2"-"$PACKAGE_VERSION_ADJUSTED'.zip'

  # tidy
  rm -r .tmp/$2"-"$PACKAGE_VERSION_ADJUSTED

}

function buildDir {

  # package
  node_modules/.bin/parcel build $1 --dist-dir .tmp/$2"-"$PACKAGE_VERSION_ADJUSTED --no-cache --no-optimize --no-source-maps --no-content-hash --public-url ./

  mv .tmp/$2"-"$PACKAGE_VERSION_ADJUSTED examples

}

function copy {
  cp -r $1 .tmp/$2
  cp -r node_modules/evexi/dist/evexi.legacy.iife.min.js .tmp/$2
  cd .tmp/$2
  zip -r $2"-"$PACKAGE_VERSION_ADJUSTED.zip . -x '.*' -x '__MACOSX' -x '*.DS_Store'
  cd ../../
  mv .tmp/$2/$2"-"$PACKAGE_VERSION_ADJUSTED.zip examples
}

buildZip docs/envVars/src/index.html envVars
buildZip docs/fs/src/index.html fs
buildZip docs/interactive/content/src/index.html interactive
buildDir docs/interactive/scan/src/index.html interactive-scan
buildZip docs/kiosk/src/index.html kiosk
# buildZip docs/proxy/src/index.html proxy
buildZip docs/mock/src/index.html mock
buildZip docs/touchToEngage/src/index.html touchToEngage
copy docs/legacy/src legacy
buildZip docs/nexmosphere/src/index.html nexmosphere
buildZip docs/lifecycle/src/index.html lifecycle
buildZip docs/square/src/index.html square

rm -r .tmp
