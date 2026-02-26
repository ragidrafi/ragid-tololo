

## Plan: Replace Gallery with Simple Carousel + Thumbnails

The `wa-carousel` is a Web Awesome web component and can't be used in React directly. I'll build an equivalent React carousel with the same behavior: single slide view, prev/next arrows, looping, and a thumbnail strip below.

### Steps

1. **Rewrite `src/components/ui/thumbnail-carousel.tsx`**
   - Remove Framer Motion drag-based approach (causing issues)
   - Simple state-based carousel: CSS `transform: translateX()` with CSS transitions
   - Loop support (wraps from last→first and first→last)
   - Navigation arrows (ChevronLeft/ChevronRight)
   - Thumbnail strip below: 64×64px thumbnails, active one has opacity 1, others 0.3, click to navigate
   - Accepts `items` prop as before

2. **Keep `src/components/GallerySection.tsx` as-is**
   - Already correctly maps local images to items and passes to ThumbnailCarousel
   - Watermark "גלריה" stays

### Technical Details
- Pure CSS transitions (`transition: transform 500ms ease`) instead of Framer Motion for reliability
- 3:2 aspect ratio for main image area
- Thumbnail strip uses `scrollIntoView` for active thumbnail centering

