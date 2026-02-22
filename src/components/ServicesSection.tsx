import { useState } from "react";
import { useSiteData } from "@/contexts/SiteDataContext";
import SectionWatermark from "@/components/SectionWatermark";
import { Zap, Server, Network, ChevronDown, type LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = { Zap, Server, Network };

const ServicesSection = () => {
  const siteData = useSiteData();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="services" className="section-spacing relative overflow-hidden">
      <SectionWatermark text="שירותים" />
      <div className="container-narrow relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {siteData.services.map((s, i) => {
            const Icon = iconMap[s.icon] || Zap;
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="floating-card bg-card/60 backdrop-blur-sm p-8 flex flex-col"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                    <Icon className="text-primary" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-3">{s.title}</h3>
                  <p className="text-lg text-foreground/80 leading-[1.8]">{s.description}</p>
                </div>
                {s.details && (
                  <>
                    <div className="flex-1" />
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      className="mx-auto mt-5 flex items-center justify-center w-10 h-10 rounded-full bg-primary/20 hover:bg-primary/30 transition-colors"
                      aria-label={isOpen ? "סגור פרטים" : "פתח פרטים"}
                    >
                      <ChevronDown
                        className={`text-primary transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                        size={22}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isOpen ? "max-h-[500px] opacity-100 mt-5" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="w-full h-px bg-white/10 mb-5" />
                      <ul className="space-y-3">
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
                    </div>
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
