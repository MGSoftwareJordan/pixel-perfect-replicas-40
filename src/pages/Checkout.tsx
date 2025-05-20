
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
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
  const form = useForm<CheckoutFormValues>();
  
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = 10.00;
  const serviceCharges = 10.00;
  const total = subtotal + shipping + serviceCharges;

  const onSubmit = (data: CheckoutFormValues) => {
    console.log("Form submitted:", data);
    // In a real app, this would process the order and redirect to a payment gateway
    // For now, we'll simulate going to a success page
    setStep(2);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      
      <main className="flex-grow container mx-auto max-w-6xl px-4 py-8">
        {step === 1 ? (
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Shipping information form */}
            <div className="lg:col-span-3">
              <h1 className="text-2xl font-bold text-[#00262F] mb-6">Verzendgegevens</h1>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">Voornaam</Label>
                      <Input 
                        id="firstName"
                        placeholder="Vul je voornaam in"
                        {...form.register('firstName', { required: true })}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Achternaam</Label>
                      <Input 
                        id="lastName"
                        placeholder="Vul je achternaam in" 
                        {...form.register('lastName', { required: true })}
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">E-mail</Label>
                      <Input 
                        id="email"
                        type="email"
                        placeholder="Vul je e-mail in" 
                        {...form.register('email', { required: true })}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefoonnummer</Label>
                      <Input 
                        id="phone"
                        placeholder="Vul je telefoonnummer in" 
                        {...form.register('phone', { required: true })}
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="country">Land</Label>
                      <Select onValueChange={(value) => form.setValue('country', value)} defaultValue="nederland">
                        <SelectTrigger id="country">
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
                      <Label htmlFor="province">Provincie</Label>
                      <Input 
                        id="province"
                        placeholder="Vul je provincie in" 
                        {...form.register('province', { required: true })}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="address">Adres</Label>
                    <Input 
                      id="address"
                      placeholder="Vul je adres in" 
                      {...form.register('address', { required: true })}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">Stad</Label>
                      <Input 
                        id="city"
                        placeholder="Vul je stad in" 
                        {...form.register('city', { required: true })}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="postalCode">Postcode</Label>
                      <Input 
                        id="postalCode"
                        placeholder="Vul je postcode in" 
                        {...form.register('postalCode', { required: true })}
                      />
                    </div>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-[#00262F] hover:bg-[#001a24]"
                  >
                    Doorgaan
                  </Button>
                </form>
              </Form>
              
              <div className="mt-8">
                <h2 className="text-xl font-semibold text-[#00262F] mb-4">Snelle toevoegingen</h2>
                {/* This would be where quick add options could go */}
              </div>
              
              <div className="mt-8">
                <h2 className="text-xl font-semibold text-[#00262F] mb-4">Controleer je bestelling</h2>
                {/* Order verification section */}
              </div>
            </div>
            
            {/* Order summary */}
            <div className="lg:col-span-2">
              <div className="border border-gray-200 rounded-lg p-6 sticky top-24">
                <h2 className="text-xl font-semibold text-[#00262F] mb-6">In je winkelmand</h2>
                
                {/* Cart items summary */}
                <div className="space-y-4 mb-6">
                  {cartItems.map(item => (
                    <div key={item.id} className="flex gap-4">
                      <div className="w-20 h-20 rounded-md bg-gray-100 overflow-hidden flex-shrink-0">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-medium text-sm">{item.name}</h3>
                        <p className="text-sm text-gray-600">
                          Maat: {item.size}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Price breakdown */}
                <div className="space-y-3 text-sm mb-6">
                  <div className="flex justify-between">
                    <span>Subtotaal</span>
                    <span>€{subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Verzending</span>
                    <span>€{shipping.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Servicekosten</span>
                    <span>€{serviceCharges.toFixed(2)}</span>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-4 mb-6">
                  <div className="flex justify-between text-base font-semibold">
                    <span>Totaal</span>
                    <span>€{total.toFixed(2)}</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Inclusief BTW</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-lg mx-auto text-center py-12">
            <h1 className="text-2xl font-bold text-[#00262F] mb-4">Bestelling geplaatst!</h1>
            <p className="mb-6">Dank je wel voor je bestelling. We hebben een bevestigingsmail gestuurd.</p>
            <Button asChild className="bg-[#1EC0A3] hover:bg-[#19a88e]">
              <Link to="/">Terug naar homepage</Link>
            </Button>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Checkout;
