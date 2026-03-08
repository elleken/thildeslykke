const Pricing = () => {
  const categories = [
    {
      title: "Klip",
      services: [
        { name: "Dameklip", price: "450 kr" },
        { name: "Herreklip", price: "350 kr" },
        { name: "Børneklip (under 12 år)", price: "250 kr" },
        { name: "Pandeklip / Trimning", price: "150 kr" },
      ],
    },
    {
      title: "Farve",
      services: [
        { name: "Helfarve – kort hår", price: "750 kr" },
        { name: "Helfarve – langt hår", price: "950 kr" },
        { name: "Highlights / Striber", price: "900 kr" },
        { name: "Balayage", price: "1.200 kr" },
        { name: "Toning", price: "500 kr" },
      ],
    },
    {
      title: "Behandlinger",
      services: [
        { name: "Hårkur & pleje", price: "300 kr" },
        { name: "Olaplex behandling", price: "400 kr" },
        { name: "Hovedbundsbehandling", price: "350 kr" },
      ],
    },
    {
      title: "Styling",
      services: [
        { name: "Vask & føn", price: "350 kr" },
        { name: "Festopsætning", price: "600 kr" },
        { name: "Brudestyling", price: "Fra 1.500 kr" },
      ],
    },
  ];

  return (
    <section id="pricing" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Priser</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Alle priser er vejledende. Kontakt mig for en uforpligtende vurdering af dit hår.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-card rounded-lg overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300"
            >
              <div className="p-6">
                <span className="text-sm text-primary font-medium tracking-wide uppercase">
                  {category.title}
                </span>
                <div className="mt-4 space-y-3">
                  {category.services.map((service, sIndex) => (
                    <div key={sIndex} className="flex justify-between items-center">
                      <span className="text-foreground">{service.name}</span>
                      <span className="text-muted-foreground font-medium">{service.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
