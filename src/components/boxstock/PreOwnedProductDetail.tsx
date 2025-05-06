
import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, Heart, ShoppingCart } from 'lucide-react';

const PreOwnedProductDetail: React.FC = () => {
  // Sample pre-owned product
  const product = {
    id: 1,
    brand: 'Nike',
    name: 'Air Mowabb Comme des Garcons Black',
    price: '€178',
    originalPrice: '€220',
    images: [
      'https://cdn.builder.io/api/v1/image/assets/TEMP/56c5b409cc96b961d2c99ebaa3e2ba425f3dd0b9?placeholderIfAbsent=true',
      'https://cdn.builder.io/api/v1/image/assets/TEMP/1209df7af3652089ec3aab75c4ce28741fb2e7f5?placeholderIfAbsent=true',
      'https://cdn.builder.io/api/v1/image/assets/TEMP/9329571d02ed75d5d09d00213aebb56db78270a0?placeholderIfAbsent=true',
      'https://cdn.builder.io/api/v1/image/assets/TEMP/a0e5727e94ca808e4b40131e58d738956d1b42ea?placeholderIfAbsent=true',
    ],
    condition: '9/10',
    size: 'EU 42',
    rating: 4,
    description: 'Een van de meest iconische samenwerkingen tussen Nike en Comme des Garcons. Deze zeldzame pre-owned Air Mowabb in perfecte staat is een absolute collectorsitem.',
    features: [
      'Originele doos inbegrepen',
      'Extra veters',
      'Minimale slijtage aan de zool',
      'Geen vlekken of scheuren',
      'Professioneel gereinigd en gedesinfecteerd'
    ],
    seller: {
      name: 'SneakerHeads',
      rating: 4.8,
      sales: 42,
      joined: 'Augustus 2022',
      responseTime: '< 2 uur'
    }
  };

  const [selectedImage, setSelectedImage] = useState(0);
  const [liked, setLiked] = useState(false);

  return (
    <div className="container mx-auto max-w-6xl px-4 mb-16">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Product Gallery - Left side */}
        <div className="lg:w-[55%] space-y-4">
          <div className="relative">
            <Badge className="absolute top-4 left-4 z-10 bg-[#1EC0A3] text-white">PRE-OWNED</Badge>
            <div className="aspect-[4/3] bg-gray-50 rounded-xl overflow-hidden">
              <img 
                src={product.images[selectedImage]} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <button 
              onClick={() => setLiked(!liked)} 
              className={`absolute top-4 right-4 p-2 rounded-full ${liked ? 'bg-[#E41A36] text-white' : 'bg-white text-gray-600'} shadow-md`}
            >
              <Heart className={`w-5 h-5 ${liked ? 'fill-white' : ''}`} />
            </button>
          </div>
          
          <div className="grid grid-cols-4 gap-3">
            {product.images.map((image, idx) => (
              <div 
                key={idx} 
                className={`aspect-square bg-gray-50 rounded-lg overflow-hidden cursor-pointer ${selectedImage === idx ? 'ring-2 ring-[#1EC0A3]' : ''}`}
                onClick={() => setSelectedImage(idx)}
              >
                <img 
                  src={image} 
                  alt={`${product.name} view ${idx+1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          
          <div className="bg-gradient-to-br from-[#f8f8f8] to-[#eaeaea] rounded-xl p-6 shadow-sm">
            <div className="flex flex-col items-start text-[#00262F]">
              <div className="text-xl font-bold mb-4 text-[#00262F]">
                Verkoper Informatie
              </div>
              
              <div className="flex items-center gap-4 w-full mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-lg font-bold">
                  {product.seller.name[0]}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-[#00262F]">{product.seller.name}</h3>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm">{product.seller.rating} · {product.seller.sales} verkopen</span>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 w-full text-sm">
                <div>
                  <span className="text-gray-500">Lid sinds</span>
                  <p className="font-medium">{product.seller.joined}</p>
                </div>
                <div>
                  <span className="text-gray-500">Reactietijd</span>
                  <p className="font-medium">{product.seller.responseTime}</p>
                </div>
              </div>
              
              <Button className="w-full mt-4 bg-[#00262F] hover:bg-[#064559] text-white">
                Contact verkoper
              </Button>
            </div>
          </div>
        </div>
        
        {/* Product Info - Right side */}
        <div className="lg:w-[45%]">
          <div className="bg-gradient-to-br from-[#f8f8f8] to-[#eaeaea] rounded-xl p-6 shadow-sm h-full">
            <div className="space-y-6">
              <div>
                <div className="text-gray-600 text-lg">{product.brand}</div>
                <h1 className="text-3xl font-bold text-[#00262F]">{product.name}</h1>
                <div className="flex items-center mt-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < product.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-gray-600 text-sm">(16 reviews)</span>
                </div>
              </div>
              
              <div className="flex items-end gap-3">
                <div className="text-3xl font-bold text-[#E41A36]">{product.price}</div>
                <div className="text-xl text-gray-500 line-through">{product.originalPrice}</div>
                <div className="bg-[#E41A36]/10 text-[#E41A36] text-sm font-medium px-2 py-1 rounded">
                  -19%
                </div>
              </div>
              
              <div className="py-5 space-y-4 border-t border-b border-gray-200">
                <div className="flex justify-between">
                  <div className="text-gray-500">Conditie</div>
                  <div className="font-medium text-[#00262F]">{product.condition}</div>
                </div>
                <div className="flex justify-between">
                  <div className="text-gray-500">Maat</div>
                  <div className="font-medium text-[#00262F]">{product.size}</div>
                </div>
                <div className="flex justify-between">
                  <div className="text-gray-500">Status</div>
                  <div className="text-green-600 font-medium">Op voorraad</div>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium text-[#00262F] mb-3">Beschrijving</h3>
                <p className="text-gray-600">{product.description}</p>
              </div>
              
              <div>
                <h3 className="font-medium text-[#00262F] mb-3">Pre-owned kenmerken</h3>
                <ul className="space-y-2 text-gray-600">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="text-[#1EC0A3] mr-2">✓</div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="space-y-3">
                <Button className="w-full bg-[#E41A36] hover:bg-[#c01730] text-white font-bold py-3 rounded-md text-lg flex items-center justify-center gap-2">
                  <ShoppingCart className="w-5 h-5" />
                  Direct kopen
                </Button>
                <Button variant="outline" className="w-full border-[#00262F] text-[#00262F] font-bold py-3 rounded-md text-lg">
                  In winkelwagen
                </Button>
              </div>
              
              <div className="flex justify-between text-sm text-gray-500">
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span>Voor 23:59 besteld, morgen in huis</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                  <span>Echtheidscontrole</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreOwnedProductDetail;
