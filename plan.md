# Local d-AI Summer — Execution Plan

**Status**: Planning complete, awaiting build approval
**Spec**: See `SPEC.md` for full details
**Images**: Generated in `public/images/`

---

## Pre-flight Checklist

- [x] Source content reviewed (`alliance-proposal-writeup.md`)
- [x] sb-website patterns analyzed
- [x] Spec created (`SPEC.md`)
- [x] Images generated (hero-bg.jpg, learning-bg.jpg, knowledge-bg.jpg + alts)
- [ ] Build approved

---

## Build Phases

### Phase 1: Scaffold (Sequential)
| Task | File |
|------|------|
| Create package.json | `package.json` |
| Create astro.config.mjs | `astro.config.mjs` |
| Create tsconfig.json | `tsconfig.json` |
| Install dependencies | — |

### Phase 2: Foundation (Sequential)
| Task | File |
|------|------|
| Create global.css with tokens | `src/styles/global.css` |
| Create animations.css | `src/styles/animations.css` |
| Create BaseLayout.astro | `src/layouts/BaseLayout.astro` |

### Phase 3: Components (Parallel — 5 CoderAgents)
All components built simultaneously:

| Agent | Component | File |
|-------|-----------|------|
| 1 | Hero | `src/components/Hero.astro` |
| 2 | TwoTracks | `src/components/TwoTracks.astro` |
| 3 | WhatYouGet | `src/components/WhatYouGet.astro` |
| 4 | Resourcing | `src/components/Resourcing.astro` |
| 5 | TheAsk | `src/components/TheAsk.astro` |

Each agent receives:
- Context: `SPEC.md` + `plan.md`
- Design tokens: `src/styles/global.css`
- Layout reference: `src/layouts/BaseLayout.astro`
- sb-website patterns: Component examples from sibling project

### Phase 4: Assembly (Sequential)
| Task |
|------|
| Create index.astro importing all components |
| Run dev server, verify sections render |
| Run `npm run build`, verify no errors |

### Phase 5: Deploy
| Task |
|------|
| `wrangler deploy` or configure Cloudflare Pages |

---

## Target File Tree

```
porch-site/
├── package.json
├── astro.config.mjs
├── tsconfig.json
├── src/
│   ├── pages/
│   │   └── index.astro
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── components/
│   │   ├── Hero.astro
│   │   ├── TwoTracks.astro
│   │   ├── WhatYouGet.astro
│   │   ├── Resourcing.astro
│   │   └── TheAsk.astro
│   └── styles/
│       ├── global.css
│       └── animations.css
└── public/
    └── images/
        ├── hero-bg.jpg
        ├── learning-bg.jpg
        └── knowledge-bg.jpg
```

---

## Constraints

- No contact CTA — in-person event
- No logos — clean, proposal-focused
- Images already generated — skip generation step
- Deploy to Cloudflare

---

## Ready

Say **"build"** to start execution.
