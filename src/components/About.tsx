
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="section-container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Our <span className="text-kenya-blue-dark">Kenyan</span> Heritage
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Bountiful Basket was founded in 2010 with a simple mission: to bring the finest Kenyan 
            produce and products to our customers while supporting local farmers and artisans.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            From our humble beginnings as a small shop in Nairobi, we've grown into Kenya's 
            premier supermarket chain, with locations across the country. Our commitment to quality, 
            freshness, and community has never wavered.
          </p>
          <p className="text-lg text-gray-600 mb-8">
            We work directly with over 200 local farmers and producers to ensure that you get the 
            freshest, highest-quality goods while supporting Kenya's agricultural economy and 
            sustainable farming practices.
          </p>
          <div className="flex gap-4">
            <Button className="btn-primary">Our Story</Button>
            <Button className="btn-secondary">Meet Our Team</Button>
          </div>
        </div>
        <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <img 
              src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Local produce" 
              className="rounded-lg shadow-lg w-full h-48 object-cover"
            />
            <img 
              src="https://images.unsplash.com/photo-1595422656453-1a95d913a308?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Store interior" 
              className="rounded-lg shadow-lg w-full h-64 object-cover"
            />
          </div>
          <div className="space-y-4 mt-8">
            <img 
              src="https://images.unsplash.com/photo-1597916829826-02e5bb4a54e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Local farmers" 
              className="rounded-lg shadow-lg w-full h-64 object-cover"
            />
            <img 
              src="https://images.unsplash.com/photo-1590599145008-e4ec48682067?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Fresh produce" 
              className="rounded-lg shadow-lg w-full h-48 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
