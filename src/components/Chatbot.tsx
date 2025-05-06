
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Send } from "lucide-react";
import { products } from "@/components/FeaturedProducts";
import { useCartStore } from "@/stores/cartStore";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

interface Message {
  id: string;
  type: 'user' | 'bot';
  text: string;
  products?: typeof products;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "bot",
      text: "👋 Hello! I'm your DC Supermarket assistant. How can I help you today?"
    }
  ]);
  const { addToCart } = useCartStore();
  const navigate = useNavigate();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  
  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };
  
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      text: input
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    
    // Process the message
    processMessage(input);
  };

  const processMessage = (message: string) => {
    message = message.toLowerCase();
    
    // Check for greetings
    if (message.includes("hello") || message.includes("hi") || message.includes("hey")) {
      setTimeout(() => {
        addBotMessage("Hello! How can I help you with your shopping today?");
      }, 500);
      return;
    }
    
    // Search for products
    if (
      message.includes("find") || 
      message.includes("search") || 
      message.includes("looking for") || 
      message.includes("where") || 
      message.includes("have") || 
      message.includes("sell")
    ) {
      const searchResults = products.filter(product => 
        product.name.toLowerCase().includes(message) || 
        product.description.toLowerCase().includes(message) ||
        product.category.toLowerCase().includes(message)
      );
      
      if (searchResults.length > 0) {
        setTimeout(() => {
          addBotMessage(
            `I found ${searchResults.length} products that might interest you:`, 
            searchResults.slice(0, 3)
          );
        }, 600);
      } else {
        setTimeout(() => {
          addBotMessage("I couldn't find specific products matching your request. Can you try with different keywords or browse our categories?");
        }, 600);
      }
      return;
    }
    
    // Help with checkout
    if (message.includes("checkout") || message.includes("payment") || message.includes("buy") || message.includes("purchase")) {
      setTimeout(() => {
        addBotMessage("To complete your purchase, you can go to your cart and click 'Proceed to Checkout'. Would you like me to take you to your cart now?", [
          {
            id: 999,
            name: "Go to Cart",
            description: "View your shopping cart",
            price: "",
            numericPrice: 0,
            image: "",
            category: "action"
          }
        ]);
      }, 600);
      return;
    }
    
    // For other inquiries
    setTimeout(() => {
      addBotMessage("I'm here to help you find products or assist with your shopping. You can ask me about specific products, categories, or how to checkout.");
    }, 600);
  };
  
  const addBotMessage = (text: string, productResults?: typeof products) => {
    const botMessage: Message = {
      id: Date.now().toString(),
      type: "bot",
      text,
      products: productResults
    };
    
    setMessages(prev => [...prev, botMessage]);
  };
  
  const handleAddToCart = (product: typeof products[0]) => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };
  
  const handleProductAction = (product: typeof products[0]) => {
    if (product.id === 999) {
      // Special case for "Go to Cart" action
      navigate("/cart");
      setIsOpen(false);
    } else {
      handleAddToCart(product);
    }
  };
  
  return (
    <>
      {/* Chatbot Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={toggleChatbot}
          className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center ${
            isOpen ? "bg-red-500 hover:bg-red-600" : "bg-kenya-blue hover:bg-kenya-blue-dark"
          }`}
        >
          {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        </Button>
      </div>
      
      {/* Chatbot Panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 sm:w-96 h-[500px] bg-white rounded-lg shadow-xl z-50 flex flex-col">
          {/* Header */}
          <div className="bg-kenya-blue text-white p-4 rounded-t-lg">
            <h3 className="font-semibold">DC Supermarket Assistant</h3>
            <p className="text-xs opacity-80">Ask me anything about our products!</p>
          </div>
          
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map(message => (
              <div 
                key={message.id} 
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.type === 'user' 
                      ? 'bg-kenya-blue text-white' 
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  <p>{message.text}</p>
                  
                  {/* Product results */}
                  {message.products && message.products.length > 0 && (
                    <div className="mt-2 space-y-2">
                      {message.products.map(product => (
                        <div key={product.id} className="bg-white rounded-md p-2 shadow-sm">
                          <div className="flex items-center">
                            {product.image && (
                              <img 
                                src={product.image} 
                                alt={product.name} 
                                className="w-12 h-12 object-cover rounded-md mr-2"
                              />
                            )}
                            <div className="flex-grow">
                              <p className="font-medium text-gray-800">{product.name}</p>
                              {product.price && (
                                <p className="text-sm text-gray-600">{product.price}</p>
                              )}
                            </div>
                          </div>
                          <div className="mt-2 flex justify-end">
                            {product.category === "action" ? (
                              <Button 
                                size="sm" 
                                onClick={() => handleProductAction(product)}
                                className="text-xs bg-kenya-yellow text-gray-800 hover:bg-kenya-yellow-dark"
                              >
                                {product.name}
                              </Button>
                            ) : (
                              <>
                                <Button 
                                  variant="outline" 
                                  size="sm" 
                                  className="text-xs mr-2"
                                  onClick={() => navigate(`/product/${product.id}`)}
                                >
                                  View
                                </Button>
                                <Button 
                                  size="sm" 
                                  onClick={() => handleAddToCart(product)}
                                  className="text-xs bg-kenya-blue hover:bg-kenya-blue-dark"
                                >
                                  Add to Cart
                                </Button>
                              </>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          
          {/* Input */}
          <form onSubmit={handleSendMessage} className="p-4 border-t">
            <div className="flex">
              <Input
                type="text"
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-grow"
              />
              <Button 
                type="submit" 
                className="ml-2 bg-kenya-blue hover:bg-kenya-blue-dark"
              >
                <Send size={18} />
              </Button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Chatbot;
