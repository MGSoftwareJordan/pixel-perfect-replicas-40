
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Header from '@/components/boxstock/Header';
import Footer from '@/components/boxstock/Footer';
import Breadcrumbs from '@/components/boxstock/Breadcrumbs';
import Newsletter from '@/components/boxstock/Newsletter';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      {/* Breadcrumbs */}
      <div className="bg-gray-50 py-3 border-b border-gray-100">
        <div className="container mx-auto max-w-6xl px-4">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Over Boxstock', href: '/about' }
            ]}
          />
        </div>
      </div>
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#00262F] text-white py-16 md:py-24">
        <div className="absolute inset-0 opacity-15">
          <div className="absolute inset-0 bg-gradient-to-r from-[#00262F] to-transparent z-10"></div>
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1560243563-062bfc001d68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center animate-slow-zoom"></div>
        </div>
        <div className="container mx-auto max-w-6xl px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Over Boxstock
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 leading-relaxed">
              De toonaangevende online platform voor authentieke sneakers en urban lifestyle in Europa.
            </p>
          </div>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#00262F]">Ons verhaal</h2>
              <p className="text-lg text-gray-700 mb-4">
                Boxstock is ontstaan uit een passie voor sneakers en streetwear cultuur. We startten in 2023 met een duidelijke missie: het bouwen van een platform dat zou uitblinken in Europa's competitieve online markt.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Ons team van experts combineert diepgaande kennis van online zichtbaarheid met een authentieke passie voor sneakers en urban fashion. Dit heeft geleid tot een platform waar kwaliteit, authenticiteit en gebruiksgemak centraal staan.
              </p>
              <p className="text-lg text-gray-700">
                Bij Boxstock geloven we dat iedereen toegang moet hebben tot originele, hoogwaardige items zonder zorgen over authenticiteit of kwaliteit.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1556906781-9a412961c28c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
                alt="Boxstock team at work"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Mission */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6 text-[#00262F]">Onze missie</h2>
            <p className="text-xl text-gray-700">
              Wij streven ernaar de meest betrouwbare marktplaats te zijn voor sneakers en urban fashion in Europa, waar authenticiteit en klanttevredenheid onze hoogste prioriteit hebben.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-[#1EC0A3] rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">1</div>
              <h3 className="text-xl font-bold mb-3 text-[#00262F]">Authenticiteit garanderen</h3>
              <p className="text-gray-600">
                Elk item op ons platform is 100% geauthenticeerd door onze experts, zodat klanten met vertrouwen kunnen kopen.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-[#1EC0A3] rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">2</div>
              <h3 className="text-xl font-bold mb-3 text-[#00262F]">Gemak bieden</h3>
              <p className="text-gray-600">
                We maken het kopen en verkopen van premium items eenvoudig en zorgeloos met een gebruiksvriendelijk platform.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-[#1EC0A3] rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">3</div>
              <h3 className="text-xl font-bold mb-3 text-[#00262F]">Community bouwen</h3>
              <p className="text-gray-600">
                We creëren een gemeenschap van liefhebbers die hun passie voor sneakers en urban fashion delen.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold mb-12 text-[#00262F] text-center">Ons team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="rounded-lg overflow-hidden mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80"
                  alt="Team member"
                  className="w-full h-auto"
                />
              </div>
              <h3 className="text-lg font-bold text-[#00262F]">Emma Janssen</h3>
              <p className="text-[#1EC0A3] font-medium">CEO & Oprichter</p>
            </div>
            
            <div className="text-center">
              <div className="rounded-lg overflow-hidden mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
                  alt="Team member"
                  className="w-full h-auto"
                />
              </div>
              <h3 className="text-lg font-bold text-[#00262F]">Thomas de Vries</h3>
              <p className="text-[#1EC0A3] font-medium">Head of Operations</p>
            </div>
            
            <div className="text-center">
              <div className="rounded-lg overflow-hidden mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
                  alt="Team member"
                  className="w-full h-auto"
                />
              </div>
              <h3 className="text-lg font-bold text-[#00262F]">Bram Smit</h3>
              <p className="text-[#1EC0A3] font-medium">Authenticatie Expert</p>
            </div>
            
            <div className="text-center">
              <div className="rounded-lg overflow-hidden mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1061&q=80"
                  alt="Team member"
                  className="w-full h-auto"
                />
              </div>
              <h3 className="text-lg font-bold text-[#00262F]">Sophie Meijer</h3>
              <p className="text-[#1EC0A3] font-medium">Customer Success Manager</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-[#00262F] text-white">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Waarom Boxstock?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="bg-[#1EC0A3] p-3 rounded-full w-14 h-14 flex items-center justify-center mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">100% Authenticiteit</h3>
              <p className="text-gray-300">
                Alle producten worden rigoureus gecontroleerd door onze experts om de authenticiteit te garanderen.
              </p>
            </div>
            
            <div className="p-6">
              <div className="bg-[#1EC0A3] p-3 rounded-full w-14 h-14 flex items-center justify-center mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="m16 8-2 3-4 1-1 4-3 2"></path>
                  <path d="M7.7 7.7 16 16"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Europese dekking</h3>
              <p className="text-gray-300">
                Snelle en betrouwbare verzending door heel Europa met real-time tracking.
              </p>
            </div>
            
            <div className="p-6">
              <div className="bg-[#1EC0A3] p-3 rounded-full w-14 h-14 flex items-center justify-center mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Persoonlijke service</h3>
              <p className="text-gray-300">
                Onze klantenservice staat altijd voor je klaar om vragen te beantwoorden en je te helpen.
              </p>
            </div>
            
            <div className="p-6">
              <div className="bg-[#1EC0A3] p-3 rounded-full w-14 h-14 flex items-center justify-center mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"></path>
                  <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Actieve community</h3>
              <p className="text-gray-300">
                Word onderdeel van een levendige gemeenschap van sneaker- en modegekken.
              </p>
            </div>
            
            <div className="p-6">
              <div className="bg-[#1EC0A3] p-3 rounded-full w-14 h-14 flex items-center justify-center mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                  <line x1="2" x2="22" y1="10" y2="10"></line>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Veilige betalingen</h3>
              <p className="text-gray-300">
                Meerdere veilige betaalopties met bescherming voor kopers en verkopers.
              </p>
            </div>
            
            <div className="p-6">
              <div className="bg-[#1EC0A3] p-3 rounded-full w-14 h-14 flex items-center justify-center mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 11a9 9 0 0 1 9 9"></path>
                  <path d="M4 4a16 16 0 0 1 16 16"></path>
                  <circle cx="5" cy="19" r="1"></circle>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Blijf op de hoogte</h3>
              <p className="text-gray-300">
                Abonneer je op onze nieuwsbrief voor de nieuwste releases en exclusieve aanbiedingen.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Discover */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold mb-8 text-[#00262F]">Ontdek meer</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/sneakers" className="group flex items-center justify-between p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="flex items-center">
                <span className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 17h.01"></path>
                    <path d="M7 11h.01"></path>
                    <path d="M3 14h.01"></path>
                    <path d="m11 4 10 9-8 3-9.5-6.5"></path>
                  </svg>
                </span>
                <span className="font-medium text-[#00262F]">Sneakers</span>
              </div>
              <ArrowRight className="text-[#1EC0A3] group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link to="/accessories" className="group flex items-center justify-between p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="flex items-center">
                <span className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 9h-7a2 2 0 1 0 0 4h3a2 2 0 1 1 0 4H8"></path>
                    <path d="M12 17V7"></path>
                    <circle cx="12" cy="12" r="10"></circle>
                  </svg>
                </span>
                <span className="font-medium text-[#00262F]">Accessoires</span>
              </div>
              <ArrowRight className="text-[#1EC0A3] group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link to="/clothing" className="group flex items-center justify-between p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="flex items-center">
                <span className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 7L9 5"></path>
                    <path d="M5 14l7-2"></path>
                    <path d="M15 12l6-2"></path>
                    <path d="M5 18l7-2"></path>
                    <path d="M15 16l6-2"></path>
                    <path d="m12 5 4-1"></path>
                    <path d="M6 5C4.9 5 4 5.9 4 7c0 2.5 4.5 5.5 8 5.5S20 9.5 20 7c0-1.1-.9-2-2-2"></path>
                  </svg>
                </span>
                <span className="font-medium text-[#00262F]">Kleding</span>
              </div>
              <ArrowRight className="text-[#1EC0A3] group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Contact CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="bg-[#1EC0A3] rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Vragen of suggesties?</h2>
            <p className="text-white text-lg mb-6 max-w-2xl mx-auto">
              We horen graag van je. Ons team staat klaar om al je vragen te beantwoorden.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center bg-white text-[#00262F] font-medium rounded-md px-6 py-3 hover:bg-gray-100 transition-colors"
            >
              Contact opnemen
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <Newsletter />
      
      <Footer />
    </div>
  );
};

export default About;
