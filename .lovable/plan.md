

## Fix: Gallery Not Using Google Sheet Titles

### Root Cause
The gallery fallback logic on line 145 of `useSheetData.ts` requires the sheet to return **exactly 10 valid items** (`parsedGallery.length >= siteData.gallery.length`). Your sheet has a duplicate `number=3` and is missing `number=4`, so only 9 unique valid items are parsed. This causes the entire sheet data to be discarded in favor of the local cms.ts fallback.

### Fix (1 file)

**`src/hooks/useSheetData.ts`**
- Change the gallery merge logic: instead of all-or-nothing, merge sheet data with fallback. For each of the 10 gallery slots, use the sheet title if available, otherwise fall back to cms.ts.
- Line 145: Replace `parsedGallery.length >= siteData.gallery.length ? parsedGallery : siteData.gallery` with a merge that maps over `siteData.gallery` and overrides `text` from the sheet data when a matching `number` exists.

### Also Recommended
Your sheet has `number=3` twice and no `number=4`. You may want to fix that in the sheet so all 10 images get the correct title.

