
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";

export interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  numericPrice: number;
  image: string;
  badge?: string;
  category: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Organic Kenyan Coffee",
    description: "Premium AA grade coffee beans from the highlands of Kenya",
    price: "KSh 750",
    numericPrice: 750,
    image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    badge: "Premium",
    category: "Beverages",
  },
  {
    id: 2,
    name: "Fresh Avocados",
    description: "Creamy, locally sourced Hass avocados from Nyeri",
    price: "KSh 320",
    numericPrice: 320,
    image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    badge: "Organic",
    category: "Fruits",
  },
  {
    id: 3,
    name: "Masai Honey",
    description: "Pure, wild honey harvested from the Masai Mara region",
    price: "KSh 550",
    numericPrice: 550,
    image: "https://images.unsplash.com/photo-1587049352851-8d4e89133924?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    badge: "Limited",
    category: "Specialty",
  },
  {
    id: 4,
    name: "Premium Kenyan Tea",
    description: "High-altitude grown tea from the slopes of Mt. Kenya",
    price: "KSh 480",
    numericPrice: 480,
    image: "https://images.unsplash.com/photo-1565200583447-3719b33e9b70?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    badge: "Bestseller",
    category: "Beverages",
  },
  {
    id: 5,
    name: "Free-Range Eggs",
    description: "Farm fresh eggs from free-range chickens",
    price: "KSh 340",
    numericPrice: 340,
    image: "https://images.unsplash.com/photo-1587486913049-53fc88980cfc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    badge: "Fresh",
    category: "Dairy",
  },
  {
    id: 6,
    name: "Organic Kale",
    description: "Locally grown organic kale, rich in nutrients",
    price: "KSh 120",
    numericPrice: 120,
    image: "https://images.unsplash.com/photo-1524179091875-bf99a9a6af57?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Vegetables",
  },
  {
    id: 7,
    name: "Nairobi Craft Beer",
    description: "Artisanal beer brewed in small batches in Nairobi",
    price: "KSh 380",
    numericPrice: 380,
    image: "https://images.unsplash.com/photo-1566633806327-68e152aaf26d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    badge: "Artisanal",
    category: "Beverages",
  },
  {
    id: 8,
    name: "Macadamia Nuts",
    description: "Premium grade macadamia nuts grown in central Kenya",
    price: "KSh 620",
    numericPrice:
    620,
    image: "https://images.unsplash.com/photo-1600189020673-f773b5128207?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Nuts",
  }
];

const FeaturedProducts = () => {
  const { addToCart } = useCartStore();

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <section id="products" className="section-container bg-gray-50 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Premium Selections</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover our carefully curated products from DC Supermarket
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {products.slice(0, 8).map((product) => (
          <Card key={product.id} className="card-highlight group hover:translate-y-[-4px] transition-all">
            <Link to={`/product/${product.id}`} className="block">
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
            </Link>
            <CardHeader className="pb-2">
              <Link to={`/product/${product.id}`}>
                <CardTitle className="text-xl font-semibold hover:text-kenya-blue-dark transition-colors">
                  {product.name}
                </CardTitle>
              </Link>
              <CardDescription className="line-clamp-2 h-10">
                {product.description}
              </CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-between items-center pt-2">
              <span className="font-bold text-gray-900">{product.price}</span>
              <Button 
                size="sm" 
                className="bg-kenya-blue hover:bg-kenya-blue-dark"
                onClick={() => handleAddToCart(product)}
              >
                <ShoppingCart className="h-4 w-4 mr-2" />
                Add
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link to="/products">
          <Button className="btn-primary">View All Products</Button>
        </Link>
      </div>
    </section>
  );
};

export default FeaturedProducts;
