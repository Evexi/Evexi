#!/usr/bin/env bash
set -e

FOLDER="$1"

if [ -z "$FOLDER" ]; then
  echo "❌ Usage: $0 <folder>"
  exit 1
fi

SRC_DIR="docs/$FOLDER/src"
PROJECT_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
BUILD_ONE="$PROJECT_ROOT/.build/build-single.sh"

if [ ! -d "$SRC_DIR" ]; then
  echo "❌ Error: $SRC_DIR does not exist."
  exit 1
fi

echo "✅ Serving $SRC_DIR"

npx parcel serve "$SRC_DIR/index.html" --port 1234 --no-cache --open &

npx nodemon \
  --watch "$SRC_DIR" \
  --ext ts,html,js,css \
  --exec "bash $BUILD_ONE $FOLDER"
