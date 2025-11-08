import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  priceRange: string;
}

const ServiceCard = ({ icon: Icon, title, description, priceRange }: ServiceCardProps) => {
  return (
    <Card className="bg-card border-border hover:border-accent transition-all duration-500 p-4 sm:p-5 lg:p-6 group hover:shadow-glow h-full">
      <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4">
        <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-shine rounded-lg flex items-center justify-center group-hover:bg-gradient-accent transition-all duration-500">
          <Icon className="text-accent group-hover:text-primary-foreground transition-all duration-500" size={28} />
        </div>
        <h3 className="text-lg sm:text-xl font-poppins font-bold text-foreground leading-tight">{title}</h3>
        <p className="text-muted-foreground font-montserrat text-sm sm:text-base">{description}</p>
        <p className="text-accent font-poppins font-semibold text-base sm:text-lg">{priceRange}</p>
      </div>
    </Card>
  );
};

export default ServiceCard;
