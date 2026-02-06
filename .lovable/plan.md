

# Process Section Redesign: 2x2 Connected Timeline

## Overview
Redesign the Work Method section from a horizontal 4-column layout into a 2x2 grid with connected arrow paths between cards, following RTL flow.

## Layout (Desktop)

```text
+------------------+     <----     +------------------+
|     Step 2       |               |     Step 1       |
|   (top-left)     |               |   (top-right)    |
+------------------+               +------------------+
        |
        | (U-turn curve down)
        v
+------------------+               +------------------+
|     Step 3       |     ---->     |     Step 4       |
|  (bottom-left)   |               |  (bottom-right)  |
+------------------+               +------------------+
```

Flow: Step 1 (top-right) -> Step 2 (top-left) -> Step 3 (bottom-left) -> Step 4 (bottom-right)

## Card Design
- Rounded corners: `rounded-3xl` (24px, matches site `--radius`)
- Border: `border border-secondary/40` (#0184C4 at 40% opacity)
- Background: `bg-background/80 backdrop-blur-sm` (semi-transparent navy)
- Shadow: `shadow-floating` (existing floating shadow style)
- Padding: generous `p-8`
- Content order inside each card:
  - Green icon (larger, `w-12 h-12` or `size={40}`)
  - Step number badge (top-right corner of card)
  - Title in green (`text-xl font-bold text-primary`)
  - Subtitle in muted (`text-sm text-muted-foreground`)
  - Description in white (`text-base text-foreground/75`)

## Connected Path (SVG Arrows)
- Use an inline SVG overlay positioned absolutely over the grid
- Draw paths in `#52AC42` (primary green), `stroke-width: 2`, with optional dashed style
- Path segments:
  1. Horizontal arrow from Card 1 (left edge) to Card 2 (right edge) across the top row
  2. Vertical U-turn: from Card 2 downward, curving to Card 3 (left column)
  3. Horizontal arrow from Card 3 (right edge) to Card 4 (left edge) across the bottom row
- Small arrowhead markers at each endpoint
- Hidden on mobile (`hidden md:block`)

## Grid Arrangement
- Desktop: `grid-cols-2` with gap
- The grid renders 4 cards; order is adjusted so RTL flow places Step 1 top-right, Step 2 top-left, Step 3 bottom-left (using `md:col-start-1`), Step 4 bottom-right
- Since the page is RTL, `grid-cols-2` naturally places the first item on the right. So render order: [Step1, Step2, Step3, Step4] -- but Step 3 and Step 4 need to swap for the U-turn pattern. Actual render: [Step1, Step2, Step4, Step3] with Step3 using `md:order-4` and Step4 using `md:order-3`, OR render [Step1, Step2, Step3, Step4] and use CSS order to swap bottom row in RTL context.

## Watermark
- Keep `SectionWatermark` with reduced opacity (already at 8%, close enough to requested 3% -- will adjust to `text-foreground/[0.03]` in the watermark or via a prop)

## Mobile
- Single column: `grid-cols-1`
- Cards stack vertically: Step 1 -> 2 -> 3 -> 4
- Straight vertical dashed line between cards (simple `div` connectors with green color)
- SVG path hidden on mobile

## Technical Changes

### File: `src/components/ProcessSection.tsx`
- Replace the current 4-column grid with a 2-column grid
- Add an SVG overlay for the connected path with arrow markers
- Enlarge icons and text sizes
- Restyle each step as a floating card with border, shadow, and rounded corners
- Add mobile vertical connectors between cards
- Adjust grid item order for the RTL U-turn flow (bottom row: Step3 left, Step4 right)

### File: `src/components/SectionWatermark.tsx`
- Add optional `opacity` prop to allow customizing watermark opacity (default stays at 8%, pass 3% from ProcessSection)

