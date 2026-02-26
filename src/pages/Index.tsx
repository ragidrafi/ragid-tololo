import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import GallerySection from "@/components/GallerySection";
import ProcessSection from "@/components/ProcessSection";
import ClientsSection from "@/components/ClientsSection";
import AboutSection from "@/components/AboutSection";
import ContactFooter from "@/components/ContactFooter";
import { useSheetData } from "@/hooks/useSheetData";
import { SiteDataProvider } from "@/contexts/SiteDataContext";

const Index = () => {
  const data = useSheetData();

  return (
    <SiteDataProvider value={data}>
      <div className="min-h-screen bg-background">
        <Header />
        <HeroSection />
        <ServicesSection />
        <ProjectsSection />
        <GallerySection />
        <ProcessSection />
        <ClientsSection />
        <AboutSection />
        <ContactFooter />
      </div>
    </SiteDataProvider>
  );
};

export default Index;
