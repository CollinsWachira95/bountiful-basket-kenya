
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import FeaturedProducts from "@/components/FeaturedProducts";
import { ShieldCheck, Truck, HeartHandshake, Clock } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        
        {/* Features Section */}
        <div className="bg-white py-16">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Why Choose DC Supermarket</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Your trusted shopping destination with quality products and exceptional service.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="flex flex-col items-center text-center">
                <div className="bg-kenya-blue-light p-4 rounded-full mb-4">
                  <ShieldCheck className="h-8 w-8 text-kenya-blue" />
                </div>
                <h3 className="font-bold text-xl mb-2">Quality Guarantee</h3>
                <p className="text-gray-600">We carefully select every product to ensure premium quality for our customers.</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="bg-kenya-blue-light p-4 rounded-full mb-4">
                  <Truck className="h-8 w-8 text-kenya-blue" />
                </div>
                <h3 className="font-bold text-xl mb-2">Fast Delivery</h3>
                <p className="text-gray-600">Enjoy our efficient delivery service across Nairobi and major towns in Kenya.</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="bg-kenya-blue-light p-4 rounded-full mb-4">
                  <HeartHandshake className="h-8 w-8 text-kenya-blue" />
                </div>
                <h3 className="font-bold text-xl mb-2">Customer Support</h3>
                <p className="text-gray-600">Our friendly team is available to assist you with any inquiries or concerns.</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="bg-kenya-blue-light p-4 rounded-full mb-4">
                  <Clock className="h-8 w-8 text-kenya-blue" />
                </div>
                <h3 className="font-bold text-xl mb-2">Extended Hours</h3>
                <p className="text-gray-600">Open 7 days a week from 7 AM to 10 PM for your convenience.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Products Section */}
        <FeaturedProducts />
        
        <div className="section-container bg-gray-50">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Welcome to DC Supermarket</h2>
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

        {/* Testimonials Section */}
        <div className="bg-white py-16">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Don't just take our word for it. Here's what our valued customers have to say about their DC Supermarket experience.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-gray-50 p-6 rounded-lg shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80" alt="Customer" className="w-full h-full object-cover" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold">Sarah Kamau</h4>
                    <p className="text-sm text-gray-500">Loyal Customer</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"DC Supermarket has the freshest produce I've found in Nairobi. Their organic section is outstanding, and the staff is always helpful and friendly."</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80" alt="Customer" className="w-full h-full object-cover" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold">Daniel Ochieng</h4>
                    <p className="text-sm text-gray-500">Regular Shopper</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"I appreciate the wide variety of local products. It's great to see a supermarket that supports Kenyan farmers and businesses while maintaining high quality."</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80" alt="Customer" className="w-full h-full object-cover" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold">Amina Hassan</h4>
                    <p className="text-sm text-gray-500">New Customer</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"The online shopping experience is seamless, and delivery is always on time. DC Supermarket has made grocery shopping convenient for my busy lifestyle."</p>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="bg-kenya-blue py-16">
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
              <p className="mb-8">Subscribe to our newsletter for weekly updates on promotions, new products, and recipes.</p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-grow px-4 py-3 rounded-md text-gray-800"
                />
                <Button className="bg-kenya-yellow hover:bg-kenya-yellow-dark text-gray-800 px-6">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
