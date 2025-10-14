import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Salon Info */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">
              Karen Werner v. Cille Lundqvist
            </h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Din destination for professionel hårpleje og exceptionel service.
            </p>
          </div>

          {/* Location */}
          <div>
            <h4 className="font-heading font-semibold mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-accent" />
              Placering
            </h4>
            <p className="text-primary-foreground/80 leading-relaxed">
              Elegant Gade 123<br />
              København, Danmark<br />
              1234 AB
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold mb-4 flex items-center gap-2">
              <Phone className="w-5 h-5 text-accent" />
              Kontakt
            </h4>
            <div className="space-y-2 text-primary-foreground/80">
              <p>+45 12 34 56 78</p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                info@kwcl-salon.dk
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
              <p>Lørdag: 10:00 - 16:00</p>
              <p>Søndag: Lukket</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} Karen Werner v. Cille Lundqvist. Alle rettigheder forbeholdes.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
