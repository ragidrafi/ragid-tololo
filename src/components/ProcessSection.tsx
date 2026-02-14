import { Compass, HardHat, FlaskConical, Settings, type LucideIcon } from "lucide-react";
import SectionWatermark from "@/components/SectionWatermark";
import { siteData } from "@/data/cms";

const iconMap: Record<string, LucideIcon> = { Compass, HardHat, FlaskConical, Settings };

const StepCard = ({ step }: { step: (typeof siteData.process)[0] }) => {
  const Icon = iconMap[step.icon] ?? Compass;
  return (
    <div className="flex flex-col items-center text-center group">
      <div className="relative z-10 mb-5">
        <div className="w-24 h-24 rounded-full border-2 border-secondary/40 bg-background flex items-center justify-center group-hover:border-primary group-hover:shadow-[0_0_30px_rgba(82,172,66,0.25)] transition-all duration-300">
          <Icon className="text-primary" size={36} />
        </div>
        <span className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center shadow-lg">
          {step.step}
        </span>
      </div>
      <h4 className="text-2xl font-bold text-foreground mb-1">{step.title}</h4>
      <span className="text-sm text-primary font-semibold mb-3 tracking-wide">{step.subtitle}</span>
      <p className="text-lg text-foreground/65 leading-[1.8] max-w-[280px]">{step.description}</p>
    </div>
  );
};

const ProcessSection = () => {
  return (
    <section className="section-spacing relative overflow-hidden">
      <SectionWatermark text={siteData.processWatermark} />
      <div className="container-narrow relative z-10">
        {/* Desktop layout: single row of 4 */}
        <div className="hidden md:grid grid-cols-4 gap-8">
          {siteData.process.map((s) => (
            <StepCard key={s.step} step={s} />
          ))}
        </div>
        {/* Mobile layout: vertical stack */}
        <div className="md:hidden flex flex-col items-center gap-2">
          {siteData.process.map((s, i) => (
            <div key={s.step} className="flex flex-col items-center">
              <StepCard step={s} />
              {i < siteData.process.length - 1 && (
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
