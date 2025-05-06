import React from 'react';

interface ProductCardProps {
  brand: string;
  name: string;
  price: string;
  image: string;
  rating: number;
  discount?: boolean;
  preOwned?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  brand,
  name,
  price,
  image,
  rating,
  discount = false,
  preOwned = false
}) => {
  return (
    <div className="rounded self-stretch flex min-h-[446px] flex-col items-center w-56 my-auto">
      <div className="rounded max-w-full w-56 overflow-hidden py-px">
        <div className={`rounded ${preOwned ? 'relative aspect-[0.675]' : ''} flex flex-col items-stretch ${discount ? 'text-[10px] text-white font-bold whitespace-nowrap text-center uppercase tracking-[1.6px] leading-[1.4]' : ''} bg-[#F1F1F1] pt-3.5 pb-[92px] px-3`}>
          {preOwned && (
            <img
              src={image}
              className="absolute h-full w-full object-cover inset-0"
              alt={name}
            />
          )}
          
          {discount && !preOwned && (
            <div className="flex items-stretch gap-5 justify-between">
              <div className="bg-[#E41A36] my-auto pt-[5px] pb-[11px] px-[22px] rounded-[28.643px] max-md:px-5">
                KORTING
              </div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/47b4de12a24d77edff0bb699cf87c3fd3f565fcc?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-9 shrink-0 rounded-[20px]"
                alt="Brand logo"
              />
            </div>
          )}
          
          {!discount && !preOwned && (
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/47b4de12a24d77edff0bb699cf87c3fd3f565fcc?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-9 rounded-[20px]"
              alt="Brand logo"
            />
          )}
          
          {!preOwned && (
            <img
              src={image}
              className="aspect-[1.2] object-contain w-[201px] mt-[22px]"
              alt={name}
            />
          )}
          
          {preOwned && (
            <>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/55d6ea2b4d4328a81010dcc76aed82e12a88eaf1?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-9 rounded-[20px] z-10"
                alt="Brand logo"
              />
              <div className="relative flex items-center justify-center mt-[262px] max-md:mt-10">
                <div className="self-stretch bg-[#1EC0A3] min-h-5 w-full gap-1 flex-1 shrink basis-[0%] my-auto px-2 py-[3px] rounded-[0px_0px_4px_4px]">
                  PRE-OWNED
                </div>
              </div>
            </>
          )}
        </div>
        
        <div className="flex w-full flex-col items-stretch mt-[9px]">
          <div className="w-full text-sm text-[#00262F]">
            <div className="text-[#00262F] font-normal leading-loose">
              {brand}
            </div>
            <div className="text-[#00262F] font-bold leading-4">
              {name}
            </div>
          </div>
          <div className="flex gap-0.5 mt-2">
            {[...Array(5)].map((_, i) => (
              <img
                key={i}
                src={i < rating ? "https://cdn.builder.io/api/v1/image/assets/TEMP/d55df91c16f28f1b246aa0f286e78b46ce151626?placeholderIfAbsent=true" : "https://cdn.builder.io/api/v1/image/assets/TEMP/706f2c5119d9668cb1c579ec6585262270be9c52?placeholderIfAbsent=true"}
                className="aspect-[1] object-contain w-[15px] shrink-0"
                alt={i < rating ? "Filled star" : "Empty star"}
              />
            ))}
          </div>
          <div className="text-[#00262F] text-sm font-normal leading-none mt-2">
            {price}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;