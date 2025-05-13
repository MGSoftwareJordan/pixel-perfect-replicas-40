
import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, Heart, ShoppingCart, MessageCircle, Shield, Info, User, Images } from 'lucide-react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Link } from 'react-router-dom';
import { AspectRatio } from '@/components/ui/aspect-ratio';

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
      avatar: 'M',
      rating: 4.8,
      sales: 42,
      joined: 'Augustus 2022',
      responseTime: '< 2 uur',
      location: 'Amsterdam',
      verified: true,
      bio: 'Sneakerverzamelaar sinds 2010. Verkoop alleen items uit mijn persoonlijke collectie, alles authentiek en in goede staat.',
      listings: 12
    }
  };

  // More listings from the same seller
  const sellerOtherListings = [
    {
      id: 2,
      name: "Jordan 4 Retro Thunder (2023)",
      price: "€249",
      condition: "8/10",
      size: "EU 43",
      image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?q=80&w=1965&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "Nike Dunk Low Retro Panda",
      price: "€120",
      condition: "9/10",
      size: "EU 42",
      image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1587&auto=format&fit=crop"
    },
    {
      id: 4,
      name: "Nike Air Force 1 Low '07",
      price: "€85",
      condition: "8/10",
      size: "EU 44",
      image: "https://images.unsplash.com/photo-1621665421558-831f91fd0500?q=80&w=1974&auto=format&fit=crop"
    },
    {
      id: 5,
      name: "Adidas Yeezy Boost 350 V2 Zebra",
      price: "€220",
      condition: "9/10",
      size: "EU 43",
      image: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?q=80&w=2121&auto=format&fit=crop"
    }
  ];

  const [liked, setLiked] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [offerAmount, setOfferAmount] = useState('');
  const [offerDialogOpen, setOfferDialogOpen] = useState(false);
  
  const numericPrice = parseInt(product.price.replace('€', '').trim(), 10);
  const minOfferAmount = Math.floor(numericPrice * 0.7); // 70% of listing price
  
  const handleOfferSubmit = () => {
    const amount = parseInt(offerAmount, 10);
    if (isNaN(amount) || amount < minOfferAmount) {
      toast.error(`Bod moet minimaal €${minOfferAmount} zijn`);
      return;
    }
    
    toast.success(`Je bod van €${amount} is verzonden naar ${product.seller.name}`);
    setOfferDialogOpen(false);
  };

  return (
    <div className="container mx-auto max-w-6xl px-4 mb-16">
      <Card className="bg-white border border-gray-100 shadow-sm rounded-xl overflow-hidden mb-8">
        <div className="flex flex-col lg:flex-row">
          {/* Product Gallery - Left side */}
          <div className="lg:w-3/5 p-6">
            <div className="relative">
              <Badge className="absolute top-4 left-4 z-10 bg-[#1EC0A3] text-white">PRE-OWNED</Badge>
              
              <Carousel className="w-full" opts={{ loop: true }}>
                <CarouselContent>
                  {product.images.map((img, index) => (
                    <CarouselItem key={index}>
                      <div className="aspect-square flex items-center justify-center bg-gray-50 rounded-lg overflow-hidden">
                        <img 
                          src={img} 
                          alt={`${product.name} - image ${index + 1}`}
                          className="w-full h-full object-cover"
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
            
            <div className="grid grid-cols-4 gap-3 mt-4">
              {product.images.map((image, idx) => (
                <button 
                  key={idx} 
                  onClick={() => setActiveImageIndex(idx)}
                  className={`aspect-square bg-white rounded-lg overflow-hidden cursor-pointer border ${activeImageIndex === idx ? 'border-[#1EC0A3] p-0.5' : 'border-gray-100 p-1'}`}
                >
                  <img 
                    src={image} 
                    alt={`${product.name} view ${idx+1}`}
                    className="w-full h-full object-cover rounded"
                  />
                </button>
              ))}
            </div>
          </div>
          
          {/* Product Info - Right side */}
          <div className="lg:w-2/5 p-6 border-l border-gray-100">
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
                
                <Dialog open={offerDialogOpen} onOpenChange={setOfferDialogOpen}>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="w-full border-[#1EC0A3] text-[#1EC0A3] font-bold py-3 rounded-md text-lg">
                      Doe een bod
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Doe een bod</DialogTitle>
                      <DialogDescription>
                        Stuur een bod naar de verkoper. Het minimale bod is €{minOfferAmount}.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <label htmlFor="offer" className="text-right">
                          Bod
                        </label>
                        <div className="col-span-3 relative">
                          <span className="absolute left-3 top-1/2 transform -translate-y-1/2">€</span>
                          <Input
                            id="offer"
                            type="number"
                            value={offerAmount}
                            onChange={(e) => setOfferAmount(e.target.value)}
                            className="pl-7"
                            placeholder={minOfferAmount.toString()}
                          />
                        </div>
                      </div>
                    </div>
                    <DialogFooter>
                      <Button type="submit" onClick={handleOfferSubmit} className="bg-[#1EC0A3]">
                        Verstuur bod
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        </div>
      </Card>
      
      {/* Seller information */}
      <Card className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-[#1EC0A3]/10 flex items-center justify-center text-2xl font-bold text-[#1EC0A3]">
              {product.seller.avatar}
            </div>
            <div>
              <div className="flex items-center gap-1">
                <h3 className="font-bold text-xl text-[#00262F]">{product.seller.name}</h3>
                {product.seller.verified && (
                  <Badge variant="outline" className="bg-[#1EC0A3]/10 text-[#1EC0A3] border-[#1EC0A3]/20 ml-1">
                    Geverifieerd
                  </Badge>
                )}
              </div>
              <div className="flex items-center gap-1 mt-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm">{product.seller.rating} · {product.seller.sales} verkopen</span>
              </div>
              <div className="flex gap-4 mt-1 text-sm text-gray-500">
                <div>{product.seller.location}</div>
                <div>·</div>
                <div>Lid sinds {product.seller.joined}</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-3">
            <Button className="bg-[#1EC0A3] hover:bg-[#18a88f] text-white flex gap-2 items-center justify-center">
              <MessageCircle className="w-4 h-4" />
              Contact verkoper
            </Button>
            <Button variant="outline" className="border-gray-200 text-gray-700 hover:bg-gray-50 flex gap-2 items-center justify-center">
              <Images className="w-4 h-4" />
              Bekijk alle {product.seller.listings} listings
            </Button>
          </div>
        </div>
        
        <div className="mt-4 border-t border-gray-100 pt-4">
          <h4 className="font-medium text-[#00262F] mb-2">Over de verkoper</h4>
          <p className="text-gray-600">{product.seller.bio}</p>
        </div>
      </Card>

      {/* NEW SECTION: More listings from this seller */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-[#00262F] flex items-center gap-2">
            <User className="text-[#1EC0A3]" size={24} />
            Artikelen van dit lid ({product.seller.listings})
          </h2>
          <Link to={`/profile/${product.seller.name}`} className="text-[#1EC0A3] hover:underline font-medium flex items-center">
            Bekijk alle <span className="ml-1">→</span>
          </Link>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {sellerOtherListings.map((item) => (
            <Link to={`/pre-owned/${item.id}`} key={item.id} className="block group">
              <Card className="border border-gray-100 overflow-hidden hover:shadow-md transition-all h-full">
                <div className="relative">
                  <AspectRatio ratio={3/4} className="bg-gray-50">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="h-full w-full object-cover transition-transform group-hover:scale-105 duration-300"
                    />
                  </AspectRatio>
                  <div className="absolute bottom-0 left-0 right-0 bg-[#1EC0A3] text-white text-xs font-bold px-2 py-1 text-center">
                    PRE-OWNED
                  </div>
                  <div className="absolute top-2 left-2 bg-white/80 px-2 py-1 rounded text-xs font-medium">
                    {item.size}
                  </div>
                  <button 
                    className="absolute top-2 right-2 p-1.5 bg-white/80 backdrop-blur-sm rounded-full shadow-sm text-gray-600 hover:text-red-500 transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      // Favorite logic would go here
                    }}
                  >
                    <Heart className="h-4 w-4" />
                  </button>
                </div>
                <div className="p-3">
                  <h4 className="font-medium text-sm text-[#00262F] line-clamp-2 mb-2">{item.name}</h4>
                  <div className="flex justify-between items-center">
                    <div className="font-bold text-[#E41A36]">{item.price}</div>
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded">{item.condition}</span>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
      
      <div className="bg-gray-50 rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="flex flex-col md:flex-row items-start gap-6">
          <div className="md:w-1/2 space-y-3">
            <div className="flex items-start gap-2">
              <Shield className="h-5 w-5 text-[#1EC0A3] mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-medium text-[#00262F]">Echtheidsgarantie</h3>
                <p className="text-sm text-gray-600">Elk item wordt grondig gecontroleerd door onze experts voordat het wordt verzonden.</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <svg className="h-5 w-5 text-[#1EC0A3] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <div>
                <h3 className="font-medium text-[#00262F]">Snelle verzending</h3>
                <p className="text-sm text-gray-600">Voor 23:59 besteld, morgen in huis bij de meeste bestellingen.</p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 space-y-3">
            <div className="flex items-start gap-2">
              <svg className="h-5 w-5 text-[#1EC0A3] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <div>
                <h3 className="font-medium text-[#00262F]">30 dagen retourbeleid</h3>
                <p className="text-sm text-gray-600">Niet tevreden? Je kunt je aankoop binnen 30 dagen retourneren.</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <svg className="h-5 w-5 text-[#1EC0A3] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
              <div>
                <h3 className="font-medium text-[#00262F]">Community vertrouwen</h3>
                <p className="text-sm text-gray-600">Een betrouwbare community met geverifieerde verkopers.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreOwnedProductDetail;
