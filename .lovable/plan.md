

# Use InfiniteSlider Component for Clients Marquee

## Overview
Replace the broken CSS-based marquee with the `InfiniteSlider` component from motion-primitives, which handles seamless infinite looping properly using framer-motion.

## Changes

### 1. Install `react-use-measure`
- `framer-motion` is already installed; only `react-use-measure` needs to be added.

### 2. Create `src/components/ui/infinite-slider.tsx`
- Add the `InfiniteSlider` component as provided, with the JSX return fixed (the pasted code had empty tags -- will use the correct `motion.div` wrapper structure).

### 3. Update `src/components/ClientsSection.tsx`
- Remove the custom CSS marquee div structure.
- Use `InfiniteSlider` with `gap={40}`, `duration={25}`, and `reverse` (for RTL feel).
- Render each logo as a child of `InfiniteSlider`.
- Keep the fade-edge gradients and watermark.

