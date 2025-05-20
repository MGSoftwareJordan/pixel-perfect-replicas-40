
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, User, ShoppingBag, Heart, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LanguageSwitcher from './LanguageSwitcher';
import MobileMenu from './MobileMenu';

const Header: React.FC = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Function to determine if a link is active
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close mobile menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Get current active section
  const getActiveSection = () => {
    const path = location.pathname;
    if (path.includes('/sneakers')) return 'sneakers';
    if (path.includes('/accessories')) return 'accessories';
    if (path.includes('/clothing')) return 'clothing';
    if (path.includes('/bags')) return 'bags';
    if (path.includes('/brands')) return 'brands';
    if (path.includes('/pre-owned')) return 'pre-owned';
    return '';
  };

  return (
    <header className="w-full bg-white">
      {/* Top navigation */}
      <div className="border-b border-gray-100">
        <div className="container mx-auto max-w-6xl px-4 py-2">
          <div className="flex items-center justify-end gap-5 text-sm">
            <LanguageSwitcher />
            <Link to="/blog" className="hidden sm:inline text-[#00262f] font-medium hover:text-[#1EC0A3] transition-colors">
              Blog
            </Link>
            <Link to="/sell" className="hidden sm:inline text-[#00262f] font-medium hover:text-[#1EC0A3] transition-colors">
              Verkopen
            </Link>
            <Link to="/about" className="hidden sm:inline text-[#00262f] font-medium hover:text-[#1EC0A3] transition-colors">
              Over Boxstock
            </Link>
            <Link to="/customer-service" className="hidden sm:inline text-[#00262f] font-medium hover:text-[#1EC0A3] transition-colors">
              Klantenservice
            </Link>
          </div>
        </div>
      </div>
      
      {/* Main header */}
      <div className="py-4 border-b border-gray-200">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e1ad84d1ff291f4f339854893a1c0bfa59bc73ca?placeholderIfAbsent=true"
                className="h-8"
                alt="Boxstock logo"
              />
            </Link>
            
            {/* Search bar */}
            <div className="hidden md:flex flex-1 max-w-xl mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  placeholder="Zoek op model of merk"
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:border-[#1EC0A3] focus:ring-1 focus:ring-[#1EC0A3] focus:outline-none"
                />
              </div>
            </div>
            
            {/* Actions */}
            <div className="flex items-center gap-2">
              <Link to="/wishlist" className="p-2 text-[#00262F] hover:text-[#1EC0A3] transition-colors">
                <Heart size={20} />
              </Link>
              <Link to="/cart" className="p-2 text-[#00262F] hover:text-[#1EC0A3] transition-colors">
                <ShoppingBag size={20} />
              </Link>
              <Link to="/profile/1" className="hidden sm:flex p-2 text-[#00262F] hover:text-[#1EC0A3] transition-colors">
                <User size={20} />
              </Link>
              <Button className="hidden sm:flex bg-[#E41A36] hover:bg-[#c01730] text-white ml-2" asChild>
                <Link to="/login">Login</Link>
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                className="md:hidden text-[#00262F]"
                onClick={toggleMenu}
              >
                <Menu size={24} />
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Categories */}
      <div className="border-b border-gray-200">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex items-center space-x-8 overflow-x-auto py-3 scrollbar-hide">
            <Link 
              to="/sneakers" 
              className={`font-bold whitespace-nowrap transition-colors ${isActive('/sneakers') ? 'text-[#1EC0A3]' : 'text-[#00262F] hover:text-[#1EC0A3]'}`}
            >
              Sneakers
            </Link>
            <Link 
              to="/accessories" 
              className={`font-bold whitespace-nowrap transition-colors ${isActive('/accessories') ? 'text-[#1EC0A3]' : 'text-[#00262F] hover:text-[#1EC0A3]'}`}
            >
              Accessoires
            </Link>
            <Link 
              to="/clothing" 
              className={`font-bold whitespace-nowrap transition-colors ${isActive('/clothing') ? 'text-[#1EC0A3]' : 'text-[#00262F] hover:text-[#1EC0A3]'}`}
            >
              Kleding
            </Link>
            <Link 
              to="/bags" 
              className={`font-bold whitespace-nowrap transition-colors ${isActive('/bags') ? 'text-[#1EC0A3]' : 'text-[#00262F] hover:text-[#1EC0A3]'}`}
            >
              Tassen
            </Link>
            <Link 
              to="/brands" 
              className={`font-bold whitespace-nowrap transition-colors ${isActive('/brands') ? 'text-[#1EC0A3]' : 'text-[#00262F] hover:text-[#1EC0A3]'}`}
            >
              Merken
            </Link>
            <Link 
              to="/pre-owned" 
              className={`font-bold whitespace-nowrap transition-colors ${isActive('/pre-owned') || location.pathname.includes('/pre-owned') ? 'text-[#1EC0A3]' : 'text-[#00262F] hover:text-[#1EC0A3]'}`}
            >
              Pre-owned
            </Link>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMenuOpen} 
        onClose={closeMenu}
        activeSection={getActiveSection()}
      />
    </header>
  );
};

export default Header;
