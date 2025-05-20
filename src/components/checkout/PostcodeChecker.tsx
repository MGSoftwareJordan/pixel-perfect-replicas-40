
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Check, Loader2, MapPin, AlertCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface PostcodeCheckerProps {
  onAddressFound: (addressData: {
    street: string;
    city: string;
    province: string;
    postalCode: string;
  }) => void;
}

const PostcodeChecker: React.FC<PostcodeCheckerProps> = ({ onAddressFound }) => {
  const [postcode, setPostcode] = useState('');
  const [houseNumber, setHouseNumber] = useState('');
  const [isChecking, setIsChecking] = useState(false);
  const [addressFound, setAddressFound] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showManualAddress, setShowManualAddress] = useState(false);
  const { toast } = useToast();
  
  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    
    // Validate inputs
    const postcodeRegex = /^\d{4}\s?[a-zA-Z]{2}$/;
    if (!postcodeRegex.test(postcode)) {
      setError('Voer een geldige postcode in (bijv. 1234 AB)');
      toast({
        title: "Ongeldige postcode",
        description: "Voer een geldige postcode in (bijv. 1234 AB)",
        variant: "destructive"
      });
      return;
    }
    
    if (!houseNumber) {
      setError('Voer een huisnummer in');
      toast({
        title: "Huisnummer ontbreekt",
        description: "Voer een huisnummer in",
        variant: "destructive"
      });
      return;
    }
    
    setIsChecking(true);
    
    // Simulate API call to postcode service
    setTimeout(() => {
      // In a real app, this would be an API call to a postcode service
      // For demo purposes, we'll simulate a successful response
      const formattedPostcode = postcode.replace(/\s/g, '').toUpperCase();
      
      // Dutch address format simulation
      const firstDigit = parseInt(formattedPostcode[0]);
      
      let mockAddressData;
      
      if (firstDigit >= 0 && firstDigit <= 3) {
        mockAddressData = {
          street: 'Herengracht',
          city: 'Amsterdam',
          province: 'noord-holland',
          postalCode: formattedPostcode
        };
      } else if (firstDigit >= 4 && firstDigit <= 6) {
        mockAddressData = {
          street: 'Coolsingel',
          city: 'Rotterdam',
          province: 'zuid-holland',
          postalCode: formattedPostcode
        };
      } else {
        mockAddressData = {
          street: 'Vredenburg',
          city: 'Utrecht',
          province: 'utrecht',
          postalCode: formattedPostcode
        };
      }
      
      onAddressFound(mockAddressData);
      setAddressFound(true);
      setIsChecking(false);
      
      toast({
        title: "Adres gevonden",
        description: `${mockAddressData.street}, ${mockAddressData.city}`,
        variant: "default"
      });
    }, 1000);
  };
  
  const handleReset = () => {
    setAddressFound(false);
    setPostcode('');
    setHouseNumber('');
  };
  
  const toggleManualAddress = () => {
    setShowManualAddress(!showManualAddress);
  };

  return (
    <div className="rounded-lg border border-gray-200 p-5 bg-gray-50">
      <div className="flex items-center gap-2 mb-3">
        <MapPin size={18} className="text-[#1EC0A3]" />
        <h3 className="font-medium text-[#00262F]">Adres opzoeken</h3>
      </div>
      
      <p className="text-sm text-gray-600 mb-4">
        Vul je postcode en huisnummer in om automatisch je adresgegevens in te vullen.
      </p>
      
      <form onSubmit={handleCheck} className="space-y-4">
        <div className="flex gap-3">
          <div className="flex-1">
            <div className="relative">
              <Input
                id="postcode"
                placeholder="1234 AB"
                value={postcode}
                onChange={(e) => setPostcode(e.target.value)}
                className="border-gray-200 focus-visible:ring-[#1EC0A3] focus-visible:ring-offset-0"
                disabled={addressFound}
                inputMode="text"
                pattern="\d{4}\s?[a-zA-Z]{2}"
              />
              <Label htmlFor="postcode" className="absolute -top-2 left-2 px-1 text-xs bg-gray-50 text-gray-600">
                Postcode
              </Label>
            </div>
          </div>
          
          <div className="w-1/3">
            <div className="relative">
              <Input
                id="houseNumber"
                placeholder="123"
                value={houseNumber}
                onChange={(e) => setHouseNumber(e.target.value)}
                className="border-gray-200 focus-visible:ring-[#1EC0A3] focus-visible:ring-offset-0"
                disabled={addressFound}
                inputMode="numeric"
              />
              <Label htmlFor="houseNumber" className="absolute -top-2 left-2 px-1 text-xs bg-gray-50 text-gray-600">
                Huisnummer
              </Label>
            </div>
          </div>
        </div>
        
        {error && (
          <div className="flex items-center gap-2 text-sm text-red-500">
            <AlertCircle size={16} />
            <span>{error}</span>
          </div>
        )}
        
        <div className="flex justify-between">
          <Button
            type="button"
            variant="ghost"
            onClick={toggleManualAddress}
            className="text-sm text-gray-500 px-0 flex items-center gap-1"
            disabled={addressFound}
          >
            {showManualAddress ? (
              <>
                <ChevronUp size={16} />
                Verberg handmatige invoer
              </>
            ) : (
              <>
                <ChevronDown size={16} />
                Handmatig adres invullen
              </>
            )}
          </Button>

          <div className="flex gap-2">
            {addressFound && (
              <Button 
                type="button"
                variant="outline"
                onClick={handleReset}
                className="border-gray-200"
              >
                Opnieuw invullen
              </Button>
            )}
            
            <Button 
              type="submit"
              disabled={isChecking || (addressFound && !error) || !postcode || !houseNumber}
              className={`${
                addressFound && !error
                  ? 'bg-green-100 text-green-700 hover:bg-green-100' 
                  : 'bg-[#1EC0A3] hover:bg-[#19a88e]'
              }`}
            >
              {isChecking ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Zoeken...
                </>
              ) : addressFound && !error ? (
                <>
                  <Check className="mr-2 h-4 w-4" />
                  Adres gevonden
                </>
              ) : (
                'Zoek adres'
              )}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PostcodeChecker;
