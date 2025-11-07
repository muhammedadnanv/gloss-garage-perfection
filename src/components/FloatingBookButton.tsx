import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";

const FloatingBookButton = () => {
  return (
    <Link
      to="/contact"
      className="fixed bottom-8 right-8 z-40 bg-gradient-accent text-primary-foreground px-6 py-4 rounded-full shadow-premium hover:shadow-glow transition-all duration-300 flex items-center space-x-2 animate-glow-pulse font-poppins font-semibold"
    >
      <Calendar size={20} />
      <span>Book Now</span>
    </Link>
  );
};

export default FloatingBookButton;
