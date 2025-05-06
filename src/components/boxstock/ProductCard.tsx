
import React from 'react';
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  brand: string;
  name: string;
  price: string;
  image: string;
  rating: number;
  discount?: boolean;
  preOwned?: boolean;
  id?: number | string;
  originalPrice?: string;
  tag?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  brand,
  name,
  price,
  image,
  rating,
  discount = false,
  preOwned = false,
  id = 1,
  originalPrice,
  tag
}) => {
  return (
    <Link to={`/product/${id}`} className="group block">
      <div className="rounded bg-white border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-200">
        {/* Image Container with fixed aspect ratio */}
        <div className="relative">
          {/* Consistent 1:1 aspect ratio for all product images */}
          <div className="aspect-square bg-gray-100 overflow-hidden">
            {/* Skeleton loader that shows before image loads */}
            <div className="absolute inset-0 bg-gray-200 animate-pulse" />
            
            <img
              src={image}
              alt={`${brand} ${name}`}
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = "https://cdn.builder.io/api/v1/image/assets/TEMP/placeholder.png?placeholderIfAbsent=true";
              }}
            />
          </div>

          {/* Product tags and badges */}
          <div className="absolute top-0 left-0 flex flex-col gap-2 p-2">
            {tag && (
              <div className="bg-[#E41A36] text-white text-xs font-semibold px-3 py-1 rounded">
                {tag}
              </div>
            )}
            {discount && (
              <div className="bg-[#E41A36] text-white text-xs font-semibold px-3 py-1 rounded">
                SALE
              </div>
            )}
          </div>

          {preOwned && (
            <div className="absolute bottom-0 left-0 right-0 bg-[#1EC0A3] text-xs text-white font-semibold text-center py-1">
              PRE-OWNED
            </div>
          )}

          {/* Wishlist button */}
          <button 
            className="absolute top-2 right-2 bg-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity shadow-sm hover:bg-gray-50"
            onClick={(e) => {
              e.preventDefault();
              console.log('Added to wishlist', name);
            }}
            aria-label="Add to wishlist"
          >
            <Heart size={18} className="text-gray-700" />
          </button>
        </div>
        
        {/* Product info section */}
        <div className="p-4">
          <div className="text-sm text-[#00262F] hover:underline">
            {brand}
          </div>
          <h3 className="text-sm font-bold mt-1 mb-2 line-clamp-2 h-10 text-[#00262F]">
            {name}
          </h3>
          
          <div className="flex gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <svg 
                key={i} 
                xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill={i < rating ? "currentColor" : "none"} 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="h-4 w-4 text-[#1EC0A3]"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
            ))}
          </div>
          
          <div className="flex items-center">
            <span className="font-semibold">{price}</span>
            {originalPrice && (
              <span className="text-xs text-gray-500 line-through ml-2">{originalPrice}</span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
