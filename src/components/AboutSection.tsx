import SectionWatermark from "@/components/SectionWatermark";
import { siteData } from "@/data/cms";
import about1 from "@/assets/about-1.png";
import about2 from "@/assets/about-2.png";
import about3 from "@/assets/about-3.png";
import about4 from "@/assets/about-4.png";

const images = [about1, about2, about3, about4];

const rows = siteData.about.sections.map((section, i) => ({
  imageLeft: i % 2 === 1,
  image: images[i],
  title: section.title,
  paragraphs: section.paragraphs,
}));

const AboutSection = () => {
  return (
    <section id="about" className="section-spacing relative overflow-hidden">
      <SectionWatermark text="אודות" />
      <div className="container-narrow max-w-4xl space-y-16 relative z-10">
        {rows.map((row, i) => (
          <div
            key={i}
            className={`flex flex-col md:flex-row items-center gap-8 ${
              row.imageLeft ? "" : "md:flex-row-reverse"
            }`}
          >
            {/* Image */}
            <div className="w-full md:w-1/2 shrink-0">
              <img
                src={row.image}
                alt=""
                className="w-full h-auto rounded-xl object-cover shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] ring-1 ring-white/10 transition-transform duration-300 hover:-translate-y-1"
              />
            </div>

            {/* Text */}
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-bold text-secondary mb-4">{row.title}</h3>
              {row.paragraphs.map((p, j) => (
                <p
                  key={j}
                  className="text-foreground/80 text-lg leading-[1.9] mb-4 last:mb-0"
                >
                  {p}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
