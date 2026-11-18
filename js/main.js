/* ==========================================================================
   main.js — builds the page from SITE (defined in data.js).
   --------------------------------------------------------------------------
   You shouldn't need to edit this to change content. Sections, in order:
     1. Helpers      — making HTML elements, inline links, dates
     2. Home view    — bio, links, building / teams / software lists
     3. Detail view  — a build's own page at #build/<slug>
     4. Router       — switches between home and detail when the URL changes
     5. Theme toggle — light / dark
   ========================================================================== */

(function () {
  "use strict";

  /* 1. Helpers ------------------------------------------------------------ */

  // h("p", { class: "x" }, "text", childEl) → <p class="x">text…</p>
  // Real DOM elements (not innerHTML strings), so text from data.js can never
  // accidentally break the page.
  function h(tag, attrs, ...children) {
    const el = document.createElement(tag);
    for (const [key, value] of Object.entries(attrs || {})) {
      if (value === null || value === undefined || value === false) continue;
      el.setAttribute(key, value === true ? "" : value);
    }
    for (const child of children.flat()) {
      if (child === null || child === undefined || child === false || child === "") continue;
      el.append(child instanceof Node ? child : text(String(child)));
    }
    return el;
  }

  // Turns a string into nodes:
  //   [the words](https://url)  → a link
  //   [ANYTHING ELSE]           → a highlighted placeholder, so unfinished
  //                               content is easy to spot
  function text(str) {
    const frag = document.createDocumentFragment();
    const pattern = /\[([^\]]+)\]\(([^)\s]+)\)|\[([^\]]+)\]/g;
    let last = 0;
    let m;
    while ((m = pattern.exec(str))) {
      if (m.index > last) frag.append(str.slice(last, m.index));
      if (m[1]) frag.append(link(m[2], m[1]));
      else frag.append(h("mark", { class: "ph" }, document.createTextNode("[" + m[3] + "]")));
      last = pattern.lastIndex;
    }
    if (last < str.length) frag.append(str.slice(last));
    return frag;
  }

  // Links that leave the site open normally (same tab); that's what people expect.
  function link(href, label) {
    return h("a", { href: href }, document.createTextNode(label));
  }

  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => Array.from(document.querySelectorAll(sel));
  const isPlaceholder = (str) => !str || /\[[^\]]+\](?!\()/.test(str);

  // "2026-11-18" → "18 November 2026"
  const MONTHS = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];
  function formatDate(iso) {
    const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso || "");
    if (!m) return iso || "";
    return Number(m[3]) + " " + MONTHS[Number(m[2]) - 1] + " " + m[1];
  }
  const time = (iso) => h("time", { datetime: iso }, formatDate(iso));

  function formatMoney(n) {
    return "$" + (Math.round(n * 100) / 100).toFixed(n % 1 ? 2 : 0);
  }

  // Statuses that mean "being worked on right now" get the small accent dot.
  const isActive = (status) => !/^(done|finished|complete|shelved|paused|idea|planning)$/i.test(status || "");

  function status(s) {
    if (!s) return null;
    return h("span", { class: "status" + (isActive(s) ? " is-active" : "") }, s);
  }

  const plainName = () => SITE.name.replace(/\s*\[[^\]]+\]/g, "").trim() || SITE.name;


  /* 2. Home view ---------------------------------------------------------- */

  function renderIntro() {
    $("[data-bio]").replaceChildren(...SITE.bio.map((p) => h("p", null, p)));

    const L = SITE.links;
    const items = [
      L.resume && ["résumé", L.resume],
      L.email && ["email", "mailto:" + L.email],
      L.linkedin && ["linkedin", L.linkedin],
      L.github && ["github", L.github],
    ].filter(Boolean);
    $("[data-links]").replaceChildren(...items.map(([label, href]) =>
      h("li", null, isPlaceholder(href) ? h("span", null, label) : link(href, label))));
  }

  function renderBuilds() {
    $("[data-builds]").replaceChildren(...SITE.builds.map((b) => h("li", { class: "item" },
      h("a", { class: "item-link", href: "#build/" + b.slug },
        b.image && h("img", { class: "item-thumb", src: b.image, alt: "", width: 96, height: 96, loading: "lazy", decoding: "async" }),
        h("span", { class: "item-text" },
          h("span", { class: "item-name" }, b.title),
          b.hook && h("span", { class: "item-desc" }, b.hook)),
        status(b.status))
    )));
  }

  function renderTeams() {
    const team = SITE.team || [];
    $("[data-teams-section]").hidden = team.length === 0;
    $("[data-teams]").replaceChildren(...team.map((t) => h("li", { class: "item" },
      h("div", { class: "item-row" },
        h("span", { class: "item-text" },
          t.url ? h("a", { class: "item-name", href: t.url }, t.name) : h("span", { class: "item-name" }, t.name),
          t.role && h("span", { class: "item-desc" }, t.role))),
      t.points && t.points.length > 0 && h("ul", { class: "item-notes" }, t.points.map((p) => h("li", null, p)))
    )));
  }

  function renderSoftware() {
    const list = SITE.software || [];
    $("[data-software-section]").hidden = list.length === 0;
    $("[data-software]").replaceChildren(...list.map((s) => h("li", { class: "item" },
      h(s.url ? "a" : "div", { class: s.url ? "item-link" : "item-row", href: s.url || null },
        h("span", { class: "item-text" },
          h("span", { class: "item-name" }, s.title),
          s.hook && h("span", { class: "item-desc" }, s.hook)))
    )));
  }

  function renderFooter() {
    $("[data-updated]").replaceChildren("Last updated ", time(SITE.updated), ".");
  }


  /* 3. Detail view -------------------------------------------------------- */

  const bullets = (items) => h("ul", { class: "bullets" }, items.map((i) => h("li", null, i)));

  function renderDetail(b) {
    const section = (title, ...body) => h("section", { class: "d-section" }, h("h2", null, title), ...body);
    const parts = [];

    if (b.type === "gallery") {
      parts.push(renderGallery(b));
    } else {
      if (b.goal) parts.push(h("p", { class: "d-goal" }, b.goal));
      if (b.facts && b.facts.length) parts.push(h("dl", { class: "facts" },
        b.facts.flatMap((f) => [h("dt", null, f.label), h("dd", null, f.value)])));
      if ((b.done && b.done.length) || (b.next && b.next.length)) parts.push(h("div", { class: "d-pair" },
        b.done && b.done.length > 0 && section("Done so far", bullets(b.done)),
        b.next && b.next.length > 0 && section("Next", bullets(b.next))));
      if (b.constraints && b.constraints.length) parts.push(section("Constraints", bullets(b.constraints)));
      if (b.decisions && b.decisions.length) parts.push(section("Decisions",
        h("div", { class: "decisions" }, b.decisions.map((d) => h("div", { class: "decision" },
          h("h3", null, d.title), h("p", null, d.body))))));
      if (b.parts && b.parts.length) parts.push(section("Parts", renderParts(b)));
      if (b.learning && b.learning.length) parts.push(section("What I'm learning", bullets(b.learning)));
    }

    if (b.log && b.log.length) parts.push(section("Log",
      h("ol", { class: "log" }, b.log.map((e) => h("li", null, time(e.date), h("p", null, e.text))))));

    $("#detail-view").replaceChildren(
      h("p", { class: "back" }, h("a", { href: "#", "data-home": "" }, "back to all projects")),
      h("header", { class: "d-head" },
        h("h1", { class: "d-title", tabindex: "-1" }, b.title),
        h("p", { class: "d-meta" },
          b.hook && h("span", { class: "item-desc" }, b.hook),
          status(b.status))),
      ...parts
    );
    document.title = b.title + " — " + plainName();
  }

  // Items with a photo become figures; items without one become plain rows,
  // so a gallery with no photos yet doesn't fill the page with empty boxes.
  function renderGallery(b) {
    const withImage = b.items.filter((i) => i.image);
    const textOnly = b.items.filter((i) => !i.image);
    return h("div", { class: "gallery-wrap" },
      withImage.length > 0 && h("div", { class: "gallery" }, withImage.map((item) => h("figure", null,
        h("img", { src: item.image, alt: item.alt || "", loading: "lazy", decoding: "async", width: 800, height: 600 }),
        h("figcaption", null, h("span", { class: "item-name" }, item.caption), " ", h("span", { class: "item-desc" }, item.purpose))))),
      textOnly.length > 0 && h("ul", { class: "items" }, textOnly.map((item) => h("li", { class: "item" },
        h("div", { class: "item-row" }, h("span", { class: "item-text" },
          h("span", { class: "item-name" }, item.caption),
          h("span", { class: "item-desc" }, item.purpose))))))
    );
  }

  // Parts table with a running total of the parts whose cost is known.
  function renderParts(b) {
    const known = b.parts.filter((p) => typeof p.cost === "number");
    const total = known.reduce((sum, p) => sum + p.cost * (p.qty || 1), 0);
    const budget = (b.facts || []).find((f) => /budget/i.test(f.label));
    const note = known.length < b.parts.length ? known.length + " of " + b.parts.length + " priced" : "";
    return h("div", { class: "table-scroll", tabindex: "0", role: "region", "aria-label": "Parts list" },
      h("table", { class: "parts" },
        h("thead", null, h("tr", null,
          h("th", { scope: "col" }, "Part"), h("th", { scope: "col", class: "num" }, "Qty"),
          h("th", { scope: "col", class: "num" }, "Cost"), h("th", { scope: "col", class: "why-col" }, "Why"))),
        h("tbody", null, b.parts.map((p) => h("tr", null,
          h("td", null, p.part),
          h("td", { class: "num" }, String(p.qty)),
          h("td", { class: "num" }, typeof p.cost === "number" ? formatMoney(p.cost * (p.qty || 1)) : "–"),
          h("td", { class: "why" }, p.why)))),
        h("tfoot", null, h("tr", null,
          h("td", null, "Total so far", note && h("span", { class: "item-desc" }, " (" + note + ")")),
          h("td", null),
          h("td", { class: "num" }, known.length ? formatMoney(total) : "–"),
          h("td", { class: "why" }, budget ? "budget " + budget.value : "")))
      ));
  }


  /* 4. Router ---------------------------------------------------------------
     #build/<slug> shows that build's page; anything else shows the lists. */

  let homeTitle = document.title;
  let homeScroll = 0;      // where you were on the list before opening a build
  let inDetail = false;

  function route() {
    const match = location.hash.match(/^#build\/([\w-]+)$/);
    const build = match && SITE.builds.find((b) => b.slug === match[1]);
    const home = $("#home-view");
    const detail = $("#detail-view");

    if (build) {
      if (!inDetail) homeScroll = window.scrollY;
      renderDetail(build);
      home.hidden = true;
      detail.hidden = false;
      inDetail = true;
      // On phones the detail starts below the intro; jump to it. On wide
      // screens the intro sits beside it, so go to the top.
      const wide = window.matchMedia("(min-width: 60rem)").matches;
      const place = () => window.scrollTo(0, wide ? 0 : detail.getBoundingClientRect().top + window.scrollY - 24);
      place();
      // On first load the font may still be arriving, which moves things; place again once it has.
      if (!wide && document.fonts && document.fonts.status !== "loaded") document.fonts.ready.then(() => { if (inDetail) place(); });
      detail.querySelector("h1").focus({ preventScroll: true });
      return;
    }

    if (inDetail) {
      detail.hidden = true;
      detail.replaceChildren();
      home.hidden = false;
      inDetail = false;
      document.title = homeTitle;
      window.scrollTo(0, homeScroll);
      $(".name a").focus({ preventScroll: true });
    }
  }

  // The name and the "all projects" link go home. Clear the hash with
  // pushState so the URL doesn't keep a stray "#".
  document.addEventListener("click", (e) => {
    const a = e.target.closest("[data-home]");
    if (!a) return;
    e.preventDefault();
    if (location.hash) history.pushState(null, "", location.pathname + location.search);
    if (inDetail) route(); else window.scrollTo({ top: 0 });
  });


  /* 5. Theme toggle --------------------------------------------------------
     No saved choice → follow the operating system. Clicking saves a choice. */

  function setupTheme() {
    const btn = $(".theme-toggle");
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const current = () => document.documentElement.dataset.theme || (media.matches ? "dark" : "light");

    function sync() {
      const dark = current() === "dark";
      btn.setAttribute("aria-pressed", String(dark));
      btn.title = dark ? "Switch to light mode" : "Switch to dark mode";
      // Keep the phone's browser bar the same colour as the page.
      const paper = getComputedStyle(document.documentElement).getPropertyValue("--paper").trim();
      $$('meta[name="theme-color"]').forEach((m) => m.setAttribute("content", paper));
    }

    btn.addEventListener("click", () => {
      const next = current() === "dark" ? "light" : "dark";
      document.documentElement.dataset.theme = next;
      try { localStorage.setItem("theme", next); } catch (e) { /* private mode: fine */ }
      sync();
    });
    media.addEventListener("change", sync);
    sync();
  }


  /* Start ------------------------------------------------------------------ */
  if (typeof SITE === "undefined") {
    console.error("data.js didn't load, or has a syntax error. Check for a missing comma or quote.");
    return;
  }
  homeTitle = document.title = plainName();
  renderIntro();
  renderBuilds();
  renderTeams();
  renderSoftware();
  renderFooter();
  setupTheme();
  window.addEventListener("hashchange", route);
  window.addEventListener("popstate", route);
  route();
})();
