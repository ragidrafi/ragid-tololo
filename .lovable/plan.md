

## Analysis

The Google Sheet "gallery" tab likely has only 3 rows of data. Since the fetch succeeds with 3 rows, the code uses the sheet data (3 items) instead of the fallback (10 items). The condition `dataMap.gallery.length > 0` is true, so it skips the fallback.

## Fix Plan

Two changes needed:

### 1. Use fallback when sheet has fewer items than expected
In `src/hooks/useSheetData.ts` (line 134), change the gallery condition to also check if the sheet returned a reasonable number of items (e.g., at least the fallback count), or merge sheet data with fallback:

```ts
gallery: dataMap.gallery && dataMap.gallery.length >= siteData.gallery.length
  ? parseGallery(dataMap.gallery)
  : siteData.gallery,
```

This ensures the fallback (10 items) is used if the sheet has fewer entries than expected.

### 2. Alternative: Ask user to fill all 10 rows
The user may simply need to add all 10 rows to their Google Sheet gallery tab. The current code works correctly — it just trusts whatever the sheet returns.

**Recommended approach**: Apply fix #1 so partial sheet data doesn't override complete fallback data, and also inform the user they should fill all 10 rows in the sheet.

