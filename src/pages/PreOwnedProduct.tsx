
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/attic/Header';
import Footer from '@/components/attic/Footer';
import PreOwnedProductDetail from '@/components/boxstock/PreOwnedProductDetail';
import PreOwnedProducts from '@/components/boxstock/PreOwnedProducts';
import Newsletter from '@/components/attic/Newsletter';

const PreOwnedProduct: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="container mx-auto max-w-6xl px-4 py-6">
        <div className="flex items-center text-sm text-gray-500 mb-6">
          <Link to="/" className="hover:text-attic-teal transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/pre-owned" className="hover:text-attic-teal transition-colors">Pre-Owned</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">Nike Air Mowabb Comme des Garcons Black</span>
        </div>
      </div>
      
      <PreOwnedProductDetail />
      
      <div className="container mx-auto max-w-6xl px-4 mb-16">
        <h2 className="text-2xl font-bold text-attic-black mb-8">Related pre-owned items</h2>
        <PreOwnedProducts limit={4} showHeading={false} />
      </div>
      
      <div className="bg-attic-gray py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-attic-black mb-4">About pre-owned items</h3>
              <p className="text-attic-dark-gray mb-6">
                At The Attic, premium sneakers and streetwear get a second life. 
                Our pre-owned collection consists of carefully selected items that 
                meet our quality requirements. Each item is thoroughly checked 
                and professionally cleaned before being included in our collection.
              </p>
              <p className="text-attic-dark-gray">
                We believe in sustainability and circular fashion. By choosing 
                pre-owned items, you contribute to reducing environmental impact 
                and give great sneakers a second chance.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-attic-black mb-4">Quality guarantee</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="text-attic-teal mr-3 mt-1">✓</div>
                  <p className="text-attic-dark-gray">Authenticity guarantee on all pre-owned items</p>
                </li>
                <li className="flex items-start">
                  <div className="text-attic-teal mr-3 mt-1">✓</div>
                  <p className="text-attic-dark-gray">Professional cleaning and disinfection</p>
                </li>
                <li className="flex items-start">
                  <div className="text-attic-teal mr-3 mt-1">✓</div>
                  <p className="text-attic-dark-gray">Extensive quality inspection</p>
                </li>
                <li className="flex items-start">
                  <div className="text-attic-teal mr-3 mt-1">✓</div>
                  <p className="text-attic-dark-gray">30-day return policy</p>
                </li>
                <li className="flex items-start">
                  <div className="text-attic-teal mr-3 mt-1">✓</div>
                  <p className="text-attic-dark-gray">Sustainable packaging</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <Newsletter />
      <Footer />
    </div>
  );
};

export default PreOwnedProduct;
