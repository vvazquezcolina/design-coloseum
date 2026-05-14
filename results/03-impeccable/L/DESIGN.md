# DESIGN.md — VoltSwap

## Color strategy

**Committed**, leaning toward a workshop-instrument feel. Graphite greys carry the surface (the metal of an engine bay, a workbench), and a single electric teal-cyan accent does the work of a current: CTAs, focus, the "after" state, the live numbers. The accent stays under ~12% of visual weight so it reads as charge, not decoration.

Theme: **dark**. Scene sentence: a 44-year-old engineer stands in the lit bay of a clean workshop at dusk, the classic car up on the lift, an instrument panel glowing teal beside it. Dark graphite forces itself; this is a machine shop after hours, not a daytime showroom.

### Tokens (OKLCH)

Hue family: graphite tinted toward the teal accent (hue ~195).

- `--ink`: oklch(97% 0.008 195) — primary text on dark
- `--ash`: oklch(72% 0.012 195) — secondary text, captions
- `--steel`: oklch(52% 0.014 195) — muted labels, hairlines on dark
- `--surface-0`: oklch(18% 0.012 195) — page base
- `--surface-1`: oklch(22% 0.014 195) — raised panels
- `--surface-2`: oklch(27% 0.016 195) — cards, inputs
- `--line`: oklch(34% 0.016 195) — borders
- `--accent`: oklch(78% 0.15 195) — electric teal-cyan, CTAs, focus, current
- `--accent-deep`: oklch(62% 0.14 198) — accent hover / pressed
- `--accent-ink`: oklch(20% 0.03 200) — text on accent fills
- `--warm`: oklch(80% 0.09 75) — a sparing amber for the "before" / combustion side, used only in the gallery toggle and one or two spots so it isn't a second brand color

Light-on-dark compensation: body line-height +0.06, body weight 400→420 via variable font, slight letter-spacing on small text.

## Typography

Two families, contrast on structure + proportion:

- **Headings / display:** `Archivo` (variable, Google Fonts). A grotesque with a slightly compressed, mechanical cut. Tight tracking, heavy weights for display. Reads like stamped metal signage, not a tech-startup geometric sans. Not on the reflex-reject list.
- **Body / UI:** `Hanken Grotesk` (variable, Google Fonts). Humanist warmth keeps the "cercano" side; very readable at small sizes on dark. Not on the reflex-reject list.
- **Numerals / specs:** `Spline Sans Mono` for kWh, km, prices, step numbers, the dashboard readouts. Monospace here is *literal*, not costume: these are instrument readings. Tabular by nature.

Scale: fluid `clamp()` for display, fixed rem for body. Ratio ~1.28.

## Layout

- Mobile-first. A visible structural grid as voice: thin hairlines, spec-sheet alignment, section numbers (`01 — 05`). The workshop runs on measurements; the layout shows its measurements.
- Asymmetric hero: oversized headline left-anchored, a glowing instrument-cluster SVG to the side.
- Process: a vertical numbered rail on mobile, a horizontal stepped track on desktop. Not identical cards.
- Packages: 3 columns, the middle (Range) elevated as recommended, differentiated by an SVG battery-fill bar, not by being a bigger box.
- Gallery: before/after with an interactive slider per case.
- 4pt spacing scale, fluid section padding via `clamp()`.

## Elevation & motion

- Depth from surface lightness, not heavy shadows. Hairline borders + subtle inner glow on the accent.
- Motion: one orchestrated load with staggered reveals; scroll-triggered reveals via IntersectionObserver. Hover: lift + accent hairline ignite. Number readouts count up on first view. Ease-out-quart/expo. Full `prefers-reduced-motion` path.

## Imagery

Greenfield, no local assets. Use:
- Inline SVG for the instrument cluster, battery bars, process diagram, logo mark.
- Unsplash for the before/after gallery cars and the workshop footer band, verified IDs only; if unverifiable, fall back to crafted CSS/SVG car silhouettes rather than broken images.
