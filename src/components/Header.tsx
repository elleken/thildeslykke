import { useState, useEffect, useRef } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isMenuOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (
        menuRef.current && !menuRef.current.contains(e.target as Node) &&
        buttonRef.current && !buttonRef.current.contains(e.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background backdrop-blur-sm shadow-soft">
      <nav className="container mx-auto px-4 py-2 flex items-center">
        {/* Left: Mobile menu */}
        <div className="flex items-center gap-2 w-1/3">
          <Button
            ref={buttonRef}
            variant="ghost"
            size="icon"
            className="md:hidden text-foreground hover:bg-foreground/10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Center: Name */}
        <div className="w-1/3 text-center">
          <h1 className="text-xl md:text-2xl font-heading text-foreground" style={{ fontStyle: 'italic' }}>
            Thildes Lykke
          </h1>
        </div>

        {/* Right: Desktop nav */}
        <div className="w-1/3 flex items-center justify-end gap-6">
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-6 items-center">
            <a href="#home" className="text-foreground hover:text-foreground/70 transition-colors font-bold text-sm">
              Hjem
            </a>
            <a href="#about" className="text-foreground hover:text-foreground/70 transition-colors font-bold text-sm">
              Om Mig
            </a>
            <a href="#products" className="text-foreground hover:text-foreground/70 transition-colors font-bold text-sm">
              Smykker
            </a>
            <a href="#contact" className="text-foreground hover:text-foreground/70 transition-colors font-bold text-sm">
              Kontakt
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div ref={menuRef} className="md:hidden bg-background border-t border-foreground/10 animate-in slide-in-from-top duration-200">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <a href="#home" onClick={() => setIsMenuOpen(false)} className="text-left text-foreground/70 hover:text-foreground transition-colors font-medium py-2">
              Hjem
            </a>
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-left text-foreground/70 hover:text-foreground transition-colors font-medium py-2">
              Om Mig
            </a>
            <a href="#products" onClick={() => setIsMenuOpen(false)} className="text-left text-foreground/70 hover:text-foreground transition-colors font-medium py-2">
              Smykker
            </a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-left text-foreground/70 hover:text-foreground transition-colors font-medium py-2">
              Kontakt
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;