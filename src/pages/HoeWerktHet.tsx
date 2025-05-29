
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Package, Shield, Truck, CheckCircle, Search, Heart, ShoppingCart } from 'lucide-react';
import Header from '@/components/boxstock/Header';
import Footer from '@/components/boxstock/Footer';
import Breadcrumbs from '@/components/boxstock/Breadcrumbs';
import Newsletter from '@/components/boxstock/Newsletter';
import PostcodeChecker from '@/components/checkout/PostcodeChecker';
import DeliveryEstimator from '@/components/checkout/DeliveryEstimator';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

const HoeWerktHet: React.FC = () => {
  const [selectedPostcode, setSelectedPostcode] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      {/* Breadcrumbs */}
      <div className="bg-gray-50 py-3 border-b border-gray-100">
        <div className="container mx-auto max-w-6xl px-4">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Hoe werkt het', href: '/hoe-werkt-het' }
            ]}
          />
        </div>
      </div>
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#00262F] text-white py-16 md:py-24">
        <div className="absolute inset-0 opacity-15">
          <div className="absolute inset-0 bg-gradient-to-r from-[#00262F] to-transparent z-10"></div>
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1556906781-9a412961c28c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80')] bg-cover bg-center"></div>
        </div>
        <div className="container mx-auto max-w-6xl px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Hoe werkt Boxstock?
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 leading-relaxed">
              Ontdek hoe eenvoudig het is om authentieke sneakers en urban fashion te kopen en verkopen op Boxstock.
            </p>
          </div>
        </div>
      </section>
      
      {/* Process Steps */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6 text-[#00262F]">Simpel in 4 stappen</h2>
            <p className="text-xl text-gray-700">
              Van zoeken tot bezorging - zo werkt het op Boxstock
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 - Search */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#1EC0A3] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                <Search className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#00262F]">1. Zoek & Vind</h3>
              <p className="text-gray-600 mb-4">
                Doorzoek onze uitgebreide collectie sneakers, kleding en accessoires van topmerken.
              </p>
              <Link to="/sneakers" className="text-[#1EC0A3] font-medium hover:underline">
                Bekijk collectie →
              </Link>
            </div>
            
            {/* Step 2 - Check Delivery */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#1EC0A3] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                <Truck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#00262F]">2. Check Levering</h3>
              <p className="text-gray-600 mb-4">
                Bekijk wanneer je bestelling wordt bezorgd en of express levering mogelijk is.
              </p>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="text-[#1EC0A3] border-[#1EC0A3] hover:bg-[#1EC0A3] hover:text-white">
                    Test postcode →
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-md">
                  <DialogHeader>
                    <DialogTitle>Check je postcode</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <PostcodeChecker
                      onPostcodeChange={setSelectedPostcode}
                      onCountryChange={setSelectedCountry}
                    />
                    {selectedPostcode && selectedCountry && (
                      <DeliveryEstimator
                        postcode={selectedPostcode}
                        country={selectedCountry}
                      />
                    )}
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            
            {/* Step 3 - Secure Payment */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#1EC0A3] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#00262F]">3. Veilig Betalen</h3>
              <p className="text-gray-600 mb-4">
                Betaal veilig met iDEAL, creditcard of andere vertrouwde betaalmethoden.
              </p>
              <Link to="/checkout" className="text-[#1EC0A3] font-medium hover:underline">
                Bekijk opties →
              </Link>
            </div>
            
            {/* Step 4 - Receive */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#1EC0A3] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                <Package className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#00262F]">4. Ontvang</h3>
              <p className="text-gray-600 mb-4">
                Ontvang je authentieke items veilig verpakt binnen 1-3 werkdagen.
              </p>
              <span className="text-[#1EC0A3] font-medium">
                100% authentiek ✓
              </span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Interactive Demo Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6 text-[#00262F]">Probeer het uit</h2>
            <p className="text-xl text-gray-700">
              Test onze tools om te zien hoe eenvoudig het is
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Delivery Checker Card */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Truck className="w-6 h-6 text-[#1EC0A3] mr-3" />
                <h3 className="text-xl font-bold text-[#00262F]">Leveringscheck</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Voer je postcode in om te zien wanneer je bestelling wordt bezorgd en welke opties beschikbaar zijn.
              </p>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-full bg-[#1EC0A3] hover:bg-[#1EC0A3]/90">
                    Check mijn postcode
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-md">
                  <DialogHeader>
                    <DialogTitle>Leveringsinformatie</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <PostcodeChecker
                      onPostcodeChange={setSelectedPostcode}
                      onCountryChange={setSelectedCountry}
                    />
                    {selectedPostcode && selectedCountry && (
                      <DeliveryEstimator
                        postcode={selectedPostcode}
                        country={selectedCountry}
                      />
                    )}
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            
            {/* Shopping Demo Card */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <ShoppingCart className="w-6 h-6 text-[#1EC0A3] mr-3" />
                <h3 className="text-xl font-bold text-[#00262F]">Shop Demo</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Bekijk onze populairste items en ervaar hoe eenvoudig het is om te winkelen op Boxstock.
              </p>
              <Link to="/sneakers">
                <Button className="w-full bg-[#00262F] hover:bg-[#00262F]/90">
                  Bekijk sneakers
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold mb-12 text-[#00262F] text-center">Waarom Boxstock kiezen?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#1EC0A3] rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#00262F]">100% Authentiek</h3>
              <p className="text-gray-600">
                Alle items worden gecontroleerd door onze experts om authenticiteit te garanderen.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#1EC0A3] rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#00262F]">Snelle levering</h3>
              <p className="text-gray-600">
                Levering binnen 1-3 werkdagen door heel Europa met tracking.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#1EC0A3] rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#00262F]">Veilige betaling</h3>
              <p className="text-gray-600">
                Meerdere veilige betaalopties met bescherming voor kopers.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-[#00262F] text-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Klaar om te beginnen?</h2>
            <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
              Ontdek de nieuwste sneakers en urban fashion items op Boxstock
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/sneakers">
                <Button size="lg" className="bg-[#1EC0A3] hover:bg-[#1EC0A3]/90 text-white">
                  Shop nu
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/register">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-[#00262F]">
                  Account aanmaken
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Newsletter />
      <Footer />
    </div>
  );
};

export default HoeWerktHet;
