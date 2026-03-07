import { Scissors, Heart, Award } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Scissors,
      title: "Ekspert Håndværk",
      description: "Vores frisører bringer mange års erfaring og løbende træning for at levere eksceptionelle resultater.",
    },
    {
      icon: Heart,
      title: "Personlig Pleje",
      description: "Vi lytter til dine behov og skaber skræddersyede løsninger, der fremhæver din naturlige skønhed.",
    },
    {
      icon: Award,
      title: "Premium Kvalitet",
      description: "Vi bruger kun de fineste produkter og teknikker for at sikre varige, smukke resultater.",
    },
  ];

  return (
    <section id="about" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
      <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Om Os</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Frisør er mere end bare en frisørsalon—det er en destination {/* original: Karen Werner v. Cille Lundqvist */}
            for dem, der sætter pris på kunsten i raffineret styling og exceptionel service.
          </p>
        </div>

        <div className="mb-16 prose prose-lg max-w-4xl mx-auto">
          <p className="text-foreground/90 leading-relaxed mb-6">
            Grundlagt på principperne om elegance, ekspertise og autenticitet, er vores salon blevet 
            et fristed for klienter, der søger mere end bare en klipning. Vi mener, at hvert besøg skal 
            være en oplevelse—en der efterlader dig selvsikker, forfrisket og virkelig værdsat.
          </p>
          <p className="text-foreground/90 leading-relaxed mb-6">
            Vores hold af dygtige frisører kombinerer traditionelle teknikker med moderne trends og 
            sikrer, at hver behandling er skræddersyet til din unikke stil og præferencer. Fra præcise 
            klipninger til farveomdannelser behandler vi hver detalje med omhu og dedikation.
          </p>
          <p className="text-foreground/90 leading-relaxed">
            Træd ind i vores moderne, indbydende rum, hvor luksus møder komfort. Vi er forpligtet til 
            at bruge bæredygtige produkter af høj kvalitet, der nærer dit hår og samtidig beskytter 
            miljøet. Din tilfredshed er vores prioritet, og vi ser frem til at hjælpe dig med at 
            opnå det look, du altid har ønsket dig.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-lg shadow-soft hover:shadow-medium transition-all duration-300 text-center group"
            >
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors">
                <value.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-4">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
