import { siteData } from "@/data/cms";
import SectionWatermark from "@/components/SectionWatermark";
import { Zap, Server, Network, type LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = { Zap, Server, Network };

const ServicesSection = () => {
  return (
    <section id="services" className="section-spacing relative overflow-hidden">
      <SectionWatermark text="שירותים" />
      <div className="container-narrow relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteData.services.map((s, i) => {
            const Icon = iconMap[s.icon] || Zap;
            return (
              <div
                key={i}
                className="floating-card bg-card/60 backdrop-blur-sm p-8 flex flex-col"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                  <Icon className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3">{s.title}</h3>
                <p className="text-lg text-foreground/80 leading-[1.8]">{s.description}</p>
                {s.details && (
                  <>
                    <div className="w-full h-px bg-white/10 my-5" />
                    <ul className="space-y-3 flex-1 flex flex-col justify-center">
                      {s.details.map((d, j) => (
                        <li
                          key={j}
                          className="text-lg text-foreground/70 leading-[1.8] flex items-start gap-2"
                        >
                          <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
