
# Move Process Section Content to CMS

## Changes

### 1. `src/data/cms.ts` -- Expand the `process` array
Add `subtitle` and `description` fields to each of the 4 process steps (currently only has `step`, `title`, `icon`):

- Step 1: subtitle "Design & Engineering", description about leading design teams
- Step 2: subtitle "Construction Management", description about subcontractor management
- Step 3: subtitle "Commissioning", description about acceptance testing
- Step 4: subtitle "Operations & Maintenance", description about ongoing operations

Also add a `processWatermark` field with value "שיטת עבודה".

### 2. `src/components/ProcessSection.tsx` -- Read from CMS
- Import `siteData` from `src/data/cms.ts`
- Remove the hardcoded `steps` array
- Map over `siteData.process` to build the step cards dynamically
- Use a Lucide icon map (`{ Compass, HardHat, FlaskConical, Settings }`) to resolve icon strings from CMS to actual components
- Use `siteData.processWatermark` for the watermark text

The visual layout and styling remain unchanged.
