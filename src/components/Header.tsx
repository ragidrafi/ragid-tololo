import { useState } from "react";
import { useSiteData } from "@/contexts/SiteDataContext";
import { Menu, X } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "@/assets/logo-ragid-new.png";

const Header = () => {
  const siteData = useSiteData();
  const { links } = siteData.header;
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent, href: string) => {
    if (href.startsWith("/")) {
      e.preventDefault();
      navigate(href);
    } else if (href.startsWith("#") && location.pathname !== "/") {
      e.preventDefault();
      navigate("/" + href);
    }
  };

  const logoClick = (e: React.MouseEvent) => {
    if (location.pathname !== "/") {
      e.preventDefault();
      navigate("/");
    }
  };

  return (
    <header className="fixed top-0 right-0 left-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
      <div className="container-narrow flex items-center justify-between h-16">
        <nav className="hidden md:flex gap-8 flex-1 justify-center">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={(e) => handleClick(e, l.href)} className="text-lg font-medium text-foreground/80 hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <a href="#hero" onClick={logoClick} className="md:order-last">
          <img src={logo} alt="Ragid" <img src={logo} alt="Ragid" className="h-[4.2rem]" /> />
        </a>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden bg-background/95 backdrop-blur-md border-t border-white/5 px-6 pb-4">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={(e) => { handleClick(e, l.href); setOpen(false); }} className="block py-3 text-base font-medium text-foreground/80 hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
