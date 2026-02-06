

# About Section Redesign: 4 Parts with New Image

## Overview
Restructure the About section from 3 rows to 4 rows, with updated text content organized into titled sections, and add the new uploaded image as `about-4`.

## Changes

### 1. Copy new image
Save `user-uploads://גגגגג-2.jpg` to `src/assets/about-4.png`.

### 2. Update `src/data/cms.ts`
Update the `about.sections` array to match the 4 new text blocks provided by the user.

### 3. Update `src/components/AboutSection.tsx`
Restructure the `rows` array into 4 entries with titles:

| Row | Side   | Image   | Title              | Content |
|-----|--------|---------|--------------------|---------|
| 1   | image right | about-1 (tall/long) | אודות רגיד | 2 long paragraphs (longest text) |
| 2   | image left  | about-4 (new)       | המשימה שלנו | 2 short paragraphs |
| 3   | image right | about-2             | חזית החדשנות הטכנולוגית | 1 paragraph |
| 4   | image left  | about-3             | מטרייה אחת | 1 paragraph |

- Add a `title` field to each row object
- Render the title as a bold heading (`text-2xl font-bold text-secondary mb-4`) above the paragraphs
- Keep the alternating image-left/image-right pattern
- First row pairs with `about-1` (the longer/taller image) since it has the most text
- Remaining rows use the smaller images

### Technical Details
- Import `about4` from `@/assets/about-4.png`
- Each row data object: `{ imageLeft, image, title, paragraphs[] }`
- Existing styling (3D shadows, hover lift, rounded corners) stays unchanged
- CMS data in `cms.ts` updated to match

