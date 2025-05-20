
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCartStore } from "@/stores/cartStore";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate, Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { toast } from "sonner";
import {useUser} from "@clerk/clerk-react";

const Checkout = () => {
  const navigate = useNavigate();
  const { items, getTotalItems, getTotalPrice, clearCart } = useCartStore();
  const {user} = useUser()
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zipCode: "",
    paymentMethod: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate order processing
    toast.success("Order placed successfully!");
    clearCart();
    navigate("/order-success");
  };
  const handlePayment = () => {
    if (formData.paymentMethod === 'mpesa'){

    }
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <main className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-16">
            <ShoppingCart className="h-16 w-16 mx-auto text-gray-400 mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">You need to add items to your cart before checkout.</p>
            <Link to="/products">
              <Button className="bg-kenya-blue hover:bg-kenya-blue-dark">
                Browse Products
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit}>
              <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={user?.firstName || formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={user?.lastName || formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={user?.emailAddresses[0].emailAddress || formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
                <div>
                  <Label htmlFor="address">Address</Label>
                  <Input
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <Label htmlFor="city">City</Label>
                    <Input
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="zipCode">ZIP / Postal Code</Label>
                    <Input
                      id="zipCode"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Input
                      type="radio"
                      id="mpesa"
                      name="paymentMethod"
                      value="mpesa"
                      checked={formData.paymentMethod === "mpesa"}
                      onChange={handleChange}
                      className="w-4 h-4"
                    />
                    <Label htmlFor="mpesa" className="ml-2">M-Pesa</Label>
                  </div>
                  <div className="flex items-center">
                    <Input
                      type="radio"
                      id="card"
                      name="paymentMethod"
                      value="card"
                      checked={formData.paymentMethod === "card"}
                      onChange={handleChange}
                      className="w-4 h-4"
                    />
                    <Label htmlFor="card" className="ml-2">Credit/Debit Card</Label>
                  </div>
                  <div className="flex items-center">
                    <Input
                      type="radio"
                      id="cash"
                      name="paymentMethod"
                      value="cash"
                      checked={formData.paymentMethod === "cash"}
                      onChange={handleChange}
                      className="w-4 h-4"
                    />
                    <Label htmlFor="cash" className="ml-2">Cash on Delivery</Label>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 lg:hidden">
                {formData.paymentMethod === 'mpesa' && (
                    <Button
                        type="submit"
                        className="w-full bg-kenya-blue hover:bg-kenya-blue-dark font-medium"
                        onClick={handlePayment}
                    >
                      Complete Order with Mpesa
                    </Button>
                )}
                {formData.paymentMethod === 'card' && (
                    <Button
                        type="submit"
                        className="w-full bg-kenya-blue hover:bg-kenya-blue-dark font-medium"
                        onClick={handlePayment}
                    >
                      Complete Order with Card
                    </Button>
                )}{formData.paymentMethod === 'cash' && (
                  <Button
                      type="submit"
                      className="w-full bg-kenya-blue hover:bg-kenya-blue-dark font-medium"
                      onClick={handlePayment}
                  >
                    Complete Order on delivery
                  </Button>
              )}
              </div>
            </form>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 h-fit lg:sticky lg:top-20">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Order Summary</h2>
            
            <div className="max-h-80 overflow-y-auto mb-4">
              {items.map(item => (
                <div key={item.product.id} className="flex py-2 border-b">
                  <div className="w-16 h-16 flex-shrink-0">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                  <div className="ml-4 flex-grow">
                    <p className="font-medium">{item.product.name}</p>
                    <div className="flex justify-between mt-1">
                      <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                      <p>{item.product.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Items ({getTotalItems()})</span>
                <span className="font-medium">KSh {getTotalPrice().toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="font-medium">KSh 250</span>
              </div>
              <div className="border-t border-gray-200 pt-4 flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>KSh {(getTotalPrice() + 250).toLocaleString()}</span>
              </div>
              
              <form onSubmit={handleSubmit} className="hidden lg:block">
                {formData.paymentMethod === 'mpesa' && (
                    <Button
                        type="submit"
                        className="w-full bg-kenya-blue hover:bg-kenya-blue-dark font-medium"
                        onClick={handlePayment}
                    >
                      Complete Order with Mpesa
                    </Button>
                )}
                {formData.paymentMethod === 'card' && (
                    <Button
                        type="submit"
                        className="w-full bg-kenya-blue hover:bg-kenya-blue-dark font-medium"
                        onClick={handlePayment}
                    >
                      Complete Order with Card
                    </Button>
                )}{formData.paymentMethod === 'cash' && (
                  <Button
                      type="submit"
                      className="w-full bg-kenya-blue hover:bg-kenya-blue-dark font-medium"
                      onClick={handlePayment}
                  >
                    Complete Order on delivery
                  </Button>
              )}
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;
