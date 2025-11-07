import { Sparkles, Droplet, Shield, Zap, Eye, Car } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: "Graphene & Ceramic Coating",
      description: "Advanced nano-coating technology providing superior hydrophobic protection, UV resistance, and long-lasting shine for both cars and bikes.",
      priceRange: "Contact for Quote",
    },
    {
      icon: Sparkles,
      title: "3M Polishing",
      description: "Professional-grade 3M compound polishing to remove scratches, swirl marks, and oxidation. Restores original paint depth and gloss.",
      priceRange: "Contact for Quote",
    },
    {
      icon: Zap,
      title: "PPF Coating",
      description: "Premium Paint Protection Film installation with self-healing properties. Protects against rock chips, scratches, and environmental damage.",
      priceRange: "Contact for Quote",
    },
    {
      icon: Car,
      title: "Premium Seat Covers",
      description: "Custom-fit premium seat covers in various materials and designs. Protects original upholstery while adding luxury and comfort.",
      priceRange: "Contact for Quote",
    },
    {
      icon: Droplet,
      title: "Car & Bike Accessories",
      description: "Wide range of premium accessories including mats, perfumes, cleaning products, LED lights, and performance upgrades.",
      priceRange: "Shop Visit",
    },
    {
      icon: Eye,
      title: "Custom Sticker Works",
      description: "Professional vinyl wrapping and custom sticker application. From racing stripes to full body graphics for personalized styling.",
      priceRange: "Contact for Quote",
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-poppins font-bold text-foreground mb-6">
            Our <span className="text-accent">Services</span>
          </h1>
          <p className="text-muted-foreground font-montserrat text-lg max-w-3xl mx-auto">
            Professional car and bike detailing with premium accessories. From graphene coating to custom stickers, we deliver excellence in every service.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ServiceCard {...service} />
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-premium rounded-2xl p-12 text-center border border-border">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-4">
            Visit Our Studio or Call Us
          </h2>
          <p className="text-muted-foreground font-montserrat text-lg mb-8 max-w-2xl mx-auto">
            Located near Register Office, Naduvannur, Calicut. Open 9:30 AM to 7:30 PM. Contact us for quotes and bookings.
          </p>
          <a
            href="/contact"
            className="inline-block bg-gradient-accent text-primary-foreground px-8 py-4 rounded-lg font-poppins font-semibold hover:shadow-glow transition-all duration-300"
          >
            Contact Us Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;
