import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import hero1 from "@/assets/hero/hero-1.jpg";
import hero2 from "@/assets/hero/hero-2.jpg";
import hero3 from "@/assets/hero/hero-3.jpg";
import hero4 from "@/assets/hero/hero-4.jpg";
import hero5 from "@/assets/hero/hero-5.jpg";
import hero6 from "@/assets/hero/hero-6.jpg";

const images = [hero1, hero2, hero3, hero4, hero5, hero6];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % images.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(next, 5500);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <section id="hero" className="relative min-h-[85vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
            style={{ opacity: i === current ? 1 : 0 }}
          />
        ))}
        <div className="absolute inset-0 bg-background/80" />
      </div>

      <div className="container-narrow relative z-10 pt-20 space-y-6 text-center">
        <h1 className="font-black text-3xl md:text-4xl lg:text-5xl leading-relaxed text-white animate-fade-up" dir="rtl">
          <span className="block">הרצה והפעלה של תחנות כוח, מתקני אנרגיה,</span>
          <span className="block">דאטה־סנטרים ומתקנים תעשייתיים כבדים.</span>
          <span className="block">צוותי הרצה ותפעול מקומיים ובינ״ל,</span>
          <span className="block">זמינות 24/7.</span>
        </h1>
        <div className="green-line mx-auto" />
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
