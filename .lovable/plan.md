

# Fix: Footer and Hero Key-Value CSV Parsing

## Problem
The `fetchCSV` function in `src/lib/sheets.ts` always treats the first CSV row as headers. This works for tabular tabs (services, projects, process, about) that have proper column headers. But the **hero** and **footer** tabs use a simple two-column key-value format with NO header row:

```
phone,03-1234567
email,info@ragid.co.il
...
```

The first row (`phone,03-1234567`) is consumed as column headers, so it never appears in the parsed data. This means `map.phone` is always `undefined`, and the code falls back to the hardcoded value in `cms.ts`.

## Solution
Add an optional `hasHeaders` parameter to `fetchCSV`. When `false`, it generates generic column names (`col0`, `col1`) and includes ALL rows as data.

### File: `src/lib/sheets.ts`
- Change `fetchCSV` signature to `fetchCSV(url: string, hasHeaders = true)`
- When `hasHeaders` is `false`, use generic keys like `col0`, `col1` for all rows (no row is skipped)

### File: `src/hooks/useSheetData.ts`
- Update the hero and footer query calls to pass `hasHeaders: false` (or call `fetchCSV(url, false)`)
- Update `parseHero` and `parseFooter` to read from `r.col0` and `r.col1` instead of `Object.values(r)[0]` and `Object.values(r)[1]` (or keep using `Object.values` which will still work)

### Technical detail
The queries config will need a small change so hero/footer calls pass the flag. One clean approach: change the URLS map to include metadata:

```ts
const SHEETS = {
  hero:     { url: "...", hasHeaders: false },
  services: { url: "...", hasHeaders: true },
  // ...
  footer:   { url: "...", hasHeaders: false },
};
```

Then the query function becomes `fetchCSV(SHEETS[key].url, SHEETS[key].hasHeaders)`.

No other files need to change. The parsers already use `Object.values()` which works regardless of key names.

