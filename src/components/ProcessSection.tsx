import { Zap, Sun, Server, Factory } from "lucide-react";
import SectionWatermark from "@/components/SectionWatermark";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

const industries: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Zap,
    title: "תחנות כוח",
    description: "CCGT / קיטור / גז, 100–500MW, חדרי בקרה, GIS, DCS, תפעול 24/7.",
  },
  {
    icon: Sun,
    title: "מתקני אנרגיה",
    description: "PV, אגירה (BESS), Utility‑Scale ותשתיות אנרגיה משלימות.",
  },
  {
    icon: Server,
    title: "Data Centers",
    description: "מערכות חשמל/קירור/בקרה קריטיות, אינטגרציה בין ספקים, מוכנות O&M.",
  },
  {
    icon: Factory,
    title: "תעשייה כבדה",
    description: "התפלת מים, מתקני פסולת, ייצור מימן, ייצור CO₂, מפעלי כימיה ופטרוכימיה.",
  },
];

const ProcessSection = () => {
  return (
    <section className="section-spacing relative overflow-hidden">
      <SectionWatermark text="תעשיות" />
      <div className="container-narrow relative z-10">
        <div className="text-center mb-10 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary">Energy. Data. Industry</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto leading-[1.8]">
            אנחנו פועלים ב-4 שווקים מרכזיים - כולם מבוססים על ניסיון מוכח.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="floating-card bg-card/60 backdrop-blur-sm p-8 flex flex-col items-center text-center"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                  <Icon className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3">{item.title}</h3>
                <p className="text-foreground/80 leading-[1.8]">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
