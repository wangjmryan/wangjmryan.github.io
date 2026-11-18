# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Static HTML, CSS and vanilla JS. No framework, no build step, no npm. Must work by opening `index.html` and deploy as-is to GitHub Pages (`wangjmryan.github.io`). Content lives in `data.js` and the page renders from it (from the original brief; the owner is a first-year who maintains it himself).

## Users

- **Hardware / embedded co-op recruiters** (primary). About 30 seconds on the site, often on a phone. Need to learn who Ryan is and that he wants a hardware/embedded co-op for Summer 2027, see evidence he builds physical things, and reach the résumé or contact in one click.
- **People Ryan meets**: classmates, design-team leads, people from events who look him up afterwards.
- **Anyone curious about him**: the site is a personal home on the web, not only a portfolio. Life outside engineering (triathlon training, Muay Thai / kickboxing / BJJ, fiction and philosophy, baking) belongs here.

## Product Purpose

Ryan Wang's personal site. It gets him his first hardware/embedded co-op and gives people who meet him a truthful picture of who he is. Success: a recruiter leaves knowing his name, his target role and term, and that he actually builds things; a non-recruiter leaves with a sense of the person.

## Positioning

A 1A Systems Design Engineering student at Waterloo who documents early, unfinished hardware work honestly as it happens (build logs with status and dated entries) rather than presenting polished case studies. "In progress" is shown as a strength.

## Operating Context

- Opened from a résumé link, LinkedIn, or a link shared in person; frequently on mobile.
- Ryan updates it himself by editing `data.js`: adding log entries, changing statuses, adding parts and photos.

## Capabilities and Constraints

- Single page with anchor navigation, plus a per-project detail view (`#build/<slug>`).
- Projects: autonomous quadcopter (~$150, INAV, F450 frame, SpeedyBee F405 Wing Mini, servo payload release; sourcing parts), 3D-printed parts (gallery; no photos yet), design teams WUTT (Mechanical Engineer, WATonomous) and SPAIS (Systems Engineer). Software projects: none yet; section hides when empty.
- Must be fast (Lighthouse 95+), accessible (semantic HTML, AA contrast, keyboard, reduced motion), responsive mobile-first, light and dark modes.
- Résumé hosted at `assets/resume.pdf`. Phone number deliberately not shown on the page.

## Brand Commitments

- Name: Ryan Wang. Email wangjmryan@gmail.com, linkedin.com/in/wjmryan, github.com/wangjmryan.
- Voice: plain, specific, a little dry; short sentences; concrete details over adjectives. No buzzwords ("passionate", "innovative", "leveraging").
- Must not feel: like a template or AI-generated; like it is trying too hard to look like an engineer (costume spec sheets, mono labels, grid paper); stiff or cold; busy.
- Rejected: the previous "engineering drawing / spec sheet" direction, and the Archivo + IBM Plex Mono type pairing.
- Standing preference (chosen by Ryan, 2026-11-18): the category standard played straight. A clean, plain, well-made personal site; no themed world or metaphor. Craft and typography carry it, not a concept.

## Evidence on Hand

- Résumé: `assets/resume.pdf`.
- No photos yet of builds, prints, team hardware, or Ryan. Do not fabricate photos, specs, prices, or results; drone decisions, parts, and costs are still placeholders for Ryan to fill.
- Team work facts come only from the résumé.

## Product Principles

1. A recruiter gets name, target role and term, and the résumé in the first viewport on a phone.
2. Show real work honestly, unfinished included; never inflate.
3. It should feel like a specific person made it, with warmth, not a costume of a profession.
4. Fewer elements, each earning its place.
5. Easy for Ryan to keep current by editing one file.

## Accessibility & Inclusion

WCAG AA contrast in both themes, full keyboard navigation, alt text, respects `prefers-reduced-motion`.
