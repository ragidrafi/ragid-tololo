import { useSiteData } from "@/contexts/SiteDataContext";
import SectionWatermark from "@/components/SectionWatermark";
import { Zap, Droplets, Settings, Briefcase, Factory } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { projectsData } from "@/data/projects";

const iconMap: Record<string, LucideIcon> = {
  Zap,
  Droplets,
  Settings,
  Briefcase,
  Factory,
};

const ProjectsSection = () => {
  const firstProject = projectsData[0];

  return (
    <section id="projects" className="section-spacing relative overflow-hidden">
      <SectionWatermark text="פרויקטים" />
      <div className="container-narrow relative z-10">
        <div className="flex flex-col gap-4 mt-8">
          {/* Show only the first project as a preview card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-xl border border-border bg-card overflow-hidden hover:border-primary/50 transition-colors"
          >
            <div className="aspect-video w-full overflow-hidden">
              <img
                src={firstProject.image}
                alt={firstProject.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-5" dir="rtl">
              <h3 className="font-bold text-secondary text-lg">{firstProject.title}</h3>
              <p className="font-bold text-primary text-sm mt-1">{firstProject.subtitle}</p>
              <p className="text-sm text-foreground/80 leading-relaxed mt-2 line-clamp-3">
                {firstProject.text}
              </p>
            </div>
          </motion.div>

          {/* Button to all projects */}
          <div className="flex justify-center mt-4">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              לכל הפרויקטים
              <ArrowLeft size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
