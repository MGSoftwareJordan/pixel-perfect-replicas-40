
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/boxstock/Header';
import Footer from '@/components/boxstock/Footer';
import Newsletter from '@/components/boxstock/Newsletter';
import { ArrowRight, Star, Tag } from 'lucide-react';

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
    },
    {
      id: 5,
      name: "Vans Old Skool Black",
      price: "€89",
      sale: false,
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/b3525f8e789f93fdf9069e290822e3cc6271a324?placeholderIfAbsent=true",
      brand: "Vans",
      rating: 4.6,
      category: "sneakers"
    }
  ];

  // Accessories products
  const accessoriesProducts = [
    {
      id: 6,
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
      name: "Nike Tech Cap Black",
      price: "€29",
      sale: false,
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/240df11c1b0446d48308edbcb679fa99a4d7cbe3?placeholderIfAbsent=true",
      brand: "Nike",
      rating: 4.5,
      category: "accessories"
    },
    {
      id: 8,
      name: "Off-White Industrial Belt Yellow",
      price: "€170",
      sale: true,
      originalPrice: "€195",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/e780f41d5f9e59dfa77a1158315633f6c67db5ec?placeholderIfAbsent=true",
      brand: "Off-White",
      rating: 4.9,
      tag: "SALE",
      category: "accessories"
    }
  ];

  // Clothing products
  const clothingProducts = [
    {
      id: 9,
      name: "Stussy Basic Tee Black",
      price: "€49",
      sale: false,
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/1151fbe94e56faf832add68dff4fd394e96e331e?placeholderIfAbsent=true",
      brand: "Stussy",
      rating: 4.7,
      category: "clothing"
    },
    {
      id: 10,
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
      id: 11,
      name: "Carhartt WIP Hoodie Grey",
      price: "€85",
      sale: true,
      originalPrice: "€99",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/20139938ade4dd7d58525cbf8fb332b18060cf34?placeholderIfAbsent=true",
      brand: "Carhartt WIP",
      rating: 4.6,
      tag: "SALE",
      category: "clothing"
    }
  ];

  // Bags products
  const bagsProducts = [
    {
      id: 12,
      name: "Supreme Shoulder Bag SS21 Black",
      price: "€79",
      sale: false,
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/240df11c1b0446d48308edbcb679fa99a4d7cbe3?placeholderIfAbsent=true",
      brand: "Supreme",
      rating: 4.5,
      category: "bags"
    },
    {
      id: 13,
      name: "The North Face Base Camp Duffel S Black",
      price: "€130",
      sale: false,
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/e780f41d5f9e59dfa77a1158315633f6c67db5ec?placeholderIfAbsent=true",
      brand: "The North Face",
      rating: 4.8,
      category: "bags"
    },
    {
      id: 14,
      name: "Eastpak Padded Pak'r Black",
      price: "€55",
      sale: true,
      originalPrice: "€65",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/ab17d086a93643e33227de5cccee1c221bae4655?placeholderIfAbsent=true",
      brand: "Eastpak",
      rating: 4.7,
      tag: "SALE",
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
    { name: "Nike", logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/nike-logo.png?placeholderIfAbsent=true" },
    { name: "Adidas", logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/adidas-logo.png?placeholderIfAbsent=true" },
    { name: "Jordan", logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/jordan-logo.png?placeholderIfAbsent=true" },
    { name: "New Balance", logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/new-balance-logo.png?placeholderIfAbsent=true" },
    { name: "Puma", logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/puma-logo.png?placeholderIfAbsent=true" },
    { name: "Converse", logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/converse-logo.png?placeholderIfAbsent=true" }
  ];

  // Categories with images
  const categories = [
    { name: "SNEAKERS", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/3ef3bd9f9ad579c25ada5f64b24a86af2750850e?placeholderIfAbsent=true", path: "/sneakers" },
    { name: "KLEDING", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/a9e31490770c0f0aca97fed6fe494ad78c6b3959?placeholderIfAbsent=true", path: "/clothing" },
    { name: "ACCESSOIRES", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/69e0e5f62d38686d3ee665e8954a1ae7830c3e96?placeholderIfAbsent=true", path: "/accessories" },
    { name: "TASSEN", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/8ff4920a29a60a5882ad1e3a361e3e005dffcf77?placeholderIfAbsent=true", path: "/bags" }
  ];

  // Product card component
  const ProductCard = ({ product }: { product: any }) => (
    <Link to={`/product/${product.id}`} className="min-w-[250px]">
      <div className="relative bg-gray-100 rounded-lg overflow-hidden group">
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
        </div>
        <div className="p-4 bg-white">
          <div className="text-sm text-[#00262F]">
            <Link to={`/brands/${product.brand.toLowerCase().replace(/\s+/g, '-')}`} className="hover:underline">
              {product.brand}
            </Link>
          </div>
          <h3 className="text-sm font-bold mt-1 mb-2 truncate">{product.name}</h3>
          
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
            src={`https://boxstock.com/images/banners/nike-jordan.webp`}
            alt="Hero background" 
            className="w-full h-full object-cover object-center scale-110 animate-slow-zoom"
          />
        </div>
        
        <div className="container mx-auto px-6 z-10 relative">
          <div className="max-w-xl">
            <div className="inline-block bg-white px-4 py-1 mb-4">
              <span className="text-sm font-bold text-[#E41A36] tracking-wider">NEW ARRIVALS</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white uppercase mb-6 leading-tight">
              PREMIUM<br />SNEAKERS &<br />STREETWEAR
            </h1>
            <p className="text-white text-lg mb-8 max-w-md">
              Ontdek de nieuwste collecties en exclusieve releases bij Boxstock, jouw premium sneaker destination.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link to="/product">
                <button className="bg-[#E41A36] text-white px-8 py-4 text-sm font-bold uppercase hover:bg-[#c01730] transition-colors">
                  SHOP NU
                </button>
              </Link>
              <Link to="/pre-owned">
                <button className="bg-white text-black px-8 py-4 text-sm font-bold uppercase hover:bg-gray-100 transition-colors">
                  PRE-OWNED
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories - Enhanced section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="uppercase text-3xl font-bold mb-12 text-center">
            ONTDEK ONZE CATEGORIEËN
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Link to={category.path} key={index} className="group relative">
                <div className="aspect-[1/1] overflow-hidden bg-gray-100 rounded-lg">
                  <img 
                    src={category.image}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt={category.name}
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
                    <h3 className="text-white text-2xl font-bold">{category.name}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Top Brands */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="uppercase text-3xl font-bold mb-12 flex items-center justify-center gap-3">
            <Star className="text-[#E41A36]" />
            ONZE TOP MERKEN
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {topBrands.map((brand, index) => (
              <Link 
                to={`/brands?filter=${brand.name}`} 
                key={index} 
                className="bg-white border border-gray-200 hover:border-gray-300 rounded-lg p-6 flex items-center justify-center h-32 transition-all hover:shadow-sm"
              >
                <div className="text-center">
                  <div className="mb-2 h-12 flex items-center justify-center">
                    {brand.logo ? (
                      <img src={brand.logo} alt={brand.name} className="h-8 max-w-full object-contain" />
                    ) : (
                      <h3 className="font-bold text-[#00262F]">{brand.name}</h3>
                    )}
                  </div>
                  <p className="text-sm text-gray-600">Shop {brand.name}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Welcome Section - Enhanced design */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="uppercase text-3xl font-bold mb-6">
                WELKOM BIJ<br />
                <span className="text-4xl">BOXSTOCK</span>
              </h2>
              <p className="text-gray-700 mb-4">
                We hebben de grootste collectie sneakers in Europa. Met meer dan 10.000 paar van 50+ merken op voorraad heb je altijd genoeg keus.
              </p>
              <p className="text-gray-700 mb-6">
                We zijn 100% authorized retailer en verkopen alleen originele items rechtstreeks bij de merken. Dat zie je terug in onze reviews, omdat service en kwaliteit voor ons op de eerste plaats staan.
              </p>
              <button className="bg-[#E41A36] text-white px-6 py-3 font-bold uppercase hover:bg-[#c01730] transition-colors">
                LEES MEER
              </button>
            </div>
            <div>
              <div className="bg-[#00262F] text-white p-10 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                <h3 className="uppercase text-3xl font-bold mb-4 leading-tight">
                  AUTHENTIEKE<br />
                  SNEAKERS
                </h3>
                <div className="h-1 w-16 bg-[#E41A36] mb-4"></div>
                <p className="mb-6 text-gray-300">
                  Alle sneakers op onze site zijn 100% authentiek en rechtstreeks bij de merken ingekocht.
                </p>
                <Link to="/sneakers">
                  <button className="bg-white text-[#00262F] px-6 py-2 font-bold hover:bg-gray-100 transition-colors flex items-center gap-2">
                    SHOP SNEAKERS <ArrowRight size={16} />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sneakers Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="uppercase text-3xl font-bold">
              SNEAKERS
            </h2>
            <Link to="/sneakers" className="text-[#00262F] hover:text-[#E41A36] font-medium flex items-center gap-1 transition-colors">
              Bekijk alles <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className="flex overflow-x-auto gap-4 pb-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Accessories Section */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="uppercase text-3xl font-bold">
              ACCESSOIRES
            </h2>
            <Link to="/accessories" className="text-[#00262F] hover:text-[#E41A36] font-medium flex items-center gap-1 transition-colors">
              Bekijk alles <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className="flex overflow-x-auto gap-4 pb-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
            {accessoriesProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Clothing Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="uppercase text-3xl font-bold">
              KLEDING
            </h2>
            <Link to="/clothing" className="text-[#00262F] hover:text-[#E41A36] font-medium flex items-center gap-1 transition-colors">
              Bekijk alles <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className="flex overflow-x-auto gap-4 pb-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
            {clothingProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Bags Section */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="uppercase text-3xl font-bold">
              TASSEN
            </h2>
            <Link to="/bags" className="text-[#00262F] hover:text-[#E41A36] font-medium flex items-center gap-1 transition-colors">
              Bekijk alles <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className="flex overflow-x-auto gap-4 pb-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
            {bagsProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Releases Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="uppercase text-3xl font-bold mb-8">
            UPCOMING RELEASES
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {upcomingReleases.map((release) => (
              <div key={release.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={release.image}
                    alt={release.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-[#E41A36] font-semibold mb-2">
                    Release: {release.releaseDate}
                  </div>
                  <Link to={`/brands/${release.brand.toLowerCase().replace(/\s+/g, '-')}`} className="text-[#00262F] hover:underline">
                    {release.brand}
                  </Link>
                  <h3 className="font-bold text-lg mt-1 mb-2">{release.name}</h3>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">{release.price}</span>
                    <button className="bg-[#00262F] text-white px-4 py-2 text-sm rounded-md hover:bg-[#00374F] transition-colors">
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
            <div>
              <h2 className="uppercase text-3xl font-bold mb-8">
                HOE IS DE TERM<br />
                'SNEAKERS' ONTSTAAN?
              </h2>
              <p className="mb-4">
                Lang geleden in 1917, werden sportschoenen 'sneakers' genoemd omdat ze zo stil waren. De rubberen zool zorgde ervoor dat mensen konden "sluipen" (to sneak).
              </p>
              <p className="mb-4">
                Wat begon als functionele sportschoenen voor basketbal en tennis, werd vanaf de jaren 70 een mode-item. Run DMC zette de trend met "My Adidas" in 1986 en sindsdien zijn sneakers niet meer weg te denken uit de streetwear cultuur.
              </p>
              <p className="mb-8">
                Vandaag de dag is de sneakermarkt miljarden waard en verzamelen mensen zeldzame edities als kunststukken. Van sportschoen naar fashion statement naar investering - dat is de evolutie van de sneaker.
              </p>
              <button className="border border-white text-white px-6 py-3 font-bold uppercase hover:bg-white hover:text-[#00262F] transition-colors">
                MEER HISTORIE
              </button>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-xs">
                <div className="aspect-video bg-[#00262F] rounded flex items-center justify-center border border-white/20">
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                    <div className="w-0 h-0 border-t-8 border-t-transparent border-l-16 border-l-white border-b-8 border-b-transparent ml-1"></div>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-xl font-bold uppercase">EVEN TERUG IN DE TIJD</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Landing;
