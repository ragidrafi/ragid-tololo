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
        {/* Large 2-line title (desktop) */}
        <h2 className="hidden md:block text-5xl lg:text-6xl xl:text-7xl font-black text-secondary leading-tight mb-16 text-center">
          תכנון משולב.
          <br />
          ביצוע מוכח.
        </h2>

        {/* 4 cards in a row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={i}
                className="rounded-2xl border border-white/10 bg-card/40 backdrop-blur-sm p-6 flex flex-col items-center text-center group hover:border-primary/40 hover:shadow-[0_0_30px_rgba(82,172,66,0.15)] transition-all duration-300"
              >
                <div className="mb-4">
                  <Icon className="text-primary" size={28} />
                </div>
                <h4 className="text-lg font-bold text-foreground mb-1">{s.title}</h4>
                <span className="text-xs text-primary font-medium mb-3 tracking-wide">{s.subtitle}</span>
                <p className="text-foreground/60 text-sm leading-[1.7]">{s.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
