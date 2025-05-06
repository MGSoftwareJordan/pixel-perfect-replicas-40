
import React from 'react';
import Header from '@/components/boxstock/Header';
import Footer from '@/components/boxstock/Footer';
import { Card, CardContent } from "@/components/ui/card";

const Brands: React.FC = () => {
  const brands = [
    "Nike", "Adidas", "Jordan", "New Balance", "Puma", 
    "Converse", "Vans", "Reebok", "ASICS", "Under Armour",
    "Balenciaga", "Gucci", "Louis Vuitton", "Dior", "Prada"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto max-w-6xl px-4 py-8">
        <h1 className="text-3xl font-bold text-[#00262F] mb-8">Merken</h1>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {brands.map((brand, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-6 flex items-center justify-center min-h-[100px]">
                <h3 className="font-bold text-[#00262F] text-lg text-center">{brand}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-[#00262F] mb-6">Populaire merken</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {brands.slice(0, 8).map((brand, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100">
                <div className="aspect-square bg-gray-100 relative flex items-center justify-center">
                  <div className="text-3xl font-bold text-gray-300">{brand.charAt(0)}</div>
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-[#00262F] text-center">{brand}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Brands;
