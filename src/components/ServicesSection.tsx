import { useState } from "react";
import { siteData } from "@/data/cms";
import SectionWatermark from "@/components/SectionWatermark";
import { Zap, Server, Network, type LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = { Zap, Server, Network };

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const active = siteData.services[activeTab];
  const ActiveIcon = iconMap[active.icon] || Zap;

  return (
    <section id="services" className="section-spacing relative overflow-hidden">
      <SectionWatermark text="שירותים" />
      <div className="container-narrow relative z-10">

        {/* Tabs row */}
        <div className="flex items-center justify-center gap-2 mb-10">
          {siteData.services.map((s, i) => {
            const Icon = iconMap[s.icon] || Zap;
            const isActive = i === activeTab;
            return (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-floating"
                    : "bg-card/60 border border-white/10 text-muted-foreground hover:text-foreground hover:border-white/20"
                }`}
              >
                <Icon size={16} />
                {s.title}
              </button>
            );
          })}
        </div>

        {/* Tab content */}
        <div className="rounded-3xl border border-white/10 bg-card/40 backdrop-blur-sm p-8 md:p-12">
          <div className={`flex flex-col md:flex-row items-center gap-10 ${activeTab % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
            {/* Text side */}
            <div className="md:w-1/2 space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-card/60 px-4 py-1.5 text-xs font-medium text-muted-foreground">
                <ActiveIcon size={14} className="text-primary" />
                {active.title}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground leading-snug">
                {active.description}
              </h3>
              {active.details && (
                <ul className="space-y-3 pt-2">
                  {active.details.map((d, j) => (
                    <li key={j} className="text-foreground/70 text-[15px] leading-[1.7] flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Image placeholder */}
            <div className="md:w-1/2">
              <div className="w-full aspect-[4/3] rounded-3xl bg-muted/40 border border-white/5 flex items-center justify-center">
                <ActiveIcon size={64} className="text-muted-foreground/30" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
