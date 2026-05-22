#!/bin/bash
set -e

bash ./scripts/build.sh

PACKAGE_NAME=$(jq -r '.name' package.json)
if [ -z "$PACKAGE_NAME" ]; then
  echo "Package name not found in package.json"
  exit 1
fi

ZIP_FILE="./builds/${PACKAGE_NAME}.zip"

if [ ! -f "$ZIP_FILE" ]; then
  echo "Build zip not found: $ZIP_FILE"
  exit 1
fi

SERVE_DIR=$(mktemp -d)
echo "Unzipping into $SERVE_DIR..."
unzip -o "$ZIP_FILE" -d "$SERVE_DIR"

echo "Serving on http://localhost:4173"
npx --yes serve "$SERVE_DIR" -l 4173
