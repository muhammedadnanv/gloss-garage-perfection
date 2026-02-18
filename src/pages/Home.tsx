import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sparkles, Shield, Droplet, Zap } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import ScrollReveal from "@/components/ScrollReveal";
import { useParallax } from "@/hooks/useScrollAnimation";
import heroImage from "@/assets/hero-car.jpg";

const Home = () => {
  const parallaxRef = useParallax(0.3);

  const quickServices = [
    { icon: Shield, title: "Graphene & Ceramic Coating", description: "Advanced protection with hydrophobic properties", priceRange: "Premium" },
    { icon: Sparkles, title: "3M Polishing", description: "Professional-grade paint correction", priceRange: "Premium" },
    { icon: Zap, title: "PPF Coating", description: "Self-healing paint protection film", priceRange: "Premium" },
    { icon: Droplet, title: "Accessories & Seat Covers", description: "Premium car & bike accessories", priceRange: "Varies" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Parallax */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          ref={parallaxRef}
          className="absolute inset-0 bg-cover bg-center will-change-transform"
          style={{ backgroundImage: `url(${heroImage})`, top: "-10%", bottom: "-10%" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-poppins font-bold text-foreground mb-4 sm:mb-6 leading-tight">
            Shine Beyond{" "}
            <span className="text-accent">Factory Finish</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground font-montserrat mb-3 sm:mb-4 px-2">
            Professional Car & Bike Detailing Studio & Accessories Shop
          </p>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground font-montserrat mb-6 sm:mb-8">
            Naduvannur, Calicut | Open 9:30 AM - 7:30 PM
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
              <Link to="/services">View Services</Link>
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
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-premium">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-bold text-foreground mb-3 sm:mb-4">
                Our Services
              </h2>
              <p className="text-muted-foreground font-montserrat text-sm sm:text-base lg:text-lg max-w-2xl mx-auto px-4">
                Professional detailing and premium accessories for cars & bikes
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickServices.map((service, index) => (
              <ScrollReveal key={service.title} delay={index * 120} direction={index % 2 === 0 ? "up" : "scale"}>
                <ServiceCard {...service} />
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={400}>
            <div className="text-center mt-12">
              <Button
                asChild
                size="lg"
                className="bg-gradient-accent font-poppins font-semibold hover:shadow-glow transition-all duration-300"
              >
                <Link to="/services">Explore All Services</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-bold text-foreground mb-4 sm:mb-6">
                Why Choose G4 Detailing Studio?
              </h2>
              <p className="text-muted-foreground font-montserrat text-sm sm:text-base lg:text-lg mb-8 sm:mb-12 px-4">
                Located in Naduvannur, Calicut, we provide expert car & bike detailing with advanced coating technologies, professional polishing, and premium accessories. Every vehicle receives meticulous care.
              </p>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
              {[
                { value: "★★★★★", label: "Customer Rated" },
                { value: "100+", label: "Happy Clients" },
                { value: "9:30-7:30", label: "Open Daily" },
              ].map((stat, i) => (
                <ScrollReveal key={stat.label} delay={i * 150} direction="scale">
                  <div className="p-6">
                    <div className="text-5xl font-poppins font-bold text-accent mb-2">{stat.value}</div>
                    <p className="text-foreground font-montserrat">{stat.label}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
