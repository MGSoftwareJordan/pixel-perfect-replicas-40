
import React from 'react';
import ProductCard from './ProductCard';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const RelatedProducts: React.FC = () => {
  const products = [
    {
      id: 1,
      brand: 'Air Jordan',
      name: 'Nike Air Mowabb Comme des Garcons Black',
      price: '€178',
      image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/1151fbe94e56faf832add68dff4fd394e96e331e?placeholderIfAbsent=true',
      rating: 4,
      discount: false
    },
    {
      id: 2,
      brand: 'Air Jordan',
      name: 'Nike Air Mowabb Comme des Garcons Black',
      price: '€178',
      image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/27fe542c912c5cbbc1326ae6bd677a0beb2ab12d?placeholderIfAbsent=true',
      rating: 4,
      discount: true,
      originalPrice: '€210'
    },
    {
      id: 3,
      brand: 'Air Jordan',
      name: 'Nike Air Mowabb Comme des Garcons Black',
      price: '€178',
      image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/20139938ade4dd7d58525cbf8fb332b18060cf34?placeholderIfAbsent=true',
      rating: 4,
      discount: false
    },
    {
      id: 4,
      brand: 'Air Jordan',
      name: 'Nike Air Mowabb Comme des Garcons Black',
      price: '€178',
      image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/dd32a857b0606cf7bc31f4fb99aad0f41f389582?placeholderIfAbsent=true',
      rating: 4,
      discount: true,
      originalPrice: '€200'
    },
    {
      id: 5,
      brand: 'Air Jordan',
      name: 'Nike Air Mowabb Comme des Garcons Black',
      price: '€178',
      image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/6b981a32a62f72e5782c601ffcd96e92c92212e1?placeholderIfAbsent=true',
      rating: 4,
      discount: false
    },
    {
      id: 6,
      brand: 'Air Jordan',
      name: 'Nike Air Mowabb Comme des Garcons Black',
      price: '€178',
      image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/52924e7b618d870295833cfadc406be08fad2e6a?placeholderIfAbsent=true',
      rating: 4,
      discount: true,
      originalPrice: '€220'
    }
  ];

  return (
    <section className="py-12 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#00262F]">
            Artikelen die hierop lijken
          </h2>
          <Link to="/related" className="text-[#00262F] hover:text-[#E41A36] font-medium flex items-center gap-1 transition-colors">
            Bekijk alle <ArrowRight size={18} />
          </Link>
        </div>
        
        <div className="relative">
          <div className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide">
            {products.map(product => (
              <div key={product.id} className="min-w-[250px] max-w-[250px]">
                <ProductCard
                  id={product.id}
                  brand={product.brand}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                  rating={product.rating}
                  discount={product.discount}
                  originalPrice={product.originalPrice}
                />
              </div>
            ))}
          </div>
          
          {/* Navigation buttons with better touch targets */}
          <button 
            className="hidden md:flex absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white rounded-full shadow-md p-3 min-w-12 min-h-12 items-center justify-center"
            aria-label="Previous items"
          >
            <ArrowRight size={20} className="rotate-180" />
          </button>
          <button 
            className="hidden md:flex absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white rounded-full shadow-md p-3 min-w-12 min-h-12 items-center justify-center"
            aria-label="Next items"
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;
