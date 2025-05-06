import React from 'react';
import ProductCard from './ProductCard';

const PreOwnedProducts: React.FC = () => {
  const products = [
    {
      id: 1,
      brand: 'Air Jordan',
      name: 'Nike Air Mowabb Comme des Garcons Black',
      price: '€178',
      image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/56c5b409cc96b961d2c99ebaa3e2ba425f3dd0b9?placeholderIfAbsent=true',
      rating: 4
    },
    {
      id: 2,
      brand: 'Air Jordan',
      name: 'Nike Air Mowabb Comme des Garcons Black',
      price: '€178',
      image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/1209df7af3652089ec3aab75c4ce28741fb2e7f5?placeholderIfAbsent=true',
      rating: 4
    },
    {
      id: 3,
      brand: 'Air Jordan',
      name: 'Nike Air Mowabb Comme des Garcons Black',
      price: '€178',
      image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/9329571d02ed75d5d09d00213aebb56db78270a0?placeholderIfAbsent=true',
      rating: 4
    },
    {
      id: 4,
      brand: 'Air Jordan',
      name: 'Nike Air Mowabb Comme des Garcons Black',
      price: '€178',
      image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a0e5727e94ca808e4b40131e58d738956d1b42ea?placeholderIfAbsent=true',
      rating: 4
    },
    {
      id: 5,
      brand: 'Air Jordan',
      name: 'Nike Air Mowabb Comme des Garcons Black',
      price: '€178',
      image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/06f4469a59271ae4937da76906270c38645c8d93?placeholderIfAbsent=true',
      rating: 4
    },
    {
      id: 6,
      brand: 'Air Jordan',
      name: 'Nike Air Mowabb Comme des Garcons Black',
      price: '€178',
      image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/30b223d18d93a5d0fd9c840e00271b7e9387ba30?placeholderIfAbsent=true',
      rating: 4
    }
  ];

  return (
    <section className="flex w-full flex-col items-stretch mt-[60px] pl-20 pt-[9px] pb-[21px] max-md:max-w-full max-md:mt-10 max-md:pl-5">
      <div className="self-center flex w-full max-w-[1194px] items-stretch gap-5 text-[#00262F] font-bold flex-wrap justify-between max-md:max-w-full">
        <h2 className="text-[#00262F] text-[32px] leading-none">
          Pre-owned artikelen
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
      <div className="flex items-center gap-2.5 mt-[39px] overflow-x-auto max-md:max-w-full">
        {products.map(product => (
          <ProductCard
            key={product.id}
            brand={product.brand}
            name={product.name}
            price={product.price}
            image={product.image}
            rating={product.rating}
            preOwned={true}
          />
        ))}
      </div>
    </section>
  );
};

export default PreOwnedProducts;