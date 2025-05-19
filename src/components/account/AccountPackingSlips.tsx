
import React from 'react';
import { Package } from 'lucide-react';

const AccountPackingSlips: React.FC = () => {
  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#1A1F2C]">Pakbonnen</h1>
          <p className="text-gray-500">Download pakbonnen voor je aanbiedingen hier.</p>
        </div>
        
        <span className="px-4 py-2 bg-[#1A1F2C] text-white rounded-full text-center font-bold">
          00 Opties
        </span>
      </div>
      
      <div className="text-center py-16 bg-white rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
        <div className="mx-auto w-16 h-16 bg-[#E5DEFF] rounded-full flex items-center justify-center mb-6">
          <Package size={32} className="text-[#9b87f5]" />
        </div>
        <h2 className="text-xl font-medium text-[#1A1F2C] mb-2">Geen pakbonnen beschikbaar</h2>
        <p className="text-gray-500 max-w-md mx-auto">
          Je hebt momenteel geen actieve aanbiedingen waarvoor pakbonnen beschikbaar zijn.
        </p>
      </div>
    </div>
  );
};

export default AccountPackingSlips;
