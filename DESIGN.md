---
name: Jihoon Jeong — Portfolio
description: An engineering datasheet for a researcher — silkscreen legend over substrate, annotated in oxide red.
colors:
  oxide-red: "#9E2B25"
  oxide-red-deep: "#7E1F1B"
  oxide-red-lifted: "#E0594A"
  substrate: "#EDEFE9"
  substrate-raised: "#F7F8F4"
  ink: "#161A17"
  ink-muted: "#575E56"
  rule: "#C9CEC4"
  mask-black: "#121412"
  mask-raised: "#1A1D1A"
  silkscreen: "#E4E7E0"
  silkscreen-muted: "#9BA398"
  rule-dark: "#333A32"
typography:
  display:
    fontFamily: "Archivo, 'Gothic A1', sans-serif"
    fontSize: "clamp(2.2rem, 5vw, 3.5rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  page-title:
    fontFamily: "Archivo, 'Gothic A1', sans-serif"
    fontSize: "2.25rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Archivo, 'Gothic A1', sans-serif"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Archivo, 'Gothic A1', sans-serif"
    fontSize: "1.1rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Literata, 'Noto Serif KR', Georgia, serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "normal"
  small:
    fontFamily: "Literata, 'Noto Serif KR', Georgia, serif"
    fontSize: "0.85rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "Archivo, 'Gothic A1', sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.1em"
rounded:
  none: "0px"
  sm: "2px"
  md: "3px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "28px"
  xl: "48px"
components:
  button-primary:
    backgroundColor: "{colors.oxide-red}"
    textColor: "{colors.substrate-raised}"
    rounded: "{rounded.sm}"
    padding: "11px 20px"
    typography: "{typography.label}"
  button-primary-hover:
    backgroundColor: "{colors.oxide-red-deep}"
    textColor: "{colors.substrate-raised}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "10px 20px"
  card:
    backgroundColor: "{colors.substrate-raised}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "24px"
  tag:
    backgroundColor: "transparent"
    textColor: "{colors.ink-muted}"
    rounded: "{rounded.none}"
    padding: "3px 8px"
---

<!-- impeccable:design-schema 1 -->

## Overview

**Creative North Star: "The datasheet and the board"**

This is the reference document for a piece of hardware that happens to be a person. An
embedded SoC datasheet is how this audience — industry recruiters and research lab PIs —
actually evaluates a component: a pale substrate sheet, block diagrams ruled in hairlines,
tabular parameters, and one spot color reserved for annotation and errata. The board
itself is the dark counterpart: matte solder mask with white silkscreen legend, where
every trace has a destination and nothing is decorative because nothing on a board can
afford to be.

The positioning it has to carry is "theoretically grounded **and** practically
deployable." The prior visual world said only the first half — indigo-to-violet gradients,
glass cards, floating orbs — the interchangeable costume of a thousand AI portfolios. This
world says the second half. It looks like something that was manufactured, measured, and
shipped, because that is the claim.

Density is a feature, not a failure. Rules do the work that shadows used to. Type is set
tight and left-aligned to a hard grid. The oxide red appears rarely enough that when it
does, it means *look here* — the way red annotation ink means something on an engineering
print, and the way a red mask marks the one board in the tray that went to production.

**Key Characteristics:**
- Hairline rules and hard 0–3px corners; no soft containers
- Flat by default — depth comes from tonal layering and rule weight, never from shadow blur
- One spot color, used on well under 10% of any screen
- Grotesque display over serif body: the legend on the board, the paper you read results on
- Light ground by default (the 3pm office skim), dark ground as the board's own face

## Colors

A cool, mineral palette drawn from board materials: FR-4 substrate pulled to print weight,
matte solder mask, and oxide-red annotation ink. Deliberately outside both this category's
default (cool indigo/violet on near-black) and its predictable opposite (warm cream with a
high-contrast serif).

### Primary
- **Oxide Red** (`#9E2B25`): The single accent. Solder-mask red and engineering-annotation
  ink at once. It marks links, the primary action, active navigation, the section rule
  that opens a page, and numeric values that are the point of a table. 6.4:1 on substrate,
  so it is legible as body-size text and not only as decoration. In dark mode it lifts to
  **Oxide Red Lifted** (`#E0594A`, 5.1:1 on mask black) — the same ink read under a bench
  lamp, not a different color.
- **Oxide Red Deep** (`#7E1F1B`): Pressed and hover state for filled controls only.

### Neutral — light ("the datasheet")
- **Substrate** (`#EDEFE9`): Page ground. FR-4's own cool gray-green at paper weight. Not
  white (harsh on a laptop under office light), not cream (the warm default this world
  explicitly refuses).
- **Substrate Raised** (`#F7F8F4`): Cards, sidebar, and any panel that sits above the page.
  The tonal step is small on purpose; it separates by value, not by shadow.
- **Ink** (`#161A17`): Body and heading text. Near-black carrying the ground's green cast so
  type sits *in* the sheet rather than on it. 15.4:1.
- **Ink Muted** (`#575E56`): Secondary text, metadata, captions. 5.7:1 — above AA for body,
  which is the floor for anything a PI actually has to read.
- **Rule** (`#C9CEC4`): Every border, divider, and table line. One weight, 1px, everywhere.

### Neutral — dark ("the board")
- **Mask Black** (`#121412`): Page ground. Matte solder mask, green-cast, not blue-black.
- **Mask Raised** (`#1A1D1A`): Panels and cards.
- **Silkscreen** (`#E4E7E0`): Body and heading text — the white legend printed on the board.
- **Silkscreen Muted** (`#9BA398`): Secondary text. 5.4:1 on mask black.
- **Rule Dark** (`#333A32`): Borders and dividers.

### Named Rules

**The Annotation Rule.** Oxide red is annotation, never surface. It may ink type, a 1–2px
rule, a small filled control, or a state marker. It may never fill a card, a hero, a
section band, or a large field. If more than roughly 10% of a viewport is red, it has
stopped meaning anything.

**The One-Weight Rule.** There is exactly one border color and one border width per theme:
`rule` at 1px. Emphasis comes from a rule's *presence*, its length, or a jump to 2px on the
single section-opening rule — never from a second border color.

**The No-Blend Rule.** Two colors never blend into each other. No gradient fills, no
gradient text, no `color-mix` borders, no radial glows. A board is printed, not airbrushed.

## Typography

**Display Font:** Archivo (fallback: Gothic A1 for Hangul, then `sans-serif`)
**Body Font:** Literata (fallback: Noto Serif KR for Hangul, then Georgia, `serif`)

**Character:** Archivo is a grotesque built for high-performance print and signage — at
600–700 with tight tracking it reads as the silkscreen legend stamped beside a component,
and its width axis gives monumental part numbers without a second family. Literata is a
screen-reading serif, and it is what the research pages are set in, because half this
site's job is that a PI actually reads them. The pairing is deliberately the inverse of the
category habit (serif display over sans body): the technical voice announces, the reading
voice explains.

**Korean parity:** the KO/EN toggle is a hard product constraint, so each Latin face
declares a Hangul companion in the same register — Gothic A1 (sans) under Archivo, Noto
Serif KR (myeongjo) under Literata. Google Fonts subsets Korean by unicode-range, so the
Hangul faces cost nothing on an English render. A Korean page must never fall back to a
system Gothic while the English page gets a chosen face.

**Excluded faces:** Inter, Roboto, and system stacks are excluded by the brief. Also
excluded as this generation's convergent defaults: Fraunces, Space Grotesk, Space Mono, IBM
Plex, DM Sans, Plus Jakarta Sans, Outfit, Geist.

### Hierarchy

The ramp is exactly seven steps. Every `font-size` in the codebase is one of them; a size
that is not on this list is a bug, not a nuance.

- **Display** (Archivo 700, `clamp(2.2rem, 5vw, 3.5rem)`, 1.05, `-0.02em`): The name on the
  home page. One per site.
- **Page title** (Archivo 700, `2.25rem`, `-0.02em`): Each page's H1, sitting on its 2px
  oxide rule. Drops to 1.5rem below 768px.
- **Headline** (Archivo 600, `1.5rem`): Section H2 and modal titles.
- **Title** (Archivo 600, `1.1rem`): Card and entry H3, sidebar name.
- **Body** (Literata 400, `1rem` / 16px, 1.7): All prose. Measure capped at 68ch. 16px is
  the floor for prose; nothing below 14px carries a sentence.
- **Small** (Literata 400, `0.85rem`): Metadata, captions, contact rows, nav items.
- **Label** (Archivo 600, `0.75rem`, `0.1em`, uppercase): Legend text only — field labels,
  meta rows, stat captions, tags, footer. Never more than ~3 words.

**Numeric** is a treatment, not a step: Archivo 700 with
`font-variant-numeric: tabular-nums` on stats, GPA, dates, and any column of figures.
Tabular figures are non-negotiable in a table.

### Named Rules

**The Legend Rule.** Uppercase belongs to labels of three words or fewer. Any run of
uppercase longer than ~20 characters is a mistake — sentence case it.

**The Measure Rule.** Prose is capped at 68ch. A research page that runs edge to edge is
not dense, it is unread.

## Layout

A fixed 280px sidebar (260px below 960px, off-canvas below 768px) beside a content column
capped at 1100px. The content column reads as a datasheet page: hard left alignment, no
centered prose blocks, and section boundaries drawn by rules rather than by whitespace
alone.

Spacing rhythm is a 4px base — 4 / 8 / 16 / 28 / 48. More space above a heading than below
it, always: a heading belongs to what follows it. Sections separate by 48px and a rule;
items within a section by 16px. Grids use `auto-fit, minmax(280px, 1fr)` with a 1px gutter
rule where a table reading is wanted, and a 16px gap where the items are independent.

At ≤768px the sidebar becomes a drawer, the content column takes full width at 20px
gutters, and multi-column grids collapse to one. Nothing reflows into a card that was not
a card at desktop.

## Elevation & Depth

**This system has no shadow vocabulary.** Depth is tonal and linear: a panel is raised
because it is one value step lighter (light theme) or lighter-and-ruled (dark theme), and
bounded because it has a 1px rule. Nothing floats.

This is the deliberate opposite of the prior implementation, which paired a 1px hairline
border with a 24–48px shadow blur on every card — the pairing that reads as generated UI
precisely because it commits to neither a defined edge nor a real elevation.

The only exceptions, both genuinely detached from the page: the mobile sidebar drawer and
the modal, each of which uses a single neutral shadow with a real offset
(`0 16px 32px rgba(0,0,0,0.18)`) so it reads as a sheet lifted off the board. Never a
colored shadow. Never a zero-offset halo.

## Shapes

Hard geometry. `0px` is the default corner; `2px` is the maximum on interactive controls
and cards; `3px` exists only for the modal. Nothing is a pill, nothing is a circle except
the profile photograph, which is a photograph and keeps its 50% radius as a portrait
convention.

Rules are the primary form element. A 1px `rule` bounds panels and separates rows. A 2px
oxide rule, 32px wide, sits above each section heading — the annotation mark that opens a
block on a print. Tags are not chips: they are label-cased text between thin vertical
rules, not filled capsules.

## Components

### Buttons
- **Shape:** 2px radius (`{rounded.sm}`), 1px rule border.
- **Primary:** Oxide Red fill, Substrate Raised text, `11px 20px`, label typography.
- **Secondary:** transparent fill, Ink text, `rule` border.
- **Hover:** border and text shift to Oxide Red (secondary) or fill deepens to Oxide Red
  Deep (primary). No lift, no scale, no shadow change — a 120ms color transition only.
- **Focus:** 2px Oxide Red outline at 2px offset. Always visible, never removed.

### Tags
- **Style:** no fill, no radius. Ink Muted label type with a 1px `rule` left border and 8px
  of padding, sitting in a row like a parts list.
- **State:** hover inks the text Oxide Red. Nothing moves.

### Cards / Containers
- **Corner:** 2px. **Background:** Substrate Raised / Mask Raised. **Border:** 1px `rule`.
- **Shadow:** none, at rest or on hover.
- **Hover:** the border goes Oxide Red. That is the entire hover state.
- **Padding:** 24px.

### Navigation
- Archivo label type, sentence case, left-aligned, 1px `rule` dividers between items.
- **Active:** a 2px Oxide Red left border and Oxide Red text. No filled background.
- **Mobile:** off-canvas drawer from the left, single neutral shadow.

### Tables and stat rows
The signature component. Stats are a ruled row, not five floating cards: tabular Archivo
numerals above a Label caption, separated by 1px vertical rules, the whole row bounded top
and bottom. Numbers are Ink, not Oxide Red, unless the number *is* the annotation.

## Do's and Don'ts

### Do:
- **Do** set every border to 1px `rule` (`#C9CEC4` light / `#333A32` dark). One weight, one
  color, per the One-Weight Rule.
- **Do** use `font-variant-numeric: tabular-nums` on every figure, date, and stat.
- **Do** keep prose at 16px minimum and 68ch maximum.
- **Do** open each section with a 32px × 2px Oxide Red rule above the heading.
- **Do** give Hangul an explicitly chosen companion face, never a system fallback.
- **Do** draw icons as SVG in one stroke weight when an icon is genuinely needed.
- **Do** honor `prefers-reduced-motion` on every animated property.

### Don't:
- **Don't** use gradients anywhere — not in text (`background-clip: text`), not in buttons,
  not in progress bars, not as radial orbs or spotlights. The No-Blend Rule is absolute,
  and gradient text on a name or a metric is this category's single most recognizable tell.
- **Don't** use purple, violet, indigo, or cyan (`#6366f1`, `#a855f7`, `#818cf8`, `#c084fc`
  and their neighbors). This is the prior world and the category default; the palette above
  replaces it entirely.
- **Don't** pair a 1px border with a wide diffuse shadow, and never emit a zero-offset
  colored glow (`box-shadow: 0 0 Npx <accent>`) or a colored shadow on a dark ground.
- **Don't** use emoji as an icon system or inside headings, navigation labels, or buttons.
  They render differently per OS, screen readers announce them aloud mid-heading, and to a
  PI or a recruiter they read as unfinished. Use an SVG mark or nothing.
- **Don't** use glassmorphism, `backdrop-filter` blur as decoration, blurred color orbs,
  mouse-tracking spotlights, or radii of 16px and above.
- **Don't** scale, rotate, or tilt an element on hover — no `transform: scale()` on images,
  no card lift, no 3D tilt, no magnetic buttons. Hover changes color, nothing else.
- **Don't** use overshoot/bounce easing (`cubic-bezier(..., >1)`). Motion is
  `cubic-bezier(0.2, 0.7, 0.2, 1)` or simpler, and it exists to confirm a state change.
- **Don't** animate `width`, `height`, `top`, or `left`. Transition `transform` and
  `opacity` only.
- **Don't** put a kicker or eyebrow label above a heading. The heading carries itself.
- **Don't** stack a small rounded icon tile above a card heading — the universal generated
  feature-card shape.
- **Don't** set body copy in uppercase beyond a three-word label, and never below 14px.
