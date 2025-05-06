
import React from 'react';
import ProductInfo from './ProductInfo';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

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
    ]
  };

  const [selectedImage, setSelectedImage] = React.useState(0);

  return (
    <div className="container mx-auto max-w-6xl px-4 mb-16">
      <div className="bg-white rounded-2xl shadow-md overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          {/* Product Gallery */}
          <div className="lg:w-[55%]">
            <div className="p-6">
              <Badge className="bg-[#1EC0A3] text-white mb-4">PRE-OWNED</Badge>
              <div className="aspect-square bg-gray-100 rounded-xl overflow-hidden mb-4">
                <img 
                  src={product.images[selectedImage]} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((image, idx) => (
                  <div 
                    key={idx} 
                    className={`aspect-square bg-gray-100 rounded-lg overflow-hidden cursor-pointer border-2 ${selectedImage === idx ? 'border-[#1EC0A3]' : 'border-transparent'}`}
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
              
              <div className="mt-8 bg-gradient-to-br from-[#AEDDE8] to-[#93D0DE] rounded-xl p-6 shadow-sm">
                <div className="flex flex-col items-center text-[#00262F]">
                  <div className="text-xl font-medium mb-4">
                    Heb jij deze sneaker te koop?
                  </div>
                  <div className="text-2xl font-bold mb-6 text-center">
                    Word reseller en verkoop jouw items via Boxstock!
                  </div>
                  <Button className="w-full bg-[#E41A36] hover:bg-[#c01730] text-white font-bold py-3 rounded-md text-lg">
                    Verkoop dit item
                  </Button>
                  <div className="text-[#00262F] underline mt-4 cursor-pointer hover:text-[#064559] transition-colors">
                    Hoe werkt resell?
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Product Info */}
          <div className="lg:w-[45%] border-l border-gray-100">
            <div className="p-6">
              <div className="mb-6">
                <div className="text-gray-600 text-lg">{product.brand}</div>
                <h1 className="text-3xl font-bold text-[#00262F]">{product.name}</h1>
                <div className="flex items-center mt-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i} 
                        className={`w-4 h-4 ${i < product.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 text-gray-600 text-sm">(16 reviews)</span>
                </div>
              </div>
              
              <div className="flex items-end gap-3 mb-6">
                <div className="text-3xl font-bold text-[#E41A36]">{product.price}</div>
                <div className="text-xl text-gray-500 line-through">{product.originalPrice}</div>
                <div className="bg-[#E41A36]/10 text-[#E41A36] text-sm font-medium px-2 py-1 rounded">
                  -19%
                </div>
              </div>
              
              <div className="border-t border-b border-gray-100 py-5 mb-6 space-y-4">
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
              
              <div className="mb-8">
                <h3 className="font-medium text-[#00262F] mb-3">Beschrijving</h3>
                <p className="text-gray-600">{product.description}</p>
              </div>
              
              <div className="mb-8">
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
                <Button className="w-full bg-[#00262F] hover:bg-[#064559] text-white font-bold py-3 rounded-md text-lg">
                  Direct kopen
                </Button>
                <Button variant="outline" className="w-full border-[#00262F] text-[#00262F] font-bold py-3 rounded-md text-lg">
                  In winkelwagen
                </Button>
              </div>
              
              <div className="flex justify-between mt-6 text-sm text-gray-500">
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
