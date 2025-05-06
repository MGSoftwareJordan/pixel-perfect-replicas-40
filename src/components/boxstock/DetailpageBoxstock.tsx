
import React from 'react';
import Header from './Header';
import Breadcrumbs from './Breadcrumbs';
import ProductDetail from './ProductDetail';
import RelatedProducts from './RelatedProducts';
import PreOwnedProducts from './PreOwnedProducts';
import Newsletter from './Newsletter';
import Footer from './Footer';

const DetailpageBoxstock: React.FC = () => {
  return (
    <div className="bg-white flex flex-col overflow-hidden items-stretch">
      <Header />
      <Breadcrumbs />
      <div className="w-full mt-[21px] max-md:max-w-full">
        <ProductDetail />
        <RelatedProducts />
        <PreOwnedProducts />
        <div className="w-full mt-[60px] pt-10 max-md:max-w-full max-md:mt-10">
          <Newsletter />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default DetailpageBoxstock;
