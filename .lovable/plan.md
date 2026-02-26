

## Fix: Gallery Carousel Images Not Showing

### Root Cause
The current approach uses a wide flex container with `translateX` to slide between images. The child divs with percentage-based widths inside a percentage-based flex container aren't getting proper dimensions, causing slides 2-10 to render with 0 height/width.

### Solution
Replace the sliding flex approach with a simpler absolute-positioning strategy where only the active slide is visible. This eliminates the complex width calculations that are failing.

### Changes

**`src/components/ui/thumbnail-carousel.tsx`**
- Replace the flex+translateX main slide area with stacked absolutely-positioned slides
- Only the active slide gets `opacity-100` and `z-index: 1`, others get `opacity-0`
- Add a CSS fade transition between slides (300ms)
- Keep the thumbnail strip, arrows, and counter exactly as-is
- Keep the same props interface (`items: CarouselItem[]`)

