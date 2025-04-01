
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Organic Kenyan Coffee",
    description: "Premium AA grade coffee beans from the highlands of Kenya",
    price: "KSh 750",
    image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    badge: "Premium",
  },
  {
    id: 2,
    name: "Fresh Avocados",
    description: "Creamy, locally sourced Hass avocados from Nyeri",
    price: "KSh 320",
    image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    badge: "Organic",
  },
  {
    id: 3,
    name: "Masai Honey",
    description: "Pure, wild honey harvested from the Masai Mara region",
    price: "KSh 550",
    image: "https://images.unsplash.com/photo-1587049352851-8d4e89133924?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    badge: "Limited",
  },
  {
    id: 4,
    name: "Premium Kenyan Tea",
    description: "High-altitude grown tea from the slopes of Mt. Kenya",
    price: "KSh 480",
    image: "https://images.unsplash.com/photo-1565200583447-3719b33e9b70?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    badge: "Bestseller",
  },
];

const FeaturedProducts = () => {
  return (
    <section id="products" className="section-container bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Premium Selections</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover our carefully curated products from the heart of Kenya
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="card-highlight group hover:translate-y-[-4px]">
            <div className="relative h-48 overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {product.badge && (
                <Badge className="absolute top-2 right-2 bg-kenya-yellow text-gray-800 hover:bg-kenya-yellow-dark">
                  {product.badge}
                </Badge>
              )}
            </div>
            <CardHeader className="pb-2">
              <CardTitle className="text-xl font-semibold">{product.name}</CardTitle>
              <CardDescription className="line-clamp-2 h-10">
                {product.description}
              </CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-between items-center pt-2">
              <span className="font-bold text-gray-900">{product.price}</span>
              <Button size="sm" className="bg-kenya-blue hover:bg-kenya-blue-dark">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Add
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="text-center mt-12">
        <Button className="btn-primary">View All Products</Button>
      </div>
    </section>
  );
};

export default FeaturedProducts;
