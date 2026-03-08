import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

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
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-primary-foreground hover:bg-primary-foreground/10"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </Button>

        {/* Logo */}
        <h1 className="text-xl md:text-2xl font-heading text-primary-foreground" style={{ fontStyle: 'italic' }}>
          Cille Lundqvist
        </h1>

        {/* Phone icon (mobile) */}
        <a href="tel:+4512345678" className="md:hidden text-primary-foreground">
          <Phone className="w-5 h-5" />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          <button
            onClick={() => scrollToSection("home")}
            className="text-primary-foreground/80 hover:text-primary-foreground transition-colors font-medium"
          >
            Hjem
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-primary-foreground/80 hover:text-primary-foreground transition-colors font-medium"
          >
            Om Os
          </button>
          <button
            onClick={() => scrollToSection("products")}
            className="text-primary-foreground/80 hover:text-primary-foreground transition-colors font-medium"
          >
            Produkter
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-primary-foreground/80 hover:text-primary-foreground transition-colors font-medium"
          >
            Kontakt
          </button>
          <a href="tel:+4512345678" className="text-primary-foreground hover:text-primary-foreground/80 transition-colors">
            <Phone className="w-5 h-5" />
          </a>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-primary border-t border-primary-foreground/20 animate-in slide-in-from-top duration-200">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <button onClick={() => scrollToSection("home")} className="text-left text-primary-foreground/80 hover:text-primary-foreground transition-colors font-medium py-2">
              Hjem
            </button>
            <button onClick={() => scrollToSection("about")} className="text-left text-primary-foreground/80 hover:text-primary-foreground transition-colors font-medium py-2">
              Om Os
            </button>
            <button onClick={() => scrollToSection("products")} className="text-left text-primary-foreground/80 hover:text-primary-foreground transition-colors font-medium py-2">
              Produkter
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-left text-primary-foreground/80 hover:text-primary-foreground transition-colors font-medium py-2">
              Kontakt
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
