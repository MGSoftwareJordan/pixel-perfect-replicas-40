import React, { useState } from 'react';

const SizeSelector: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  
  const sizes = [
    "EU 38", "EU 39", "EU 40", "EU 41", "EU 42", 
    "EU 43", "EU 44", "EU 45", "EU 46"
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectSize = (size: string) => {
    setSelectedSize(size);
    setIsOpen(false);
  };

  return (
    <div className="min-h-12 w-full text-base text-[rgba(204,204,204,1)] font-medium relative">
      <div className="flex w-full flex-col">
        <div className="flex w-[335px] max-w-full flex-col">
          <div 
            className="items-stretch border border-[color:var(--Neutrals-Black-200,#C3C5DB)] flex w-full flex-col overflow-hidden justify-center bg-white py-3 rounded-lg border-solid max-md:max-w-full cursor-pointer"
            onClick={toggleDropdown}
          >
            <div className="flex w-full gap-2 flex-wrap px-4 max-md:max-w-full">
              <div className="min-w-60 gap-2 flex-1 shrink basis-[0%] max-md:max-w-full">
                {selectedSize || "Kies maat"}
              </div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4b8ebc2af344e0fd521198a4475e8179791b79ce?placeholderIfAbsent=true"
                className={`aspect-[1] object-contain w-6 shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                alt="Dropdown arrow"
              />
            </div>
          </div>
          
          {isOpen && (
            <div className="absolute z-10 w-full mt-1 bg-white border border-[#C3C5DB] rounded-lg shadow-lg">
              <ul className="py-1">
                {sizes.map((size, index) => (
                  <li 
                    key={index}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-[#00262F]"
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