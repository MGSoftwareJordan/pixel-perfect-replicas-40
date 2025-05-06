
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Heart, ArrowLeft, Star, Info, User, ShoppingBag } from 'lucide-react';
import Header from '@/components/boxstock/Header';
import Footer from '@/components/boxstock/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const PreOwnedListings: React.FC = () => {
  const { productId } = useParams();

  // Sample product data - in a real implementation, you'd fetch this based on productId
  const product = {
    name: "Jordan XXXIII University Red",
    brand: "Air Jordan",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/e3020173c4c28f6df714116ceade60d759b5f183?placeholderIfAbsent=true",
  };

  // Sample listings data - in a real implementation, you'd fetch this based on productId
  // Grouped by seller
  const sellers = [
    {
      id: 1,
      name: "SneakerHeads",
      avatar: "M",
      rating: 4.8,
      verified: true,
      location: "Amsterdam",
      joinedDate: "Apr 2021",
      bio: "Sneakerverzamelaar sinds 2010. Verkoop alleen items uit mijn persoonlijke collectie, alles authentiek en in goede staat.",
      listings: [
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
          ],
          description: "Perfect match for any outfit, barely worn. Original box included."
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
          ],
          description: "Great condition, minor signs of wear. Super comfortable!"
        }
      ]
    },
    {
      id: 2,
      name: "KickKings",
      avatar: "K",
      rating: 4.9,
      verified: true,
      location: "Utrecht",
      joinedDate: "Jan 2020", 
      bio: "Sneaker liefhebber en verzamelaar. Alleen de hoogste kwaliteit pre-owned items.",
      listings: [
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
          ],
          description: "Almost new! Only worn once indoors. Comes with extra laces."
        }
      ]
    },
    {
      id: 3,
      name: "ShoeMaster",
      avatar: "S",
      rating: 4.2,
      verified: false,
      location: "Den Haag",
      joinedDate: "Aug 2022",
      bio: "Verzamel en verkoop alleen premium sneakers. Kwaliteit gegarandeerd.",
      listings: [
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
          ],
          description: "Good condition, some signs of wear but lots of life left!"
        }
      ]
    }
  ];

  // Calculate total listings count
  const totalListingsCount = sellers.reduce((total, seller) => total + seller.listings.length, 0);

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
                Pre-owned aanbod · {totalListingsCount} beschikbaar
              </div>
            </div>
          </div>
        </div>
        
        <h2 className="text-xl font-bold text-[#00262F] mb-4">
          {totalListingsCount} pre-owned {product.name} beschikbaar
        </h2>
        
        <div className="space-y-10 mb-16">
          {sellers.map((seller) => (
            <div key={seller.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
              {/* Seller header */}
              <div className="p-5 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-[#1EC0A3]/10 flex items-center justify-center text-lg font-medium text-[#1EC0A3]">
                      {seller.avatar}
                    </div>
                    <div>
                      <div className="flex items-center">
                        <h3 className="font-bold text-lg text-[#00262F]">{seller.name}</h3>
                        {seller.verified && (
                          <Badge variant="outline" className="bg-[#1EC0A3]/10 text-[#1EC0A3] border-[#1EC0A3]/20 ml-2">
                            Geverifieerd
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center text-sm text-gray-500 mt-1">
                        <div className="flex items-center">
                          <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400 mr-1" />
                          <span>{seller.rating}</span>
                        </div>
                        <span className="mx-1.5">·</span>
                        <span>{seller.location}</span>
                        <span className="mx-1.5">·</span>
                        <span>Lid sinds {seller.joinedDate}</span>
                      </div>
                    </div>
                  </div>
                  <Button 
                    size="sm"
                    variant="outline"
                    className="hidden sm:flex items-center gap-2"
                    asChild
                  >
                    <Link to={`/profile/${seller.id}`}>
                      <User className="h-4 w-4" />
                      Bekijk profiel
                    </Link>
                  </Button>
                </div>
                <p className="text-sm text-gray-600 mt-3 line-clamp-2">{seller.bio}</p>
              </div>
              
              {/* Seller listings - Simplified as requested */}
              <div className="p-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {seller.listings.map((listing) => (
                    <Card 
                      key={listing.id}
                      className="overflow-hidden hover:shadow-md transition-all border-gray-100 group"
                    >
                      <Link to={`/pre-owned/${listing.id}`} className="block">
                        <div className="relative">
                          <Badge className="absolute top-2 left-2 z-10 bg-[#1EC0A3] text-white text-xs">
                            PRE-OWNED
                          </Badge>
                          <AspectRatio ratio={1/1} className="bg-gray-50">
                            <img 
                              src={listing.images[0]} 
                              alt={`${product.name} door ${seller.name}`}
                              className="h-full w-full object-cover transition-transform group-hover:scale-105 duration-300"
                            />
                          </AspectRatio>
                          <button className="absolute top-2 right-2 p-1.5 bg-white/80 backdrop-blur-sm rounded-full shadow-sm text-gray-600 hover:text-red-500 transition-colors">
                            <Heart className="h-4 w-4" />
                          </button>
                        </div>
                        
                        <CardContent className="p-3">
                          <div className="flex items-center justify-between">
                            <div className="font-bold text-[#E41A36]">{listing.price}</div>
                            <div className="text-sm font-medium">{listing.size}</div>
                          </div>
                        </CardContent>
                      </Link>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default PreOwnedListings;
