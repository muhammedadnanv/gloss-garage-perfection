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
    "IDA Certified Detailers",
    "Ceramic Pro Certified Installers",
    "XPEL Paint Protection Film",
    "3M Authorized Dealer",
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-poppins font-bold text-foreground mb-6">
            About <span className="text-accent">Gloss Garage</span>
          </h1>
          <p className="text-muted-foreground font-montserrat text-lg max-w-3xl mx-auto">
            Where passion meets precision in automotive care
          </p>
        </div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-6">
              Our Story
            </h2>
            <p className="text-muted-foreground font-montserrat text-lg mb-4">
              Founded in 2019, Gloss Garage began with a simple mission: to redefine automotive detailing through uncompromising quality and passionate craftsmanship.
            </p>
            <p className="text-muted-foreground font-montserrat text-lg mb-4">
              What started as a small operation has grown into a premier detailing studio, trusted by luxury car owners and automotive enthusiasts across the region.
            </p>
            <p className="text-muted-foreground font-montserrat text-lg">
              Today, we combine cutting-edge technology with traditional hand-finishing techniques to deliver results that exceed expectations. Every vehicle that leaves our studio is a testament to our commitment to excellence.
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
            Experience the Difference
          </h2>
          <p className="text-muted-foreground font-montserrat text-lg mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who trust Gloss Garage with their prized vehicles.
          </p>
          <a
            href="/contact"
            className="inline-block bg-gradient-accent text-primary-foreground px-8 py-4 rounded-lg font-poppins font-semibold hover:shadow-glow transition-all duration-300"
          >
            Book Your Appointment
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
