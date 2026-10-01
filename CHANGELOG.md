# Changelog

## 3.3.8

- Chrome laid over the page changes colour smoothly rather than snapping, and each part of it is read against what it covers rather than the whole menu taking one colour.

## 3.3.7

- Keeps the logo flush with the edge of the header, now that the frontend fixes that position for every site built on it.

## 3.3.6

- The logo keeps its place in the header, which every site built on the same frontend now shares.

## 3.3.5

- The small arrow beside the logo keeps its colour instead of fading to nearly nothing a moment after the page opens.

## 3.3.4

- The header is the right colour in the first frame after a reload. Reloading part-way down a page used to paint it from the page's own colours and correct it a moment later, once the browser had worked out what was actually behind it.
- The footer no longer flickers between black and white while the page settles.

## 3.3.3

- The site runs on the current frontend. Nothing about it looks different: the work in that release is for chrome that floats over changing content, and this site's header sits on its own background.
- The links in the phone menu follow the header at every width, rather than copying a link the phone has hidden.

## 3.3.2

- The page you are on is actually marked in the phone menu. Every link there was drawn in the same colour, so nothing could stand out, and 3.3.1 claimed this was fixed when it was not.
- The home link no longer stays marked beside the page you are on. Under a language prefix the home address is `/cs`, which is the start of `/cs/znacka`, so it matched every page on the site.
- Links in the menu are the links in the header: same colour, size, weight, spacing and the same mark on the current page.

## 3.3.1

- The email address stays on one line on a phone instead of breaking in the middle of itself.
- The small facility tiles inside a property card stay two across on a phone rather than stacking into a list.
- The "what we offer" panel is ruled only between its cells. The outer edges were drawn as well, which showed on the dark band and hid against the light one.
- Links in the phone menu match the links in the header, so the mark on the current page looks the same in both.

## 3.3.0

- Write to `info@machynka.eu`. It is the address everywhere on the site now, and the footer says plainly that it is the only one to use and that the old `miroslav@machynka.cz` should not be written to any more.
- The site has error pages. A wrong or dead address used to answer with the homepage under the wrong URL; it now shows the status, an explanation and a way back, in both languages, with no header or footer around it.
- A chosen language survives a reload. Picking Czech on an `/en` page used to be forgotten the moment the page loaded again, because the address outranked the choice.
- The header marks where you are. The link for the current page is highlighted, and on the homepage the mark follows the section you are reading, handing back to Home when you return to the top.
- The hero title is larger and the same size in both languages. English was being shrunk by a third to fit "ACCOMMODATION" into a narrow column.
- The two figures under the hero sit side by side at every width, including on a phone.
- The "contact us" button carries an icon, like the one beside it.
- Cards are less padded, 17px rather than 40px, and a photograph at the top of a card reaches its edges instead of floating inside a frame of background.
- The language picker is shorter.
- The scrollbar follows the device, not the site, and no longer flashes the wrong colour on load. Every page reserves room for it, so the page edge no longer shifts between routes.
- The menu button animates open and closed.
- The browser console names Trebired once per page, on every Trebired site rather than only the ones on the newest frontend.

## 3.2.1

- The three figures about the business stack on a phone rather than pairing up. Three of them across two columns left one alone on a second row; they read as a list.

## 3.2.0

- Text no longer runs off the side of a phone. A card table asked for a 30rem column, which laid out a 480px track inside a 358px screen; the page clips horizontal overflow, so the text was cut rather than wrapped. Columns now stay inside the width they are given, and the rules, prices and room descriptions read in full.
- The cards that hold a symbol and a short label sit two across on a phone instead of one per row: what we offer, what an accommodation has, and the facilities on each property card. Photographs in the gallery pair up rather than stacking one per screen.
- Room cards keep a single column on a phone. They carry a paragraph each, and two of them across a phone left four words to a line.
- The brand page stacks its logo grounds on a phone rather than squeezing two canvases side by side, and each brand colour now states its hex.

## 3.1.1

- Switching language keeps your place on the page. It was navigating to the other language's URL, which reloaded the route and sent you back to the top; the text is already in the page, so it now swaps in place and only the address bar changes.
- The address bar always names a language. Opening an unprefixed link no longer leaves you on a URL without one: it is rewritten to the prefixed form before the page paints, keeping any saved preference, so the older links those paths exist for still cost no extra request.

## 3.1.0

- Every language has its own URL. Each page is prerendered at `/cs/...` and `/en/...`, and the language menu navigates between them instead of swapping the text in place, so the address bar names the language on screen and a page can be linked or shared in either one. Internal links carry the language they were rendered in, so following one never changes it.
- The unprefixed paths are still served and still hold Czech, so every link written before the prefixes existed resolves to the same page. They name the prefixed URL as canonical, so search engines see one page rather than two.
- A link opened in one language is no longer switched to another before it paints. The boot script reads the language from the URL ahead of the saved preference, which previously won and moved the visitor back.

All notable changes to `machynka-eu` will be documented here.

This project follows semantic versioning once published.

## 3.0.0

- The site keeps one stylesheet, and it is the hero. Everything else — bands, cards, panels, tags, icon chips, action rows, the accent rule, media frames and their captions — is a package component configured through `.trebired/frontend/`, so the brand is stated once as tokens rather than restated per component as CSS. What survives is the hero: a title that sizes itself off its own character count through a container query, and the town map behind it. Down from 10 files and 758 lines to 1 and 192.
- Page bands hold their width with plain padding instead of grid gutter tracks, and every component is square by the radius scale rather than by being told so one at a time.
- Added `/znacka`, the brand page: the mark on light, muted and dark grounds with its clear space drawn and measured, its smallest size, the three brand colours, and what not to do with it. Red is not one of the grounds — the roof of the mark is the same red, so that pairing is listed under what to avoid. The page shares the hero the accommodation pages use, at its compact size.
- `Domů` and `Značka` join the header navigation, which now matches the footer's.
- The contact address is `miroslav@machynka.cz` and stays there: the mailbox never moved with the domain, so the address is written out rather than derived from it. The footer says plainly that machynka.cz is the old, unofficial and broken site, that this is the official one, and that the address on the old domain still works.

### Fixed

- The header and footer stopped responding after a soft navigation. Both are hydrated once at boot, but a soft redirect replaces their markup with the fetched document's, so the React roots were left rendering into nodes no longer in the page: the language menu changed the site's language and its own label stayed on the language you had left. They are re-mounted when the navigation reports back.
- Changing language did nothing. The switcher posted to `/ui/lang/set`, a route only a server-backed site has; on a static build every change 404'd and then silently stopped, because the runtime treats a failed persist as a refusal. The choice is now kept in the browser and the page re-renders in place, which is what the language menu always claimed to do.
- Both maps rendered at zero height and so were invisible. The embed had no shape of its own and the rule that used to give it one went with the old stylesheets; it now asks for an aspect ratio.
- Hover easing was set to 120ms, short enough to read as no easing at all, and the back link had none. Both are on one 220ms timing now.
- A text link hovered to white, which was right on the dark footer and invisible the moment the same component sat on a white card. It hovers to the brand red, which holds on either.
- The home hero was a plain dark section rather than an inverse band, so it never rescoped muted text and its lead rendered in the light theme's grey on near-black while every other hero lead was legible. All three heroes now share one colour and one scale.
- The hero's calls to action wrapped onto separate lines on a phone but each button kept its own text width, so they sat ragged under a full-width heading. They stack and fill the column, inside the hero's padding.
- The scrollbar is the browser's again. The site had been recolouring the thumb since before the stylesheets were consolidated, and that was carried across rather than questioned.

### Changed

- Moved to `@trebired/frontend` 14.8.1, which took nine releases of the pieces this rewrite needed: the page band, card tones, the icon tile, the accent rule, the action row, the tag, the brand canvas, the frame's cover, scrim, caption and corner control, and a grid that can stretch its items.

## 2.3.0

- Page bands lay themselves out with grid tracks rather than padding or margins: a gutter column either side of `min(80rem, 100% - gutter * 2)` holds the width, and a row either side of the content holds the inset. Nothing on the page is spaced with a margin.

## 2.2.0

- The language switcher is the package's `LocaleSwitcher` rather than a hand-built popover, its chip sized through `shell.language.trigger`.
- Section headings are a `heading.variants.section` entry in the frontend config instead of a class with four breakpoint overrides, and every stacked or inline wrapper in the sections, panels, property cards and accommodation pages is a package layout utility. Images and map embeds sit in the package's `frame`, badges and room tags are `pill`s, and small caps labels are `label-caps`.
- The site no longer defines a single CSS class. Layout, spacing and text come from package utilities, type scales and surfaces from the frontend config, and the handful of things a utility cannot express — gradient scrims, the map backdrop, the container-query hero title, hover colour swaps — hang off data attributes on the elements that own them.
- The stylesheet is down from 1878 lines across 14 files to 714 across 10, and from 182 class names to none.

## 2.0.0

- The site is now `machynka.eu`. The product identity, the contact email and every generated URL follow the new domain, and `machynka.cz`, `www.machynka.cz` and `penzion.machynka.cz` redirect permanently to it, keeping the path.
- Penzion Machynka lists 7 rooms, not 18. The homepage room total is now added up from the accommodation data instead of being written out by hand, so the headline figure cannot drift from the rooms actually listed.
- The Libuše apartments' room names drop the trailing property name: "Studio č. 9 Libuše" is just "Studio č. 9" on the page that is already about Libuše.
- Moved to @trebired/frontend 13.44.0 and took its new components. The hand-written card table, which drew its dividers with nth-child borders to stop neighbours doubling up, is now the package's `HairlinePanel`. Every page section is the package's `Section` with a tone instead of a repeated flex-centre-and-pad shell, and the footer is the package's `SiteFooter`.

## 1.6.5

- `penzion.machynka.cz` now redirects permanently to `machynka.cz`, keeping the path, so old links to the guesthouse subdomain land on the same page of the main site.

## 1.6.4

- Moved to `@trebired/frontend` 13.14.0. Select cards now switch on click and from the keyboard, and headings take their level from nesting. This site renders neither, so nothing on it changes.

## 1.6.3

- Moved to `@trebired/frontend` 13.11.1, which changes the graph cards this site does not use. The header is unchanged.

## 1.6.2

- The header keeps its 5rem bar, 3.5rem logo and link sizes, which `@trebired/frontend` 13.9.0 now fixes for every site rather than reading from this repository. Nothing here changes; the other sites match this header.

## 1.6.1

- The menu toggle keeps its 3rem button and 2rem icon, which `@trebired/frontend` 13.8.1 now fixes for every site instead of reading a per-site token.

## 1.6.0

- The header and its mobile menu come from `SiteHeader` in `@trebired/frontend` 13.8.0 instead of this repository. The header reads the same: the same bar, the same links, the same phone number and language switcher, and the same menu under the toggle. The site now describes the header as a brand, a list of links and the actions beside them, and its look through `components.shell.header` tokens, so the header and the menu behave the same here as on the other sites.

## 1.5.1

- The language menu takes each language's name from `languageName` in `@trebired/frontend` 13.7.0, which names a language in that language (Čeština, English). The menu read the same before; a language added later is now named correctly without a hand-written label.
- Moved to `@trebired/logger` 3.0.0. It saves logs to SQLite and needs Bun to save them; this site logs to the console only, so nothing else changes.

## 1.5.0

- Removed the Booking.com buttons from the accommodation hero and price panel, along with their links and copy. Reservations are taken by phone or e-mail only.
- Removed the 24/7 support figure from the home hero, which was not true. The hero stats now show rooms and properties.
- The "Rezervovat telefonicky/e-mailem" button on each accommodation page now scrolls to that page's contact details (check-in and check-out, reception address, phone numbers, and location) instead of leaving for the home page contact section.
- Fixed the favicon staying dark in a dark browser. Chromium took the `.ico`, which cannot follow the color scheme, over the light and dark svg variants. `@trebired/frontend` 13.1.13 serves one adaptive favicon built from both variants.
- Removed a stale `overrides` entry for `@trebired/logger` that conflicted with the direct dependency and made installs fail.

## 1.4.0

- Switching language no longer reloads or changes the URL. 1.2.0 changed language by navigating to `/en`. The language menu now re-renders the page in place, the saved language is shown before the application bundle runs, and moving between pages keeps it. Built on `@trebired/frontend` 13.1.2.
- The `/en` pages remain for search engines only, so both languages stay indexed with `hreflang`. Visitors are never sent there; someone arriving from a search result sees their saved language if they have one.

## 1.3.1

- Fixed the gallery lightbox opening to an empty dark overlay. 1.3.0 moved to the `@trebired/frontend` media system, whose viewer stayed transparent when opened; `@trebired/frontend` 12.17.1 shows it.

## 1.3.0

- Replaced the local `ExpandableImage` and `GoogleMapEmbed` with the `@trebired/frontend` 12.16 media system and deleted the application copies. The package versions add a portal, a focus trap, focus restore, a reference counted scroll lock and a cleaned close timer, none of which the local implementations had.
- Enabled the `media` system in `.trebired/frontend/systems.ts`.

## 1.2.3

- Removed the `frontend ready` boot log from the client entry. It was an application log line duplicated across sites for a milestone the framework does not report, so it told a visitor's console nothing the site owns.

## 1.2.2

- Regenerated the Code Discipline alias map for the added `.trebired/i18n/config.ts`. 1.2.1 shipped without it, so `code-discipline check` failed on a fresh clone even though the build succeeded.

## 1.2.1

- Fixed every page throwing `i18n-local-translator-unbound` on hydration. 1.2.0 moved the bundler options into `.trebired/bundler/config.ts`, which sources the supported languages from `.trebired/i18n/config.ts`, and this repo had no such file. The client build therefore ran with no languages and left every `createLocalTranslator()` call unrewritten, while the SSR build kept passing its own list, so the served HTML looked correct and only the browser failed. Added `.trebired/i18n/config.ts` and made it the single source: the SSR render now takes the languages resolved from that config instead of a second list in application code.

## 1.2.0

### Languages

- Changed language selection from a stored preference applied in the browser to locale-prefixed URLs. Czech is served at `/` and English under `/en`, each as its own prerendered document with its own `<html lang>`, title, description, canonical URL, and `hreflang` set, so both languages are separately indexable. `@trebired/frontend` owns the boot script that resolves the visitor's locale before first paint and the `LocaleProvider` that keeps the server render and hydration in agreement, so the language is no longer corrected after the page is visible.
- Removed the app-local language wrappers `shared/lang/detect.ts` and `shared/lang/store.ts`. Detection, persistence, and the active locale now come from `@trebired/frontend`; `shared/lang/policy.ts` declares only this site's locale list, labels, and flags.

### SEO

- Added `@trebired/seo` for canonical URLs, `hreflang` alternates, Open Graph and Twitter tags, JSON-LD, `robots.txt`, and `sitemap.xml`, replacing the hand-assembled head tags in the removed `src/bin/frontend/shell.ts`.

### Brand

- Moved the favicons out of `src/frontend/public` into `src/brand` as the single SVG source per colour scheme. `@trebired/frontend` rasterizes them at build time into the ICO and PNG sizes and emits the head links, so no generated icon is committed.

### Deployment

- Added `netlify.toml` declaring `bun run build` and `dist` as the publish directory, so the deploy no longer depends on build settings stored in the host's UI.

### Trebired packages

- Declared `.trebired/bundler/config.ts` through the bundler's own `defineConfig` with a `forVersion`. It was a typed options object at the package config path, so it carried no version and nothing could detect drift against the installed bundler. It now owns `build.clientOutDir` and `build.publicPath`; the application-owned defines and language list moved to `src/bin/frontend/options.ts`.
- Removed the local `withDirectoryIndexFallback` from the dev server. `@trebired/bundler` 5.12.1 resolves a directory request to its `index.html`, which is what the wrapper existed to do.
- Updated the Trebired packages to the current fleet: `bundler` 5.13.1, `frontend` 12.15.0, `seo` 0.4.0, `startup` 0.7.1, `i18n` 0.6.1, `code-discipline` 7.2.0, `configs` 0.4.0, `logger` 2.7.1, `utils` 0.9.4, and brought every `.trebired/*` `forVersion` up with them.
- Updated `@trebired/frontend` to 12.12.7 earlier in this line, fixing a broken dev server and build: the 12.12.5 payload had `dist/config/scss.js` importing `./tones.js` without shipping that file, so every build failed at discovery.

## 1.1.3

### Appearance

- Removed the "Detail" link from the accommodation cards on the home page. The card is already a link, and the arrow badge on its image carries the same affordance, so the label was redundant.
- Fixed the "CO NABÍZÍME" cards stacking one per row on phones. They now use a two-column grid there, matching the "CO JE K DISPOZICI" cards, and keep the three-column desktop layout.
- Fixed a light strip down the right edge of every page. `@trebired/frontend`'s reset sets `scrollbar-gutter: stable` on `html`, which permanently reserves scrollbar-width space that only `html`'s own background paints — so it showed through beside every full-bleed dark section. The site does not use the framework's scroll-locking modal that the reservation exists for, so it is now off, and the scrollbar itself is themed with a transparent track.
- Moved the language switcher onto the same row as the phone number in the mobile menu, aligned right, instead of below it.

### Navigation

- Fixed the hydration mismatch warnings React logged for the header and footer on every page load. `hydrateRoot()` only schedules hydration, but `bindFrontendRuntime()` ran synchronously at the end of the client entry, stamping `data-tbf-soft-redirect-bound` and `mode="static"` onto the DOM before React committed. Chrome hydration now resolves through `hydrateChromeRoots()`, and the runtime binding plus the content island mount wait for that commit.

### Trebired packages

- Updated `@trebired/frontend` to 12.12.5 and `@trebired/bundler` to 5.9.0. `@trebired/logger` stays pinned to `2.5.32`: `@trebired/bundler` and `@trebired/logger-adapter` still ship a bundled logger config targeting `2.5.26` against a `^2.5.32` range, so unpinning would resolve `2.6.2` and trip the version guard.

## 1.1.2

### Navigation

- Fixed `canonicalPath()` and `getAccommodationByPath()` matching paths by exact string, with no trailing-slash normalization. A cold load of an accommodation URL arriving with a trailing slash (as several static hosts produce via a redirect) silently missed the route lookup and rendered the home page instead, while the server had correctly rendered the accommodation page — a genuine content mismatch that React's hydration surfaced as a hard error and regenerated the tree client-side. `canonicalPath()` now strips a trailing slash before every lookup.

## 1.1.1

### Trebired packages

- Updated `@trebired/frontend` to 12.12.3 (from 12.11.1), across three collaborative bugfix rounds with the package maintainer: `bindPopstate()` no longer mistakes a same-page hash click for a real navigation, `rehydrate()` no longer races a still-hydrating island's soft-redirect links, `LiveIslandMount`'s `data-live-island-hydrated` guard no longer goes permanently stale when an app points its `rootId` at the SPA's own content selector, and the icon binder now respects the same unhydrated-island guard the other binders already had.

### Navigation

- Fixed the SSR entry never wiring up server-side icon rendering, which shipped every icon as an empty `<i>` element in the server-rendered HTML (invisible until diffed against the client's hydrated output). Server-rendered routes now wrap in `withIconServerRenderer()`, seeded from the same icon spec set the client build uses.
- Fixed the content island (`content_island.tsx`) reading its route from a JSON state script that only the first page load ever populated; it now reads `window.location.pathname` directly, so it can't go stale after the first soft-navigation.

## 1.1.0

### Navigation

- Migrated page navigation to `@trebired/frontend`'s SPA soft-navigation system, replacing the hand-rolled router. Page switches now fetch and swap through `configureSpa()`/`onPageChange()` instead of a client-side React router, with `Header` and `Footer` hydrated once as persistent roots across navigations.
- Added a build-time-only SSR path that renders each route to real HTML at build time (via `@trebired/bundler`'s `bundle()` with `environment: "node"`), so the SPA system has server-rendered markup to fetch and swap in, rather than an empty shell.
- Fixed same-page section links firing an unwanted network request and progress bar on click, caused by a same-document fragment click triggering a real `popstate` in Chromium; same-page hash clicks now scroll directly instead of round-tripping through a soft-redirect.
- Enabled `design.scrollBehavior: "smooth"` in `.trebired/frontend/config.ts`.

### Appearance

- Removed the eyebrow label from every section and replaced it with a proper full-width title, fixing the "why us" section (previously rendering only the eyebrow, with the title invisible due to a CSS rule ordering bug) and the "GET IN TOUCH" / accommodation titles, which were squeezed into a grid column instead of spanning full width.
- Replaced every CSS `margin` with `gap` on a flex/grid container, using `@trebired/frontend`'s `--tbf-gap-*` tokens throughout.
- Fixed the benefit cards to lay out two per row on mobile instead of one, and removed their hover state.
- Fixed the hero title overflowing its container on narrow viewports.

### Trebired packages

- Updated `@trebired/bundler`, `@trebired/frontend`, `@trebired/i18n`, and `@trebired/startup`, and declared the previously-undeclared `@trebired/utils` and `@trebired/env` dependencies explicitly.
- Updated `@trebired/code-discipline` to 7.1.3, which fixes its own logger version-guard mismatch.
- Moved `@trebired/logger` into `dependencies`, alongside `@trebired/startup` and `@trebired/env`. It keeps its exact `2.5.32` pin and matching `overrides` entry, since `@trebired/bundler` and `@trebired/logger-adapter` (pulled in by `frontend`/`startup`/`env`) still ship a bundled logger config that only tolerates `2.5.x`.

## 1.0.0

### Build and structure

- Migrated the site from Vite, Tailwind CSS, PostCSS, and a hand-authored `index.html` to `@trebired/bundler`, with colocated SCSS and build-time generated route shells.
- Restructured the repository to the Trebired application layout: `src/frontend`, `src/bin`, `src/types`, with package configuration under `.trebired/`.
- Added static shell generation. The build writes one HTML file per route, each carrying its own Czech or English `title` and `description` from the single route table in `src/frontend/shared/routes.ts`.
- Added `src/bin/dev.ts` and `src/bin/frontend/build.ts` as the only entrypoints, replacing `vite.config.ts` and the Vite dev server.
- Added `bun run verify`, which runs the discipline check, the typecheck, and the production build in that order.

### Trebired packages

- Adopted `@trebired/frontend` as the design system: palette, semantics, breakpoints, component tokens, theme, popover, icons, and typography all come from `.trebired/frontend/`.
- Adopted `@trebired/i18n` colocated translators. Every component that owns copy has an `i18n/cs.ts` and `i18n/en.ts` beside it, resolved statically at build time, replacing `react-i18next` and the central resource files.
- Adopted `@trebired/startup` for the dev server: port preflight, ordered bootstrap subsystems, graceful shutdown on `SIGINT`/`SIGTERM`/`SIGHUP`, and configured startup messages.
- Adopted `@trebired/utils` for product identity, port and environment reading, and value helpers, replacing hand-written equivalents.
- Adopted `@trebired/code-discipline` with the `@trebired/configs` preset, enforcing file and function sizes, comment removal, formatting, hash-alias imports, and a banned pattern for the product hostname.
- Read the product hostname from `package.json` through `readProductIdentity()`, injected as a build-time constant, so it appears in exactly one place in the repository.

### Appearance

- Moved button geometry, tones, transition, and typography into `components.surfaces.button`. The application ships no button CSS.
- Moved page title, section title, and eyebrow label typography into `components.typography.heading.variants`, including their responsive steps.
- Moved the responsive container padding ramp into `components.typography.container.px`.
- Replaced `lucide-react` with the Remix Icon set that `@trebired/frontend` ships, registered through a build-time static icon cache so the site needs no icon endpoint.
- Replaced the Google Fonts link with self-hosted Geist through the bundler font pipeline, eliminating a third-party request on every page load.
- Replaced the `flag-icons` dependency with the locale flags `@trebired/frontend` emits for the configured countries.
- Added the Bučovice map backdrop to the accommodation hero sections, shared with the home hero through one component.
- Removed `src/frontend/css/` entirely. The base reset, page paint, container, anchor offset, and screen-reader utility all come from the package.

### Removed

- Removed the shadcn button, `class-variance-authority`, `@radix-ui/react-slot`, `tailwind-merge`, `tw-animate-css`, `lucide-react`, `flag-icons`, `react-i18next`, `vite`, `@vitejs/plugin-react`, `tailwindcss`, and `postcss`.
- Removed `index.html`, `vite.config.ts`, `postcss.config.mjs`, `components.json`, and `src/globals.css`.
- Stopped tracking `dist/` build output.

### Documentation and licensing

- Added README.md, CONTRIBUTING.md, and CHANGELOG.md following the Trebired documentation standard.
- Licensed the project under the MIT License, with the copyright holder matching `package.json#author`.

## 0.1.0

- Released the original site: Vite, React, Tailwind CSS, shadcn components, and `react-i18next`, with a hand-authored `index.html` and a single global stylesheet.
