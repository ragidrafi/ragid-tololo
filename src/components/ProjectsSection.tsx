import { siteData } from "@/data/cms";
import SectionWatermark from "@/components/SectionWatermark";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const images: Record<string, string> = { project1, project2, project3 };

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-spacing relative overflow-hidden">
      <SectionWatermark text="פרויקטים" />
      <div className="container-narrow relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-2">פרויקטים נבחרים</h2>
        <div className="green-line mb-16" />

        <div className="flex flex-col gap-24">
          {siteData.projects.map((p, i) => {
            const isReversed = i % 2 === 1;
            return (
              <div
                key={i}
                className={`flex flex-col md:flex-row items-center gap-10 ${isReversed ? "md:flex-row-reverse" : ""}`}
              >
                <div className="md:w-1/2">
                  <img
                    src={images[p.imageKey]}
                    alt={p.title}
                    className="floating-image w-full h-64 md:h-80 object-cover"
                  />
                </div>
                <div className="md:w-1/2 space-y-4">
                  <h3 className="text-2xl font-bold text-secondary">{p.title}</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-black text-primary">{p.stat}</span>
                    <span className="text-lg text-primary font-medium">{p.statLabel}</span>
                  </div>
                  <p className="text-foreground/80 leading-[1.7]">{p.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
