
import React, { useState } from 'react';
import { Mail } from 'lucide-react';

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
    <div className="w-full rounded-[0px_0px_0px_0px] max-md:max-w-full">
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
          
          <p className="text-[#AEDDE8]/80 text-sm mt-4">
            We respecteren je privacy. Je kunt je op elk moment uitschrijven.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
