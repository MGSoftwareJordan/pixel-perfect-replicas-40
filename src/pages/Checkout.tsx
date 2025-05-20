import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Check, CreditCard, ShieldCheck, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import Header from '@/components/boxstock/Header';
import Footer from '@/components/boxstock/Footer';
import CheckoutAddons, { Addon } from '@/components/checkout/CheckoutAddons';
import PostcodeChecker from '@/components/checkout/PostcodeChecker';
import DeliveryEstimator from '@/components/checkout/DeliveryEstimator';
import { useToast } from '@/hooks/use-toast';

// Mock cart data - in a real app this would come from context or state management
const cartItems = [
  {
    id: 1,
    name: 'BAPE Color Camo Relaxed Fit Long-Sleeve Tee',
    color: 'Purple',
    size: '46',
    price: 218.00,
    image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/e1ad84d1ff291f4f339854893a1c0bfa59bc73ca?placeholderIfAbsent=true',
    quantity: 1
  }
];

// European countries data
const countries = [
  { value: "nederland", label: "Nederland" },
  { value: "belgie", label: "België" },
  { value: "duitsland", label: "Deutschland" },
  { value: "france", label: "France" },
  { value: "italie", label: "Italia" },
  { value: "espagne", label: "España" },
  { value: "portugal", label: "Portugal" },
  { value: "royaume-uni", label: "United Kingdom" },
  { value: "irlande", label: "Ireland" },
  { value: "danemark", label: "Danmark" },
  { value: "suede", label: "Sverige" },
  { value: "finlande", label: "Suomi" },
  { value: "norvege", label: "Norge" },
  { value: "autriche", label: "Österreich" },
  { value: "suisse", label: "Schweiz" },
  { value: "pologne", label: "Polska" },
  { value: "republique-tcheque", label: "Česká republika" },
  { value: "slovaquie", label: "Slovensko" },
  { value: "hongrie", label: "Magyarország" },
  { value: "roumanie", label: "România" },
  { value: "bulgarie", label: "България" },
  { value: "grece", label: "Ελλάδα" },
  { value: "croatie", label: "Hrvatska" },
  { value: "slovenie", label: "Slovenija" },
  { value: "estonie", label: "Eesti" },
  { value: "lettonie", label: "Latvija" },
  { value: "lituanie", label: "Lietuva" },
  { value: "luxembourg", label: "Luxembourg" },
  { value: "malte", label: "Malta" },
  { value: "chypre", label: "Κύπρος" },
];

// Province data for Netherlands
const provinces = [
  { value: "drenthe", label: "Drenthe" },
  { value: "flevoland", label: "Flevoland" },
  { value: "friesland", label: "Friesland" },
  { value: "gelderland", label: "Gelderland" },
  { value: "groningen", label: "Groningen" },
  { value: "limburg", label: "Limburg" },
  { value: "noord-brabant", label: "Noord-Brabant" },
  { value: "noord-holland", label: "Noord-Holland" },
  { value: "overijssel", label: "Overijssel" },
  { value: "utrecht", label: "Utrecht" },
  { value: "zeeland", label: "Zeeland" },
  { value: "zuid-holland", label: "Zuid-Holland" },
];

// Belgian provinces
const belgiumProvinces = [
  { value: "antwerpen", label: "Antwerpen" },
  { value: "hainaut", label: "Hainaut" },
  { value: "limburg-be", label: "Limburg" },
  { value: "liege", label: "Liège" },
  { value: "luxembourg-be", label: "Luxembourg" },
  { value: "namur", label: "Namur" },
  { value: "oost-vlaanderen", label: "Oost-Vlaanderen" },
  { value: "vlaams-brabant", label: "Vlaams-Brabant" },
  { value: "brabant-wallon", label: "Brabant Wallon" },
  { value: "west-vlaanderen", label: "West-Vlaanderen" },
];

// German states
const germanStates = [
  { value: "baden-wurttemberg", label: "Baden-Württemberg" },
  { value: "bayern", label: "Bayern" },
  { value: "berlin", label: "Berlin" },
  { value: "brandenburg", label: "Brandenburg" },
  { value: "bremen", label: "Bremen" },
  { value: "hamburg", label: "Hamburg" },
  { value: "hessen", label: "Hessen" },
  { value: "mecklenburg-vorpommern", label: "Mecklenburg-Vorpommern" },
  { value: "niedersachsen", label: "Niedersachsen" },
  { value: "nordrhein-westfalen", label: "Nordrhein-Westfalen" },
  { value: "rheinland-pfalz", label: "Rheinland-Pfalz" },
  { value: "saarland", label: "Saarland" },
  { value: "sachsen", label: "Sachsen" },
  { value: "sachsen-anhalt", label: "Sachsen-Anhalt" },
  { value: "schleswig-holstein", label: "Schleswig-Holstein" },
  { value: "thuringen", label: "Thüringen" },
];

type CheckoutFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  province: string;
  address: string;
  city: string;
  postalCode: string;
}

const Checkout = () => {
  const [step, setStep] = useState(1);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [addressLookedUp, setAddressLookedUp] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<CheckoutFormValues>({
    defaultValues: {
      country: "nederland"
    }
  });
  
  const selectedCountry = form.watch('country');
  
  // Show the appropriate regions/provinces based on country selection
  const getRegionOptions = () => {
    switch (selectedCountry) {
      case 'nederland':
        return provinces;
      case 'belgie':
        return belgiumProvinces;
      case 'duitsland':
        return germanStates;
      default:
        return [];
    }
  };
  
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  
  // Calculate shipping costs based on country
  const getShippingCost = () => {
    switch (selectedCountry) {
      case 'nederland':
        return 5.00;
      case 'belgie':
      case 'duitsland':
        return 7.50;
      case 'france':
      case 'italie':
      case 'espagne':
      case 'portugal':
      case 'royaume-uni':
      case 'irlande':
      case 'danemark':
      case 'suede':
      case 'finlande':
      case 'norvege':
      case 'autriche':
      case 'suisse':
      case 'luxembourg':
        return 9.95;
      default:
        return 12.95; // Rest of Europe
    }
  };
  
  const shipping = getShippingCost();
  const serviceCharges = 10.00;
  
  // Calculate addons cost
  const addonCosts = selectedAddons.reduce((total, addonId) => {
    const addonPrices: Record<string, number> = {
      'safeGrailSpray': 20.00,
      'kiwiProtector': 20.00,
      'safegrailLaces': 20.00,
    };
    return total + (addonPrices[addonId] || 0);
  }, 0);
  
  const total = subtotal + shipping + serviceCharges + addonCosts;

  const handleAddonToggle = (addonId: string) => {
    setSelectedAddons(prev => 
      prev.includes(addonId) 
        ? prev.filter(id => id !== addonId)
        : [...prev, addonId]
    );
  };

  const handleAddressFound = (addressData: { 
    street: string; 
    city: string; 
    province: string;
    postalCode: string;
    country: string;
  }) => {
    form.setValue('address', addressData.street);
    form.setValue('city', addressData.city);
    form.setValue('province', addressData.province);
    form.setValue('postalCode', addressData.postalCode);
    setAddressLookedUp(true);
    
    const countryLabels: Record<string, string> = {
      "nederland": "Nederland",
      "belgie": "België",
      "duitsland": "Duitsland"
    };
    
    toast({
      title: selectedCountry === "nederland" ? "Adres gevonden" : 
             selectedCountry === "belgie" ? "Adresse trouvée" :
             selectedCountry === "duitsland" ? "Adresse gefunden" : "Address found",
      description: `${addressData.street}, ${addressData.city}`,
    });
  };

  const onSubmit = (data: CheckoutFormValues) => {
    console.log("Form submitted:", data);
    console.log("Selected addons:", selectedAddons);
    // In a real app, this would process the order and redirect to a payment gateway
    // For now, we'll simulate going to a success page
    setStep(2);
  };
  
  const getProvinceLabel = () => {
    switch (selectedCountry) {
      case 'nederland':
        return 'Provincie';
      case 'belgie':
        return 'Provincie / Province';
      case 'duitsland':
        return 'Bundesland';
      default:
        return 'Region / State';
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      
      <main className="flex-grow container mx-auto max-w-6xl px-4 py-12">
        {step === 1 ? (
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-2 mb-6">
              <Link to="/cart" className="text-[#00262F] hover:text-[#1EC0A3] transition-colors">
                <ArrowLeft size={20} />
              </Link>
              <h1 className="text-2xl font-bold text-[#00262F]">Checkout</h1>
            </div>
            
            {/* Checkout progress indicator */}
            <div className="mb-6 bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-[#1EC0A3] flex items-center justify-center text-white">
                    <Check size={16} />
                  </div>
                  <span className="text-xs mt-1 text-gray-600">Winkelwagen</span>
                </div>
                <div className="flex-grow h-1 mx-2 bg-gray-100 relative">
                  <div className="absolute inset-0 bg-[#1EC0A3] w-full"></div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-[#1EC0A3] flex items-center justify-center text-white">
                    <span className="text-sm">2</span>
                  </div>
                  <span className="text-xs mt-1 font-medium text-[#00262F]">Gegevens</span>
                </div>
                <div className="flex-grow h-1 mx-2 bg-gray-100"></div>
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
                    <span className="text-sm">3</span>
                  </div>
                  <span className="text-xs mt-1 text-gray-400">Betaling</span>
                </div>
                <div className="flex-grow h-1 mx-2 bg-gray-100"></div>
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
                    <span className="text-sm">4</span>
                  </div>
                  <span className="text-xs mt-1 text-gray-400">Bevestiging</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {/* Shipping information form */}
              <div className="lg:col-span-3">
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
                  <h2 className="text-xl font-semibold text-[#00262F] mb-4">Verzendgegevens</h2>
                  
                  <div className="mb-6">
                    <Label htmlFor="country" className="text-gray-700 mb-2 block">Land</Label>
                    <Select 
                      onValueChange={(value) => form.setValue('country', value)} 
                      defaultValue={form.getValues().country}
                    >
                      <SelectTrigger id="country" className="border-gray-200 focus:ring-[#1EC0A3]">
                        <SelectValue placeholder="Selecteer een land" />
                      </SelectTrigger>
                      <SelectContent className="max-h-[300px]">
                        {countries.map((country) => (
                          <SelectItem key={country.value} value={country.value}>
                            {country.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  {/* Delivery date estimator */}
                  <div className="mb-6 p-3 bg-gray-50 rounded-lg border border-gray-100">
                    <DeliveryEstimator country={selectedCountry} />
                  </div>
                  
                  {/* Postcode Checker */}
                  <PostcodeChecker 
                    onAddressFound={handleAddressFound} 
                    selectedCountry={selectedCountry} 
                  />
                  
                  <div className="mt-6">
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="firstName" className="text-gray-700">Voornaam</Label>
                            <Input 
                              id="firstName"
                              placeholder="Vul je voornaam in"
                              className="border-gray-200 focus-visible:ring-[#1EC0A3] focus-visible:ring-offset-0"
                              {...form.register('firstName', { required: true })}
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="lastName" className="text-gray-700">Achternaam</Label>
                            <Input 
                              id="lastName"
                              placeholder="Vul je achternaam in" 
                              className="border-gray-200 focus-visible:ring-[#1EC0A3] focus-visible:ring-offset-0"
                              {...form.register('lastName', { required: true })}
                            />
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="email" className="text-gray-700">E-mail</Label>
                            <Input 
                              id="email"
                              type="email"
                              placeholder="Vul je e-mail in"
                              className="border-gray-200 focus-visible:ring-[#1EC0A3] focus-visible:ring-offset-0"
                              {...form.register('email', { required: true })}
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="phone" className="text-gray-700">Telefoonnummer</Label>
                            <Input 
                              id="phone"
                              placeholder="Vul je telefoonnummer in"
                              className="border-gray-200 focus-visible:ring-[#1EC0A3] focus-visible:ring-offset-0"
                              inputMode="tel"
                              {...form.register('phone', { required: true })}
                            />
                          </div>
                        </div>
                        
                        {/* Region/province selection */}
                        {['nederland', 'belgie', 'duitsland'].includes(selectedCountry) && (
                          <div className="space-y-2">
                            <Label htmlFor="province" className="text-gray-700">{getProvinceLabel()}</Label>
                            <Select 
                              onValueChange={(value) => form.setValue('province', value)} 
                              defaultValue={form.getValues().province}
                            >
                              <SelectTrigger id="province" className="border-gray-200 focus:ring-[#1EC0A3]">
                                <SelectValue placeholder={`Selecteer ${getProvinceLabel().toLowerCase()}`} />
                              </SelectTrigger>
                              <SelectContent>
                                {getRegionOptions().map((region) => (
                                  <SelectItem key={region.value} value={region.value}>
                                    {region.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        )}
                        
                        {/* We keep these hidden fields for form submission */}
                        <div className="hidden">
                          <Input 
                            id="address"
                            {...form.register('address', { required: true })}
                          />
                          <Input 
                            id="city"
                            {...form.register('city', { required: true })}
                          />
                          <Input 
                            id="postalCode"
                            {...form.register('postalCode', { required: true })}
                          />
                        </div>
                        
                        <div className="border-t border-gray-100 pt-6 mt-2">
                          <h3 className="font-medium text-lg mb-4">Extra opties</h3>
                          <CheckoutAddons 
                            selectedAddons={selectedAddons} 
                            onAddonToggle={handleAddonToggle} 
                          />
                        </div>
                        
                        <Button 
                          type="submit" 
                          className="w-full bg-[#00262F] hover:bg-[#001a24] h-11 rounded-lg font-medium mt-4"
                        >
                          Ga verder naar betaling
                        </Button>
                      </form>
                    </Form>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                  <h2 className="text-xl font-semibold text-[#00262F] mb-6">Betaal in alle vertrouwen</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                    <div className="p-4 rounded-lg border border-gray-100">
                      <div className="mx-auto w-10 h-10 rounded-full bg-[#1EC0A3]/10 flex items-center justify-center mb-3">
                        <ShieldCheck className="w-5 h-5 text-[#1EC0A3]" />
                      </div>
                      <h3 className="font-medium text-[#00262F] mb-1">Veilige betaling</h3>
                      <p className="text-sm text-gray-500">Betaal veilig met onze beveiligde betaalproviders</p>
                    </div>
                    
                    <div className="p-4 rounded-lg border border-gray-100">
                      <div className="mx-auto w-10 h-10 rounded-full bg-[#1EC0A3]/10 flex items-center justify-center mb-3">
                        <Truck className="w-5 h-5 text-[#1EC0A3]" />
                      </div>
                      <h3 className="font-medium text-[#00262F] mb-1">Snelle levering</h3>
                      <p className="text-sm text-gray-500">Wij verzenden binnen 24 uur na ontvangst van betaling</p>
                    </div>
                    
                    <div className="p-4 rounded-lg border border-gray-100">
                      <div className="mx-auto w-10 h-10 rounded-full bg-[#1EC0A3]/10 flex items-center justify-center mb-3">
                        <CreditCard className="w-5 h-5 text-[#1EC0A3]" />
                      </div>
                      <h3 className="font-medium text-[#00262F] mb-1">Diverse betaalmethoden</h3>
                      <p className="text-sm text-gray-500">Kies uit verschillende betaalopties</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Order summary */}
              <div className="lg:col-span-2">
                <Card className="border border-gray-100 shadow-sm sticky top-24">
                  <CardHeader className="pb-2 border-b border-gray-100">
                    <CardTitle className="text-xl text-[#00262F]">Je bestelling</CardTitle>
                  </CardHeader>
                  
                  <CardContent className="pt-6 space-y-6">
                    {/* Cart items summary */}
                    <div className="space-y-4">
                      {cartItems.map(item => (
                        <div key={item.id} className="flex gap-4 pb-4 border-b border-gray-100 last:border-0">
                          <div className="w-20 h-20 rounded-md bg-gray-50 overflow-hidden flex-shrink-0 border border-gray-100">
                            <img 
                              src={item.image} 
                              alt={item.name} 
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <div className="flex-grow">
                            <div className="flex justify-between">
                              <div>
                                <h3 className="font-medium text-[#00262F]">{item.name}</h3>
                                <div className="flex gap-2 mt-1">
                                  <span className="text-xs py-0.5 px-1.5 bg-gray-100 rounded-full text-gray-700">
                                    Maat: {item.size}
                                  </span>
                                  <span className="text-xs py-0.5 px-1.5 bg-gray-100 rounded-full text-gray-700">
                                    Aantal: {item.quantity}
                                  </span>
                                </div>
                              </div>
                              <p className="font-medium text-[#00262F]">€{item.price.toFixed(2)}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Price breakdown */}
                    <div className="space-y-3 text-sm pt-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Subtotaal</span>
                        <span className="font-medium">€{subtotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Verzending ({
                          selectedCountry === "nederland" ? "Nederland" :
                          selectedCountry === "belgie" ? "België" :
                          selectedCountry === "duitsland" ? "Duitsland" :
                          "Europa"
                        })</span>
                        <span className="font-medium">€{shipping.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Servicekosten</span>
                        <span className="font-medium">€{serviceCharges.toFixed(2)}</span>
                      </div>
                      
                      {/* Show addon costs if any are selected */}
                      {selectedAddons.length > 0 && (
                        <>
                          {selectedAddons.includes('safeGrailSpray') && (
                            <div className="flex justify-between items-center">
                              <span className="text-gray-600">SafeGrail Protection spray</span>
                              <span className="font-medium">€20.00</span>
                            </div>
                          )}
                          {selectedAddons.includes('kiwiProtector') && (
                            <div className="flex justify-between items-center">
                              <span className="text-gray-600">KIWI Sneaker protector</span>
                              <span className="font-medium">€20.00</span>
                            </div>
                          )}
                          {selectedAddons.includes('safegrailLaces') && (
                            <div className="flex justify-between items-center">
                              <span className="text-gray-600">Safegrail premium laces</span>
                              <span className="font-medium">€20.00</span>
                            </div>
                          )}
                        </>
                      )}
                    </div>
                    
                    <div className="border-t border-gray-100 pt-4">
                      <div className="flex justify-between items-center text-[#00262F]">
                        <span className="font-bold">Totaal</span>
                        <span className="font-bold text-lg">€{total.toFixed(2)}</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1 text-right">Inclusief BTW</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-lg mx-auto text-center py-12 bg-white rounded-xl shadow-sm border border-gray-100 p-8">
            <div className="w-16 h-16 bg-[#1EC0A3]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 text-[#1EC0A3]" />
            </div>
            <h1 className="text-2xl font-bold text-[#00262F] mb-4">Bestelling succesvol geplaatst!</h1>
            <p className="text-gray-600 mb-8">
              Bedankt voor je bestelling. We hebben een bevestigingsmail gestuurd naar het opgegeven e-mailadres.
            </p>
            <div className="space-y-3">
              <Button asChild className="w-full bg-[#1EC0A3] hover:bg-[#19a88e] h-11 rounded-lg font-medium">
                <Link to="/">Ga naar homepage</Link>
              </Button>
              <Button asChild variant="outline" className="w-full border-gray-200 h-11 rounded-lg font-medium">
                <Link to="/account/orders">Bekijk bestellingen</Link>
              </Button>
            </div>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Checkout;
