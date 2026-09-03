#!/usr/bin/env bash
set -euo pipefail

APP_NAME="Evexi"
ENV="${1:-production}"
DEV_MODE=$([[ "$ENV" == "development" ]] && echo "dev" || echo "prod")

GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m'

log() { echo -e "${BLUE}→${NC} $1"; }
success() { echo -e "${GREEN}✓${NC} $1"; }

get_version() {
    node -p "require('./package.json').version"
}

format_version() {
    local version="$1"
    local base prerelease formatted

    base="${version%%-*}"

    if [[ "$version" == *-* ]]; then
        prerelease="${version#*-}"
        formatted=$(echo "$prerelease" | tr '.' ' ' | awk '{for(i=1;i<=NF;i++) $i=toupper(substr($i,1,1)) substr($i,2)}1')
        echo "v${base} ${formatted}"
    else
        echo "v${base}"
    fi
}

main() {
    log "Building for ${ENV} environment (DEV_MODE=${DEV_MODE})..."

    local version zip_name
    version=$(get_version)
    zip_name="${APP_NAME} | $(format_version "$version")"

    log "Version: ${version}"
    log "Output: ${zip_name}.zip"

    rm -rf dist
    mkdir -p builds

    log "Running Vite build..."
    VITE_DEV_MODE="$DEV_MODE" npm run vite:build

    rm -f "builds/${zip_name}.zip"

    (cd dist && zip -rq "../builds/${zip_name}.zip" . -x '.*' -x '__MACOSX' -x '*.DS_Store')

    rm -rf dist

    success "Build complete!"
    success "Archive: builds/${zip_name}.zip"
}

main
