
import React from 'react';
import { Link } from 'react-router-dom';
import { X, Heart, ShoppingBag } from 'lucide-react';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection?: string;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, activeSection }) => {
  const mainCategories = [
    { id: "sneakers", name: "Sneakers", path: "/sneakers" },
    { id: "accessories", name: "Accessoires", path: "/accessories" },
    { id: "clothing", name: "Kleding", path: "/clothing" },
    { id: "bags", name: "Tassen", path: "/bags" },
    { id: "brands", name: "Merken", path: "/brands" },
    { id: "pre-owned", name: "Pre-owned", path: "/pre-owned" },
  ];

  const secondaryLinks = [
    { id: "blog", name: "Blog", path: "/blog" },
    { id: "sell", name: "Verkopen", path: "/sell" },
    { id: "about", name: "Over Boxstock", path: "/about" },
    { id: "customer-service", name: "Klantenservice", path: "/customer-service" },
  ];

  // Mock cart count - in a real app, this would come from context or state management
  const cartItemCount = 1;

  if (!isOpen) return null;
  
  return (
    <Drawer open={isOpen} onOpenChange={onClose}>
      <DrawerContent className="h-[85vh] rounded-t-xl">
        <DrawerHeader className="border-b border-gray-100">
          <DrawerTitle className="text-xl font-bold text-[#00262F]">Menu</DrawerTitle>
          <DrawerDescription>Ontdek alles op Boxstock</DrawerDescription>
        </DrawerHeader>
        
        <div className="flex-1 overflow-auto p-4">
          <div className="flex justify-between items-center mb-6">
            <Link 
              to="/wishlist" 
              onClick={onClose}
              className="flex items-center gap-2 text-[#00262F] p-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Heart size={20} />
              <span>Favorieten</span>
            </Link>
            
            <Link 
              to="/cart" 
              onClick={onClose}
              className="flex items-center gap-2 text-[#00262F] p-3 rounded-lg hover:bg-gray-50 transition-colors relative"
            >
              <div className="relative">
                <ShoppingBag size={20} />
                {cartItemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#E41A36] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </div>
              <span>Winkelwagen</span>
            </Link>
          </div>
          
          <div className="mb-6">
            <h3 className="mb-3 font-semibold text-[#00262F]">Categorieën</h3>
            <div className="space-y-2">
              {mainCategories.map((category) => (
                <Link 
                  key={category.id}
                  to={category.path}
                  onClick={onClose}
                  className={`block w-full rounded-lg py-3 px-4 transition-colors ${
                    activeSection === category.id 
                      ? "bg-[#1EC0A3]/10 text-[#1EC0A3] font-medium" 
                      : "text-[#00262F] hover:bg-gray-50"
                  }`}
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="mb-3 font-semibold text-[#00262F]">Meer informatie</h3>
            <div className="space-y-2">
              {secondaryLinks.map((link) => (
                <Link 
                  key={link.id}
                  to={link.path}
                  onClick={onClose}
                  className="block w-full rounded-lg py-3 px-4 transition-colors text-[#00262F] hover:bg-gray-50"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
        
        <DrawerFooter className="border-t border-gray-100 gap-2">
          <Link 
            to="/login" 
            onClick={onClose}
            className="w-full rounded-lg bg-[#E41A36] px-4 py-2.5 text-center font-medium text-white"
          >
            Login
          </Link>
          <Link 
            to="/register" 
            onClick={onClose}
            className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-center font-medium text-[#00262F]"
          >
            Registreren
          </Link>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileMenu;
