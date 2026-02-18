import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ZoomIn } from "lucide-react";
import beforeAfter1 from "@/assets/before-after-1.jpg";
import ScrollReveal from "@/components/ScrollReveal";
import Lightbox from "@/components/Lightbox";

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filters = [
    { id: "all", label: "All" },
    { id: "luxury", label: "Luxury Cars" },
    { id: "daily", label: "Daily Drives" },
    { id: "suv", label: "SUVs" },
    { id: "bikes", label: "Bikes" },
  ];

  const galleryItems = [
    { id: 1, category: "luxury", image: beforeAfter1, title: "Mercedes-Benz S-Class", description: "Complete detailing with ceramic coating" },
    { id: 2, category: "luxury", image: beforeAfter1, title: "BMW 7 Series", description: "Paint protection film installation" },
    { id: 3, category: "daily", image: beforeAfter1, title: "Honda Accord", description: "Interior deep cleaning & exterior polish" },
    { id: 4, category: "suv", image: beforeAfter1, title: "Range Rover Sport", description: "Full detailing package" },
    { id: 5, category: "luxury", image: beforeAfter1, title: "Porsche 911", description: "Ceramic coating application" },
    { id: 6, category: "bikes", image: beforeAfter1, title: "Harley-Davidson", description: "Complete motorcycle detailing" },
  ];

  const filteredItems =
    activeFilter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  const lightboxImages = filteredItems.map((item) => ({
    src: item.image,
    title: item.title,
    description: item.description,
  }));

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-foreground mb-4 sm:mb-6">
              Our <span className="text-accent">Work</span>
            </h1>
            <p className="text-muted-foreground font-montserrat text-sm sm:text-base lg:text-lg max-w-3xl mx-auto px-4">
              See the transformation. Every detail matters, every finish is perfection.
            </p>
          </div>
        </ScrollReveal>

        {/* Filter Buttons */}
        <ScrollReveal delay={100}>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4 mb-8 sm:mb-10 lg:mb-12 px-2">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                variant={activeFilter === filter.id ? "default" : "outline"}
                className={`font-montserrat font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? "bg-gradient-accent shadow-glow"
                    : "border-border hover:border-accent"
                }`}
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </ScrollReveal>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <ScrollReveal key={item.id} delay={index * 100} direction={index % 2 === 0 ? "up" : "scale"}>
              <div
                className="group relative overflow-hidden rounded-xl bg-card border border-border hover:border-accent transition-all duration-500 cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-poppins font-bold text-foreground mb-1">{item.title}</h3>
                      <p className="text-muted-foreground font-montserrat text-sm">{item.description}</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                      <ZoomIn className="text-accent" size={20} />
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA Section */}
        <ScrollReveal delay={200}>
          <div className="text-center mt-12 sm:mt-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-poppins font-bold text-foreground mb-3 sm:mb-4">
              Ready for Your Transformation?
            </h2>
            <p className="text-muted-foreground font-montserrat text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Book your appointment today and experience the G4 Detailing Studio difference.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-accent font-poppins font-semibold hover:shadow-glow transition-all duration-300"
            >
              <a href="/contact">Schedule Now</a>
            </Button>
          </div>
        </ScrollReveal>
      </div>

      {/* Lightbox */}
      <Lightbox
        images={lightboxImages}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={setLightboxIndex}
      />
    </div>
  );
};

export default Gallery;
