
import React from 'react';
import Header from '@/components/attic/Header';
import Footer from '@/components/attic/Footer';
import Newsletter from '@/components/attic/Newsletter';
import { Link } from 'react-router-dom';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="container mx-auto max-w-6xl px-4 py-16">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-attic-black mb-4">Product Catalog</h1>
          <p className="text-attic-dark-gray max-w-2xl">
            Browse our collection of curated products from the world's most coveted brands,
            carefully selected for quality and authenticity.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* These would be dynamic products, using placeholder for now */}
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="gallery-product-card">
              <Link to={`/product/${item}`} className="block">
                <div className="relative aspect-square">
                  <img 
                    src={`https://cdn.builder.io/api/v1/image/assets/TEMP/placeholder-${item}.jpg?placeholderIfAbsent=true`} 
                    alt="Product"
                    className="w-full h-full object-cover"
                  />
                  {item % 3 === 0 && (
                    <div className="gallery-product-tag">NEW</div>
                  )}
                  {item % 4 === 0 && (
                    <div className="gallery-product-tag sale">SALE</div>
                  )}
                </div>
                <div className="p-4">
                  <div className="text-xs text-gray-600 mb-1">Brand Name</div>
                  <h3 className="font-medium text-sm line-clamp-2 h-10 mb-2">Product Name {item}</h3>
                  <div className="flex items-center">
                    <span className="font-bold">€{(100 + item * 5)}.00</span>
                    {item % 4 === 0 && (
                      <span className="text-xs text-gray-500 line-through ml-2">€{(130 + item * 5)}.00</span>
                    )}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Link to="/sneakers">
            <button className="bg-attic-teal text-white px-8 py-3 font-medium hover:bg-opacity-90 transition-colors">
              VIEW ALL PRODUCTS
            </button>
          </Link>
        </div>
      </div>
      
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
