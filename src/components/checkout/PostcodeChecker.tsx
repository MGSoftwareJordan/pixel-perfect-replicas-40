
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Check, Loader2, MapPin } from 'lucide-react';

interface PostcodeCheckerProps {
  onAddressFound: (addressData: {
    street: string;
    city: string;
    province: string;
  }) => void;
}

const PostcodeChecker: React.FC<PostcodeCheckerProps> = ({ onAddressFound }) => {
  const [postcode, setPostcode] = useState('');
  const [houseNumber, setHouseNumber] = useState('');
  const [isChecking, setIsChecking] = useState(false);
  const [addressFound, setAddressFound] = useState(false);
  
  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate inputs
    if (!postcode.match(/^\d{4}\s?[a-zA-Z]{2}$/)) {
      alert('Voer een geldige postcode in (bijv. 1234 AB)');
      return;
    }
    
    if (!houseNumber) {
      alert('Voer een huisnummer in');
      return;
    }
    
    setIsChecking(true);
    
    // Simulate API call to postcode service
    setTimeout(() => {
      // In a real app, this would be an API call to a postcode service
      // For demo purposes, we'll simulate a successful response
      const mockAddressData = {
        street: 'Voorbeeldstraat',
        city: 'Amsterdam',
        province: 'noord-holland',
      };
      
      onAddressFound(mockAddressData);
      setAddressFound(true);
      setIsChecking(false);
    }, 1000);
  };

  return (
    <div className="rounded-lg border border-gray-200 p-4 bg-gray-50">
      <div className="flex items-center gap-2 mb-3">
        <MapPin size={18} className="text-[#1EC0A3]" />
        <h3 className="font-medium text-[#00262F]">Adres opzoeken</h3>
      </div>
      
      <p className="text-sm text-gray-600 mb-4">
        Vul je postcode en huisnummer in om automatisch je adresgegevens in te vullen
      </p>
      
      <form onSubmit={handleCheck} className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-2">
            <Label htmlFor="postcode" className="text-gray-700">Postcode</Label>
            <Input
              id="postcode"
              placeholder="1234 AB"
              value={postcode}
              onChange={(e) => setPostcode(e.target.value)}
              className="border-gray-200 focus-visible:ring-[#1EC0A3] focus-visible:ring-offset-0"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="houseNumber" className="text-gray-700">Huisnummer</Label>
            <Input
              id="houseNumber"
              placeholder="123"
              value={houseNumber}
              onChange={(e) => setHouseNumber(e.target.value)}
              className="border-gray-200 focus-visible:ring-[#1EC0A3] focus-visible:ring-offset-0"
            />
          </div>
        </div>
        
        <div className="flex justify-end">
          <Button 
            type="submit"
            disabled={isChecking || addressFound || !postcode || !houseNumber}
            className={`${
              addressFound 
                ? 'bg-green-100 text-green-700 hover:bg-green-100' 
                : 'bg-[#1EC0A3] hover:bg-[#19a88e]'
            }`}
          >
            {isChecking ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Zoeken...
              </>
            ) : addressFound ? (
              <>
                <Check className="mr-2 h-4 w-4" />
                Adres gevonden
              </>
            ) : (
              'Zoek adres'
            )}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default PostcodeChecker;
