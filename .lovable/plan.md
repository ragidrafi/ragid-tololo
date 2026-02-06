

# Fix Seamless Logo Marquee Loop

## Problem
The marquee animation translates by `-50%` of the total track width, but the logos are tripled (3 copies). This means it scrolls past one-and-a-half sets of logos before jumping back, creating a visible empty gap.

## Solution
Use **two copies** of the logos (not three) and keep the animation at `-50%`. This way, when the first set scrolls fully off-screen, the second set is exactly where the first one started -- creating a perfectly seamless loop with no gaps.

## Technical Changes

### 1. `src/components/ClientsSection.tsx`
- Change `[...logos, ...logos, ...logos]` back to `[...logos, ...logos]` (two copies only)
- The `-50%` translation in the animation will now correctly scroll exactly one full set before resetting

### 2. `tailwind.config.ts`
- Keep the marquee animation as-is: `translateX(0)` to `translateX(-50%)` -- this is correct for a doubled track

That's the only change needed. Two copies + 50% translation = seamless loop with no empty space.
