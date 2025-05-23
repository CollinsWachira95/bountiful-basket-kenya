
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { SearchIcon, ShoppingCart } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-kenya-blue-light to-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block text-kenya-blue-dark xl:inline">Premium Shopping</span>{' '}
                <span className="block text-kenya-yellow-dark xl:inline">Kenyan Excellence</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Experience the finest selection of fresh produce, artisanal goods, and everyday essentials. Proudly Kenyan, globally inspired.
              </p>
              <div className="mt-8 sm:flex items-center justify-center lg:justify-start">
                <div className="relative rounded-md shadow-sm max-w-lg w-full">
                  <input
                    type="text"
                    className="form-input py-3 px-4 block w-full rounded-md pr-10 sm:text-sm"
                    placeholder="Search for products..."
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <SearchIcon className="h-5 w-5 text-gray-400" />
                  </div>
                </div>
              </div>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start gap-4">
                <Link to="/products">
                  <Button className="bg-kenya-blue hover:bg-kenya-blue-dark text-white">
                    Browse Products
                  </Button>
                </Link>
                <Link to="/cart">
                  <Button className="bg-kenya-yellow hover:bg-kenya-yellow-dark text-gray-800 flex items-center gap-2">
                    <ShoppingCart className="h-5 w-5" />
                    View Cart
                  </Button>
                </Link>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
          alt="Fresh fruits and vegetables"
        />
      </div>
    </div>
  );
};

export default Hero;
