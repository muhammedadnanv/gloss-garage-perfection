import { Award, Users, Target, Heart } from "lucide-react";
import interiorImage from "@/assets/interior-detailing.jpg";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We pursue perfection in every detail, never settling for anything less than exceptional.",
    },
    {
      icon: Users,
      title: "Expertise",
      description: "Our certified technicians bring years of professional training and passion to every vehicle.",
    },
    {
      icon: Target,
      title: "Precision",
      description: "Meticulous attention to detail ensures every surface is flawlessly finished.",
    },
    {
      icon: Heart,
      title: "Passion",
      description: "We love cars as much as you do. Your vehicle receives the care it deserves.",
    },
  ];

  const certifications = [
    "Professional Certified Team",
    "Graphene & Ceramic Expertise",
    "3M Authorized Polishing",
    "Premium Accessories Store",
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-poppins font-bold text-foreground mb-6">
            About <span className="text-accent">G4 Detailing Studio</span>
          </h1>
          <p className="text-muted-foreground font-montserrat text-lg max-w-3xl mx-auto">
            Your trusted destination for premium car & bike detailing and accessories in Calicut
          </p>
        </div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-6">
              Our Story
            </h2>
            <p className="text-muted-foreground font-montserrat text-lg mb-4">
              Located in Naduvannur, Calicut, G4 Detailing Studio is your one-stop destination for professional car and bike detailing combined with a premium accessories shop. We specialize in advanced coating technologies, precision polishing, and custom styling solutions.
            </p>
            <p className="text-muted-foreground font-montserrat text-lg mb-4">
              Our team brings expertise in graphene and ceramic coating, 3M polishing techniques, PPF installation, and custom vinyl work. We're committed to delivering results that go beyond factory finish, ensuring your vehicle looks showroom-ready every day.
            </p>
            <p className="text-muted-foreground font-montserrat text-lg">
              Whether you need advanced paint protection, interior enhancement, or premium accessories, G4 Detailing Studio combines quality products, skilled craftsmanship, and customer satisfaction in every service we provide.
            </p>
          </div>
          <div className="animate-slide-in-right">
            <img
              src={interiorImage}
              alt="Professional detailing in action"
              className="rounded-2xl shadow-premium border border-border w-full"
            />
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground text-center mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="bg-card border border-border rounded-xl p-6 text-center hover:border-accent transition-all duration-500 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-shine rounded-lg flex items-center justify-center mx-auto mb-4">
                  <value.icon className="text-accent" size={32} />
                </div>
                <h3 className="text-xl font-poppins font-bold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground font-montserrat">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-gradient-premium rounded-2xl p-12 border border-border">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground text-center mb-8">
            Certified & Trusted
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={cert}
                className="bg-card/50 rounded-lg p-6 text-center border border-border animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <p className="font-montserrat font-semibold text-foreground">{cert}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-4">
            Visit Us Today
          </h2>
          <p className="text-muted-foreground font-montserrat text-lg mb-8 max-w-2xl mx-auto">
            Experience premium car & bike detailing and explore our accessories shop near Register Office, Naduvannur, Calicut.
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

export default About;
