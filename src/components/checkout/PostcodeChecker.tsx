
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Check, Loader2, MapPin, AlertCircle, ChevronDown, Pencil } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
  const [foundAddress, setFoundAddress] = useState({
    street: '',
    city: '',
    province: '',
    postalCode: ''
  });
  const [error, setError] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState(false);
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
      
      setFoundAddress(mockAddressData);
      onAddressFound(mockAddressData);
      setAddressFound(true);
      setIsChecking(false);
      
      toast({
        title: "Adres gevonden",
        description: "We hebben je adres gevonden, controleer of het correct is",
        variant: "default"
      });
    }, 1000);
  };
  
  const handleReset = () => {
    setAddressFound(false);
    setPostcode('');
    setHouseNumber('');
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <div className="rounded-lg border border-gray-200 p-5 bg-gray-50">
      <div className="flex items-center gap-2 mb-3">
        <MapPin size={18} className="text-[#1EC0A3]" />
        <h3 className="font-medium text-[#00262F]">Adres opzoeken</h3>
      </div>
      
      {!addressFound ? (
        <>
          <p className="text-sm text-gray-600 mb-4">
            Vul je postcode en huisnummer in om automatisch je adresgegevens in te vullen.
          </p>
          
          <form onSubmit={handleCheck} className="space-y-4">
            <div className="flex gap-3">
              <div className="flex-1">
                <Label htmlFor="postcode" className="sr-only">Postcode</Label>
                <Input
                  id="postcode"
                  placeholder="Postcode (1234 AB)"
                  value={postcode}
                  onChange={(e) => setPostcode(e.target.value)}
                  className="border-gray-200 focus-visible:ring-[#1EC0A3] focus-visible:ring-offset-0"
                />
              </div>
              
              <div className="w-1/3">
                <Label htmlFor="houseNumber" className="sr-only">Huisnummer</Label>
                <Input
                  id="houseNumber"
                  placeholder="Huisnr."
                  value={houseNumber}
                  onChange={(e) => setHouseNumber(e.target.value)}
                  className="border-gray-200 focus-visible:ring-[#1EC0A3] focus-visible:ring-offset-0"
                />
              </div>
              
              <Button 
                type="submit"
                disabled={isChecking || !postcode || !houseNumber}
                className="bg-[#1EC0A3] hover:bg-[#19a88e] whitespace-nowrap"
              >
                {isChecking ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Zoeken...
                  </>
                ) : (
                  'Zoek adres'
                )}
              </Button>
            </div>
            
            {error && (
              <div className="flex items-center gap-2 text-sm text-red-500">
                <AlertCircle size={16} />
                <span>{error}</span>
              </div>
            )}
          </form>
        </>
      ) : (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm">
              <div className="w-5 h-5 rounded-full bg-[#1EC0A3] text-white flex items-center justify-center">
                <Check size={14} />
              </div>
              <span className="font-medium">Adres gevonden</span>
            </div>
            <div className="flex gap-2">
              {!isEditing ? (
                <Button 
                  type="button" 
                  variant="outline" 
                  size="sm" 
                  onClick={handleEdit}
                  className="border-gray-200 h-8"
                >
                  <Pencil size={14} className="mr-1" />
                  Wijzig
                </Button>
              ) : (
                <Button 
                  type="button" 
                  variant="outline" 
                  size="sm" 
                  onClick={handleReset}
                  className="border-gray-200 h-8"
                >
                  Opnieuw zoeken
                </Button>
              )}
            </div>
          </div>
          
          <div className="bg-white rounded border border-gray-100 p-3">
            <p className="text-sm">
              <span className="font-medium">{foundAddress.street} {houseNumber}</span><br />
              {foundAddress.postalCode} {foundAddress.city}
            </p>
          </div>
          
          {isEditing && (
            <Accordion type="single" collapsible defaultValue="address-fields">
              <AccordionItem value="address-fields" className="border-none">
                <div className="flex justify-between items-center">
                  <AccordionTrigger className="py-2 hover:no-underline">
                    <span className="text-sm font-medium text-[#1EC0A3]">Adresgegevens aanpassen</span>
                  </AccordionTrigger>
                </div>
                <AccordionContent>
                  <div className="grid grid-cols-2 gap-3 pt-1">
                    <div className="space-y-2">
                      <Label htmlFor="street" className="text-gray-700 text-sm">Straat</Label>
                      <Input
                        id="street"
                        defaultValue={foundAddress.street}
                        className="border-gray-200 focus-visible:ring-[#1EC0A3] focus-visible:ring-offset-0 h-9"
                        onChange={(e) => {
                          setFoundAddress(prev => ({...prev, street: e.target.value}));
                          onAddressFound({...foundAddress, street: e.target.value});
                        }}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="editHouseNumber" className="text-gray-700 text-sm">Huisnummer</Label>
                      <Input
                        id="editHouseNumber"
                        defaultValue={houseNumber}
                        className="border-gray-200 focus-visible:ring-[#1EC0A3] focus-visible:ring-offset-0 h-9"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="city" className="text-gray-700 text-sm">Stad</Label>
                      <Input
                        id="city"
                        defaultValue={foundAddress.city}
                        className="border-gray-200 focus-visible:ring-[#1EC0A3] focus-visible:ring-offset-0 h-9"
                        onChange={(e) => {
                          setFoundAddress(prev => ({...prev, city: e.target.value}));
                          onAddressFound({...foundAddress, city: e.target.value});
                        }}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="postalCodeEdit" className="text-gray-700 text-sm">Postcode</Label>
                      <Input
                        id="postalCodeEdit"
                        defaultValue={foundAddress.postalCode}
                        className="border-gray-200 focus-visible:ring-[#1EC0A3] focus-visible:ring-offset-0 h-9"
                        onChange={(e) => {
                          setFoundAddress(prev => ({...prev, postalCode: e.target.value}));
                          onAddressFound({...foundAddress, postalCode: e.target.value});
                        }}
                      />
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          )}
        </div>
      )}
    </div>
  );
};

export default PostcodeChecker;
