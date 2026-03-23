import { useSiteData } from "@/contexts/SiteDataContext";
import SectionWatermark from "@/components/SectionWatermark";
import { Zap, Droplets, Settings, Briefcase, Factory } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

const iconMap: Record<string, LucideIcon> = {
  Zap,
  Droplets,
  Settings,
  Briefcase,
  Factory,
};

const ProjectsSection = () => {
  const siteData = useSiteData();

  return (
    <section id="projects" className="section-spacing relative overflow-hidden">
      <SectionWatermark text="פרויקטים" />
      <div className="container-narrow relative z-10">
        <div className="flex flex-col gap-4 mt-8">
          {siteData.projects.map((p, i) => {
            const IconComponent = iconMap[p.icon];
            const statPart = p.stat && p.statLabel ? `${p.stat} ${p.statLabel} — ` : "";
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="rounded-xl border border-border bg-card p-5 hover:border-primary/50 transition-colors"
              >
                <div className="flex flex-col gap-2">
                  {IconComponent && (
                    <div className="text-primary">
                      <IconComponent size={28} />
                    </div>
                  )}
                  <h3 className="font-bold text-secondary text-lg">{p.title}</h3>
                  <p className="text-sm text-foreground/80 leading-relaxed mt-1">
                    {statPart}{p.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
