# Local d-AI Summer — Marketing One-Pager Spec

**Project**: Single-page marketing site for AI Alliance proposal  
**Target**: Decision-makers at AI Alliance member organizations  
**Goal**: Secure co-funding commitments, naming permission, and curriculum input  
**Source**: `alliance-proposal-writeup.md`

---

## Overview

A minimal, fast-loading Astro site deployed to Cloudflare. Single page with smooth-scroll sections. Warm, approachable design adapted from sb-website patterns.

### Key Constraints
- **Single HTML page** — no routing complexity
- **Mobile-first** — must read well on phones (decision-makers skim on mobile)
- **Fast** — sub-2s load, minimal JS
- **Shareable** — clean OG metadata for Slack/email sharing

---

## Site Structure

```
┌─────────────────────────────────────┐
│  HERO                               │
│  Headline + tagline + quick value   │
├─────────────────────────────────────┤
│  THE PROGRAM                        │
│  Two tracks, 4-6 sentence overview  │
├─────────────────────────────────────┤
│  WHAT PARTICIPANTS GET              │
│  Bullet list of tangible benefits   │
├─────────────────────────────────────┤
│  RESOURCING (optional)              │
│  Brief funding/labor model          │
├─────────────────────────────────────┤
│  THE ASK (CTA)                      │
│  Three specific requests            │
│  Contact button/link                │
└─────────────────────────────────────┘
```

---

## Content Mapping

### 1. Hero Section
**Source**: Lines 1-5 of proposal

```
Headline:     Local d-AI Summer
Tagline:      Local Decentralized AI Summer
Byline:       A Proposal by the Infinite Front Porch — for the AI Alliance

Value prop (1 sentence):
A facilitation program for Canadian social impact organizations 
navigating the decentralized AI landscape.
```

**Design**: Dark background (sb-website uses `--color-black`), warm gradient text, centered.

---

### 2. The Program Section
**Source**: Lines 9-19 (What We're Offering intro + two tracks)

**Heading**: Two Complementary Tracks

**Track 1: Local d-AI Summer**
> Learning events and peer support — guided sessions on decentralized AI, 
> weekly drop-in coworking, one-on-one support, and access to contributor networks.

**Track 2: Infinite Front Porch**
> Technical senseweaving and knowledge graphing — translating organizational 
> needs into technical language, bioregional ecosystem mapping, and knowledge commons connections.

**Design**: Two-column on desktop, stacked on mobile. Light background (`--color-cream`).

---

### 3. What Participants Get
**Source**: Lines 21-44 (session types condensed)

**Heading**: What Your Members Will Learn

**Introductory Sessions:**
- What AI actually is — algorithms, data ownership, evaluating tools
- Community perspectives — facilitated sharing of experiences
- What's already happening — survey of social AI work across Canada

**Skills Sessions:**
- Filesystems and Markdown — owning your digital knowledge
- Terminals, editors, and AI coding assistants — hands-on practice
- Owning your data and infrastructure — practical frameworks

**Deep-Dives (co-designed with members):**
- Peer exchange with Alliance builders
- Workshops with decentralized AI practitioners
- Knowledge mobilization labs

**Design**: Card grid or compact list. Use icons if available, otherwise simple bullets.

---

### 4. Resourcing Section (Keep Brief)
**Source**: Lines 67-109

**Heading**: How It's Funded

**Copy** (condensed):
> Shared cost model: participant co-funding (CAD $30-50K target), 
> web3 sponsorship (USD $25-50K), and in-kind contributor labor from 
> Green Pill Network, Bread Cooperative, OpenCivics Labs, and Gaia AI.

**Co-funders receive:**
- Curriculum input priority
- Managed IronClaw AI assistant instance
- Additional one-on-one support

**Design**: Smaller type, muted colors. This section can be shorter/less prominent.

---

### 5. The Ask (CTA Section)
**Source**: Lines 113-125

**Heading**: What We're Asking

**Three requests:**

1. **Co-funding commitments** — Even soft/conditional commitments help us approach sponsors with credible demand signal.

2. **Permission to name the AI Alliance** — Your credibility is an asset in sponsor conversations.

3. **Feedback and topic requests** — What are your members' most pressing AI questions?

**Primary CTA**: 
```
Button: "Start a Conversation"
Link: mailto:contact@hyperstition.wtf?subject=Local d-AI Summer
```

**Secondary CTA**:
```
Link: hyperstition.wtf →
```

**Design**: High-contrast background (`--color-orange`), white text. Prominent button.

---

## Technical Spec

### Stack
- **Framework**: Astro 5
- **Adapter**: `@astrojs/cloudflare`
- **Fonts**: Inter (sans), Playfair Display (serif) — via Astro experimental fonts
- **Deployment**: Cloudflare Pages/Workers

### File Structure (Minimal)
```
porch-site/
├── package.json
├── astro.config.mjs
├── tsconfig.json
├── src/
│   ├── pages/
│   │   └── index.astro        # Single page, all content
│   ├── layouts/
│   │   └── BaseLayout.astro   # HTML shell, SEO, fonts
│   ├── components/
│   │   ├── Hero.astro         # Headline + value prop
│   │   ├── TwoTracks.astro    # Program overview
│   │   ├── WhatYouGet.astro   # Session types
│   │   ├── Resourcing.astro   # Funding model (brief)
│   │   └── TheAsk.astro       # CTA section
│   └── styles/
│       └── global.css         # Design tokens + base styles
└── public/
    └── images/                # Optional: logo/hero image
```

### Design Tokens (from sb-website, adapted)
```css
:root {
  --color-cream: #edddc8;
  --color-charcoal: #2d2d2d;
  --color-black: #1a1a1a;
  --color-orange: #f5872c;
  --color-red: #c4401a;
  --color-green: #7a9a4e;
  --color-gold: #d4a843;
  
  --font-serif: var(--font-playfair);
  --font-sans: var(--font-inter);
  
  --max-width: 800px;  /* narrower for one-pager readability */
}
```

### SEO/Meta
```html
<title>Local d-AI Summer — A Proposal for the AI Alliance</title>
<meta name="description" content="A facilitation program for Canadian social impact organizations navigating decentralized AI.">
<meta property="og:title" content="Local d-AI Summer">
<meta property="og:description" content="Learning events, peer support, and knowledge commoning for the AI Alliance.">
<meta property="og:type" content="website">
```

---

## Design Notes

### Visual Hierarchy
1. **Hero**: Largest type, dark bg, warm gradient headline
2. **Two Tracks**: Medium prominence, clear visual separation
3. **What You Get**: Dense but scannable, consider cards
4. **Resourcing**: Smallest, muted — detailed but not the focus
5. **The Ask**: High contrast, action-oriented

### Responsive Behavior
- **Desktop (≥1024px)**: Two-column tracks, 3-card grid for sessions
- **Tablet (768-1023px)**: Single column, 2-card grid
- **Mobile (<768px)**: Single column, stacked cards

### Interactions (Minimal)
- Smooth scroll to sections (optional, CSS `scroll-behavior: smooth`)
- Hover states on buttons/links
- No JS required except Astro's view transitions (optional)

---

## Implementation Tasks

| # | Task | Est. Time |
|---|------|-----------|
| 1 | Scaffold project (copy from sb-website, trim) | 15 min |
| 2 | Create `global.css` with tokens | 10 min |
| 3 | Build `BaseLayout.astro` | 10 min |
| 4 | Build `Hero.astro` | 20 min |
| 5 | Build `TwoTracks.astro` | 15 min |
| 6 | Build `WhatYouGet.astro` | 20 min |
| 7 | Build `Resourcing.astro` | 10 min |
| 8 | Build `TheAsk.astro` | 15 min |
| 9 | Assemble `index.astro` | 10 min |
| 10 | Test responsive, adjust | 15 min |
| 11 | Deploy to Cloudflare | 5 min |

**Total: ~2.5 hours**

---

## Design Decisions (Resolved)

1. **Logo/branding**: None — clean, proposal-focused
2. **Contact**: None — in-person event, no CTA button needed
3. **Imagery**: AI-generated hero + section backgrounds (see Image Generation below)
4. **Analytics**: Not for initial version

---

## Image Generation

**Model**: `google/gemini-3-pro-image-preview` via OpenRouter API  
**API**: Requires `modalities: ["image", "text"]` in request

### Visual Style Guide

**Aesthetic**: Fantasy realism, organic solarpunk, cozy but visionary  
**Palette**: Warm earth tones — cream (#edddc8), charcoal (#2d2d2d), orange (#f5872c), red (#c4401a), green (#7a9a4e), gold (#d4a843)  
**Lighting**: Dynamic, ambient, warm accent glows, golden hour vibes  
**Mood**: Approachable, hopeful, community-oriented, grounded futurism

### Images to Generate

#### 1. Hero Background (hero-bg.webp)
**Prompt**: 
```
Fantasy realism landscape, organic solarpunk aesthetic. A warm, inviting 
community gathering space at golden hour — think cozy library meets 
garden pavilion. Soft amber and golden light filtering through organic 
architecture. Plants, books, and subtle holographic interfaces blending 
naturally. Warm earth tones: cream, terracotta, sage green, soft gold.
Cozy, hopeful, visionary. Cinematic, wide aspect ratio 16:9.
```
**Size**: 1920x1080 (hero background)
**Usage**: Dark overlay applied via CSS, text on top

#### 2. Learning Track Background (learning-bg.webp)
**Prompt**:
```
Fantasy realism, solarpunk aesthetic. A sunlit workshop space with 
people gathered around tables, learning together. Organic materials, 
plants, warm wood tones. Soft orange and green accent lighting. 
Approachable, community-focused. Horizontal aspect, warm atmosphere.
```
**Size**: 1200x800
**Usage**: Background for "What Participants Get" section

#### 3. Knowledge/Senseweaving Background (knowledge-bg.webp)
**Prompt**:
```
Fantasy realism, solarpunk aesthetic. An abstract visualization of 
connected knowledge — like a living library or neural garden. 
Bioluminescent threads connecting nodes of light. Deep charcoal 
background with gold and green glowing connections. Mysterious but 
inviting. Horizontal aspect.
```
**Size**: 1200x800
**Usage**: Background for "Two Tracks" or "Resourcing" section

### Image Treatment (CSS)
Images receive the sb-website treatment:
- Dark gradient overlay (rgba(26,26,26, 0.85-0.95))
- Warm accent glow (radial gradient, theme-colored)
- Grain texture overlay (SVG noise filter)
- Backdrop blur on content cards

### Generation Script
```bash
# Using OpenRouter API
curl https://openrouter.ai/api/v1/chat/completions \
  -H "Authorization: Bearer $OPENROUTER_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "google/gemini-3-pro-image-preview",
    "modalities": ["image", "text"],
    "messages": [{"role": "user", "content": "<PROMPT>"}]
  }'
# Response contains base64 image data URL
```

---

## Success Criteria

- [ ] Page loads in <2s on 3G
- [ ] Readable on mobile without horizontal scroll
- [ ] All three "asks" visible without scrolling past resourcing section
- [ ] Visual style matches sb-website (warm, cozy, visionary)
- [ ] OG metadata renders correctly in Slack/Twitter
