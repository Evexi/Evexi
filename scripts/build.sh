#!/bin/bash
set -e

npx vite build
echo "Build completed."

PACKAGE_NAME=$(jq -r '.name' package.json)
if [ -z "$PACKAGE_NAME" ]; then
  echo "Package name not found in package.json"
  exit 1
fi

cd dist

mkdir -p ../builds
zip -r "../builds/${PACKAGE_NAME}.zip" .
echo "Zipped contents into ${PACKAGE_NAME}.zip"

cd ..
echo "Build and packaging completed successfully."

rm -rf dist

echo "Cleaned up dist folder."
echo "Build process finished."

exit 0
