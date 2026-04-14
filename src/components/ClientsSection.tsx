

import ctsLogo from "@/assets/clients/cts.png";
import perrigoLogo from "@/assets/clients/perrigo.png";
import phibroLogo from "@/assets/clients/phibro.png";
import shebaLogo from "@/assets/clients/sheba.png";
import tevaLogo from "@/assets/clients/teva.png";
import iclLogo from "@/assets/clients/icl.png";
import hevratHashmalLogo from "@/assets/clients/hevrat-hashmal.png";
import belectricLogo from "@/assets/clients/belectric.png";
import ragidLogo from "@/assets/clients/ragid.png";
import carlisleLogo from "@/assets/clients/carlisle.png";
import doradLogo from "@/assets/clients/dorad.png";
import ideLogo from "@/assets/clients/ide.png";
import iclNewLogo from "@/assets/clients/icl-new.png";
import geVernovaLogo from "@/assets/clients/ge-vernova.png";
import dalyaLogo from "@/assets/clients/dalya.png";
import alstomLogo from "@/assets/clients/alstom.png";
import mifaleYamLogo from "@/assets/clients/mifale-yam-hamelach.png";
import shikunLogo from "@/assets/clients/shikun-ubinui.png";
import poscoLogo from "@/assets/clients/posco.png";
import siemensEnergyLogo from "@/assets/clients/siemens-energy.png";

const logos = [
  { src: ctsLogo, alt: "CTS" },
  { src: perrigoLogo, alt: "Perrigo" },
  { src: phibroLogo, alt: "Phibro" },
  { src: shebaLogo, alt: "Sheba" },
  { src: tevaLogo, alt: "Teva" },
  { src: iclLogo, alt: "ICL" },
  { src: hevratHashmalLogo, alt: "חברת החשמל" },
  { src: belectricLogo, alt: "Belectric" },
  { src: ragidLogo, alt: "Ragid" },
  { src: carlisleLogo, alt: "Carlisle" },
  { src: doradLogo, alt: "דוראד אנרגיה" },
  { src: ideLogo, alt: "IDE Technologies" },
  { src: iclNewLogo, alt: "ICL" },
  { src: geVernovaLogo, alt: "GE Vernova" },
  { src: dalyaLogo, alt: "דליה" },
  { src: alstomLogo, alt: "Alstom" },
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
