
import React from 'react';
import Header from '@/components/boxstock/Header';
import Footer from '@/components/boxstock/Footer';
import Newsletter from '@/components/boxstock/Newsletter';
import { Link } from 'react-router-dom';

const Landing: React.FC = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Jordan XXXIII University Red",
      price: "€178",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/e780f41d5f9e59dfa77a1158315633f6c67db5ec?placeholderIfAbsent=true",
    },
    {
      id: 2,
      name: "Nike Air Mowabb Comme des Garcons Black",
      price: "€210",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/1151fbe94e56faf832add68dff4fd394e96e331e?placeholderIfAbsent=true",
    },
    {
      id: 3,
      name: "Nike Dunk Low Off-White",
      price: "€245",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/20139938ade4dd7d58525cbf8fb332b18060cf34?placeholderIfAbsent=true",
    }
  ];

  const categories = [
    { name: "Sneakers", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/478bc0398700d77556d57437a15fa378fc43d838?placeholderIfAbsent=true" },
    { name: "Accessoires", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/ef61aa1780cbf7c1996fd43b23a51284b2603945?placeholderIfAbsent=true" },
    { name: "Kleding", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/81da93ff12d5208ef959a4f82a8cf15021032e44?placeholderIfAbsent=true" },
    { name: "Tassen", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/8ac83ea04bc480ea93ab3dbfd95bab4b25dffd9f?placeholderIfAbsent=true" }
  ];

  const brands = [
    "Nike", "Adidas", "Air Jordan", "New Balance", "Puma", "Reebok"
  ];

  return (
    <div className="bg-white flex flex-col overflow-hidden items-stretch">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-[#05414F] to-[#00262F] z-0">
          <img 
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e780f41d5f9e59dfa77a1158315633f6c67db5ec?placeholderIfAbsent=true" 
            alt="Hero background" 
            className="w-full h-full object-cover opacity-20 mix-blend-overlay"
          />
        </div>
        
        <div className="container mx-auto px-6 z-10 relative">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Exclusieve sneakers en streetwear</h1>
            <p className="text-xl text-[#AEDDE8] mb-8">Ontdek de nieuwste collecties en limited editions van de beste merken wereldwijd</p>
            <div className="flex flex-wrap gap-4">
              <Link to="/product">
                <button className="bg-[#E41A36] text-white px-8 py-4 text-lg font-bold rounded-md hover:bg-[#c01730] transition-colors">
                  Shop nu
                </button>
              </Link>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 text-lg font-bold rounded-md hover:bg-white/10 transition-colors">
                Pre-owned collectie
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-6 md:px-20">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-[#00262F] text-[32px] font-bold">Uitgelichte producten</h2>
            <div className="flex items-center gap-2 text-base font-bold cursor-pointer">
              <span>Alle producten</span>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6d39c0f1eb7f1243a62c529fa14d41d85453ba72?placeholderIfAbsent=true"
                className="w-6 h-6"
                alt="Arrow right"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Link to="/product" key={product.id} className="group">
                <div className="bg-[#F1F1F1] p-8 rounded-lg transition-transform group-hover:scale-[1.02]">
                  <div className="flex justify-end mb-4">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/47b4de12a24d77edff0bb699cf87c3fd3f565fcc?placeholderIfAbsent=true"
                      className="w-10 h-10 rounded-full"
                      alt="Brand logo"
                    />
                  </div>
                  <img
                    src={product.image}
                    className="w-full h-64 object-contain mb-6"
                    alt={product.name}
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-[#00262F] font-bold text-lg">{product.name}</h3>
                  <p className="text-[#00262F] mt-2">{product.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-[#F8F8F8] px-6 md:px-20">
        <div className="container mx-auto">
          <h2 className="text-[#00262F] text-[32px] font-bold mb-12">Categorieën</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                <img
                  src={category.image}
                  className="w-full h-48 object-contain mb-4"
                  alt={category.name}
                />
                <h3 className="text-[#00262F] text-xl font-bold text-center">{category.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pre-owned Banner */}
      <section className="py-16 px-6 md:px-20">
        <div className="container mx-auto">
          <div className="bg-[#AEDDE8] rounded-lg flex flex-col md:flex-row items-center">
            <div className="p-10 md:p-16 md:w-1/2">
              <h2 className="text-[#00262F] text-[32px] font-bold mb-4">Verkoop je items</h2>
              <p className="text-[#00262F] text-xl mb-8">
                Heb jij sneakers, kleding of accessoires die je niet meer gebruikt? 
                Word reseller en verkoop ze via Boxstock!
              </p>
              <button className="bg-[#E41A36] text-white px-8 py-4 text-lg font-bold rounded-md hover:bg-[#c01730] transition-colors">
                Verkoop dit item
              </button>
            </div>
            <div className="md:w-1/2 p-10">
              <img 
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/30b223d18d93a5d0fd9c840e00271b7e9387ba30?placeholderIfAbsent=true"
                className="w-full h-auto max-h-[300px] object-contain"
                alt="Pre-owned sneakers"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="py-16 px-6 md:px-20">
        <div className="container mx-auto">
          <h2 className="text-[#00262F] text-[32px] font-bold mb-12">Populaire merken</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {brands.map((brand, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 flex items-center justify-center hover:border-[#00262F] transition-colors cursor-pointer">
                <span className="text-[#00262F] font-bold text-lg">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Boxstock */}
      <section className="py-16 bg-[#F8F8F8] px-6 md:px-20">
        <div className="container mx-auto">
          <h2 className="text-[#00262F] text-[32px] font-bold mb-12 text-center">Waarom Boxstock?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a509693db90c1c674ca7d91d448f1f7c1390ae40?placeholderIfAbsent=true"
                className="w-16 h-16 mx-auto mb-4"
                alt="Verification icon"
              />
              <h3 className="text-[#00262F] text-xl font-bold mb-4">100% Authenticiteit</h3>
              <p className="text-[#00262F]">Elk product wordt geverifieerd door het Boxstock Authenticatieteam</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0c091b2fd07f8a0ba829b4787a9d57f263a51b1b?placeholderIfAbsent=true"
                className="w-16 h-16 mx-auto mb-4"
                alt="Payment icon"
              />
              <h3 className="text-[#00262F] text-xl font-bold mb-4">Veilig betalen</h3>
              <p className="text-[#00262F]">Betaal veilig en gemakkelijk met verschillende betaalmethoden</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0b1cc9210f6efd5429a2869691c140d8d12605c4?placeholderIfAbsent=true"
                className="w-16 h-16 mx-auto mb-4"
                alt="Rating icon"
              />
              <h3 className="text-[#00262F] text-xl font-bold mb-4">Hoge klantbeoordeling</h3>
              <p className="text-[#00262F]">Onze klanten waarderen ons met een 9.2/10</p>
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
