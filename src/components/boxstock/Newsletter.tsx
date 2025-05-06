import React, { useState } from 'react';

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
      <div className="flex w-full flex-col items-center justify-center bg-[#05414F] px-20 py-[50px] max-md:max-w-full max-md:px-5">
        <div className="flex w-[590px] max-w-full flex-col items-center">
          <h2 className="text-white text-[32px] font-bold leading-none max-md:max-w-full">
            Abonneer je op de nieuwsbrief
          </h2>
          <div className="text-[#AEDDE8] text-center text-xl font-normal leading-6 self-stretch mt-4 max-md:max-w-full">
            Ontvang kortingen, nieuwe producten en inspiratie in onze nieuwsbrief.
          </div>
          
          <form onSubmit={handleSubmit} className="flex w-[490px] max-w-full items-stretch whitespace-nowrap mt-[25px]">
            <div className="justify-center items-stretch border border-[color:var(--Neutrals-Black-200,#C3C5DB)] flex min-h-12 flex-col overflow-hidden text-base text-[rgba(204,204,204,1)] font-medium grow shrink-0 basis-0 w-fit bg-white -mr-11 py-[11px] rounded-lg border-solid">
              <div className="flex min-h-[27px] w-full items-center gap-2 px-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="voorbeeld@email.com"
                  className="self-stretch w-full min-w-60 gap-2 flex-1 shrink basis-[0%] my-auto outline-none"
                  aria-label="Email address"
                />
              </div>
            </div>
            <button 
              type="submit"
              className="justify-center items-stretch flex min-h-12 flex-col overflow-hidden text-lg text-white font-bold text-center leading-none bg-[#E41A36] py-[11px] rounded-[0px_8px_8px_0px]"
            >
              <div className="flex min-h-[27px] w-full items-center gap-2 px-4">
                <div className="self-stretch w-full gap-2 flex-1 shrink basis-[0%] my-auto">
                  Aanmelden
                </div>
              </div>
            </button>
          </form>
          
          {error && (
            <div className="text-[#E41A36] mt-2 text-sm">
              {error}
            </div>
          )}
          
          {isSubmitted && (
            <div className="text-[#1EC0A3] mt-2 text-sm">
              Bedankt voor je aanmelding!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Newsletter;