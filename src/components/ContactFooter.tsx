import { siteData } from "@/data/cms";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactFooter = () => {
  const { contact, footer, header } = siteData;

  return (
    <>
      {/* Contact */}
      <section id="contact" className="section-spacing">
        <div className="container-narrow max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-2">{contact.title}</h2>
          <div className="green-line mb-10" />

          <form
            onSubmit={(e) => e.preventDefault()}
            className="space-y-5"
          >
            <input
              type="text"
              placeholder="שם מלא"
              className="w-full rounded-2xl bg-card border border-white/10 px-5 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <input
              type="email"
              placeholder="אימייל"
              className="w-full rounded-2xl bg-card border border-white/10 px-5 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <textarea
              rows={4}
              placeholder="הודעה"
              className="w-full rounded-2xl bg-card border border-white/10 px-5 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
            />
            <button
              type="submit"
              className="rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground hover:brightness-110 transition-all"
            >
              {contact.buttonText}
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary py-14">
        <div className="container-narrow">
          <div className="grid md:grid-cols-3 gap-10 text-secondary-foreground">
            <div>
              <h4 className="font-bold text-lg mb-4">{footer.col1Title}</h4>
              <ul className="space-y-2 text-sm">
                {header.links.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="opacity-80 hover:opacity-100 transition-opacity">
                      {l.label}
                    </a>
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
