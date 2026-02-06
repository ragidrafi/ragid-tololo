import { siteData } from "@/data/cms";
import SectionWatermark from "@/components/SectionWatermark";
import { Zap, Droplets, Settings, Briefcase, Factory } from "lucide-react";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Zap,
  Droplets,
  Settings,
  Briefcase,
  Factory,
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-spacing relative overflow-hidden">
      <SectionWatermark text="פרויקטים" />
      <div className="container-narrow relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 relative">
          {siteData.projects.map((p, i) => (
            <Feature
              key={i}
              title={p.title}
              description={p.description}
              stat={p.stat}
              statLabel={p.statLabel}
              icon={p.icon}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const Feature = ({
  title,
  description,
  stat,
  statLabel,
  icon,
  index,
}: {
  title: string;
  description: string;
  stat: string;
  statLabel: string;
  icon: string;
  index: number;
}) => {
  const IconComponent = iconMap[icon];
  const total = siteData.projects.length;

  return (
    <div
      className={cn(
        "flex flex-col py-10 px-5 relative group/feature border-b border-white/20",
        index >= total - (total % 3 || 3) && "md:border-b-0",
        index % 3 !== 0 && "md:border-r border-white/20"
      )}
    >
      {/* Top gradient on hover */}
      <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-primary/10 to-transparent pointer-events-none" />

      {/* Bottom gradient on hover */}
      <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute bottom-0 inset-x-0 h-px w-full bg-gradient-to-l from-transparent via-primary to-transparent pointer-events-none" />

      <div className="mb-4 relative z-10 text-muted-foreground group-hover/feature:text-primary transition-colors duration-200">
        {IconComponent && <IconComponent size={32} />}
      </div>

      <div className="relative z-10 mb-2">
        <div className="flex items-baseline gap-2 mb-1">
          <span className="text-3xl font-black text-primary">{stat}</span>
          <span className="text-sm text-primary font-medium">{statLabel}</span>
        </div>
        <h3 className="text-lg font-bold text-secondary">{title}</h3>
      </div>

      <p className="text-sm text-foreground/80 leading-relaxed relative z-10">
        {description}
      </p>
    </div>
  );
};

export default ProjectsSection;
