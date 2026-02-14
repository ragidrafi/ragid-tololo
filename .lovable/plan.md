

# Fix CSV Parser for Multi-line Quoted Fields

## Problem
The Google Sheet CSV for the first service ("אנרגיה ותחנות כוח") has its `description` wrapped in quotes with trailing newlines inside the quotes. The current CSV parser in `src/lib/sheets.ts` splits by newlines first, then parses each line separately. This breaks multi-line quoted fields into extra empty rows, producing 4 service cards instead of 3.

## Root Cause
In `src/lib/sheets.ts`, the `fetchCSV` function does:
```
const lines = text.split(/\r?\n/).filter((l) => l.trim() !== "");
```
This splits the raw text by newlines before considering whether a newline is inside a quoted field. The quoted description with embedded newlines gets broken across multiple lines, creating a garbage row.

## Solution
Rewrite the line-splitting logic in `fetchCSV` to be quote-aware. Instead of a simple `split(\n)`, iterate through the CSV text character by character, only treating a newline as a row delimiter when it is **not** inside a quoted field.

### File: `src/lib/sheets.ts`
- Replace the simple `text.split(/\r?\n/)` with a new `splitCSVLines(text)` function that:
  1. Tracks whether we are inside quotes (`inQuotes` flag)
  2. Only breaks to a new row on `\n` when `inQuotes` is false
  3. Handles `""` escaped quotes correctly
- Filter out empty lines after splitting
- The existing `parseCSVLine` function stays as-is (it already handles quoted fields within a single line correctly)

No other files need to change. The services section component and the `useSheetData` hook are already correct -- they just receive the wrong number of rows from the broken parser.

