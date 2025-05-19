
import React, { useState } from 'react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally handle the newsletter subscription
    // For now we'll just set subscribed to true
    setSubscribed(true);
  };

  return (
    <section className="py-16 px-6 bg-attic-teal text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4">Stay up to date</h2>
          <p className="mb-8 text-white/80">
            Subscribe to our newsletter to receive updates on new arrivals, special offers, and exclusive release information.
          </p>
          
          {subscribed ? (
            <div className="bg-white/10 rounded-md p-6">
              <h3 className="text-xl font-semibold mb-2">Thank you for subscribing!</h3>
              <p>You're now on the list to receive our latest updates.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-3 text-gray-900 bg-white rounded-md focus:outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="bg-attic-black text-white px-6 py-3 font-medium rounded-md hover:bg-gray-900 transition-colors"
                >
                  SUBSCRIBE
                </button>
              </div>
              <div className="mt-3 text-sm text-white/70">
                By subscribing, you agree to receive marketing emails. You can unsubscribe at any time.
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
