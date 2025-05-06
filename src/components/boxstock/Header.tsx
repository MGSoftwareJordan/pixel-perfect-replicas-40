
import React from 'react';
import { Link } from 'react-router-dom';
import { Search, User, ShoppingBag, Heart, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
  return (
    <header className="w-full bg-white">
      {/* Top navigation */}
      <div className="border-b border-gray-100">
        <div className="container mx-auto max-w-6xl px-4 py-2">
          <div className="flex items-center justify-end gap-5 text-sm">
            <Link to="/blog" className="text-[#00262f] font-medium hover:text-[#1EC0A3] transition-colors">
              Blog
            </Link>
            <Link to="/sell" className="text-[#00262f] font-medium hover:text-[#1EC0A3] transition-colors">
              Verkopen
            </Link>
            <Link to="/about" className="text-[#00262f] font-medium hover:text-[#1EC0A3] transition-colors">
              Over Boxstock
            </Link>
            <Link to="/customer-service" className="text-[#00262f] font-medium hover:text-[#1EC0A3] transition-colors">
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
              <Link to="/profile">
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="text-[#00262F] hover:text-[#1EC0A3] hover:bg-transparent"
                >
                  <User size={20} />
                </Button>
              </Link>
              <Button className="bg-[#E41A36] hover:bg-[#c01730] text-white ml-2">
                Login
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                className="md:hidden text-[#00262F]"
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
            <Link to="/sneakers" className="text-[#00262F] font-bold whitespace-nowrap hover:text-[#1EC0A3] transition-colors">
              Sneakers
            </Link>
            <Link to="/accessories" className="text-[#00262F] font-bold whitespace-nowrap hover:text-[#1EC0A3] transition-colors">
              Accessoires
            </Link>
            <Link to="/clothing" className="text-[#00262F] font-bold whitespace-nowrap hover:text-[#1EC0A3] transition-colors">
              Kleding
            </Link>
            <Link to="/bags" className="text-[#00262F] font-bold whitespace-nowrap hover:text-[#1EC0A3] transition-colors">
              Tassen
            </Link>
            <Link to="/brands" className="text-[#00262F] font-bold whitespace-nowrap hover:text-[#1EC0A3] transition-colors">
              Merken
            </Link>
            <Link to="/pre-owned" className="text-[#1EC0A3] font-bold whitespace-nowrap">
              Pre-owned
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
