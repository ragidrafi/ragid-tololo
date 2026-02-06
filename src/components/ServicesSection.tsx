import { siteData } from "@/data/cms";
import { Building2, Route, Droplets, type LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = { Building2, Route, Droplets };

const ServicesSection = () => {
  return (
    <section id="services" className="section-spacing">
      <div className="container-narrow">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-2">השירותים שלנו</h2>
        <div className="green-line mb-12" />

        <div className="grid md:grid-cols-3 gap-8">
          {siteData.services.map((s, i) => {
            const Icon = iconMap[s.icon] || Building2;
            return (
              <div key={i} className="floating-card bg-card p-8 flex flex-col gap-5">
                <Icon className="text-primary" size={36} />
                <h3 className="text-xl font-bold text-secondary leading-relaxed">{s.title}</h3>
                <p className="text-foreground/80 leading-[1.7] text-[15px]">{s.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
