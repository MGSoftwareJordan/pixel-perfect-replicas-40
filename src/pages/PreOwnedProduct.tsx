
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/boxstock/Header';
import Footer from '@/components/boxstock/Footer';
import PreOwnedProductDetail from '@/components/boxstock/PreOwnedProductDetail';
import PreOwnedProducts from '@/components/boxstock/PreOwnedProducts';

const PreOwnedProduct: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto max-w-6xl px-4 py-6">
        <div className="flex items-center text-sm text-gray-500 mb-6">
          <Link to="/" className="hover:text-[#E41A36] transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/pre-owned" className="hover:text-[#E41A36] transition-colors">Pre-Owned</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">Nike Air Mowabb Comme des Garcons Black</span>
        </div>
      </div>
      
      <PreOwnedProductDetail />
      
      <div className="container mx-auto max-w-6xl px-4 mb-16">
        <h2 className="text-2xl font-bold text-[#00262F] mb-8">Gerelateerde pre-owned items</h2>
        <PreOwnedProducts limit={4} showHeading={false} />
      </div>
      
      <div className="bg-[#F8F8F8] py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#f8f8f8] to-[#eaeaea] rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-[#00262F] mb-4">Over pre-owned items</h3>
              <p className="text-gray-600 mb-6">
                Bij Boxstock krijgen premium sneakers en streetwear een tweede leven. 
                Onze pre-owned collectie bestaat uit zorgvuldig geselecteerde items die 
                voldoen aan onze kwaliteitseisen. Elk item wordt grondig gecontroleerd 
                en professioneel gereinigd voordat het in onze collectie wordt opgenomen.
              </p>
              <p className="text-gray-600">
                We geloven in duurzaamheid en circulaire mode. Door te kiezen voor 
                pre-owned items draag je bij aan het verminderen van de milieu-impact 
                en geef je geweldige sneakers een tweede kans.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#f8f8f8] to-[#eaeaea] rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-[#00262F] mb-4">Kwaliteitsgarantie</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="text-[#1EC0A3] mr-3 mt-1">✓</div>
                  <p className="text-gray-600">Echtheidsgarantie op alle pre-owned items</p>
                </li>
                <li className="flex items-start">
                  <div className="text-[#1EC0A3] mr-3 mt-1">✓</div>
                  <p className="text-gray-600">Professionele reiniging en desinfectie</p>
                </li>
                <li className="flex items-start">
                  <div className="text-[#1EC0A3] mr-3 mt-1">✓</div>
                  <p className="text-gray-600">Uitgebreide kwaliteitsinspectie</p>
                </li>
                <li className="flex items-start">
                  <div className="text-[#1EC0A3] mr-3 mt-1">✓</div>
                  <p className="text-gray-600">30 dagen retourbeleid</p>
                </li>
                <li className="flex items-start">
                  <div className="text-[#1EC0A3] mr-3 mt-1">✓</div>
                  <p className="text-gray-600">Duurzame verpakking</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default PreOwnedProduct;
