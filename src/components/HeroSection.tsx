import { Button } from "@/components/ui/button";

const HeroSection = () => {
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
          We run and operate energy facilities — reliably, safely, from day 1.
        </h1>
        <div className="green-line mx-auto" />
        <h2 className="text-2xl md:text-3xl font-bold text-secondary leading-relaxed max-w-3xl mx-auto">
          הרצה והפעלה של תחנות כוח, מתקני אנרגיה, דטה־סנטרים ומתקנים תעשייתיים כבדים. צוותי הרצה ותפעול מקומיים ובינ״ל, זמינות 24/7.
        </h2>
        <div className="pt-4">
          <Button
            size="lg"
            className="text-lg px-10"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            צרו קשר
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
