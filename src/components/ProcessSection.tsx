import { useRef, useEffect, useState, useCallback } from "react";
import { Compass, HardHat, FlaskConical, Settings, Wrench, type LucideIcon } from "lucide-react";
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
    title: "תפעול",
    subtitle: "Operations",
    description:
      "ניהול מערך התפעול השוטף, גיוס והשמת מפעילים (Expat & Local) וניהול צוותי הפעלה.",
  },
  {
    icon: Wrench,
    step: 5,
    title: "אחזקה",
    subtitle: "Maintenance",
    description:
      "ניהול תחזוקה מונעת למערכות קריטיות, תכנון חלפים ותיקונים שוטפים.",
  },
];

const CIRCLE_RADIUS = 48; // half of w-24 (96px)

const StepCard = ({
  step,
  circleRef,
}: {
  step: (typeof steps)[0];
  circleRef: (el: HTMLDivElement | null) => void;
}) => {
  const Icon = step.icon;
  return (
    <div className="flex flex-col items-center text-center group">
      <div className="relative z-10 mb-5" ref={circleRef}>
        <div className="w-24 h-24 rounded-full border-2 border-secondary/40 bg-background flex items-center justify-center group-hover:border-primary group-hover:shadow-[0_0_30px_rgba(82,172,66,0.25)] transition-all duration-300">
          <Icon className="text-primary" size={36} />
        </div>
        <span className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center shadow-lg">
          {step.step}
        </span>
      </div>
      <h4 className="text-2xl font-bold text-foreground mb-1">{step.title}</h4>
      <span className="text-sm text-primary font-semibold mb-3 tracking-wide">{step.subtitle}</span>
      <p className="text-foreground/65 text-base leading-[1.7] max-w-[260px]">{step.description}</p>
    </div>
  );
};

const ProcessSection = () => {
  const row1 = steps.slice(0, 3);
  const row2 = steps.slice(3, 5);

  const containerRef = useRef<HTMLDivElement>(null);
  const circleRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [pathD, setPathD] = useState("");
  const [svgSize, setSvgSize] = useState({ w: 0, h: 0 });

  const setCircleRef = useCallback((index: number) => (el: HTMLDivElement | null) => {
    circleRefs.current[index] = el;
  }, []);

  useEffect(() => {
    const compute = () => {
      const container = containerRef.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      setSvgSize({ w: rect.width, h: rect.height });

      const centers = circleRefs.current.map((el) => {
        if (!el) return { x: 0, y: 0 };
        const r = el.getBoundingClientRect();
        return {
          x: r.left + r.width / 2 - rect.left,
          y: r.top + r.height / 2 - rect.top,
        };
      });

      if (centers.length < 5 || centers.some(c => c.x === 0 && c.y === 0)) return;

      const [c1, c2, c3, c4, c5] = centers;
      const R = CIRCLE_RADIUS;

      // Connect at circle edges, not centers
      // Row 1 (RTL): c1 left-edge -> c2 right-edge, c2 left-edge -> c3 right-edge
      // U-turn: c3 bottom -> c4 bottom (going down and around)
      // Row 2: c4 left-edge -> c5 right-edge (LTR in visual)

      const d = [
        // Row 1: Step 1 left edge to Step 2 right edge
        `M ${c1.x - R} ${c1.y}`,
        `L ${c2.x + R} ${c2.y}`,
        // Gap for circle 2, then continue
        `M ${c2.x - R} ${c2.y}`,
        `L ${c3.x + R} ${c3.y}`,
        // U-turn from Step 3 bottom down to Step 4 bottom
        `M ${c3.x} ${c3.y + R}`,
        `C ${c3.x} ${c3.y + R + 60}, ${c4.x} ${c4.y - R - 60}, ${c4.x} ${c4.y - R}`,
        // Row 2: Step 4 to Step 5
        `M ${c4.x - R} ${c4.y}`,
        `L ${c5.x + R} ${c5.y}`,
      ].join(" ");

      setPathD(d);
    };

    compute();
    window.addEventListener("resize", compute);
    const timer = setTimeout(compute, 300);
    return () => {
      window.removeEventListener("resize", compute);
      clearTimeout(timer);
    };
  }, []);

  return (
    <section className="section-spacing relative overflow-hidden">
      <SectionWatermark text="שיטת עבודה" />
      <div className="container-narrow relative z-10">

        {/* Desktop layout */}
        <div className="hidden md:block relative" ref={containerRef}>
          {/* SVG connecting path */}
          {pathD && (
            <svg
              className="absolute inset-0 pointer-events-none z-0"
              width={svgSize.w}
              height={svgSize.h}
              style={{ overflow: "visible" }}
            >
              <path
                d={pathD}
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth="2"
                strokeOpacity="0.4"
                strokeDasharray="8 4"
              />
            </svg>
          )}

          {/* Row 1: 3 items */}
          <div className="grid grid-cols-3 gap-8 mb-20 relative z-10">
            {row1.map((s, i) => (
              <StepCard key={s.step} step={s} circleRef={setCircleRef(i)} />
            ))}
          </div>

          {/* Row 2: 2 items centered */}
          <div className="grid grid-cols-2 gap-8 max-w-[60%] mx-auto relative z-10">
            {row2.map((s, i) => (
              <StepCard key={s.step} step={s} circleRef={setCircleRef(i + 3)} />
            ))}
          </div>
        </div>

        {/* Mobile layout: vertical stack */}
        <div className="md:hidden flex flex-col items-center gap-2">
          {steps.map((s, i) => (
            <div key={s.step} className="flex flex-col items-center">
              <StepCard step={s} circleRef={() => {}} />
              {i < steps.length - 1 && (
                <div className="w-px h-10 bg-primary/30 my-2" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
