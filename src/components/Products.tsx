import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const Products = () => {
  const products = [
    {
      name: "Gold Shell Halskæde",
      images: [
        "/gold-shell-1.jpg",
        "/gold-shell-2.jpg",
        "/gold-shell-worn.jpg",
      ],
      description:
        "Elegant halskæde med en gylden muslingeskal og hvide perler. Sommerklar og tidløs elegance.",
      category: "Halskæde",
    },
    {
      name: "Premium Perledråbeøreringe",
      images: [
        "/pearl-drop-1.jpg",
        "/pearl-drop-2.jpg",
        "/pearl-drop-3.jpg",
      ],
      description:
        "Elegante øreringe med hvide perledråber på guldbelagt kæde. Håndlavet med højeste kvalitet og passion.",
      category: "Øreringe",
    },
    {
      name: "Navy Drop Øreringe",
      images: [
        "/navy-drop-1.jpg",
        "/navy-drop-2.jpg",
      ],
      description:
        "Elegante dråbeøreringe med mørkeblå krystaller på guldbelagt kæde. Moderne og tidløs stil.",
      category: "Øreringe",
    },
    {
      name: "Navy Chandelier Hoops",
      images: [
        "/navy-hoops-1.jpg",
        "/navy-hoops-2.jpg",
        "/navy-hoops-flat.jpg",
      ],
      description:
        "Statement øreringe med mørkeblå krystaller og guldbelagt kæde. Perfekt til begge lejligheder.",
      category: "Øreringe",
    },
    {
      name: "Blue Striped Armbånd",
      images: [
        "/blue-striped-bracelet.jpg",
        "/blue-striped-worn.jpg",
      ],
      description:
        "Stiligt armbånd med blå og hvide striber. Perfekt til daglig brug og meget komfortabelt.",
      category: "Armbånd",
    },
    {
      name: "Grønt Perlearmbånd",
      images: [
        "/green-bracelet.jpg",
      ],
      description:
        "Farverigt armbånd med grønne og hvide perler. Perfekt til daglig brug og sommer.",
      category: "Armbånd",
    },
    {
      name: "Capybara Armbånd",
      images: [
        "/capybara-bracelet.jpg",
      ],
      description:
        "Adorabelt armbånd med capybara charms og blå/grønne striber. Super sødt design!",
      category: "Armbånd",
    },
    {
      name: "Teddy Bear Armbånd",
      images: [
        "/bear-bracelet.jpg",
      ],
      description:
        "Sødt armbånd med teddy bear charm og farvede perler. Perfekt for børn og unge.",
      category: "Armbånd",
    },
    {
      name: "Cowboy Boots Armbånd",
      images: [
        "/boots-bracelet.jpg",
      ],
      description:
        "Statement armbånd med cowboy boots charm og farvede perler. Unikt og sjovt design.",
      category: "Armbånd",
    },
    {
      name: "Gul & Sort Armbånd",
      images: [
        "/yellow-black-bracelet.jpg",
      ],
      description:
        "Stiligt armbånd i gul og sort. Klassisk farvekombination der passer til alt.",
      category: "Armbånd",
    },
    {
      name: "Lys Fersken Armbånd",
      images: [
        "/peach-bracelet.jpg",
      ],
      description:
        "Blidt armbånd i ferskentoner og naturlige perler. Elegant og feminine.",
      category: "Armbånd",
    },
    {
      name: "Butterfly Charm Armbånd",
      images: [
        "/butterfly-bracelet.jpg",
      ],
      description:
        "Flot armbånd med sommerfugl charm og farvede perler. Perfekt som gave.",
      category: "Armbånd",
    },
    {
      name: "Purple & Blue Armbånd",
      images: [
        "/purple-blue-bracelet.jpg",
      ],
      description:
        "Modernt armbånd i lilla og blå nuancer. Perfekt til både casual og dressy.",
      category: "Armbånd",
    },
    {
      name: "Pink 4ever Armbånd",
      images: [
        "/pink-4ever-bracelet.jpg",
      ],
      description:
        "Romantisk armbånd i pink og blå. Stiligt design med guldbelagte detaljer.",
      category: "Armbånd",
    },
    {
      name: "Clay Pink & Blue Armbånd",
      images: [
        "/clay-pink-blue-bracelet.jpg",
      ],
      description:
        "Modernt armbånd med pink og blå clay perler. Fint håndlavet design.",
      category: "Armbånd",
    },
    {
      name: "Purple Pearl Sæt",
      images: [
        "/purple-set-packaging.jpg",
        "/purple-pearl-bracelet.jpg",
        "/purple-set-packaging-2.jpg",
      ],
      description:
        "Elegant sæt med lilla clay perler og hvide perler. Smukke packaging! Perfekt som gave.",
      category: "Armbånd",
    },
    {
      name: "Blue Pearl Sæt",
      images: [
        "/blue-set-packaging.jpg",
        "/blue-pearl-bracelet.jpg",
      ],
      description:
        "Klassisk sæt med blå clay perler og hvide perler. Premium packaging og håndlavet kvalitet.",
      category: "Armbånd",
    },
    {
      name: "Green Star Charm Sæt",
      images: [
        "/green-star-packaging.jpg",
        "/green-star-detail.jpg",
        "/green-star-worn.jpg",
        "/green-star-packaging-2.jpg",
      ],
      description:
        "Elegant armbånd med grøn clay perler og guldstjerne charm. Flot holografisk packaging! Perfekt som gave.",
      category: "Armbånd",
    },
    {
      name: "Rose Quartz Pearl Bracelet",
      images: [
        "/rose-quartz-pearl.jpg",
        "/rose-quartz-worn.jpg",
      ],
      description:
        "Luksus armbånd med rose quartz perler og hvide perler. Kraftigt og smuk! Premium håndlavet.",
      category: "Armbånd",
    },
    {
      name: "Purple Pearl Premium Sæt",
      images: [
        "/purple-pearl-packaging.jpg",
        "/purple-pearl-packaging-2.jpg",
      ],
      description:
        "Eksklusivt sæt med lilla clay perler og hvide perler. Holografisk packaging med fugle design! Helt premium.",
      category: "Armbånd",
    },
    {
      name: "Perle & Safir Kædeøreringe",
      images: [
        "/earrings-1.jpg",
        "/earrings-2.jpg",
        "/earrings-3.jpg",
      ],
      description:
        "Elegante kædeøreringe med hvide perler og mørkeblå safirperler. Håndlavet med højeste kvalitet.",
      category: "Øreringe",
    },
  ];

  // Carousel state for each product
  const [currentImageIndex, setCurrentImageIndex] = useState<Record<number, number>>({});
  
  // Filter state
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxProductIndex, setLightboxProductIndex] = useState<number | null>(null);
  const [lightboxImageIndex, setLightboxImageIndex] = useState(0);
  
  // Get unique categories
  const categories = Array.from(new Set(products.map(p => p.category)));
  
  // Filter products
  const filteredProducts = selectedCategory 
    ? products.filter(p => p.category === selectedCategory)
    : products;
  
  // Lightbox handlers
  const openLightbox = (productIndex: number) => {
    setLightboxProductIndex(productIndex);
    setLightboxImageIndex(0);
    setLightboxOpen(true);
  };
  
  const closeLightbox = () => {
    setLightboxOpen(false);
  };
  
  const goToLightboxPrevious = () => {
    if (lightboxProductIndex !== null) {
      const product = filteredProducts[lightboxProductIndex];
      setLightboxImageIndex((prev) =>
        prev === 0 ? product.images.length - 1 : prev - 1
      );
    }
  };
  
  const goToLightboxNext = () => {
    if (lightboxProductIndex !== null) {
      const product = filteredProducts[lightboxProductIndex];
      setLightboxImageIndex((prev) =>
        prev === product.images.length - 1 ? 0 : prev + 1
      );
    }
  };

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
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                selectedCategory === null
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-foreground hover:bg-secondary/80"
              }`}
            >
              Alle
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-foreground hover:bg-secondary/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => {
            const currentIdx = currentImageIndex[index] || 0;
            const currentImage = product.images[currentIdx];
            const hasMultipleImages = product.images.length > 1;

            const goToPrevious = () => {
              setCurrentImageIndex({
                ...currentImageIndex,
                [index]: currentIdx === 0 ? product.images.length - 1 : currentIdx - 1,
              });
            };

            const goToNext = () => {
              setCurrentImageIndex({
                ...currentImageIndex,
                [index]: currentIdx === product.images.length - 1 ? 0 : currentIdx + 1,
              });
            };

            return (
              <div
                key={index}
                className="group bg-card rounded-lg overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300"
              >
                {/* Carousel Container */}
                <div 
                  className="aspect-square overflow-hidden bg-secondary/20 relative cursor-pointer"
                  onClick={() => openLightbox(filteredProducts.indexOf(product))}
                >
                  <img
                    src={currentImage}
                    alt={`${product.name} - ${product.description}`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Carousel Controls */}
                  {hasMultipleImages && (
                    <>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          goToPrevious();
                        }}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all opacity-0 group-hover:opacity-100"
                        aria-label="Forrige billede"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          goToNext();
                        }}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all opacity-0 group-hover:opacity-100"
                        aria-label="Næste billede"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>

                      {/* Dot Indicators */}
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                        {product.images.map((_, dotIndex) => (
                          <button
                            key={dotIndex}
                            onClick={(e) => {
                              e.stopPropagation();
                              setCurrentImageIndex({ ...currentImageIndex, [index]: dotIndex });
                            }}
                            className={`w-2 h-2 rounded-full transition-all ${
                              dotIndex === currentIdx ? "bg-white w-6" : "bg-white/50"
                            }`}
                            aria-label={`Gå til billede ${dotIndex + 1}`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <span className="text-sm text-primary font-medium tracking-wide uppercase">
                    {product.category}
                  </span>
                  <h3 className="text-lg font-heading font-semibold mt-2 mb-3">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </div>
            );
            })
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-lg text-muted-foreground">
                Ingen produkter fundet i denne kategori.
              </p>
            </div>
          )}
        </div>
      </div>
      
      {/* Lightbox Modal */}
      {lightboxOpen && lightboxProductIndex !== null && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div 
            className="relative bg-card rounded-lg overflow-hidden max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image Container */}
            <div className="aspect-square sm:aspect-video overflow-hidden bg-secondary/20 relative">
              <img
                src={filteredProducts[lightboxProductIndex].images[lightboxImageIndex]}
                alt={`${filteredProducts[lightboxProductIndex].name} - billede ${lightboxImageIndex + 1}`}
                className="w-full h-full object-cover"
              />
              
              {/* Navigation Arrows */}
              {filteredProducts[lightboxProductIndex].images.length > 1 && (
                <>
                  <button
                    onClick={goToLightboxPrevious}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all"
                    aria-label="Forrige billede"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={goToLightboxNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all"
                    aria-label="Næste billede"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>

                  {/* Dot Indicators */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {filteredProducts[lightboxProductIndex].images.map((_, dotIndex) => (
                      <button
                        key={dotIndex}
                        onClick={() => setLightboxImageIndex(dotIndex)}
                        className={`w-3 h-3 rounded-full transition-all ${
                          dotIndex === lightboxImageIndex ? "bg-white w-8" : "bg-white/50"
                        }`}
                        aria-label={`Gå til billede ${dotIndex + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
            
            {/* Product Info in Lightbox */}
            <div className="p-6 bg-card">
              <h3 className="text-2xl font-heading font-semibold mb-2">
                {filteredProducts[lightboxProductIndex].name}
              </h3>
              <p className="text-sm text-primary font-medium tracking-wide uppercase mb-3">
                {filteredProducts[lightboxProductIndex].category}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {filteredProducts[lightboxProductIndex].description}
              </p>
            </div>
            
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
              aria-label="Luk"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Products;
