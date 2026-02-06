import { siteData } from "@/data/cms";
import { MessageSquare, PenTool, HardHat, CheckCircle, type LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = { MessageSquare, PenTool, HardHat, CheckCircle };

const ProcessSection = () => {
  return (
    <section className="section-spacing">
      <div className="container-narrow">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-2">תהליך העבודה</h2>
        <div className="green-line mb-12" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {siteData.process.map((p) => {
            const Icon = iconMap[p.icon] || CheckCircle;
            return (
              <div key={p.step} className="floating-card bg-card p-6 text-center flex flex-col items-center gap-4">
                <span className="text-3xl font-black text-primary">{p.step}</span>
                <Icon className="text-primary" size={28} />
                <h4 className="text-sm font-semibold text-foreground">{p.title}</h4>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
