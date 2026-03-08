import heroImage from "@/assets/hero-salon.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Luxury salon interior with elegant styling stations"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center animate-in fade-in duration-1000">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 text-foreground">
          Cille Lundqvist
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto font-light">
          Hvor Elegance Møder Ekspertise
        </p>
        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
          Oplev professionel hårpleje i moderne, sofistikerede omgivelser. 
          Vores ekspertfrisører bringer din vision til live med præcision og omhu.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-all shadow-medium hover:shadow-lg"
          >
            Læs Vores Historie
          </button>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-4 bg-accent text-accent-foreground rounded-lg font-medium hover:opacity-90 transition-all shadow-soft hover:shadow-medium"
          >
            Kontakt Os
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
