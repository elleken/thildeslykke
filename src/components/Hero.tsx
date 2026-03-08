import { Phone } from "lucide-react";
import heroImage from "@/assets/hero-salon.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Smuk hårfarve og styling"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4">

        {/* CTA Cards */}
        <div className="w-full max-w-lg px-4 grid grid-cols-2 gap-4">
          {/* Book nu */}
          <div className="bg-white/60 backdrop-blur-md rounded-2xl p-5 flex flex-col items-center text-center shadow-lg">
            <h3 className="text-lg font-heading font-semibold text-foreground mb-1">Book nu</h3>
            <p className="text-sm text-foreground mb-3">Bestil tid nemt online</p>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="w-full py-2.5 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:opacity-90 transition-all uppercase tracking-wide"
            >
              Book nu
            </button>
          </div>

          {/* Ring nu */}
          <div className="bg-white/60 backdrop-blur-md rounded-2xl p-5 flex flex-col items-center text-center shadow-lg">
            <h3 className="text-lg font-heading font-semibold text-foreground mb-1">Ring nu</h3>
            <p className="text-sm text-foreground mb-3">Ring og bestil tid i dag</p>
            <a
              href="tel:+4512345678"
              className="w-full py-2.5 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:opacity-90 transition-all uppercase tracking-wide flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Ring nu
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
