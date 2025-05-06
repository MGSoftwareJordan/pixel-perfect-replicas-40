
import React from 'react';
import ProductCard from './ProductCard';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface PreOwnedProductsProps {
  limit?: number;
  showHeading?: boolean;
}

const PreOwnedProducts: React.FC<PreOwnedProductsProps> = ({ 
  limit, 
  showHeading = true 
}) => {
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

  // If limit is provided, slice the products array
  const displayProducts = limit ? products.slice(0, limit) : products;

  return (
    <section className="container mx-auto">
      {showHeading && (
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-[#00262F] text-2xl md:text-3xl font-bold">
            Pre-owned artikelen
          </h2>
          <Button 
            variant="ghost" 
            className="text-[#00262F] hover:text-[#E41A36] flex items-center"
            asChild
          >
            <a href="/pre-owned">
              Bekijk meer <ArrowRight size={16} className="ml-1" />
            </a>
          </Button>
        </div>
      )}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {displayProducts.map(product => (
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
