import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sparkles, Shield, Droplet, Zap } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import heroImage from "@/assets/hero-car.jpg";

const Home = () => {
  const quickServices = [
    {
      icon: Sparkles,
      title: "Exterior Detailing",
      description: "Complete exterior wash, polish, and protection",
      priceRange: "$150 - $300",
    },
    {
      icon: Droplet,
      title: "Interior Deep Clean",
      description: "Thorough cleaning and conditioning of all surfaces",
      priceRange: "$120 - $250",
    },
    {
      icon: Shield,
      title: "Ceramic Coating",
      description: "Long-lasting paint protection with hydrophobic layer",
      priceRange: "$600 - $1,500",
    },
    {
      icon: Zap,
      title: "Paint Protection Film",
      description: "Premium PPF installation for ultimate protection",
      priceRange: "$1,200 - $3,000",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-poppins font-bold text-foreground mb-6 leading-tight">
            Detailing That Defines{" "}
            <span className="text-accent">Perfection</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-montserrat mb-8">
            Professional Detailing, Ceramic Coating & Paint Protection
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-accent font-poppins font-semibold text-lg hover:shadow-glow transition-all duration-300"
            >
              <Link to="/contact">Book Your Slot</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-primary-foreground font-poppins font-semibold text-lg transition-all duration-300"
            >
              <Link to="/services">View Packages</Link>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-accent rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-accent rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Quick Services Section */}
      <section className="py-20 bg-gradient-premium">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-foreground mb-4">
              Premium Services
            </h2>
            <p className="text-muted-foreground font-montserrat text-lg max-w-2xl mx-auto">
              Where every drive begins with a shine
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickServices.map((service, index) => (
              <div
                key={service.title}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ServiceCard {...service} />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              className="bg-gradient-accent font-poppins font-semibold hover:shadow-glow transition-all duration-300"
            >
              <Link to="/services">Explore All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-foreground mb-6">
              Why Choose Gloss Garage?
            </h2>
            <p className="text-muted-foreground font-montserrat text-lg mb-12">
              We're passionate about automotive perfection. Every vehicle receives meticulous attention to detail, premium products, and professional care that exceeds expectations.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6">
                <div className="text-5xl font-poppins font-bold text-accent mb-2">5+</div>
                <p className="text-foreground font-montserrat">Years Experience</p>
              </div>
              <div className="p-6">
                <div className="text-5xl font-poppins font-bold text-accent mb-2">500+</div>
                <p className="text-foreground font-montserrat">Happy Clients</p>
              </div>
              <div className="p-6">
                <div className="text-5xl font-poppins font-bold text-accent mb-2">100%</div>
                <p className="text-foreground font-montserrat">Satisfaction Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
