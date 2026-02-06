import { siteData } from "@/data/cms";

const AboutSection = () => {
  const { sections } = siteData.about;

  return (
    <section id="about" className="section-spacing">
      <div className="container-narrow max-w-3xl space-y-12">
        {sections.map((s, i) => (
          <div key={i}>
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-2">{s.title}</h2>
            <div className="green-line mb-6" />
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
