

# Watermark as Section Title

The watermark text currently sits behind each section as a decorative element, while a separate `h2` title is displayed in the foreground. The goal is to **replace** the foreground `h2` title with the watermark itself, making the watermark darker and positioned at the top of each section so it **acts as the section title**.

## Changes

### 1. Update `SectionWatermark` component
- Move the watermark from centered (vertically + horizontally) to **top-aligned** (near the top of the section)
- Increase opacity from 3% to around **8-10%** so it reads as a faded title
- Keep `pointer-events-none` and `hidden md:flex` behavior
- On mobile, show a regular visible title as fallback since the watermark is hidden

### 2. Remove duplicate `h2` titles from all sections
Remove the explicit `<h2>` title and `<div className="green-line">` from:
- **ServicesSection** -- remove "השירותים שלנו" h2 + green line
- **ProjectsSection** -- remove "פרויקטים נבחרים" h2 + green line
- **ProcessSection** -- remove "שיטת עבודה" h2 + green line
- **ClientsSection** -- remove "לקוחות" h2 + green line
- **AboutSection** -- remove each sub-section h2 + green line (keep them only on mobile)
- **ContactFooter** -- remove "צור קשר" h2 + green line

### 3. Mobile fallback
Since the watermark is hidden on mobile (`hidden md:flex`), add a mobile-only `h2` title (`md:hidden`) in each section so mobile users still see the section name.

## Technical Details

**SectionWatermark.tsx changes:**
- Change vertical alignment from `items-center` to `items-start pt-8`
- Change opacity from `text-foreground/[0.03]` to `text-foreground/[0.08]`
- Keep `pointer-events-none`, `select-none`, `overflow-hidden`, `z-0`

**Each section component:**
- Replace the current `h2` + `green-line` block with a mobile-only fallback title
- Keep the watermark `SectionWatermark` component call as-is (already present)
- Adjust top padding/margin as needed so content doesn't overlap the watermark area
