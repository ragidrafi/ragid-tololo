import { projectsData } from "@/data/projects";
import Header from "@/components/Header";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useSheetData } from "@/hooks/useSheetData";
import { SiteDataProvider } from "@/contexts/SiteDataContext";
import React from "react";

const ProjectsPageContent = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Header />
      <div className="pt-24 pb-16 container-narrow">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8 text-sm font-medium"
        >
          <ArrowRight size={18} />
          חזרה לעמוד הראשי
        </Link>

        <h1 className="text-3xl md:text-4xl font-black text-foreground mb-12">
          הפרויקטים שלנו
        </h1>

        <div className="flex flex-col gap-12">
          {projectsData.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="rounded-xl border border-border bg-card overflow-hidden"
            >
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6 md:p-8">
                <h2 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                  {project.title}
                </h2>
                <p className="font-bold text-primary mb-4">{project.subtitle}</p>
                <p className="text-foreground/80 leading-relaxed whitespace-pre-line">
                  {project.text}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const data = useSheetData();
  return (
    <SiteDataProvider value={data}>
      <ProjectsPageContent />
    </SiteDataProvider>
  );
};

export default Projects;
