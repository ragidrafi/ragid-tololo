import { siteData } from "@/data/cms";
import SectionWatermark from "@/components/SectionWatermark";

const ClientsSection = () => {
  return (
    <section className="section-spacing relative overflow-hidden">
      <SectionWatermark text="לקוחות" />
      <div className="container-narrow relative z-10">

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {siteData.clients.map((name, i) => (
            <div
              key={i}
              className="floating-card bg-card/50 flex items-center justify-center h-24 text-foreground/60 font-semibold text-lg"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
