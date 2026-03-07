import { useState } from "react";
import { Menu, X } from "lucide-react";
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm shadow-soft">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-xl md:text-2xl font-heading font-bold">
          Frisør {/* original: Karen Werner v. Cille Lundqvist */}
        </h1>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          <button
            onClick={() => scrollToSection("home")}
            className="text-foreground hover:text-accent transition-colors font-medium"
          >
            Hjem
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-foreground hover:text-accent transition-colors font-medium"
          >
            Om Os
          </button>
          <button
            onClick={() => scrollToSection("products")}
            className="text-foreground hover:text-accent transition-colors font-medium"
          >
            Produkter
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-foreground hover:text-accent transition-colors font-medium"
          >
            Kontakt
          </button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </Button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-border shadow-medium animate-in slide-in-from-top duration-200">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("home")}
              className="text-left text-foreground hover:text-accent transition-colors font-medium py-2"
            >
              Hjem
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-left text-foreground hover:text-accent transition-colors font-medium py-2"
            >
              Om Os
            </button>
            <button
              onClick={() => scrollToSection("products")}
              className="text-left text-foreground hover:text-accent transition-colors font-medium py-2"
            >
              Produkter
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-left text-foreground hover:text-accent transition-colors font-medium py-2"
            >
              Kontakt
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
