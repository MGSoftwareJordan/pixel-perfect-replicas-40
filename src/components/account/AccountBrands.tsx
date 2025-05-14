
import React from 'react';
import { Check, CheckCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';

const AccountBrands: React.FC = () => {
  // Mock data for brands
  const brands = [
    {
      id: 1,
      name: "Nike",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/1024px-Logo_NIKE.svg.png",
      following: true
    },
    {
      id: 2,
      name: "Adidas",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/1280px-Adidas_Logo.svg.png",
      following: true
    },
    {
      id: 3,
      name: "Puma",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Puma_logo.svg/2560px-Puma_logo.svg.png",
      following: true
    },
    {
      id: 4,
      name: "Converse",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Converse_logo.svg/1280px-Converse_logo.svg.png",
      following: true
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-[#00262F]">Jouw Merken</h1>
      </div>
      
      <p className="text-gray-500 mb-6">
        Bekijk alle merken die je volgt
      </p>
      
      <div className="grid gap-4">
        {brands.map((brand) => (
          <Card key={brand.id} className="border-gray-100">
            <div className="p-5 flex items-center justify-between">
              <div className="flex items-center gap-6">
                <div className="h-12 w-24 flex items-center">
                  <img 
                    src={brand.logo} 
                    alt={brand.name}
                    className="max-h-10 max-w-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-medium text-[#00262F]">{brand.name}</h3>
                </div>
              </div>
              
              <div className="flex items-center gap-2 text-[#1EC0A3]">
                <CheckCircle size={16} className="fill-[#1EC0A3] text-white" />
                <span className="font-medium">Volgend</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AccountBrands;
