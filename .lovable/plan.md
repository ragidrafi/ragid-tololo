

# Replace Project Images with Hover-Effect Feature Cards

## What Changes

The current Projects section displays each project as an image + text side-by-side layout. This will be replaced with a **grid of hover-effect cards** (inspired by the provided component), using the existing project data from the CMS. No images will be used -- instead, each project will be a card with an icon, title, stat, and description, with a subtle hover gradient effect.

## Layout

- A grid of cards (responsive: 1 column on mobile, 3 columns on desktop) replacing the current alternating image layout
- Each card shows: a Lucide icon, project title, stat + stat label, and description
- Cards have a top/bottom border gradient on hover (using the site's primary green color)
- Full RTL support (already set globally via `html { direction: rtl }`)

## Technical Details

### 1. Rewrite `src/components/ProjectsSection.tsx`
- Remove all image imports (`project-1.jpg`, `project-2.jpg`, `project-3.jpg`) and the `images` map
- Create a `Feature` sub-component adapted from the provided pattern:
  - Grid layout with border lines between cards (top border for top row, bottom border for bottom row)
  - Hover effect: gradient overlay from primary color fading to transparent
  - Display icon, title, stat/statLabel, and description
- Use **Lucide icons** instead of `@tabler/icons-react` (no new dependency needed):
  - Project 1 (bridge): `Construction` icon
  - Project 2 (office tower): `Building2` icon
  - Project 3 (water facility): `Droplets` icon
- Add an `icon` field to each project in `cms.ts` (e.g., `"Construction"`, `"Building2"`, `"Droplets"`)

### 2. Update `src/data/cms.ts`
- Add an `icon` string field to each project entry (replacing `imageKey`)
- Optionally keep `imageKey` for backward compatibility but it won't be used

### 3. Card Styling
- Background: transparent with subtle border (`border-white/10`)
- Hover gradient: primary green color at ~10% opacity fading downward
- Text colors: title in `text-secondary`, stat in `text-primary`, description in `text-foreground/80`
- Border decorations between cards using absolute-positioned gradient divs
- `pointer-events` and `group-hover` for smooth transitions

### 4. No New Dependencies
- Using `lucide-react` (already installed) instead of `@tabler/icons-react`
- All styling via existing Tailwind classes

