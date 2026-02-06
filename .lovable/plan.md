

# Fix InfiniteSlider Disappearing/Flickering Issue

## Problem
Two issues cause the logos to disappear and reappear:

1. **No guard for zero width**: When the component first mounts, `useMeasure` reports `width = 0`. The animation starts with `contentSize = 0 + gap`, producing nonsensical motion. When the real width arrives, the effect re-runs and causes a visual jump.

2. **`repeatType: 'loop'` behavior**: Framer Motion's `repeatType: 'loop'` can cause brief visual glitches at the reset point. The `onRepeat` callback fires but the visual transition isn't always frame-perfect.

## Solution

### `src/components/ui/infinite-slider.tsx`

1. **Add early return when size is 0**: Skip animation until `useMeasure` reports actual dimensions.

2. **Remove `repeatType` and manually loop**: Instead of relying on framer-motion's repeat, animate once from `from` to `to`, then on `onComplete` instantly set position back to `from` and increment a `key` to restart. This guarantees a frame-perfect snap.

Updated `useEffect` logic:
```
if (size === 0) return; // wait for measurement

const contentSize = size + gap;
const from = reverse ? -contentSize : 0;
const to = reverse ? 0 : -contentSize;

controls = animate(translation, [from, to], {
  ease: 'linear',
  duration: currentDuration,
  onComplete: () => {
    translation.set(from);   // instant snap
    setKey(prev => prev + 1); // re-trigger effect to loop
  },
});
```

This removes `repeat: Infinity` and `repeatType: 'loop'` entirely, replacing them with a manual loop via `onComplete` + `setKey`. The snap is truly instant because we just set the motion value directly before re-animating.

The transitioning (hover) logic stays the same but also benefits from the size guard.

