# ryan wang — personal site

Plain HTML, CSS and JavaScript. No build step, no npm. Open `index.html` in a
browser to see it; upload the folder to GitHub Pages to publish it.

## Where things are

| File | What it's for | How often you'll touch it |
|---|---|---|
| `data.js` | **All content**: bio, links, builds, log entries, teams | Often |
| `css/style.css` | All styling. Colours are at the top, light and dark | Rarely |
| `js/main.js` | Turns `data.js` into the page; build pages; theme toggle | Rarely |
| `index.html` | Page skeleton + the `<head>` (title, link-preview tags) | Rarely |
| `404.html` | "Page not found", self-contained | Rarely |
| `assets/` | Résumé, favicon, link-preview image, photos (`assets/prints/`) | When adding photos |
| `fonts/` | Literata, self-hosted (SIL Open Font License) | Never |
| `tools/` | Templates for the link-preview image and home-screen icon | When your headline changes |

Anything in `[SQUARE BRACKETS]` in `data.js` shows up **highlighted** on the
page, so you can see what's unfinished. Remove the brackets and it turns
normal. The one exception is a link: `[the words](https://the-url)` becomes a
link instead.

## Common edits (all in `data.js`)

**Add a log entry** — add a line at the *top* of that build's `log` list:

```js
log: [
  { date: "2026-12-02", text: "Motors arrived. Bench-tested one with the ESC." },
  { date: "2026-11-18", text: "Started this log. ..." },
],
```

**Change a status** — write it the way you'd say it: `"planning"`,
`"sourcing parts"`, `"in progress"`, `"done"`. Anything except planning, done,
paused, shelved or idea gets the small red dot that means "working on it now".

**Add a part with its price** — `cost` is a plain number for one unit
(`{ part: "2212 920KV motor", qty: 4, cost: 9.5, why: "..." }`). The table
multiplies by `qty` and totals what's priced.

**Add a project** — copy the whole `{ type: "log", ... }` block, paste it after
the last one, and change `slug` (lowercase, no spaces; it becomes the URL
`#build/<slug>`) and the text. Set `image` to a photo path to show a small
thumbnail in the list.

**Add 3D-print photos**: items without a photo show as a plain text row;
add one and it becomes a figure. Put the image in `assets/prints/` (resize to
about 1600px wide first; phones take huge photos), then set `image:
"assets/prints/bracket.jpg"` and write `alt` text describing what the photo
shows.

**Add or edit design-team work**: edit the `team` list (`name`, `role`,
`points`, and optionally `url`).

**Add software projects** — add items to `software: []`. The section appears
automatically once the list isn't empty.

If the page goes blank after an edit, you almost certainly have a missing comma
or quote in `data.js`. Press F12 → Console: it shows the line number.

## Things that live in `index.html`, not `data.js`

Link previews (what shows when you paste the URL into LinkedIn, Discord,
iMessage) are read by bots that **don't run JavaScript**, so the `<title>`,
`description` and `og:*` tags in `index.html` are written out by hand. If you
change your headline, update them too.

## Publishing on GitHub Pages

1. Create a repo named exactly **`wangjmryan.github.io`** and upload this
   folder's contents (so `index.html` is at the top level).
2. Repo → Settings → Pages → *Deploy from a branch* → `main`, `/ (root)`.
3. After a minute it's live at `https://wangjmryan.github.io/`.

If you use a different repo name, the site lives at
`https://wangjmryan.github.io/<repo>/` instead. Then update `og:url` and
`og:image` in `index.html`, and change the `/` paths in `404.html` to
`/<repo>/`.

## Regenerating the link-preview image and icon

Edit the text in `tools/og-image.html`, then from a terminal in this folder run
(Windows):

```
"C:\Program Files\Google\Chrome\Application\chrome.exe" --headless=new --hide-scrollbars --allow-file-access-from-files --window-size=1200,630 --screenshot="%CD%\assets\og-image.png" "file:///%CD%/tools/og-image.html"
```

The home-screen icon works the same way with `tools/touch-icon.html`,
`--window-size=180,180` and `assets\apple-touch-icon.png`.

## Design rules (so additions stay consistent)

- **One typeface**: Literata. Regular for sentences, *italic* for short
  descriptions, dates and statuses, **semibold** only for names (yours, projects,
  teams) and headings.
- **Colour**: ink, one grey (`--muted`) for secondary text, and one brick red
  (`--accent`) used only for link hover and the "working on it" dot. No other
  colours.
- **Lines**: thin rules between list rows, nothing else. No boxes, cards,
  shadows or badges.
- **Motion**: almost none. A build page fades in; that's it.
