
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, User, ShoppingBag, Heart, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LanguageSwitcher from './LanguageSwitcher';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

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

  // New expanded categories
  const mainCategories = [
    { name: "Mode & Kleding", path: "/clothing", subCategories: [
      { name: "Streetwear", path: "/clothing/streetwear" },
      { name: "Minimalistisch", path: "/clothing/minimalist" },
      { name: "Denim", path: "/clothing/denim" },
      { name: "Athleisure", path: "/clothing/athleisure" },
      { name: "Designer Collabs", path: "/clothing/designer-collabs" },
    ]},
    { name: "Sneakers & Schoenen", path: "/sneakers", subCategories: [
      { name: "Exclusieve Sneakers", path: "/sneakers/exclusive" },
      { name: "Fashion Sneakers", path: "/sneakers/fashion" },
      { name: "Premium Casual Schoenen", path: "/sneakers/casual" },
    ]},
    { name: "Accessoires", path: "/accessories", subCategories: [
      { name: "Zonnebrillen", path: "/accessories/sunglasses" },
      { name: "Petten & Mutsen", path: "/accessories/headwear" },
      { name: "Sieraden", path: "/accessories/jewelry" },
      { name: "Horloges", path: "/accessories/watches" },
    ]},
    { name: "Tassen & Lederwaren", path: "/bags", subCategories: [
      { name: "Crossbody Bags", path: "/bags/crossbody" },
      { name: "Tote Bags", path: "/bags/tote" },
      { name: "Rugzakken", path: "/bags/backpacks" },
    ]},
    { name: "Interieur", path: "/interior", subCategories: [
      { name: "Minimalistisch", path: "/interior/minimalist" },
      { name: "Street Art", path: "/interior/street-art" },
      { name: "Geurkaarsen", path: "/interior/candles" },
      { name: "Design Meubels", path: "/interior/furniture" },
    ]},
    { name: "Beauty", path: "/beauty", subCategories: [
      { name: "Huidverzorging", path: "/beauty/skincare" },
      { name: "Parfums", path: "/beauty/perfumes" },
      { name: "Grooming", path: "/beauty/grooming" },
    ]},
    { name: "Tech & Gadgets", path: "/tech", subCategories: [
      { name: "Headphones", path: "/tech/headphones" },
      { name: "Smart Accessoires", path: "/tech/smart-accessories" },
      { name: "Smartphone Cases", path: "/tech/phone-cases" },
    ]},
    { name: "Urban Sport", path: "/urban-sport", subCategories: [
      { name: "Skateboarden", path: "/urban-sport/skate" },
      { name: "Elektrische Steps", path: "/urban-sport/escooters" },
      { name: "Yoga & Meditatie", path: "/urban-sport/yoga" },
    ]},
    { name: "Pre-owned", path: "/pre-owned", subCategories: [
      { name: "Sneakers", path: "/pre-owned/sneakers" },
      { name: "Kleding", path: "/pre-owned/clothing" },
      { name: "Accessoires", path: "/pre-owned/accessories" },
      { name: "Tassen", path: "/pre-owned/bags" },
    ]},
    { name: "Merken", path: "/brands", subCategories: [] },
  ];

  return (
    <header className="w-full bg-white relative z-50">
      {/* Top navigation */}
      <div className="border-b border-gray-100">
        <div className="container mx-auto max-w-6xl px-4 py-2">
          <div className="flex items-center justify-end gap-5 text-sm">
            <LanguageSwitcher />
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
                  placeholder="Zoek op producten, merken of categorieën"
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 focus:border-[#1EC0A3] focus:ring-1 focus:ring-[#1EC0A3] focus:outline-none"
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
              <Link to="/profile/1" className="p-2 text-[#00262F] hover:text-[#1EC0A3] transition-colors">
                <User size={20} />
              </Link>
              <Button className="bg-[#E41A36] hover:bg-[#c01730] text-white ml-2" asChild>
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
          <div className="hidden md:flex items-center space-x-4 overflow-x-auto py-3 scrollbar-hide">
            <NavigationMenu className="z-50">
              <NavigationMenuList>
                {mainCategories.map((category) => (
                  <NavigationMenuItem key={category.name}>
                    {category.subCategories.length > 0 ? (
                      <>
                        <NavigationMenuTrigger className={`font-bold whitespace-nowrap transition-colors ${isActive(category.path) ? 'text-[#1EC0A3]' : 'text-[#00262F] hover:text-[#1EC0A3]'}`}>
                          {category.name}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="bg-white">
                          <ul className="grid gap-3 p-4 w-[400px] md:w-[500px] lg:w-[600px] grid-cols-2 bg-white shadow-lg rounded-md">
                            <li className="col-span-2">
                              <NavigationMenuLink asChild>
                                <Link
                                  to={category.path}
                                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                >
                                  <div className="text-lg font-medium leading-none">Alle {category.name}</div>
                                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                    Bekijk al onze {category.name.toLowerCase()} producten
                                  </p>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                            {category.subCategories.map((sub) => (
                              <li key={sub.name}>
                                <NavigationMenuLink asChild>
                                  <Link
                                    to={sub.path}
                                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                  >
                                    <div className="text-sm font-medium leading-none">{sub.name}</div>
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <NavigationMenuLink asChild>
                        <Link 
                          to={category.path} 
                          className={`font-bold whitespace-nowrap transition-colors ${isActive(category.path) ? 'text-[#1EC0A3]' : 'text-[#00262F] hover:text-[#1EC0A3]'}`}
                        >
                          {category.name}
                        </Link>
                      </NavigationMenuLink>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </div>
      
      {/* Mobile menu (conditionally rendered) */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 py-4">
          <div className="container mx-auto px-4">
            <div className="flex flex-col space-y-3">
              {mainCategories.map((category) => (
                <div key={category.name} className="border-b border-gray-100 pb-2">
                  <Link 
                    to={category.path}
                    className="py-2 px-3 font-medium text-[#00262F] hover:text-[#1EC0A3] block"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {category.name}
                  </Link>
                  {category.subCategories.length > 0 && (
                    <div className="pl-6 space-y-1">
                      {category.subCategories.map((sub) => (
                        <Link 
                          key={sub.name}
                          to={sub.path}
                          className="py-1 px-3 text-sm text-gray-600 hover:text-[#1EC0A3] block"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="border-t border-gray-100 mt-2 pt-2">
                <Link 
                  to="/blog"
                  className="py-2 px-3 hover:bg-gray-100 rounded-md text-[#00262F] block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog
                </Link>
                <Link 
                  to="/sell"
                  className="py-2 px-3 hover:bg-gray-100 rounded-md text-[#00262F] block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Verkopen
                </Link>
                <Link 
                  to="/about"
                  className="py-2 px-3 hover:bg-gray-100 rounded-md text-[#00262F] block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Over Boxstock
                </Link>
                <Link 
                  to="/customer-service"
                  className="py-2 px-3 hover:bg-gray-100 rounded-md text-[#00262F] block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Klantenservice
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
