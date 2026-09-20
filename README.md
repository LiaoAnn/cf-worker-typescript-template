# Cloudflare Workers Project Base

A minimal, framework-neutral reference for starting TypeScript projects on
Cloudflare Workers. Use this repository's tooling and development environment as
a starting point for an agent to initialize a Hono HTTP server or a TanStack Start
web application.

## Included

- A native Worker entry point in `src/index.ts` that returns `Hello, World!`.
- Wrangler configuration for local development, deployment, and binding types.
- Biome for linting and formatting.
- A Node.js 24 Dev Container with pnpm and a persistent package store.

No application framework is installed. Add the framework, dependencies, and
configuration that the new project needs.

## Development

1. Open the repository in VS Code and select **Reopen in Container**. Docker and
   the Dev Containers extension are required.
2. The post-create script installs `socat` and configures the pnpm store. Compose
   creates the store volume automatically; no host store setup is needed.
3. Set the project name in `package.json` and `wrangler.jsonc`.
4. Install dependencies and start the Worker:

   ```bash
   pnpm install
   pnpm dev
   ```

The Worker is available at `http://localhost:8787`.

The container uses the published TypeScript/Node image directly. Initialization
lives in `.devcontainer/scripts/post-create.sh`; there is no custom Dockerfile.
After changing container configuration, select **Rebuild Container**.

## Commands

| Command | Purpose |
| --- | --- |
| `pnpm dev` | Start the local Worker |
| `pnpm lint` | Check source formatting and lint rules |
| `pnpm format` | Format source files |
| `pnpm check` | Apply source formatting and lint fixes |
| `pnpm cf-typegen` | Regenerate Worker types after changing bindings |
| `pnpm deploy` | Deploy the Worker to Cloudflare |

For Cloudflare authentication inside the container, run `bash wrangler_login.sh`.
It uses `socat` to forward the local OAuth callback between IPv4 and IPv6.

## Starting a framework project

Ask your agent to use this repository as a tooling reference and initialize the
chosen framework for Cloudflare Workers:

- **Hono:** install Hono and replace the native Worker entry point with the HTTP
  application. Add routes and bindings as needed.
- **TanStack Start:** initialize the framework's Cloudflare setup and adapt its
  entry points, scripts, TypeScript, and Wrangler configuration. Keep the Biome and
  Dev Container setup as the shared baseline.

This repository's `src/index.ts` and Wrangler scripts are a minimal Worker example;
framework projects should use their own required development and build setup.
