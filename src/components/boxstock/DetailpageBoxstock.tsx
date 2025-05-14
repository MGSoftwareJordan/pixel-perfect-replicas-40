
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import AddOfferFlow from '@/components/account/AddOfferFlow';

const DetailpageBoxstock: React.FC = () => {
  const [offerModalOpen, setOfferModalOpen] = useState(false);
  
  return (
    <div className="container mx-auto py-8">
      <div className="bg-white shadow-sm rounded-lg p-8">
        <h1 className="text-2xl font-bold mb-6">Verkoop je product</h1>
        <p className="text-gray-600 mb-8">
          Plaats eenvoudig je tweedehands items of resell producten op BoxStock
        </p>
        
        <Button 
          onClick={() => setOfferModalOpen(true)}
          className="bg-[#1EC0A3] hover:bg-[#18a88f]"
        >
          Nieuw product aanbieden
        </Button>
        
        <AddOfferFlow 
          open={offerModalOpen} 
          onClose={() => setOfferModalOpen(false)} 
        />
      </div>
    </div>
  );
};

export default DetailpageBoxstock;
