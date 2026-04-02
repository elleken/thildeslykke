import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-primary text-primary-foreground py-16 px-4"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8">
          <h4 className="font-heading font-semibold mb-6 text-xl">Kontakt</h4>
          <p className="text-primary-foreground/80 mb-4">
            Interesseret i mine smykker? Kontakt mig på Instagram!
          </p>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 mb-8">
          {/* Social Media */}
          <div className="flex justify-center gap-6">
            <a
              href="https://www.instagram.com/thildes_lykke"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground hover:text-accent transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
