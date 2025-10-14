import productShampoo from "@/assets/product-shampoo.jpg";
import productStyling from "@/assets/product-styling.jpg";
import productTreatment from "@/assets/product-treatment.jpg";

const Products = () => {
  const products = [
    {
      name: "Premium Shampoo",
      image: productShampoo,
      description: "Mild, nærende formel til alle hårtyper. Renser mens den bevarer naturlig fugtbalance.",
      category: "Hårpleje",
    },
    {
      name: "Styling Kollektion",
      image: productStyling,
      description: "Professionelle stylingprodukter til langtidsholdbar og naturlig glans. Skab ethvert look med lethed.",
      category: "Styling",
    },
    {
      name: "Treatment Serum",
      image: productTreatment,
      description: "Intensiv reparation og beskyttelse. Genskaber vitalitet og tilføjer strålende glans til beskadiget hår.",
      category: "Behandling",
    },
  ];

  return (
    <section id="products" className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
      <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Vores Produkter</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Opdag vores omhyggeligt udvalgte sortiment af premium hårplejeprodukter. 
            Hvert produkt er valgt for sin exceptionelle kvalitet og dokumenterede resultater.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-card rounded-lg overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden bg-secondary/20">
                <img
                  src={product.image}
                  alt={`${product.name} - ${product.description}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span className="text-sm text-accent font-medium tracking-wide uppercase">
                  {product.category}
                </span>
                <h3 className="text-2xl font-heading font-semibold mt-2 mb-3">
                  {product.name}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Alle produkter er tilgængelige til køb i vores salon. Vores frisører kan anbefale 
            de perfekte produkter til din hårtype og stylingbehov.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Products;
