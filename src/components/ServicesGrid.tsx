import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ServiceCard from "./ServiceCard";
import { Search, Filter, Grid, List } from "lucide-react";

const CATEGORIES = [
  "All Services",
  "Plumbing",
  "Electrical",
  "Cleaning",
  "Maintenance",
  "HVAC",
  "Landscaping",
  "Security",
  "Painting",
  "Carpentry"
];

const MOCK_SERVICES = [
  {
    id: "1",
    title: "Professional Plumbing Services",
    description: "Complete plumbing solutions for condominiums including repairs, installations, and emergency services.",
    category: "Plumbing",
    price: { min: 80, max: 200 },
    provider: {
      name: "Mike Thompson",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 4.9,
      reviewCount: 127,
      verified: true,
      responseTime: "< 1 hour"
    },
    images: ["https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop"],
    location: "Downtown District",
    featured: true
  },
  {
    id: "2",
    title: "Residential Cleaning Services",
    description: "Deep cleaning, regular maintenance, and post-construction cleanup for residential units.",
    category: "Cleaning",
    price: { min: 60, max: 150 },
    provider: {
      name: "Sarah Martinez",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b1e3?w=150&h=150&fit=crop&crop=face",
      rating: 4.8,
      reviewCount: 89,
      verified: true,
      responseTime: "< 2 hours"
    },
    images: ["https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop"],
    location: "Westside Area"
  },
  {
    id: "3",
    title: "Electrical Installation & Repair",
    description: "Licensed electrician providing safe and reliable electrical services for all your needs.",
    category: "Electrical",
    price: { min: 90, max: 250 },
    provider: {
      name: "David Chen",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5.0,
      reviewCount: 156,
      verified: true,
      responseTime: "< 30 mins"
    },
    images: ["https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=300&fit=crop"],
    location: "Central District"
  },
  {
    id: "4",
    title: "HVAC Maintenance & Repair",
    description: "Keep your air conditioning and heating systems running efficiently year-round.",
    category: "HVAC",
    price: { min: 100, max: 300 },
    provider: {
      name: "Robert Johnson",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
      rating: 4.7,
      reviewCount: 93,
      verified: true,
      responseTime: "< 1 hour"
    },
    images: ["https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&h=300&fit=crop"],
    location: "North District"
  },
  {
    id: "5",
    title: "Landscaping & Garden Care",
    description: "Beautiful outdoor spaces with professional landscaping and regular maintenance services.",
    category: "Landscaping",
    price: { min: 70, max: 180 },
    provider: {
      name: "Emma Wilson",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 4.9,
      reviewCount: 74,
      verified: true,
      responseTime: "< 3 hours"
    },
    images: ["https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop"],
    location: "Garden District"
  },
  {
    id: "6",
    title: "Interior Painting Services",
    description: "Transform your space with professional painting services using premium materials.",
    category: "Painting",
    price: { min: 50, max: 120 },
    provider: {
      name: "Carlos Rodriguez",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      rating: 4.6,
      reviewCount: 112,
      verified: false,
      responseTime: "< 2 hours"
    },
    images: ["https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=400&h=300&fit=crop"],
    location: "Arts District"
  }
];

const ServicesGrid = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Services");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filteredServices = MOCK_SERVICES.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All Services" || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="py-16 bg-muted/30">
      <div className="container px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Available Services</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Browse our marketplace of trusted service providers ready to help with your condominium needs
          </p>
        </div>

        {/* Filters */}
        <div className="bg-card rounded-lg p-6 mb-8 shadow-sm">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full sm:w-[200px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {CATEGORIES.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="px-3 py-1">
                {filteredServices.length} services found
              </Badge>
              
              <div className="flex border rounded-md">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className="rounded-r-none"
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className="rounded-l-none"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className={`grid gap-6 ${
          viewMode === "grid" 
            ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" 
            : "grid-cols-1"
        }`}>
          {filteredServices.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>

        {/* Load More */}
        {filteredServices.length > 0 && (
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Services
            </Button>
          </div>
        )}

        {/* Empty State */}
        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold mb-2">No services found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search criteria or browse all categories
            </p>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All Services");
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesGrid;