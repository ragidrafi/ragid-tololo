import { siteData } from "@/data/cms";
import { Phone, Mail, MapPin, Linkedin, Globe } from "lucide-react";
import SectionWatermark from "@/components/SectionWatermark";
import logo from "@/assets/logo-ragid.png";

const inputClass =
  "w-full rounded-2xl bg-card border border-white/10 px-5 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50";

const ContactFooter = () => {
  const { contact, footer, header } = siteData;

  return (
    <>
      {/* Contact */}
      <section id="contact" className="section-spacing relative overflow-hidden">
        <div className="container-narrow relative z-10">
          <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-stretch">
            {/* Watermark title - left side */}
            <div className="hidden md:flex flex-1 items-center justify-center">
              <h2 className="text-7xl lg:text-8xl xl:text-9xl font-black text-foreground/[0.08] leading-[1.1] text-right whitespace-pre-line select-none">
                {"יש לכם מתקן\nשחייב לעבוד\nבלי הפסקה?\nדברו איתנו"}
              </h2>
            </div>

            {/* Form - right side */}
            <div className="w-full md:max-w-md">
              <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
                <div className="grid grid-cols-2 gap-5">
                  <input type="text" placeholder="שם מלא" className={inputClass} />
                  <input type="text" placeholder="תפקיד" className={inputClass} />
                </div>
                <div className="grid grid-cols-2 gap-5">
                  <input type="email" placeholder="אימייל" className={inputClass} />
                  <input type="tel" placeholder="נייד" className={inputClass} />
                </div>
                <input type="text" placeholder="פרטי פניה" className={inputClass} />
                <select className={`${inputClass} appearance-none`} defaultValue="">
                  <option value="" disabled>סוג פרויקט</option>
                  <option>תחנת כח</option>
                  <option>מרכז נתונים</option>
                  <option>פארמה/מעבדות</option>
                  <option>בית חולים</option>
                  <option>מתקן תעשייתי</option>
                  <option>אחר</option>
                </select>
                <textarea rows={4} placeholder="הודעה" className={`${inputClass} resize-none`} />
                <button
                  type="submit"
                  className="rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground hover:brightness-110 transition-all"
                >
                  {contact.buttonText}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary py-14">
        <div className="container-narrow">
          <div className="grid md:grid-cols-3 gap-10 text-secondary-foreground">
            <div>
              <img src={logo} alt="Ragid" className="h-10 mb-4 brightness-0 invert" />
              <ul className="space-y-2 text-sm">
                {header.links.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="opacity-80 hover:opacity-100 transition-opacity">{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">{footer.col2Title}</h4>
              <ul className="space-y-2 text-sm">
                {siteData.services.map((s, i) => (
                  <li key={i} className="opacity-80">{s.title}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">{footer.col3Title}</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2 opacity-80">
                  <Phone size={16} /> {footer.phone}
                </li>
                <li className="flex items-center gap-2 opacity-80">
                  <Mail size={16} /> {footer.email}
                </li>
                <li className="flex items-center gap-2 opacity-80">
                  <MapPin size={16} /> {footer.address}
                </li>
              </ul>
              <div className="flex gap-3 mt-5">
                <a
                  href={footer.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-secondary-foreground/20 transition-colors"
                >
                  <Linkedin size={16} />
                </a>
                <a
                  href={footer.pharmaWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-secondary-foreground/20 transition-colors"
                >
                  <Globe size={16} />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-white/20 text-center text-sm text-secondary-foreground/70">
            {footer.copyright}
          </div>
        </div>
      </footer>
    </>
  );
};

export default ContactFooter;
