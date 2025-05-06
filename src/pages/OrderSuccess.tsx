
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, Home, Package } from "lucide-react";

const OrderSuccess = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="py-16 max-w-3xl mx-auto px-4 text-center">
        <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Order Placed Successfully!</h1>
        <p className="text-gray-600 mb-8">
          Thank you for shopping with DC Supermarket. Your order has been received and is being processed.
        </p>
        
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">What's Next?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="flex flex-col items-center text-center">
              <Package className="w-10 h-10 text-kenya-blue-dark mb-3" />
              <h3 className="font-medium mb-2">Order Processing</h3>
              <p className="text-sm text-gray-600">
                We're preparing your order for delivery. You'll receive an email with tracking info soon.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Package className="w-10 h-10 text-kenya-blue-dark mb-3" />
              <h3 className="font-medium mb-2">Shipping</h3>
              <p className="text-sm text-gray-600">
                Orders are typically delivered within 1-3 business days in Nairobi and 3-7 days nationwide.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Package className="w-10 h-10 text-kenya-blue-dark mb-3" />
              <h3 className="font-medium mb-2">Support</h3>
              <p className="text-sm text-gray-600">
                If you have any questions, please contact our customer service team.
              </p>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/">
            <Button className="flex items-center">
              <Home className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <Link to="/products">
            <Button variant="outline" className="flex items-center">
              Continue Shopping
            </Button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OrderSuccess;
