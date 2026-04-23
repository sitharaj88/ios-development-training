# iOS Development Training

> A production-focused iOS curriculum — Swift, SwiftUI, UIKit, architecture,
> Apple frameworks, performance, and App Store delivery. Built as a self-paced
> reference site with [Docusaurus](https://docusaurus.io/).

**Live site:** https://sitharaj88.github.io/ios-development-training/

**Scope:** 13 modules · 72+ topics · 32 weeks · 115h · 5 portfolio projects.

## What's inside

- **Curriculum** — 13 modules, each broken into topic deep-dives with code,
  diagrams, and practice exercises.
- **Reference** — Architecture guide, design patterns catalogue, cheatsheets
  (Swift, SwiftUI, Concurrency, Testing), glossary, and FAQ.
- **Projects** — 5 capstone apps that reinforce every module.
- **Local search** — powered by `@easyops-cn/docusaurus-search-local` (no
  Algolia required).

## Run locally

```bash
npm install
npm start         # dev server on http://localhost:3000/ios-development-training/
npm run build     # production build
npm run serve     # preview production build
npm run typecheck # TypeScript
```

Requires **Node ≥ 20**.

## Repository layout

```
docs/                      MDX content (curriculum + reference)
  intro.mdx                Landing page for /docs
  roadmap.mdx              Full learning graph
  glossary.mdx, faq.mdx    Reference
  <module>/overview.mdx    Per-module intro + topic index
  <module>/topic-N-*.mdx   Topic deep-dive pages
  architecture/            Cross-cutting architecture guide
  patterns/                Design / state / component pattern catalogue
  cheatsheets/             Swift · SwiftUI · Concurrency · Testing
src/
  pages/index.tsx          Marketing landing page
  components/Doc/          MDX component kit (Callout, StepList, Diagram…)
  theme/NotFound/          Custom 404
  css/custom.css           Design tokens + landing + sidebar theme
sidebars.ts                Sidebar structure
docusaurus.config.ts       Site config (nav, footer, SEO, sitemap)
static/                    Favicon, logo, social card
```

## Contributing content

Every curriculum page is an `.mdx` file. Prefer the shared components in
`src/components/Doc` over ad-hoc styling:

```mdx
import { Callout, StepList, ComparisonCard, LibraryGrid } from '@site/src/components/Doc';
```

The voice across the site: **explain the *why*, show production-grade code,
end at something the reader can ship**.

## Links

- Brochure (PDF): https://pub-4bd5087c503a41ccafd70ad5588f3220.r2.dev/brochures/iOS_Development_Training_Sitharaj.pdf
- Repository: https://github.com/sitharaj88/ios-development-training
- Instructor: https://www.sitharaj.in
- Training page: https://www.sitharaj.in/training/ios-development

## License

Curriculum content © Sitharaj Seenivasan. All rights reserved.
Site source code is provided for educational reference.
