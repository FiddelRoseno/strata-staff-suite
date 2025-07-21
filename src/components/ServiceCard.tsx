import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Star, 
  MapPin, 
  Clock, 
  MessageSquare,
  Heart,
  Verified
} from "lucide-react";

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  category: string;
  price: {
    min: number;
    max: number;
  };
  provider: {
    name: string;
    avatar?: string;
    rating: number;
    reviewCount: number;
    verified: boolean;
    responseTime: string;
  };
  images: string[];
  location: string;
  featured?: boolean;
}

const ServiceCard = ({ 
  title, 
  description, 
  category, 
  price, 
  provider, 
  images, 
  location,
  featured = false 
}: ServiceCardProps) => {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative">
      {featured && (
        <Badge className="absolute top-3 left-3 z-10 bg-warning text-warning-foreground">
          Destaque
        </Badge>
      )}
      
      <CardHeader className="p-0">
        <div className="relative h-48 overflow-hidden">
          <img
            src={images[0] || "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop"}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-3 right-3 bg-white/80 hover:bg-white"
          >
            <Heart className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>

      <CardContent className="p-4 pb-2">
        <div className="flex items-start justify-between mb-2">
          <Badge variant="secondary" className="text-xs">
            {category}
          </Badge>
          <div className="text-right">
            <div className="text-lg font-bold text-primary">
              ${price.min} - ${price.max}
            </div>
            <div className="text-xs text-muted-foreground">por serviço</div>
          </div>
        </div>

        <h3 className="font-semibold text-lg mb-2 line-clamp-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{description}</p>

        <div className="flex items-center space-x-2 mb-3">
          <MapPin className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">{location}</span>
        </div>

        {/* Provider Info */}
        <div className="flex items-center space-x-3">
          <Avatar className="h-8 w-8">
            <AvatarImage src={provider.avatar} alt={provider.name} />
            <AvatarFallback>{provider.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
          </Avatar>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-1">
              <span className="text-sm font-medium truncate">{provider.name}</span>
              {provider.verified && (
                <Verified className="h-3 w-3 text-primary" />
              )}
            </div>
            <div className="flex items-center space-x-3 text-xs text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Star className="h-3 w-3 fill-warning text-warning" />
                <span>{provider.rating}</span>
                <span>({provider.reviewCount})</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-3 w-3" />
                <span>{provider.responseTime}</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-2 gap-2">
        <Button variant="outline" size="sm" className="flex-1">
          <MessageSquare className="h-4 w-4" />
          Contatar
        </Button>
        <Button size="sm" className="flex-1">
          Obter Orçamento
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;