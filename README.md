# irfannm.dev

Codebase for [irfannm.dev](https://irfannm.dev/).

## Tech Stack

- Astro
- Tailwind CSS
- Bun
- Cloudflare

## Local Setup

1. Install dependencies with `bun install`.
2. Copy `.env.example` to `.env`.
3. Set `SITE_URL` to your local or deployed site URL.
4. Set `CMS_API_URL` to the API that serves posts, projects, experiences, and site content.
5. Start the app with `bun run dev`.

## Available Commands

- `bun run dev` starts the Astro development server.
- `bun run build` creates the production build.
- `bun run preview` serves the production build locally.
- `bun run format` formats the codebase with Biome.
- `bun run lint` runs Biome checks.
- `bun run check` runs astro & typescript checking.
- `make ci` runs `bun run format`, `bun run lint`, and `bun run check`.

## Environment Variables

- `SITE_URL`: canonical site URL used for metadata and sitemap generation.
- `CMS_API_URL`: base URL for the CMS API consumed during page generation.

## Notes

- Production uses the Cloudflare adapter configured in [astro.config.mjs](/Users/irfannmuhajir/Documents/Projects/personal-projects/irfannm/astro.config.mjs:1).
- Content is fetched from the CMS layer in `src/libs/business/repository`.
- Markdown from the CMS is rendered with a hardened renderer that escapes raw HTML and rejects unsafe link/image protocols.

Copyright © 2026 by Irfan Nurghiffari Muhajir
