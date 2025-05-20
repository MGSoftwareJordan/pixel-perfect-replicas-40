
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Check, Loader2, MapPin, AlertCircle, Pencil } from 'lucide-react';
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
    country: string;
  }) => void;
  selectedCountry: string;
}

const PostcodeChecker: React.FC<PostcodeCheckerProps> = ({ onAddressFound, selectedCountry }) => {
  const [postcode, setPostcode] = useState('');
  const [houseNumber, setHouseNumber] = useState('');
  const [isChecking, setIsChecking] = useState(false);
  const [addressFound, setAddressFound] = useState(false);
  const [foundAddress, setFoundAddress] = useState({
    street: '',
    city: '',
    province: '',
    postalCode: '',
    country: selectedCountry
  });
  const [error, setError] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const { toast } = useToast();
  
  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    
    if (selectedCountry === "nederland") {
      // Dutch postal code validation
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
    } else if (selectedCountry === "duitsland") {
      // German postal code validation
      const postcodeRegex = /^\d{5}$/;
      if (!postcodeRegex.test(postcode)) {
        setError('Bitte geben Sie eine gültige Postleitzahl ein (z.B. 10115)');
        toast({
          title: "Ungültige Postleitzahl",
          description: "Bitte geben Sie eine gültige Postleitzahl ein (z.B. 10115)",
          variant: "destructive"
        });
        return;
      }
    } else if (selectedCountry === "belgie") {
      // Belgian postal code validation
      const postcodeRegex = /^\d{4}$/;
      if (!postcodeRegex.test(postcode)) {
        setError('Entrez un code postal valide (ex. 1000)');
        toast({
          title: "Code postal invalide",
          description: "Entrez un code postal valide (ex. 1000)",
          variant: "destructive"
        });
        return;
      }
    } else {
      // Generic European validation
      if (!postcode) {
        setError('Please enter a valid postal code');
        toast({
          title: "Invalid postal code",
          description: "Please enter a valid postal code for your country",
          variant: "destructive"
        });
        return;
      }
    }
    
    if (!houseNumber && ['nederland', 'belgie', 'duitsland'].includes(selectedCountry)) {
      const errorMessage = selectedCountry === 'duitsland' 
        ? 'Bitte geben Sie eine Hausnummer ein' 
        : 'Voer een huisnummer in';
      
      setError(errorMessage);
      toast({
        title: selectedCountry === 'duitsland' ? "Hausnummer fehlt" : "Huisnummer ontbreekt",
        description: errorMessage,
        variant: "destructive"
      });
      return;
    }
    
    setIsChecking(true);
    
    // Simulate API call to postcode service
    setTimeout(() => {
      // In a real app, this would be an API call to a postcode service
      // This would need to be adapted for different countries
      let mockAddressData;
      const formattedPostcode = postcode.replace(/\s/g, '').toUpperCase();
      
      switch (selectedCountry) {
        case "nederland":
          const firstDigit = parseInt(formattedPostcode[0]);
          if (firstDigit >= 0 && firstDigit <= 3) {
            mockAddressData = {
              street: 'Herengracht',
              city: 'Amsterdam',
              province: 'noord-holland',
              postalCode: formattedPostcode,
              country: selectedCountry
            };
          } else if (firstDigit >= 4 && firstDigit <= 6) {
            mockAddressData = {
              street: 'Coolsingel',
              city: 'Rotterdam',
              province: 'zuid-holland',
              postalCode: formattedPostcode,
              country: selectedCountry
            };
          } else {
            mockAddressData = {
              street: 'Vredenburg',
              city: 'Utrecht',
              province: 'utrecht',
              postalCode: formattedPostcode,
              country: selectedCountry
            };
          }
          break;
        case "belgie":
          if (parseInt(formattedPostcode) >= 1000 && parseInt(formattedPostcode) <= 1299) {
            mockAddressData = {
              street: 'Rue de la Loi',
              city: 'Brussels',
              province: 'brussels',
              postalCode: formattedPostcode,
              country: selectedCountry
            };
          } else {
            mockAddressData = {
              street: 'Meir',
              city: 'Antwerp',
              province: 'antwerp',
              postalCode: formattedPostcode,
              country: selectedCountry
            };
          }
          break;
        case "duitsland":
          if (parseInt(formattedPostcode) >= 10000 && parseInt(formattedPostcode) <= 14999) {
            mockAddressData = {
              street: 'Unter den Linden',
              city: 'Berlin',
              province: 'berlin',
              postalCode: formattedPostcode,
              country: selectedCountry
            };
          } else {
            mockAddressData = {
              street: 'Maximilianstraße',
              city: 'Munich',
              province: 'bayern',
              postalCode: formattedPostcode,
              country: selectedCountry
            };
          }
          break;
        default:
          // For other European countries, we just capture the postal code
          // and leave the other fields for manual entry
          mockAddressData = {
            street: '',
            city: '',
            province: '',
            postalCode: formattedPostcode,
            country: selectedCountry
          };
      }
      
      setFoundAddress(mockAddressData);
      onAddressFound(mockAddressData);
      setAddressFound(true);
      setIsChecking(false);
      
      const successMessage = {
        "nederland": "We hebben je adres gevonden, controleer of het correct is",
        "belgie": "Nous avons trouvé votre adresse, vérifiez si elle est correcte",
        "duitsland": "Wir haben Ihre Adresse gefunden, überprüfen Sie, ob sie korrekt ist",
        "default": "We found your address, please check if it's correct"
      };
      
      toast({
        title: selectedCountry === "nederland" ? "Adres gevonden" : 
               selectedCountry === "belgie" ? "Adresse trouvée" : 
               selectedCountry === "duitsland" ? "Adresse gefunden" : "Address found",
        description: successMessage[selectedCountry as keyof typeof successMessage] || successMessage.default,
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

  const getPlaceholderText = () => {
    switch (selectedCountry) {
      case "nederland":
        return "Postcode (1234 AB)";
      case "belgie":
        return "Code postal (1000)";
      case "duitsland":
        return "Postleitzahl (10115)";
      default:
        return "Postal code";
    }
  };

  const getHouseNumberPlaceholder = () => {
    switch (selectedCountry) {
      case "nederland":
        return "Huisnr.";
      case "belgie":
        return "Nr.";
      case "duitsland":
        return "Hausnr.";
      default:
        return "No.";
    }
  };

  const getSearchButtonText = () => {
    switch (selectedCountry) {
      case "nederland":
        return "Zoek adres";
      case "belgie":
        return "Rechercher";
      case "duitsland":
        return "Adresse suchen";
      default:
        return "Search address";
    }
  };

  // For countries without house number in postal code search
  const showHouseNumber = ['nederland', 'belgie', 'duitsland'].includes(selectedCountry);

  return (
    <div className="rounded-lg border border-gray-200 p-5 bg-gray-50">
      <div className="flex items-center gap-2 mb-3">
        <MapPin size={18} className="text-[#1EC0A3]" />
        <h3 className="font-medium text-[#00262F]">
          {selectedCountry === "nederland" ? "Adres opzoeken" :
           selectedCountry === "belgie" ? "Rechercher une adresse" :
           selectedCountry === "duitsland" ? "Adresse suchen" : "Find address"}
        </h3>
      </div>
      
      {!addressFound ? (
        <>
          <p className="text-sm text-gray-600 mb-4">
            {selectedCountry === "nederland" ? "Vul je postcode en huisnummer in om automatisch je adresgegevens in te vullen." :
             selectedCountry === "belgie" ? "Entrez votre code postal et numéro de maison pour remplir automatiquement vos données d'adresse." :
             selectedCountry === "duitsland" ? "Geben Sie Ihre Postleitzahl und Hausnummer ein, um Ihre Adressdaten automatisch auszufüllen." :
             "Enter your postal code to help fill in your address details."}
          </p>
          
          <form onSubmit={handleCheck} className="space-y-4">
            <div className="flex gap-3">
              <div className="flex-1">
                <Label htmlFor="postcode" className="sr-only">Postcode</Label>
                <Input
                  id="postcode"
                  placeholder={getPlaceholderText()}
                  value={postcode}
                  onChange={(e) => setPostcode(e.target.value)}
                  className="border-gray-200 focus-visible:ring-[#1EC0A3] focus-visible:ring-offset-0"
                />
              </div>
              
              {showHouseNumber && (
                <div className="w-1/3">
                  <Label htmlFor="houseNumber" className="sr-only">Huisnummer</Label>
                  <Input
                    id="houseNumber"
                    placeholder={getHouseNumberPlaceholder()}
                    value={houseNumber}
                    onChange={(e) => setHouseNumber(e.target.value)}
                    className="border-gray-200 focus-visible:ring-[#1EC0A3] focus-visible:ring-offset-0"
                  />
                </div>
              )}
              
              <Button 
                type="submit"
                disabled={isChecking || !postcode || (showHouseNumber && !houseNumber)}
                className="bg-[#1EC0A3] hover:bg-[#19a88e] whitespace-nowrap"
              >
                {isChecking ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    {selectedCountry === "nederland" ? "Zoeken..." :
                     selectedCountry === "belgie" ? "Recherche..." :
                     selectedCountry === "duitsland" ? "Suchen..." : "Searching..."}
                  </>
                ) : (
                  getSearchButtonText()
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
              <span className="font-medium">
                {selectedCountry === "nederland" ? "Adres gevonden" :
                 selectedCountry === "belgie" ? "Adresse trouvée" :
                 selectedCountry === "duitsland" ? "Adresse gefunden" : "Address found"}
              </span>
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
                  {selectedCountry === "nederland" ? "Wijzig" :
                   selectedCountry === "belgie" ? "Modifier" :
                   selectedCountry === "duitsland" ? "Ändern" : "Edit"}
                </Button>
              ) : (
                <Button 
                  type="button" 
                  variant="outline" 
                  size="sm" 
                  onClick={handleReset}
                  className="border-gray-200 h-8"
                >
                  {selectedCountry === "nederland" ? "Opnieuw zoeken" :
                   selectedCountry === "belgie" ? "Nouvelle recherche" :
                   selectedCountry === "duitsland" ? "Erneut suchen" : "Search again"}
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
                    <span className="text-sm font-medium text-[#1EC0A3]">
                      {selectedCountry === "nederland" ? "Adresgegevens aanpassen" :
                       selectedCountry === "belgie" ? "Modifier les détails de l'adresse" :
                       selectedCountry === "duitsland" ? "Adressdaten anpassen" : "Edit address details"}
                    </span>
                  </AccordionTrigger>
                </div>
                <AccordionContent>
                  <div className="grid grid-cols-2 gap-3 pt-1">
                    <div className="space-y-2">
                      <Label htmlFor="street" className="text-gray-700 text-sm">
                        {selectedCountry === "nederland" ? "Straat" :
                         selectedCountry === "belgie" ? "Rue" :
                         selectedCountry === "duitsland" ? "Straße" : "Street"}
                      </Label>
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
                      <Label htmlFor="editHouseNumber" className="text-gray-700 text-sm">
                        {selectedCountry === "nederland" ? "Huisnummer" :
                         selectedCountry === "belgie" ? "Numéro" :
                         selectedCountry === "duitsland" ? "Hausnummer" : "House number"}
                      </Label>
                      <Input
                        id="editHouseNumber"
                        defaultValue={houseNumber}
                        className="border-gray-200 focus-visible:ring-[#1EC0A3] focus-visible:ring-offset-0 h-9"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="city" className="text-gray-700 text-sm">
                        {selectedCountry === "nederland" ? "Stad" :
                         selectedCountry === "belgie" ? "Ville" :
                         selectedCountry === "duitsland" ? "Stadt" : "City"}
                      </Label>
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
                      <Label htmlFor="postalCodeEdit" className="text-gray-700 text-sm">
                        {selectedCountry === "nederland" ? "Postcode" :
                         selectedCountry === "belgie" ? "Code postal" :
                         selectedCountry === "duitsland" ? "Postleitzahl" : "Postal code"}
                      </Label>
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
