
# Google Sheets CMS Integration

## Overview
Connect 6 published Google Sheet CSV tabs to the website so content updates in the sheet automatically appear on the site. The existing static data in `cms.ts` will serve as fallback if fetching fails.

## New Files to Create

### 1. `src/lib/sheets.ts` -- CSV fetcher and parser
- A `fetchCSV(url)` function that fetches a published CSV URL and parses it into an array of row objects (using the first row as column headers)
- Handles CSV quirks: quoted fields, commas inside quotes, escaped quotes
- Trims whitespace from values

### 2. `src/hooks/useSheetData.ts` -- React hook for live data
- Uses `@tanstack/react-query` (already installed) to fetch all 6 tabs in parallel
- Stores the 6 published CSV URLs as constants
- Parses each tab into the matching `siteData` shape:
  - **hero**: Key-value rows (column A = key, column B = value) mapped to `{ titleEn1, titleEn2, titleHe1, titleHe2, body }`
  - **services**: Each row becomes a service object; `detail1`, `detail2`, `detail3` columns are collected into a `details[]` array (empty values filtered out)
  - **projects**: Direct column-to-field mapping; `stat` and `statLabel` kept as strings
  - **process**: Direct mapping; `step` parsed as number
  - **about**: Each row becomes a section; `paragraph1`, `paragraph2`, `paragraph3` collected into a `paragraphs[]` array (empty values filtered out)
  - **footer**: Key-value rows (like hero) mapped to footer fields
- Returns the merged data object (sheet data overlaid on static fallback)
- Cache: 5-minute stale time so the sheet is not re-fetched on every interaction
- On error or while loading: returns the static `cms.ts` data as-is

### 3. `src/contexts/SiteDataContext.tsx` -- React context provider
- Creates a context that holds the merged site data
- Provides a `useSiteData()` hook for components to consume
- This avoids prop-drilling through every component

## Files to Modify

### 4. `src/pages/Index.tsx`
- Wrap the page content with the `SiteDataProvider`
- Call `useSheetData()` and pass result to the provider

### 5. Update all section components to use context instead of direct import
The following components will replace `import { siteData } from "@/data/cms"` with `const siteData = useSiteData()`:

- `src/components/Header.tsx`
- `src/components/HeroSection.tsx`
- `src/components/ServicesSection.tsx`
- `src/components/ProjectsSection.tsx`
- `src/components/ProcessSection.tsx`
- `src/components/AboutSection.tsx`
- `src/components/ContactFooter.tsx`

### 6. `src/data/cms.ts` -- No structural changes
- Kept as-is to serve as the fallback/default data
- Export type `SiteData` for type safety

## What stays unchanged
- **ClientsSection**: Uses local SVG logo files, not text from CMS -- stays as-is (logos can't be managed via CSV)
- **All styling and layout**: Zero visual changes
- **Header nav links**: Stay static (navigation structure shouldn't change from a sheet)

## How it works

```text
Google Sheet (you edit content)
       |
  Published CSV URLs (public, no API key)
       |
  sheets.ts fetches + parses CSV to JSON
       |
  useSheetData hook (react-query, 5-min cache)
       |
  Falls back to cms.ts if fetch fails
       |
  SiteDataContext provides data to all components
       |
  Components render as before -- no visual changes
```

## Technical Details

- No API keys or backend needed
- No new dependencies (uses existing `@tanstack/react-query`)
- CSV parsing is done client-side with a lightweight custom parser (no library needed for this simple structure)
- After you edit the Google Sheet, changes appear on the website within 5 minutes (or on page refresh)
- The Google Sheet "Publish to web" feature auto-updates the CSV when you edit cells -- no need to re-publish
