import { useSiteData } from "@/contexts/SiteDataContext";
import SectionWatermark from "./SectionWatermark";
import ThumbnailCarousel, { type CarouselItem } from "./ui/thumbnail-carousel";

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

  const slides = gallery.length > 0 ? gallery : [];
  if (slides.length === 0) return null;

  const items: CarouselItem[] = slides.map((slide) => ({
    id: slide.number,
    url: imageMap[slide.number] || "",
    title: slide.text,
  }));

  return (
    <section id="gallery" className="relative py-20 md:py-32 bg-background overflow-hidden">
      <SectionWatermark text="גלריה" />
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <ThumbnailCarousel items={items} />
      </div>
    </section>
  );
};

export default GallerySection;
