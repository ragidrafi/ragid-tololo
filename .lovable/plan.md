

# Fix InfiniteSlider for Seamless Looping

## Overview
Update the `InfiniteSlider` component to use 3 copies of children and correct translation math, ensuring a perfectly seamless loop with no gaps.

## Technical Changes

### `src/components/ui/infinite-slider.tsx`

**1. Measure a single set of children**
- Wrap the first copy of children in a measured div (with the `ref` from `useMeasure`)
- The other two copies are identical but unmeasured

**2. Triple the children**
- Render `{children}` three times, each inside its own flex container with the correct gap

**3. Fix translation math**
- `contentSize = measuredWidth + gap` (width of one set + one gap)
- If `reverse` is false: animate from `0` to `-contentSize`
- If `reverse` is true: animate from `-contentSize` to `0`
- On repeat, snap instantly back to `from`

**4. Updated JSX structure:**
```text
<motion.div overflow-hidden>
  <motion.div flex w-max style={{ x: translation, gap }}>
    <div ref={ref} flex shrink-0 style={{ gap }}>
      {children}
    </div>
    <div flex shrink-0 style={{ gap }}>
      {children}
    </div>
    <div flex shrink-0 style={{ gap }}>
      {children}
    </div>
  </motion.div>
</motion.div>
```

The `ref` only measures one set. The animation translates exactly one set's width + gap, then resets instantly. Three copies ensure no visible gap even on ultra-wide screens.

### `src/components/ClientsSection.tsx`
- No changes needed -- already uses `<InfiniteSlider>` correctly.

