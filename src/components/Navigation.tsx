import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import g4Logo from "@/assets/g4-logo.jpg";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-background/95 backdrop-blur-lg shadow-premium" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo - blends with hero when not scrolled */}
          <Link to="/" className="flex items-center group">
            <img 
              src={g4Logo} 
              alt="G4 Detailing Studio" 
              className={`h-10 sm:h-12 lg:h-14 w-auto object-contain transition-all duration-500 group-hover:scale-105 ${
                isScrolled ? "brightness-100" : "brightness-110 drop-shadow-[0_0_8px_hsla(0,84%,55%,0.4)]"
              }`}
              style={{ mixBlendMode: isScrolled ? "normal" : "screen" }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-montserrat font-medium transition-all duration-300 hover:text-accent ${
                  location.pathname === link.path ? "text-accent" : "text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button
              asChild
              className="bg-gradient-accent font-poppins font-semibold hover:shadow-glow transition-all duration-300"
            >
              <Link to="/contact">Book Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-foreground hover:text-accent transition-colors"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden pb-6 animate-fade-in bg-background/95 backdrop-blur-lg">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`font-montserrat font-medium py-2 transition-all duration-300 hover:text-accent ${
                    location.pathname === link.path ? "text-accent" : "text-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Button
                asChild
                className="bg-gradient-accent font-poppins font-semibold w-full"
              >
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  Book Now
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
