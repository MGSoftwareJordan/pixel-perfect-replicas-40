
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Tag, CalendarCheck } from 'lucide-react';
import Header from '@/components/attic/Header';
import Footer from '@/components/attic/Footer';

const Landing: React.FC = () => {
  // Featured products for the landing page
  const featuredProducts = [
    {
      id: 1,
      name: "Nike Air Jordan 3 Retro JTH Bio Beige",
      price: "€278",
      sale: false,
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/1151fbe94e56faf832add68dff4fd394e96e331e?placeholderIfAbsent=true",
      brand: "Nike",
      rating: 4.5,
      tag: "NEW",
      category: "sneakers"
    },
    {
      id: 2,
      name: "Nike Air Force 1 '07 Low White",
      price: "€110",
      sale: false,
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/20139938ade4dd7d58525cbf8fb332b18060cf34?placeholderIfAbsent=true",
      brand: "Nike",
      rating: 4.8,
      tag: "BESTSELLER",
      category: "sneakers"
    },
    {
      id: 3,
      name: "Jordan 1 Retro High OG Yellow Toe",
      price: "€245",
      sale: false,
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/5b1b65f705bc681b0bdfb2c25e65f8d939142459?placeholderIfAbsent=true",
      brand: "Jordan",
      rating: 5.0,
      category: "sneakers"
    },
    {
      id: 4,
      name: "Adidas Campus 00s Core Black",
      price: "€100",
      sale: true,
      originalPrice: "€120",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/e780f41d5f9e59dfa77a1158315633f6c67db5ec?placeholderIfAbsent=true",
      brand: "Adidas",
      rating: 4.2,
      tag: "SALE",
      category: "sneakers"
    }
  ];

  // Gallery Department products
  const galleryProducts = [
    {
      id: 5,
      name: "Gallery Dept. Souvenir Jacket Ivory",
      price: "€499",
      sale: false,
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/1151fbe94e56faf832add68dff4fd394e96e331e?placeholderIfAbsent=true",
      brand: "Gallery Dept.",
      rating: 4.8,
      category: "clothing"
    },
    {
      id: 6,
      name: "Gallery Dept. Logo Tee Washed Black",
      price: "€149",
      sale: false,
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/240df11c1b0446d48308edbcb679fa99a4d7cbe3?placeholderIfAbsent=true", 
      brand: "Gallery Dept.",
      rating: 4.7,
      category: "clothing"
    },
    {
      id: 7,
      name: "Gallery Dept. Flared Denim Blue",
      price: "€320",
      sale: false,
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/5b1b65f705bc681b0bdfb2c25e65f8d939142459?placeholderIfAbsent=true",
      brand: "Gallery Dept.",
      rating: 4.9,
      category: "clothing"
    },
    {
      id: 8,
      name: "Gallery Dept. Carpenter Workwear Pants",
      price: "€349",
      sale: false,
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/e780f41d5f9e59dfa77a1158315633f6c67db5ec?placeholderIfAbsent=true",
      brand: "Gallery Dept.",
      rating: 4.5,
      category: "clothing"
    }
  ];

  // Upcoming releases
  const upcomingReleases = [
    {
      id: 15,
      name: "Nike Dunk Low Retro 'Championship Blue'",
      releaseDate: "15 mei 2025",
      price: "€110",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/1151fbe94e56faf832add68dff4fd394e96e331e?placeholderIfAbsent=true",
      brand: "Nike"
    },
    {
      id: 16,
      name: "Air Jordan 4 Retro 'Vivid Crimson'",
      releaseDate: "22 mei 2025",
      price: "€200",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/20139938ade4dd7d58525cbf8fb332b18060cf34?placeholderIfAbsent=true",
      brand: "Jordan"
    },
    {
      id: 17,
      name: "Adidas Yeezy Boost 350 V2 'Slate Grey'",
      releaseDate: "29 mei 2025",
      price: "€220",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/5b1b65f705bc681b0bdfb2c25e65f8d939142459?placeholderIfAbsent=true",
      brand: "Adidas"
    },
    {
      id: 18,
      name: "New Balance 990v6 'Lunar Grey'",
      releaseDate: "5 juni 2025",
      price: "€240",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/e780f41d5f9e59dfa77a1158315633f6c67db5ec?placeholderIfAbsent=true",
      brand: "New Balance"
    }
  ];

  // Popular brands
  const popularBrands = [
    { 
      name: "Gallery Dept.", 
      logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/gallery-dept-logo.png?placeholderIfAbsent=true"
    },
    { 
      name: "Essentials", 
      logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/essentials-logo.png?placeholderIfAbsent=true"
    },
    { 
      name: "Nike", 
      logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/nike-logo.png?placeholderIfAbsent=true"
    },
    { 
      name: "Stussy", 
      logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/stussy-logo.png?placeholderIfAbsent=true"
    },
    { 
      name: "Stone Island", 
      logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/stone-island-logo.png?placeholderIfAbsent=true"
    }
  ];

  // Product card component
  const ProductCard = ({ product }: { product: any }) => (
    <Link to={`/product/${product.id}`} className="gallery-product-card">
      <div className="relative">
        <div className="aspect-square">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {product.tag && (
            <div className={`gallery-product-tag ${product.tag === 'SALE' ? 'sale' : ''}`}>
              {product.tag}
            </div>
          )}
        </div>
        <div className="p-4">
          <div className="text-xs text-gray-600 mb-1">{product.brand}</div>
          <h3 className="font-medium text-sm line-clamp-2 h-10 mb-2">{product.name}</h3>
          <div className="flex items-center">
            <span className="font-bold">{product.price}</span>
            {product.sale && product.originalPrice && (
              <span className="text-xs text-gray-500 line-through ml-2">{product.originalPrice}</span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );

  return (
    <div className="bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/40" />
          <img 
            src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
            alt="Gallery Dept. collection" 
            className="w-full h-full object-cover object-center"
          />
        </div>
        
        <div className="container mx-auto px-6 z-10 relative">
          <div className="max-w-xl">
            <div className="text-7xl font-bold text-white uppercase mb-2 leading-tight">
              Gallery Dept.
            </div>
            <h2 className="text-2xl text-white mb-6">The worldly pursuit of art and fashion elevated with intent.</h2>
            <Link to="/gallery-dept">
              <button className="bg-white text-black px-8 py-2 text-sm font-bold uppercase hover:bg-gray-100 transition-colors">
                EXPLORE COLLECTION
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Department Products */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold">New</h2>
            <div className="flex justify-center mt-4 space-x-2">
              <span className="block w-2 h-2 bg-gray-300 rounded-full"></span>
              <span className="block w-2 h-2 bg-attic-teal rounded-full"></span>
              <span className="block w-2 h-2 bg-gray-300 rounded-full"></span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {galleryProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/gallery-dept">
              <button className="bg-attic-black text-white px-10 py-2 font-medium hover:bg-gray-900 transition-colors">
                Bestsellers
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold">Trending</h2>
            <div className="flex justify-center mt-4 space-x-2">
              <span className="block w-2 h-2 bg-gray-300 rounded-full"></span>
              <span className="block w-2 h-2 bg-attic-teal rounded-full"></span>
              <span className="block w-2 h-2 bg-gray-300 rounded-full"></span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* #thegalleryattic Section with Instagram posts */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold">#thegalleryattic</h2>
            <div className="flex justify-center mt-4 space-x-2">
              <span className="block w-2 h-2 bg-gray-300 rounded-full"></span>
              <span className="block w-2 h-2 bg-attic-teal rounded-full"></span>
              <span className="block w-2 h-2 bg-gray-300 rounded-full"></span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {/* Instagram-like posts */}
            <div className="relative aspect-square overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Instagram post" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="text-white font-medium">@thegalleryattic</p>
              </div>
            </div>
            <div className="relative aspect-square overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Instagram post" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="text-white font-medium">@thegalleryattic</p>
              </div>
            </div>
            <div className="relative aspect-square overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Instagram post" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="text-white font-medium">@thegalleryattic</p>
              </div>
            </div>
            <div className="relative aspect-square overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1591195853828-11db59a44f6b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Instagram post" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="text-white font-medium">@thegalleryattic</p>
              </div>
            </div>
            <div className="relative aspect-square overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Instagram post" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="text-white font-medium">@thegalleryattic</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Logos */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold">Popular brands</h2>
            <div className="flex justify-center mt-4 space-x-2">
              <span className="block w-2 h-2 bg-gray-300 rounded-full"></span>
              <span className="block w-2 h-2 bg-attic-teal rounded-full"></span>
              <span className="block w-2 h-2 bg-gray-300 rounded-full"></span>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-12">
            {popularBrands.map((brand, index) => (
              <Link to={`/brands/${brand.name.toLowerCase().replace(/\s+/g, '-')}`} key={index} className="flex items-center justify-center">
                {brand.logo ? (
                  <img 
                    src={brand.logo} 
                    alt={`${brand.name} logo`}
                    className="h-12 opacity-70 hover:opacity-100 transition-opacity"
                  />
                ) : (
                  <span className="text-lg font-semibold text-gray-600 hover:text-gray-900 transition-colors">{brand.name}</span>
                )}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Authenticity Section */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-semibold mb-6">Authenticity guaranteed</h2>
              <p className="text-gray-600 mb-4">
                At The Attic, we understand that authenticity is paramount to our customers, so all the products we sell come with a guarantee of authenticity. Our team of experts carefully verify each item before it's shipped to you.
              </p>
              <p className="text-gray-600 mb-6">
                We stand behind the authenticity of every product we sell. If you have any doubts, we offer a full refund.
              </p>
              <Link to="/authenticity">
                <button className="bg-attic-black text-white px-6 py-3 font-medium">
                  READ MORE
                </button>
              </Link>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Authenticity verification" 
                className="w-full h-auto rounded-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* On demand shopping */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-semibold mb-4">On demand shopping</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Looking for a specific item that's not in our shop? Our team can help you source items from around the world. Let us know what you're looking for and we'll find it for you.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Gallery Dept. products" 
                className="w-full h-auto"
              />
            </div>
            <div className="space-y-4">
              <p className="text-gray-600">
                If there's a limited edition or hard-to-find item you've been hunting for, our team of experts can help track it down. From the rarest sneakers to exclusive streetwear drops, we have connections worldwide.
              </p>
              <p className="text-gray-600">
                We'll notify you once we've found your item with details on condition and pricing. No obligation to purchase - we just love helping our community find their grails.
              </p>
              <p className="text-gray-600">
                Exclusive for the 1% of the most dedicated shoppers: our personal shopping service is available for those who want a truly special piece.
              </p>
              <div className="pt-4">
                <Link to="/on-demand">
                  <button className="bg-attic-black text-white px-6 py-3 font-medium">
                    GET IN TOUCH
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Landing;
