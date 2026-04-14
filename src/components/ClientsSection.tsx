import ctsLogo from "@/assets/clients/cts.png";
import perrigoLogo from "@/assets/clients/perrigo.png";
import phibroLogo from "@/assets/clients/phibro.png";
import shebaLogo from "@/assets/clients/sheba.svg";
import tevaLogo from "@/assets/clients/teva.svg";
import iclLogo from "@/assets/clients/icl.png";
import aiclLogo from "@/assets/clients/aicl.svg";
import doubleringLogo from "@/assets/clients/doublering.svg";
import googleLogo from "@/assets/clients/google.svg";
import iphiroLogo from "@/assets/clients/iphiro.svg";
import poeocLogo from "@/assets/clients/poeoc.svg";
import siemensLogo from "@/assets/clients/siemens.svg";

const logos = [
  { src: ctsLogo, alt: "CTS" },
  { src: perrigoLogo, alt: "Perrigo" },
  { src: phibroLogo, alt: "Phibro" },
  { src: shebaLogo, alt: "Sheba" },
  { src: tevaLogo, alt: "Teva" },
  { src: iclLogo, alt: "ICL" },
  { src: aiclLogo, alt: "AICL" },
  { src: doubleringLogo, alt: "Double Ring" },
  { src: googleLogo, alt: "Google" },
  { src: iphiroLogo, alt: "Iphiro" },
  { src: poeocLogo, alt: "POEOC" },
  { src: siemensLogo, alt: "Siemens" },
];

const ClientsSection = () => {
  return (
    <section className="relative overflow-hidden pb-16">
      <div className="relative py-8 mt-10">
        <div className="absolute inset-0 bg-white/[0.04] rounded-2xl" />

        {/* Desktop: centered wrap */}
        <div className="hidden md:flex items-center justify-center gap-16 flex-wrap px-8">
          {logos.map((logo, i) => (
            <img
              key={i}
              src={logo.src}
              alt={logo.alt}
              className="h-24 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
            />
          ))}
        </div>

        {/* Mobile: infinite scroll marquee */}
        <div className="md:hidden overflow-hidden px-0" dir="ltr">
          <div className="flex items-center gap-10 animate-marquee w-max">
            {[...logos, ...logos].map((logo, i) => (
              <img
                key={i}
                src={logo.src}
                alt={logo.alt}
                className="h-20 w-auto object-contain opacity-70 flex-shrink-0"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
