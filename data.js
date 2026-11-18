/* ==========================================================================
   data.js — ALL of the site's content lives here.
   --------------------------------------------------------------------------
   Edit this file, save, refresh the page. You never need to touch index.html
   for content.

   Conventions
   - Links inside text: write [the words](https://the-url). Example:
       "I'm on [WUTT](https://example.com), building an underwater rover."
   - Anything else in [SQUARE BRACKETS] (no (url) after it) is a placeholder.
     It shows up highlighted on the page until you replace it.
   - Text marked DRAFT was written for you. Rewrite it in your own words.
   - Dates are YYYY-MM-DD, e.g. "2026-11-18".
   - Keep a comma after every item in a list.
   ========================================================================== */

const SITE = {
  name: "Ryan Wang",
  updated: "2026-11-18",   // shown at the bottom of the page

  /* ---------------------------------------------------------------- Bio
     DRAFT. A few short paragraphs, in your own voice. The first one is what
     a recruiter reads first, so it says who you are and what you're after. */
  bio: [
    "I'm a first-year Systems Design Engineering student at [Waterloo](https://uwaterloo.ca). I'm looking for a hardware or embedded co-op for Summer 2027.",
    "I like projects that end in something I can hold, power on and break. I'm a mechanical engineer on the Waterloo Underwater Technology Team, a systems engineer at SPAIS, where we're building an agricultural robot, and on my own I'm building a $150 autonomous quadcopter.",
    "Outside of that I'm training for a triathlon, I do Muay Thai, kickboxing and BJJ, I read a lot of fiction and philosophy, and I bake.",
  ],

  links: {
    email:    "wangjmryan@gmail.com",
    resume:   "assets/resume.pdf",   // replace the file to update it
    linkedin: "https://www.linkedin.com/in/wjmryan",
    github:   "https://github.com/wangjmryan",
  },

  /* ------------------------------------------------------------- Building
     Your own projects, shown in this order. Each one gets its own page at
     #build/<slug> with the full log.

     status: write it how you'd say it, e.g. "planning", "sourcing parts",
             "in progress", "done".
     image:  optional photo for the list, e.g. "assets/drone.jpg". A photo
             with a plain or cut-out background looks best.
     type:   "log" (a build log) or "gallery" (a set of items, e.g. prints). */
  builds: [
    {
      type: "log",
      slug: "drone",
      title: "Autonomous quadcopter",
      hook: "a $150 quad that flies a waypoint mission and drops a payload", // DRAFT
      status: "sourcing parts",
      image: "",

      goal:
        "Build an autonomous quadcopter on INAV that can take off, fly a GPS waypoint mission, " +
        "release a small payload at a set point and return home. Keep the whole build near $150.", // DRAFT

      // Key facts, shown as a short list on the build page.
      facts: [
        { label: "Budget",   value: "about $150 [CAD?]" },
        { label: "Firmware", value: "INAV" },
        { label: "Frame",    value: "F450" },
        { label: "Flight controller", value: "SpeedyBee F405 Wing Mini" },
        { label: "Payload",  value: "servo-driven release" },
      ],

      done: [
        "Picked the frame, flight controller and firmware.",       // DRAFT
        "[What else is actually done? e.g. budget spreadsheet, parts ordered]",
      ],
      next: [
        "Order the remaining parts: [motors, ESCs, props, battery, GPS, receiver].",
        "Bench-test the flight controller and servo output with props off.",
      ],

      constraints: [
        "Total budget around $150, including battery and radio link. [Is your transmitter included?]",
        "Must run open-source firmware that supports waypoint missions.",
      ],
      decisions: [
        {
          title: "F450 frame",
          body: "[Why: e.g. cheap, rugged, lots of room to mount a GPS mast and the payload servo, spare arms are easy to find.]",
        },
        {
          title: "SpeedyBee F405 Wing Mini flight controller",
          body: "[Why: e.g. price, spare PWM outputs for the servo, built-in BEC. It's sold as a fixed-wing board, so say how you'll set it up for a quad in INAV.]",
        },
        {
          title: "INAV over Betaflight or ArduPilot",
          body: "[Why: e.g. INAV has GPS navigation and missions, which Betaflight doesn't, and it runs on this cheap F405 board.]",
        },
      ],

      // cost = price for ONE unit, as a number (no $). null if you don't know yet.
      parts: [
        { part: "F450 frame",               qty: 1, cost: null, why: "[reason]" },
        { part: "SpeedyBee F405 Wing Mini", qty: 1, cost: null, why: "[reason]" },
        { part: "[Motors]",                 qty: 4, cost: null, why: "[reason]" },
        { part: "[ESCs]",                   qty: 4, cost: null, why: "[reason]" },
        { part: "[GPS module]",             qty: 1, cost: null, why: "[reason]" },
        { part: "[Micro servo]",            qty: 1, cost: null, why: "payload release" },
      ],

      learning: [
        "[What has surprised you so far? e.g. how much of the budget goes to the battery and radio, not the frame.]",
      ],

      // Dated updates, NEWEST FIRST. Add new entries at the top.
      log: [
        { date: "2026-11-18", text: "Started this log. Core parts chosen; sourcing the rest." }, // DRAFT
      ],
    },

    {
      type: "gallery",
      slug: "prints",
      title: "3D-printed parts",
      hook: "parts I've designed and printed, and what each one is for", // DRAFT
      status: "ongoing",
      image: "",
      // Each item: a photo (optional), a name and what it's for.
      items: [
        { image: "", alt: "", caption: "[Part name]", purpose: "[What it does / why you made it]" },
        { image: "", alt: "", caption: "[Part name]", purpose: "[What it does / why you made it]" },
      ],
      log: [],
    },
  ],

  /* ---------------------------------------------------------------- Teams
     Student design teams. DRAFT, from your résumé; reword freely. */
  team: [
    {
      name: "Waterloo Underwater Technology Team",
      role: "mechanical engineer, 2026 – present",
      points: [
        "Designing a modular enclosure in Onshape for a vertical-profiling float, laid out so the electronics stay accessible during testing.",
        "Assembling the underwater rover's aluminum frame.",
      ],
    },
    {
      name: "Sustainable Physical AI Society",
      role: "systems engineer, 2026 – present",
      points: [
        "Building a modular agricultural robot: an all-terrain mobile base, a robotic arm and a sensing package.",
        "Visited a local farm and interviewed the farmer to turn their problems into design requirements.",
      ],
    },
  ],

  /* ------------------------------------------------------------- Software
     Hidden while empty. Example:
     { title: "Line-follower sim", hook: "PID line follower in Python", url: "https://github.com/..." }, */
  software: [],
};
