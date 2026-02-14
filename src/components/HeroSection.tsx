import { useSiteData } from "@/contexts/SiteDataContext";

const HeroSection = () => {
  const siteData = useSiteData();
  const { titleEn1, titleEn2, titleHe1, titleHe2, body } = siteData.hero;

  return (
    <section id="hero" className="relative min-h-[85vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <video
          src="/videos/hero-bg.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/80" />
      </div>

      <div className="container-narrow relative z-10 pt-20 space-y-6 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight text-foreground animate-fade-up">
          {titleEn1}
          <br />
          {titleEn2}
        </h1>
        <div className="green-line mx-auto" />
        <h2 className="text-2xl md:text-3xl font-bold text-secondary leading-relaxed max-w-3xl mx-auto">
          {titleHe1}
          <br />
          {titleHe2}
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-[1.8]">
          {body}
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
