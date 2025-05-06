
import React, { useState } from 'react';
import Header from '@/components/boxstock/Header';
import Footer from '@/components/boxstock/Footer';
import { Card, CardContent } from "@/components/ui/card";
import ProductCard from '@/components/boxstock/ProductCard';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, Filter, Star } from 'lucide-react';
import { Slider } from "@/components/ui/slider";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Sneakers: React.FC = () => {
  // State for filters
  const [showFilters, setShowFilters] = useState({
    brands: true,
    targetGroup: true,
    sizes: false,
    price: false
  });
  
  const [priceRange, setPriceRange] = useState([0, 500]);
  
  // Toggle filter sections
  const toggleFilter = (filter: string) => {
    setShowFilters(prev => ({
      ...prev,
      [filter]: !prev[filter]
    }));
  };
  
  const brands = [
    "Nike", "Adidas", "Jordan", "New Balance", "Puma", 
    "Converse", "Vans", "Reebok", "ASICS", "Under Armour",
    "Balenciaga", "Gucci", "Louis Vuitton", "Dior", "Prada"
  ];
  
  const targetGroups = ["Heren", "Dames", "Kinderen", "Unisex"];
  
  const sizes = [
    "EU 36", "EU 37", "EU 38", "EU 39", "EU 40", 
    "EU 41", "EU 42", "EU 43", "EU 44", "EU 45", "EU 46"
  ];
  
  const products = [
    {
      id: 1,
      brand: "Asics",
      name: "ASICS Gel-Lyte V Social Status Charolette Lab Schools Eternal Summer",
      price: "€178,00",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/e780f41d5f9e59dfa77a1158315633f6c67db5ec?placeholderIfAbsent=true",
      rating: 4
    },
    {
      id: 2,
      brand: "Air Jordan",
      name: "Jordan XXXIII University Red",
      price: "€93,00",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/1151fbe94e56faf832add68dff4fd394e96e331e?placeholderIfAbsent=true",
      rating: 4
    },
    {
      id: 3,
      brand: "Nike",
      name: "Nike ACG Air Mada Low Ash Green",
      price: "€47,00",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/20139938ade4dd7d58525cbf8fb332b18060cf34?placeholderIfAbsent=true",
      rating: 4
    },
    {
      id: 4,
      brand: "New Balance",
      name: "New Balance 550 White Green",
      price: "€120,00",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/ab17d086a93643e33227de5cccee1c221bae4655?placeholderIfAbsent=true",
      rating: 5
    },
    {
      id: 5,
      brand: "Adidas",
      name: "Adidas Samba OG Cloud White Core Black",
      price: "€130,00",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/240df11c1b0446d48308edbcb679fa99a4d7cbe3?placeholderIfAbsent=true",
      rating: 5
    },
    {
      id: 6,
      brand: "Nike",
      name: "Nike Dunk Low Retro White Black Panda",
      price: "€110,00",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/5b1b65f705bc681b0bdfb2c25e65f8d939142459?placeholderIfAbsent=true",
      rating: 4
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto max-w-6xl px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-8 text-sm">
          <Link to="/" className="text-gray-500 hover:text-[#00262F]">Home</Link>
          <span className="text-gray-400">›</span>
          <span className="text-[#00262F]">Sneakers</span>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left sidebar */}
          <div className="w-full md:w-1/4">
            {/* Category Navigation */}
            <div className="bg-white rounded-lg p-6 mb-6">
              <h1 className="text-3xl font-bold text-[#00262F] mb-4">Sneakers</h1>
              <p className="text-gray-600 mb-6">
                Ontdek een grote selectie van meer dan 150 merken en 400k producten.
              </p>
              
              <nav className="space-y-2">
                <Link to="/sneakers" className="block font-bold text-[#00262F] border-b-2 border-[#00262F] pb-1">
                  Sneakers
                </Link>
                <Link to="/accessories" className="block text-gray-600 hover:text-[#00262F] py-1">
                  Accessoires
                </Link>
                <Link to="/clothing" className="block text-gray-600 hover:text-[#00262F] py-1">
                  Kleding
                </Link>
                <Link to="/bags" className="block text-gray-600 hover:text-[#00262F] py-1">
                  Tassen
                </Link>
                <Link to="/brands" className="block text-gray-600 hover:text-[#00262F] py-1">
                  Merken
                </Link>
              </nav>
            </div>
            
            {/* Filters */}
            <div className="bg-white rounded-lg p-6 space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="font-bold text-[#00262F] flex items-center">
                  <Filter size={18} className="mr-2" />
                  Filters
                </h2>
              </div>
              
              {/* Brands Filter */}
              <div>
                <div 
                  className="flex items-center justify-between cursor-pointer" 
                  onClick={() => toggleFilter('brands')}
                >
                  <h3 className="font-medium text-[#00262F]">Merken</h3>
                  {showFilters.brands ? 
                    <ChevronUp size={18} /> : 
                    <ChevronDown size={18} />
                  }
                </div>
                
                {showFilters.brands && (
                  <div className="mt-3">
                    <div className="relative">
                      <input 
                        type="text" 
                        placeholder="Zoek Merk" 
                        className="w-full border border-gray-300 rounded py-2 px-4 pl-10 focus:outline-none focus:ring-1 focus:ring-[#00262F]"
                      />
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute top-2.5 left-3 text-gray-400">
                        <circle cx="11" cy="11" r="8"/>
                        <path d="m21 21-4.3-4.3"/>
                      </svg>
                    </div>
                    
                    <div className="mt-3 max-h-48 overflow-y-auto space-y-2 pr-2">
                      {["Alle merken", ...brands].map((brand, index) => (
                        <div key={index} className="flex items-center">
                          <input
                            type="checkbox"
                            id={`brand-${index}`}
                            className="rounded border-gray-300 text-[#00262F] focus:ring-[#00262F]"
                          />
                          <label htmlFor={`brand-${index}`} className="ml-2 text-sm text-[#00262F]">
                            {brand}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              {/* Target Group Filter */}
              <div>
                <div 
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => toggleFilter('targetGroup')}
                >
                  <h3 className="font-medium text-[#00262F]">Doelgroep</h3>
                  {showFilters.targetGroup ? 
                    <ChevronUp size={18} /> : 
                    <ChevronDown size={18} />
                  }
                </div>
                
                {showFilters.targetGroup && (
                  <div className="mt-3">
                    <RadioGroup defaultValue="alle" className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="alle" id="target-all" />
                        <label htmlFor="target-all" className="text-sm font-medium">
                          Alle doelgroepen
                        </label>
                      </div>
                      {targetGroups.map((group, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <RadioGroupItem value={group.toLowerCase()} id={`target-${index}`} />
                          <label htmlFor={`target-${index}`} className="text-sm font-medium">
                            {group}
                          </label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                )}
              </div>
              
              {/* Size Filter */}
              <div>
                <div 
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => toggleFilter('sizes')}
                >
                  <h3 className="font-medium text-[#00262F]">Maat EU</h3>
                  {showFilters.sizes ? 
                    <ChevronUp size={18} /> : 
                    <ChevronDown size={18} />
                  }
                </div>
                
                {showFilters.sizes && (
                  <div className="mt-3">
                    <Select defaultValue="select-size">
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Selecteer maat" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="select-size">Selecteer maat</SelectItem>
                        {sizes.map((size, index) => (
                          <SelectItem key={index} value={size.toLowerCase().replace(' ', '-')}>
                            {size}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    
                    <div className="mt-4 grid grid-cols-3 gap-2">
                      {sizes.map((size, index) => (
                        <button
                          key={index}
                          className="border border-gray-200 rounded p-2 text-sm text-center hover:border-[#00262F] transition-colors"
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              {/* Price Filter */}
              <div>
                <div 
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => toggleFilter('price')}
                >
                  <h3 className="font-medium text-[#00262F]">Prijs</h3>
                  {showFilters.price ? 
                    <ChevronUp size={18} /> : 
                    <ChevronDown size={18} />
                  }
                </div>
                
                {showFilters.price && (
                  <div className="mt-3">
                    <div className="mb-6">
                      <Slider
                        defaultValue={[priceRange[0], priceRange[1]]}
                        max={1000}
                        step={10}
                        onValueChange={(value) => setPriceRange(value as number[])}
                        className="[&>.bg-primary]:bg-[#00262F]"
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="border border-gray-300 rounded p-2 w-24 text-center">
                        €{priceRange[0]}
                      </div>
                      <span className="mx-2">-</span>
                      <div className="border border-gray-300 rounded p-2 w-24 text-center">
                        €{priceRange[1]}
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Apply Filters Button */}
              <button className="w-full bg-[#00262F] text-white py-3 rounded hover:bg-[#00374F] transition-colors">
                Filters toepassen
              </button>
            </div>
          </div>
          
          {/* Main content */}
          <div className="w-full md:w-3/4">
            {/* Popular Brands - Scrollable */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-[#00262F] flex items-center gap-2">
                  <Star size={20} className="text-[#E41A36]" />
                  Populaire Merken
                </h2>
                <Link to="/brands" className="text-[#00262F] text-sm font-medium hover:underline">
                  Alle merken
                </Link>
              </div>
              
              <div className="relative">
                <div className="flex overflow-x-auto gap-3 pb-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
                  {brands.map((brand, index) => (
                    <Link 
                      key={index} 
                      to={`/brands?filter=${brand}`}
                      className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm min-w-max hover:bg-gray-50 hover:border-gray-300 transition-colors"
                    >
                      {brand}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Products Grid */}
            <div className="bg-white rounded-lg p-6 mb-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-[#00262F]">Alle Sneakers</h2>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-500">{products.length} producten</span>
                  <Select defaultValue="popular">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Sorteren op" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="popular">Populair</SelectItem>
                      <SelectItem value="price-low">Prijs oplopend</SelectItem>
                      <SelectItem value="price-high">Prijs aflopend</SelectItem>
                      <SelectItem value="newest">Nieuwste</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <Link to={`/product/${product.id}`} key={product.id} className="relative">
                    <div className="relative group">
                      <button className="absolute top-2 right-2 z-10 bg-white rounded-full p-2 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
                        </svg>
                      </button>
                      
                      <div className="bg-gray-100 rounded-lg overflow-hidden">
                        <div className="aspect-square overflow-hidden">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        
                        <div className="p-4 bg-white">
                          <div className="text-sm text-[#00262F]">{product.brand}</div>
                          <h3 className="text-sm font-bold mt-1 mb-2 line-clamp-2 h-10">{product.name}</h3>
                          
                          <div className="flex gap-1 mb-2">
                            {[...Array(5)].map((_, i) => (
                              <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill={i < product.rating ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-[#1EC0A3]">
                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                              </svg>
                            ))}
                          </div>
                          
                          <div className="font-semibold">{product.price}</div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Sneakers;
