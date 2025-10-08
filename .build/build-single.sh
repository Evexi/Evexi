#!/usr/bin/env bash
set -e

FOLDER="$1"

if [ -z "$FOLDER" ]; then
  echo "❌ Usage: $0 <folder>"
  exit 1
fi

SRC_DIR="docs/$FOLDER/src"

if [ ! -f "$SRC_DIR/index.html" ]; then
  echo "❌ Error: $SRC_DIR/index.html not found."
  exit 1
fi

# Get the package version (same as in build.sh)
PACKAGE_VERSION=$(cat package.json \
  | grep version \
  | head -1 \
  | awk -F: '{ print $2 }' \
  | sed 's/[",]//g' \
  | tr -d '[[:space:]]')

PACKAGE_VERSION_ADJUSTED="${PACKAGE_VERSION//./}"

TMP_DIR=".tmp/$FOLDER-$PACKAGE_VERSION_ADJUSTED"
EXAMPLES_DIR="examples"

rm -rf "$TMP_DIR"
mkdir -p "$TMP_DIR" "$EXAMPLES_DIR"

echo "🔨 Building $FOLDER"

# Just build the one app
node_modules/.bin/parcel build "$SRC_DIR/index.html" \
  --dist-dir "$TMP_DIR" \
  --no-cache --no-optimize --no-source-maps --no-content-hash \
  --public-url ./

# Package as zip (if you want)
cd "$TMP_DIR"
zip -r "$FOLDER-$PACKAGE_VERSION_ADJUSTED.zip" . -x '.*' -x '__MACOSX' -x '*.DS_Store'
cd - >/dev/null

mv "$TMP_DIR/$FOLDER-$PACKAGE_VERSION_ADJUSTED.zip" "$EXAMPLES_DIR/"

rm -rf "$TMP_DIR"

echo "✅ Built $FOLDER"
