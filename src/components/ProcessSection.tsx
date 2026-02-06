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
      <SectionWatermark text="שיטת עבודה" />
      <div className="container-narrow relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-2">שיטת עבודה</h2>
        <div className="green-line mb-16" />

        {/* Lifecycle ring */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-12 right-[12.5%] left-[12.5%] h-px bg-gradient-to-l from-primary/60 via-primary/30 to-primary/60" />

          <div className="grid md:grid-cols-4 gap-8 md:gap-6 relative">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={i} className="flex flex-col items-center text-center group">
                  {/* Step circle */}
                  <div className="relative z-10 mb-6">
                    <div className="w-24 h-24 rounded-full border-2 border-primary/40 bg-background flex items-center justify-center group-hover:border-primary group-hover:shadow-[0_0_30px_rgba(82,172,66,0.25)] transition-all duration-300">
                      <Icon className="text-primary" size={32} />
                    </div>
                    {/* Step number badge */}
                    <span className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center shadow-lg">
                      {s.step}
                    </span>
                  </div>

                  {/* Arrow between steps (mobile) */}
                  {i < steps.length - 1 && (
                    <div className="md:hidden w-px h-8 bg-primary/30 mb-4 -mt-2" />
                  )}

                  {/* Text */}
                  <h4 className="text-lg font-bold text-foreground mb-1">{s.title}</h4>
                  <span className="text-xs text-primary font-medium mb-3 tracking-wide">{s.subtitle}</span>
                  <p className="text-foreground/65 text-sm leading-[1.7] max-w-[240px]">{s.description}</p>
                </div>
              );
            })}
          </div>

          {/* Cycle arrow indicator */}
          <div className="hidden md:flex justify-center mt-10">
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <div className="h-px w-12 bg-primary/30" />
              <span className="text-primary font-semibold">מחזור חיים מלא</span>
              <div className="h-px w-12 bg-primary/30" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
