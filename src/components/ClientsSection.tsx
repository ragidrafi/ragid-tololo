import SectionWatermark from "@/components/SectionWatermark";
import { InfiniteSlider } from "@/components/ui/infinite-slider";

import siemensLogo from "@/assets/clients/siemens.svg";
import poeocLogo from "@/assets/clients/poeoc.svg";
import googleLogo from "@/assets/clients/google.svg";
import iphiroLogo from "@/assets/clients/iphiro.svg";
import shebaLogo from "@/assets/clients/sheba.svg";
import tevaLogo from "@/assets/clients/teva.svg";
import aiclLogo from "@/assets/clients/aicl.svg";
import doubleringLogo from "@/assets/clients/doublering.svg";

const logos = [
  { src: siemensLogo, alt: "Siemens" },
  { src: poeocLogo, alt: "POSCO" },
  { src: googleLogo, alt: "Google" },
  { src: iphiroLogo, alt: "IPHIRO" },
  { src: shebaLogo, alt: "Sheba" },
  { src: tevaLogo, alt: "Teva" },
  { src: aiclLogo, alt: "AICL" },
  { src: doubleringLogo, alt: "Partner" },
];

const ClientsSection = () => {
  return (
    <section className="section-spacing pt-32 relative overflow-hidden">
      <SectionWatermark text="לקוחות" />
      <div className="relative py-8">
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />

        <InfiniteSlider gap={40} duration={25} reverse>
          {logos.map((logo, i) => (
            <img
              key={i}
              src={logo.src}
              alt={logo.alt}
              className="h-20 w-auto object-contain brightness-0 invert opacity-60 hover:opacity-100 transition-opacity"
            />
          ))}
        </InfiniteSlider>
      </div>
    </section>
  );
};

export default ClientsSection;
