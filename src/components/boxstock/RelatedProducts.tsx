import React from 'react';
import ProductCard from './ProductCard';

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
      discount: true
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
      discount: true
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
      discount: true
    }
  ];

  return (
    <section className="flex w-full flex-col items-stretch mt-[60px] pl-20 pt-[9px] pb-[21px] max-md:max-w-full max-md:mt-10 max-md:pl-5">
      <div className="self-center flex w-full max-w-[1194px] items-stretch gap-5 text-[#00262F] font-bold flex-wrap justify-between max-md:max-w-full">
        <h2 className="text-[#00262F] text-[32px] leading-none">
          Artikelen die hierop lijken
        </h2>
        <div className="flex items-stretch gap-[11px] text-base mt-1.5">
          <div className="text-[#00262F] grow cursor-pointer">
            Bekijk meer
          </div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6d39c0f1eb7f1243a62c529fa14d41d85453ba72?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-6 shrink-0"
            alt="Arrow right"
          />
        </div>
      </div>
      <div className="flex items-center gap-2.5 mt-[37px] overflow-x-auto max-md:max-w-full">
        {products.map(product => (
          <ProductCard
            key={product.id}
            brand={product.brand}
            name={product.name}
            price={product.price}
            image={product.image}
            rating={product.rating}
            discount={product.discount}
          />
        ))}
      </div>
    </section>
  );
};

export default RelatedProducts;