
import React from 'react';
import ProductGallery from './ProductGallery';
import ProductInfo from './ProductInfo';

const ProductDetail: React.FC = () => {
  return (
    <div className="flex w-full flex-col items-center pb-3.5 px-[70px] max-md:max-w-full max-md:px-5">
      <div className="w-full max-w-[1199px] max-md:max-w-full">
        <div className="gap-8 flex max-md:flex-col max-md:items-stretch">
          <div className="w-[55%] max-md:w-full max-md:ml-0">
            <div className="mt-[7px] max-md:max-w-full max-md:mt-10">
              <ProductGallery />
              <div className="max-w-full w-[590px] text-center mt-10">
                <div className="items-center flex min-h-[338px] flex-col bg-gradient-to-br from-[#AEDDE8] to-[#93D0DE] px-[41px] py-11 rounded-lg shadow-md max-md:max-w-full max-md:px-5">
                  <div className="flex max-w-full w-[490px] flex-col items-center text-[#00262F]">
                    <div className="text-[#00262F] text-2xl font-normal leading-6">
                      Reseller worden
                    </div>
                    <div className="text-[#00262F] text-[32px] font-bold leading-10 mt-4 max-md:max-w-full">
                      Heb jij dit item new of vinted liggen word dan reseller!
                    </div>
                  </div>
                  <div className="flex max-w-full w-[490px] flex-col items-center text-xl mt-8">
                    <button className="w-full text-white font-bold leading-[1.2] bg-[#E41A36] pt-[17px] pb-[11px] px-[49px] rounded-md hover:bg-[#c01730] transition-colors max-md:px-5">
                      Verkoop dit item
                    </button>
                    <div className="text-[#00262F] font-normal underline decoration-solid decoration-auto underline-offset-auto underline mt-4 hover:text-[#064559] cursor-pointer transition-colors">
                      Hoe werkt resell?
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[45%] ml-5 max-md:w-full max-md:ml-0">
            <ProductInfo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
