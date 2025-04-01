
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ShoppingCart, Search } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          {/* Logo */}
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="/" className="flex items-center">
              <span className="font-playfair font-bold text-2xl text-kenya-blue-dark">
                Bountiful<span className="text-kenya-yellow-dark">Basket</span>
              </span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 -my-2 md:hidden">
            <Button 
              variant="ghost" 
              className="p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </Button>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-10">
            <a 
              href="#" 
              className="text-base font-medium text-gray-700 hover:text-kenya-blue transition-colors"
            >
              Home
            </a>
            <a 
              href="#products" 
              className="text-base font-medium text-gray-700 hover:text-kenya-blue transition-colors"
            >
              Products
            </a>
            <a 
              href="#about" 
              className="text-base font-medium text-gray-700 hover:text-kenya-blue transition-colors"
            >
              About Us
            </a>
            <a 
              href="#locations" 
              className="text-base font-medium text-gray-700 hover:text-kenya-blue transition-colors"
            >
              Locations
            </a>
          </nav>

          {/* Desktop right buttons */}
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0 space-x-4">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <Button 
              className="btn-primary"
            >
              Sign In
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn(
        "absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden",
        mobileMenuOpen ? "block" : "hidden"
      )}>
        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
          <div className="pt-5 pb-6 px-5">
            <div className="flex items-center justify-between">
              <div>
                <span className="font-playfair font-bold text-xl text-kenya-blue-dark">
                  Bountiful<span className="text-kenya-yellow-dark">Basket</span>
                </span>
              </div>
              <div className="-mr-2">
                <Button 
                  variant="ghost" 
                  className="p-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <X className="h-6 w-6" aria-hidden="true" />
                </Button>
              </div>
            </div>
            <div className="mt-6">
              <nav className="grid gap-y-6">
                <a
                  href="#"
                  className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="text-base font-medium text-gray-900">Home</span>
                </a>
                <a
                  href="#products"
                  className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="text-base font-medium text-gray-900">Products</span>
                </a>
                <a
                  href="#about"
                  className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="text-base font-medium text-gray-900">About Us</span>
                </a>
                <a
                  href="#locations"
                  className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="text-base font-medium text-gray-900">Locations</span>
                </a>
              </nav>
            </div>
          </div>
          <div className="py-6 px-5 space-y-6">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon">
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-5 w-5" />
              </Button>
            </div>
            <Button className="btn-primary w-full">
              Sign In
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
