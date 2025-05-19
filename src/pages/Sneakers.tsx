
import React, { useState } from 'react';
import Header from '@/components/attic/Header';
import Footer from '@/components/attic/Footer';
import Newsletter from '@/components/attic/Newsletter';
import { Link } from 'react-router-dom';
import { 
  ChevronDown, 
  ChevronUp, 
  Filter, 
  Star, 
  Heart,
  Check,
  Search
} from 'lucide-react';
import { Slider } from "@/components/ui/slider";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Sneakers: React.FC = () => {
  const [priceRange, setPriceRange] = useState([0, 330]);
  
  const brands = [
    "Nike", "Adidas", "Jordan", "New Balance", "Puma", 
    "Converse", "Vans", "Reebok", "ASICS", "Under Armour",
    "Balenciaga", "Gucci", "Louis Vuitton", "Dior", "Prada"
  ];
  
  const targetGroups = ["Men", "Women", "Kids", "Unisex"];
  
  const sizes = [
    "EU 36", "EU 37", "EU 38", "EU 39", "EU 40", 
    "EU 41", "EU 42", "EU 43", "EU 44", "EU 45", "EU 46"
  ];

  const colors = [
    { name: "Black", hex: "#000000" },
    { name: "White", hex: "#FFFFFF" },
    { name: "Red", hex: "#FF0000" },
    { name: "Blue", hex: "#0000FF" },
    { name: "Green", hex: "#00FF00" },
    { name: "Yellow", hex: "#FFFF00" },
    { name: "Purple", hex: "#800080" },
    { name: "Orange", hex: "#FFA500" },
    { name: "Pink", hex: "#FFC0CB" },
    { name: "Grey", hex: "#808080" }
  ];
  
  const products = [
    {
      id: 1,
      brand: "Nike",
      name: "Nike Air Force 1 '07 White",
      price: "€119,00",
      originalPrice: null,
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/e780f41d5f9e59dfa77a1158315633f6c67db5ec?placeholderIfAbsent=true",
      rating: 4,
      isNew: true,
      isSale: false
    },
    {
      id: 2,
      brand: "Air Jordan",
      name: "Jordan 1 Retro High OG Chicago",
      price: "€180,00",
      originalPrice: "€200,00",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/1151fbe94e56faf832add68dff4fd394e96e331e?placeholderIfAbsent=true",
      rating: 5,
      isNew: false,
      isSale: true
    },
    {
      id: 3,
      brand: "Adidas",
      name: "Adidas Superstar Cloud White Core Black",
      price: "€100,00",
      originalPrice: null,
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/20139938ade4dd7d58525cbf8fb332b18060cf34?placeholderIfAbsent=true",
      rating: 4,
      isNew: false,
      isSale: false
    },
    {
      id: 4,
      brand: "New Balance",
      name: "New Balance 550 White Green",
      price: "€120,00",
      originalPrice: null,
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/ab17d086a93643e33227de5cccee1c221bae4655?placeholderIfAbsent=true",
      rating: 5,
      isNew: true,
      isSale: false
    },
    {
      id: 5,
      brand: "Puma",
      name: "Puma Suede Classic XXI Black White",
      price: "€75,00",
      originalPrice: "€90,00",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/240df11c1b0446d48308edbcb679fa99a4d7cbe3?placeholderIfAbsent=true",
      rating: 3,
      isNew: false,
      isSale: true
    },
    {
      id: 6,
      brand: "Converse",
      name: "Converse Chuck Taylor All Star High Top Black",
      price: "€85,00",
      originalPrice: null,
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/5b1b65f705bc681b0bdfb2c25e65f8d939142459?placeholderIfAbsent=true",
      rating: 4,
      isNew: false,
      isSale: false
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="container mx-auto max-w-6xl px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-8 text-sm">
          <Link to="/" className="text-gray-500 hover:text-attic-teal">Home</Link>
          <span className="text-gray-400">›</span>
          <span className="text-gray-900">Sneakers</span>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left sidebar with filters */}
          <div className="w-full md:w-1/4">
            <div className="bg-white border border-gray-100 rounded p-5">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold flex items-center">
                  <Filter size={18} className="mr-2" />
                  Filter
                </h2>
                <button className="text-sm text-attic-teal hover:underline">
                  Reset all
                </button>
              </div>
              
              <Accordion type="single" collapsible className="border-none">
                <AccordionItem value="product-type" className="border-b">
                  <AccordionTrigger className="py-3 text-base font-medium hover:no-underline">
                    Product type
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2 pb-2">
                      <div className="flex items-center">
                        <input type="checkbox" id="sneakers" className="mr-2" />
                        <label htmlFor="sneakers" className="text-sm">Sneakers</label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="boots" className="mr-2" />
                        <label htmlFor="boots" className="text-sm">Boots</label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="sandals" className="mr-2" />
                        <label htmlFor="sandals" className="text-sm">Sandals</label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="loafers" className="mr-2" />
                        <label htmlFor="loafers" className="text-sm">Loafers</label>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              
                <AccordionItem value="brand" className="border-b">
                  <AccordionTrigger className="py-3 text-base font-medium hover:no-underline">
                    Brand
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="mb-2">
                      <div className="relative">
                        <input 
                          type="text" 
                          placeholder="Search brands..." 
                          className="w-full border border-gray-200 rounded py-2 px-3 pl-9 text-sm focus:outline-none focus:border-attic-teal"
                        />
                        <Search className="absolute left-3 top-2.5 text-gray-400" size={16} />
                      </div>
                    </div>
                    <div className="max-h-48 overflow-y-auto space-y-2 pr-2">
                      {brands.map((brand, index) => (
                        <div key={index} className="flex items-center">
                          <input type="checkbox" id={`brand-${index}`} className="mr-2" />
                          <label htmlFor={`brand-${index}`} className="text-sm">{brand}</label>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="size" className="border-b">
                  <AccordionTrigger className="py-3 text-base font-medium hover:no-underline">
                    Size
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="grid grid-cols-3 gap-2">
                      {sizes.map((size, index) => (
                        <button
                          key={index}
                          className="border border-gray-200 rounded px-2 py-1.5 text-sm hover:border-attic-teal hover:bg-attic-gray transition-colors"
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="color" className="border-b">
                  <AccordionTrigger className="py-3 text-base font-medium hover:no-underline">
                    Color
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="grid grid-cols-5 gap-2">
                      {colors.map((color, index) => (
                        <button
                          key={index}
                          className="flex flex-col items-center gap-1"
                          title={color.name}
                        >
                          <div 
                            className="w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center"
                            style={{ backgroundColor: color.hex }}
                          >
                            {color.name === "Black" && (
                              <Check size={12} className="text-white" />
                            )}
                          </div>
                          <span className="text-xs">{color.name}</span>
                        </button>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="price" className="border-b">
                  <AccordionTrigger className="py-3 text-base font-medium hover:no-underline">
                    Price
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="mb-6">
                      <Slider
                        defaultValue={[0, 330]}
                        min={0}
                        max={330}
                        step={5}
                        onValueChange={(value) => setPriceRange(value as number[])}
                        className="[&>.bg-primary]:bg-attic-teal"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="relative w-full">
                        <span className="absolute left-3 top-2.5">€</span>
                        <input 
                          type="text" 
                          value={priceRange[0]} 
                          className="w-full border border-gray-200 rounded py-2 pl-7 pr-2 text-sm" 
                          onChange={(e) => {
                            const val = parseInt(e.target.value);
                            if (!isNaN(val)) {
                              setPriceRange([val, priceRange[1]]);
                            }
                          }}
                        />
                      </div>
                      <span className="mx-2">-</span>
                      <div className="relative w-full">
                        <span className="absolute left-3 top-2.5">€</span>
                        <input 
                          type="text" 
                          value={priceRange[1]} 
                          className="w-full border border-gray-200 rounded py-2 pl-7 pr-2 text-sm" 
                          onChange={(e) => {
                            const val = parseInt(e.target.value);
                            if (!isNaN(val)) {
                              setPriceRange([priceRange[0], val]);
                            }
                          }}
                        />
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              
              <button className="w-full bg-attic-teal hover:bg-opacity-90 text-white py-3 px-4 rounded mt-6 font-medium">
                Apply filters
              </button>
            </div>
          </div>
          
          {/* Main content */}
          <div className="w-full md:w-3/4">
            {/* Popular Brands - Scrollable */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-4">Popular Brands</h2>
              <div className="flex overflow-x-auto gap-2 pb-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent hide-scrollbar">
                {brands.slice(0, 10).map((brand, index) => (
                  <button
                    key={index}
                    className="bg-white border border-gray-200 rounded px-4 py-2 text-sm whitespace-nowrap hover:border-attic-teal transition-colors"
                  >
                    {brand}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Products Grid */}
            <div className="bg-white border border-gray-100 rounded p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">All Products</h2>
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-500">{products.length} products</span>
                  <Select defaultValue="popular">
                    <SelectTrigger className="w-[180px] border border-gray-200">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="popular">Most Popular</SelectItem>
                      <SelectItem value="newest">Newest</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <Link to={`/product/${product.id}`} key={product.id} className="group">
                    <div className="gallery-product-card overflow-hidden">
                      <div className="relative">
                        <div className="aspect-square overflow-hidden">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        
                        {product.isNew && (
                          <div className="gallery-product-tag">NEW</div>
                        )}
                        {product.isSale && (
                          <div className="gallery-product-tag sale">SALE</div>
                        )}
                        
                        <button className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
                          <Heart className="h-5 w-5 text-gray-600 hover:text-attic-teal" />
                        </button>
                      </div>
                      
                      <div className="p-4">
                        <div className="text-xs text-gray-600 mb-1">{product.brand}</div>
                        <h3 className="font-medium text-sm mb-2 line-clamp-2 h-10 group-hover:text-attic-teal transition-colors">
                          {product.name}
                        </h3>
                        
                        <div className="flex gap-1 mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={16}
                              className={i < product.rating ? "text-attic-teal fill-attic-teal" : "text-gray-300"}
                            />
                          ))}
                        </div>
                        
                        <div className="flex items-center">
                          <span className="font-bold text-attic-black">{product.price}</span>
                          {product.originalPrice && (
                            <span className="text-xs text-gray-500 line-through ml-2">{product.originalPrice}</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              
              <div className="mt-8 flex justify-center">
                <button className="border border-gray-200 rounded px-4 py-2 text-sm mr-2">&lt; Previous</button>
                <button className="bg-attic-teal text-white rounded px-4 py-2 text-sm">1</button>
                <button className="border border-gray-200 rounded px-4 py-2 text-sm mx-1">2</button>
                <button className="border border-gray-200 rounded px-4 py-2 text-sm mx-1">3</button>
                <button className="border border-gray-200 rounded px-4 py-2 text-sm ml-2">Next &gt;</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Sneakers;
