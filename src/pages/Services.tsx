import { Sparkles, Droplet, Shield, Zap, Eye, Car } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";

const Services = () => {
  const services = [
    {
      icon: Sparkles,
      title: "Exterior Detailing",
      description: "Complete exterior wash, clay bar treatment, machine polish, and wax protection. Includes wheels, tires, and trim restoration.",
      priceRange: "$150 - $300",
    },
    {
      icon: Droplet,
      title: "Interior Deep Cleaning",
      description: "Vacuum, steam cleaning, leather conditioning, stain removal, and odor elimination. Every surface meticulously cleaned.",
      priceRange: "$120 - $250",
    },
    {
      icon: Shield,
      title: "Ceramic Coating",
      description: "Professional-grade ceramic coating application providing years of protection with extreme hydrophobic properties.",
      priceRange: "$600 - $1,500",
    },
    {
      icon: Zap,
      title: "Paint Protection Film (PPF)",
      description: "Self-healing clear film installation protecting your vehicle from rock chips, scratches, and environmental damage.",
      priceRange: "$1,200 - $3,000",
    },
    {
      icon: Eye,
      title: "Headlight Restoration",
      description: "Professional headlight polishing and UV protection, restoring clarity and improving nighttime visibility.",
      priceRange: "$80 - $150",
    },
    {
      icon: Car,
      title: "Full Detailing Package",
      description: "Complete interior and exterior detailing package. The ultimate treatment for your vehicle inside and out.",
      priceRange: "$350 - $600",
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
            Professional automotive care tailored to your vehicle's needs. From basic detailing to advanced protection, we deliver excellence in every service.
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
            Not Sure Which Service You Need?
          </h2>
          <p className="text-muted-foreground font-montserrat text-lg mb-8 max-w-2xl mx-auto">
            Contact us for a free consultation. We'll assess your vehicle and recommend the perfect detailing package.
          </p>
          <a
            href="/contact"
            className="inline-block bg-gradient-accent text-primary-foreground px-8 py-4 rounded-lg font-poppins font-semibold hover:shadow-glow transition-all duration-300"
          >
            Get Free Consultation
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;
