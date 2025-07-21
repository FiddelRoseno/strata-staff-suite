import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Star
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t">
      <div className="container px-4">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent">
                  <span className="text-sm font-bold text-white">SW</span>
                </div>
                <span className="font-bold text-xl text-foreground">StrataWork</span>
              </div>
              <p className="text-muted-foreground mb-6 max-w-md">
                Connecting condominium communities with trusted service professionals. 
                Find reliable workers or offer your services to local residents.
              </p>
              
              {/* Newsletter */}
              <div className="mb-6">
                <h4 className="font-semibold mb-2">Stay Updated</h4>
                <div className="flex gap-2 max-w-sm">
                  <Input placeholder="Enter your email" className="flex-1" />
                  <Button>Subscribe</Button>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-2">
                <Button variant="ghost" size="icon">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Instagram className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Linkedin className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                  Find Services
                </a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                  Become a Provider
                </a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                  How It Works
                </a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                  Pricing
                </a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                  Help Center
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span>support@stratawork.com</span>
                </div>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>123 Service St, City, State</span>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="mt-6">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
                  <Star className="h-4 w-4 fill-warning text-warning" />
                  <span>4.9/5 Average Rating</span>
                </div>
                <div className="text-sm text-muted-foreground">
                  Trusted by 500+ Communities
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator />

        {/* Bottom Footer */}
        <div className="py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2024 StrataWork. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;