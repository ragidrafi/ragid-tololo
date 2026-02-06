

# Services Section Redesign: Center Icons with Expanding Side Cards

## Concept
Replace the current tabbed layout with a vertical column of 3 icons centered in the section. When an icon is clicked, two cards expand horizontally from it -- one card to the right with the title and description, and one card to the left with the details/bullet points. Only one service is open at a time (clicking another closes the previous one).

## Layout Structure

```text
+---------------------------------------------+
|              Section Watermark               |
|                                              |
|   [details card]  (icon 1)  [title card]     |
|                                              |
|                   (icon 2)                   |
|                                              |
|                   (icon 3)                   |
|                                              |
+---------------------------------------------+
```

When icon 2 is clicked:

```text
+---------------------------------------------+
|                                              |
|                   (icon 1)                   |
|                                              |
|   [details card]  (icon 2)  [title card]     |
|                                              |
|                   (icon 3)                   |
|                                              |
+---------------------------------------------+
```

## Technical Details

### File: `src/components/ServicesSection.tsx`

1. **State**: Keep `activeTab` state but allow `null` (no service open). Clicking an already-active icon closes it.

2. **Layout**:
   - Use `container-narrow` with a flex column of 3 rows
   - Each row is a horizontal flex: `[left card] [icon button] [right card]`
   - The icon sits in the center (`flex-shrink-0`, fixed width)
   - Left card = details (bullet points), Right card = title + description (following RTL, so visually: details on left, title on right)
   - A vertical line/connector runs between the icons

3. **Animation**:
   - Use Framer Motion `AnimatePresence` + `motion.div` for the cards
   - Cards animate with `initial={{ opacity: 0, scaleX: 0 }}` and `animate={{ opacity: 1, scaleX: 1 }}`
   - `transformOrigin` set to the icon side so cards appear to grow outward from the icon

4. **Icon buttons**:
   - Circular buttons with the service icon
   - Active state: primary color background
   - Inactive state: subtle border, muted background
   - Vertical connecting line between icons using a thin border/divider

5. **Cards styling**:
   - Rounded corners, `bg-card/40 backdrop-blur-sm border border-white/10`
   - Each card takes up to `w-[45%]` of the row width
   - Title card: service title (bold) + description paragraph
   - Details card: bullet-point list from `details` array

6. **Mobile**: Stack vertically -- icon on top, then title card, then details card below (accordion-style collapse)

### Data source
No changes to `src/data/cms.ts` -- continues using existing `siteData.services` array with `icon`, `title`, `description`, and `details`.

