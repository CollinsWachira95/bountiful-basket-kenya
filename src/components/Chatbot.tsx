
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Send, ShoppingCart } from "lucide-react";
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
      text: "👋 Hello! I'm your DC Supermarket assistant. How can I help you today? You can ask me about products, or tell me what you want to buy."
    }
  ]);
  const { addToCart, items } = useCartStore();
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

  const findProductsByKeywords = (message: string): typeof products => {
    // Common grocery items keywords
    const commonKeywords = [
      { words: ["tea", "tea leaves", "teabag"], category: "tea" },
      { words: ["sugar", "sweetener"], category: "sugar" },
      { words: ["milk", "dairy"], category: "milk" },
      { words: ["bread", "loaf"], category: "bread" },
      { words: ["rice", "grain"], category: "rice" },
      { words: ["vegetable", "veggies", "veg"], category: "vegetables" },
      { words: ["fruit", "apple", "banana", "orange"], category: "fruits" },
      { words: ["meat", "beef", "chicken", "pork"], category: "meat" },
      { words: ["coffee", "caffeine"], category: "coffee" },
      { words: ["oil", "cooking oil"], category: "oil" },
      { words: ["flour", "baking"], category: "flour" },
      { words: ["water", "drink", "beverage"], category: "beverages" },
      { words: ["snack", "chips", "crisps"], category: "snacks" },
      { words: ["soap", "detergent", "cleaning"], category: "cleaning" },
      { words: ["cereal", "breakfast"], category: "cereal" }
    ];

    message = message.toLowerCase();
    const matchedProducts: (typeof products[0])[] = [];

    // First try direct product name matching
    const directMatches = products.filter(product => 
      message.includes(product.name.toLowerCase())
    );
    
    if (directMatches.length > 0) {
      return directMatches;
    }

    // Try category matching
    const wordsList = message.split(/\s+/);
    
    for (const keyword of commonKeywords) {
      for (const word of keyword.words) {
        if (message.includes(word)) {
          const categoryProducts = products.filter(product => 
            product.category.toLowerCase().includes(keyword.category) || 
            product.name.toLowerCase().includes(word)
          );
          
          if (categoryProducts.length > 0) {
            matchedProducts.push(...categoryProducts);
          }
        }
      }
    }

    // Also check specific quantities if mentioned
    const quantityRegex = /(\d+)\s*(kg|kilo|gram|g|packet|pack|bottle|bottles|box|boxes|item|items)/i;
    const quantityMatch = message.match(quantityRegex);

    if (quantityMatch && matchedProducts.length === 0) {
      // Extract what product they're looking for
      const quantity = quantityMatch[0];
      const productMessage = message.replace(quantity, "").trim();
      
      return products.filter(product => 
        productMessage.includes(product.name.toLowerCase()) || 
        product.description.toLowerCase().includes(productMessage)
      );
    }

    return [...new Set(matchedProducts)]; // Remove duplicates
  };

  const processMessage = (message: string) => {
    message = message.toLowerCase();
    
    // Check for greetings
    if (message.includes("hello") || message.includes("hi") || message.includes("hey")) {
      setTimeout(() => {
        addBotMessage("Hello! How can I help you with your shopping today? You can ask me for products like 'I want tea leaves' or 'Do you have sugar?'");
      }, 500);
      return;
    }
    
    // Check if user wants to purchase something
    const purchaseIndicators = [
      "want", "need", "looking for", "find", "buy", "purchase", 
      "get", "have", "where is", "where are", "show me", "i want", 
      "can i get", "do you sell", "do you have"
    ];
    
    const isPurchaseIntent = purchaseIndicators.some(indicator => message.includes(indicator));
    
    if (isPurchaseIntent) {
      const foundProducts = findProductsByKeywords(message);
      
      if (foundProducts.length > 0) {
        setTimeout(() => {
          addBotMessage(
            `I found ${foundProducts.length} products that match what you're looking for:`, 
            foundProducts.slice(0, 3)
          );
        }, 600);
      } else {
        setTimeout(() => {
          addBotMessage("I couldn't find specific products matching your request. Can you try describing what you're looking for differently? For example, 'I want to buy tea leaves' or 'Do you have sugar?'");
        }, 600);
      }
      return;
    }
    
    // Check for cart info request
    if (message.includes("cart") || message.includes("basket") || message.includes("my items")) {
      if (items.length === 0) {
        setTimeout(() => {
          addBotMessage("Your shopping cart is currently empty. Would you like me to help you find products to add?");
        }, 500);
      } else {
        setTimeout(() => {
          addBotMessage(`You have ${items.length} item(s) in your cart. Would you like to check out now?`, [
            {
              id: 999,
              name: "View Cart",
              description: "See your current shopping cart",
              price: "",
              numericPrice: 0,
              image: "",
              category: "action"
            },
            {
              id: 998,
              name: "Checkout",
              description: "Proceed to checkout",
              price: "",
              numericPrice: 0,
              image: "",
              category: "action"
            }
          ]);
        }, 500);
      }
      return;
    }
    
    // Help with checkout
    if (message.includes("checkout") || message.includes("payment") || message.includes("buy") || message.includes("purchase") || message.includes("pay")) {
      setTimeout(() => {
        addBotMessage("To complete your purchase, you can go to your cart and then checkout. Would you like me to take you there now?", [
          {
            id: 999,
            name: "View Cart",
            description: "See your current shopping cart",
            price: "",
            numericPrice: 0,
            image: "",
            category: "action"
          },
          {
            id: 998,
            name: "Checkout",
            description: "Proceed directly to checkout",
            price: "",
            numericPrice: 0,
            image: "",
            category: "action"
          }
        ]);
      }, 600);
      return;
    }

    // Help with categories or browsing
    if (message.includes("what") && (message.includes("products") || message.includes("categories") || message.includes("sell") || message.includes("offer"))) {
      const categories = [...new Set(products.map(product => product.category))];
      setTimeout(() => {
        addBotMessage(`We offer products in these categories: ${categories.join(", ")}. What are you interested in?`);
      }, 600);
      return;
    }
    
    // For other inquiries
    setTimeout(() => {
      addBotMessage("I'm here to help you find products or assist with your shopping. You can ask me about specific products like 'I want tea leaves' or 'Do you sell sugar?'. You can also ask to view your cart or checkout.");
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
    
    // Provide feedback in the chat
    setTimeout(() => {
      addBotMessage(`I've added ${product.name} to your cart. Anything else you'd like to add?`);
    }, 500);
  };
  
  const handleProductAction = (product: typeof products[0]) => {
    if (product.id === 999) {
      // Go to Cart action
      navigate("/cart");
      setIsOpen(false);
    } else if (product.id === 998) {
      // Go to Checkout action
      navigate("/checkout");
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
          <div className="bg-kenya-blue text-white p-4 rounded-t-lg flex justify-between items-center">
            <div>
              <h3 className="font-semibold">DC Supermarket Assistant</h3>
              <p className="text-xs opacity-80">Ask for products or shopping help!</p>
            </div>
            {items.length > 0 && (
              <div 
                className="flex items-center bg-white text-kenya-blue px-2 py-1 rounded-full cursor-pointer"
                onClick={() => navigate('/cart')}
              >
                <ShoppingCart size={16} className="mr-1" />
                <span className="text-xs font-medium">{items.length}</span>
              </div>
            )}
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
                placeholder="Ask for products (e.g., 'I need sugar')"
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
