
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/boxstock/Header';
import Footer from '@/components/boxstock/Footer';
import Newsletter from '@/components/boxstock/Newsletter';
import { ArrowRight, Star } from 'lucide-react';
import ProductCard from '@/components/boxstock/ProductCard';

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
      tag: "BESTSELLER"
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
      tag: "NIEUW"
    },
    {
      id: 3,
      name: "Nike Dunk Low Off-White",
      price: "€245",
      sale: false,
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/20139938ade4dd7d58525cbf8fb332b18060cf34?placeholderIfAbsent=true",
      brand: "Nike",
      rating: 5.0,
      tag: "TRENDING"
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
      tag: "SALE"
    },
    {
      id: 5,
      name: "Vans Old Skool Black",
      price: "€89",
      sale: false,
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/b3525f8e789f93fdf9069e290822e3cc6271a324?placeholderIfAbsent=true",
      brand: "Vans",
      rating: 4.6
    }
  ];

  // Categories with images
  const categories = [
    { name: "DAMES", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/3ef3bd9f9ad579c25ada5f64b24a86af2750850e?placeholderIfAbsent=true", path: "/product" },
    { name: "HEREN", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/a9e31490770c0f0aca97fed6fe494ad78c6b3959?placeholderIfAbsent=true", path: "/product" },
    { name: "KINDEREN", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/69e0e5f62d38686d3ee665e8954a1ae7830c3e96?placeholderIfAbsent=true", path: "/product" },
    { name: "BABY", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/8ff4920a29a60a5882ad1e3a361e3e005dffcf77?placeholderIfAbsent=true", path: "/product" }
  ];

  return (
    <div className="bg-white">
      <Header />
      
      {/* Hero Section - Updated with new background and styling */}
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

      {/* Welcome Section - Updated with better styling */}
      <section className="py-16 px-6">
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
                <button className="bg-white text-[#00262F] px-6 py-2 font-bold hover:bg-gray-100 transition-colors">
                  BUY NEW KICKS
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hot Products Section - Updated with product cards */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="uppercase text-3xl font-bold mb-12">
            HITTING HEAT<br />
            <span className="text-4xl">VAN BOXSTOCK</span>
          </h2>
          
          <div className="flex overflow-x-auto gap-4 pb-4">
            {featuredProducts.map((product) => (
              <Link to="/product" key={product.id} className="min-w-[250px]">
                <div className="relative bg-gray-100 rounded-lg overflow-hidden">
                  <div className="aspect-square">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
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
                    <div className="text-sm text-[#00262F]">{product.brand}</div>
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
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category, index) => (
              <Link to={category.path} key={index} className="group relative">
                <div className="aspect-[1/1] overflow-hidden bg-gray-100">
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

      {/* Benefits - Updated with Boxstock branding */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="uppercase text-3xl font-bold mb-12">
            ZOEKEN, KIEZEN, SCOREN<br />
            <span className="text-4xl">MET BOXSTOCK</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <p className="text-gray-700">
                Je favoriete sneakers shop je makkelijk en snel bij Boxstock. Met meer dan 10.000 paar sneakers op voorraad heb je altijd genoeg keus. We hebben alle topsellers, limited editions en de nieuwste releases.
              </p>
              <p className="text-gray-700">
                We zijn een 100% authorized retailer. Dat betekent dat we samenwerken met alle topmerken en dat alle sneakers op onze site 100% origineel en authentiek zijn.
              </p>
              <p className="text-gray-700">
                Vandaag voor 23:59 besteld? Dan heb je je sneakers morgen al in huis! We versturen met DHL en je kan de bestelling volgen via track & trace.
              </p>
            </div>
            <div className="space-y-6">
              <p className="text-gray-700">
                Niet blij met je aankoop? Je kan binnen 30 dagen je bestelling retourneren. Erg makkelijk met ons retourportaal en de verzendkosten zijn voor ons.
              </p>
              <p className="text-gray-700">
                We worden beoordeeld met een 9.2 door duizenden klanten. Service, kwaliteit, snelheid van leveren en goede prijzen zijn de redenen dat klanten ons aanraden.
              </p>
              <p className="text-gray-700">
                Vragen of wil je gewoon even kletsen? We zijn bereikbaar via WhatsApp, mail en telefoon. Ons team staat altijd voor je klaar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section - Updated with Boxstock branding */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="uppercase text-3xl font-bold mb-12">
            BOXSTOCK<br />
            <span className="text-4xl">SCHRIJFT BLOGS</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/blog/1" className="group">
              <div className="border border-gray-200 overflow-hidden">
                <div className="aspect-[16/9] overflow-hidden">
                  <img 
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/e780f41d5f9e59dfa77a1158315633f6c67db5ec?placeholderIfAbsent=true"
                    alt="Blog post"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="text-xs text-gray-500 mb-2">3 mei 2025</div>
                  <h3 className="text-lg font-bold group-hover:text-[#E41A36] transition-colors mb-3">
                    De geschiedenis van Air Jordan sneakers
                  </h3>
                  <p className="text-gray-700 text-sm line-clamp-3">
                    Ontdek de rijke geschiedenis achter het iconische Air Jordan merk en hoe het de sneakercultuur voorgoed veranderde.
                  </p>
                </div>
              </div>
            </Link>
            
            <Link to="/blog/2" className="group">
              <div className="border border-gray-200 overflow-hidden">
                <div className="aspect-[16/9] overflow-hidden">
                  <img 
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/240df11c1b0446d48308edbcb679fa99a4d7cbe3?placeholderIfAbsent=true"
                    alt="Blog post"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="text-xs text-gray-500 mb-2">28 april 2025</div>
                  <h3 className="text-lg font-bold group-hover:text-[#E41A36] transition-colors mb-3">
                    Top 10 duurzame sneakermerken van 2025
                  </h3>
                  <p className="text-gray-700 text-sm line-clamp-3">
                    De sneakerindustrie wordt steeds duurzamer. Bekijk hier de merken die vooroplopen met eco-vriendelijke innovaties.
                  </p>
                </div>
              </div>
            </Link>
            
            <Link to="/blog/3" className="group">
              <div className="border border-gray-200 overflow-hidden">
                <div className="aspect-[16/9] overflow-hidden">
                  <img 
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/ab17d086a93643e33227de5cccee1c221bae4655?placeholderIfAbsent=true"
                    alt="Blog post"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="text-xs text-gray-500 mb-2">15 april 2025</div>
                  <h3 className="text-lg font-bold group-hover:text-[#E41A36] transition-colors mb-3">
                    De opkomst van digitale mode en NFT sneakers
                  </h3>
                  <p className="text-gray-700 text-sm line-clamp-3">
                    Hoe digitale mode en NFT's de sneakerwereld transformeren en wat dit betekent voor verzamelaars en investeerders.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* History Block - Updated with Boxstock branding */}
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
      
      {/* Social Media */}
      <section className="py-10 bg-black text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="uppercase font-bold mb-6">SOCIAL MEDIA</h2>
          <div className="flex justify-center gap-6">
            <a href="#" className="text-white hover:text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </a>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Landing;
