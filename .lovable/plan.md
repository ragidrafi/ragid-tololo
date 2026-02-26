

## Plan: Add Gallery Section with Infinite Carousel

### Overview
Add a new gallery section after the Projects section featuring an infinite-loop carousel with one large center image and smaller side images. Text captions will be fetched from the new Google Sheets tab (GID: 153140412).

### Steps

1. **Copy uploaded images to assets**
   - Move all 10 uploaded gallery images to `src/assets/gallery/`

2. **Add gallery sheet to data layer**
   - In `src/data/cms.ts`: Add `gallery` array with fallback data (number + text for each image)
   - In `src/hooks/useSheetData.ts`: Add gallery sheet URL with GID `153140412`, parser function, and include in returned data
   - In `src/contexts/SiteDataContext.tsx`: Type will flow automatically via `SiteData`

3. **Create `GallerySection.tsx` component**
   - Uses Embla carousel with `loop: true` option
   - Layout: center slide is large, adjacent slides are smaller (CSS scale/opacity transitions)
   - Left/right navigation arrows
   - Each slide shows the image with its text caption from the sheet
   - RTL-friendly
   - Includes `SectionWatermark` with "גלריה"

4. **Add to Index page**
   - Import `GallerySection` and place it between `ProjectsSection` and `ProcessSection`

### Technical Details

- **Sheet URL**: `https://docs.google.com/spreadsheets/d/e/2PACX-1vRiZFtz9pzP50bTgbxugz5yKtncFPLrP5x4gFnMWTLf4_YrH6qdy5vpypJNI6ntOkZZ1Px6g3Ql7BSH/pub?gid=153140412&single=true&output=csv` with `hasHeaders: true`
- **Sheet columns**: Column A = number (order), Column B = text (caption)
- **Carousel**: Embla with `loop: true`, `align: 'center'`, showing ~3 slides with center one scaled up
- **Image mapping**: Images mapped by order number from sheet to local assets
- **Styling**: Center slide `scale-100 opacity-100`, side slides `scale-75 opacity-50`, smooth CSS transitions

