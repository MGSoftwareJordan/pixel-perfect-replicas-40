
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer>
      {/* Main footer with sections */}
      <div className="attic-pink-section py-12">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Join the community */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Join the community</h3>
              <p className="mb-4 text-white/80">
                Sign up for our newsletter to receive exclusive offers, early access to drops and more.
              </p>
              <Link to="/newsletter">
                <button className="bg-white text-attic-pink px-6 py-3 font-semibold rounded-sm hover:bg-gray-100 transition-colors">
                  JOIN THE NEWSLETTER
                </button>
              </Link>
            </div>
            
            {/* Information */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Information</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/about" className="text-white/80 hover:text-white transition-colors">
                    About us
                  </Link>
                </li>
                <li>
                  <Link to="/sustainability" className="text-white/80 hover:text-white transition-colors">
                    Sustainability
                  </Link>
                </li>
                <li>
                  <Link to="/careers" className="text-white/80 hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="text-white/80 hover:text-white transition-colors">
                    Terms of service
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="text-white/80 hover:text-white transition-colors">
                    Privacy policy
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Customer service */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Customer service</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/faq" className="text-white/80 hover:text-white transition-colors">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link to="/shipping" className="text-white/80 hover:text-white transition-colors">
                    Shipping & delivery
                  </Link>
                </li>
                <li>
                  <Link to="/returns" className="text-white/80 hover:text-white transition-colors">
                    Returns & refunds
                  </Link>
                </li>
                <li>
                  <Link to="/track-order" className="text-white/80 hover:text-white transition-colors">
                    Track your order
                  </Link>
                </li>
                <li>
                  <Link to="/payment-methods" className="text-white/80 hover:text-white transition-colors">
                    Payment methods
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Contact */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact</h3>
              <address className="not-italic">
                <p className="text-white/80">Address: Nieuwstraat 10, 1017 Amsterdam, the Netherlands</p>
                <p className="text-white/80 mt-2">Telephone number: +31 6 12345678</p>
                <p className="text-white/80 mt-2">Email: info@theattic.com</p>
                <p className="text-white/80 mt-2">KVP number: 12345678</p>
              </address>
              
              {/* Social icons */}
              <div className="flex space-x-4 mt-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom footer with copyright and payment methods */}
      <div className="bg-attic-teal text-white py-4">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>© 2025 THE ATTIC. All rights reserved.</p>
            </div>
            <div className="flex items-center space-x-2">
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/payment-visa.svg" alt="Visa" className="h-6" />
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/payment-mastercard.svg" alt="Mastercard" className="h-6" />
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/payment-amex.svg" alt="American Express" className="h-6" />
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/payment-paypal.svg" alt="PayPal" className="h-6" />
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/payment-ideal.svg" alt="iDEAL" className="h-6" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
