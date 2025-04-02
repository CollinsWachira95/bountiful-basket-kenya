
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ShoppingCart, Search } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Helper function to determine if a link is active
  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <div className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          {/* Logo */}
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link to="/" className="flex items-center">
              <span className="font-playfair font-bold text-2xl text-kenya-blue-dark">
                Bountiful<span className="text-kenya-yellow-dark">Basket</span>
              </span>
            </Link>
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
            <Link 
              to="/" 
              className={cn("text-base font-medium transition-colors", 
                isActive("/") ? "text-kenya-blue" : "text-gray-700 hover:text-kenya-blue")}
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className={cn("text-base font-medium transition-colors", 
                isActive("/products") ? "text-kenya-blue" : "text-gray-700 hover:text-kenya-blue")}
            >
              Products
            </Link>
            <Link 
              to="/about" 
              className={cn("text-base font-medium transition-colors", 
                isActive("/about") ? "text-kenya-blue" : "text-gray-700 hover:text-kenya-blue")}
            >
              About Us
            </Link>
            <Link 
              to="/locations" 
              className={cn("text-base font-medium transition-colors", 
                isActive("/locations") ? "text-kenya-blue" : "text-gray-700 hover:text-kenya-blue")}
            >
              Locations
            </Link>
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
                <Link
                  to="/"
                  className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className={cn("text-base font-medium", isActive("/") ? "text-kenya-blue" : "text-gray-900")}>Home</span>
                </Link>
                <Link
                  to="/products"
                  className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className={cn("text-base font-medium", isActive("/products") ? "text-kenya-blue" : "text-gray-900")}>Products</span>
                </Link>
                <Link
                  to="/about"
                  className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className={cn("text-base font-medium", isActive("/about") ? "text-kenya-blue" : "text-gray-900")}>About Us</span>
                </Link>
                <Link
                  to="/locations"
                  className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className={cn("text-base font-medium", isActive("/locations") ? "text-kenya-blue" : "text-gray-900")}>Locations</span>
                </Link>
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
