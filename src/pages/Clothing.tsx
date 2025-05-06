
import React from 'react';
import Header from '@/components/boxstock/Header';
import Footer from '@/components/boxstock/Footer';
import { Card, CardContent } from "@/components/ui/card";
import ProductCard from '@/components/boxstock/ProductCard';
import { Link } from 'react-router-dom';
import { Shirt } from 'lucide-react';

const Clothing: React.FC = () => {
  const brands = ["Kith", "Comme des garçons", "Coperni", "A-cold-wall*", "Prada", "Junya Watanabe"];
  
  const products = [
    {
      id: 1,
      brand: "A-cold-wall*",
      name: "ACW Hoodie Black",
      price: "€212,00",
      image: "https://placehold.co/400x400?text=ACW+Hoodie",
      rating: 4
    },
    {
      id: 2,
      brand: "Stussy",
      name: "Stussy Basic T-Shirt White",
      price: "€49,00",
      image: "https://placehold.co/400x400?text=Stussy+Tee",
      rating: 5
    },
    {
      id: 3,
      brand: "The North Face",
      name: "TNF Nuptse Puffer Jacket Black",
      price: "€320,00",
      image: "https://placehold.co/400x400?text=TNF+Jacket",
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
          <span className="text-[#00262F]">Kleding</span>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left sidebar */}
          <div className="w-full md:w-1/4 bg-white rounded-lg p-6 h-fit">
            <h1 className="text-3xl font-bold text-[#00262F] mb-4">Kleding</h1>
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
              <Link to="/clothing" className="block font-bold text-[#00262F] border-b-2 border-[#00262F] pb-1">
                Kleding
              </Link>
              <Link to="/bags" className="block text-gray-600 hover:text-[#00262F] py-1">
                Tassen
              </Link>
              <Link to="/brands" className="block text-gray-600 hover:text-[#00262F] py-1">
                Merken
              </Link>
            </nav>
            
            <div className="mt-8">
              <div className="flex items-center justify-between">
                <h2 className="font-bold text-[#00262F]">Merken</h2>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="m18 15-6-6-6 6"/>
                </svg>
              </div>
              
              <div className="mt-4">
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Zoek Merk" 
                    className="w-full border border-gray-300 rounded py-2 px-4 pl-10"
                  />
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute top-2.5 left-3 text-gray-400">
                    <circle cx="11" cy="11" r="8"/>
                    <path d="m21 21-4.3-4.3"/>
                  </svg>
                </div>
                
                <div className="mt-4 max-h-48 overflow-y-auto space-y-2">
                  <div className="flex items-center">
                    <span className="text-[#00262F]">424</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-[#00262F]">A-cold-wall*</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-[#00262F]">Acne studios</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-[#00262F]">Ader error</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-[#00262F]">Adidas</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-[#00262F]">Adivisry</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-[#00262F]">Air jordan</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Main content */}
          <div className="w-full md:w-3/4">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-[#00262F] mb-4">Populaire Merken</h2>
              
              <div className="flex flex-wrap gap-3">
                {brands.map((brand, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm">
                    {brand}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <div key={product.id} className="relative">
                  <button className="absolute top-2 right-2 z-10 bg-white rounded-full p-2 shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
                    </svg>
                  </button>
                  
                  <div className="bg-gray-100 rounded-lg overflow-hidden">
                    <div className="aspect-square">
                      {product.image ? (
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <Shirt size={80} className="text-gray-400" />
                        </div>
                      )}
                    </div>
                    
                    <div className="p-4 bg-white">
                      <div className="text-sm text-[#00262F]">{product.brand}</div>
                      <h3 className="text-sm font-bold mt-1 mb-2">{product.name}</h3>
                      
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
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Clothing;
