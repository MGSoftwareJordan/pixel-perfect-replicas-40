
import React from 'react';
import { Check } from 'lucide-react';
import { Label } from '@/components/ui/label';

export interface Addon {
  id: string;
  name: string;
  description: string;
  price: number;
  icon: React.ReactNode;
  image?: string;
}

interface CheckoutAddonsProps {
  selectedAddons: string[];
  onAddonToggle: (addonId: string) => void;
}

const CheckoutAddons: React.FC<CheckoutAddonsProps> = ({ 
  selectedAddons, 
  onAddonToggle 
}) => {
  const availableAddons: Addon[] = [
    {
      id: 'safeGrailSpray',
      name: 'SafeGrail Protection spray',
      description: 'Bescherm je schoenen tegen water en vuil',
      price: 20.00,
      icon: <span className="text-[#1EC0A3] text-xl">🛡️</span>,
      image: '/lovable-uploads/2863bc9a-cccc-4063-a65f-b87896d92811.png'
    },
    {
      id: 'kiwiProtector',
      name: 'KIWI Sneaker protector',
      description: 'Premium bescherming voor je sneakers',
      price: 20.00,
      icon: <span className="text-[#1EC0A3] text-xl">✨</span>
    },
    {
      id: 'safegrailLaces',
      name: 'Safegrail premium laces',
      description: 'Hoge kwaliteit schoenveters voor je sneakers',
      price: 20.00,
      icon: <span className="text-[#1EC0A3] text-xl">👟</span>
    },
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-[#00262F]">Extra opties</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {availableAddons.map((addon) => {
          const isSelected = selectedAddons.includes(addon.id);
          
          return (
            <div 
              key={addon.id}
              className={`border rounded-lg p-4 cursor-pointer transition-all ${
                isSelected 
                  ? 'border-[#1EC0A3] bg-[#1EC0A3]/5' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              onClick={() => onAddonToggle(addon.id)}
            >
              <div className="flex justify-between items-start">
                <div className="flex gap-3 items-center">
                  <div className="w-16 h-16 rounded-md bg-gray-50 flex items-center justify-center border border-gray-100">
                    {addon.icon}
                  </div>
                  <div>
                    <Label className="font-medium text-[#00262F] hover:cursor-pointer">
                      {addon.name}
                    </Label>
                    <p className="text-xs text-gray-500 mt-0.5">{addon.description}</p>
                  </div>
                </div>
                <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                  isSelected 
                    ? 'bg-[#1EC0A3] text-white' 
                    : 'border border-gray-300'
                }`}>
                  {isSelected && <Check size={14} />}
                </div>
              </div>
              <p className="font-medium text-[#00262F] mt-3">+€{addon.price.toFixed(2)}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CheckoutAddons;
