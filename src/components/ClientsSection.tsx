import { siteData } from "@/data/cms";

const ClientsSection = () => {
  return (
    <section className="section-spacing">
      <div className="container-narrow">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-2">לקוחות</h2>
        <div className="green-line mb-12" />

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
