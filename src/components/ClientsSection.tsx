import ctsLogo from "@/assets/clients/cts.png";
import perrigoLogo from "@/assets/clients/perrigo.png";
import phibroLogo from "@/assets/clients/phibro.png";
import shebaLogo from "@/assets/clients/sheba.png";
import tevaLogo from "@/assets/clients/teva.png";
import iclLogo from "@/assets/clients/icl.png";
import daliaLogo from "@/assets/clients/dalia.png";
import ragidLogo from "@/assets/clients/ragid.png";
import ranproLogo from "@/assets/clients/ranpro.png";
import iecLogo from "@/assets/clients/iec.png";
import belectricLogo from "@/assets/clients/belectric.png";
import carlisleLogo from "@/assets/clients/carlisle.png";
import doradLogo from "@/assets/clients/dorad.png";
import electraLogo from "@/assets/clients/electra.png";
import ideLogo from "@/assets/clients/ide.png";
import geVernovaLogo from "@/assets/clients/ge-vernova.png";

const logos = [
  { src: ctsLogo, alt: "CTS" },
  { src: perrigoLogo, alt: "Perrigo" },
  { src: phibroLogo, alt: "Phibro" },
  { src: shebaLogo, alt: "Sheba" },
  { src: tevaLogo, alt: "Teva" },
  { src: iclLogo, alt: "ICL" },
  { src: daliaLogo, alt: "Dalia" },
  { src: ragidLogo, alt: "Ragid" },
  { src: ranproLogo, alt: "Ranpro" },
  { src: iecLogo, alt: "IEC" },
  { src: belectricLogo, alt: "Belectric" },
  { src: carlisleLogo, alt: "Carlisle" },
  { src: doradLogo, alt: "Dorad Energy" },
  { src: electraLogo, alt: "Electra" },
  { src: ideLogo, alt: "IDE Technologies" },
  { src: geVernovaLogo, alt: "GE Vernova" },
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
