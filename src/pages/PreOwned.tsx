
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
        <h1 className="text-3xl font-bold text-[#00262F] mb-8">Pre-owned</h1>
        
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
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
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {preOwnedItems.map((item) => (
            <Link 
              to={`/pre-owned/product/${item.title.toLowerCase().replace(/ /g, '-')}`} 
              key={item.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all"
            >
              <div className="aspect-square bg-gray-100 relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 right-0 bg-white px-2 py-1 m-2 rounded text-sm font-medium">
                  {item.size}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PreOwned;
