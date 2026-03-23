import SectionWatermark from "@/components/SectionWatermark";

import ctsLogo from "@/assets/clients/cts.png";
import perrigoLogo from "@/assets/clients/perrigo.png";
import phibroLogo from "@/assets/clients/phibro.png";
import shebaLogo from "@/assets/clients/sheba.png";
import tevaLogo from "@/assets/clients/teva.png";
import iclLogo from "@/assets/clients/icl.png";

const logos = [
  { src: ctsLogo, alt: "CTS" },
  { src: perrigoLogo, alt: "Perrigo" },
  { src: phibroLogo, alt: "Phibro" },
  { src: shebaLogo, alt: "Sheba" },
  { src: tevaLogo, alt: "Teva" },
  { src: iclLogo, alt: "ICL" },
];

const ClientsSection = () => {
  return (
    <section className="section-spacing relative overflow-hidden">
      <SectionWatermark text="לקוחות" />
      <div className="relative py-8 mt-10">
        <div className="absolute inset-0 bg-white/[0.04] rounded-2xl" />
        <div className="flex items-center justify-center gap-12 md:gap-16 flex-wrap px-8">
          {logos.map((logo, i) => (
            <img
              key={i}
              src={logo.src}
              alt={logo.alt}
              className="h-16 w-auto object-contain brightness-0 invert opacity-60 hover:opacity-100 transition-opacity"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
