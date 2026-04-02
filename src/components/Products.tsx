import productShampoo320 from "@/assets/product-shampoo-320.webp";
import productShampoo580 from "@/assets/product-shampoo-580.webp";
import productStyling320 from "@/assets/product-styling-320.webp";
import productStyling580 from "@/assets/product-styling-580.webp";

const Products = () => {
  const products = [
    {
      name: "Guldbelagt Armbånd",
      image: productShampoo580,
      srcSet: `${productShampoo320} 320w, ${productShampoo580} 580w`,
      description:
        "Et delikat armbånd i guldbelagt sølv. Håndlavet med kærlighed og perfekt til daglig brug eller som et særligt gaveide.",
      category: "Armbånde",
    },
    {
      name: "Minimalistiske Øreringe",
      image: productStyling580,
      srcSet: `${productStyling320} 320w, ${productStyling580} 580w`,
      description:
        "Enkle og elegante øreringe i sølv. Designet for at passe til enhver stil – lige fra klassisk til moderne.",
      category: "Øreringe",
    },
    {
      name: "Perlehalskæde",
      image: productShampoo580,
      srcSet: `${productShampoo320} 320w, ${productShampoo580} 580w`,
      description:
        "En smuk halskæde med hvide ferskvandperler. Tidløs elegance der sætter et fint punkt til ethvert outfit.",
      category: "Halskæder",
    },
    {
      name: "Bohemisk Armbånd",
      image: productStyling580,
      srcSet: `${productStyling320} 320w, ${productStyling580} 580w`,
      description:
        "Et farverigt armbånd med naturlige perler og træ. Inspireret af bohemisk stil – unikt og fuldt af karakter.",
      category: "Armbånde",
    },
  ];

  return (
    <section id="products" className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Mine Smykker
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Hver smykke er håndlavet med omsorg og kreativitet. Udforsk min kollektion af unika stykker.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-card rounded-lg overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden bg-secondary/20">
                <img
                  src={product.image}
                  srcSet={product.srcSet}
                  sizes="(min-width: 1024px) 28vw, (min-width: 768px) 40vw, 88vw"
                  alt={`${product.name} - ${product.description}`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span className="text-sm text-primary font-medium tracking-wide uppercase">
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
      </div>
    </section>
  );
};

export default Products;
