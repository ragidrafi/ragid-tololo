

## Problem

The bullet points are not appearing because the Google Sheets CSV for the process tab likely doesn't have a `bullets` column. When sheet data is fetched successfully, `parseProcess` returns empty `bullets: []` arrays (since `r.bullets` is undefined), overriding the local fallback data in `cms.ts` that does contain bullets.

## Plan

1. **Update `parseProcess` in `src/hooks/useSheetData.ts`** to fall back to the matching `cms.ts` bullets when the sheet row doesn't have a `bullets` field. This way, even if the Google Sheet doesn't include a bullets column, the local CMS bullets will be used.

   Change line 60 from:
   ```ts
   bullets: r.bullets ? r.bullets.split("|").map(...) : [],
   ```
   to:
   ```ts
   bullets: r.bullets
     ? r.bullets.split("|").map((b: string) => b.trim())
     : (siteData.process.find(p => p.step === step)?.bullets ?? []),
   ```

This single change ensures the bullets from `cms.ts` are always available as fallback when the sheet doesn't provide them.

