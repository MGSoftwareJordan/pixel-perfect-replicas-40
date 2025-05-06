
import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, Heart, ShoppingCart, MessageCircle, Shield, Info } from 'lucide-react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const PreOwnedProductDetail: React.FC = () => {
  // Sample pre-owned product
  const product = {
    id: 1,
    brand: 'Nike',
    name: 'Air Mowabb Comme des Garcons Black',
    price: '€178',
    originalPrice: '€220',
    images: [
      'https://images.unsplash.com/photo-1607522370275-f14206abe5d3?q=80&w=2121&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1587&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?q=80&w=1965&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1621665421558-831f91fd0500?q=80&w=1974&auto=format&fit=crop',
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

  const [liked, setLiked] = useState(false);

  return (
    <div className="container mx-auto max-w-6xl px-4 mb-16">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Product Gallery - Left side */}
        <div className="lg:w-[55%] space-y-4">
          <div className="relative bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
            <Badge className="absolute top-4 left-4 z-10 bg-[#1EC0A3] text-white">PRE-OWNED</Badge>
            
            <Carousel className="w-full" opts={{ loop: true }}>
              <CarouselContent>
                {product.images.map((img, index) => (
                  <CarouselItem key={index}>
                    <div className="aspect-[4/3] flex items-center justify-center bg-gray-50 p-1">
                      <img 
                        src={img} 
                        alt={`${product.name} - image ${index + 1}`}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
            
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
                className="aspect-square bg-white rounded-lg overflow-hidden cursor-pointer border border-gray-100 p-1"
              >
                <img 
                  src={image} 
                  alt={`${product.name} view ${idx+1}`}
                  className="w-full h-full object-cover rounded"
                />
              </div>
            ))}
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex flex-col items-start text-[#00262F]">
              <div className="flex items-center gap-2 mb-4 w-full">
                <div className="text-xl font-bold text-[#00262F]">
                  Verkoper
                </div>
                <Badge variant="outline" className="bg-[#1EC0A3]/10 text-[#1EC0A3] border-[#1EC0A3]/20">
                  Geverifieerd
                </Badge>
              </div>
              
              <div className="flex items-center gap-4 w-full mb-4">
                <div className="w-12 h-12 rounded-full bg-[#1EC0A3]/10 flex items-center justify-center text-lg font-bold text-[#1EC0A3]">
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
              
              <Button className="w-full mt-4 bg-white text-[#00262F] border border-[#00262F] hover:bg-gray-50 flex gap-2 items-center justify-center">
                <MessageCircle className="w-4 h-4" />
                Contact verkoper
              </Button>
            </div>
          </div>
        </div>
        
        {/* Product Info - Right side */}
        <div className="lg:w-[45%]">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 h-full">
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
                <h3 className="font-medium text-[#00262F] mb-3">Beschrijving van verkoper</h3>
                <p className="text-gray-600">{product.description}</p>
              </div>
              
              <div className="bg-[#F8F8F8] rounded-lg p-4">
                <div className="flex items-start gap-2 mb-3">
                  <Info className="h-5 w-5 text-[#1EC0A3] mt-0.5 flex-shrink-0" />
                  <h3 className="font-medium text-[#00262F]">Pre-owned kenmerken</h3>
                </div>
                <ul className="space-y-2 text-gray-600 ml-7">
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
              
              <div className="flex flex-col gap-3 text-sm text-gray-500 pt-4 border-t border-gray-200">
                <div className="flex items-center">
                  <Shield className="w-5 h-5 mr-2 text-[#1EC0A3]" />
                  <span>Echtheidscontrole door Boxstock experts</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-[#1EC0A3]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span>Voor 23:59 besteld, morgen in huis</span>
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
