import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImg from "@/assets/logo-cl.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/90 backdrop-blur-sm">
      <nav className="container mx-auto px-4 py-2 flex items-center">
        {/* Left: Logo + mobile menu */}
        <div className="flex items-center gap-2 w-1/3">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-foreground hover:bg-foreground/10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
          <img src={logoImg} alt="CL Logo" className="h-10 md:h-12" />
        </div>

        {/* Center: Name */}
        <div className="w-1/3 text-center">
          <h1 className="text-xl md:text-2xl font-heading text-foreground" style={{ fontStyle: 'italic' }}>
            Cille Lundqvist
          </h1>
        </div>

        {/* Right: Nav + phone */}
        <div className="w-1/3 flex items-center justify-end gap-6">
          {/* Phone icon (mobile) */}
          <a href="tel:+4512345678" className="md:hidden text-foreground">
            <Phone className="w-5 h-5" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-6 items-center">
            <button onClick={() => scrollToSection("home")} className="text-foreground/70 hover:text-foreground transition-colors font-medium text-sm">
              Hjem
            </button>
            <button onClick={() => scrollToSection("about")} className="text-foreground/70 hover:text-foreground transition-colors font-medium text-sm">
              Om Os
            </button>
            <button onClick={() => scrollToSection("products")} className="text-foreground/70 hover:text-foreground transition-colors font-medium text-sm">
              Produkter
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-foreground/70 hover:text-foreground transition-colors font-medium text-sm">
              Kontakt
            </button>
            <a href="tel:+4512345678" className="text-foreground hover:text-foreground/70 transition-colors">
              <Phone className="w-5 h-5" />
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-primary border-t border-foreground/10 animate-in slide-in-from-top duration-200">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <button onClick={() => scrollToSection("home")} className="text-left text-foreground/70 hover:text-foreground transition-colors font-medium py-2">
              Hjem
            </button>
            <button onClick={() => scrollToSection("about")} className="text-left text-foreground/70 hover:text-foreground transition-colors font-medium py-2">
              Om Os
            </button>
            <button onClick={() => scrollToSection("products")} className="text-left text-foreground/70 hover:text-foreground transition-colors font-medium py-2">
              Produkter
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-left text-foreground/70 hover:text-foreground transition-colors font-medium py-2">
              Kontakt
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;