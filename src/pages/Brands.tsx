
import React, { useState } from 'react';
import Header from '@/components/boxstock/Header';
import Footer from '@/components/boxstock/Footer';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, Filter, Star, Search } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const Brands: React.FC = () => {
  // State for filters
  const [showFilters, setShowFilters] = useState({
    models: true,
    categories: false
  });
  
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
  
  const models = [
    "Air Force 1", "Dunk", "Air Max 90", "Air Max 95", "Air Jordan 1", 
    "Air Jordan 4", "Yeezy 350", "Yeezy 500", "Yeezy 700", "550",
    "327", "990", "992", "991", "2002R"
  ];
  
  const categories = ["Sneakers", "Kleding", "Accessoires", "Tassen"];

  const featuredBrands = brands.slice(0, 8).map((brand) => ({
    name: brand,
    image: `https://cdn.builder.io/api/v1/image/assets/TEMP/${brand.toLowerCase().replace(/\s+/g, '-')}.png?placeholderIfAbsent=true`
  }));

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto max-w-6xl px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-8 text-sm">
          <Link to="/" className="text-gray-500 hover:text-[#00262F]">Home</Link>
          <span className="text-gray-400">›</span>
          <span className="text-[#00262F]">Merken</span>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left sidebar */}
          <div className="w-full md:w-1/4">
            {/* Category Navigation */}
            <div className="bg-white rounded-lg p-6 mb-6">
              <h1 className="text-3xl font-bold text-[#00262F] mb-4">Merken</h1>
              <p className="text-gray-600 mb-6">
                Ontdek een grote selectie van meer dan 150 merken en 400k producten.
              </p>
              
              <nav className="space-y-2">
                <Link to="/sneakers" className="block text-gray-600 hover:text-[#00262F] py-1">
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
                <Link to="/brands" className="block font-bold text-[#00262F] border-b-2 border-[#00262F] pb-1">
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
              
              {/* Models Filter */}
              <div>
                <div 
                  className="flex items-center justify-between cursor-pointer" 
                  onClick={() => toggleFilter('models')}
                >
                  <h3 className="font-medium text-[#00262F]">Model</h3>
                  {showFilters.models ? 
                    <ChevronUp size={18} /> : 
                    <ChevronDown size={18} />
                  }
                </div>
                
                {showFilters.models && (
                  <div className="mt-3">
                    <div className="relative">
                      <input 
                        type="text" 
                        placeholder="Zoek Model" 
                        className="w-full border border-gray-300 rounded py-2 px-4 pl-10 focus:outline-none focus:ring-1 focus:ring-[#00262F]"
                        aria-label="Zoek een model"
                      />
                      <Search className="absolute top-2.5 left-3 text-gray-400" size={18} />
                    </div>
                    
                    <div className="mt-3 max-h-48 overflow-y-auto space-y-2 pr-2">
                      <RadioGroup defaultValue="all-models">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="all-models" id="model-all" />
                          <label htmlFor="model-all" className="text-sm font-medium text-[#00262F]">
                            Alle modellen
                          </label>
                        </div>
                        {models.map((model, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <RadioGroupItem value={model.toLowerCase().replace(/\s+/g, '-')} id={`model-${index + 1}`} />
                            <label htmlFor={`model-${index + 1}`} className="text-sm text-[#00262F]">
                              {model}
                            </label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Categories Filter */}
              <div>
                <div 
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => toggleFilter('categories')}
                >
                  <h3 className="font-medium text-[#00262F]">Categorieën</h3>
                  {showFilters.categories ? 
                    <ChevronUp size={18} /> : 
                    <ChevronDown size={18} />
                  }
                </div>
                
                {showFilters.categories && (
                  <div className="mt-3 space-y-2">
                    <RadioGroup defaultValue="all-categories">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="all-categories" id="category-all" />
                        <label htmlFor="category-all" className="text-sm font-medium text-[#00262F]">
                          Alle categorieën
                        </label>
                      </div>
                      {categories.map((category, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <RadioGroupItem value={category.toLowerCase()} id={`category-${index + 1}`} />
                          <label htmlFor={`category-${index + 1}`} className="text-sm text-[#00262F]">
                            {category}
                          </label>
                        </div>
                      ))}
                    </RadioGroup>
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
            <div className="bg-white rounded-lg p-6 mb-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-[#00262F]">Alle Merken</h2>
                <div className="flex items-center gap-3">
                  <Select defaultValue="alphabetical">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Sorteren op" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="alphabetical">Alfabetisch</SelectItem>
                      <SelectItem value="popularity">Populariteit</SelectItem>
                      <SelectItem value="newest">Nieuwste</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {brands.map((brand, index) => (
                  <Link to={`/brands/${brand.toLowerCase().replace(/\s+/g, '-')}`} key={index} className="bg-white border border-gray-200 hover:border-gray-300 rounded-lg p-4 flex items-center justify-center min-h-[100px] transition-all hover:shadow-sm group">
                    <h3 className="font-bold text-[#00262F] text-center group-hover:text-[#E41A36] transition-colors">{brand}</h3>
                  </Link>
                ))}
              </div>
            </div>
            
            <div className="mt-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-[#00262F] flex items-center gap-2">
                  <Star size={20} className="text-[#E41A36]" />
                  Populaire Merken
                </h2>
              </div>
              
              {/* Horizontal scrollable row instead of grid */}
              <div className="relative">
                <div className="flex overflow-x-auto gap-4 pb-4 hide-scrollbar">
                  {featuredBrands.map((brand, index) => (
                    <Link 
                      to={`/brands/${brand.name.toLowerCase().replace(/\s+/g, '-')}`} 
                      key={index} 
                      className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all min-w-[200px] max-w-[200px]"
                    >
                      <div className="aspect-square bg-gray-100 relative flex items-center justify-center">
                        {/* Skeleton loader that shows before image loads */}
                        <Skeleton className="absolute inset-0" />
                        <img 
                          src={brand.image}
                          alt={brand.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-medium text-[#00262F] text-center">{brand.name}</h3>
                      </div>
                    </Link>
                  ))}
                </div>
                
                {/* Navigation buttons (only shown on desktop) */}
                <button 
                  className="hidden md:flex absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white rounded-full shadow-md p-3 min-w-12 min-h-12 items-center justify-center"
                  aria-label="Previous brands"
                >
                  <ChevronDown size={20} className="rotate-90" />
                </button>
                <button 
                  className="hidden md:flex absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white rounded-full shadow-md p-3 min-w-12 min-h-12 items-center justify-center"
                  aria-label="Next brands"
                >
                  <ChevronDown size={20} className="-rotate-90" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Brands;
