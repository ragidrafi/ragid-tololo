import { siteData } from "@/data/cms";

const AboutSection = () => {
  const { text, highlights } = siteData.about;

  // Highlight specific terms in green
  let rendered = text;
  highlights.forEach((h) => {
    rendered = rendered.replace(
      h,
      `<span class="text-primary font-bold">${h}</span>`
    );
  });

  return (
    <section id="about" className="section-spacing">
      <div className="container-narrow max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-2">אודות</h2>
        <div className="green-line mb-8" />
        <p
          className="text-lg leading-[1.8] text-foreground/85"
          dangerouslySetInnerHTML={{ __html: rendered }}
        />
      </div>
    </section>
  );
};

export default AboutSection;
