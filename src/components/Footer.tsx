import { Link } from "react-router-dom";
import { MapPin, Phone, Clock, Mail } from "lucide-react";
import g4Logo from "@/assets/g4-logo.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const services = [
    "Graphene & Ceramic Coating",
    "3M Polishing",
    "PPF Coating",
    "Premium Seat Covers",
    "Car & Bike Accessories",
    "Custom Sticker Works",
  ];

  return (
    <footer className="bg-gradient-to-b from-background to-muted/20 border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Logo and About */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <img 
                src={g4Logo} 
                alt="G4 Detailing Studio" 
                className="h-16 w-auto object-contain"
              />
            </Link>
            <p className="text-muted-foreground font-montserrat text-sm">
              Professional Car & Bike Detailing Studio & Accessories Shop in Naduvannur, Calicut. 
              We deliver excellence in every detail.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-foreground font-poppins font-semibold text-lg mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-accent transition-colors font-montserrat text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-foreground font-poppins font-semibold text-lg mb-4">
              Our Services
            </h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service} className="text-muted-foreground font-montserrat text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-foreground font-poppins font-semibold text-lg mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-muted-foreground font-montserrat text-sm">
                <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span>Near Register Office, Naduvannur, Calicut, India</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground font-montserrat text-sm">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <a href="tel:+917025346580" className="hover:text-accent transition-colors">
                  +91 7025346580
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground font-montserrat text-sm">
                <Clock className="h-5 w-5 text-accent flex-shrink-0" />
                <span>9:30 AM - 7:30 PM</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground font-montserrat text-sm">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <a href="mailto:info@g4detailing.com" className="hover:text-accent transition-colors">
                  info@g4detailing.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-border/50">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="text-muted-foreground font-montserrat text-sm text-center md:text-left">
              © {currentYear} G4 Detailing Studio. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                to="/contact"
                className="text-muted-foreground hover:text-accent transition-colors font-montserrat text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                to="/contact"
                className="text-muted-foreground hover:text-accent transition-colors font-montserrat text-sm"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
