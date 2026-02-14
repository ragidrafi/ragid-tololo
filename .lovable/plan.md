
# Website Content and Layout Updates

This plan covers multiple changes across the site: font size increase, services redesign, projects update, process section simplification, and about section text update.

---

## 1. Increase Base Font Size Globally

The hero body text uses `text-lg md:text-xl` (~18-20px). Currently, other sections use smaller sizes (text-base/text-[15px]). We will increase the base paragraph text across all sections to match the hero's `text-lg md:text-xl` with the same `leading-[1.8]` line height.

**Files affected:** `ServicesSection.tsx`, `ProcessSection.tsx`, `AboutSection.tsx`, `ContactFooter.tsx`, `ClientsSection.tsx`

---

## 2. Services Section -- Replace with 3 Cards

Remove the current interactive icon-accordion component and replace it with a simple 3-card grid layout. Each card will be a "floating-card" style with:
- Title (bold, secondary/blue color)
- Description paragraph
- Bullet list of details

Updated content from the user's input (including new bullet points about renewable energy, international EPC contractors, and cooling technologies).

**Files affected:** `ServicesSection.tsx`, `src/data/cms.ts`

---

## 3. Projects Section -- Update Content

Replace the current 7 projects with the 4 new ones:
1. תחנת כוח במפעלי ים המלח -- 220MW, ניהול הרצה והפעלה
2. התפלה -- הרצה והפעלה של מערכות אנרגיה
3. תחנות כוח פרטיות MRC וסוגת -- צוותי הפעלה זרים
4. מפעלי ים המלח -- הפעלה והרצה של כ-50 פרויקטים שונים

**Files affected:** `src/data/cms.ts`

---

## 4. Process Section -- 4 Steps in One Row

- Remove step 5 (אחזקה)
- Merge step 4 into "תפעול ואחזקה" with updated description
- Change desktop layout from 3+2 grid to a single row of 4 items (`grid-cols-4`)
- Mobile stays as vertical stack

**Files affected:** `ProcessSection.tsx`

---

## 5. About Section -- Update All Text

Replace all 4 section texts with the user's new copy. The structure stays the same (4 alternating image+text rows), just the paragraphs change.

**Files affected:** `src/data/cms.ts`

---

## Technical Details

### `src/data/cms.ts`
- Update `services` array: new bullet details for all 3 services
- Update `projects` array: reduce to 4 items with new content
- Update `process` array: reduce to 4 steps, rename step 4
- Update `about.sections`: replace all paragraph text

### `src/components/ServicesSection.tsx`
- Remove framer-motion imports and interactive accordion logic
- Replace with a `grid grid-cols-1 md:grid-cols-3 gap-8` of floating cards
- Each card: title (text-xl font-bold text-secondary), description (text-lg), bullet list (text-lg)

### `src/components/ProcessSection.tsx`
- Remove step 5 from the `steps` array
- Update step 4 title to "תפעול ואחזקה" and its description
- Change desktop grid from 3+2 rows to single `grid-cols-4` row
- Increase description font to text-lg

### `src/components/AboutSection.tsx`
- Increase paragraph text to `text-lg md:text-xl leading-[1.8]`

### `src/components/ContactFooter.tsx`
- Increase form-related text and any body text to match the larger size

### Global text size adjustments
- All `text-base` / `text-[15px]` / `text-sm` body text becomes `text-lg md:text-xl`
