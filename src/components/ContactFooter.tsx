import { useState } from "react";
import { useSiteData } from "@/contexts/SiteDataContext";
import { Phone, Mail, MapPin, Linkedin, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import SectionWatermark from "@/components/SectionWatermark";
import logo from "@/assets/logo-ragid-new.png";
import footerLogo from "@/assets/logo-ragid-new.png";

const inputClass =
  "w-full rounded-2xl bg-card border border-white/10 px-5 py-3 text-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50";

const ContactFooter = () => {
  const siteData = useSiteData();
  const { contact, footer, header } = siteData;

  return (
    <>
      {/* Contact */}
      <section id="contact" className="section-spacing relative overflow-hidden">
        <SectionWatermark text="יצירת קשר" />
        <div className="container-narrow relative z-10">
          <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-stretch mt-10">
            {/* CTA text - left side */}
            <div className="hidden md:flex flex-1 items-center justify-center">
              <div className="text-right space-y-4">
                <h3 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground leading-[1.3]">
                  יש לכם מתקן שחייב
                  <br />
                  לעבוד בלי הפסקה?
                </h3>
                <p className="text-xl lg:text-2xl text-primary font-semibold">דברו איתנו</p>
              </div>
            </div>

            {/* Form - right side */}
            <div className="w-full md:max-w-md">
              <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
                <input type="text" placeholder="שם" className={inputClass} />
                <input type="email" placeholder="מייל *" required className={inputClass} />
                <textarea rows={4} placeholder="פרטי הפניה" className={`${inputClass} resize-none`} />
                <label className="flex items-start gap-3 cursor-pointer text-sm text-foreground/70 leading-relaxed">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="mt-1 h-4 w-4 rounded border-white/20 accent-primary shrink-0"
                  />
                  <span>
                    אני מאשר/ת כי קראתי את{" "}
                    <Link to="/privacy-policy" className="text-primary underline hover:brightness-110">
                      מדיניות הפרטיות
                    </Link>{" "}
                    של החברה, מסכים/ה לעיבוד המידע בהתאם לה ומסכים/ה לקבל מהחברה מידע ועדכונים שיווקיים באמצעי תקשורת שונים.
                  </span>
                </label>
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
          <div className="grid md:grid-cols-2 gap-10 text-secondary-foreground">
            <div>
              <img src={footerLogo} alt="Ragid" className="h-20 mb-4" />
              <ul className="space-y-2 text-sm">
                {header.links.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="opacity-80 hover:opacity-100 transition-opacity">{l.label}</a>
                  </li>
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

          <div className="mt-10 pt-6 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-secondary-foreground/70">
            <span>{footer.copyright}</span>
            <Link to="/privacy-policy" className="hover:text-secondary-foreground transition-colors">
              מדיניות פרטיות
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ContactFooter;
