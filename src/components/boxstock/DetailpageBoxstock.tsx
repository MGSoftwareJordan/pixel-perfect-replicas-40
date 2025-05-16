import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import AddOfferFlow from '@/components/account/AddOfferFlow';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { Skeleton } from "@/components/ui/skeleton";

// Mock products data for search feature
const MOCK_PRODUCTS = [
  { id: 1, name: "Nike Dunk Low Panda", image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7", brand: "Nike", price: "€149.99" },
  { id: 2, name: "Jordan 1 Retro High OG", image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b", brand: "Jordan", price: "€189.99" },
  { id: 3, name: "Adidas Yeezy Boost 350", image: "https://images.unsplash.com/photo-1518770660439-4636190af475", brand: "Adidas", price: "€220.00" },
  { id: 4, name: "New Balance 550", image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6", brand: "New Balance", price: "€120.00" },
  { id: 5, name: "Puma Suede Classic", image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d", brand: "Puma", price: "€80.00" },
  { id: 6, name: "Converse Chuck Taylor", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158", brand: "Converse", price: "€70.00" },
];

const DetailpageBoxstock: React.FC = () => {
  const [offerModalOpen, setOfferModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  // Keep selectedProduct state but don't pass it to AddOfferFlow if the component doesn't accept it
  const [selectedProduct, setSelectedProduct] = useState<typeof MOCK_PRODUCTS[0] | null>(null);
  
  // Filter products based on search query
  const filteredProducts = MOCK_PRODUCTS.filter((product) => 
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.brand.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <div className="container mx-auto py-8">
      <div className="bg-white shadow-sm rounded-lg p-8">
        <h1 className="text-2xl font-bold mb-6">Verkoop je product</h1>
        <p className="text-gray-600 mb-8">
          Plaats eenvoudig je tweedehands items of resell producten op BoxStock
        </p>
        
        <Popover>
          <PopoverTrigger asChild>
            <Button 
              className="bg-[#1EC0A3] hover:bg-[#18a88f] flex gap-2 items-center"
            >
              <Search className="h-4 w-4" />
              Zoek product om te resellen
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-96 p-4">
            <div className="space-y-4">
              <h3 className="font-medium text-[#00262F]">Zoek een product</h3>
              <div className="flex gap-2">
                <Input
                  placeholder="Zoek op naam, merk..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1"
                />
              </div>
              
              <div className="grid grid-cols-3 gap-2">
                {searchQuery.length > 0 ? (
                  filteredProducts.slice(0, 6).map((product) => (
                    <div 
                      key={product.id} 
                      className="cursor-pointer hover:opacity-80 transition-opacity"
                      onClick={() => {
                        setSelectedProduct(product);
                        setOfferModalOpen(true);
                      }}
                    >
                      <div className="relative aspect-square overflow-hidden rounded-md mb-1">
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <p className="text-xs truncate">{product.name}</p>
                      <p className="text-xs font-medium">{product.price}</p>
                    </div>
                  ))
                ) : (
                  Array(6).fill(0).map((_, i) => (
                    <div key={i} className="space-y-1">
                      <Skeleton className="h-20 w-full" />
                      <Skeleton className="h-3 w-full" />
                      <Skeleton className="h-3 w-2/3" />
                    </div>
                  ))
                )}
              </div>
              
              {searchQuery.length > 0 && filteredProducts.length === 0 && (
                <p className="text-sm text-gray-500 text-center py-4">
                  Geen producten gevonden voor "{searchQuery}"
                </p>
              )}
              
              <div className="flex justify-between pt-2">
                <p className="text-xs text-gray-500">
                  Producten niet gevonden?
                </p>
                <Button 
                  variant="link" 
                  className="text-xs p-0 h-auto text-[#1EC0A3]"
                  onClick={() => {
                    setSelectedProduct(null);
                    setOfferModalOpen(true);
                  }}
                >
                  Maak handmatig aan
                </Button>
              </div>
            </div>
          </PopoverContent>
        </Popover>
        
        <div className="mt-4">
          <Button 
            variant="outline"
            onClick={() => {
              setSelectedProduct(null);
              setOfferModalOpen(true);
            }}
            className="text-[#00262F]"
          >
            Tweedehands item verkopen
          </Button>
        </div>
        
        <AddOfferFlow 
          open={offerModalOpen} 
          onClose={() => setOfferModalOpen(false)}
          // Remove the selectedProduct prop since AddOfferFlow doesn't accept it
        />
      </div>
    </div>
  );
};

export default DetailpageBoxstock;
