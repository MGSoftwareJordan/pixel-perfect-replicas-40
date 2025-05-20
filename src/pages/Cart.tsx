
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Header from '@/components/boxstock/Header';
import Footer from '@/components/boxstock/Footer';

// Mock cart data - in a real app this would come from context or state management
const initialCartItems = [
  {
    id: 1,
    name: 'BAPE Color Camo Relaxed Fit Long-Sleeve Tee',
    color: 'Purple',
    size: '46',
    price: 218.00,
    image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/e1ad84d1ff291f4f339854893a1c0bfa59bc73ca?placeholderIfAbsent=true',
    quantity: 1
  }
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = 10.00;
  const serviceCharges = 10.00;
  const total = subtotal + shipping + serviceCharges;
  
  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(cartItems.map(item => 
      item.id === id ? {...item, quantity: newQuantity} : item
    ));
  };
  
  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      
      <main className="flex-grow container mx-auto max-w-6xl px-4 py-8">
        <h1 className="text-3xl font-bold text-[#00262F] mb-8">Winkelwagen</h1>
        
        {cartItems.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg mb-6">Je winkelwagen is leeg</p>
            <Button asChild className="bg-[#1EC0A3] hover:bg-[#19a88e]">
              <Link to="/sneakers">Verder winkelen</Link>
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart items */}
            <div className="lg:col-span-2 space-y-6">
              {cartItems.map(item => (
                <div key={item.id} className="flex flex-col sm:flex-row gap-4 border border-gray-200 rounded-lg p-4">
                  <div className="sm:w-32 h-32 overflow-hidden rounded-md bg-gray-100 flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="font-bold text-[#00262F]">{item.name}</h3>
                        <p className="text-sm text-gray-600">Maat: {item.size}</p>
                      </div>
                      <p className="font-bold">€{item.price.toFixed(2)}</p>
                    </div>
                    
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center border border-gray-200 rounded-md">
                          <button 
                            className="px-3 py-1 text-gray-600 hover:bg-gray-100" 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            -
                          </button>
                          <Input 
                            type="number" 
                            value={item.quantity}
                            onChange={(e) => updateQuantity(item.id, parseInt(e.target.value, 10))}
                            className="w-12 h-9 text-center border-0 focus:ring-0 focus-visible:ring-0"
                          />
                          <button 
                            className="px-3 py-1 text-gray-600 hover:bg-gray-100" 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            +
                          </button>
                        </div>
                        
                        <button 
                          className="text-[#00262F] hover:text-[#1EC0A3] transition-colors"
                          onClick={() => {}}
                        >
                          <Heart size={20} />
                        </button>
                      </div>
                      
                      <button 
                        className="text-red-500 hover:text-red-700 transition-colors"
                        onClick={() => removeItem(item.id)}
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Order summary */}
            <div className="lg:col-span-1">
              <div className="border border-gray-200 rounded-lg p-6 sticky top-24">
                <h2 className="text-xl font-semibold text-[#00262F] mb-6">Samenvatting</h2>
                
                <div className="space-y-3 text-sm mb-6">
                  <div className="flex justify-between">
                    <span>Subtotaal</span>
                    <span>€{subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Verzending</span>
                    <span>€{shipping.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Servicekosten</span>
                    <span>€{serviceCharges.toFixed(2)}</span>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-4 mb-6">
                  <div className="flex justify-between text-base font-semibold">
                    <span>Totaal</span>
                    <span>€{total.toFixed(2)}</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Inclusief BTW</p>
                </div>
                
                <Button asChild className="w-full bg-[#00262F] hover:bg-[#001a24]">
                  <Link to="/checkout">Afrekenen</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Cart;
