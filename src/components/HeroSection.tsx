import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Star, Users, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-workforce.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
            <Star className="h-3 w-3 mr-1" />
            Trusted by 500+ Condominiums
          </Badge>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Connect Your Community with
            <span className="block bg-gradient-to-r from-white to-primary-glow bg-clip-text text-transparent">
              Trusted Service Professionals
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            Find reliable workers for your condominium needs or offer your services to local communities
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" variant="hero" className="min-w-[200px]">
              Find Services
              <Search className="h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="min-w-[200px] bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary">
              Become a Provider
              <Users className="h-5 w-5" />
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">1,200+</div>
              <div className="text-white/80">Active Providers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">98%</div>
              <div className="text-white/80">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-white/80">Support Available</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-8 left-8 hidden lg:block">
        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-white">
          <div className="flex items-center space-x-2 mb-2">
            <CheckCircle className="h-4 w-4 text-success" />
            <span className="text-sm font-medium">Verified Provider</span>
          </div>
          <div className="text-xs text-white/80">Mike T. - Plumbing Services</div>
        </div>
      </div>

      <div className="absolute top-1/3 right-8 hidden lg:block">
        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-white">
          <div className="flex items-center space-x-2 mb-2">
            <Star className="h-4 w-4 text-warning" />
            <span className="text-sm font-medium">5.0 Rating</span>
          </div>
          <div className="text-xs text-white/80">Sarah L. - Cleaning Services</div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;