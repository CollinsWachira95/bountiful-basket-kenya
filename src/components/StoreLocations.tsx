
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Clock } from "lucide-react";

const locations = [
  {
    id: 1,
    name: "Nairobi - Westlands",
    address: "123 Waiyaki Way, Westlands, Nairobi",
    phone: "+254 712 345 678",
    hours: "Mon-Sat: 8am-9pm, Sun: 9am-7pm",
    isPrimary: true,
  },
  {
    id: 2,
    name: "Nairobi - Karen",
    address: "Karen Shopping Centre, Karen, Nairobi",
    phone: "+254 712 345 679",
    hours: "Mon-Sat: 8am-9pm, Sun: 9am-7pm",
    isPrimary: false,
  },
  {
    id: 3,
    name: "Mombasa - Nyali",
    address: "Nyali Centre, Links Rd, Mombasa",
    phone: "+254 712 345 680",
    hours: "Mon-Sat: 8am-9pm, Sun: 9am-7pm",
    isPrimary: false,
  },
];

const StoreLocations = () => {
  return (
    <section id="locations" className="section-container bg-gradient-to-b from-white to-kenya-blue-light">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Visit Our Stores</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Find a Bountiful Basket location near you and experience premium shopping
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {locations.map((location) => (
          <Card 
            key={location.id} 
            className={`card-highlight hover:border-kenya-yellow ${location.isPrimary ? 'border-2 border-kenya-yellow-dark' : ''}`}
          >
            <CardHeader className={location.isPrimary ? "bg-kenya-yellow-light pb-2" : "pb-2"}>
              <CardTitle className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-kenya-blue" />
                {location.name}
              </CardTitle>
              <CardDescription>{location.address}</CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="space-y-3">
                <div className="flex items-start">
                  <Phone className="h-5 w-5 mr-2 text-kenya-blue mt-0.5" />
                  <span>{location.phone}</span>
                </div>
                <div className="flex items-start">
                  <Clock className="h-5 w-5 mr-2 text-kenya-blue mt-0.5" />
                  <span>{location.hours}</span>
                </div>
              </div>
              <div className="mt-4">
                <a 
                  href="#" 
                  className="text-kenya-blue-dark hover:text-kenya-blue hover:underline font-medium"
                >
                  Get Directions →
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 bg-white rounded-lg shadow-lg p-6 max-w-3xl mx-auto">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Coming Soon</h3>
        <p className="text-lg text-gray-600 mb-6">
          We're expanding to serve you better. New locations coming soon to Kisumu, Nakuru, and Eldoret.
        </p>
        <div className="border-t border-gray-200 pt-4">
          <p className="text-gray-500">Want a Bountiful Basket in your area? Let us know!</p>
          <a 
            href="mailto:expansion@bountifulbasket.ke" 
            className="text-kenya-blue-dark hover:text-kenya-blue hover:underline font-medium"
          >
            expansion@bountifulbasket.ke
          </a>
        </div>
      </div>
    </section>
  );
};

export default StoreLocations;
