
import React from 'react';
import { Plus, Package, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const AccountListings: React.FC = () => {
  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#00262F]">Jouw Aanbiedingen</h1>
          <p className="text-gray-500">
            Bekijk hier al je huidige, gepauzeerde en eerdere aanbiedingen hier.
          </p>
        </div>
        
        <span className="px-4 py-2 bg-[#00262F] text-white rounded-full text-center font-bold">
          00 Aanbiedingen
        </span>
      </div>
      
      <div className="flex flex-col sm:flex-row items-stretch gap-4 mb-8">
        <div className="relative w-full">
          <svg xmlns="http://www.w3.org/2000/svg" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <Input 
            type="text"
            placeholder="Zoek een aanbieding..."
            className="pl-10 border-gray-200"
          />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
        
        <Button variant="outline" className="flex gap-2 items-center border-gray-200">
          <Filter size={18} />
          <span>Categorieën</span>
          <span className="text-xs ml-1">▼</span>
        </Button>
        
        <Button variant="outline" className="flex gap-2 items-center border-gray-200">
          <Filter size={18} />
          <span>Status</span>
          <span className="text-xs ml-1">▼</span>
        </Button>
      </div>
      
      <div className="text-center py-16 bg-white rounded-xl border border-gray-100 mb-8">
        <div className="mx-auto w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-6">
          <Package size={32} className="text-gray-400" />
        </div>
        <h2 className="text-xl font-medium text-[#00262F] mb-2">0 Aanbiedingen</h2>
        <p className="text-gray-500 mb-6 max-w-md mx-auto">
          Je hebt nog geen aanbiedingen. Maak een nieuwe aanbieding aan voor je tweedehands items.
        </p>
        <Button className="bg-[#1EC0A3] hover:bg-[#18a88f] flex items-center gap-2">
          <Plus size={18} />
          <span>Nieuwe Aanbieding Toevoegen</span>
        </Button>
      </div>
    </div>
  );
};

export default AccountListings;
