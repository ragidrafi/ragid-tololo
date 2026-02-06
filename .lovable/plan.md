

# Update Projects Section with Real Data and Visible Borders

## What Changes

Replace the 3 placeholder projects with the 7 real projects from the provided table, and ensure borders between cards are clearly visible.

## New Project Data (from the table)

| Project Name | Activity Description | Technical Data | Icon |
|---|---|---|---|
| תחנת כוח דוראד | צוות קבלה והרצה | תחנת כוח במחזור משולב, 800MW | Zap |
| תחנת כוח רותם (OPC) | ניהול פרויקט עבור הקבלן (GC) | ניהול הקמה מול חברת POSCO (הספק 440MW) | Zap |
| תחנת כוח ים המלח | ניהול הרצה והפעלה | טורבינת גז 220MW + תחנת קיטור 110MW | Zap |
| מתקן התפלה שורק 2 | הרצת מערכות אנרגיה | אינטגרציה של בלוק האנרגיה במתקן ההתפלה | Droplets |
| תחנות כוח MRC וסוגות | תפעול שוטף | יהול צוותי הפעלה למערכות Siemens | Settings |
| פרויקטים נוספים | ליווי הנדסי והרצה | אדלטק אשדוד (60MW), רמת נגב (120MW), שורק 1 (140MW), אשלים Plot B | Briefcase |
| מפעלי ים המלח | ניהול פרויקטים שוטף | ביצוע כ-50 פרויקטים הנדסיים לאורך 30 שנה | Factory |

## Technical Details

### 1. Update `src/data/cms.ts`
- Replace the 3 existing projects with the 7 new ones
- Each project will have: `title`, `description` (activity description), `stat` (main number from technical data), `statLabel` (unit/context), and `icon`

### 2. Update `src/components/ProjectsSection.tsx`
- Update the grid to handle 7 items gracefully: keep `md:grid-cols-3` (will create 3 rows with last row having 1 card)
- **Fix borders**: Make borders more visible by changing `border-white/10` to `border-white/20` so they are clearly seen between the cards
- Add all borders consistently: every card gets a bottom border, and cards that aren't the first in a row get a right border (RTL: appears on the left visually)
- Update the `iconMap` to include new icons: `Zap`, `Droplets`, `Settings`, `Briefcase`, `Factory`
- Remove unused icons (`Construction`, `Building2`)

### 3. Border Logic
- Every card gets `border-b border-white/20`
- Cards that are not at position 0, 3, 6 (i.e., not first in their row) get `md:border-r border-white/20`
- Last row cards won't have bottom border on desktop: cards in the last row get `md:border-b-0`

