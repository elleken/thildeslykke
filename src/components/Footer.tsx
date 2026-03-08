import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">

          {/* Location */}
          <div>
            <h4 className="font-heading font-semibold mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-accent" />
              Placering
            </h4>
            <a 
              href="https://maps.google.com/?q=Strandvejen+72,+Hellerup+2900,+Denmark"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/80 hover:text-accent transition-colors leading-relaxed"
            >
              Strandvejen 72<br />
              Hellerup 2900
            </a>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold mb-4 flex items-center gap-2">
              <Phone className="w-5 h-5 text-accent" />
              Kontakt
            </h4>
            <div className="space-y-2 text-primary-foreground/80">
              <p>
                <a href="tel:+4531213201" className="hover:text-accent transition-colors">
                  +45 31 21 32 01
                </a>
              </p>
              <p>
                <a href="mailto:cillelundqvist@gmail.com" className="hover:text-accent transition-colors">
                  cillelundqvist@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-heading font-semibold mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5 text-accent" />
              Åbningstider
            </h4>
            <div className="space-y-2 text-primary-foreground/80">
              <p>Man - Fre: 9:00 - 18:00</p>
              <p>Lørdag: 09:00 - 13:00 eller efter aftale</p>
              <p>Søndag: Lukket</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 mb-8">
          {/* Social Media */}
          <div className="flex justify-center gap-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground hover:text-accent transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground hover:text-accent transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
