
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Filter, Search, Star, Heart } from 'lucide-react';

interface PreOwnedProductsProps {
  limit?: number;
  showHeading?: boolean;
}

const PreOwnedProducts: React.FC<PreOwnedProductsProps> = ({ 
  limit, 
  showHeading = true 
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  const categories = [
    { id: 'all', name: 'Alle items' },
    { id: 'sneakers', name: 'Sneakers' },
    { id: 'clothing', name: 'Kleding' },
    { id: 'accessories', name: 'Accessoires' },
    { id: 'bags', name: 'Tassen' }
  ];
  
  const products = [
    {
      id: 1,
      brand: 'Air Jordan',
      name: 'Nike Air Mowabb Comme des Garcons Black',
      price: '€178',
      image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/56c5b409cc96b961d2c99ebaa3e2ba425f3dd0b9?placeholderIfAbsent=true',
      rating: 4,
      sellerRating: 4.8,
      sellerName: 'SneakerHeads',
      category: 'sneakers'
    },
    {
      id: 2,
      brand: 'Air Jordan',
      name: 'Nike Air Mowabb Comme des Garcons Black',
      price: '€178',
      image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/1209df7af3652089ec3aab75c4ce28741fb2e7f5?placeholderIfAbsent=true',
      rating: 4,
      sellerRating: 4.5,
      sellerName: 'VintedPro',
      category: 'sneakers'
    },
    {
      id: 3,
      brand: 'The North Face',
      name: 'TNF Vintage Mountain Light Jacket Red',
      price: '€220',
      image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/9329571d02ed75d5d09d00213aebb56db78270a0?placeholderIfAbsent=true',
      rating: 5,
      sellerRating: 4.9,
      sellerName: 'OutdoorVintage',
      category: 'clothing'
    },
    {
      id: 4,
      brand: 'Supreme',
      name: 'Box Logo Hoodie Navy FW21',
      price: '€310',
      image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a0e5727e94ca808e4b40131e58d738956d1b42ea?placeholderIfAbsent=true',
      rating: 4,
      sellerRating: 4.7,
      sellerName: 'SupremeCollector',
      category: 'clothing'
    },
    {
      id: 5,
      brand: 'Louis Vuitton',
      name: 'LV Monogram Keepall 55 Travel Bag',
      price: '€890',
      image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/06f4469a59271ae4937da76906270c38645c8d93?placeholderIfAbsent=true',
      rating: 5,
      sellerRating: 5.0,
      sellerName: 'LuxuryResale',
      category: 'bags'
    },
    {
      id: 6,
      brand: 'Rolex',
      name: 'Vintage Submariner 16610 Watch',
      price: '€7800',
      image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/30b223d18d93a5d0fd9c840e00271b7e9387ba30?placeholderIfAbsent=true',
      rating: 5,
      sellerRating: 4.9,
      sellerName: 'WatchExperts',
      category: 'accessories'
    }
  ];

  // Filter products by category
  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  // If limit is provided, slice the products array
  const displayProducts = limit ? filteredProducts.slice(0, limit) : filteredProducts;

  return (
    <section className="container mx-auto">
      {showHeading && (
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-[#00262F] text-2xl md:text-3xl font-bold">
              Pre-owned artikelen
            </h2>
            <Button 
              variant="ghost" 
              className="text-[#00262F] hover:text-[#E41A36] flex items-center"
              asChild
            >
              <Link to="/pre-owned">
                Bekijk meer <ArrowRight size={16} className="ml-1" />
              </Link>
            </Button>
          </div>
          
          {/* Search and filter bar */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="text" 
                placeholder="Zoek pre-owned items..." 
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:border-[#00262F] focus:ring-1 focus:ring-[#00262F] focus:outline-none"
              />
            </div>
            <Button variant="outline" className="flex items-center gap-2 bg-white border-gray-200 py-3">
              <Filter size={16} /> Filters
            </Button>
          </div>
          
          {/* Categories */}
          <div className="flex flex-wrap items-center gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                className={`rounded-full px-6 py-2 text-sm ${
                  activeCategory === category.id 
                    ? "bg-[#00262F] text-white" 
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      )}
      
      {displayProducts.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-lg text-gray-500">Geen artikelen gevonden in deze categorie.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {displayProducts.map(product => (
            <Link to="/pre-owned" key={product.id} className="group">
              <div className="relative rounded-xl overflow-hidden bg-gray-50">
                <div className="absolute top-3 left-3 z-10">
                  <div className="bg-[#1EC0A3] text-white text-xs font-semibold px-2 py-1 rounded">
                    PRE-OWNED
                  </div>
                </div>
                <div className="absolute top-3 right-3 z-10">
                  <Button variant="outline" size="icon" className="h-8 w-8 rounded-full bg-white border-gray-200 shadow-sm">
                    <Heart className="h-4 w-4 text-gray-600 group-hover:text-[#E41A36]" />
                  </Button>
                </div>
                <div className="aspect-[4/5] w-full">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                  />
                </div>
              </div>
              
              <div className="mt-3 space-y-1">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium text-gray-500">{product.brand}</div>
                  <div className="flex items-center">
                    <Star className="h-3.5 w-3.5 text-yellow-400 fill-yellow-400 mr-1" />
                    <span className="text-xs font-medium text-gray-700">{product.sellerRating}</span>
                  </div>
                </div>
                <h3 className="font-bold text-[#00262F] group-hover:text-[#E41A36] transition-colors line-clamp-1">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between mt-1">
                  <div className="font-bold text-[#E41A36]">{product.price}</div>
                  <div className="flex items-center text-xs text-gray-600">
                    <div className="h-5 w-5 rounded-full bg-gray-200 flex items-center justify-center text-[10px] mr-1">
                      {product.sellerName[0]}
                    </div>
                    {product.sellerName}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
};

export default PreOwnedProducts;
