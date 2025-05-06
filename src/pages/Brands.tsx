
import React from 'react';
import Header from '@/components/boxstock/Header';
import Footer from '@/components/boxstock/Footer';
import { Link } from 'react-router-dom';

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
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-8 text-sm">
          <Link to="/" className="text-gray-500 hover:text-[#00262F]">Home</Link>
          <span className="text-gray-400">›</span>
          <span className="text-[#00262F]">Merken</span>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left sidebar */}
          <div className="w-full md:w-1/4 bg-white rounded-lg p-6 h-fit">
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
          
          {/* Main content */}
          <div className="w-full md:w-3/4">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-[#00262F] mb-4">Alle Merken</h2>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {brands.map((brand, index) => (
                  <Link to="#" key={index} className="bg-white border border-gray-200 hover:border-gray-300 rounded-lg p-4 flex items-center justify-center min-h-[100px] transition-all hover:shadow-sm">
                    <h3 className="font-bold text-[#00262F] text-center">{brand}</h3>
                  </Link>
                ))}
              </div>
            </div>
            
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-[#00262F] mb-6">Populaire Merken</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {brands.slice(0, 8).map((brand, index) => (
                  <Link to="#" key={index} className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all">
                    <div className="aspect-square bg-gray-100 relative flex items-center justify-center">
                      <img 
                        src={`https://placehold.co/400x400?text=${brand}`}
                        alt={brand}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium text-[#00262F] text-center">{brand}</h3>
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

export default Brands;
