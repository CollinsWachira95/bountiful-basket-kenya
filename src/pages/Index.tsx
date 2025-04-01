
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import About from "@/components/About";
import StoreLocations from "@/components/StoreLocations";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <FeaturedProducts />
        <About />
        <StoreLocations />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
