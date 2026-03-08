import cillePortrait from "@/assets/cille-portrait.jpg";

const About = () => {
  return (
    <section id="about" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Om Mig</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        </div>

        <div className="mb-16 max-w-5xl mx-auto flex flex-col md:flex-row gap-10 items-center">
          <div className="w-full md:w-2/5 flex-shrink-0">
            <div className="rounded-2xl overflow-hidden shadow-medium aspect-[3/4]">
              <img
                src={cillePortrait}
                alt="Cille Lundqvist"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
          <div className="w-full md:w-3/5 prose prose-lg">
            <p className="text-foreground font-heading text-2xl md:text-3xl font-bold leading-snug mb-6">
              Med mere end 20 års erfaring i frisørfaget har jeg opbygget en passion for at skabe hår, der både ser smukt ud og føles sundt.
            </p>
            <p className="text-foreground/90 leading-relaxed mb-6">
              Senest har jeg arbejdet 5 år på Østerbro, hvor fokus altid har været på kvalitet, personlig rådgivning og skræddersyede behandlinger.
            </p>
            <p className="text-foreground/90 leading-relaxed mb-6">
              Hos mig handler en frisørbehandling om mere end bare hår. Det er en oplevelse, hvor der er tid til at finde frem til den stil, der passer perfekt til dig, din personlighed og din hverdag.
            </p>
            <p className="text-foreground/90 leading-relaxed">
              Jeg arbejder med <strong>Natulique</strong>, en eksklusiv og bæredygtig hårplejeserie, der er kendt for sine naturlige ingredienser og skånsomme formuleringer. Produkterne er udviklet med omtanke for både <strong>hår, hovedbund og miljø</strong>, uden at gå på kompromis med resultatet.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;