# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary visitors are **industry recruiters** (AI/CV engineering hiring managers screening
for internships and full-time roles) and **research lab PIs** (faculty and lab leads
considering Jihoon for an internship, RA position, or collaboration).

Both arrive already holding a decision — "is this person worth a conversation?" — and both
skim before they read. The PI evaluates research direction and depth; the recruiter
evaluates shipped, working systems. The site must serve both without forcing either to
dig.

## Product Purpose

A personal portfolio site for **Jihoon Jeong**, Bachelor student in AI Computer
Engineering at Kyonggi University, working in computer vision, image segmentation, and
efficient deep learning.

Success is not a click: it is that a visitor **reads the research direction** and
**browses the projects**, and comes away understanding both the technical depth and the
concrete built work. Contact and CV download are available, but they are outcomes of that
understanding, not the goal the site optimizes for.

## Positioning

The stated through-line, which the site's own copy commits to: AI systems that are *both*
theoretically grounded *and* practically deployable — satellite-driven forecasting through
to real-time vision in intelligent environments. The differentiator is the pairing, not
either half. Research pages must show the thinking; project pages must show the thing
running.

## Operating Context

- Visitors reach the site from a CV, a LinkedIn/GitHub link, an email signature, or a
  recruiter's search — typically alongside other candidates' pages, in a short skim.
- The audience is split across Korean and English readers; language is a real access
  requirement, not a nicety.
- Deployed as a GitHub Pages user site at https://jeehun3020.github.io from `main`.

## Capabilities and Constraints

**Fixed (confirmed by the user):**

- **No build step.** Plain HTML / CSS / vanilla JS, deployed by pushing to `main` on
  GitHub Pages. No bundler, no framework, no package manager.
- **Full KO/EN parity.** Every piece of user-facing copy carries a `data-ko` attribute;
  `js/i18n.js` swaps `innerHTML` between the two. The toggle must keep working on every
  page and every new element. Proper nouns and certification names deliberately have no
  `data-ko` and stay as-is in both languages.

**Not fixed:** the current seven-page structure (Home, Projects, Research, Awards,
Programs, Certifications, Publications) is open to restructuring if the design calls for
it. The user explicitly did not lock it.

**Existing mechanics:** auto dark/light theme with manual toggle persisted in
`localStorage`; language persisted in `localStorage`, defaulting to browser language;
responsive sidebar that collapses on mobile; modal detail views; lightbox image zoom;
scroll reveal; typewriter rotation driven by `data-typewriter` / `data-ko-typewriter`.

## Brand Commitments

- Name, identity, and voice are the person's own: first-person, plain, unhedged. The site
  says "I genuinely enjoy shipping things," not "passionate about delivering solutions."
- Existing assets: `assets/profile.jpg` (used as both photo and favicon),
  `assets/Jihoon_Jeong_CV.pdf`.
- Current type is Inter via Google Fonts. Not stated as binding — a visual decision, not a
  product fact.

## Evidence on Hand

Real, verifiable material already in the repository:

- **Publications** — one journal article (DR-SCA, above) and three conference papers: facial/behavioral concentration analysis in
  intelligent study rooms; elderly fall and hazard detection; multimodal AI consistency for
  content verification.
- **Projects** with screenshots in `assets/projects/` — TrendDo, AIRBENDER | Navi, FocusAI,
  Distribot, FocusDrive.
- **Awards** with images in `assets/awards/` — KIIT best paper 2025, NASA Space Apps 2025,
  SW festival 2025, SW startup award 2025, capstone industry 2025, capstone AI hackathon
  2025, MSIT scholarship.
- **Programs** with photos/certificates in `assets/programs/` — Qualcomm Institute AI
  Entrepreneurship, CES 2025 Emerging Software Technology, Singapore Summer Secure Coding,
  Naver Boostcourse AI Basic Coaching.
- **Certifications** — Google Cloud Professional ML Engineer, CSTS, TOPCIT, ADsP, SQLD,
  MOS Master.
- **Academic record** — Kyonggi University, AI Computer Engineering, Mar. 2021 – present,
  GPA 4.49 / 4.5.

**Journal article (published):** DR-SCA, *Electronics* 2026, 15(19), 4396 (doi:10.3390/electronics15194396), first author. Its figures in `assets/research/` are CC BY 4.0 and must keep their attribution. Report its numbers with their protocol (ten seeds, trained from scratch) and its stated limits.

**Do not fabricate:** testimonials, endorsements, citation counts, benchmark numbers,
employer names, or any award, publication, or credential not listed above.

## Product Principles

1. **Depth is the product.** Two audiences both came for substance — one for research
   thinking, one for shipped systems. Anything that makes either harder to find is a cost.
2. **Every claim is checkable.** Only real awards, real papers, real projects, real
   numbers. Absence of evidence is stated, never filled in.
3. **Korean is not a translation layer.** A KO reader gets the same site, not a degraded
   one. New copy ships bilingual or it does not ship.
4. **Zero-build is a feature.** The site must stay editable by opening a file, and
   deployable by pushing. Complexity that requires tooling is a regression.
5. **Report results with their limits.** A number appears with its protocol, and with what it does not show.

## Accessibility & Inclusion

No product-specific standard was established with the user beyond bilingual KO/EN
delivery. Baseline web accessibility applies as ordinary craft.
