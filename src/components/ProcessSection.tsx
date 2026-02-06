import { Compass, HardHat, FlaskConical, Settings, type LucideIcon } from "lucide-react";
import SectionWatermark from "@/components/SectionWatermark";

const steps: {
  icon: LucideIcon;
  step: number;
  title: string;
  subtitle: string;
  description: string;
}[] = [
  {
    icon: Compass,
    step: 1,
    title: "תכנון",
    subtitle: "Design & Engineering",
    description:
      "הובלת צוותי תכנון מקומיים ובינלאומיים, סקרי היתכנות ועמידה בתקנים.",
  },
  {
    icon: HardHat,
    step: 2,
    title: "הקמה",
    subtitle: "Construction Management",
    description:
      "ניהול קבלני משנה, תיאום מערכות אלקטרו-מכניות ופיקוח על לוחות זמנים.",
  },
  {
    icon: FlaskConical,
    step: 3,
    title: "הרצה",
    subtitle: "Commissioning",
    description:
      "ביצוע בדיקות קבלה, Cold & Hot Commissioning, והעברה מבוקרת ממצב הקמה למצב הפעלה.",
  },
  {
    icon: Settings,
    step: 4,
    title: "תפעול ואחזקה",
    subtitle: "O&M",
    description:
      "ניהול מערך התפעול השוטף, גיוס והשמת מפעילים (Expat & Local), וניהול תחזוקה מונעת למערכות קריטיות.",
  },
];

const ProcessSection = () => {
  return (
    <section className="section-spacing relative overflow-hidden">
      <SectionWatermark text="שיטת עבודה" opacity={0.03} />
      <div className="container-narrow relative z-10">

        {/* Desktop 2x2 grid with SVG arrows */}
        <div className="hidden md:block relative">
          {/* SVG connecting path overlay */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-20"
            preserveAspectRatio="none"
          >
            <defs>
              <marker
                id="arrowhead"
                markerWidth="8"
                markerHeight="6"
                refX="7"
                refY="3"
                orient="auto"
              >
                <polygon points="0 0, 8 3, 0 6" fill="hsl(var(--primary))" />
              </marker>
            </defs>

            {/* Arrow 1→2: horizontal across top row (RTL: right to left) */}
            <line
              x1="72%"
              y1="25%"
              x2="28%"
              y2="25%"
              stroke="hsl(var(--primary))"
              strokeWidth="2"
              strokeDasharray="8 4"
              markerEnd="url(#arrowhead)"
            />

            {/* U-turn: Card 2 down to Card 3 (left column) */}
            <path
              d="M 14% 38% L 14% 50% Q 14% 62%, 28% 62%"
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="2"
              strokeDasharray="8 4"
            />

            {/* Arrow 3→4: horizontal across bottom row (left to right in RTL = visual right) */}
            <line
              x1="28%"
              y1="75%"
              x2="72%"
              y2="75%"
              stroke="hsl(var(--primary))"
              strokeWidth="2"
              strokeDasharray="8 4"
              markerEnd="url(#arrowhead)"
            />
          </svg>

          <div className="grid grid-cols-2 gap-8">
            {/* Row 1: Step 1 (right in RTL) then Step 2 (left in RTL) */}
            {[steps[0], steps[1]].map((s) => (
              <StepCard key={s.step} {...s} />
            ))}

            {/* Row 2: In RTL, first grid item goes right. We want Step3 left, Step4 right.
                So render Step4 first (goes right in RTL), then Step3. */}
            <StepCard {...steps[3]} />
            <StepCard {...steps[2]} />
          </div>

          {/* Cycle label */}
          <div className="flex justify-center mt-10">
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <div className="h-px w-12 bg-primary/30" />
              <span className="text-primary font-semibold">מחזור חיים מלא</span>
              <div className="h-px w-12 bg-primary/30" />
            </div>
          </div>
        </div>

        {/* Mobile: vertical column */}
        <div className="md:hidden flex flex-col items-center gap-0">
          {steps.map((s, i) => (
            <div key={s.step} className="w-full flex flex-col items-center">
              <StepCard {...s} />
              {i < steps.length - 1 && (
                <div className="w-px h-10 border-r-2 border-dashed border-primary/50" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const StepCard = ({ icon: Icon, step, title, subtitle, description }: typeof steps[number]) => (
  <div className="relative rounded-3xl border border-secondary/40 bg-background/80 backdrop-blur-sm shadow-floating p-8 transition-all duration-300 hover:shadow-floating-hover group">
    {/* Step badge */}
    <span className="absolute top-4 right-4 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center shadow-lg">
      {step}
    </span>

    <Icon className="text-primary mb-4" size={40} />
    <h4 className="text-xl font-bold text-primary mb-1">{title}</h4>
    <span className="text-sm text-muted-foreground font-medium mb-3 block tracking-wide">{subtitle}</span>
    <p className="text-base text-foreground/75 leading-[1.8]">{description}</p>
  </div>
);

export default ProcessSection;
