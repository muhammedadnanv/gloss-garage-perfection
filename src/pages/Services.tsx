import { Sparkles, Droplet, Shield, Zap, Eye, Car } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import ScrollReveal from "@/components/ScrollReveal";

const Services = () => {
  const services = [
    { icon: Shield, title: "Graphene & Ceramic Coating", description: "Advanced nano-coating technology providing superior hydrophobic protection, UV resistance, and long-lasting shine for both cars and bikes.", priceRange: "Contact for Quote" },
    { icon: Sparkles, title: "3M Polishing", description: "Professional-grade 3M compound polishing to remove scratches, swirl marks, and oxidation. Restores original paint depth and gloss.", priceRange: "Contact for Quote" },
    { icon: Zap, title: "PPF Coating", description: "Premium Paint Protection Film installation with self-healing properties. Protects against rock chips, scratches, and environmental damage.", priceRange: "Contact for Quote" },
    { icon: Car, title: "Premium Seat Covers", description: "Custom-fit premium seat covers in various materials and designs. Protects original upholstery while adding luxury and comfort.", priceRange: "Contact for Quote" },
    { icon: Droplet, title: "Car & Bike Accessories", description: "Wide range of premium accessories including mats, perfumes, cleaning products, LED lights, and performance upgrades.", priceRange: "Shop Visit" },
    { icon: Eye, title: "Custom Sticker Works", description: "Professional vinyl wrapping and custom sticker application. From racing stripes to full body graphics for personalized styling.", priceRange: "Contact for Quote" },
  ];

  return (
    <div className="min-h-screen pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-foreground mb-4 sm:mb-6">
              Our <span className="text-accent">Services</span>
            </h1>
            <p className="text-muted-foreground font-montserrat text-sm sm:text-base lg:text-lg max-w-3xl mx-auto px-4">
              Professional car and bike detailing with premium accessories. From graphene coating to custom stickers, we deliver excellence in every service.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} delay={index * 100} direction={index % 3 === 1 ? "scale" : "up"}>
              <ServiceCard {...service} />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal direction="scale">
          <div className="bg-gradient-premium rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 text-center border border-border">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-poppins font-bold text-foreground mb-3 sm:mb-4">
              Visit Our Studio or Call Us
            </h2>
            <p className="text-muted-foreground font-montserrat text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Located near Register Office, Naduvannur, Calicut. Open 9:30 AM to 7:30 PM. Contact us for quotes and bookings.
            </p>
            <a
              href="/contact"
              className="inline-block bg-gradient-accent text-primary-foreground px-8 py-4 rounded-lg font-poppins font-semibold hover:shadow-glow transition-all duration-300"
            >
              Contact Us Now
            </a>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default Services;
