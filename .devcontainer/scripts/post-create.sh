#!/usr/bin/env bash
set -euo pipefail

sudo apt-get update
sudo apt-get install -y --no-install-recommends socat
sudo rm -rf /var/lib/apt/lists/*

# Named volumes can initially be owned by root.
sudo mkdir -p /home/node/.pnpm-store
sudo chown -R node:node /home/node/.pnpm-store
pnpm config set store-dir /home/node/.pnpm-store
