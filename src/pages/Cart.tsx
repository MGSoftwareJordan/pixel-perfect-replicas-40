
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Heart, ShoppingBag, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
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

  const addToWishlist = (itemId: number) => {
    console.log("Added to wishlist:", itemId);
    // In a real app, this would save to wishlist in state/context/backend
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      
      <main className="flex-grow container mx-auto max-w-6xl px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-[#00262F] mb-2">Winkelwagen</h1>
          <p className="text-gray-500 mb-8">Bekijk en beheer je geselecteerde items</p>
        
          {cartItems.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                <ShoppingBag className="w-8 h-8 text-gray-400" />
              </div>
              <p className="text-xl font-medium text-[#00262F] mb-4">Je winkelwagen is leeg</p>
              <p className="text-gray-500 max-w-md mx-auto mb-8">
                Het lijkt erop dat je nog geen items aan je winkelwagen hebt toegevoegd.
              </p>
              <Button asChild className="bg-[#1EC0A3] hover:bg-[#19a88e] rounded-lg text-white px-6">
                <Link to="/sneakers">Bekijk producten</Link>
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart items */}
              <div className="lg:col-span-2 space-y-6">
                {cartItems.map(item => (
                  <Card key={item.id} className="overflow-hidden border border-gray-100 shadow-sm">
                    <CardContent className="p-0">
                      <div className="flex flex-col sm:flex-row gap-6 p-6">
                        <div className="sm:w-32 h-32 rounded-lg overflow-hidden bg-gray-50 flex-shrink-0">
                          <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                        </div>
                        
                        <div className="flex-grow space-y-4">
                          <div className="flex justify-between">
                            <div>
                              <h3 className="font-bold text-[#00262F] text-lg">{item.name}</h3>
                              <div className="flex gap-2 mt-1">
                                <span className="text-sm py-0.5 px-2 bg-gray-100 rounded-full text-gray-700">
                                  Maat: {item.size}
                                </span>
                                {item.color && (
                                  <span className="text-sm py-0.5 px-2 bg-gray-100 rounded-full text-gray-700">
                                    Kleur: {item.color}
                                  </span>
                                )}
                              </div>
                            </div>
                            <p className="font-bold text-lg text-[#00262F]">€{item.price.toFixed(2)}</p>
                          </div>
                          
                          <div className="flex items-center justify-between pt-2">
                            <div className="flex items-center gap-4">
                              <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                                <button 
                                  className="px-3 py-1.5 bg-gray-50 text-gray-600 hover:bg-gray-100 transition-colors" 
                                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                  aria-label="Decrease quantity"
                                >
                                  -
                                </button>
                                <Input 
                                  type="number" 
                                  value={item.quantity}
                                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value, 10))}
                                  className="w-12 h-9 text-center border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                                  aria-label="Quantity"
                                />
                                <button 
                                  className="px-3 py-1.5 bg-gray-50 text-gray-600 hover:bg-gray-100 transition-colors" 
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                  aria-label="Increase quantity"
                                >
                                  +
                                </button>
                              </div>
                              
                              <button 
                                className="flex items-center gap-1 text-gray-500 hover:text-[#1EC0A3] transition-colors text-sm"
                                onClick={() => addToWishlist(item.id)}
                                aria-label="Add to wishlist"
                              >
                                <Heart size={18} />
                                <span>Bewaren</span>
                              </button>
                            </div>
                            
                            <button 
                              className="flex items-center gap-1 text-red-500 hover:text-red-700 transition-colors text-sm"
                              onClick={() => removeItem(item.id)}
                              aria-label="Remove item"
                            >
                              <Trash2 size={18} />
                              <span>Verwijderen</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              {/* Order summary */}
              <div className="lg:col-span-1">
                <Card className="border border-gray-100 shadow-sm sticky top-24">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl text-[#00262F]">Samenvatting</CardTitle>
                  </CardHeader>
                  
                  <CardContent className="space-y-5">
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Subtotaal</span>
                        <span className="font-medium">€{subtotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Verzending</span>
                        <span className="font-medium">€{shipping.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Servicekosten</span>
                        <span className="font-medium">€{serviceCharges.toFixed(2)}</span>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-gray-100">
                      <div className="flex justify-between items-center text-[#00262F]">
                        <span className="font-bold">Totaal</span>
                        <span className="font-bold text-lg">€{total.toFixed(2)}</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1 text-right">Inclusief BTW</p>
                    </div>
                    
                    <div className="pt-3">
                      <Button asChild className="w-full bg-[#00262F] hover:bg-[#001a24] h-11 rounded-lg font-medium">
                        <Link to="/checkout" className="flex items-center justify-center gap-2">
                          Afrekenen
                          <ArrowRight size={18} />
                        </Link>
                      </Button>
                      <div className="text-center mt-4">
                        <Link to="/sneakers" className="text-sm text-[#1EC0A3] hover:underline">
                          Verder winkelen
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Cart;
