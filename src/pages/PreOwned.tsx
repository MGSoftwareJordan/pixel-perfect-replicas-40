
import React, { useState } from 'react';
import Header from '@/components/boxstock/Header';
import Footer from '@/components/boxstock/Footer';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, Filter, Star, Tag } from 'lucide-react';
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const PreOwned: React.FC = () => {
  // State for filters
  const [showFilters, setShowFilters] = useState({
    brands: true,
    sizes: false,
    price: false,
    condition: true
  });
  
  const [priceRange, setPriceRange] = useState([0, 300]);
  
  // Toggle filter sections
  const toggleFilter = (filter: string) => {
    setShowFilters(prev => ({
      ...prev,
      [filter]: !prev[filter]
    }));
  };

  const brands = [
    "Nike", "Adidas", "Jordan", "New Balance", "Puma", 
    "Converse", "Vans", "Reebok", "ASICS", "Under Armour"
  ];
  
  const sizes = [
    "EU 36", "EU 37", "EU 38", "EU 39", "EU 40", 
    "EU 41", "EU 42", "EU 43", "EU 44", "EU 45", "EU 46"
  ];
  
  const conditions = ["Nieuw", "Zo goed als nieuw", "Licht gebruikt", "Normaal gebruikt"];

  // Sample pre-owned items data
  const preOwnedItems = [
    {
      id: 1,
      title: "Nike Air Jordan 1 High",
      brand: "Jordan",
      size: "EU 42",
      price: "€199",
      condition: "Zo goed als nieuw",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/e780f41d5f9e59dfa77a1158315633f6c67db5ec?placeholderIfAbsent=true"
    },
    {
      id: 2,
      title: "Adidas Yeezy 350",
      brand: "Adidas",
      size: "EU 43",
      price: "€249",
      condition: "Nieuw",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/1151fbe94e56faf832add68dff4fd394e96e331e?placeholderIfAbsent=true"
    },
    {
      id: 3,
      title: "Nike Dunk Low",
      brand: "Nike",
      size: "EU 44",
      price: "€129",
      condition: "Licht gebruikt",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/ab17d086a93643e33227de5cccee1c221bae4655?placeholderIfAbsent=true"
    },
    {
      id: 4,
      title: "Jordan XXXIII University Red",
      brand: "Jordan",
      size: "EU 45",
      price: "€159",
      condition: "Nieuw",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/20139938ade4dd7d58525cbf8fb332b18060cf34?placeholderIfAbsent=true"
    },
    {
      id: 5,
      title: "New Balance 550",
      brand: "New Balance",
      size: "EU 42",
      price: "€119",
      condition: "Zo goed als nieuw",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/240df11c1b0446d48308edbcb679fa99a4d7cbe3?placeholderIfAbsent=true"
    },
    {
      id: 6,
      title: "Air Force 1 Low",
      brand: "Nike",
      size: "EU 41",
      price: "€99",
      condition: "Normaal gebruikt",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/5b1b65f705bc681b0bdfb2c25e65f8d939142459?placeholderIfAbsent=true"
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
          <span className="text-[#00262F]">Pre-owned</span>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left sidebar */}
          <div className="w-full md:w-1/4">
            {/* Category Navigation */}
            <div className="bg-white rounded-lg p-6 mb-6">
              <h1 className="text-3xl font-bold text-[#00262F] mb-4">Pre-owned</h1>
              <p className="text-gray-600 mb-6">
                Ontdek een grote selectie van tweedehands sneakers en streetwear.
              </p>
              
              <div className="bg-[#1EC0A3]/10 p-4 rounded-lg mb-6">
                <div className="flex items-center gap-2 mb-2 text-[#1EC0A3]">
                  <Tag size={18} />
                  <span className="font-bold">PRE-OWNED</span>
                </div>
                <p className="text-sm text-gray-700">
                  Alle items worden gecontroleerd op authenticiteit en kwaliteit voordat ze worden aangeboden.
                </p>
              </div>
              
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
              
              {/* Condition Filter */}
              <div>
                <div 
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => toggleFilter('condition')}
                >
                  <h3 className="font-medium text-[#00262F]">Conditie</h3>
                  {showFilters.condition ? 
                    <ChevronUp size={18} /> : 
                    <ChevronDown size={18} />
                  }
                </div>
                
                {showFilters.condition && (
                  <div className="mt-3">
                    <RadioGroup defaultValue="all" className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="all" id="condition-all" />
                        <label htmlFor="condition-all" className="text-sm font-medium">
                          Alle condities
                        </label>
                      </div>
                      {conditions.map((condition, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <RadioGroupItem value={condition.toLowerCase().replace(/\s+/g, '-')} id={`condition-${index}`} />
                          <label htmlFor={`condition-${index}`} className="text-sm font-medium">
                            {condition}
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
                    
                    <div className="mt-4 grid grid-cols-4 gap-2">
                      {sizes.map((size, index) => (
                        <button
                          key={index}
                          className="border border-gray-200 rounded p-1 text-sm text-center hover:border-[#00262F] transition-colors"
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
                        max={500}
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
            <div className="mb-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-bold text-[#00262F] mb-4 flex items-center">
                  <Tag size={20} className="mr-2 text-[#1EC0A3]" />
                  Over onze pre-owned collectie
                </h2>
                <p className="text-gray-600">
                  Bij Boxstock krijgen premium sneakers en streetwear een tweede leven. 
                  Onze pre-owned collectie bestaat uit zorgvuldig geselecteerde items die 
                  voldoen aan onze kwaliteitseisen. Elk item wordt grondig gecontroleerd 
                  en professioneel gereinigd voordat het in onze collectie wordt opgenomen.
                </p>
              </div>
            </div>
            
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
                <h2 className="text-2xl font-bold text-[#00262F]">Pre-owned Items</h2>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-500">{preOwnedItems.length} producten</span>
                  <Select defaultValue="newest">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Sorteren op" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="newest">Nieuwste</SelectItem>
                      <SelectItem value="price-low">Prijs oplopend</SelectItem>
                      <SelectItem value="price-high">Prijs aflopend</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {preOwnedItems.map((item) => (
                  <Link 
                    to={`/pre-owned/${item.id}`} 
                    key={item.id}
                    className="relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all"
                  >
                    <div className="relative group">
                      <button className="absolute top-2 right-2 z-10 bg-white rounded-full p-2 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
                        </svg>
                      </button>

                      <div className="aspect-square bg-gray-100 relative">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-[#1EC0A3] text-white text-xs font-bold px-2 py-1 text-center">
                          PRE-OWNED
                        </div>
                        <div className="absolute top-2 left-2 bg-white px-2 py-1 rounded text-sm font-medium">
                          {item.size}
                        </div>
                      </div>

                      <div className="p-4">
                        <div className="text-sm text-[#00262F]">{item.brand}</div>
                        <h3 className="font-bold text-sm mt-1 mb-2 line-clamp-2 h-10">{item.title}</h3>
                        
                        <div className="flex justify-between items-center mt-2">
                          <span className="font-semibold">{item.price}</span>
                          <span className="text-xs bg-gray-100 px-2 py-1 rounded">{item.condition}</span>
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

export default PreOwned;
