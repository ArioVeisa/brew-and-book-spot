
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-cafe-brown text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold mb-4">dcofee.cup</h3>
            <p className="text-cafe-cream mb-6 max-w-md">
              More than just a café - we're a community space where great coffee, 
              warm conversations, and memorable moments come together.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Twitter className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-cafe-cream">
              <li>
                <button 
                  onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-white transition-colors"
                >
                  Menu
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-white transition-colors"
                >
                  Reservations
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">About Us</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Stay Updated</h4>
            <p className="text-cafe-cream mb-4 text-sm">
              Subscribe to get updates on new menu items and special events
            </p>
            <div className="flex gap-2">
              <Input 
                placeholder="Enter your email" 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Button variant="secondary" className="bg-white text-cafe-brown hover:bg-white/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center text-cafe-cream">
          <p>&copy; 2024 dcofee.cup. All rights reserved. Made with ❤️ and lots of coffee.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
