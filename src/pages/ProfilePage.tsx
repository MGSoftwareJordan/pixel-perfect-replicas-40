
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, MapPin, Calendar, MessageCircle, Heart, ShoppingBag } from 'lucide-react';
import Header from '@/components/boxstock/Header';
import Footer from '@/components/boxstock/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ProfilePage: React.FC = () => {
  const { sellerId } = useParams();
  
  // Sample seller data - in a real implementation, you'd fetch this based on sellerId
  const seller = {
    id: parseInt(sellerId || "1"),
    name: "SneakerHeads",
    avatar: "M",
    rating: 4.8,
    verified: true,
    location: "Amsterdam",
    joinedDate: "Apr 2021",
    sales: 42,
    bio: "Sneakerverzamelaar sinds 2010. Verkoop alleen items uit mijn persoonlijke collectie, alles authentiek en in goede staat.",
    listings: [
      {
        id: 1,
        brand: "Air Jordan",
        name: "Jordan XXXIII University Red",
        price: "€129",
        size: "EU 42",
        condition: "9/10",
        originalPrice: "€178",
        discount: "-28%",
        images: [
          "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?q=80&w=2121&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1587&auto=format&fit=crop",
        ],
      },
      {
        id: 2,
        brand: "Nike",
        name: "Air Max 90 OG",
        price: "€135",
        size: "EU 43",
        condition: "8/10",
        originalPrice: "€178",
        discount: "-24%",
        images: [
          "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2012&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1621665421558-831f91fd0500?q=80&w=1974&auto=format&fit=crop",
        ],
      },
      {
        id: 3,
        brand: "Adidas",
        name: "Yeezy Boost 350 V2 Zebra",
        price: "€220",
        size: "EU 44",
        condition: "9/10",
        originalPrice: "€310",
        discount: "-29%",
        images: [
          "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?q=80&w=2070&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?q=80&w=2031&auto=format&fit=crop",
        ],
      },
      {
        id: 4,
        brand: "New Balance",
        name: "550 White Green",
        price: "€120",
        size: "EU 42.5",
        condition: "7/10",
        originalPrice: "€178",
        discount: "-33%",
        images: [
          "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=2070&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1543508282-6319a3e2621f?q=80&w=1915&auto=format&fit=crop",
        ],
      }
    ],
    reviews: [
      {
        id: 1,
        user: "JohnDoe",
        rating: 5,
        date: "2 weken geleden",
        text: "Perfect product en snelle verzending. Zeker aan te raden!"
      },
      {
        id: 2,
        user: "SneakerLover88",
        rating: 5,
        date: "1 maand geleden",
        text: "Mooie condtie en exact zoals beschreven. Bedankt!"
      },
      {
        id: 3,
        user: "MariaK",
        rating: 4,
        date: "2 maanden geleden",
        text: "Goede verkoper, correcte communicatie."
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto max-w-6xl px-4 py-6">
        <div className="mb-8">
          <Link 
            to="/pre-owned" 
            className="inline-flex items-center text-[#00262F] hover:text-[#1EC0A3] transition-colors"
          >
            <span className="mr-2">‹</span>
            <span>Terug naar Pre-owned</span>
          </Link>
        </div>
        
        {/* Seller profile header */}
        <div className="bg-white rounded-xl p-6 shadow-sm mb-8 border border-gray-100">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 rounded-full bg-[#1EC0A3]/10 flex items-center justify-center text-3xl font-bold text-[#1EC0A3]">
                {seller.avatar}
              </div>
              <div>
                <div className="flex items-center flex-wrap gap-2">
                  <h1 className="text-2xl font-bold text-[#00262F]">{seller.name}</h1>
                  {seller.verified && (
                    <Badge variant="outline" className="bg-[#1EC0A3]/10 text-[#1EC0A3] border-[#1EC0A3]/20">
                      Geverifieerd
                    </Badge>
                  )}
                </div>
                <div className="flex items-center mt-1">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                    <span>{seller.rating} · {seller.sales} verkopen</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-x-4 mt-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{seller.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>Lid sinds {seller.joinedDate}</span>
                  </div>
                </div>
              </div>
            </div>
            <Button className="flex items-center gap-2 bg-[#1EC0A3] hover:bg-[#18a88f]">
              <MessageCircle className="h-4 w-4" />
              Contact verkoper
            </Button>
          </div>
          
          <div className="mt-6">
            <h3 className="font-medium text-[#00262F] mb-2">Over {seller.name}</h3>
            <p className="text-gray-600">{seller.bio}</p>
          </div>
        </div>
        
        {/* Tabs for listings and reviews */}
        <Tabs defaultValue="listings" className="mb-16">
          <TabsList className="mb-6">
            <TabsTrigger value="listings">Listings ({seller.listings.length})</TabsTrigger>
            <TabsTrigger value="reviews">Reviews ({seller.reviews.length})</TabsTrigger>
          </TabsList>
          
          <TabsContent value="listings">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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
                          alt={listing.name}
                          className="h-full w-full object-cover transition-transform group-hover:scale-105 duration-300"
                        />
                      </AspectRatio>
                      <button className="absolute top-2 right-2 p-1.5 bg-white/80 backdrop-blur-sm rounded-full shadow-sm text-gray-600 hover:text-red-500 transition-colors">
                        <Heart className="h-4 w-4" />
                      </button>
                    </div>
                    
                    <CardContent className="p-3">
                      <div className="text-xs text-gray-600">{listing.brand}</div>
                      <h3 className="font-medium text-[#00262F] line-clamp-1">{listing.name}</h3>
                      <div className="flex items-center justify-between mt-2">
                        <div className="font-bold text-[#E41A36]">{listing.price}</div>
                        <div className="text-sm font-medium">{listing.size}</div>
                      </div>
                    </CardContent>
                  </Link>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="reviews">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 divide-y divide-gray-100">
              {seller.reviews.map((review) => (
                <div key={review.id} className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="font-medium">{review.user}</div>
                    <div className="text-sm text-gray-500">{review.date}</div>
                  </div>
                  <div className="flex my-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 mt-1">{review.text}</p>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      <Footer />
    </div>
  );
};

export default ProfilePage;
