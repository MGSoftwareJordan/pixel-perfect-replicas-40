
import React from 'react';
import Header from '@/components/boxstock/Header';
import Footer from '@/components/boxstock/Footer';
import Newsletter from '@/components/boxstock/Newsletter';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';

const Landing: React.FC = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Jordan XXXIII University Red",
      price: "€178",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/e780f41d5f9e59dfa77a1158315633f6c67db5ec?placeholderIfAbsent=true",
      brand: "Air Jordan",
      rating: 4.5
    },
    {
      id: 2,
      name: "Nike Air Mowabb Comme des Garcons Black",
      price: "€210",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/1151fbe94e56faf832add68dff4fd394e96e331e?placeholderIfAbsent=true",
      brand: "Nike",
      rating: 4.8
    },
    {
      id: 3,
      name: "Nike Dunk Low Off-White",
      price: "€245",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/20139938ade4dd7d58525cbf8fb332b18060cf34?placeholderIfAbsent=true",
      brand: "Nike",
      rating: 5.0
    }
  ];

  const categories = [
    { name: "Sneakers", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/478bc0398700d77556d57437a15fa378fc43d838?placeholderIfAbsent=true", count: 462 },
    { name: "Accessoires", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/ef61aa1780cbf7c1996fd43b23a51284b2603945?placeholderIfAbsent=true", count: 124 },
    { name: "Kleding", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/81da93ff12d5208ef959a4f82a8cf15021032e44?placeholderIfAbsent=true", count: 286 },
    { name: "Tassen", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/8ac83ea04bc480ea93ab3dbfd95bab4b25dffd9f?placeholderIfAbsent=true", count: 92 }
  ];

  return (
    <div className="bg-white min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[650px] flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#00262F]/90 to-[#05414F]/90" />
          <img 
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e780f41d5f9e59dfa77a1158315633f6c67db5ec?placeholderIfAbsent=true" 
            alt="Hero background" 
            className="w-full h-full object-cover object-center"
          />
        </div>
        
        <div className="container mx-auto px-6 z-10 relative">
          <div className="max-w-xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
              Exclusieve sneakers voor 2025
            </h1>
            <p className="text-xl text-[#AEDDE8] mb-10 leading-relaxed">
              De meest exclusieve en limited edition sneakers nu verkrijgbaar. Ontdek onze collectie.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/product">
                <button className="bg-[#E41A36] text-white px-8 py-4 text-lg font-bold rounded-md hover:bg-[#c01730] transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg flex items-center gap-2">
                  Shop nu
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
              <Link to="/blog">
                <button className="bg-transparent border-2 border-white text-white px-8 py-4 text-lg font-bold rounded-md hover:bg-white/10 transition-all duration-300">
                  Bekijk blog
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 px-6 bg-[#F8F8F8]">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-[#00262F] text-3xl font-bold">Categorieën</h2>
            <Link to="/product" className="text-[#00262F] font-bold flex items-center gap-2 hover:text-[#E41A36] transition-colors">
              Alle categorieën
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={category.image}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      alt={category.name}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-[#00262F] text-xl font-bold">{category.name}</h3>
                    <p className="text-gray-500 mt-1">{category.count} producten</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-[#00262F] text-3xl font-bold">Uitgelichte producten</h2>
            <Link to="/product" className="text-[#00262F] font-bold flex items-center gap-2 hover:text-[#E41A36] transition-colors">
              Alle producten
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Link to="/product" key={product.id} className="group">
                <div className="bg-[#F1F1F1] rounded-2xl p-6 transition-all duration-300 group-hover:shadow-md">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm font-semibold text-[#00262F]">{product.brand}</span>
                    <div className="flex items-center gap-1 text-[#E41A36]">
                      <Star className="w-4 h-4 fill-[#E41A36] text-[#E41A36]" />
                      <span className="text-sm font-semibold">{product.rating}</span>
                    </div>
                  </div>
                  <div className="flex justify-center py-8">
                    <img
                      src={product.image}
                      className="w-full h-56 object-contain transform group-hover:scale-110 transition-transform duration-700"
                      alt={product.name}
                    />
                  </div>
                </div>
                <div className="mt-4 px-2">
                  <h3 className="text-[#00262F] font-bold text-lg line-clamp-1 group-hover:text-[#E41A36] transition-colors">{product.name}</h3>
                  <p className="text-[#00262F] mt-2 font-semibold">{product.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Pre-owned Banner */}
      <section className="py-16 px-6 bg-[#F8F8F8]">
        <div className="container mx-auto">
          <div className="bg-gradient-to-br from-[#AEDDE8] to-[#93D0DE] rounded-2xl overflow-hidden">
            <div className="flex flex-col md:flex-row items-center">
              <div className="p-10 md:p-16 md:w-1/2">
                <span className="inline-block text-[#00262F] bg-white/50 px-3 py-1 rounded-full text-sm font-semibold mb-4">Premium Reselling</span>
                <h2 className="text-[#00262F] text-3xl md:text-4xl font-bold mb-4">Verkoop je items</h2>
                <p className="text-[#00262F] text-xl mb-8 leading-relaxed">
                  Word onderdeel van de Boxstock community. Verkoop je premium sneakers en streetwear items.
                </p>
                <button className="bg-[#E41A36] text-white px-8 py-4 text-lg font-bold rounded-md hover:bg-[#c01730] transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg">
                  Word reseller
                </button>
              </div>
              <div className="md:w-1/2 p-10">
                <img 
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/30b223d18d93a5d0fd9c840e00271b7e9387ba30?placeholderIfAbsent=true"
                  className="w-full h-auto max-h-[300px] object-contain transform hover:scale-105 transition-transform duration-500"
                  alt="Pre-owned sneakers"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Boxstock */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-[#00262F] text-3xl font-bold mb-16 text-center">Waarom Boxstock?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-[#F1F1F1] rounded-full flex items-center justify-center mx-auto mb-6">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/a509693db90c1c674ca7d91d448f1f7c1390ae40?placeholderIfAbsent=true"
                  className="w-8 h-8"
                  alt="Verification icon"
                />
              </div>
              <h3 className="text-[#00262F] text-xl font-bold mb-4">100% Authenticiteit</h3>
              <p className="text-[#00262F] leading-relaxed">Elk product wordt geverifieerd door het Boxstock Authenticatieteam</p>
            </div>
            
            <div className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-[#F1F1F1] rounded-full flex items-center justify-center mx-auto mb-6">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/0c091b2fd07f8a0ba829b4787a9d57f263a51b1b?placeholderIfAbsent=true"
                  className="w-8 h-8"
                  alt="Payment icon"
                />
              </div>
              <h3 className="text-[#00262F] text-xl font-bold mb-4">Veilig betalen</h3>
              <p className="text-[#00262F] leading-relaxed">Betaal veilig en gemakkelijk met verschillende betaalmethoden</p>
            </div>
            
            <div className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-[#F1F1F1] rounded-full flex items-center justify-center mx-auto mb-6">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/0b1cc9210f6efd5429a2869691c140d8d12605c4?placeholderIfAbsent=true"
                  className="w-8 h-8"
                  alt="Rating icon"
                />
              </div>
              <h3 className="text-[#00262F] text-xl font-bold mb-4">Hoge klantbeoordeling</h3>
              <p className="text-[#00262F] leading-relaxed">Onze klanten waarderen ons met een 9.2/10</p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-16 px-6 bg-[#F8F8F8]">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-[#00262F] text-3xl font-bold">Laatste blogs</h2>
            <Link to="/blog" className="text-[#00262F] font-bold flex items-center gap-2 hover:text-[#E41A36] transition-colors">
              Alle blogs
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link to="/blog/1" className="group">
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/e780f41d5f9e59dfa77a1158315633f6c67db5ec?placeholderIfAbsent=true"
                    alt="Blog post"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="text-sm text-gray-500 mb-2">3 mei 2025</div>
                  <h3 className="text-xl font-bold text-[#00262F] mb-3 group-hover:text-[#E41A36] transition-colors">De geschiedenis van Air Jordan sneakers</h3>
                  <p className="text-gray-600 mb-4 flex-1">Ontdek de rijke geschiedenis achter het iconische Air Jordan merk en hoe het de sneakercultuur voorgoed veranderde.</p>
                  <div className="flex items-center text-[#E41A36] font-semibold">
                    Lees meer
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </div>
            </Link>
            
            <Link to="/blog/2" className="group">
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/240df11c1b0446d48308edbcb679fa99a4d7cbe3?placeholderIfAbsent=true"
                    alt="Blog post"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="text-sm text-gray-500 mb-2">28 april 2025</div>
                  <h3 className="text-xl font-bold text-[#00262F] mb-3 group-hover:text-[#E41A36] transition-colors">Top 10 duurzame sneakermerken van 2025</h3>
                  <p className="text-gray-600 mb-4 flex-1">De sneakerindustrie wordt steeds duurzamer. Bekijk hier de merken die vooroplopen met eco-vriendelijke innovaties.</p>
                  <div className="flex items-center text-[#E41A36] font-semibold">
                    Lees meer
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </div>
            </Link>
            
            <Link to="/blog/3" className="group">
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/ab17d086a93643e33227de5cccee1c221bae4655?placeholderIfAbsent=true"
                    alt="Blog post"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="text-sm text-gray-500 mb-2">15 april 2025</div>
                  <h3 className="text-xl font-bold text-[#00262F] mb-3 group-hover:text-[#E41A36] transition-colors">De opkomst van digitale mode en NFT sneakers</h3>
                  <p className="text-gray-600 mb-4 flex-1">Hoe digitale mode en NFT's de sneakerwereld transformeren en wat dit betekent voor verzamelaars en investeerders.</p>
                  <div className="flex items-center text-[#E41A36] font-semibold">
                    Lees meer
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </div>
            </Link>
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
