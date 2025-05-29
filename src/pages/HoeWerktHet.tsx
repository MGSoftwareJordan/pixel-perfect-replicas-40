
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Package, Shield, Truck, CheckCircle, Search, Heart, ShoppingCart, Euro, Camera, Upload } from 'lucide-react';
import Header from '@/components/boxstock/Header';
import Footer from '@/components/boxstock/Footer';
import Breadcrumbs from '@/components/boxstock/Breadcrumbs';
import Newsletter from '@/components/boxstock/Newsletter';
import { Button } from '@/components/ui/button';

const HoeWerktHet: React.FC = () => {
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
              Verkopen op Boxstock
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 leading-relaxed">
              Ontdek hoe eenvoudig het is om je sneakers en urban fashion te verkopen op Boxstock. Van resell tot tweedehands - wij helpen je.
            </p>
          </div>
        </div>
      </section>
      
      {/* Process Steps */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6 text-[#00262F]">Verkopen in 4 stappen</h2>
            <p className="text-xl text-gray-700">
              Van product uploaden tot uitbetaling - zo verkoop je op Boxstock
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 - Upload Product */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#1EC0A3] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                <Upload className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#00262F]">1. Upload Product</h3>
              <p className="text-gray-600 mb-4">
                Voeg je sneakers, kleding of accessoires toe met foto's en productinformatie.
              </p>
              <Link to="/account/listings" className="text-[#1EC0A3] font-medium hover:underline">
                Start verkopen →
              </Link>
            </div>
            
            {/* Step 2 - Set Price */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#1EC0A3] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                <Euro className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#00262F]">2. Prijs Bepalen</h3>
              <p className="text-gray-600 mb-4">
                Stel je verkoopprijs in. Wij adviseren op basis van marktprijzen en conditie.
              </p>
              <span className="text-[#1EC0A3] font-medium">
                Automatisch advies ✓
              </span>
            </div>
            
            {/* Step 3 - Verification */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#1EC0A3] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#00262F]">3. Verificatie</h3>
              <p className="text-gray-600 mb-4">
                Onze experts controleren authenticiteit en conditie voor de hoogste vertrouwbaarheid.
              </p>
              <span className="text-[#1EC0A3] font-medium">
                100% betrouwbaar ✓
              </span>
            </div>
            
            {/* Step 4 - Get Paid */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#1EC0A3] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                <Package className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#00262F]">4. Uitbetaling</h3>
              <p className="text-gray-600 mb-4">
                Zodra je item verkocht is, ontvang je direct je geld via je gekozen betaalmethode.
              </p>
              <span className="text-[#1EC0A3] font-medium">
                Snelle uitbetaling ✓
              </span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Selling Options */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6 text-[#00262F]">Wat kun je verkopen?</h2>
            <p className="text-xl text-gray-700">
              Van limited editions tot je favoriete tweedehands items
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Resell Card */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Package className="w-6 h-6 text-[#1EC0A3] mr-3" />
                <h3 className="text-xl font-bold text-[#00262F]">Resell Items</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Verkoop nieuwe, ongedragen sneakers en limited edition items voor de beste prijzen.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-[#1EC0A3] mr-2" />
                  Nieuwe, ongedragen items
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-[#1EC0A3] mr-2" />
                  Limited editions & hyped releases
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-[#1EC0A3] mr-2" />
                  Hoogste marktprijzen
                </li>
              </ul>
              <Link to="/account/listings">
                <Button className="w-full bg-[#1EC0A3] hover:bg-[#1EC0A3]/90">
                  Start met resellen
                </Button>
              </Link>
            </div>
            
            {/* Second Hand Card */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Heart className="w-6 h-6 text-[#1EC0A3] mr-3" />
                <h3 className="text-xl font-bold text-[#00262F]">Tweedehands</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Geef je gedragen items een tweede leven en verdien er nog geld mee ook.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-[#1EC0A3] mr-2" />
                  Gedragen maar goede kwaliteit
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-[#1EC0A3] mr-2" />
                  Sneakers, kleding & accessoires
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-[#1EC0A3] mr-2" />
                  Eerlijke prijzen op basis van conditie
                </li>
              </ul>
              <Link to="/account/listings">
                <Button className="w-full bg-[#00262F] hover:bg-[#00262F]/90">
                  Verkoop tweedehands
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold mb-12 text-[#00262F] text-center">Waarom verkopen via Boxstock?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#1EC0A3] rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#00262F]">Veilig verkopen</h3>
              <p className="text-gray-600">
                Bescherming voor verkopers en kopers met onze verificatie en betalingsgarantie.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#1EC0A3] rounded-full flex items-center justify-center mx-auto mb-4">
                <Euro className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#00262F]">Beste prijzen</h3>
              <p className="text-gray-600">
                Krijg de beste prijs voor je items dankzij onze marktanalyse en grote community.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#1EC0A3] rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#00262F]">Geen gedoe</h3>
              <p className="text-gray-600">
                Wij regelen verzending, betalingen en customer service. Jij hoeft alleen te verkopen.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-[#00262F] text-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Klaar om te verkopen?</h2>
            <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
              Start vandaag nog met verkopen op Boxstock en ontdek hoe eenvoudig het is
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/account/listings">
                <Button size="lg" className="bg-[#1EC0A3] hover:bg-[#1EC0A3]/90 text-white">
                  Start met verkopen
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
