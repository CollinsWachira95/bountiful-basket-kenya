
import Navbar from "@/components/Navbar";
import FeaturedProducts from "@/components/FeaturedProducts";
import Footer from "@/components/Footer";

const Products = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <div className="bg-gray-50 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block text-kenya-blue-dark">Our Premium</span>
                <span className="block text-kenya-yellow-dark">Products</span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:text-xl">
                Discover our selection of high-quality products from Kenya and around the world.
              </p>
            </div>
          </div>
        </div>
        <FeaturedProducts />
      </main>
      <Footer />
    </div>
  );
};

export default Products;
