import SectionWatermark from "@/components/SectionWatermark";

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
    <section className="section-spacing relative overflow-hidden">
      <SectionWatermark text="לקוחות" />
      <div className="relative overflow-hidden py-8">
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />

        {/* Marquee: two identical rows side-by-side */}
        <div className="flex animate-marquee">
          {[0, 1].map((copy) => (
            <div
              key={copy}
              className="flex min-w-full shrink-0 items-center justify-around gap-20"
            >
              {logos.map((logo, i) => (
                <img
                  key={i}
                  src={logo.src}
                  alt={logo.alt}
                  className="h-20 w-auto object-contain brightness-0 invert opacity-60 hover:opacity-100 transition-opacity"
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
