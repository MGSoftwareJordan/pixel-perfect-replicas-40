
import React from 'react';
import Header from '@/components/boxstock/Header';
import Footer from '@/components/boxstock/Footer';
import { Link } from 'react-router-dom';
import { Tag } from 'lucide-react';

const PreOwned: React.FC = () => {
  // Sample pre-owned items data
  const preOwnedItems = [
    {
      id: 1,
      title: "Nike Air Jordan 1 High",
      size: "EU 42",
      price: "€199",
      image: "https://placehold.co/400x400?text=Jordan+1"
    },
    {
      id: 2,
      title: "Adidas Yeezy 350",
      size: "EU 43",
      price: "€249",
      image: "https://placehold.co/400x400?text=Yeezy+350"
    },
    {
      id: 3,
      title: "Nike Dunk Low",
      size: "EU 44",
      price: "€129",
      image: "https://placehold.co/400x400?text=Dunk+Low"
    },
    {
      id: 4,
      title: "Jordan XXXIII University Red",
      size: "EU 45",
      price: "€159",
      image: "https://placehold.co/400x400?text=Jordan+XXXIII"
    },
    {
      id: 5,
      title: "New Balance 550",
      size: "EU 42",
      price: "€119",
      image: "https://placehold.co/400x400?text=NB+550"
    },
    {
      id: 6,
      title: "Air Force 1 Low",
      size: "EU 41",
      price: "€99",
      image: "https://placehold.co/400x400?text=AF1"
    },
    {
      id: 7,
      title: "Converse Chuck Taylor",
      size: "EU 44",
      price: "€79",
      image: "https://placehold.co/400x400?text=Converse"
    },
    {
      id: 8,
      title: "Vans Old Skool",
      size: "EU 43",
      price: "€69",
      image: "https://placehold.co/400x400?text=Vans"
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
          <div className="w-full md:w-1/4 bg-white rounded-lg p-6 h-fit">
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {preOwnedItems.map((item) => (
                <Link 
                  to={`/pre-owned/${item.id}`} 
                  key={item.id}
                  className="relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all"
                >
                  <div className="aspect-square bg-gray-100 relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-[#1EC0A3] text-white text-xs font-bold px-2 py-1 text-center">
                      PRE-OWNED
                    </div>
                    <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded text-sm font-medium">
                      {item.size}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-sm">{item.title}</h3>
                    <div className="font-semibold text-sm mt-1">{item.price}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PreOwned;
