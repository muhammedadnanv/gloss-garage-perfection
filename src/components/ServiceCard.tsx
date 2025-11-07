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
    <Card className="bg-card border-border hover:border-accent transition-all duration-500 p-6 group hover:shadow-glow">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="w-16 h-16 bg-gradient-shine rounded-lg flex items-center justify-center group-hover:bg-gradient-accent transition-all duration-500">
          <Icon className="text-accent group-hover:text-primary-foreground transition-all duration-500" size={32} />
        </div>
        <h3 className="text-xl font-poppins font-bold text-foreground">{title}</h3>
        <p className="text-muted-foreground font-montserrat">{description}</p>
        <p className="text-accent font-poppins font-semibold text-lg">{priceRange}</p>
      </div>
    </Card>
  );
};

export default ServiceCard;
