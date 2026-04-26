.PHONY: dev build preview astro format lint ci

dev:
	bun run dev

build:
	bun run build

preview:
	bun run preview

astro:
	bun run astro

format:
	bun run format

lint:
	bun run lint

ci:
	bun run format
	bun run lint
