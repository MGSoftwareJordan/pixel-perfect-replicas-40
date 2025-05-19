
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, User, ShoppingBag, Heart, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

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

  return (
    <header className="w-full">
      {/* Top navigation - teal bar */}
      <div className="attic-nav">
        <div className="container mx-auto max-w-6xl flex items-center justify-between text-sm">
          <div className="flex items-center">
            <span className="mr-4">CUSTOMER SERVICE: MON-FRI 9:00-17:00 | +31 6 123456789</span>
            <span>FREE SHIPPING IN NL</span>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/track" className="text-white hover:underline transition-colors">
              TRACK YOUR ORDER
            </Link>
            <Link to="/help" className="text-white hover:underline transition-colors">
              HELP & CONTACT
            </Link>
          </div>
        </div>
      </div>
      
      {/* Main header */}
      <div className="py-4 border-b border-gray-200 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <h1 className="text-2xl font-bold uppercase">THE ATTIC</h1>
            </Link>
            
            {/* Search bar */}
            <div className="hidden md:flex flex-1 max-w-xl mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-200 focus:border-attic-teal focus:ring-1 focus:ring-attic-teal focus:outline-none"
                />
              </div>
            </div>
            
            {/* Actions */}
            <div className="flex items-center gap-2">
              <Link to="/wishlist" className="p-2 text-attic-black hover:text-attic-teal transition-colors">
                <Heart size={20} />
              </Link>
              <Link to="/cart" className="p-2 text-attic-black hover:text-attic-teal transition-colors">
                <ShoppingBag size={20} />
              </Link>
              <Link to="/profile/1" className="p-2 text-attic-black hover:text-attic-teal transition-colors">
                <User size={20} />
              </Link>
              <Button className="bg-attic-teal hover:bg-[#00A896] text-white ml-2" asChild>
                <Link to="/login">Login</Link>
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                className="md:hidden text-attic-black"
                onClick={toggleMenu}
              >
                <Menu size={24} />
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Categories */}
      <div className="border-b border-gray-200 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex items-center space-x-8 overflow-x-auto py-3 scrollbar-hide">
            <Link 
              to="/sneakers" 
              className={`font-medium whitespace-nowrap transition-colors ${isActive('/sneakers') ? 'text-attic-teal' : 'text-attic-black hover:text-attic-teal'}`}
            >
              SNEAKERS
            </Link>
            <Link 
              to="/clothing" 
              className={`font-medium whitespace-nowrap transition-colors ${isActive('/clothing') ? 'text-attic-teal' : 'text-attic-black hover:text-attic-teal'}`}
            >
              CLOTHING
            </Link>
            <Link 
              to="/headwear" 
              className={`font-medium whitespace-nowrap transition-colors ${isActive('/headwear') ? 'text-attic-teal' : 'text-attic-black hover:text-attic-teal'}`}
            >
              HEADWEAR
            </Link>
            <Link 
              to="/accessories" 
              className={`font-medium whitespace-nowrap transition-colors ${isActive('/accessories') ? 'text-attic-teal' : 'text-attic-black hover:text-attic-teal'}`}
            >
              ACCESSORIES
            </Link>
            <Link 
              to="/gallery-dept" 
              className={`font-medium whitespace-nowrap transition-colors ${isActive('/gallery-dept') ? 'text-attic-teal' : 'text-attic-black hover:text-attic-teal'}`}
            >
              GALLERY DEPT.
            </Link>
            <Link 
              to="/brands" 
              className={`font-medium whitespace-nowrap transition-colors ${isActive('/brands') ? 'text-attic-teal' : 'text-attic-black hover:text-attic-teal'}`}
            >
              BRANDS
            </Link>
            <Link 
              to="/sale" 
              className={`font-medium whitespace-nowrap transition-colors text-attic-pink`}
            >
              SALE
            </Link>
          </div>
        </div>
      </div>
      
      {/* Mobile menu (conditionally rendered) */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 py-4">
          <div className="container mx-auto px-4">
            <div className="flex flex-col space-y-3">
              <Link 
                to="/sneakers"
                className="py-2 px-3 hover:bg-gray-100 rounded-md font-medium text-attic-black"
                onClick={() => setIsMenuOpen(false)}
              >
                SNEAKERS
              </Link>
              <Link 
                to="/clothing"
                className="py-2 px-3 hover:bg-gray-100 rounded-md font-medium text-attic-black"
                onClick={() => setIsMenuOpen(false)}
              >
                CLOTHING
              </Link>
              <Link 
                to="/headwear"
                className="py-2 px-3 hover:bg-gray-100 rounded-md font-medium text-attic-black"
                onClick={() => setIsMenuOpen(false)}
              >
                HEADWEAR
              </Link>
              <Link 
                to="/accessories"
                className="py-2 px-3 hover:bg-gray-100 rounded-md font-medium text-attic-black"
                onClick={() => setIsMenuOpen(false)}
              >
                ACCESSORIES
              </Link>
              <Link 
                to="/gallery-dept"
                className="py-2 px-3 hover:bg-gray-100 rounded-md font-medium text-attic-black"
                onClick={() => setIsMenuOpen(false)}
              >
                GALLERY DEPT.
              </Link>
              <Link 
                to="/brands"
                className="py-2 px-3 hover:bg-gray-100 rounded-md font-medium text-attic-black"
                onClick={() => setIsMenuOpen(false)}
              >
                BRANDS
              </Link>
              <Link 
                to="/sale"
                className="py-2 px-3 hover:bg-gray-100 rounded-md font-medium text-attic-pink"
                onClick={() => setIsMenuOpen(false)}
              >
                SALE
              </Link>
              <div className="border-t border-gray-100 mt-2 pt-2">
                <Link 
                  to="/track"
                  className="py-2 px-3 hover:bg-gray-100 rounded-md text-attic-black"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Track your order
                </Link>
                <Link 
                  to="/help"
                  className="py-2 px-3 hover:bg-gray-100 rounded-md text-attic-black"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Help & Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
