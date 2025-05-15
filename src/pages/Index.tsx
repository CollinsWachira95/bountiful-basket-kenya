
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import FeaturedProducts from "@/components/FeaturedProducts";
import { ShieldCheck, Truck, HeartHandshake, Clock, MapPin, CalendarClock, Tag, Sparkles } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Index = () => {
  const categories = [
    { name: "Fresh Produce", image: "https://images.unsplash.com/photo-1610348725531-843dff563e2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", link: "/products" },
    { name: "Bakery", image: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", link: "/products" },
    { name: "Dairy & Eggs", image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", link: "/products" },
    { name: "Beverages", image: "https://images.unsplash.com/photo-1595981267035-7b04ca84a46d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", link: "/products" },
  ];
  
  const promotions = [
    { title: "Weekend Special", description: "20% off all fresh fruits and vegetables", date: "Every Saturday & Sunday" },
    { title: "Loyalty Program", description: "Earn points with every purchase", date: "Ongoing" },
    { title: "Bulk Buying Discount", description: "Save 15% when you buy in bulk", date: "Limited time offer" }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        
        {/* Shop by Category Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Shop by Category</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Explore our wide range of products organized by category for easy shopping.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {categories.map((category, index) => (
                <Link key={index} to={category.link} className="group">
                  <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                    <AspectRatio ratio={4/3} className="bg-gray-100">
                      <img 
                        src={category.image} 
                        alt={category.name} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </AspectRatio>
                    <div className="p-4 bg-white">
                      <h3 className="font-bold text-xl text-center group-hover:text-kenya-blue transition-colors">
                        {category.name}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            
            <div className="text-center mt-10">
              <Link to="/products">
                <Button className="bg-kenya-blue hover:bg-kenya-blue-dark">
                  View All Categories
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Featured Products Section */}
        <FeaturedProducts />
        
        {/* Special Deals & Promotions */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Special Offers</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Don't miss out on our current promotions and special deals.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {promotions.map((promo, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-kenya-yellow-light rounded-full">
                      {index === 0 ? (
                        <Tag className="h-8 w-8 text-kenya-yellow-dark" />
                      ) : index === 1 ? (
                        <Sparkles className="h-8 w-8 text-kenya-yellow-dark" />
                      ) : (
                        <CalendarClock className="h-8 w-8 text-kenya-yellow-dark" />
                      )}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2">{promo.title}</h3>
                  <p className="text-gray-600 text-center mb-4">{promo.description}</p>
                  <p className="text-sm text-gray-500 text-center font-medium">{promo.date}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Why Choose DC Supermarket</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Your trusted shopping destination with quality products and exceptional service.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

        {/* Store Locator Preview */}
        <section className="bg-gray-100 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Find a DC Supermarket Near You</h2>
                <p className="text-lg text-gray-600 mb-8">
                  We have multiple locations across Kenya to serve you better. Visit our modern, well-stocked stores for an exceptional shopping experience.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-kenya-blue mt-1 mr-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-lg">Westlands Branch</h4>
                      <p className="text-gray-600">123 Waiyaki Way, Westlands, Nairobi</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-kenya-blue mt-1 mr-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-lg">Karen Branch</h4>
                      <p className="text-gray-600">Karen Shopping Center, Langata Road, Nairobi</p>
                    </div>
                  </div>
                </div>
                <Link to="/locations">
                  <Button className="bg-kenya-blue hover:bg-kenya-blue-dark">
                    View All Locations
                  </Button>
                </Link>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1604719312566-8912e9227c6a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="DC Supermarket Store" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Don't just take our word for it. Here's what our valued customers have to say about their DC Supermarket experience.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
