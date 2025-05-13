
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/boxstock/Header';
import Footer from '@/components/boxstock/Footer';
import Newsletter from '@/components/boxstock/Newsletter';
import { ArrowRight, Star, Tag, CalendarCheck, ShoppingBag } from 'lucide-react';

const Landing: React.FC = () => {
  // Featured products for the landing page
  const featuredProducts = [
    {
      id: 1,
      name: "Jordan XXXIII University Red",
      price: "€178",
      sale: true,
      originalPrice: "€200",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/e780f41d5f9e59dfa77a1158315633f6c67db5ec?placeholderIfAbsent=true",
      brand: "Air Jordan",
      rating: 4.5,
      tag: "BESTSELLER",
      category: "sneakers"
    },
    {
      id: 2,
      name: "Nike Air Mowabb Comme des Garcons Black",
      price: "€210",
      sale: true,
      originalPrice: "€240",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/1151fbe94e56faf832add68dff4fd394e96e331e?placeholderIfAbsent=true",
      brand: "Nike",
      rating: 4.8,
      tag: "NIEUW",
      category: "sneakers"
    },
    {
      id: 3,
      name: "Nike Dunk Low Off-White",
      price: "€245",
      sale: false,
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/20139938ade4dd7d58525cbf8fb332b18060cf34?placeholderIfAbsent=true",
      brand: "Nike",
      rating: 5.0,
      tag: "TRENDING",
      category: "sneakers"
    },
    {
      id: 4,
      name: "Adidas Orketro Cream",
      price: "€199",
      sale: true,
      originalPrice: "€220",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/5b1b65f705bc681b0bdfb2c25e65f8d939142459?placeholderIfAbsent=true",
      brand: "Adidas",
      rating: 4.2,
      tag: "SALE",
      category: "sneakers"
    }
  ];

  // Lifestyle collection - mixed categories
  const lifestyleProducts = [
    {
      id: 5,
      name: "Supreme Box Logo Beanie Red",
      price: "€89",
      sale: false,
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/ab17d086a93643e33227de5cccee1c221bae4655?placeholderIfAbsent=true",
      brand: "Supreme",
      rating: 4.8,
      category: "accessories"
    },
    {
      id: 7,
      name: "Stussy Basic Tee Black",
      price: "€49",
      sale: false,
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/1151fbe94e56faf832add68dff4fd394e96e331e?placeholderIfAbsent=true",
      brand: "Stussy",
      rating: 4.7,
      category: "clothing"
    },
    {
      id: 8,
      name: "The North Face Nuptse Jacket Black",
      price: "€320",
      sale: false,
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/5b1b65f705bc681b0bdfb2c25e65f8d939142459?placeholderIfAbsent=true",
      brand: "The North Face",
      rating: 4.9,
      tag: "BESTSELLER",
      category: "clothing"
    },
    {
      id: 9,
      name: "Supreme Shoulder Bag SS21 Black",
      price: "€79",
      sale: false,
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/240df11c1b0446d48308edbcb679fa99a4d7cbe3?placeholderIfAbsent=true",
      brand: "Supreme",
      rating: 4.5,
      category: "bags"
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

  // Top brands that are clickable
  const topBrands = [
    { 
      name: "Nike", 
      logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/nike-logo.png?placeholderIfAbsent=true",
      count: "2500+ producten" 
    },
    { 
      name: "Adidas", 
      logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/adidas-logo.png?placeholderIfAbsent=true",
      count: "1800+ producten"
    },
    { 
      name: "Jordan", 
      logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/jordan-logo.png?placeholderIfAbsent=true",
      count: "950+ producten"
    },
    { 
      name: "New Balance", 
      logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/new-balance-logo.png?placeholderIfAbsent=true",
      count: "780+ producten" 
    },
    { 
      name: "Puma", 
      logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/puma-logo.png?placeholderIfAbsent=true",
      count: "650+ producten"
    },
    { 
      name: "Converse", 
      logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/converse-logo.png?placeholderIfAbsent=true",
      count: "420+ producten"
    }
  ];

  // Categories with images and count
  const categories = [
    { 
      name: "SNEAKERS", 
      image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80", 
      path: "/sneakers",
      count: "10,000+ modellen"
    },
    { 
      name: "KLEDING", 
      image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80", 
      path: "/clothing",
      count: "5,000+ items"
    },
    { 
      name: "ACCESSOIRES", 
      image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80", 
      path: "/accessories",
      count: "2,500+ items"
    },
    { 
      name: "TASSEN", 
      image: "https://images.unsplash.com/photo-1590874103328-eac8365b5776?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80", 
      path: "/bags",
      count: "1,800+ modellen"
    }
  ];

  // Product card component
  const ProductCard = ({ product }: { product: any }) => (
    <Link to={`/product/${product.id}`} className="min-w-[250px]">
      <div className="relative bg-white rounded-lg overflow-hidden group border border-gray-100 hover:shadow-md transition-all">
        <div className="aspect-square">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {product.tag && (
            <div className="absolute top-2 left-2 bg-[#E41A36] text-white text-xs font-bold px-2 py-1 z-10">
              {product.tag}
            </div>
          )}
          {product.sale && (
            <div className="absolute top-2 right-2 bg-[#E41A36] text-white text-xs font-bold px-2 py-1 z-10">
              SALE
            </div>
          )}
          <button className="absolute top-2 right-2 z-10 bg-white rounded-full p-2 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
            </svg>
          </button>
        </div>
        <div className="p-4">
          <div className="text-sm text-[#00262F]">
            <Link to={`/brands/${product.brand.toLowerCase().replace(/\s+/g, '-')}`} className="hover:underline">
              {product.brand}
            </Link>
          </div>
          <h3 className="text-sm font-bold mt-1 mb-2 line-clamp-2 h-10">{product.name}</h3>
          
          <div className="flex gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill={i < Math.floor(product.rating) ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-[#1EC0A3]">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
            ))}
          </div>
          
          <div className="flex items-center">
            <span className="font-semibold">{product.price}</span>
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
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
          <img 
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
            alt="Premium sneaker" 
            className="w-full h-full object-cover object-center"
          />
        </div>
        
        <div className="container mx-auto px-6 z-10 relative">
          <div className="max-w-xl">
            <div className="inline-block bg-white px-4 py-1 mb-4">
              <span className="text-sm font-bold text-[#E41A36] tracking-wider">NIEUW BINNEN</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white uppercase mb-6 leading-tight">
              PREMIUM<br />SNEAKERS &<br />STREETWEAR
            </h1>
            <p className="text-white text-lg mb-8 max-w-md">
              Ontdek de nieuwste collecties en exclusieve releases bij Boxstock, jouw premium sneaker destination.
            </p>
            <Link to="/sneakers">
              <button className="bg-[#E41A36] text-white px-8 py-4 text-sm font-bold uppercase hover:bg-[#c01730] transition-colors">
                SHOP NU
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories - Enhanced section with better images and counts */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="uppercase text-3xl font-bold mb-8 text-center">
            ONTDEK ONZE CATEGORIEËN
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Link to={category.path} key={index} className="group relative">
                <div className="aspect-square overflow-hidden bg-gray-100 rounded-lg">
                  <img 
                    src={category.image}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt={`${category.name} categorie`}
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 group-hover:bg-black/50 transition-colors">
                    <h3 className="text-white text-2xl font-bold">{category.name}</h3>
                    <p className="text-white/90 text-sm mt-2">{category.count}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Sneakers Section */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="uppercase text-3xl font-bold flex items-center gap-2">
              <ShoppingBag className="text-[#E41A36]" size={28} />
              <span>PREMIUM SNEAKERS</span>
            </h2>
            <Link to="/sneakers" className="text-[#00262F] hover:text-[#E41A36] font-medium flex items-center gap-1 transition-colors">
              Bekijk alles <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className="flex overflow-x-auto gap-4 pb-4 hide-scrollbar">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Top Brands - Improved with horizontal scrolling */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="uppercase text-3xl font-bold flex items-center gap-3">
              <Star className="text-[#E41A36]" />
              POPULAIRE MERKEN
            </h2>
            <Link to="/brands" className="text-[#00262F] hover:text-[#E41A36] font-medium flex items-center gap-1 transition-colors">
              Alle merken <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className="relative">
            <div className="flex overflow-x-auto gap-4 pb-4 hide-scrollbar">
              {topBrands.map((brand, index) => (
                <Link 
                  to={`/brands/${brand.name.toLowerCase().replace(/\s+/g, '-')}`} 
                  key={index} 
                  className="bg-white border border-gray-200 hover:border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center min-w-[200px] h-32 transition-all hover:shadow-sm"
                >
                  <div className="text-center">
                    <div className="mb-2 h-12 flex items-center justify-center">
                      {brand.logo ? (
                        <img src={brand.logo} alt={`${brand.name} logo`} className="h-8 max-w-full object-contain" />
                      ) : (
                        <h3 className="font-bold text-[#00262F]">{brand.name}</h3>
                      )}
                    </div>
                    <p className="text-sm text-gray-600">{brand.count}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section - Enhanced with USPs and better layout */}
      <section className="py-16 px-6 bg-[#00262F] text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="uppercase text-3xl font-bold mb-6">
                WELKOM BIJ<br />
                <span className="text-4xl">BOXSTOCK</span>
              </h2>
              
              <div className="space-y-4 text-gray-300 max-w-lg mb-6">
                <p>
                  We hebben de grootste collectie sneakers in Europa met meer dan <strong>10.000 paar</strong> van 50+ merken op voorraad.
                </p>
                <p>
                  Als 100% authorized retailer verkopen we alleen originele items rechtstreeks bij de merken. Dat zie je terug in onze reviews, omdat kwaliteit en service voor ons centraal staan.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-[#1EC0A3]/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#1EC0A3]">
                      <path d="M20 6 9 17l-5-5"/>
                    </svg>
                  </div>
                  <span className="text-sm font-medium">100% Authenticiteit</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-[#1EC0A3]/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#1EC0A3]">
                      <path d="M5 12h14"/>
                      <path d="M12 5v14"/>
                    </svg>
                  </div>
                  <span className="text-sm font-medium">Gratis verzending</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-[#1EC0A3]/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#1EC0A3]">
                      <path d="M12 2s10 5.6 10 14.4c0 1.9-1.9 3.6-3.7 3.6-2.7 0-5.3-2.3-6.3-4 -1 1.7-3.6 4-6.3 4C3.9 20 2 18.3 2 16.4 2 7.6 12 2 12 2"/>
                      <path d="M12 2s10 5.6 10 14.4c0 1.9-1.9 3.6-3.7 3.6-2.7 0-5.3-2.3-6.3-4"/>
                    </svg>
                  </div>
                  <span className="text-sm font-medium">14 dagen retour</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-[#1EC0A3]/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#1EC0A3]">
                      <path d="m9 11 3 3L22 4"/>
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
                    </svg>
                  </div>
                  <span className="text-sm font-medium">Klarna & iDEAL</span>
                </div>
              </div>
              
              <Link to="/over-ons">
                <button className="bg-[#1EC0A3] text-[#00262F] px-6 py-3 font-bold uppercase hover:bg-[#19a38b] transition-colors">
                  MEER OVER ONS
                </button>
              </Link>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
                alt="Premium sneakers collectie"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Lifestyle Collection Section - Combined products instead of separate categories */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="uppercase text-3xl font-bold flex items-center gap-2">
              <ShoppingBag className="text-[#E41A36]" size={28} />
              <span>LIFESTYLE COLLECTION</span>
            </h2>
            <Link to="/clothing" className="text-[#00262F] hover:text-[#E41A36] font-medium flex items-center gap-1 transition-colors">
              Bekijk alles <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {lifestyleProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          {/* Category buttons */}
          <div className="flex flex-wrap justify-center gap-3 mt-10">
            <Link to="/clothing">
              <button className="bg-[#00262F] text-white px-6 py-3 font-semibold rounded-sm hover:bg-[#00374F] transition-colors">
                KLEDING
              </button>
            </Link>
            <Link to="/accessories">
              <button className="bg-white border border-[#00262F] text-[#00262F] px-6 py-3 font-semibold rounded-sm hover:bg-gray-100 transition-colors">
                ACCESSOIRES
              </button>
            </Link>
            <Link to="/bags">
              <button className="bg-white border border-[#00262F] text-[#00262F] px-6 py-3 font-semibold rounded-sm hover:bg-gray-100 transition-colors">
                TASSEN
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming Releases Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="uppercase text-3xl font-bold flex items-center gap-2">
              <CalendarCheck className="text-[#E41A36]" />
              UPCOMING RELEASES
            </h2>
            <Link to="/releases" className="text-[#00262F] hover:text-[#E41A36] font-medium flex items-center gap-1 transition-colors">
              Alle releases <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {upcomingReleases.map((release) => (
              <div key={release.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={release.image}
                    alt={release.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm bg-[#E41A36]/10 text-[#E41A36] font-semibold rounded px-3 py-1.5 mb-3 inline-block">
                    Release: {release.releaseDate}
                  </div>
                  <Link to={`/brands/${release.brand.toLowerCase().replace(/\s+/g, '-')}`} className="text-[#00262F] hover:underline">
                    {release.brand}
                  </Link>
                  <h3 className="font-bold text-lg mt-1 mb-3">{release.name}</h3>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">{release.price}</span>
                    <button className="bg-[#00262F] text-white px-4 py-2 text-sm rounded hover:bg-[#00374F] transition-colors">
                      Notificeer mij
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Block */}
      <section className="py-16 px-6 bg-[#00262F] text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="max-w-lg">
              <h2 className="uppercase text-3xl font-bold mb-8">
                HOE IS DE TERM<br />
                'SNEAKERS' ONTSTAAN?
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Lang geleden in 1917, werden sportschoenen 'sneakers' genoemd omdat ze zo stil waren. De rubberen zool zorgde ervoor dat mensen konden "sluipen" (to sneak).
                </p>
                <p>
                  Wat begon als functionele sportschoenen voor basketbal en tennis, werd vanaf de jaren 70 een mode-item. Run DMC zette de trend met "My Adidas" in 1986 en sindsdien zijn sneakers niet meer weg te denken uit de streetwear cultuur.
                </p>
                <p className="mb-8">
                  Vandaag de dag is de sneakermarkt miljarden waard en verzamelen mensen zeldzame edities als kunststukken.
                </p>
              </div>
              <Link to="/sneaker-historie">
                <button className="border border-white text-white px-6 py-3 font-bold uppercase hover:bg-white hover:text-[#00262F] transition-colors">
                  MEER HISTORIE
                </button>
              </Link>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-full max-w-md">
                <img
                  src="https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                  alt="Vintage sneakers"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Improved Newsletter Section */}
      <Newsletter />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Landing;
