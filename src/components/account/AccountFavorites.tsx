
import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const AccountFavorites: React.FC = () => {
  // Mock data for favorites
  const favoriteProducts = [
    {
      id: 1,
      name: "Nike x Off-White Hat 'Black'",
      image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=2664&auto=format&fit=crop",
      price: "€0,00",
    },
    {
      id: 2,
      name: "1017 ALYX 9SM Polar Hat 'Black' Fall/Winter 2021",
      image: "https://images.unsplash.com/photo-1521369909029-2afed882baee?q=80&w=2670&auto=format&fit=crop",
      price: "€0,00",
    },
    {
      id: 3,
      name: "New Balance 997 'Brown Leather'",
      image: "https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=2671&auto=format&fit=crop",
      price: "€0,00",
    }
  ];

  // State for managing favorites
  const [favorites, setFavorites] = useState(favoriteProducts);

  // Function to remove item from favorites
  const removeFromFavorites = (id: number) => {
    setFavorites(favorites.filter(item => item.id !== id));
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-[#00262F]">Jouw Favorieten</h1>
      </div>
      
      <p className="text-gray-500 mb-6">
        Bekijk al je favoriete sneakers en releases hier.
      </p>
      
      <Tabs defaultValue="products" className="mb-8">
        <TabsList className="mb-6">
          <TabsTrigger value="products" className="px-8">Producten</TabsTrigger>
          <TabsTrigger value="releases" className="px-8">Releases</TabsTrigger>
        </TabsList>
        
        <TabsContent value="products">
          {favorites.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {favorites.map((product) => (
                <Card key={product.id} className="overflow-hidden group border-gray-100 relative">
                  <button 
                    onClick={() => removeFromFavorites(product.id)}
                    className="absolute top-2 right-2 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm text-red-500 z-10 hover:bg-white"
                  >
                    <Heart className="h-4 w-4 fill-current" />
                  </button>
                  
                  <div className="relative h-48">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  
                  <div className="p-4">
                    <h3 className="font-medium text-[#00262F] mb-2">{product.name}</h3>
                    <p className="font-bold text-[#E41A36]">{product.price}</p>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-gray-50 rounded-xl">
              <div className="mx-auto w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <Heart size={24} className="text-gray-400" />
              </div>
              <h3 className="font-medium text-[#00262F] mb-1">Geen favorieten</h3>
              <p className="text-gray-500">Je hebt nog geen producten toegevoegd aan je favorieten.</p>
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="releases">
          <div className="text-center py-16 bg-gray-50 rounded-xl">
            <div className="mx-auto w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <Heart size={24} className="text-gray-400" />
            </div>
            <h3 className="font-medium text-[#00262F] mb-1">Geen releases</h3>
            <p className="text-gray-500">Je hebt nog geen releases toegevoegd aan je favorieten.</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AccountFavorites;
