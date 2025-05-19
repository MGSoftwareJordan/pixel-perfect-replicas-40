
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Heart, ArrowLeft, Star, User } from 'lucide-react';
import Header from '@/components/attic/Header';
import Footer from '@/components/attic/Footer';
import { Card } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import Newsletter from '@/components/attic/Newsletter';

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
          price: "€3,33",
          size: "S",
          condition: "Heel goed",
          originalPrice: "€2,50",
          images: [
            "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?q=80&w=2121&auto=format&fit=crop",
          ],
        },
        {
          id: 2,
          price: "€5,95",
          size: "M",
          condition: "Heel goed",
          originalPrice: "€5,00",
          images: [
            "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2012&auto=format&fit=crop",
          ],
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
          price: "€1,75",
          size: "Universeel",
          condition: "Nieuw met prijskaartje",
          originalPrice: "€1,00",
          images: [
            "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?q=80&w=2070&auto=format&fit=crop",
          ],
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
          price: "€1,75",
          size: "L",
          condition: "Heel goed",
          originalPrice: "€1,00",
          images: [
            "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=2070&auto=format&fit=crop",
          ],
        }
      ]
    }
  ];

  // Calculate total listings count
  const totalListingsCount = sellers.reduce((total, seller) => total + seller.listings.length, 0);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="container mx-auto max-w-6xl px-4 py-6">
        <div className="mb-6">
          <Link 
            to="/product" 
            className="inline-flex items-center text-attic-black hover:text-attic-teal transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            <span>Back to product</span>
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
              <h1 className="text-2xl font-bold text-attic-black">{product.name}</h1>
              <div className="text-sm text-gray-500 mt-1">
                Pre-owned listings · {totalListingsCount} available
              </div>
            </div>
          </div>
        </div>
        
        <h2 className="text-xl font-bold text-attic-black mb-4">
          {totalListingsCount} pre-owned {product.name} available
        </h2>
        
        <div className="space-y-10 mb-16">
          {sellers.map((seller) => (
            <div key={seller.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
              {/* Seller header */}
              <div className="p-5 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-attic-teal/10 flex items-center justify-center text-lg font-medium text-attic-teal">
                      {seller.avatar}
                    </div>
                    <div>
                      <div className="flex items-center">
                        <h3 className="font-bold text-lg text-attic-black">{seller.name}</h3>
                        {seller.verified && (
                          <Badge variant="outline" className="bg-attic-teal/10 text-attic-teal border-attic-teal/20 ml-2">
                            Verified
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
                        <span>Member since {seller.joinedDate}</span>
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
                      View profile
                    </Link>
                  </Button>
                </div>
                <p className="text-sm text-gray-600 mt-3 line-clamp-2">{seller.bio}</p>
              </div>
              
              {/* Seller listings */}
              <div className="p-4">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {seller.listings.map((listing) => (
                    <Link 
                      key={listing.id}
                      to={`/pre-owned/${listing.id}`}
                      className="block group"
                    >
                      <Card className="border border-gray-100 overflow-hidden hover:shadow-md transition-all">
                        <div className="relative">
                          <AspectRatio ratio={3/4} className="bg-gray-50">
                            <img 
                              src={listing.images[0]} 
                              alt={`${product.name} - ${listing.size}`}
                              className="h-full w-full object-cover transition-transform group-hover:scale-105 duration-300"
                            />
                          </AspectRatio>
                          <button 
                            className="absolute top-2 right-2 p-1.5 bg-white/80 backdrop-blur-sm rounded-full shadow-sm text-gray-600 hover:text-red-500 transition-colors"
                            onClick={(e) => {
                              e.preventDefault();
                              // Add favorite logic here
                            }}
                          >
                            <Heart className="h-4 w-4" />
                          </button>
                        </div>
                        <div className="p-2">
                          <div className="flex flex-col">
                            <div className="font-medium text-[#00262F]">{listing.size} · {listing.condition}</div>
                            <div className="font-bold text-[#E41A36]">{listing.price}</div>
                          </div>
                        </div>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <Newsletter />
      <Footer />
    </div>
  );
};

export default PreOwnedListings;
