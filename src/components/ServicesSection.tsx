import { useState } from "react";
import { siteData } from "@/data/cms";
import SectionWatermark from "@/components/SectionWatermark";
import { Zap, Server, Network, type LucideIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const iconMap: Record<string, LucideIcon> = { Zap, Server, Network };

const ServicesSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (i: number) => setActiveIndex(prev => (prev === i ? null : i));

  return (
    <section id="services" className="section-spacing relative overflow-hidden">
      <SectionWatermark text="שירותים" />
      <div className="container-narrow relative z-10">
        <div className="flex flex-col items-center gap-0">
          {siteData.services.map((s, i) => {
            const Icon = iconMap[s.icon] || Zap;
            const isActive = i === activeIndex;

            return (
              <div key={i} className="w-full">
                {/* Connector line above (not for first) */}
                {i > 0 && (
                  <div className="flex justify-center">
                    <div className="w-px h-8 bg-white/10" />
                  </div>
                )}

                {/* Desktop: horizontal row */}
                <div className="hidden md:flex items-center w-full">
                  {/* Left card – details */}
                  <div className="flex-1 flex justify-end">
                    <AnimatePresence>
                      {isActive && s.details && (
                        <motion.div
                          initial={{ opacity: 0, scaleX: 0 }}
                          animate={{ opacity: 1, scaleX: 1 }}
                          exit={{ opacity: 0, scaleX: 0 }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                          style={{ transformOrigin: "right center" }}
                          className="rounded-2xl border border-white/10 bg-card/40 backdrop-blur-sm p-6 max-w-sm w-full"
                        >
                          <ul className="space-y-3">
                            {s.details.map((d, j) => (
                              <li key={j} className="text-foreground/70 text-sm leading-relaxed flex items-start gap-2">
                                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                                {d}
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Center icon */}
                  <button
                    onClick={() => toggle(i)}
                    className={`shrink-0 mx-6 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "bg-primary text-primary-foreground shadow-floating"
                        : "bg-card/60 border border-white/10 text-muted-foreground hover:text-foreground hover:border-white/20"
                    }`}
                  >
                    <Icon size={22} />
                  </button>

                  {/* Right card – title & description */}
                  <div className="flex-1 flex justify-start">
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, scaleX: 0 }}
                          animate={{ opacity: 1, scaleX: 1 }}
                          exit={{ opacity: 0, scaleX: 0 }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                          style={{ transformOrigin: "left center" }}
                          className="rounded-2xl border border-white/10 bg-card/40 backdrop-blur-sm p-6 max-w-sm w-full"
                        >
                          <h3 className="text-lg font-bold text-foreground mb-2">{s.title}</h3>
                          <p className="text-foreground/70 text-sm leading-relaxed">{s.description}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Mobile: vertical accordion */}
                <div className="md:hidden flex flex-col items-center">
                  <button
                    onClick={() => toggle(i)}
                    className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "bg-primary text-primary-foreground shadow-floating"
                        : "bg-card/60 border border-white/10 text-muted-foreground hover:text-foreground hover:border-white/20"
                    }`}
                  >
                    <Icon size={22} />
                  </button>
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="overflow-hidden w-full mt-4 space-y-3"
                      >
                        <div className="rounded-2xl border border-white/10 bg-card/40 backdrop-blur-sm p-5">
                          <h3 className="text-lg font-bold text-foreground mb-2">{s.title}</h3>
                          <p className="text-foreground/70 text-sm leading-relaxed">{s.description}</p>
                        </div>
                        {s.details && (
                          <div className="rounded-2xl border border-white/10 bg-card/40 backdrop-blur-sm p-5">
                            <ul className="space-y-3">
                              {s.details.map((d, j) => (
                                <li key={j} className="text-foreground/70 text-sm leading-relaxed flex items-start gap-2">
                                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                                  {d}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
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
