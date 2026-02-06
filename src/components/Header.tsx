import { useState } from "react";
import { siteData } from "@/data/cms";
import { Menu, X } from "lucide-react";

const Header = () => {
  const { logo, links } = siteData.header;
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 right-0 left-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
      <div className="container-narrow flex items-center justify-between h-16">
        <a href="#hero" className="text-xl font-bold text-secondary">
          {logo}
        </a>

        {/* Desktop */}
        <nav className="hidden md:flex gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="md:hidden bg-background/95 backdrop-blur-md border-t border-white/5 px-6 pb-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
