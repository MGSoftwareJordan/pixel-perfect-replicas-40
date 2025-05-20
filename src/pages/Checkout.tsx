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
  
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = 10.00;
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
  }) => {
    form.setValue('address', addressData.street);
    form.setValue('city', addressData.city);
    form.setValue('province', addressData.province);
    form.setValue('postalCode', addressData.postalCode);
    setAddressLookedUp(true);
    
    toast({
      title: "Adres gevonden",
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
            
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {/* Shipping information form */}
              <div className="lg:col-span-3">
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
                  <h2 className="text-xl font-semibold text-[#00262F] mb-4">Verzendgegevens</h2>
                  
                  {/* Postcode Checker */}
                  <PostcodeChecker onAddressFound={handleAddressFound} />
                  
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
                              {...form.register('phone', { required: true })}
                            />
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="country" className="text-gray-700">Land</Label>
                            <Select onValueChange={(value) => form.setValue('country', value)} defaultValue="nederland">
                              <SelectTrigger id="country" className="border-gray-200 focus:ring-[#1EC0A3]">
                                <SelectValue placeholder="Selecteer een land" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="nederland">Nederland</SelectItem>
                                <SelectItem value="belgie">België</SelectItem>
                                <SelectItem value="duitsland">Duitsland</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="province" className="text-gray-700">Provincie</Label>
                            <Select 
                              onValueChange={(value) => form.setValue('province', value)} 
                              defaultValue={form.getValues().province}
                            >
                              <SelectTrigger id="province" className="border-gray-200 focus:ring-[#1EC0A3]">
                                <SelectValue placeholder="Selecteer een provincie" />
                              </SelectTrigger>
                              <SelectContent>
                                {provinces.map((province) => (
                                  <SelectItem key={province.value} value={province.value}>
                                    {province.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        
                        {/* We no longer need these visible address fields as they're handled by the PostcodeChecker */}
                        {/* We keep them in the form but they're hidden and auto-filled */}
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
                        <span className="text-gray-600">Verzending</span>
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
