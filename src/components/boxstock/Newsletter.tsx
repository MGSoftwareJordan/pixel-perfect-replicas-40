
import React, { useState } from 'react';
import { Mail, Check } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple email validation
    if (!email || !email.includes('@')) {
      setError('Voer een geldig e-mailadres in');
      return;
    }
    
    // Here you would typically send the email to your backend
    console.log('Subscribing email:', email);
    setIsSubmitted(true);
    setError('');
    setEmail('');
    
    // Reset the success message after a few seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-r from-[#05414F] to-[#00262F]">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-[#1EC0A3]/10"></div>
        <div className="absolute top-20 right-20 w-60 h-60 rounded-full bg-[#E41A36]/5"></div>
        <div className="absolute -bottom-20 left-1/3 w-80 h-80 rounded-full bg-[#1EC0A3]/5"></div>
      </div>
      
      <div className="container relative z-10 px-6 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-[#1EC0A3]">
            <Mail size={28} className="text-white" />
          </div>
          
          <h2 className="mb-3 text-4xl font-bold text-white md:text-5xl">
            Word lid van de community
          </h2>
          
          <p className="mb-8 text-xl text-[#AEDDE8] md:text-2xl">
            Ontvang exclusieve kortingen, early access tot releases en insider tips
          </p>
          
          <div className="p-2 mt-8 mb-4 bg-white/10 backdrop-blur-sm rounded-xl">
            <form onSubmit={handleSubmit} className="flex flex-col items-stretch sm:flex-row max-w-xl mx-auto">
              <div className="relative flex-grow">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Je e-mailadres"
                  className="w-full px-6 py-4 text-[#00262F] bg-white rounded-lg sm:rounded-r-none text-lg focus:outline-none focus:ring-2 focus:ring-[#1EC0A3]"
                />
              </div>
              <button 
                type="submit"
                className="px-8 py-4 mt-2 font-bold text-white transition-colors sm:mt-0 bg-[#E41A36] hover:bg-[#c01730] rounded-lg sm:rounded-l-none text-lg"
              >
                AANMELDEN
              </button>
            </form>
          </div>
          
          {error && (
            <div className="p-3 mt-4 text-sm rounded-md bg-white/10 text-[#E41A36]">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clipRule="evenodd" />
                </svg>
                {error}
              </div>
            </div>
          )}
          
          {isSubmitted && (
            <div className="p-3 mt-4 text-sm rounded-md bg-white/10 text-[#1EC0A3]">
              <div className="flex items-center">
                <Check className="w-5 h-5 mr-2" />
                Bedankt voor je aanmelding! Je ontvangt binnenkort onze updates.
              </div>
            </div>
          )}
          
          <div className="flex flex-col items-center justify-center max-w-lg gap-6 mx-auto mt-10 md:flex-row">
            <div className="flex items-center gap-3 text-[#AEDDE8]/80">
              <div className="p-2 rounded-full bg-[#1EC0A3]/10">
                <Check size={16} className="text-[#1EC0A3]" />
              </div>
              <span>Wekelijkse updates</span>
            </div>
            
            <div className="w-px h-6 bg-[#AEDDE8]/20 hidden md:block"></div>
            
            <div className="flex items-center gap-3 text-[#AEDDE8]/80">
              <div className="p-2 rounded-full bg-[#1EC0A3]/10">
                <Check size={16} className="text-[#1EC0A3]" />
              </div>
              <span>€10 korting op je eerste aankoop</span>
            </div>
            
            <div className="w-px h-6 bg-[#AEDDE8]/20 hidden md:block"></div>
            
            <div className="flex items-center gap-3 text-[#AEDDE8]/80">
              <div className="p-2 rounded-full bg-[#1EC0A3]/10">
                <Check size={16} className="text-[#1EC0A3]" />
              </div>
              <span>Uitschrijven wanneer je wilt</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
