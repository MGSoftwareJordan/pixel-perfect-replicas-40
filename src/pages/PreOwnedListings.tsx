
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Heart, ArrowLeft, Star, Info } from 'lucide-react';
import Header from '@/components/boxstock/Header';
import Footer from '@/components/boxstock/Footer';

const PreOwnedListings: React.FC = () => {
  const { productId } = useParams();

  // Sample product data - in a real implementation, you'd fetch this based on productId
  const product = {
    name: "Jordan XXXIII University Red",
    brand: "Air Jordan",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/e3020173c4c28f6df714116ceade60d759b5f183?placeholderIfAbsent=true",
  };

  // Sample listing data - in a real implementation, you'd fetch this based on productId
  const listings = [
    {
      id: 1,
      price: "€129",
      size: "EU 42",
      condition: "9/10",
      originalPrice: "€178",
      discount: "-28%",
      images: [
        "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?q=80&w=2121&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1587&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?q=80&w=1965&auto=format&fit=crop"
      ],
      seller: {
        name: "SneakerHeads",
        rating: 4.8,
        verified: true
      }
    },
    {
      id: 2,
      price: "€135",
      size: "EU 43",
      condition: "8/10",
      originalPrice: "€178",
      discount: "-24%",
      images: [
        "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2012&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1621665421558-831f91fd0500?q=80&w=1974&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?q=80&w=2112&auto=format&fit=crop"
      ],
      seller: {
        name: "SneakerLover",
        rating: 4.6,
        verified: true
      }
    },
    {
      id: 3,
      price: "€149",
      size: "EU 44",
      condition: "9.5/10",
      originalPrice: "€178",
      discount: "-16%",
      images: [
        "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?q=80&w=2031&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1605348532760-6753d2c43329?q=80&w=2020&auto=format&fit=crop"
      ],
      seller: {
        name: "KickKings",
        rating: 4.9,
        verified: true
      }
    },
    {
      id: 4,
      price: "€120",
      size: "EU 42.5",
      condition: "7/10",
      originalPrice: "€178",
      discount: "-33%",
      images: [
        "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1543508282-6319a3e2621f?q=80&w=1915&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1521093470119-a3acdc43374a?q=80&w=1974&auto=format&fit=crop"
      ],
      seller: {
        name: "ShoeMaster",
        rating: 4.2,
        verified: false
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto max-w-6xl px-4 py-6">
        <div className="mb-6">
          <Link 
            to="/product" 
            className="inline-flex items-center text-[#00262F] hover:text-[#1EC0A3] transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            <span>Terug naar product</span>
          </Link>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-sm mb-8 border border-gray-100">
          <div className="flex items-center gap-4">
            <div className="h-20 w-20 bg-gray-50 rounded-lg p-2 flex items-center justify-center">
              <img 
                src={product.image} 
                alt={product.name}
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div>
              <div className="text-gray-600">{product.brand}</div>
              <h1 className="text-2xl font-bold text-[#00262F]">{product.name}</h1>
              <div className="text-sm text-gray-500 mt-1">
                Pre-owned aanbod · {listings.length} beschikbaar
              </div>
            </div>
          </div>
        </div>
        
        <h2 className="text-xl font-bold text-[#00262F] mb-4">
          {listings.length} pre-owned {product.name} beschikbaar
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
          {listings.map(listing => (
            <div 
              key={listing.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all"
            >
              <Link to={`/pre-owned/${listing.id}`} className="flex">
                <div className="relative w-2/5">
                  <Badge className="absolute top-2 left-2 z-10 bg-[#1EC0A3] text-white">
                    PRE-OWNED
                  </Badge>
                  <div className="h-full bg-gray-50 flex items-center justify-center overflow-hidden">
                    <img 
                      src={listing.images[0]} 
                      alt={product.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="w-3/5 p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-sm text-gray-600">{product.brand}</div>
                      <h3 className="font-medium text-[#00262F]">{product.name}</h3>
                    </div>
                    <button className="text-gray-400 hover:text-red-500 transition-colors p-1">
                      <Heart className="h-5 w-5" />
                    </button>
                  </div>
                  
                  <div className="mt-2 flex items-end gap-2">
                    <div className="text-xl font-bold text-[#E41A36]">{listing.price}</div>
                    <div className="text-sm text-gray-500 line-through">{listing.originalPrice}</div>
                    <div className="bg-[#E41A36]/10 text-[#E41A36] text-xs font-medium px-2 py-0.5 rounded">
                      {listing.discount}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 mt-3 text-sm">
                    <div>
                      <span className="text-gray-500">Conditie:</span> {listing.condition}
                    </div>
                    <div>
                      <span className="text-gray-500">Maat:</span> {listing.size}
                    </div>
                  </div>
                  
                  <div className="mt-2 flex justify-between items-center">
                    <div className="flex items-center gap-1">
                      <div className="text-xs bg-gray-50 px-2 py-1 rounded flex items-center">
                        <span className="font-medium">{listing.seller.name}</span>
                        {listing.seller.verified && (
                          <span className="ml-1 text-[#1EC0A3] text-xs">✓</span>
                        )}
                      </div>
                      <div className="flex items-center">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs ml-0.5">{listing.seller.rating}</span>
                      </div>
                    </div>
                    <Button 
                      size="sm" 
                      className="bg-[#00262F] hover:bg-[#001520] text-white text-xs"
                    >
                      Bekijk
                    </Button>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        
        <div className="bg-white rounded-xl p-6 mb-16 shadow-sm border border-gray-100">
          <div className="flex items-start gap-2 mb-4">
            <Info className="h-5 w-5 text-[#1EC0A3] mt-0.5 flex-shrink-0" />
            <h3 className="text-xl font-bold text-[#00262F]">
              Over pre-owned {product.name}
            </h3>
          </div>
          <p className="text-gray-600 mb-4">
            Bij Boxstock vindt je de beste pre-owned {product.name} sneakers 
            die door onze authenticatie experts zijn gecontroleerd. Elke sneaker 
            ondergaat een grondige controle en wordt professioneel gereinigd voordat 
            deze in onze collectie wordt opgenomen.
          </p>
          <p className="text-gray-600">
            Door te kiezen voor een pre-owned item bespaar je niet alleen geld, 
            maar draag je ook bij aan een duurzamere sneakercultuur. Alle aanbieders 
            zijn geverifieerd en beoordeeld door onze community.
          </p>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default PreOwnedListings;
