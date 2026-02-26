

## Plan: Replace Gallery with Framer Motion Thumbnail Carousel

### Problem
The current Embla-based gallery only shows 3 images. The user wants to replace it with a Luxe UI-style thumbnail carousel using Framer Motion.

### Approach
The pasted component code had its JSX stripped during copy-paste. I will reconstruct the full thumbnail carousel component based on the visible logic (drag gestures, thumbnail strip, motion values) and integrate it with the existing gallery data and local images.

### Steps

1. **Create `src/components/ui/thumbnail-carousel.tsx`**
   - Framer Motion-based carousel with drag support
   - Main image area with swipe/drag navigation
   - Thumbnail strip at the bottom with active-state highlighting (expanded width for selected, collapsed for others)
   - Previous/Next arrow buttons
   - Image counter overlay
   - Component accepts `items` prop (array of `{id, url, title}`) instead of hardcoded data

2. **Rewrite `src/components/GallerySection.tsx`**
   - Remove all Embla carousel code
   - Import the new thumbnail carousel component
   - Map gallery data + local image imports into the items format
   - Keep the `SectionWatermark` with "גלריה"

### Technical Details
- `framer-motion` is already installed
- Uses `useMotionValue` + `animate` for smooth spring transitions
- Drag with velocity-based and offset-based index changes
- Thumbnail strip auto-scrolls to center the active thumbnail
- Local images mapped via the existing `imageMap` pattern

