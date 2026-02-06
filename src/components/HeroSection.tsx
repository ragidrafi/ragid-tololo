import { siteData } from "@/data/cms";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const { title, subtitle } = siteData.hero;

  return (
    <section id="hero" className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/70" />
      </div>

      <div className="container-narrow relative z-10 pt-20">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight text-foreground mb-6 animate-fade-up">
          {title}
        </h1>
        <div className="green-line mb-6" />
        <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
          {subtitle}
        </p>
        <a
          href="#contact"
          className="mt-10 inline-block rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground hover:brightness-110 transition-all"
        >
          דברו איתנו
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
