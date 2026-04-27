# AI Agent Guide

## Project Summary

- Project name: `irfannm`
- Type: personal website built with Astro
- Runtime and package manager: Bun
- Styling: Tailwind CSS
- Deployment target: Cloudflare via `@astrojs/cloudflare`
- Content source: CMS API configured through `CMS_API_URL`

## Core Commands

Run all commands from the repository root.

```bash
bun run dev
bun run build
bun run preview
bun run format
bun run lint
make ci
```

## Environment

- Copy from `.env.example` when local environment variables are needed.
- `CMS_API_URL` defaults to `http://localhost:3000` when not provided.
- `SITE_URL` is used by Astro config and falls back to `https://irfannm.dev`.

## Repository Structure

```text
src/
  components/   UI and page sections
  layouts/      shared Astro layouts
  pages/        route entry points
  styles/       global styles
  libs/
    business/
      entity/       domain models and types
      repository/   CMS-facing data access
      usecase/      business logic layer
    handlers/       page-facing orchestration layer
    constants/      static app constants
    utils/          shared helpers
public/        static assets
```

## Architecture Rules

- Keep page-level data fetching in `src/pages` thin and orchestration-focused.
- Prefer this flow for content-backed features:

```text
Page -> Handler -> UseCase -> Repository -> CMS client
```

- Add or update domain types in `src/libs/business/entity` first when a CMS response changes.
- Keep external API access inside `src/libs/business/repository`.
- Put transformation or decision logic in `src/libs/business/usecase`.
- Use `src/libs/handlers` as the interface consumed by Astro pages and components.

## Import Conventions

Use existing path aliases from `tsconfig.json` when possible:

- `@components/*`
- `@layouts/*`
- `@libs/*`
- `@styles/*`

Avoid replacing working aliases with deep relative imports unless there is a clear reason.

## Working Conventions

- Match the existing Astro component style and frontmatter structure.
- Keep exported handler and usecase APIs small and explicit.
- Reuse existing utilities before introducing new helpers.
- Preserve current naming patterns such as `SomethingHandler`, `SomethingUseCase`, and `SomethingCmsRepository`.
- Follow the current formatting enforced by Biome.

## Safe Change Workflow

1. Read the target page, component, or library layer before editing.
2. Trace related code through handler, usecase, and repository layers when the change affects data flow.
3. Make the smallest change that satisfies the task.
4. Run `bun run format` after edits when formatting may have changed.
5. Run `bun run lint` for validation.
6. Run `bun run build` when the change may affect routes, Astro compilation, config, or production output.

## Validation Expectations

- For content or layout changes: run `bun run lint`.
- For structural or routing changes: run `bun run lint` and `bun run build`.
- For CMS integration changes: verify any environment assumptions and call paths from repository through page usage.

## Things To Watch

- This project fetches remote CMS data, so avoid hardcoding content that should stay CMS-driven.
- Redirects are defined in `astro.config.mjs`; preserve existing legacy URLs when editing slugs or route behavior.
- The project uses generated `.astro` artifacts and build output directories that should not be committed as source changes unless explicitly needed.
- `bun run lint` uses `biome check --write .`, so it may rewrite files while validating.

## Definition Of Done

A task is complete when:

- the requested code or content change is implemented,
- formatting and linting have been considered or run,
- build validation has been run when warranted,
- and the final summary clearly notes any assumptions, skipped checks, or follow-up risk.
