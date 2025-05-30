
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';

type SizeSelectorProps = {
  onSizeSelect?: (size: string) => void;
  selectedSize?: string | null;
  className?: string;
};

const SizeSelector: React.FC<SizeSelectorProps> = ({ 
  onSizeSelect,
  selectedSize: propSelectedSize,
  className
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState<string | null>(propSelectedSize || null);
  
  const sizes = [
    "EU 38", "EU 39", "EU 40", "EU 41", "EU 42", 
    "EU 43", "EU 44", "EU 45", "EU 46"
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectSize = (size: string) => {
    setSelectedSize(size);
    if (onSizeSelect) onSizeSelect(size);
    setIsOpen(false);
  };

  return (
    <div className={cn("min-h-12 w-full text-base font-medium relative", className)}>
      <div className="flex w-full flex-col">
        <div className="flex w-full flex-col">
          <div 
            className="items-stretch border border-[color:var(--Neutrals-Black-200,#C3C5DB)] flex w-full flex-col overflow-hidden justify-center bg-white py-3 rounded-lg border-solid cursor-pointer hover:border-[#00262F] transition-colors"
            onClick={toggleDropdown}
          >
            <div className="flex w-full gap-2 flex-wrap px-4">
              <div className="min-w-60 gap-2 flex-1 shrink basis-[0%] text-[#00262F]">
                {selectedSize || "Kies maat"}
              </div>
              {isOpen ? (
                <ChevronUp className="h-6 w-6 text-[#00262F]" />
              ) : (
                <ChevronDown className="h-6 w-6 text-[#00262F]" />
              )}
            </div>
          </div>
          
          {isOpen && (
            <div className="absolute z-10 w-full mt-1 bg-white border border-[#C3C5DB] rounded-lg shadow-lg">
              <ul className="py-1 max-h-[300px] overflow-y-auto">
                {sizes.map((size, index) => (
                  <li 
                    key={index}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-[#00262F] transition-colors"
                    onClick={() => selectSize(size)}
                  >
                    {size}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SizeSelector;
