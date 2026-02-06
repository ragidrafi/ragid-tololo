

# Fix Seamless Logo Marquee

## Problem
The marquee is inside `container-narrow`, which constrains its width. The single `w-max` div with doubled logos doesn't fill the screen edge-to-edge, so when the animation reaches the end, there's a visible gap before the loop resets.

## Solution
Use **two separate identical flex rows** placed side-by-side inside an animation wrapper. Each row contains all 8 logos. The animation translates the wrapper by exactly `-50%`, so when the first row scrolls off, the second row takes its place seamlessly. Also break the marquee out of the narrow container so it spans the full viewport.

## Technical Changes

### `src/components/ClientsSection.tsx`
- Remove the `container-narrow` wrapper (or keep it only for the watermark) so the marquee spans full width
- Replace the single `<div className="flex w-max animate-marquee ...">` with a structure like:

```text
[outer overflow-hidden]
  [animation wrapper: flex, animate-marquee]
    [row 1: flex, min-w-full, justify-around, gap-20]
      ...8 logos
    [row 2: flex, min-w-full, justify-around, gap-20]  (identical copy)
      ...8 logos
```

- Each row uses `min-w-full` and `justify-around` so logos spread evenly across the full width
- The animation wrapper uses `flex` with no gap, so the two rows sit flush
- `animate-marquee` translates `-50%` which is exactly one row's width

### `tailwind.config.ts`
- No changes needed -- the existing `marquee` keyframe (`translateX(0)` to `translateX(-50%)`) is correct for this approach

This guarantees zero empty space because each row independently fills the entire viewport width.
