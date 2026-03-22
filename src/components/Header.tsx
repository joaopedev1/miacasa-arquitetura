import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-miacasa-provided-transparent.png";

const BRIEFING_URL = "https://refresher.com.br/SXpyZXZxMWlMV0c2LzJTU3lETGREdz09/briefing";

const navLinks = [
  { label: "Quem Somos", to: "/empresa" },
  { label: "Projetos", to: "/projetos" },
  { label: "Obras e Reformas", to: "/obras" },
  { label: "Serviços", to: "/servicos" },
  { label: "Contato", to: "/contato" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-24 px-4">
        <Link to="/" className="flex items-center" aria-label="Home">
          <h1 className="h-14 flex items-center">
            {/* Implementação semântica correta com texto escondido para SEO */}
            <span className="sr-only">MIA CASA Arquitetura e Construção</span>
            <img 
              src={logo} 
              alt="MIA CASA Logo" 
              className="h-10 md:h-12 w-auto object-contain" 
            />
          </h1>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium tracking-wide uppercase transition-colors hover:text-primary ${location.pathname === link.to ? "text-primary" : "text-foreground/80"
                }`}
            >
              {link.label}
            </Link>
          ))}
          <Button asChild className="ml-4 rounded-none font-body uppercase tracking-wider text-xs px-6">
            <a href={BRIEFING_URL} target="_blank" rel="noopener noreferrer">
              Faça seu Briefing
            </a>
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-foreground"
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {open && (
        <nav className="md:hidden bg-background border-t border-border pb-6">
          <div className="flex flex-col items-center gap-4 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={`text-sm font-medium tracking-wide uppercase transition-colors hover:text-primary ${location.pathname === link.to ? "text-primary" : "text-foreground/80"
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="rounded-none font-body uppercase tracking-wider text-xs px-6 mt-2">
              <a href={BRIEFING_URL} target="_blank" rel="noopener noreferrer">
                Faça seu Briefing
              </a>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
