import { useSiteData } from "@/contexts/SiteDataContext";
import SectionWatermark from "@/components/SectionWatermark";
import { Zap, Droplets, Settings, Briefcase, Factory } from "lucide-react";
import { MorphingCardStack, type CardData } from "@/components/ui/morphing-card-stack";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Zap,
  Droplets,
  Settings,
  Briefcase,
  Factory,
};

const ProjectsSection = () => {
  const siteData = useSiteData();
  const cards: CardData[] = siteData.projects.map((p, i) => {
    const IconComponent = iconMap[p.icon];
    const statPart = p.stat && p.statLabel ? `${p.stat} ${p.statLabel} — ` : "";
    return {
      id: String(i),
      title: p.title,
      description: `${statPart}${p.description}`,
      icon: IconComponent ? <IconComponent size={28} /> : undefined,
    };
  });

  return (
    <section id="projects" className="section-spacing relative overflow-hidden">
      <SectionWatermark text="פרויקטים" />
      <div className="container-narrow relative z-10">
        <MorphingCardStack cards={cards} defaultLayout="grid" />
      </div>
    </section>
  );
};

export default ProjectsSection;
