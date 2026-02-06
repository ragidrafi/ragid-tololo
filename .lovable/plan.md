

# Use Video as Hero Background

## Problem
The animated `.webp` file appears as a still image. The user has provided an `.mp4` video to use instead.

## Solution

### 1. Copy the video to `public/videos/hero-bg.mp4`
Videos should go in the `public` folder since they are best served as static assets (not bundled by Vite).

### 2. Update `src/components/HeroSection.tsx`
- Replace the `<img>` tag with a `<video>` tag
- Configure the video for background use: `autoPlay`, `muted`, `loop`, `playsInline`
- Remove the old `heroBg` import since the video is referenced from `public/`

```tsx
<video
  src="/videos/hero-bg.mp4"
  autoPlay
  muted
  loop
  playsInline
  className="w-full h-full object-cover"
/>
```

The dark overlay (`bg-background/80`) stays the same to keep white text readable.

