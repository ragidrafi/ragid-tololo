import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import ProcessSection from "@/components/ProcessSection";
import ClientsSection from "@/components/ClientsSection";
import AboutSection from "@/components/AboutSection";
import ContactFooter from "@/components/ContactFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <ProcessSection />
      <ClientsSection />
      <AboutSection />
      <ContactFooter />
    </div>
  );
};

export default Index;
