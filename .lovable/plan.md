

# Morphing Card Stack for Projects Section

## What Changes

Replace the current flat grid of project cards with an interactive **morphing card stack** component that supports three layout modes (stack, grid, list). The project data stays CMS-driven from `src/data/cms.ts`. Cards will be slightly larger than the reference component.

## New Dependency

- **framer-motion** -- required for the animation/layout transitions and drag gestures

## Technical Details

### 1. Install `framer-motion`
Add `framer-motion` as a dependency.

### 2. Create `src/components/ui/morphing-card-stack.tsx`
Adapted from the provided component with these adjustments:
- Keep all the core logic: `LayoutMode` ("stack" | "grid" | "list"), drag-to-swipe in stack mode, layout toggle buttons, dot indicators
- **RTL support**: Reverse the swipe direction logic (drag left = previous, drag right = next) since the page is RTL
- **Larger sizing**: Increase card dimensions from `w-56 h-48` to `w-72 h-56` in stack mode; increase the stack container from `h-64 w-64` to `h-72 w-72`
- Style cards with dark theme colors consistent with the site (`bg-card` maps to the dark background, `border-border` for subtle borders, `text-primary` for accent)

### 3. Update `src/components/ProjectsSection.tsx`
- Import and use the new `MorphingCardStack` component (named export `Component`)
- Map `siteData.projects` into the `CardData[]` format:
  - `id`: index-based string
  - `title`: project title
  - `description`: combine stat + statLabel + description (e.g., "800 MW -- צוות קבלה והרצה")
  - `icon`: render the corresponding Lucide icon from `iconMap`
- Pass the mapped cards array to the component with `defaultLayout="grid"` (so all 7 projects are visible by default)
- Keep the `SectionWatermark` and section wrapper as-is
- Remove the old `Feature` sub-component

### 4. Grid layout adjustment
In grid mode, change from `grid-cols-2` to `grid-cols-2 md:grid-cols-3 lg:grid-cols-4` so the 7 projects spread nicely on larger screens. Cards in grid mode will have `aspect-auto` instead of `aspect-square` for better content fit.

### 5. Layout toggle styling
Position the layout toggle buttons in the top-left of the section (RTL = visually top-right) with the site's primary green as the active indicator color.

