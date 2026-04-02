import heroImage768 from "@/assets/hero-salon-768.webp";
import heroImage1280 from "@/assets/hero-salon-1280.webp";
import heroImage1800 from "@/assets/hero-salon-1800.webp";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex flex-col overflow-hidden"
      style={{ height: "80vh" }}
    >
      {/* Background Image - Smykker */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage1280}
          srcSet={`${heroImage768} 768w, ${heroImage1280} 1280w, ${heroImage1800} 1800w`}
          sizes="100vw"
          alt="Thildes håndlavede smykker"
          decoding="async"
          loading="eager"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4">
        {/* Hovedtekst */}
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-4">
            Thildes Lykke
          </h1>
          <p className="text-xl md:text-2xl text-white/90">
            Håndlavede smykker skabt med kærlighed
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
