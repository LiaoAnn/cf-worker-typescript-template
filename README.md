# CF Worker TypeScript Template

A template for developing Cloudflare Workers using TypeScript and `pnpm`.

## Features

- **TypeScript**: Write strongly-typed, modern JavaScript.
- **Hono**: A lightweight, high-performance web framework.
- **ESLint**: Linting for better code quality.
- **Prettier**: Consistent code formatting.
- **Wrangler**: Simplified deployment and development with Cloudflare Workers.
- **pnpm**: Fast and efficient package manager.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [pnpm](https://pnpm.io/) (v8 or higher)
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/install/)

And create a docker volume for pnpm:

```bash
docker volume create \
  --driver local \
  --opt type=none \
  --opt device=$PNPM_HOME/store \
  --opt o=bind \
  pnpm_store
```

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/your-repo/cf-worker-typescript-template.git
   cd cf-worker-typescript-template
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Start the development server:

   ```bash
   pnpm dev
   ```

### Deployment

To deploy your worker, run:

```bash
pnpm deploy
```
