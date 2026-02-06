import { siteData } from "@/data/cms";
import { Zap, Server, Network, type LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = { Zap, Server, Network };

const ServicesSection = () => {
  return (
    <section id="services" className="section-spacing">
      <div className="container-narrow">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-2">השירותים שלנו</h2>
        <div className="green-line mb-16" />

        <div className="grid md:grid-cols-3 gap-10">
          {siteData.services.map((s, i) => {
            const Icon = iconMap[s.icon] || Zap;
            return (
              <div key={i} className="relative flex flex-col items-center text-center pt-10">
                {/* Floating icon - positioned outside the card */}
                <div className="absolute -top-1 z-10 w-16 h-16 rounded-2xl bg-primary flex items-center justify-center shadow-floating">
                  <Icon className="text-primary-foreground" size={28} />
                </div>

                {/* Card body */}
                <div className="w-full rounded-3xl border border-white/10 bg-card/60 backdrop-blur-sm px-7 pt-14 pb-8 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.5)] hover:shadow-[0_35px_90px_-20px_rgba(0,0,0,0.6)] hover:-translate-y-1 transition-all duration-300">
                  <h3 className="text-xl font-bold text-secondary leading-relaxed mb-4">{s.title}</h3>
                  <p className="text-foreground/80 leading-[1.7] text-[15px] mb-4">{s.description}</p>
                  {s.details && (
                    <ul className="space-y-2">
                      {s.details.map((d, j) => (
                        <li key={j} className="text-foreground/60 text-[13px] leading-[1.6]">{d}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
