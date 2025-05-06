
import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import { toast } from "sonner";

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
    
    // Show toast notification
    toast.success('Bedankt voor je aanmelding!', {
      description: 'Je ontvangt binnenkort onze updates.'
    });
    
    // Reset the success message after a few seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div className="w-full max-md:max-w-full">
      <div className="flex w-full flex-col items-center justify-center bg-[#05414F] px-8 py-14 md:px-20 max-md:max-w-full">
        <div className="flex w-full max-w-2xl flex-col items-center">
          <div className="mb-6 bg-[#1EC0A3] rounded-full p-3">
            <Mail size={28} className="text-white" />
          </div>
          
          <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight text-center">
            Blijf op de hoogte
          </h2>
          <div className="text-[#AEDDE8] text-center text-lg md:text-xl font-normal leading-relaxed self-stretch mt-4">
            Ontvang als eerste updates over nieuwe releases, exclusieve kortingen en de nieuwste trends in onze nieuwsbrief.
          </div>
          
          <form onSubmit={handleSubmit} className="flex w-full max-w-md items-stretch mt-8 flex-wrap sm:flex-nowrap gap-2 sm:gap-0">
            <div className="relative flex-grow">
              <label htmlFor="newsletter-email" className="sr-only">E-mailadres</label>
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Je e-mailadres"
                className="w-full px-4 py-3 rounded-lg sm:rounded-r-none border border-[#AEDDE8] bg-white text-[#00262F] outline-none"
                aria-label="Email address"
              />
            </div>
            <button 
              type="submit"
              className="w-full sm:w-auto px-6 py-3 bg-[#E41A36] hover:bg-[#c01730] text-white font-semibold rounded-lg sm:rounded-l-none transition-colors"
            >
              Aanmelden
            </button>
          </form>
          
          {error && (
            <div className="text-[#E41A36] mt-4 text-sm bg-white/10 px-4 py-2 rounded">
              {error}
            </div>
          )}
          
          {isSubmitted && (
            <div className="text-[#1EC0A3] mt-4 text-sm bg-white/10 px-4 py-2 rounded">
              Bedankt voor je aanmelding! Je ontvangt binnenkort onze updates.
            </div>
          )}
          
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <div className="flex items-center gap-2 text-[#AEDDE8]/80 text-sm">
              <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
              <span>Maandelijkse trends</span>
            </div>
            <div className="flex items-center gap-2 text-[#AEDDE8]/80 text-sm">
              <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48 2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48 2.83-2.83"></path>
              </svg>
              <span>Exclusieve deals</span>
            </div>
            <div className="flex items-center gap-2 text-[#AEDDE8]/80 text-sm">
              <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6 9 17l-5-5"></path>
              </svg>
              <span>€5 korting op eerste bestelling</span>
            </div>
          </div>
          
          <p className="text-[#AEDDE8]/80 text-sm mt-6">
            We respecteren je privacy. Je kunt je op elk moment uitschrijven.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
