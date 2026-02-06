import { siteData } from "@/data/cms";
import SectionWatermark from "@/components/SectionWatermark";

const AboutSection = () => {
  const { sections } = siteData.about;

  return (
    <section id="about" className="section-spacing relative overflow-hidden">
      <SectionWatermark text="אודות" />
      <div className="container-narrow max-w-3xl space-y-12 relative z-10">
        {sections.map((s, i) => (
          <div key={i}>
            <h2 className="md:hidden text-2xl font-bold text-secondary mb-2">{s.title}</h2>
            <div className="md:hidden green-line mb-6" />
            {s.paragraphs.map((p, j) => (
              <p key={j} className="text-foreground/80 text-[16px] leading-[1.9] mb-4">{p}</p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
