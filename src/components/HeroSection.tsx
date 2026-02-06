import { siteData } from "@/data/cms";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const { titleEn, titleHe, body } = siteData.hero;

  return (
    <section id="hero" className="relative min-h-[85vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/70" />
      </div>

      <div className="container-narrow relative z-10 pt-20 space-y-6">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight text-foreground animate-fade-up">
          {titleEn}
        </h1>
        <div className="green-line" />
        <h2 className="text-xl md:text-2xl font-bold text-secondary leading-relaxed max-w-2xl">
          {titleHe}
        </h2>
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl leading-[1.8]">
          {body}
        </p>
        <a
          href="#contact"
          className="mt-4 inline-block rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground hover:brightness-110 transition-all"
        >
          דברו איתנו
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
