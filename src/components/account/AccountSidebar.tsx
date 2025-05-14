
import React from 'react';
import { Link } from 'react-router-dom';
import { User, Bell, Heart, CheckCircle, ShoppingBag, FileText, Package, Settings } from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

interface AccountSidebarProps {
  activeSection?: string;
}

const AccountSidebar: React.FC<AccountSidebarProps> = ({ activeSection = "overview" }) => {
  // Mock user data
  const user = {
    name: "Mike Boxstock",
    email: "administrator@mgsoftware.nl",
    avatar: "M"
  };
  
  const menuItems = [
    { id: "overview", name: "Account", icon: User, path: "/account/overview" },
    { id: "notifications", name: "Notificaties", icon: Bell, path: "/account/notifications", count: 1 },
    { id: "favorites", name: "Favorieten", icon: Heart, path: "/account/favorites" },
    { id: "brands", name: "Merken", icon: CheckCircle, path: "/account/brands" },
    { id: "listings", name: "Aanbiedingen", icon: FileText, path: "/account/listings", count: 0 },
    { id: "packing-slips", name: "Pakbonnen", icon: Package, path: "/account/packing-slips", count: 0 },
    { id: "orders", name: "Bestellingen", icon: ShoppingBag, path: "/account/orders", count: 7 },
    { id: "settings", name: "Instellingen", icon: Settings, path: "/account/settings" },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      {/* User profile */}
      <div className="px-6 py-5 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <Avatar className="h-12 w-12 bg-[#1EC0A3]/10 text-[#1EC0A3]">
            <AvatarFallback>{user.avatar}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-medium text-[#00262F]">{user.name}</h3>
            <p className="text-sm text-gray-500">{user.email}</p>
          </div>
        </div>
      </div>
      
      {/* Navigation */}
      <div className="p-2">
        {menuItems.map((item) => (
          <Link 
            key={item.id}
            to={item.path}
            className={`flex items-center justify-between px-4 py-3 rounded-lg mb-1 ${
              activeSection === item.id 
                ? "bg-[#1EC0A3]/10 text-[#1EC0A3]" 
                : "text-[#00262F] hover:bg-gray-50"
            }`}
          >
            <div className="flex items-center gap-3">
              <item.icon className="w-5 h-5" />
              <span>{item.name}</span>
            </div>
            {item.count !== undefined && (
              <span className={`text-xs px-2 py-0.5 rounded-full ${
                activeSection === item.id
                  ? "bg-[#1EC0A3]/20"
                  : "bg-gray-100"
              }`}>
                {item.count}
              </span>
            )}
          </Link>
        ))}
        
        {/* Logout button */}
        <Link 
          to="/login"
          className="flex items-center gap-3 px-4 py-3 rounded-lg text-red-500 hover:bg-red-50 mt-4"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line x1="21" y1="12" x2="9" y2="12" />
          </svg>
          <span>Uitloggen</span>
        </Link>
      </div>
    </div>
  );
};

export default AccountSidebar;
