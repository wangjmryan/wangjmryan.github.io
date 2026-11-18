---
name: Ryan Wang
description: A plain, well-set personal site; one serif, one ink, one brick accent, hairline rules.
colors:
  paper: "#FAFAF8"
  ink: "#211D19"
  muted: "#6A635B"
  rule: "#E3DFD8"
  accent: "#A6402A"
  mark: "#F3E3D9"
  select: "#EBD3C7"
  paper-dark: "#1B1916"
  ink-dark: "#ECE6DD"
  muted-dark: "#A69D92"
  rule-dark: "#34302A"
  accent-dark: "#E08A70"
  mark-dark: "#43302A"
  select-dark: "#5A3A30"
  paper-print: "#FFFFFF"
  ink-print: "#000000"
  muted-print: "#5E5850"
  rule-print: "#D9D4CC"
typography:
  display:
    fontFamily: "Literata, Iowan Old Style, Palatino Linotype, Georgia, serif"
    fontSize: "clamp(2.125rem, 1.6rem + 1.6vw, 2.5rem)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.015em"
  headline:
    fontFamily: "Literata, Iowan Old Style, Palatino Linotype, Georgia, serif"
    fontSize: "clamp(1.75rem, 1.4rem + 1.2vw, 2.125rem)"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.012em"
  title:
    fontFamily: "Literata, Iowan Old Style, Palatino Linotype, Georgia, serif"
    fontSize: "1.1875rem"
    fontWeight: 600
    lineHeight: 1.4
  lede:
    fontFamily: "Literata, Iowan Old Style, Palatino Linotype, Georgia, serif"
    fontSize: "1.1875rem"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "Literata, Iowan Old Style, Palatino Linotype, Georgia, serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
    fontFeature: "\"onum\" 1, \"pnum\" 1"
  label:
    fontFamily: "Literata, Iowan Old Style, Palatino Linotype, Georgia, serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
  small:
    fontFamily: "Literata, Iowan Old Style, Palatino Linotype, Georgia, serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.6
  table:
    fontFamily: "Literata, Iowan Old Style, Palatino Linotype, Georgia, serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    fontFeature: "\"lnum\" 1, \"tnum\" 1"
rounded:
  hairline: "2px"
  image: "3px"
  round: "50%"
spacing:
  row: "1rem"
  row-tight: "0.625rem"
  label-gap: "0.75rem"
  section: "3rem"
  group: "3.5rem"
  block: "4rem"
  gutter-phone: "1.25rem"
  gutter-tablet: "2.5rem"
components:
  link:
    textColor: "{colors.ink}"
  link-hover:
    textColor: "{colors.accent}"
  list-row:
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    padding: "1rem 0"
  section-label:
    textColor: "{colors.muted}"
    typography: "{typography.label}"
  status:
    textColor: "{colors.muted}"
    typography: "{typography.small}"
  theme-toggle:
    textColor: "{colors.muted}"
    rounded: "{rounded.round}"
    size: "2.5rem"
  thumbnail:
    rounded: "{rounded.image}"
    size: "3rem"
  placeholder-mark:
    backgroundColor: "{colors.mark}"
    rounded: "{rounded.hairline}"
    padding: "0 0.15em"
  skip-link:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.image}"
    padding: "0.5rem 0.875rem"
---

# Design System: Ryan Wang

## Overview

**Creative North Star: "A Person Writing Plainly"**

The site is the category standard played straight: a clean personal page where the prose and the work carry it, not a concept. One serif (Literata) set with care, warm near-black ink on near-white paper, one grey for everything secondary, and a single brick accent kept almost entirely in reserve. There is no themed world and no metaphor; the craft is in the typography, the spacing and the restraint.

Density is low and the reading is linear. On wide screens a sticky intro column (name, four short paragraphs, a quiet link row) sits beside a scrolling column of plain lists separated by hairline rules. On phones it collapses to one column, with the co-op ask and the résumé link above the fold. Build pages open in place of the list, as a single readable measure.

This direction replaces the rejected "engineering drawing / spec sheet" look. Confirmed rejections: costume spec sheets, mono labels, grid paper, part numbers and dimension lines, the Archivo + IBM Plex Mono pairing, and the portfolio template (hero banner, cards, skill badges).

**Key Characteristics:**
- One family, three cuts: Literata 400, 400 italic, 600. Nothing else.
- Roman for prose, italic for descriptors, dates, statuses and the lowercase section headings, semibold only for names and headings.
- Hairline rules between rows are the only lines on the page.
- Flat paper: no cards, no shadows, no badges, no fills behind content.
- One brick accent, held back for hover, the active-status dot, focus rings, the favicon and the reading-progress line.
- Motion follows the scroll: blocks ease up into place as they come into view, and a build page shows reading progress.

## Colors

A warm, low-chroma paper-and-ink palette with one brick accent; dark mode keeps every role and warms to charcoal.

### Primary
- **Brick** (accent / accent-dark): link and toggle hover colour, the in-progress status dot, the 2px focus ring, and the favicon dot. Dark mode lightens it to a terracotta so it holds contrast on charcoal.

### Neutral
- **Warm Paper** (paper / paper-dark): the page background and nothing else; no surface sits on top of it. Dark mode is a warm charcoal, never pure black.
- **Warm Ink** (ink / ink-dark): all primary text, names, headings and link text at rest. Link underlines are this ink at 35% (`color-mix(in srgb, ink 35%, transparent)`), 1px, offset 0.22em.
- **Stone Grey** (muted / muted-dark): every secondary voice: section labels, descriptors, statuses, dates, fact labels, table headers, the footer, the build-page back link, the theme toggle at rest. 5.7:1 on paper.
- **Hairline** (rule / rule-dark): 1px rules between list rows, fact rows, table rows and log entries; the empty-image backing for gallery tiles; the scrollbar thumb.
- **Placeholder Wash** (mark / mark-dark): background of `[PLACEHOLDER]` text pulled from data.js, until Ryan replaces it. A content-maintenance signal, not decoration.
- **Selection** (select / select-dark): text selection background; text stays ink.

Print forces a light palette regardless of theme (white paper, black ink, muted #5E5850, rule #D9D4CC).

### Named Rules
**The Held-Back Brick Rule.** The accent appears only on hover, on the active-status dot, on focus rings, in the favicon and as the 2px reading-progress line on build pages. It never fills an area, never colours text at rest, never marks a heading. Its rarity is the point.

**The Same-Roles Dark Rule.** Dark mode swaps values, never roles. Every token has a dark twin and nothing appears or disappears between themes.

## Typography

**Display Font:** Literata 600 (with Iowan Old Style, Palatino Linotype, Georgia, serif)
**Body Font:** Literata 400 and 400 italic (same stack)

**Character:** One quiet bookish serif doing every job. Hierarchy comes from weight, italic and grey, not from a second family or from size jumps.

Self-hosted, latin subset, `font-display: swap`, 400 roman preloaded. Body uses old-style proportional figures; the parts table switches to lining tabular figures so prices align.

### Hierarchy
- **Display** (600, 34 to 40px fluid, 1.1, -0.015em): the name, once, in the intro column.
- **Headline** (600, 28 to 34px fluid, 1.15, -0.012em, balanced wrap): a build page's title; also the 404 heading.
- **Title** (600, 19px, 1.4): section headings inside a build page.
- **Lede** (400, 19px, 1.6, max 38rem): the build page's goal sentence.
- **Body** (400, 17px, 1.65): bio prose, item names (at 600), list text. Bio measure caps at 34rem, build page at 42rem.
- **Label** (400 italic, 16px, 1.5, muted, lowercase): the section headings "building", "teams", "software".
- **Small** (400 or italic, 15px): statuses, item notes, footer, the parts table.

### Named Rules
**The Three Voices Rule.** Roman speaks, italic describes, semibold names. Italic carries descriptors, dates, statuses, fact labels, decision headings and the lowercase section headings; semibold is only for the name, item names, headings and the table total. No uppercase, no letter-spaced labels, no other weights.

**The Upright Italic Rule.** Literata Italic's capitals and figures are near-upright by design; only the lowercase slants strongly. This is the typeface, not a bug. Do not substitute a synthetic oblique, swap families, or add skew to "fix" it.

## Layout

Mobile-first single column with a 1.25rem gutter (3rem top, 4rem bottom). From 40rem the gutter opens to 2.5rem and the top to 5rem. From 60rem the page becomes a two-column grid inside a 72rem container: a 22.5rem intro column and a fluid main column, gap `clamp(4rem, 8vw, 7.5rem)`, top 6rem. The intro pins (sticky, top 6rem) only when the window is also at least 44rem tall, so it never gets cut off.

On phones under 40rem the intro reorders: first bio paragraph (the co-op ask), then the link row, then the rest of the bio, so the résumé is above the fold. Under 34rem, list statuses drop beneath the title, the facts list stacks label over value, and the parts table reflows into a grid with the "why" column under each part.

Rhythm: list rows 1rem vertical padding; fact and table rows 0.5 to 0.625rem; 0.75rem from a section label to its list; 3.5rem between groups; 3rem between build-page sections; 4rem before the footer. Reading measures are capped (bio 34rem, item notes 40rem, build page 42rem, lede 38rem).

## Elevation & Depth

Completely flat. No shadows, no layered surfaces, no tinted panels, no borders around content. Structure comes from whitespace and 1px hairline rules alone; the sticky intro column is the only thing that stays put, and it does so without any visual lift.

### Named Rules
**The Hairline-Only Rule.** The only lines are 1px rules between rows of a list, facts table, parts table or log. No cards, no boxes, no badges, no dividers between sections.

## Shapes

Square by default. The only rounding: 2px on focus rings and placeholder marks, 3px on images (thumbnails, gallery) and the skip link, and full circles for the status dot and the theme toggle's hit area. The favicon is a paper square (6px radius at 32px) holding a brick dot. Bullets in build pages are short 0.5rem hairline dashes in muted grey, not glyphs.

## Components

### Links
Ink text with a 1px underline at 35% ink, offset 0.22em. Hover turns text and underline brick over 160ms (ease-out-expo). Focus is a 2px brick outline, offset 3px. The link row in the intro adds 0.375rem block padding for tap size without changing how it looks. The name link drops the underline and does not change colour.

### List rows (building, teams, software)
A baseline-aligned flex row, 1rem vertical padding, with a hairline above each row and one below the list. Left: item name (600) over an italic muted descriptor. Right: an italic muted status. An optional 3rem square thumbnail (3px radius) leads the row when a photo exists. When the row is a link, hover (and keyboard focus) turns the name brick and draws a 1px underline under it from left to right; the row itself never moves.

### Status
Italic, 15px, muted, no wrap. An in-progress status gets a 7px brick dot before it; finished, shelved, paused, idea and planning statuses do not. It is the only coloured element at rest on the home view.

### Section labels
Lowercase italic muted words ("building", "teams", "software") at 16px, real h2 elements. They are section headings, not eyebrows over a headline.

### Theme toggle
A 40px circular hit area with an 18px stroked sun or moon (1.4px stroke, currentColor), muted at rest, brick on hover. Sits at the end of the intro link row.

### Build page
Back link (italic, muted), headline title, a meta line of status and dates, the lede goal, a facts list (italic muted labels, hairline rows), title-level sections, dash bullets, italic decision headings, a parts table with lining tabular figures and a semibold total, a dated log (italic dates in a 10rem column from 40rem up), and an image gallery (4:3 tiles, 3px radius, 14rem minimum).

### Placeholder mark
`[PLACEHOLDER]` text from data.js renders with the mark wash, roman (never italic), 2px radius, 0.15em side padding. It stays visible until the owner replaces the content.

### Motion
One idea: the page moves with your scroll, not on its own. Every timed curve is ease-out-expo, `cubic-bezier(0.16, 1, 0.3, 1)`; nothing bounces or loops, and nothing travels between pages (a title-morph between list and build page was tried and removed).

- **Scroll reveal (the focal motion).** Blocks that start below the window (section labels, list rows, the footer, and on build pages the lede, facts, section headings, bullets, decisions, parts rows, log entries and gallery figures) wait 1.75rem lower, at 98.5% scale and in a 4px blur, then rise into place when they come into view: opacity 700ms, transform 900ms, blur 600ms, ease-out-expo. Several arriving together go 70ms apart (capped at 5). An IntersectionObserver triggers it, so it always finishes, even for the last thing on the page, and works in every browser. Blocks already on screen are never hidden, and without the script nothing is hidden at all.
- **Reading progress.** On build pages a fixed 2px brick line along the top edge fills from left to right with the page's scroll (`animation-timeline: scroll(root)`).
- **Row hover.** The name turns brick in 160ms and its underline draws in over 360ms.
- **First-visit settle.** On a first load of the home page only, the name, bio, links, section labels, list rows (35ms apart, capped at 8) and footer rise 0.375rem out of a 3px blur over 600ms, about 1s in total. It never replays when returning from a build page. Content is visible in CSS; the script only adds the effect.
- **Opening a build.** The build page fades in (420ms, opacity, 0.5rem rise, 2px blur). Theme switching is a same-clock `plus-lighter` crossfade at 280ms, so nothing dims mid-way.
- **Reduced motion.** Nothing waits to reveal on scroll, there is no progress line and nothing settles; the theme switch becomes a 150ms crossfade, hover colour still changes, and the underline appears at once.

## Do's and Don'ts

### Do:
- **Do** set everything in Literata 400, 400 italic or 600, with old-style figures in prose and lining tabular figures in tables.
- **Do** separate rows with 1px rules in the rule colour and nothing else.
- **Do** keep the brick accent to hover, the active-status dot, focus rings, the favicon and the reading-progress line.
- **Do** give every new colour a dark-mode twin under both `prefers-color-scheme: dark` and `[data-theme="dark"]`.
- **Do** put descriptors, dates and statuses in italic muted grey, and names in semibold ink.
- **Do** leave Literata Italic's near-upright capitals and figures as they are.
- **Do** keep motion tied to scroll or to a direct action; nothing animates on a timer except the one-time first-visit settle.
- **Do** give every crossfade a matching clock and `plus-lighter` blending, and give every motion a reduced-motion path with no spatial movement.

### Don't:
- **Don't** add cards, shadows, tinted panels, badges or skill chips.
- **Don't** add a second typeface, a monospace face, uppercase or letter-spaced labels.
- **Don't** bring back spec-sheet costume: grid paper, part numbers, dimension lines, technical-drawing frames.
- **Don't** use the accent as a fill, a heading colour or for text at rest.
- **Don't** add a hero banner or decorative imagery; images appear only as real build photos.
- **Don't** use glyph or emoji icons; the theme toggle's stroked SVGs are the only icons.
