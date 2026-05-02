# irfannm.dev

Source code for [irfannm.dev](https://irfannm.dev/), a personal website built with Astro and deployed on Cloudflare.

## Tech Stack

- Astro 6
- Tailwind CSS 4
- Bun
- Supabase
- Cloudflare Workers
- Biome

## Pages

- `/` home page with highlighted posts, featured projects, and recent experience
- `/about` about page with profile content, resume link, and work history
- `/blog` blog index with featured and categorized posts
- `/blog/[slug]` blog post detail page
- `/projects` projects index split by work and personal projects
- `/projects/[slug]` project detail page

## Content Source

The site reads data directly from Supabase at request/build time. The current content domains are:

- `post` and `post_category` for blog content
- `project` for portfolio projects
- `experience` for work history
- `site_content` for reusable site constants such as hero copy, about text, and resume URL

## Project Structure

```text
src/
  components/   UI and page sections
  layouts/      shared Astro layouts
  pages/        route entries
  libs/
    handlers/   page-facing orchestration layer
    business/
      entity/      typed domain models
      usecase/     application use cases
      repository/  Supabase data access
    constants/  navigation and social metadata
    utils/      helpers such as markdown rendering and date formatting
  styles/       global styles
public/
  meta/         icons and web manifest assets
```

## Local Setup

1. Install dependencies with `bun install`.
2. Copy `.env.example` to `.env`.
3. Fill in the required environment variables:
   - `SITE_URL`
   - `SUPABASE_URL`
   - `SUPABASE_PUBLISHABLE_KEY`
4. Start the development server with `make dev`.

## Available Commands

- `make dev` starts the Astro development server
- `make build` creates the production build
- `make preview` serves the production build locally
- `make format` formats the codebase with Biome
- `make lint` runs Biome checks with fixes
- `make check` runs Astro type checking
- `make ci` runs format, lint, and check

## Environment Variables

- `SITE_URL`: canonical site URL used for metadata and sitemap generation
- `SUPABASE_URL`: Supabase project URL used by the server-side data layer
- `SUPABASE_PUBLISHABLE_KEY`: Supabase publishable key used to create the server client

## Deployment Notes

- The Astro site uses the Cloudflare adapter in [astro.config.mjs](/Users/irfannmuhajir/Documents/Projects/personal-projects/irfannm/astro.config.mjs:1).
- Cloudflare runtime settings live in [wrangler.jsonc](/Users/irfannmuhajir/Documents/Projects/personal-projects/irfannm/wrangler.jsonc:1).
- Sitemap generation is enabled through `@astrojs/sitemap`.

## Implementation Notes

- Data fetching follows a layered flow of `pages -> handlers -> usecase -> repository`.
- Markdown content is rendered through a utility layer rather than local markdown files.
- The site includes redirect rules in Astro config for older blog URLs.

Copyright © 2026 by Irfan Nurghiffari Muhajir
