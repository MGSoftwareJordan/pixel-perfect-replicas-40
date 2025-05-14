
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { Camera, Upload, X, ArrowLeft, ArrowRight, Plus, Image as ImageIcon, FileImage, FileVideo, Package, CreditCard, Wallet } from 'lucide-react';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from '@/lib/utils';
import { toast } from '@/hooks/use-toast';

type OfferStep = 'type' | 'product' | 'photos' | 'details' | 'price' | 'shipping' | 'payment' | 'review';

const AddOfferFlow = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  const [step, setStep] = useState<OfferStep>('type');
  const [offerType, setOfferType] = useState<'resell' | 'secondhand' | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [sizeType, setSizeType] = useState<'EU'>('EU');
  const [saleMethod, setSaleMethod] = useState<'direct' | 'consignment' | null>(null);
  const [photos, setPhotos] = useState<{ url: string, type: 'image' | 'video' }[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [secondhandCondition, setSecondhandCondition] = useState<string>('excellent');
  const [paymentMethod, setPaymentMethod] = useState<'bank' | null>('bank');
  const [viewPhotoIndex, setViewPhotoIndex] = useState<number | null>(null);

  // Form for offer details
  const form = useForm({
    defaultValues: {
      title: "",
      brand: "",
      size: "",
      price: "",
      condition: "excellent",
      description: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      postalCode: "",
      country: "Nederland",
      bankAccount: "",
      bankName: "",
      companyName: "",
      vatNumber: "",
      kvkNumber: ""
    }
  });

  // Product data (mock)
  const popularProducts = [
    { id: '001', name: 'Jordan XXXIII University Red', brand: 'Air Jordan', price: '€93.00', image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/240df11c1b0446d48308edbcb679fa99a4d7cbe3?placeholderIfAbsent=true' },
    { id: '002', name: 'Nike ACG Air Mada Low Ash Green', brand: 'Nike', price: '€47.00', image: 'https://placehold.co/150x150?text=Nike' },
    { id: '003', name: 'Nike ACG Air Mowabb OG Gravity Purple', brand: 'Nike', price: '€105.00', image: 'https://placehold.co/150x150?text=Nike' },
    { id: '004', name: 'ASICS Gel-Lyte V Social Status', brand: 'ASICS', price: '€179.00', image: 'https://placehold.co/150x150?text=ASICS' }
  ];

  // EU sizes only as requested
  const shoeSizes = [
    '32', '32.5', '33', '33.5', '34', '34.5', '35', '35.5',
    '36', '36.5', '37', '37.5', '38', '38.5', '39', '39.5',
    '40', '40.5', '41', '41.5', '42', '42.5', '43', '43.5',
    '44', '44.5', '45', '45.5', '46', '46.5', '47', '47.5'
  ];

  // Updated categories with cleaner presentation - removed icons
  const categories = [
    { id: 'sneakers', name: 'Sneakers' },
    { id: 'sportswear', name: 'Sportkleding' },
    { id: 'streetwear', name: 'Streetwear' },
    { id: 'accessories', name: 'Accessoires' },
    { id: 'denim', name: 'Denim' },
    { id: 'outerwear', name: 'Jassen' },
    { id: 'tshirts', name: 'T-shirts' },
    { id: 'hoodies', name: 'Hoodies' },
    { id: 'collectibles', name: 'Verzamelobjecten' },
    { id: 'vintage', name: 'Vintage' },
    { id: 'hats', name: 'Petten & Hoeden' },
    { id: 'other', name: 'Overig' }
  ];

  // Brand options for dropdown
  const brands = [
    { value: 'nike', label: 'Nike' },
    { value: 'adidas', label: 'Adidas' },
    { value: 'jordan', label: 'Jordan' },
    { value: 'puma', label: 'Puma' },
    { value: 'reebok', label: 'Reebok' },
    { value: 'new_balance', label: 'New Balance' },
    { value: 'asics', label: 'ASICS' },
    { value: 'vans', label: 'Vans' },
    { value: 'converse', label: 'Converse' },
    { value: 'not_present', label: 'Niet aanwezig' },
    { value: 'other', label: 'Anders (zelf invoeren)' }
  ];

  // Size options based on category
  const getSizesForCategory = (categoryId: string | null) => {
    if (!categoryId) return shoeSizes;

    switch(categoryId) {
      case 'sneakers':
        return shoeSizes;
      case 'sportswear':
      case 'streetwear':
      case 'outerwear':
      case 'tshirts':
      case 'hoodies':
        return ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL'];
      case 'accessories':
      case 'hats':
        return ['One Size', 'XS', 'S', 'M', 'L', 'XL'];
      default:
        return shoeSizes;
    }
  };

  const conditions = [
    { id: 'new', label: 'Nieuw met labels', description: 'Het item is ongedragen en heeft nog de originele labels.' },
    { id: 'like_new', label: 'Zo goed als nieuw', description: 'Het item is ongedragen of nauwelijks gedragen en in perfecte staat.' },
    { id: 'excellent', label: 'Uitstekend', description: 'Het item heeft minimale tekenen van slijtage die nauwelijks zichtbaar zijn.' },
    { id: 'good', label: 'Goed', description: 'Het item heeft lichte tekenen van slijtage.' },
    { id: 'fair', label: 'Redelijk', description: 'Het item heeft zichtbare tekenen van slijtage.' }
  ];

  // Handle different step flows based on offer type
  const getSteps = (): OfferStep[] => {
    if (offerType === 'resell') {
      return ['type', 'product', 'details', 'price', 'shipping', 'payment', 'review'];
    } else {
      return ['type', 'photos', 'details', 'price', 'shipping', 'payment', 'review'];
    }
  };

  // Get current step number for display
  const getCurrentStepNumber = (): number => {
    return getSteps().indexOf(step) + 1;
  };

  // Get total steps
  const getTotalSteps = (): number => {
    return getSteps().length;
  };

  // Handle form steps
  const nextStep = () => {
    const steps = getSteps();
    const currentIndex = steps.indexOf(step);
    
    if (currentIndex < steps.length - 1) {
      setStep(steps[currentIndex + 1]);
    } else {
      // Complete the form
      handleSubmit();
    }
  };

  const prevStep = () => {
    const steps = getSteps();
    const currentIndex = steps.indexOf(step);
    
    if (currentIndex > 0) {
      setStep(steps[currentIndex - 1]);
    }
  };

  const handleSubmit = () => {
    // Submit form data
    toast({
      title: "Aanbieding succesvol aangemaakt",
      description: "Je aanbieding is succesvol aangemaakt en wordt nu beoordeeld door ons team.",
      duration: 5000
    });
    onClose();
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, type: 'image' | 'video') => {
    const files = e.target.files;
    if (files && files.length > 0) {
      // In a real app, we'd upload to server and get URLs
      // For now, create temporary URLs
      const newPhotos = Array.from(files).map(file => ({
        url: URL.createObjectURL(file),
        type
      }));
      
      setPhotos([...photos, ...newPhotos]);
    }
  };

  const removePhoto = (index: number) => {
    const newPhotos = [...photos];
    newPhotos.splice(index, 1);
    setPhotos(newPhotos);
  };

  const renderStepContent = () => {
    switch (step) {
      case 'type':
        return (
          <div className="p-6 overflow-y-auto">
            <h2 className="text-xl font-semibold text-center mb-8">Eenvoudig Verkopen</h2>
            <p className="text-gray-600 mb-8 text-center">
              Verkoop je producten aan ons of via resell of consignatie. We bieden twee opties zodat je kunt kiezen wat het beste bij je verleden past.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div 
                className={cn(
                  "border rounded-xl p-6 cursor-pointer transition-all hover:shadow-md",
                  offerType === 'resell' ? "border-[#1EC0A3] bg-[#1EC0A3]/5" : "border-gray-200"
                )}
                onClick={() => setOfferType('resell')}
              >
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[#1EC0A3]/10 mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="text-[#1EC0A3]" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"/>
                    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
                    <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"/>
                    <path d="M2 7h20"/>
                    <path d="m22 7-5-5"/>
                    <path d="M7 7V5"/>
                    <path d="M17 7V5"/>
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-center mb-2">Resell</h3>
                <p className="text-gray-500 text-center text-sm">
                  Je verkoopt een item dat je ook bij BoxStock kunt kopen. Ideaal voor sneaker collecties.
                </p>
              </div>
              
              <div 
                className={cn(
                  "border rounded-xl p-6 cursor-pointer transition-all hover:shadow-md",
                  offerType === 'secondhand' ? "border-[#1EC0A3] bg-[#1EC0A3]/5" : "border-gray-200"
                )}
                onClick={() => setOfferType('secondhand')}
              >
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[#1EC0A3]/10 mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="text-[#1EC0A3]" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/>
                    <line x1="7" y1="7" x2="7.01" y2="7"/>
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-center mb-2">Tweedehands</h3>
                <p className="text-gray-500 text-center text-sm">
                  Je verkoopt een gebruikt item dat je al in bezit hebt. Perfect voor items die je niet meer draagt.
                </p>
              </div>
            </div>
          </div>
        );

      case 'product':
        return (
          <div className="p-6 overflow-y-auto">
            <h2 className="text-xl font-semibold mb-6">Kies een item om te verkopen</h2>
            
            <div className="relative mb-6">
              <Input 
                type="text"
                placeholder="Zoek een product..." 
                className="pl-10"
              />
              <svg xmlns="http://www.w3.org/2000/svg" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"/>
                <line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
            </div>
            
            <h3 className="text-sm font-medium text-gray-500 mb-4">Populaire producten</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[400px] overflow-y-auto p-1">
              {popularProducts.map(product => (
                <div 
                  key={product.id}
                  className={cn(
                    "border rounded-lg p-3 flex items-center gap-3 cursor-pointer transition-all",
                    selectedProduct === product.id ? "border-[#1EC0A3] bg-[#1EC0A3]/5" : "border-gray-200 hover:border-gray-300"
                  )}
                  onClick={() => setSelectedProduct(product.id)}
                >
                  <div className="w-16 h-16 bg-gray-100 rounded overflow-hidden">
                    <AspectRatio ratio={1/1}>
                      <img src={product.image} alt={product.name} className="object-cover w-full h-full" />
                    </AspectRatio>
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-gray-500">{product.brand}</div>
                    <div className="font-medium">{product.name}</div>
                    <div className="text-sm font-semibold mt-1">{product.price}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'photos':
        return (
          <div className="p-6 overflow-y-auto">
            <h2 className="text-xl font-semibold mb-6">Foto's en video's</h2>
            <p className="text-gray-600 mb-4">
              Maak duidelijke foto's van je item vanuit verschillende hoeken. Goede foto's verhogen je kans op verkoop!
            </p>
            
            {/* Tabs for photos/videos upload */}
            <Tabs defaultValue="photos" className="w-full mb-6">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="photos">Foto's</TabsTrigger>
                <TabsTrigger value="videos">Video's</TabsTrigger>
              </TabsList>
              <TabsContent value="photos" className="mt-4">
                <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <FileImage className="w-10 h-10 mb-3 text-gray-400" />
                    <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Klik om foto's te uploaden</span></p>
                    <p className="text-xs text-gray-500">PNG, JPG (MAX. 5 MB)</p>
                  </div>
                  <input 
                    type="file" 
                    className="hidden" 
                    accept="image/*" 
                    multiple
                    onChange={(e) => handleFileUpload(e, 'image')} 
                  />
                </label>
              </TabsContent>
              <TabsContent value="videos" className="mt-4">
                <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <FileVideo className="w-10 h-10 mb-3 text-gray-400" />
                    <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Klik om een video te uploaden</span></p>
                    <p className="text-xs text-gray-500">MP4, MOV (MAX. 30 MB)</p>
                  </div>
                  <input 
                    type="file" 
                    className="hidden" 
                    accept="video/*" 
                    onChange={(e) => handleFileUpload(e, 'video')} 
                  />
                </label>
              </TabsContent>
            </Tabs>
            
            {/* Photo gallery */}
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 mb-6">
              {photos.map((photo, index) => (
                <div 
                  key={index} 
                  className="relative aspect-square rounded-md overflow-hidden border border-gray-200 group cursor-pointer"
                  onClick={() => setViewPhotoIndex(index)}
                >
                  {photo.type === 'image' ? (
                    <img 
                      src={photo.url} 
                      alt={`Upload ${index}`} 
                      className="w-full h-full object-contain" 
                    />
                  ) : (
                    <video src={photo.url} className="w-full h-full object-cover" />
                  )}
                  <button 
                    className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={(e) => {
                      e.stopPropagation();
                      removePhoto(index);
                    }}
                  >
                    <X size={16} />
                  </button>
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-xs p-1 text-center">
                    {photo.type === 'image' ? 'Foto' : 'Video'}
                  </div>
                </div>
              ))}
              
              {photos.length < 8 && (
                <label className="aspect-square rounded-md border-2 border-dashed border-gray-300 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors">
                  <input
                    type="file"
                    className="hidden"
                    accept="image/*,video/*"
                    onChange={(e) => {
                      const fileType = e.target.files?.[0]?.type.startsWith('video/') ? 'video' : 'image';
                      handleFileUpload(e, fileType);
                    }}
                  />
                  <Plus className="h-8 w-8 text-gray-400 mb-2" />
                  <span className="text-sm text-gray-500">Toevoegen</span>
                </label>
              )}
            </div>
            
            {/* Photo zoom modal */}
            {viewPhotoIndex !== null && photos[viewPhotoIndex] && (
              <Dialog open={viewPhotoIndex !== null} onOpenChange={() => setViewPhotoIndex(null)}>
                <DialogContent className="sm:max-w-[80vw] md:max-w-[70vw] lg:max-w-[60vw] p-0">
                  <div className="relative">
                    {photos[viewPhotoIndex].type === 'image' ? (
                      <img 
                        src={photos[viewPhotoIndex].url} 
                        alt={`Photo ${viewPhotoIndex}`} 
                        className="w-full h-auto max-h-[80vh] object-contain" 
                      />
                    ) : (
                      <video 
                        src={photos[viewPhotoIndex].url} 
                        controls 
                        className="w-full h-auto max-h-[80vh]"
                      />
                    )}
                    <div className="absolute top-2 right-2">
                      <Button 
                        variant="outline" 
                        size="icon" 
                        className="rounded-full bg-white" 
                        onClick={() => setViewPhotoIndex(null)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <DialogFooter className="p-4">
                    <div className="flex justify-between w-full items-center">
                      <Button 
                        variant="outline" 
                        disabled={viewPhotoIndex === 0} 
                        onClick={() => setViewPhotoIndex(Math.max(0, (viewPhotoIndex || 0) - 1))}
                      >
                        Vorige
                      </Button>
                      <div className="text-sm text-gray-500">
                        {viewPhotoIndex + 1} van {photos.length}
                      </div>
                      <Button 
                        variant="outline" 
                        disabled={viewPhotoIndex === photos.length - 1} 
                        onClick={() => setViewPhotoIndex(Math.min(photos.length - 1, (viewPhotoIndex || 0) + 1))}
                      >
                        Volgende
                      </Button>
                    </div>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            )}
            
            <div className="text-center text-sm text-gray-500">
              <p>Voeg minimaal 3 foto's toe van je product</p>
              <p className="mt-1">Maximaal 8 foto's en video's toegestaan</p>
            </div>

            {photos.length > 0 && (
              <div className="mt-6 bg-blue-50 p-4 rounded-lg">
                <h3 className="text-base font-medium mb-3 text-blue-700">Fotografietips:</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm text-blue-600">
                  <li>Neem foto's in goed, natuurlijk licht</li>
                  <li>Toon het item van verschillende kanten</li>
                  <li>Fotografeer eventuele defecten of slijtage</li>
                  <li>Voeg een foto toe van labels of logo's voor authenticiteit</li>
                </ul>
              </div>
            )}
            
            {/* Fixed floating button for easier upload after scrolling */}
            {photos.length >= 3 && (
              <div className="fixed bottom-20 right-6 z-10">
                <Button 
                  className="rounded-full w-12 h-12 shadow-lg bg-[#1EC0A3] hover:bg-[#18a88f]"
                  onClick={() => document.getElementById('additional-upload')?.click()}
                >
                  <Plus className="h-6 w-6" />
                </Button>
                <input
                  id="additional-upload"
                  type="file"
                  className="hidden"
                  accept="image/*,video/*"
                  onChange={(e) => {
                    const fileType = e.target.files?.[0]?.type.startsWith('video/') ? 'video' : 'image';
                    handleFileUpload(e, fileType);
                  }}
                />
              </div>
            )}
          </div>
        );

      case 'details':
        return (
          <div className="p-6 overflow-y-auto">
            <h2 className="text-xl font-semibold mb-6">Product informatie</h2>
            
            {offerType === 'secondhand' ? (
              <div className="space-y-5">
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2">Categorie</label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {categories.map(category => (
                      <div 
                        key={category.id}
                        className={cn(
                          "border rounded-lg p-3 text-center cursor-pointer transition-all",
                          selectedCategory === category.id ? "border-[#1EC0A3] bg-[#1EC0A3]/5" : "border-gray-200 hover:border-gray-300"
                        )}
                        onClick={() => setSelectedCategory(category.id)}
                      >
                        <div className="font-medium text-sm">{category.name}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Titel</label>
                  <Input 
                    placeholder="Bijv. Nike Air Force 1 Low White" 
                    {...form.register('title')}
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Een goede titel bevat merk, model en kleur
                  </p>
                </div>

                <div className="flex gap-4">
                  <div className="flex-1">
                    <label className="block text-sm font-medium mb-2">Merk</label>
                    <Select {...form.register('brand')}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Selecteer een merk" />
                      </SelectTrigger>
                      <SelectContent>
                        {brands.map(brand => (
                          <SelectItem key={brand.value} value={brand.value}>{brand.label}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm font-medium mb-2">Maat</label>
                    <div className="flex gap-2">
                      <Select {...form.register('size')}>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Selecteer maat" />
                        </SelectTrigger>
                        <SelectContent>
                          {getSizesForCategory(selectedCategory).map(size => (
                            <SelectItem key={size} value={size}>{size}</SelectItem>
                          ))}
                          <SelectItem value="custom">Anders (zelf invoeren)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Wat is de conditie van je item?</label>
                  <div className="space-y-3">
                    {conditions.map(condition => (
                      <div 
                        key={condition.id}
                        className={cn(
                          "border rounded-lg p-3 cursor-pointer transition-all",
                          secondhandCondition === condition.id ? "border-[#1EC0A3] bg-[#1EC0A3]/5" : "border-gray-200 hover:border-gray-300"
                        )}
                        onClick={() => setSecondhandCondition(condition.id)}
                      >
                        <div className="flex items-start">
                          <div className="mr-3 mt-0.5 h-5 w-5 rounded-full border-2 flex items-center justify-center">
                            {secondhandCondition === condition.id && <div className="h-2.5 w-2.5 rounded-full bg-[#1EC0A3]"></div>}
                          </div>
                          <div>
                            <h4 className="font-medium">{condition.label}</h4>
                            <p className="text-sm text-gray-500">{condition.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Beschrijving</label>
                  <Textarea 
                    placeholder="Beschrijf je item: materiaal, pasvorm, wanneer gekocht, etc."
                    className="min-h-[100px]"
                    {...form.register('description')}
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Een goede beschrijving zorgt voor minder vragen en snellere verkoop
                  </p>
                </div>
              </div>
            ) : (
              // Resell product info form with improved size selector
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-3">Maat</label>
                  
                  <div className="grid grid-cols-5 gap-2 max-h-[210px] overflow-y-auto p-1">
                    {shoeSizes.map((size) => (
                      <Button
                        key={size}
                        variant="outline"
                        className={cn(
                          "h-12 text-center",
                          selectedSize === size ? "border-[#1EC0A3] bg-[#1EC0A3]/5 text-[#1EC0A3]" : ""
                        )}
                        onClick={() => setSelectedSize(size)}
                      >
                        {size}
                      </Button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Conditie</label>
                  <Select defaultValue="new">
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Selecteer conditie" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="new">Nieuw met doos</SelectItem>
                      <SelectItem value="new-no-box">Nieuw zonder doos</SelectItem>
                      <SelectItem value="like-new">Zo goed als nieuw</SelectItem>
                      <SelectItem value="used">Gedragen</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Extra opmerkingen</label>
                  <Textarea 
                    placeholder="Optioneel: voeg extra informatie toe over je product"
                    className="min-h-[80px]"
                  />
                </div>
              </div>
            )}
          </div>
        );

      case 'price':
        return (
          <div className="p-6 overflow-y-auto">
            <h2 className="text-xl font-semibold mb-6">Stel je prijs in</h2>
            
            <div className="space-y-6">
              {offerType === 'secondhand' ? (
                <>
                  <div>
                    <label className="block text-sm font-medium mb-1">Vraagprijs</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2">€</span>
                      <Input 
                        type="number" 
                        className="pl-8" 
                        placeholder="0.00" 
                        {...form.register('price')}
                      />
                    </div>
                  </div>
                  
                  <div className="p-4 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg shadow-sm">
                    <h3 className="font-medium mb-2">Prijssuggestie</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Vergelijkbare items worden verkocht voor €72 - €98
                    </p>
                    
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-gray-500">€0</span>
                      <div className="h-2 flex-1 bg-gray-200 rounded-full relative">
                        <div className="absolute h-5 w-5 bg-[#1EC0A3] rounded-full top-1/2 left-[80%] transform -translate-y-1/2 border-2 border-white shadow-md"></div>
                      </div>
                      <span className="text-gray-500">€200</span>
                    </div>
                  </div>
                  
                  <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Verkoopprijs</span>
                      <span className="font-bold">€85.00</span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-500 pb-2 border-b">
                      <span>Servicekosten (10%)</span>
                      <span>- €8.50</span>
                    </div>
                    <div className="flex justify-between pt-2 font-medium">
                      <span>Je ontvangt</span>
                      <span className="text-[#1EC0A3]">€76.50</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-3 italic">
                      Let op: Verzendkosten worden betaald door de koper en zijn niet inbegrepen in deze berekening.
                    </p>
                  </div>

                  <div className="flex items-center bg-blue-50 p-4 rounded-lg">
                    <div className="mr-3 text-blue-500 text-xl">💡</div>
                    <div className="text-sm text-blue-700">
                      Tip: Items met een competitieve prijs worden gemiddeld 40% sneller verkocht!
                    </div>
                  </div>
                </>
              ) : (
                // Resell price form
                <>
                  <div>
                    <label className="block text-sm font-medium mb-1">Maat</label>
                    <div className="p-3 bg-gray-50 border border-gray-200 rounded-md">
                      {sizeType} {selectedSize || '42'}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Goedkoopste prijs online</label>
                    <div className="p-3 bg-gray-50 border border-gray-200 rounded-md">
                      €93
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Jouw vraagprijs</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2">€</span>
                      <Input type="number" className="pl-8" placeholder="0.00" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Aantal</label>
                    <div className="flex border border-gray-200 rounded-md overflow-hidden">
                      <button className="px-3 py-2 bg-gray-50 border-r border-gray-200">-</button>
                      <input type="number" className="w-full text-center border-none" defaultValue={1} min={1} />
                      <button className="px-3 py-2 bg-gray-50 border-l border-gray-200">+</button>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Uitbetaling</label>
                    <div className="p-3 bg-gray-50 border border-gray-200 rounded-md">
                      €87.42
                    </div>
                  </div>
                  
                  <div className="p-4 bg-gray-50 rounded-md flex justify-between">
                    <span>Totale uitbetaling</span>
                    <span className="font-bold">€87.42</span>
                  </div>
                </>
              )}
            </div>
          </div>
        );

      case 'shipping':
        return (
          <div className="p-6 overflow-y-auto">
            <h2 className="text-xl font-semibold mb-6">Verzending</h2>
            
            {offerType === 'secondhand' ? (
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium mb-3">Verzendmethode</h3>
                  <div className="space-y-3">
                    <div className="border rounded-lg p-3 flex items-center cursor-pointer border-[#1EC0A3] bg-[#1EC0A3]/5">
                      <div className="mr-3 h-5 w-5 rounded-full border-2 flex items-center justify-center">
                        <div className="h-2.5 w-2.5 rounded-full bg-[#1EC0A3]"></div>
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center">
                          <h4 className="font-medium">BoxStock Verzending</h4>
                          <span className="text-sm font-medium">€3.95</span>
                        </div>
                        <p className="text-sm text-gray-500">Pakketbezorging via PostNL</p>
                      </div>
                    </div>
                    
                    <div className="border rounded-lg p-3 flex items-center cursor-pointer border-gray-200">
                      <div className="mr-3 h-5 w-5 rounded-full border-2 flex items-center justify-center">
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center">
                          <h4 className="font-medium">Eigen verzending</h4>
                          <span className="text-sm font-medium">Door jou bepaald</span>
                        </div>
                        <p className="text-sm text-gray-500">Jij regelt de verzending en kosten</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h3 className="font-medium mb-3">Verzendgegevens</h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Voornaam</label>
                      <Input type="text" {...form.register('firstName')} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Achternaam</label>
                      <Input type="text" {...form.register('lastName')} />
                    </div>
                  </div>
                  
                  <div className="mt-3">
                    <label className="block text-sm font-medium mb-1">Adres</label>
                    <Input type="text" className="mb-2" {...form.register('address')} />
                  </div>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-3">
                    <div className="sm:col-span-1">
                      <label className="block text-sm font-medium mb-1">Postcode</label>
                      <Input type="text" {...form.register('postalCode')} />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-sm font-medium mb-1">Stad</label>
                      <Input type="text" {...form.register('city')} />
                    </div>
                  </div>
                  
                  <div className="mt-3">
                    <label className="block text-sm font-medium mb-1">Land</label>
                    <select className="w-full p-2.5 border border-gray-200 rounded-md bg-white">
                      <option value="Nederland">Nederland</option>
                      <option value="België">België</option>
                    </select>
                  </div>
                </div>
              </div>
            ) : (
              // Resell shipping options
              <div>
                <h3 className="text-base font-medium mb-3">Verkoopmethode</h3>
                <div className="space-y-5">
                  <div 
                    className={cn(
                      "border rounded-xl p-5 cursor-pointer transition-all hover:shadow-md",
                      saleMethod === 'direct' ? "border-[#1EC0A3] bg-[#1EC0A3]/5" : "border-gray-200"
                    )}
                    onClick={() => setSaleMethod('direct')}
                  >
                    <div className="flex items-center">
                      <div className="mr-4 h-6 w-6 rounded-full border-2 flex items-center justify-center">
                        {saleMethod === 'direct' && <div className="h-3 w-3 rounded-full bg-[#1EC0A3]"></div>}
                      </div>
                      <div>
                        <h3 className="text-lg font-medium">Doorverkopen</h3>
                        <p className="text-gray-500 text-sm mt-1">
                          Verzend je product nadat het verkocht is.
                        </p>
                      </div>
                    </div>

                    {saleMethod === 'direct' && (
                      <div className="pl-10 mt-4 text-sm">
                        <p className="text-gray-600">
                          Je ontvangt een e-mail wanneer je item verkocht is. Verzend het dan binnen 2 werkdagen.
                        </p>
                      </div>
                    )}
                  </div>
                  
                  <div 
                    className={cn(
                      "border rounded-xl p-5 cursor-pointer transition-all hover:shadow-md",
                      saleMethod === 'consignment' ? "border-[#1EC0A3] bg-[#1EC0A3]/5" : "border-gray-200"
                    )}
                    onClick={() => setSaleMethod('consignment')}
                  >
                    <div className="flex items-center">
                      <div className="mr-4 h-6 w-6 rounded-full border-2 flex items-center justify-center">
                        {saleMethod === 'consignment' && <div className="h-3 w-3 rounded-full bg-[#1EC0A3]"></div>}
                      </div>
                      <div>
                        <h3 className="text-lg font-medium">Consigneren</h3>
                        <p className="text-gray-500 text-sm mt-1">
                          Verzend je product voor verkoop naar ons magazijn.
                        </p>
                      </div>
                    </div>

                    {saleMethod === 'consignment' && (
                      <div className="pl-10 mt-4 space-y-3">
                        <div>
                          <label className="block text-sm font-medium">Aantal dagen</label>
                          <select className="w-full p-2.5 border border-gray-200 rounded-md bg-white mt-1">
                            <option value="30">30 Dagen</option>
                            <option value="60">60 Dagen</option>
                            <option value="90">90 Dagen</option>
                            <option value="120">120 Dagen</option>
                          </select>
                        </div>

                        <p className="text-sm text-gray-600">
                          Wij slaan je item op en verkopen het voor je. Na de gekozen periode krijg je je item terug 
                          als het niet verkocht is.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Verzendgegevens for resell flow */}
                <div className="p-4 border border-gray-200 rounded-lg mt-6">
                  <h3 className="font-medium mb-3">Verzendgegevens</h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Voornaam</label>
                      <Input type="text" {...form.register('firstName')} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Achternaam</label>
                      <Input type="text" {...form.register('lastName')} />
                    </div>
                  </div>
                  
                  <div className="mt-3">
                    <label className="block text-sm font-medium mb-1">Adres</label>
                    <Input type="text" className="mb-2" {...form.register('address')} />
                  </div>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-3">
                    <div className="sm:col-span-1">
                      <label className="block text-sm font-medium mb-1">Postcode</label>
                      <Input type="text" {...form.register('postalCode')} />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-sm font-medium mb-1">Stad</label>
                      <Input type="text" {...form.register('city')} />
                    </div>
                  </div>
                  
                  <div className="mt-3">
                    <label className="block text-sm font-medium mb-1">Land</label>
                    <select className="w-full p-2.5 border border-gray-200 rounded-md bg-white">
                      <option value="Nederland">Nederland</option>
                      <option value="België">België</option>
                    </select>
                  </div>
                </div>
              </div>
            )}
          </div>
        );

      case 'payment':
        return (
          <div className="p-6 overflow-y-auto">
            <h2 className="text-xl font-semibold mb-6">Ontvang je geld</h2>
            
            <div className="space-y-5">
              <p className="text-gray-600">
                Selecteer hoe je je geld wilt ontvangen wanneer je item is verkocht.
              </p>
              
              {/* Only showing bank transfer as payment method as requested */}
              <div 
                className="border rounded-lg p-4 cursor-pointer transition-all border-[#1EC0A3] bg-[#1EC0A3]/5"
              >
                <div className="flex items-center">
                  <div className="mr-3 h-5 w-5 rounded-full border-2 flex items-center justify-center">
                    <div className="h-2.5 w-2.5 rounded-full bg-[#1EC0A3]"></div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center">
                      <CreditCard className="h-5 w-5 mr-2 text-gray-600" />
                      <h4 className="font-medium">Bankoverschrijving</h4>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">Ontvang je geld via bankoverschrijving</p>
                  </div>
                </div>
                
                <div className="mt-3 pl-8 space-y-3">
                  <div>
                    <label className="block text-sm font-medium mb-1">IBAN Rekeningnummer</label>
                    <Input type="text" placeholder="NL00 INGB 0000 0000 00" {...form.register('bankAccount')} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Naam bank</label>
                    <Input type="text" placeholder="Bijv. ING, ABN AMRO" {...form.register('bankName')} />
                  </div>
                </div>
              </div>

              {/* Factuurgegevens for both resell and secondhand flows */}
              <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
                <h3 className="font-medium mb-2">Factuurgegevens</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Deze gegevens worden gebruikt voor de factuur die bij je uitbetaling wordt gevoegd.
                </p>
                
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium mb-1">Bedrijfsnaam (optioneel)</label>
                    <Input 
                      type="text" 
                      placeholder="Bijv. jouw bedrijfsnaam" 
                      {...form.register('companyName')}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">BTW nummer (optioneel)</label>
                    <Input 
                      type="text" 
                      placeholder="Bijv. NL123456789B01" 
                      {...form.register('vatNumber')}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">KVK nummer (optioneel)</label>
                    <Input 
                      type="text" 
                      placeholder="Bijv. 12345678" 
                      {...form.register('kvkNumber')}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'review':
        return (
          <div className="p-6 overflow-y-auto">
            <h2 className="text-xl font-semibold mb-6">Controleer je aanbieding</h2>
            
            <div className="border rounded-lg overflow-hidden mb-6">
              <div className="flex items-center p-4 border-b">
                <div className="w-16 h-16 bg-gray-100 rounded overflow-hidden">
                  <AspectRatio ratio={1/1}>
                    <img 
                      src={offerType === 'resell' && selectedProduct ? popularProducts.find(p => p.id === selectedProduct)?.image : 'https://placehold.co/150x150?text=No+Image'} 
                      alt="Product" 
                      className="object-cover w-full h-full" 
                    />
                  </AspectRatio>
                </div>
                <div className="ml-4">
                  <div className="font-medium">
                    {offerType === 'resell' && selectedProduct 
                      ? popularProducts.find(p => p.id === selectedProduct)?.name
                      : form.getValues('title') || "Jouw product"}
                  </div>
                  <div className="text-sm text-gray-500">
                    {offerType === 'resell' && selectedProduct
                      ? popularProducts.find(p => p.id === selectedProduct)?.brand
                      : form.getValues('brand') || "Eigen merk"}
                  </div>
                  <div className="text-sm mt-1">
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                      offerType === 'resell' 
                        ? 'bg-purple-100 text-purple-600'
                        : 'bg-blue-100 text-blue-600'
                    }`}>
                      {offerType === 'resell' ? 'Resell' : 'Tweedehands'}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 border-b">
                <div>
                  <div className="text-sm text-gray-500">Maat</div>
                  <div>{selectedSize || form.getValues('size') || 'EU 42'}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Conditie</div>
                  <div>{secondhandCondition === 'new' ? 'Nieuw met labels' : 
                        secondhandCondition === 'like_new' ? 'Zo goed als nieuw' : 
                        secondhandCondition === 'excellent' ? 'Uitstekend' : 
                        secondhandCondition === 'good' ? 'Goed' : 'Redelijk'}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Prijs</div>
                  <div className="font-semibold">€{form.getValues('price') || '93.00'}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Verzending</div>
                  <div>{offerType === 'secondhand' ? 'BoxStock Verzending' : 
                        saleMethod === 'direct' ? 'Doorverkopen' : 'Consigneren'}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Uitbetaalmethode</div>
                  <div>{'Bankoverschrijving'}</div>
                </div>
              </div>
              
              {/* Only show photos for secondhand, not resell */}
              {offerType === 'secondhand' && (
                <div className="p-4">
                  <div className="text-sm text-gray-500 mb-2">Foto's</div>
                  <div className="flex flex-wrap gap-2">
                    {photos.slice(0, 4).map((photo, index) => (
                      <div key={index} className="w-16 h-16 rounded overflow-hidden">
                        {photo.type === 'image' ? (
                          <img src={photo.url} alt={`Upload ${index}`} className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                            <FileVideo className="h-5 w-5 text-gray-400" />
                          </div>
                        )}
                      </div>
                    ))}
                    {photos.length > 4 && (
                      <div className="w-16 h-16 bg-gray-100 rounded flex items-center justify-center">
                        <span className="text-gray-500">+{photos.length - 4}</span>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-4">Algemene voorwaarden</h3>
              <p className="text-sm text-gray-500 mb-4">
                Door op "Afronden" te klikken, ga je akkoord met onze algemene voorwaarden en bevestig je dat alle informatie die je hebt verstrekt juist is.
              </p>
              <div className="flex items-start">
                <input type="checkbox" id="termsAgreement" className="mt-1" />
                <label htmlFor="termsAgreement" className="ml-2 text-sm">
                  Ik heb de algemene voorwaarden gelezen en ga hiermee akkoord
                </label>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[95%] md:max-w-[85%] lg:max-w-[75%] xl:max-w-[65%] p-0 max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <DialogHeader className="p-6 border-b">
          <DialogTitle className="flex items-center justify-between">
            <div className="flex items-center">
              <Button variant="ghost" size="icon" onClick={prevStep} disabled={step === 'type'} className="mr-2">
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <span>Nieuwe aanbieding</span>
            </div>
            <div className="text-sm text-gray-500">
              {getCurrentStepNumber()}/{getTotalSteps()}
            </div>
          </DialogTitle>
          {/* Progress circles */}
          <div className="flex justify-center items-center gap-1 mt-4">
            {getSteps().map((s, i) => (
              <div 
                key={i}
                className={`h-2 w-2 rounded-full transition-colors ${
                  step === s ? 'bg-[#1EC0A3]' : 
                  getSteps().indexOf(s) < getSteps().indexOf(step) ? 
                  'bg-[#1EC0A3]/50' : 'bg-gray-200'
                }`}
              />
            ))}
          </div>
        </DialogHeader>
        
        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          {renderStepContent()}
        </div>
        
        {/* Footer - always visible and fixed at bottom */}
        <DialogFooter className="p-6 border-t mt-auto bg-white">
          <div className="w-full flex justify-between">
            <Button variant="outline" onClick={onClose}>
              Annuleren
            </Button>
            <div>
              <Button variant="outline" onClick={prevStep} className="mr-2" disabled={step === 'type'}>
                Vorige
              </Button>
              <Button 
                className="bg-[#1EC0A3] hover:bg-[#18a88f]"
                onClick={nextStep}
                disabled={
                  (step === 'type' && !offerType) ||
                  (step === 'product' && !selectedProduct && offerType === 'resell') ||
                  (step === 'photos' && photos.length === 0 && offerType === 'secondhand') ||
                  (step === 'details' && offerType === 'secondhand' && !selectedCategory) ||
                  (step === 'shipping' && offerType === 'resell' && !saleMethod)
                }
              >
                {step === 'review' ? 'Afronden' : 'Volgende'}
                {step !== 'review' && <ArrowRight className="ml-1 h-4 w-4" />}
              </Button>
            </div>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddOfferFlow;
