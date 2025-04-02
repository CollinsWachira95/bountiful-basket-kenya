
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <div className="section-container bg-gray-50">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Welcome to Bountiful Basket</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the finest selection of premium products, fresh produce, and everyday essentials at Kenya's premier supermarket.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-kenya-blue-dark mb-4">Our Products</h3>
              <p className="text-gray-600 mb-6">Discover our carefully curated selection of local and imported goods.</p>
              <Link to="/products">
                <Button className="btn-primary">Browse Products</Button>
              </Link>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-kenya-blue-dark mb-4">About Us</h3>
              <p className="text-gray-600 mb-6">Learn about our history, mission, and commitment to the Kenyan community.</p>
              <Link to="/about">
                <Button className="btn-primary">Our Story</Button>
              </Link>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-kenya-blue-dark mb-4">Find Us</h3>
              <p className="text-gray-600 mb-6">Locate our stores across Kenya and visit us for an exceptional shopping experience.</p>
              <Link to="/locations">
                <Button className="btn-primary">Store Locations</Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
