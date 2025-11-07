import { useState } from "react";
import { Button } from "@/components/ui/button";
import beforeAfter1 from "@/assets/before-after-1.jpg";

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "All" },
    { id: "luxury", label: "Luxury Cars" },
    { id: "daily", label: "Daily Drives" },
    { id: "suv", label: "SUVs" },
    { id: "bikes", label: "Bikes" },
  ];

  const galleryItems = [
    {
      id: 1,
      category: "luxury",
      image: beforeAfter1,
      title: "Mercedes-Benz S-Class",
      description: "Complete detailing with ceramic coating",
    },
    {
      id: 2,
      category: "luxury",
      image: beforeAfter1,
      title: "BMW 7 Series",
      description: "Paint protection film installation",
    },
    {
      id: 3,
      category: "daily",
      image: beforeAfter1,
      title: "Honda Accord",
      description: "Interior deep cleaning & exterior polish",
    },
    {
      id: 4,
      category: "suv",
      image: beforeAfter1,
      title: "Range Rover Sport",
      description: "Full detailing package",
    },
    {
      id: 5,
      category: "luxury",
      image: beforeAfter1,
      title: "Porsche 911",
      description: "Ceramic coating application",
    },
    {
      id: 6,
      category: "bikes",
      image: beforeAfter1,
      title: "Harley-Davidson",
      description: "Complete motorcycle detailing",
    },
  ];

  const filteredItems =
    activeFilter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-poppins font-bold text-foreground mb-6">
            Our <span className="text-accent">Work</span>
          </h1>
          <p className="text-muted-foreground font-montserrat text-lg max-w-3xl mx-auto">
            See the transformation. Every detail matters, every finish is perfection.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
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

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-xl bg-card border border-border hover:border-accent transition-all duration-500 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <h3 className="text-xl font-poppins font-bold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground font-montserrat">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-4">
            Ready for Your Transformation?
          </h2>
          <p className="text-muted-foreground font-montserrat text-lg mb-8 max-w-2xl mx-auto">
            Book your appointment today and experience the Gloss Garage difference.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-gradient-accent font-poppins font-semibold hover:shadow-glow transition-all duration-300"
          >
            <a href="/contact">Schedule Now</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
