# Graph Report - irfannm (2026-06-20)

## Corpus Check

- 101 files · ~11,500 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary

- 310 nodes · 565 edges · 16 communities (15 shown, 1 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness

- Built from commit: `bd3d64b2`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)

- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 7|Community 7]]
- [[_COMMUNITY_Community 8|Community 8]]
- [[_COMMUNITY_Community 9|Community 9]]
- [[_COMMUNITY_Community 10|Community 10]]
- [[_COMMUNITY_Community 11|Community 11]]
- [[_COMMUNITY_Community 12|Community 12]]
- [[_COMMUNITY_Community 13|Community 13]]
- [[_COMMUNITY_Community 14|Community 14]]

## God Nodes (most connected - your core abstractions)

1. `createServerClient()` - 17 edges
2. `@layouts/BaseLayout.astro` - 12 edges
3. `@components/domain/project/detail/ProjectHeader.astro` - 10 edges
4. `PostSupabaseRepository` - 10 edges
5. `irfannm.dev` - 10 edges
6. `Posts` - 9 edges
7. `scripts` - 8 edges
8. `@components/layouts/layout/Navbar.astro` - 8 edges
9. `@layouts/DetailLayout.astro` - 8 edges
10. `@components/domain/blog/detail/BlogHeader.astro` - 7 edges

## Surprising Connections (you probably didn't know these)

- None detected - all connections are within the same source files.

## Import Cycles

- None detected.

## Communities (16 total, 1 thin omitted)

### Community 0 - "Community 0"

Cohesion: 0.06
Nodes (33): @components/domain/about/AboutMe.astro, @components/domain/about/Resume.astro, updateDate, @components/domain/about/SocialContact.astro, convertedDate, readText, ./PostCard.astro, convertedDate (+25 more)

### Community 1 - "Community 1"

Cohesion: 0.05
Nodes (42): author, email, name, url, dependencies, astro, @astrojs/check, @astrojs/cloudflare (+34 more)

### Community 2 - "Community 2"

Cohesion: 0.12
Nodes (23): defaultTabs, ./ProjectCard.astro, @components/domain/blog/detail/OtherPost.astro, @components/domain/project/detail/ProjectOverview.astro, @components/domain/project/detail/ProjectResponsibility.astro, @components/domain/project/detail/ProjectRole.astro, @components/domain/project/detail/ProjectTechStack.astro, @components/domain/experience/Experience.astro (+15 more)

### Community 3 - "Community 3"

Cohesion: 0.11
Nodes (17): createServerClient(), Experience, ExperienceModel, ExperiencesModel, BlogCategories, BlogCategoriesModel, BlogCategory, BlogCategoryModel (+9 more)

### Community 4 - "Community 4"

Cohesion: 0.12
Nodes (16): CompositeTypes, Constants, Database, DatabaseWithoutInternals, DefaultSchema, Enums, Json, Tables (+8 more)

### Community 5 - "Community 5"

Cohesion: 0.20
Nodes (5): CategorizedPosts, Post, Posts, PostHandler, PostUseCase

### Community 6 - "Community 6"

Cohesion: 0.18
Nodes (6): Project, Projects, ProjectHandler, @components/layouts/section/Heading.astro, ProjectUseCase, @libs/handlers/project

### Community 7 - "Community 7"

Cohesion: 0.13
Nodes (14): compilerOptions, jsx, jsxImportSource, paths, types, verbatimModuleSyntax, exclude, extends (+6 more)

### Community 8 - "Community 8"

Cohesion: 0.25
Nodes (9): BreadcrumbItems, @components/ui/breadcrumbs/Breadcrumb.astro, BreadcrumbItem, BreadcrumbItems, @layouts/DetailLayout.astro, hasOtherDetail, @layouts/ProseLayout.astro, BreadcrumbItems (+1 more)

### Community 9 - "Community 9"

Cohesion: 0.23
Nodes (5): SiteContent, SiteContents, SiteContentHandler, SiteContentUseCase, ResumeUrlContent

### Community 10 - "Community 10"

Cohesion: 0.18
Nodes (10): Available Commands, Content Source, Deployment Notes, Environment Variables, Implementation Notes, irfannm.dev, Local Setup, Pages (+2 more)

### Community 11 - "Community 11"

Cohesion: 0.36
Nodes (3): Experiences, ExperienceHandler, ExperienceUseCase

### Community 12 - "Community 12"

Cohesion: 0.25
Nodes (3): allowedUrlProtocols, markdownRenderer, renderer

### Community 13 - "Community 13"

Cohesion: 0.33
Nodes (5): importOrder, importOrderParserPlugins, importOrderTypeScriptVersion, overrides, plugins

## Knowledge Gaps

- **110 isolated node(s):** `plugins`, `importOrder`, `importOrderParserPlugins`, `importOrderTypeScriptVersion`, `overrides` (+105 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **1 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions

_Questions this graph is uniquely positioned to answer:_

- **Why does `@components/domain/project/detail/ProjectHeader.astro` connect `Community 0` to `Community 8`, `Community 2`?**
  _High betweenness centrality (0.066) - this node is a cross-community bridge._
- **Why does `createServerClient()` connect `Community 3` to `Community 4`?**
  _High betweenness centrality (0.033) - this node is a cross-community bridge._
- **Why does `@layouts/BaseLayout.astro` connect `Community 0` to `Community 8`, `Community 2`, `Community 6`?**
  _High betweenness centrality (0.033) - this node is a cross-community bridge._
- **What connects `plugins`, `importOrder`, `importOrderParserPlugins` to the rest of the system?**
  _110 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.06009783368273934 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.046511627906976744 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.1166429587482219 - nodes in this community are weakly interconnected._
