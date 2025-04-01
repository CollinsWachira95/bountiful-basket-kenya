
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <h3 className="font-playfair font-bold text-2xl text-white mb-4">
              Bountiful<span className="text-kenya-yellow">Basket</span>
            </h3>
            <p className="text-gray-400 mb-4">
              Kenya's premier supermarket, providing quality products since 2010.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-kenya-yellow transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-kenya-yellow transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-kenya-yellow transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div className="col-span-1">
            <h4 className="font-bold text-lg mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-kenya-yellow transition-colors">Home</a>
              </li>
              <li>
                <a href="#products" className="text-gray-400 hover:text-kenya-yellow transition-colors">Products</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-kenya-yellow transition-colors">About Us</a>
              </li>
              <li>
                <a href="#locations" className="text-gray-400 hover:text-kenya-yellow transition-colors">Locations</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-kenya-yellow transition-colors">Careers</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-kenya-yellow transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="font-bold text-lg mb-4 text-white">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-kenya-yellow mt-0.5" />
                <span className="text-gray-400">123 Waiyaki Way, Westlands, Nairobi, Kenya</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-kenya-yellow" />
                <span className="text-gray-400">+254 712 345 678</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-kenya-yellow" />
                <span className="text-gray-400">info@bountifulbasket.ke</span>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="font-bold text-lg mb-4 text-white">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for exclusive offers and updates.
            </p>
            <div className="flex flex-col space-y-2">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="bg-gray-800 border-gray-700 text-white"
              />
              <Button className="bg-kenya-yellow hover:bg-kenya-yellow-dark text-gray-900 font-semibold">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Bountiful Basket. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-kenya-yellow transition-colors">Terms</a></li>
              <li><a href="#" className="hover:text-kenya-yellow transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-kenya-yellow transition-colors">Cookies</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
