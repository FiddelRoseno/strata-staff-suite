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
  "Todos os Serviços",
  "Encanamento",
  "Elétrica",
  "Limpeza",
  "Manutenção",
  "Ar Condicionado",
  "Paisagismo",
  "Segurança",
  "Pintura",
  "Marcenaria"
];

const MOCK_SERVICES = [
  {
    id: "1",
    title: "Serviços Profissionais de Encanamento",
    description: "Soluções completas de encanamento para condomínios incluindo reparos, instalações e serviços de emergência.",
    category: "Encanamento",
    price: { min: 80, max: 200 },
    provider: {
      name: "Miguel Thompson",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 4.9,
      reviewCount: 127,
      verified: true,
      responseTime: "< 1 hora"
    },
    images: ["https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop"],
    location: "Distrito Central",
    featured: true
  },
  {
    id: "2",
    title: "Serviços de Limpeza Residencial",
    description: "Limpeza profunda, manutenção regular e limpeza pós-construção para unidades residenciais.",
    category: "Limpeza",
    price: { min: 60, max: 150 },
    provider: {
      name: "Sarah Martinez",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b1e3?w=150&h=150&fit=crop&crop=face",
      rating: 4.8,
      reviewCount: 89,
      verified: true,
      responseTime: "< 2 horas"
    },
    images: ["https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop"],
    location: "Região Oeste"
  },
  {
    id: "3",
    title: "Instalação e Reparo Elétrico",
    description: "Eletricista licenciado oferecendo serviços elétricos seguros e confiáveis para todas as suas necessidades.",
    category: "Elétrica",
    price: { min: 90, max: 250 },
    provider: {
      name: "David Chen",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5.0,
      reviewCount: 156,
      verified: true,
      responseTime: "< 30 min"
    },
    images: ["https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=300&fit=crop"],
    location: "Distrito Central"
  },
  {
    id: "4",
    title: "Manutenção e Reparo de Ar Condicionado",
    description: "Mantenha seus sistemas de ar condicionado e aquecimento funcionando com eficiência durante todo o ano.",
    category: "Ar Condicionado",
    price: { min: 100, max: 300 },
    provider: {
      name: "Robert Johnson",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
      rating: 4.7,
      reviewCount: 93,
      verified: true,
      responseTime: "< 1 hora"
    },
    images: ["https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&h=300&fit=crop"],
    location: "Distrito Norte"
  },
  {
    id: "5",
    title: "Paisagismo e Cuidados com Jardim",
    description: "Espaços externos bonitos com paisagismo profissional e serviços de manutenção regular.",
    category: "Paisagismo",
    price: { min: 70, max: 180 },
    provider: {
      name: "Emma Wilson",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 4.9,
      reviewCount: 74,
      verified: true,
      responseTime: "< 3 horas"
    },
    images: ["https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop"],
    location: "Distrito dos Jardins"
  },
  {
    id: "6",
    title: "Serviços de Pintura Interior",
    description: "Transforme seu espaço com serviços de pintura profissional usando materiais premium.",
    category: "Pintura",
    price: { min: 50, max: 120 },
    provider: {
      name: "Carlos Rodriguez",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      rating: 4.6,
      reviewCount: 112,
      verified: false,
      responseTime: "< 2 horas"
    },
    images: ["https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=400&h=300&fit=crop"],
    location: "Distrito das Artes"
  }
];

const ServicesGrid = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos os Serviços");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filteredServices = MOCK_SERVICES.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "Todos os Serviços" || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="py-16 bg-muted/30">
      <div className="container px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Serviços Disponíveis</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Navegue pelo nosso marketplace de prestadores de serviços confiáveis prontos para ajudar com suas necessidades do condomínio
          </p>
        </div>

        {/* Filters */}
        <div className="bg-card rounded-lg p-6 mb-8 shadow-sm">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Buscar serviços..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full sm:w-[200px]">
                  <SelectValue placeholder="Categoria" />
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
                {filteredServices.length} serviços encontrados
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
              Carregar Mais Serviços
            </Button>
          </div>
        )}

        {/* Empty State */}
        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold mb-2">Nenhum serviço encontrado</h3>
            <p className="text-muted-foreground">
              Tente ajustar seus critérios de busca ou navegue por todas as categorias
            </p>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("Todos os Serviços");
              }}
            >
              Limpar Filtros
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesGrid;