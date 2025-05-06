
import React from 'react';
import Header from '@/components/boxstock/Header';
import Footer from '@/components/boxstock/Footer';

const Accessories: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto max-w-6xl px-4 py-8">
        <h1 className="text-3xl font-bold text-[#00262F] mb-8">Accessoires</h1>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100">
              <div className="aspect-square bg-gray-100 relative">
                <img
                  src={`https://placehold.co/400x400?text=Accessory+${i}`}
                  alt={`Accessory ${i}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium text-[#00262F] mb-1">Streetwear Cap {i}</h3>
                <p className="text-[#1EC0A3] font-semibold">€{(29 + i * 5).toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Accessories;
