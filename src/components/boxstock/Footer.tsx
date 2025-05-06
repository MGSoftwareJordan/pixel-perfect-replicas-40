
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#00262F] text-white pt-12 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Customer Service Column */}
          <div>
            <h3 className="text-lg font-bold mb-4 flex items-center">
              <span>Klantenservice</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </h3>
            <ul className="space-y-3">
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/bestellen-levering" className="text-gray-300 hover:text-white transition-colors">Bestellen & Levering</Link></li>
              <li><Link to="/betaling" className="text-gray-300 hover:text-white transition-colors">Betaling</Link></li>
              <li><Link to="/retourneren" className="text-gray-300 hover:text-white transition-colors">Retourneren</Link></li>
            </ul>
          </div>

          {/* Seller Column */}
          <div>
            <h3 className="text-lg font-bold mb-4 flex items-center">
              <span>Wordt Verkoper</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </h3>
            <ul className="space-y-3">
              <li><Link to="/hoe-werkt-het" className="text-gray-300 hover:text-white transition-colors">Hoe Werkt Het</Link></li>
              <li><Link to="/verkopen" className="text-gray-300 hover:text-white transition-colors">Verkopen op BoxStock</Link></li>
              <li><Link to="/verkoopvoorwaarden" className="text-gray-300 hover:text-white transition-colors">Verkoopvoorwaarden</Link></li>
            </ul>
          </div>

          {/* Popular Brands Column 1 */}
          <div>
            <h3 className="text-lg font-bold mb-4 flex items-center">
              <span>ASICS</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </h3>
            <ul className="space-y-3">
              <li><Link to="/asics/gel-1130" className="text-gray-300 hover:text-white transition-colors">ASICS Gel-1130</Link></li>
              <li><Link to="/asics/gel-kayano-31" className="text-gray-300 hover:text-white transition-colors">ASICS Gel-Kayano 31</Link></li>
              <li><Link to="/asics/gel-nyc" className="text-gray-300 hover:text-white transition-colors">ASICS Gel-NYC</Link></li>
              <li><Link to="/asics/onitsuka-tiger-mexico-66" className="text-gray-300 hover:text-white transition-colors">Onitsuka Tiger Mexico 66</Link></li>
              <li><Link to="/asics/gel-kayano" className="text-gray-300 hover:text-white transition-colors">ASICS Gel-Kayano</Link></li>
            </ul>
          </div>

          {/* Popular Brands Column 2 */}
          <div>
            <h3 className="text-lg font-bold mb-4 flex items-center">
              <span>Air Jordan</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </h3>
            <ul className="space-y-3">
              <li><Link to="/air-jordan/1" className="text-gray-300 hover:text-white transition-colors">Air Jordan 1</Link></li>
              <li><Link to="/air-jordan/3" className="text-gray-300 hover:text-white transition-colors">Air Jordan 3</Link></li>
              <li><Link to="/air-jordan/4" className="text-gray-300 hover:text-white transition-colors">Air Jordan 4</Link></li>
              <li><Link to="/air-jordan/11" className="text-gray-300 hover:text-white transition-colors">Air Jordan 11</Link></li>
              <li><Link to="/air-jordan/womens" className="text-gray-300 hover:text-white transition-colors">Women's Jordan Shoes</Link></li>
            </ul>
          </div>

          {/* Popular Brands Column 3 */}
          <div>
            <h3 className="text-lg font-bold mb-4 flex items-center">
              <span>Nike</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </h3>
            <ul className="space-y-3">
              <li><Link to="/nike/air-force-1" className="text-gray-300 hover:text-white transition-colors">Nike Air Force 1</Link></li>
              <li><Link to="/nike/air-max-1" className="text-gray-300 hover:text-white transition-colors">Nike Air Max 1</Link></li>
              <li><Link to="/nike/dunk" className="text-gray-300 hover:text-white transition-colors">Nike Dunk</Link></li>
              <li><Link to="/nike/adversary-sb" className="text-gray-300 hover:text-white transition-colors">Nike Adversary Sb</Link></li>
              <li><Link to="/nike/womens-dunks" className="text-gray-300 hover:text-white transition-colors">Women's Nike Dunks</Link></li>
            </ul>
          </div>
        </div>

        {/* Secondary footer content */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mt-12">
          {/* Account Column */}
          <div>
            <h3 className="text-lg font-bold mb-4 flex items-center">
              <span>Account</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </h3>
            <ul className="space-y-3">
              <li><Link to="/favorieten" className="text-gray-300 hover:text-white transition-colors">Favorieten</Link></li>
              <li><Link to="/merken" className="text-gray-300 hover:text-white transition-colors">Merken</Link></li>
              <li><Link to="/bestellingen" className="text-gray-300 hover:text-white transition-colors">Bestellingen</Link></li>
              <li><Link to="/instellingen" className="text-gray-300 hover:text-white transition-colors">Instellingen</Link></li>
            </ul>
          </div>

          {/* Popular Releases Column */}
          <div>
            <h3 className="text-lg font-bold mb-4 flex items-center">
              <span>Populair Releases</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </h3>
            <ul className="space-y-3">
              <li><Link to="/releases/aj1-retro-low-og-sp" className="text-gray-300 hover:text-white transition-colors">AJ1 Retro Low OG SP Travis Scott Canary</Link></li>
              <li><Link to="/releases/aj4-retro-military-blue" className="text-gray-300 hover:text-white transition-colors">AJ4 Retro Military Blue (2024)</Link></li>
              <li><Link to="/releases/aj11-retro-low-space-jam" className="text-gray-300 hover:text-white transition-colors">AJ11 Retro Low Space Jam</Link></li>
              <li><Link to="/releases/aj-jumpman-jack-tr" className="text-gray-300 hover:text-white transition-colors">AJ Jumpman Jack TR</Link></li>
              <li><Link to="/releases/travis-scott-sail" className="text-gray-300 hover:text-white transition-colors">Travis Scott Sail</Link></li>
            </ul>
          </div>

          {/* Clothing Column */}
          <div>
            <h3 className="text-lg font-bold mb-4 flex items-center">
              <span>Kleding</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </h3>
            <ul className="space-y-3">
              <li><Link to="/kleding/supreme" className="text-gray-300 hover:text-white transition-colors">Supreme</Link></li>
              <li><Link to="/kleding/yeezy" className="text-gray-300 hover:text-white transition-colors">Yeezy</Link></li>
              <li><Link to="/kleding/travis-scott" className="text-gray-300 hover:text-white transition-colors">Travis Scott</Link></li>
              <li><Link to="/kleding/nike" className="text-gray-300 hover:text-white transition-colors">Nike</Link></li>
            </ul>
          </div>

          {/* Accessories Column */}
          <div>
            <h3 className="text-lg font-bold mb-4 flex items-center">
              <span>Accessoires</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </h3>
            <ul className="space-y-3">
              <li><Link to="/accessoires/supreme" className="text-gray-300 hover:text-white transition-colors">Supreme Accessories</Link></li>
              <li><Link to="/accessoires/designer-sunglasses" className="text-gray-300 hover:text-white transition-colors">Designer Sunglasses</Link></li>
              <li><Link to="/accessoires/louis-vuitton" className="text-gray-300 hover:text-white transition-colors">Louis Vuitton Accessories</Link></li>
              <li><Link to="/accessoires/gucci" className="text-gray-300 hover:text-white transition-colors">Gucci Accessories</Link></li>
            </ul>
          </div>

          {/* App Download Column */}
          <div>
            <h3 className="text-lg font-bold mb-4">Binnenkort beschikbaar</h3>
            <div className="flex flex-col space-y-4">
              <Link to="/app/google-play" className="flex items-center bg-white rounded-md px-4 py-2 text-black hover:bg-gray-100 transition-colors">
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/google-play-logo.png?placeholderIfAbsent=true" alt="Google Play" className="h-5 w-5 mr-2" />
                <span>Google Play</span>
              </Link>
              <Link to="/app/app-store" className="flex items-center bg-white rounded-md px-4 py-2 text-black hover:bg-gray-100 transition-colors">
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/apple-logo.png?placeholderIfAbsent=true" alt="App Store" className="h-5 w-5 mr-2" />
                <span>App Store</span>
              </Link>
              <div className="mt-4">
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/app-preview.png?placeholderIfAbsent=true" alt="App Preview" className="w-24 h-auto" />
              </div>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="mt-12 pt-6 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <p className="text-sm text-gray-400">© Boxstock 2025</p>
              <Link to="/algemene-voorwaarden" className="text-sm text-gray-400 hover:text-white transition-colors">Algemene Voorwaarden</Link>
              <Link to="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy</Link>
            </div>

            {/* Social Media */}
            <div className="flex items-center space-x-4 mb-6 md:mb-0">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
            </div>

            {/* Payment methods */}
            <div className="flex items-center space-x-3">
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/paypal-logo.png?placeholderIfAbsent=true" alt="PayPal" className="h-6" />
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/ideal-logo.png?placeholderIfAbsent=true" alt="iDEAL" className="h-6" />
            </div>
          </div>
          
          {/* Language Selector */}
          <div className="flex justify-center mt-6 space-x-6">
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">English</a>
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Nederlands</a>
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Español</a>
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Italiano</a>
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Deutsch</a>
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Français</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
