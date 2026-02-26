import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSiteData } from "@/contexts/SiteDataContext";
import SectionWatermark from "./SectionWatermark";

// Import all gallery images
import img1 from "@/assets/gallery/ashalim-alternative.png";
import img2 from "@/assets/gallery/ashalim.png";
import img3 from "@/assets/gallery/dead-sea.png";
import img4 from "@/assets/gallery/desalination.png";
import img5 from "@/assets/gallery/desalination-2.png";
import img6 from "@/assets/gallery/rotem-opc.png";
import img7 from "@/assets/gallery/rotem-2-opc.png";
import img8 from "@/assets/gallery/mrc-power.png";
import img9 from "@/assets/gallery/solar-pv.png";
import img10 from "@/assets/gallery/ashalim-2.png";

const imageMap: Record<number, string> = {
  1: img1, 2: img2, 3: img3, 4: img4, 5: img5,
  6: img6, 7: img7, 8: img8, 9: img9, 10: img10,
};

const GallerySection = () => {
  const { gallery } = useSiteData();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    slidesToScroll: 1,
    containScroll: false,
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  const slides = gallery.length > 0 ? gallery : [];
  if (slides.length === 0) return null;

  return (
    <section id="gallery" className="relative py-20 md:py-32 bg-background overflow-hidden">
      <SectionWatermark text="גלריה" />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="relative">
          {/* Navigation arrows */}
          <button
            onClick={scrollPrev}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-background/80 backdrop-blur border border-border flex items-center justify-center hover:bg-accent transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-background/80 backdrop-blur border border-border flex items-center justify-center hover:bg-accent transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>

          {/* Carousel */}
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex">
              {slides.map((slide, index) => {
                const isActive = index === selectedIndex;
                return (
                  <div
                    key={slide.number}
                    className="flex-[0_0_80%] sm:flex-[0_0_45%] md:flex-[0_0_35%] lg:flex-[0_0_30%] min-w-0 px-2 md:px-3"
                  >
                    <div
                      className={`transition-all duration-500 ease-out ${
                        isActive
                          ? "scale-100 opacity-100"
                          : "scale-[0.8] opacity-40"
                      }`}
                    >
                      <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-muted">
                        <img
                          src={imageMap[slide.number]}
                          alt={slide.text}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 md:p-6">
                          <p className="text-white text-sm md:text-base font-medium text-right">
                            {slide.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === selectedIndex
                    ? "bg-primary w-6"
                    : "bg-muted-foreground/30"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
