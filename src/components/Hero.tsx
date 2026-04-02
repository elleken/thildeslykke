import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Hero = () => {
  const heroImages = [
    "/thildeslykke/green-star-packaging.jpg",
    "/thildeslykke/purple-pearl-packaging.jpg",
    "/thildeslykke/gold-shell-1.jpg",
    "/thildeslykke/navy-hoops-1.jpg",
    "/thildeslykke/blue-striped-bracelet.jpg",
    "/thildeslykke/rose-quartz-pearl.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Skift billede hver 5. sekund

    return () => clearInterval(interval);
  }, [heroImages.length]);

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? heroImages.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
  };

  return (
    <section
      id="home"
      className="relative flex flex-col overflow-hidden"
      style={{ height: "80vh" }}
    >
      {/* Background Image Carousel */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thildes håndlavede smykker - billede ${index + 1}`}
            decoding="async"
            loading={index === 0 ? "eager" : "lazy"}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Carousel Controls */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all"
        aria-label="Forrige billede"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all"
        aria-label="Næste billede"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentImageIndex ? "bg-white w-8" : "bg-white/50"
            }`}
            aria-label={`Gå til billede ${index + 1}`}
          />
        ))}
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
