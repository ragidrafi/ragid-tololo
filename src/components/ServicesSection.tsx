import { useState } from "react";
import { siteData } from "@/data/cms";
import SectionWatermark from "@/components/SectionWatermark";
import { Zap, Server, Network, ChevronDown, type LucideIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const iconMap: Record<string, LucideIcon> = { Zap, Server, Network };

const ServicesSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(prev => (prev === i ? null : i));

  return (
    <section id="services" className="section-spacing relative overflow-hidden">
      <SectionWatermark text="שירותים" />
      <div className="container-narrow relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteData.services.map((s, i) => {
            const Icon = iconMap[s.icon] || Zap;
            const isOpen = openIndex === i;
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
                    <button
                      onClick={() => toggle(i)}
                      className="w-full flex items-center justify-center gap-2 mt-5 pt-5 border-t border-white/10 text-primary font-semibold text-sm cursor-pointer hover:text-primary/80 transition-colors"
                    >
                      <span>{isOpen ? "הסתר פרטים" : "פרטים נוספים"}</span>
                      <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown size={18} />
                      </motion.span>
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.ul
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                          className="space-y-3 overflow-hidden mt-4"
                        >
                          {s.details.map((d, j) => (
                            <li
                              key={j}
                              className="text-lg text-foreground/70 leading-[1.8] flex items-start gap-2"
                            >
                              <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                              {d}
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
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
