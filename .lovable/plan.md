

## Fix: Gallery Not Reading Sheet Data Due to Header Mismatch

### Root Cause
The `parseGallery` function accesses `r.number` and `r.text` assuming the Google Sheet headers are exactly `number` and `text`. If the sheet headers are different (e.g., capitalized, Hebrew, or slightly different spelling), those fields resolve to `undefined` and all rows get filtered out, falling back to cms.ts.

### Fix (1 file)

**`src/hooks/useSheetData.ts`** — Make `parseGallery` resilient to header naming:
- Instead of relying on exact header names `r.number` and `r.text`, get the first and second column values positionally using `Object.values(r)`.
- First column value → number, second column value → text.
- This matches the user's sheet structure (A = number, B = text) regardless of header names.

```typescript
function parseGallery(rows: CSVRow[]) {
  return rows
    .map((r) => {
      const values = Object.values(r);
      return {
        number: Number.parseInt(String(values[0] ?? ""), 10),
        text: (values[1] ?? "").trim(),
      };
    })
    .filter(...)  // keep existing filter
    .sort(...);   // keep existing sort
}
```

