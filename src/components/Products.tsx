import productShampoo from "@/assets/product-shampoo.jpg";
import productStyling from "@/assets/product-styling.jpg";

const Products = () => {
  const products = [
    {
      name: "NATULIQUE Colour Shield Hairwash",
      image: productShampoo,
      description: "En mild, certificeret økologisk shampoo der beskytter og vedligeholder farvet hår. Med açaibær, timianekstrakt og silkeprotein, der forsegler hårstrået og sikrer langvarig farve. 95% naturlige ingredienser, uden parabener og silicone.",
      category: "Hårpleje",
    },
    {
      name: "NATULIQUE Colour Shield Conditioner",
      image: productStyling,
      description: "En certificeret økologisk balsam der beskytter farvet hår med tempeltræekstrakt, açaibær og silkeprotein. Forsegler hårstrået, modvirker krus og bevarer farven længere. 95% naturlige ingredienser, uden parabener og silicone.",
      category: "Hårpleje",
    },
  ];

  return (
    <section id="products" className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Produkter</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Jeg arbejder med Natulique – en eksklusiv og bæredygtig hårplejeserie af høj kvalitet.
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
                  alt={`${product.name} - ${product.description}`}
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