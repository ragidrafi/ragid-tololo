

# Process Section Redesign: 3-2 Timeline with U-Turn Path

## Overview
Redesign the "שיטת עבודה" section to match the reference image: circular icons connected by a continuous path with a U-turn between two rows. Split the current 4 steps into 5: תכנון, הקמה, הרצה, תפעול, אחזקה.

## Layout (Desktop)

```text
Row 1 (RTL):  [Step 1: תכנון] ———— [Step 2: הקמה] ———— [Step 3: הרצה]
                                                              |
                                              U-turn curve down |
                                                              |
Row 2 (LTR):              [Step 4: תפעול] ———————— [Step 5: אחזקה]
```

- Top row: 3 items, connected by horizontal lines, flowing right-to-left
- U-turn: A curved path from Step 3 (bottom-left of row 1) down and around to Step 4 (bottom-right of row 2)
- Bottom row: 2 items, connected by a horizontal line, flowing left-to-right

## 5 Steps Data
| Step | Title | Icon | Subtitle |
|------|-------|------|----------|
| 1 | תכנון | Compass | Design & Engineering |
| 2 | הקמה | HardHat | Construction Management |
| 3 | הרצה | FlaskConical | Commissioning |
| 4 | תפעול | Settings | Operations |
| 5 | אחזקה | Wrench | Maintenance |

## Step Design (matching reference)
- Large circular icon container (`w-20 h-20`) with `border-2 border-secondary/40` and `bg-background`
- Icon inside in green (`text-primary`, `size={36}`)
- Title below in bold (`text-lg font-bold text-foreground`)
- Subtitle in green (`text-xs text-primary`)
- Description text in muted white (`text-sm text-foreground/65`)
- Hover: border brightens, subtle glow shadow

## Connected Path (SVG)
- An absolutely positioned SVG overlay spanning the full grid area
- Solid line in `#52AC42` (primary green), `stroke-width: 2-3`
- Path segments:
  1. Horizontal line connecting Step 1 -> Step 2 -> Step 3 across the top row (through circle centers)
  2. U-turn curve from Step 3 downward, curving around to Step 4 (similar to the blue curve in the reference)
  3. Horizontal line from Step 4 -> Step 5 across the bottom row
- Hidden on mobile (`hidden md:block`)

## Mobile Layout
- Single column, steps stacked vertically (1 through 5)
- Simple vertical dashed line connectors between each step
- SVG path hidden

## Watermark
- Keep `SectionWatermark` component with "שיטת עבודה" text

## Technical Changes

### File: `src/components/ProcessSection.tsx`
- Add `Wrench` to lucide-react imports
- Split step 4 ("תפעול ואחזקה") into two separate steps: "תפעול" (Operations) and "אחזקה" (Maintenance)
- Replace the 4-column grid with a custom layout:
  - Desktop: First row with 3 items (`grid-cols-3`), second row with 2 items centered
  - Use `useRef` + `useEffect` or hardcoded relative positions for the SVG path
- Add an SVG overlay with:
  - Horizontal lines through row 1 icons
  - A curved U-turn path (using SVG `path` with bezier curves) from the last icon in row 1 down to the first icon in row 2
  - Horizontal line through row 2 icons
- Style each step as a vertical stack: circle icon, title, subtitle, description
- Mobile: single column with vertical connectors between steps

### File: `src/data/cms.ts`
- Update `process` array to have 5 items instead of 4, splitting the last step

