const Pricing = () => {
  const categories = [
    {
      title: "Klip",
      services: [
        { name: "Dameklip", price: "525,-" },
        { name: "Herreklip", price: "455,-" },
        { name: "Børneklip (5-12 år)", price: "400,-" },
        { name: "Babyklip (0-2,5 år)", price: "350,-" },
      ],
      note: "Tillæg for langt/tykt hår",
    },
    {
      title: "Striber",
      services: [
        { name: "Top og sider", price: "1.350,-" },
        { name: "Hele hoved – skulder/mellem", price: "1.650,-" },
        { name: "Hele hoved – langt", price: "1.850,-" },
      ],
      note: "Tillæg 200,-",
    },
    {
      title: "Helfarve",
      services: [
        { name: "Bundfarve", price: "550,-" },
        { name: "Kort hår", price: "600,-" },
        { name: "Skulderlængde", price: "995,-" },
        { name: "Langt hår", price: "1.395,-" },
      ],
      note: "Tillæg for tykt hår 100,-",
    },
    {
      title: "Glossing",
      services: [
        { name: "Kort", price: "500,-" },
        { name: "Skulder", price: "600,-" },
        { name: "Langt", price: "700,-" },
      ],
    },
    {
      title: "Balayage",
      services: [
        { name: "Top og sider", price: "1.650,-" },
        { name: "Skulderlængde", price: "1.845,-" },
        { name: "Langt", price: "2.245,-" },
      ],
      note: "Tillæg 200,-",
    },
    {
      title: "Extensions",
      services: [
        { name: "Opsætning", price: "160,-" },
      ],
    },
    {
      title: "Kur",
      services: [
        { name: "Kur", price: "Fra 195,-" },
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
            Alle priser er fra-priser. Kontakt mig for en uforpligtende vurdering af dit hår.
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
                  {category.note && (
                    <p className="text-sm text-muted-foreground italic pt-1">{category.note}</p>
                  )}
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
