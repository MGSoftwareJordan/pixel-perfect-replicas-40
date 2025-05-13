
import React, { useState } from 'react';
import Header from '@/components/boxstock/Header';
import Footer from '@/components/boxstock/Footer';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, Filter, Star, Tag, Search } from 'lucide-react';
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";

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

  // Sample sellers data with their listings
  const sellers = [
    {
      id: 1,
      name: "SneakerHeads",
      avatar: "S",
      rating: 4.8,
      verified: true,
      location: "Amsterdam",
      joinedDate: "Apr 2021",
      bio: "Sneakerverzamelaar sinds 2010. Verkoop alleen items uit mijn persoonlijke collectie, alles authentiek en in goede staat.",
      listings: [
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
        }
      ]
    },
    {
      id: 2,
      name: "KickKings",
      avatar: "K",
      rating: 4.9,
      verified: true,
      location: "Utrecht",
      joinedDate: "Jan 2020",
      bio: "Sneaker liefhebber en verzamelaar. Alleen de hoogste kwaliteit pre-owned items.",
      listings: [
        {
          id: 3,
          title: "Nike Dunk Low",
          brand: "Nike",
          size: "EU 44",
          price: "€129",
          condition: "Licht gebruikt",
          image: "https://cdn.builder.io/api/v1/image/assets/TEMP/ab17d086a93643e33227de5cccee1c221bae4655?placeholderIfAbsent=true"
        }
      ]
    },
    {
      id: 3,
      name: "ShoeMaster",
      avatar: "M",
      rating: 4.2,
      verified: false,
      location: "Den Haag",
      joinedDate: "Aug 2022",
      bio: "Verzamel en verkoop alleen premium sneakers. Kwaliteit gegarandeerd.",
      listings: [
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
        }
      ]
    },
    {
      id: 4,
      name: "VintageKicks",
      avatar: "V",
      rating: 4.7,
      verified: true,
      location: "Rotterdam",
      joinedDate: "Mei 2019",
      bio: "Gespecialiseerd in vintage en zeldzame sneakers. Alle items worden zorgvuldig gecontroleerd en gereinigd.",
      listings: [
        {
          id: 6,
          title: "Air Force 1 Low",
          brand: "Nike",
          size: "EU 41",
          price: "€99",
          condition: "Normaal gebruikt",
          image: "https://cdn.builder.io/api/v1/image/assets/TEMP/5b1b65f705bc681b0bdfb2c25e65f8d939142459?placeholderIfAbsent=true"
        }
      ]
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
          {/* Left sidebar with filters */}
          <div className="w-full md:w-1/4">
            {/* Category Navigation */}
            <div className="bg-white rounded-lg p-6 mb-6 shadow-sm border border-gray-100">
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
            <Card className="p-6 space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="font-bold text-[#00262F] flex items-center">
                  <Filter size={18} className="mr-2" />
                  Filters
                </h2>
              </div>
              
              {/* Search filter */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input 
                  type="text" 
                  placeholder="Zoek pre-owned items..." 
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:border-[#00262F] focus:ring-1 focus:ring-[#00262F] focus:outline-none"
                />
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
              <Button className="w-full bg-[#00262F] text-white py-3 rounded hover:bg-[#00374F] transition-colors">
                Filters toepassen
              </Button>
            </Card>
          </div>
          
          {/* Main content - Seller grouped listings in cards */}
          <div className="w-full md:w-3/4">
            <div className="mb-8">
              <Card className="bg-white p-6 shadow-sm">
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
              </Card>
            </div>
            
            {/* Sellers and their listings */}
            <div className="space-y-8">
              {sellers.map((seller) => (
                <Card key={seller.id} className="overflow-hidden shadow-sm border border-gray-100">
                  {/* Seller header */}
                  <div className="p-5 border-b border-gray-100">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-[#1EC0A3]/10 flex items-center justify-center text-lg font-medium text-[#1EC0A3]">
                          {seller.avatar}
                        </div>
                        <div>
                          <div className="flex items-center">
                            <h3 className="font-bold text-lg text-[#00262F]">{seller.name}</h3>
                            {seller.verified && (
                              <Badge variant="outline" className="bg-[#1EC0A3]/10 text-[#1EC0A3] border-[#1EC0A3]/20 ml-2">
                                Geverifieerd
                              </Badge>
                            )}
                          </div>
                          <div className="flex items-center text-sm text-gray-500 mt-1">
                            <div className="flex items-center">
                              <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400 mr-1" />
                              <span>{seller.rating}</span>
                            </div>
                            <span className="mx-1.5">·</span>
                            <span>{seller.location}</span>
                            <span className="mx-1.5">·</span>
                            <span>Lid sinds {seller.joinedDate}</span>
                          </div>
                        </div>
                      </div>
                      <Button 
                        size="sm"
                        variant="outline"
                        className="hidden sm:flex items-center gap-2"
                        asChild
                      >
                        <Link to={`/profile/${seller.id}`}>
                          Bekijk profiel
                        </Link>
                      </Button>
                    </div>
                    <p className="text-sm text-gray-600 mt-3 line-clamp-2">{seller.bio}</p>
                  </div>
                  
                  {/* Seller listings */}
                  <div className="p-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {seller.listings.map((listing) => (
                        <Link 
                          key={listing.id}
                          to={`/pre-owned/${listing.id}`}
                          className="block group"
                        >
                          <Card className="border border-gray-100 overflow-hidden hover:shadow-md transition-all h-full">
                            <div className="relative">
                              <AspectRatio ratio={3/4} className="bg-gray-50">
                                <img 
                                  src={listing.image} 
                                  alt={listing.title}
                                  className="h-full w-full object-cover transition-transform group-hover:scale-105 duration-300"
                                />
                              </AspectRatio>
                              <div className="absolute bottom-0 left-0 right-0 bg-[#1EC0A3] text-white text-xs font-bold px-2 py-1 text-center">
                                PRE-OWNED
                              </div>
                              <div className="absolute top-2 left-2 bg-white/80 px-2 py-1 rounded text-xs font-medium">
                                {listing.size}
                              </div>
                              <button 
                                className="absolute top-2 right-2 p-1.5 bg-white/80 backdrop-blur-sm rounded-full shadow-sm text-gray-600 hover:text-red-500 transition-colors"
                                onClick={(e) => {
                                  e.preventDefault();
                                  // Add favorite logic here
                                }}
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
                                </svg>
                              </button>
                            </div>
                            <div className="p-3">
                              <div className="text-xs text-gray-600 mb-1">{listing.brand}</div>
                              <h4 className="font-medium text-sm text-[#00262F] line-clamp-2 mb-2">{listing.title}</h4>
                              <div className="flex justify-between items-center">
                                <div className="font-bold text-[#E41A36]">{listing.price}</div>
                                <span className="text-xs bg-gray-100 px-2 py-1 rounded">{listing.condition}</span>
                              </div>
                            </div>
                          </Card>
                        </Link>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            
            {/* Quality guarantee section */}
            <div className="mt-12 bg-gradient-to-r from-[#1EC0A3]/10 to-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bold text-[#00262F] mb-4 flex items-center">
                    <svg className="mr-2 w-5 h-5 text-[#1EC0A3]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                    </svg>
                    Kwaliteitsgarantie
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="text-[#1EC0A3] mr-3 mt-1">✓</div>
                      <p className="text-gray-600">Echtheidsgarantie op alle pre-owned items</p>
                    </li>
                    <li className="flex items-start">
                      <div className="text-[#1EC0A3] mr-3 mt-1">✓</div>
                      <p className="text-gray-600">Professionele reiniging en desinfectie</p>
                    </li>
                    <li className="flex items-start">
                      <div className="text-[#1EC0A3] mr-3 mt-1">✓</div>
                      <p className="text-gray-600">Uitgebreide kwaliteitsinspectie</p>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#00262F] mb-4 flex items-center">
                    <svg className="mr-2 w-5 h-5 text-[#1EC0A3]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    Voordelen
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="text-[#1EC0A3] mr-3 mt-1">✓</div>
                      <p className="text-gray-600">30 dagen retourbeleid</p>
                    </li>
                    <li className="flex items-start">
                      <div className="text-[#1EC0A3] mr-3 mt-1">✓</div>
                      <p className="text-gray-600">Duurzame verpakking</p>
                    </li>
                    <li className="flex items-start">
                      <div className="text-[#1EC0A3] mr-3 mt-1">✓</div>
                      <p className="text-gray-600">Gratis verzending vanaf €75</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-6">
                <Button className="bg-[#1EC0A3] hover:bg-[#19a38b] text-white">
                  Meer over pre-owned
                </Button>
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
