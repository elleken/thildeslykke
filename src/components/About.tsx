import cillePortrait480 from "@/assets/cille-portrait-480.webp";
import cillePortrait720 from "@/assets/cille-portrait-720.webp";
import cillePortrait900 from "@/assets/cille-portrait-900.webp";

const About = () => {
  return (
    <section id="about" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16 max-w-5xl mx-auto flex flex-col md:flex-row gap-10 items-center">
          <div className="w-full md:w-2/5 flex-shrink-0">
            <div className="rounded-2xl overflow-hidden shadow-medium aspect-[3/4]">
              <img
                src={cillePortrait720}
                srcSet={`${cillePortrait480} 480w, ${cillePortrait720} 720w, ${cillePortrait900} 900w`}
                sizes="(min-width: 768px) 40vw, 90vw"
                alt="Thildes håndlavede smykker"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
          <div className="w-full md:w-3/5 prose prose-lg">
            <p className="text-foreground font-heading text-2xl md:text-3xl font-bold leading-snug mb-6">
              Velkommen til Thildes Lykke, hvor hver smykke er lavet med kærlighed og kreativitet.
            </p>
            <p className="text-foreground/90 leading-relaxed mb-6">
              Jeg elsker at skabe unika smykker, der fortæller en historie og giver dig glæde
              hver dag. Fra armbånde til øreringe og halskæder – alt bliver skabt med øje for
              kvalitet og detaljer.
            </p>
            <p className="text-foreground/90 leading-relaxed mb-6">
              Hver smykke er håndlavet, hvilket betyder, at dit stykke er unik og helt personligt.
              Jeg bruger de bedste materialer og lytter til dine ønsker, så du får præcis det,
              du drømmer om.
            </p>
            <p className="text-foreground/90 leading-relaxed">
              Tak for at være en del af Thildes Lykke! 💍✨
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
