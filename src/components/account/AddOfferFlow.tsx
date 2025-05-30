import React, { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { Camera, Upload, X, ArrowLeft, ArrowRight, Plus, Image as ImageIcon, FileImage, FileVideo, Package, CreditCard, Wallet, Check, Edit, Search, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from '@/lib/utils';
import { toast } from '@/hooks/use-toast';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command";

// Simplified flow steps
type OfferStep = 'start' | 'photos' | 'details' | 'price' | 'review';

// Mock products data for search feature
const MOCK_PRODUCTS = [
  { id: 1, name: "Nike Dunk Low Panda", image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7", brand: "Nike", price: "€149.99" },
  { id: 2, name: "Jordan 1 Retro High OG", image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b", brand: "Jordan", price: "€189.99" },
  { id: 3, name: "Adidas Yeezy Boost 350", image: "https://images.unsplash.com/photo-1518770660439-4636190af475", brand: "Adidas", price: "€220.00" },
  { id: 4, name: "New Balance 550", image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6", brand: "New Balance", price: "€120.00" },
  { id: 5, name: "Puma Suede Classic", image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d", brand: "Puma", price: "€80.00" },
  { id: 6, name: "Converse Chuck Taylor", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158", brand: "Converse", price: "€70.00" },
  { id: 7, name: "Nike Air Force 1", image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a", brand: "Nike", price: "€110.00" },
  { id: 8, name: "Jordan 4 Retro", image: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3", brand: "Jordan", price: "€210.00" },
  { id: 9, name: "Adidas Stan Smith", image: "https://images.unsplash.com/photo-1543508282-6319a3e2621f", brand: "Adidas", price: "€90.00" },
  { id: 10, name: "Vans Old Skool", image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77", brand: "Vans", price: "€65.00" },
];

const AddOfferFlow = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  const [step, setStep] = useState<OfferStep>('start');
  const [offerType, setOfferType] = useState<'resell' | 'secondhand'>('secondhand');
  const [selectedSize, setSelectedSize] = useState<string | null>('42');
  const [sizeType, setSizeType] = useState<'EU'>('EU');
  const [photos, setPhotos] = useState<{ url: string, type: 'image' | 'video' }[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>('sneakers');
  const [selectedCategoryName, setSelectedCategoryName] = useState<string>('Sneakers');
  const [secondhandCondition, setSecondhandCondition] = useState<string>('excellent');
  const [smartPricing, setSmartPricing] = useState<boolean>(false);
  const [viewPhotoIndex, setViewPhotoIndex] = useState<number | null>(null);
  const [openCategoryPopover, setOpenCategoryPopover] = useState(false);
  const [openBrandPopover, setOpenBrandPopover] = useState(false);
  const [customBrand, setCustomBrand] = useState<string>('');
  const [tipsSectionExpanded, setTipsSectionExpanded] = useState(false);
  const [isGeneratingDescription, setIsGeneratingDescription] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [productSearchQuery, setProductSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<typeof MOCK_PRODUCTS[0] | null>(null);
  
  // Form for offer details
  const form = useForm({
    defaultValues: {
      title: "",
      brand: "nike",
      size: "",
      price: "85",
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
    },
    // Live validation mode
    mode: "onChange"
  });
  
  // Filter products based on search query
  const filteredProducts = MOCK_PRODUCTS.filter((product) => 
    product.name.toLowerCase().includes(productSearchQuery.toLowerCase()) ||
    product.brand.toLowerCase().includes(productSearchQuery.toLowerCase())
  );

  // Effect to set initial category name based on default selectedCategory
  useEffect(() => {
    if (selectedCategory) {
      const categoryName = categories.find(c => c.id === selectedCategory)?.name || 'Sneakers';
      setSelectedCategoryName(categoryName);
    }
  }, []);

  // Update form when a product is selected
  useEffect(() => {
    if (selectedProduct) {
      form.setValue('title', selectedProduct.name);
      form.setValue('brand', selectedProduct.brand.toLowerCase());
      
      // Set other fields that might come from the product data
      const suggestedPrice = selectedProduct.price.replace('€', '');
      form.setValue('price', suggestedPrice);
    }
  }, [selectedProduct, form]);

  // EU sizes only
  const shoeSizes = [
    '32', '32.5', '33', '33.5', '34', '34.5', '35', '35.5',
    '36', '36.5', '37', '37.5', '38', '38.5', '39', '39.5',
    '40', '40.5', '41', '41.5', '42', '42.5', '43', '43.5',
    '44', '44.5', '45', '45.5', '46', '46.5', '47', '47.5'
  ];

  // Updated categories with cleaner presentation - aligned with BoxStock categories
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

  // Brand options for dropdown with type-ahead
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
    { value: 'supreme', label: 'Supreme' },
    { value: 'palace', label: 'Palace' },
    { value: 'stussy', label: 'Stüssy' },
    { value: 'the_north_face', label: 'The North Face' },
    { value: 'carhartt', label: 'Carhartt' },
    { value: 'champion', label: 'Champion' },
    { value: 'not_present', label: 'Niet aanwezig' },
    { value: 'other', label: 'Anders (zelf invoeren)' }
  ];

  // Add a placeholder image to ensure photo preview works
  useEffect(() => {
    if (photos.length === 0 && offerType === 'secondhand') {
      setPhotos([
        { 
          url: 'https://placehold.co/400x400?text=Sneaker+Example', 
          type: 'image' 
        },
        { 
          url: 'https://placehold.co/400x400?text=Side+View', 
          type: 'image' 
        },
        { 
          url: 'https://placehold.co/400x400?text=Back+View', 
          type: 'image' 
        }
      ]);
    }
  }, [offerType, photos.length]);

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

  // Get steps and total step count
  const getSteps = (): OfferStep[] => {
    return offerType === 'secondhand' ? ['start', 'photos', 'details', 'price', 'review'] : ['start', 'details', 'price', 'review'];
  };

  // Get step name for display
  const getStepDisplayName = (stepName: OfferStep): string => {
    switch(stepName) {
      case 'start': return 'Type';
      case 'photos': return 'Foto\'s';
      case 'details': return 'Details';
      case 'price': return 'Prijs';
      case 'review': return 'Overzicht';
      default: return '';
    }
  };

  // Get current step number for display
  const getCurrentStepNumber = (): number => {
    return getSteps().indexOf(step);
  };

  // Get total steps
  const getTotalSteps = (): number => {
    return getSteps().length - 1; // Subtract 1 as 'start' isn't counted in the progress bar
  };
  
  // Generate product description based on selected product and photos (mock AI functionality)
  const generateProductDescription = () => {
    setIsGeneratingDescription(true);
    
    // Simulate AI processing time
    setTimeout(() => {
      let description = "";
      
      if (selectedProduct) {
        if (selectedProduct.brand === "Nike") {
          description = `Originele ${selectedProduct.name} in uitstekende staat. Deze schoenen zijn nauwelijks gedragen en zien er nieuw uit. De Nike klassieker is perfect voor dagelijks gebruik. Verzending mogelijk.`;
        } else if (selectedProduct.brand === "Adidas") {
          description = `Authentieke ${selectedProduct.name} in zeer goede conditie. Deze Adidas sneakers hebben minimale gebruikssporen en zijn nog lang niet versleten. Alle originele details aanwezig. Verzending mogelijk.`;
        } else if (selectedProduct.brand === "Jordan") {
          description = `Echte ${selectedProduct.name} in top staat. Deze iconische Jordan sneakers zijn weinig gedragen en hebben alle originele details. Perfect voor verzamelaars. Verzending mogelijk.`;
        } else {
          description = `${selectedProduct.name} in uitstekende conditie. Nauwelijks gedragen en in zeer goede staat. Originele doos en labels aanwezig. Verzending mogelijk.`;
        }
      } else {
        description = "Dit product is in uitstekende staat. Nauwelijks gebruikt en ziet er nog als nieuw uit. Alle originele onderdelen zijn aanwezig. Voor vragen kunt u altijd contact opnemen. Verzending mogelijk.";
      }
      
      form.setValue('description', description);
      setIsGeneratingDescription(false);
      
      toast({
        title: "Beschrijving gegenereerd",
        description: "We hebben een beschrijving gegenereerd op basis van je product.",
      });
    }, 1500);
  };

  // Handle form steps
  const nextStep = () => {
    const steps = getSteps();
    const currentIndex = steps.indexOf(step);
    
    if (currentIndex < steps.length - 1) {
      // If we're moving from start to the next step, set the appropriate next step based on offerType
      if (step === 'start') {
        setStep(offerType === 'secondhand' ? 'photos' : 'details');
      } else {
        setStep(steps[currentIndex + 1]);
      }
      // Track progress event (mock)
      console.log(`Step completed: ${step}, Time spent: X seconds`);
    } else {
      // Complete the form
      handleSubmit();
    }
  };

  const prevStep = () => {
    const steps = getSteps();
    const currentIndex = steps.indexOf(step);
    
    if (currentIndex > 0) {
      // If we're on 'details' and coming back, we might need to go to photos or start
      if (step === 'details' && offerType === 'resell') {
        setStep('start');
      } else {
        setStep(steps[currentIndex - 1]);
      }
    }
  };

  const handleSubmit = () => {
    // Validate terms
    if (!acceptedTerms) {
      toast({
        title: "Accepteer de voorwaarden",
        description: "Je moet akkoord gaan met onze voorwaarden om door te gaan.",
        variant: "destructive"
      });
      return;
    }
    
    // Submit form data
    toast({
      title: "Aanbieding succesvol aangemaakt",
      description: "Je aanbieding is succesvol aangemaakt en wordt nu beoordeeld door ons team.",
      duration: 5000
    });
    onClose();
  };

  // Image handling functions with improved compression
  const compressImage = useCallback(async (file: File): Promise<File> => {
    // Simple check if the file is already small enough
    if (file.size < 1024 * 1024) {
      return file; // Return original if less than 1MB
    }
    
    // In a real app, we would compress the image here
    // For demo purposes, we'll just log that we're compressing
    console.log(`Compressing image: ${file.name}`);
    return file;
  }, []);

  const handleFileUpload = useCallback(async (e: React.ChangeEvent<HTMLInputElement>, type: 'image' | 'video') => {
    const files = e.target.files;
    if (files && files.length > 0) {
      // Process each file with compression for images
      const processedFiles = await Promise.all(
        Array.from(files).map(async (file) => {
          if (type === 'image') {
            const compressedFile = await compressImage(file);
            return {
              url: URL.createObjectURL(compressedFile),
              type: 'image' as const
            };
          } else {
            return {
              url: URL.createObjectURL(file),
              type: 'video' as const
            };
          }
        })
      );
      
      setPhotos([...photos, ...processedFiles]);
    }
  }, [photos, compressImage]);

  const removePhoto = (index: number) => {
    const newPhotos = [...photos];
    newPhotos.splice(index, 1);
    setPhotos(newPhotos);
  };
  
  const editStep = (targetStep: OfferStep) => {
    setStep(targetStep);
  };

  const handleCategorySelect = (id: string) => {
    setSelectedCategory(id);
    const categoryName = categories.find(c => c.id === id)?.name || '';
    setSelectedCategoryName(categoryName);
    setOpenCategoryPopover(false);
  };
  
  const handleBrandSelect = (value: string) => {
    if (value === 'other') {
      // If 'other', prepare for custom input
      form.setValue('brand', '');
      setCustomBrand('');
    } else {
      form.setValue('brand', value);
      setCustomBrand('');
    }
    setOpenBrandPopover(false);
  };
  
  // Reorder photos with drag and drop (placeholder for future implementation)
  const reorderPhotos = (startIndex: number, endIndex: number) => {
    const result = Array.from(photos);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    setPhotos(result);
  };

  const renderStepContent = () => {
    switch (step) {
      case 'start':
        return (
          <div className="p-6 overflow-y-auto">
            <h2 className="text-xl font-semibold mb-6">Wat wil je verkopen?</h2>
            
            <div className="space-y-5">
              <p className="text-gray-600 mb-6">
                Kies het type product dat je wilt aanbieden. Dit bepaalt welke informatie we van je vragen.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div 
                  className={cn(
                    "border rounded-lg p-6 cursor-pointer transition-all hover:shadow-md",
                    offerType === 'secondhand' ? "border-[#1EC0A3] bg-[#1EC0A3]/5" : "border-gray-200"
                  )}
                  onClick={() => setOfferType('secondhand')}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-3 h-6 w-6 rounded-full border-2 flex items-center justify-center">
                      {offerType === 'secondhand' && <div className="h-3 w-3 rounded-full bg-[#1EC0A3]"></div>}
                    </div>
                    <h3 className="font-medium text-lg mb-2">Tweedehands</h3>
                    <p className="text-sm text-gray-500">
                      Verkoop jouw gedragen items. Upload foto's van het daadwerkelijke item.
                    </p>
                  </div>
                </div>
                
                <div 
                  className={cn(
                    "border rounded-lg p-6 cursor-pointer transition-all hover:shadow-md",
                    offerType === 'resell' ? "border-[#1EC0A3] bg-[#1EC0A3]/5" : "border-gray-200"
                  )}
                  onClick={() => setOfferType('resell')}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-3 h-6 w-6 rounded-full border-2 flex items-center justify-center">
                      {offerType === 'resell' && <div className="h-3 w-3 rounded-full bg-[#1EC0A3]"></div>}
                    </div>
                    <h3 className="font-medium text-lg mb-2">Resell</h3>
                    <p className="text-sm text-gray-500">
                      Verkoop nieuwe items met doos en labels. We gebruiken onze eigen productfoto's.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'photos':
        return (
          <div className="p-6 overflow-y-auto">
            <h2 className="text-xl font-semibold mb-4">Foto's en video's</h2>
            <p className="text-gray-600 mb-4">
              Maak duidelijke foto's van je item vanuit verschillende hoeken. Goede foto's verhogen je kans op verkoop!
            </p>
            
            {/* Status checklist */}
            <div className="flex items-center gap-2 mb-4 p-3 bg-gray-50 rounded-lg">
              <div className={`flex items-center ${photos.length >= 3 ? 'text-green-600' : 'text-gray-400'}`}>
                {photos.length >= 3 ? <Check className="h-5 w-5 mr-1" /> : <span className="h-5 w-5 mr-1 flex items-center justify-center border rounded-full text-xs">1</span>}
                <span className={photos.length >= 3 ? 'font-medium' : ''}>Minimaal 3 foto's</span>
              </div>
              <span className="text-gray-300">•</span>
              <div className={`flex items-center ${photos.filter(p => p.type === 'image').length >= 1 ? 'text-green-600' : 'text-gray-400'}`}>
                {photos.filter(p => p.type === 'image').length >= 1 ? <Check className="h-5 w-5 mr-1" /> : <span className="h-5 w-5 mr-1 flex items-center justify-center border rounded-full text-xs">2</span>}
                <span className={photos.filter(p => p.type === 'image').length >= 1 ? 'font-medium' : ''}>Hoofdfoto</span>
              </div>
            </div>
            
            {/* Tabs for photos/videos upload */}
            <Tabs defaultValue="photos" className="w-full mb-5">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="photos">Foto's</TabsTrigger>
                <TabsTrigger value="videos">Video's</TabsTrigger>
              </TabsList>
              <TabsContent value="photos" className="mt-4">
                <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <FileImage className="w-10 h-10 mb-3 text-gray-400" />
                    <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Klik om foto's te uploaden</span></p>
                    <p className="text-xs text-gray-500">PNG, JPG (MAX. 20 MB)</p>
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
            
            {/* Photo gallery - Vinted style grid with preview */}
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
                      className="w-full h-full object-cover" 
                    />
                  ) : (
                    <div className="relative w-full h-full">
                      <video src={photo.url} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                        <FileVideo className="h-8 w-8 text-white" />
                      </div>
                    </div>
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
              
              {photos.length < 20 && (
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
            
            {/* Photo zoom modal with improved controls */}
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
              <p className="mt-1">Maximaal 20 foto's en video's toegestaan</p>
            </div>

            {/* Collapsible tips section */}
            <div className="mt-6">
              <div 
                className="flex items-center justify-between p-4 bg-blue-50 rounded-t-lg cursor-pointer"
                onClick={() => setTipsSectionExpanded(!tipsSectionExpanded)}
              >
                <h3 className="text-base font-medium text-blue-700">Fotografietips:</h3>
                {tipsSectionExpanded ? (
                  <ChevronUp className="h-5 w-5 text-blue-700" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-blue-700" />
                )}
              </div>
              
              {tipsSectionExpanded && (
                <div className="p-4 bg-blue-50 rounded-b-lg">
                  <ul className="list-disc pl-5 space-y-1 text-sm text-blue-600">
                    <li>Neem foto's in goed, natuurlijk licht</li>
                    <li>Toon het item van verschillende kanten</li>
                    <li>Fotografeer eventuele defecten of slijtage</li>
                    <li>Voeg een foto toe van labels of logo's voor authenticiteit</li>
                  </ul>
                </div>
              )}
            </div>
            
            {/* Fixed floating button for easier upload after scrolling */}
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
          </div>
        );

      case 'details':
        return (
          <div className="p-6 overflow-y-auto">
            <h2 className="text-xl font-semibold mb-6">Product informatie</h2>
            
            <div className="space-y-5">
              {/* Product search - NEW SECTION */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Zoek product</label>
                <div className="space-y-3">
                  <div className="flex gap-2">
                    <div className="relative flex-1">
                      <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        type="text"
                        placeholder="Zoek op productnaam, merk..."
                        className="pl-9"
                        value={productSearchQuery}
                        onChange={(e) => setProductSearchQuery(e.target.value)}
                      />
                    </div>
                  </div>
                  
                  {productSearchQuery.length > 0 && (
                    <div className="bg-white rounded-lg border p-3">
                      {filteredProducts.length > 0 ? (
                        <>
                          <h4 className="text-sm font-medium mb-2">Gevonden producten:</h4>
                          <div className="grid grid-cols-3 gap-2">
                            {filteredProducts.slice(0, 6).map((product) => (
                              <div 
                                key={product.id} 
                                className={`cursor-pointer rounded-lg overflow-hidden border transition-all ${selectedProduct?.id === product.id ? 'border-[#1EC0A3] ring-1 ring-[#1EC0A3]' : 'border-gray-200 hover:border-gray-300'}`}
                                onClick={() => setSelectedProduct(product)}
                              >
                                <div className="aspect-square overflow-hidden">
                                  <img 
                                    src={product.image} 
                                    alt={product.name} 
                                    className="object-cover w-full h-full"
                                  />
                                </div>
                                <div className="p-2">
                                  <p className="text-xs truncate font-medium">{product.name}</p>
                                  <div className="flex justify-between items-center mt-1">
                                    <span className="text-xs text-gray-500">{product.brand}</span>
                                    <span className="text-xs font-medium">{product.price}</span>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                          
                          {filteredProducts.length > 6 && (
                            <p className="text-xs text-gray-500 text-center mt-3">
                              + {filteredProducts.length - 6} meer resultaten
                            </p>
                          )}
                        </>
                      ) : (
                        <p className="text-sm text-gray-500 text-center py-4">
                          Geen producten gevonden voor "{productSearchQuery}"
                        </p>
                      )}
                    </div>
                  )}
                  
                  {selectedProduct && (
                    <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                      <div className="h-12 w-12 rounded overflow-hidden">
                        <img src={selectedProduct.image} alt={selectedProduct.name} className="h-full w-full object-cover" />
                      </div>
                      <div className="ml-3 flex-1">
                        <p className="font-medium">{selectedProduct.name}</p>
                        <p className="text-xs text-gray-500">{selectedProduct.brand} • {selectedProduct.price}</p>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="h-8"
                        onClick={() => {
                          setSelectedProduct(null);
                          form.setValue('title', '');
                        }}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  )}
                  
                  {(!selectedProduct && productSearchQuery.length === 0) && (
                    <div className="text-center p-4 border border-dashed border-gray-300 rounded-lg">
                      <Search className="h-10 w-10 mx-auto text-gray-300 mb-2" />
                      <p className="text-sm text-gray-500">
                        Zoek een bestaand product of maak een eigen aanbieding
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Type-ahead for category selection */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Categorie</label>
                <Popover open={openCategoryPopover} onOpenChange={setOpenCategoryPopover}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={openCategoryPopover}
                      className="w-full justify-between bg-white"
                    >
                      {selectedCategoryName || "Selecteer een categorie..."}
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`ml-2 h-4 w-4 transition-transform ${openCategoryPopover ? "rotate-180" : ""}`}>
                        <path d="m6 9 6 6 6-6"/>
                      </svg>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-[--radix-popover-trigger-width] p-0 bg-white">
                    <Command>
                      <CommandInput placeholder="Zoek categorie..." className="h-9" />
                      <CommandEmpty>Geen categorie gevonden.</CommandEmpty>
                      <CommandGroup className="max-h-64 overflow-auto">
                        {categories.map((category) => (
                          <CommandItem
                            key={category.id}
                            value={category.name}
                            onSelect={() => handleCategorySelect(category.id)}
                          >
                            {category.name}
                            {selectedCategory === category.id && (
                              <Check className="ml-auto h-4 w-4" />
                            )}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </Command>
                  </PopoverContent>
                </Popover>
              </div>

              {/* Title field */}
              <div>
                <label className="block text-sm font-medium mb-2">Titel</label>
                <Input 
                  placeholder="Bijv. Nike Air Force 1 Low White" 
                  value={selectedProduct ? selectedProduct.name : form.watch('title')}
                  onChange={(e) => {
                    if (!selectedProduct) {
                      form.setValue('title', e.target.value);
                    }
                  }}
                  disabled={!!selectedProduct}
                  className={selectedProduct ? "bg-gray-100" : ""}
                />
                <p className="text-xs text-gray-500 mt-1">
                  {selectedProduct ? 
                    "Titel is automatisch ingevuld op basis van je geselecteerde product" : 
                    "Een goede titel bevat merk, model en kleur"}
                </p>
              </div>

              {/* Brand and size sections */}
              <div className="flex gap-4 flex-col sm:flex-row">
                <div className="flex-1">
                  <label className="block text-sm font-medium mb-2">Merk</label>
                  <Popover open={openBrandPopover} onOpenChange={setOpenBrandPopover}>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={openBrandPopover}
                        className="w-full justify-between bg-white"
                        disabled={!!selectedProduct}
                      >
                        {selectedProduct ? 
                          selectedProduct.brand : 
                          (form.watch('brand')
                            ? brands.find((brand) => brand.value === form.watch('brand'))?.label || customBrand || "Nike"
                            : "Selecteer een merk...")}
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`ml-2 h-4 w-4 transition-transform ${openBrandPopover ? "rotate-180" : ""}`}>
                          <path d="m6 9 6 6 6-6"/>
                        </svg>
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-[--radix-popover-trigger-width] p-0 bg-white">
                      <Command>
                        <CommandInput placeholder="Zoek merk..." className="h-9" />
                        <CommandEmpty>Geen merk gevonden.</CommandEmpty>
                        <CommandGroup className="max-h-64 overflow-auto">
                          {brands.map((brand) => (
                            <CommandItem
                              key={brand.value}
                              value={brand.label}
                              onSelect={() => handleBrandSelect(brand.value)}
                            >
                              {brand.label}
                              {form.watch('brand') === brand.value && (
                                <Check className="ml-auto h-4 w-4" />
                              )}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </Command>
                    </PopoverContent>
                  </Popover>
                  
                  {form.watch('brand') === 'other' && !selectedProduct && (
                    <Input
                      className="mt-2" 
                      placeholder="Voer merknaam in"
                      value={customBrand}
                      onChange={(e) => setCustomBrand(e.target.value)}
                    />
                  )}
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium mb-2">Maat</label>
                  <div className="flex gap-2">
                    <Select 
                      value={selectedSize || ''} 
                      onValueChange={setSelectedSize}
                    >
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
                  
                  {selectedSize === 'custom' && (
                    <Input 
                      className="mt-2" 
                      placeholder="Voer aangepaste maat in"
                      {...form.register('size')}
                    />
                  )}
                </div>
              </div>

              {/* Only show condition selector for secondhand items */}
              {offerType === 'secondhand' && (
                <div>
                  <label className="block text-sm font-medium mb-2">Wat is de conditie van je item?</label>
                  <div className="grid grid-cols-1 gap-3">
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
                            <p className="text-xs text-gray-500">{condition.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Description with AI generator */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-sm font-medium">Beschrijving</label>
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-8 text-xs flex gap-1 items-center"
                    onClick={generateProductDescription}
                    disabled={isGeneratingDescription}
                  >
                    <Sparkles className="h-3 w-3 mr-1" />
                    {isGeneratingDescription ? "Genereren..." : "Genereer beschrijving"}
                  </Button>
                </div>
                <Textarea 
                  placeholder="Beschrijf je item: materiaal, pasvorm, wanneer gekocht, defecten, etc."
                  className="min-h-[100px]"
                  {...form.register('description')}
                />
                <p className="text-xs text-gray-500 mt-1">
                  Een goede beschrijving zorgt voor minder vragen en snellere verkoop
                </p>
              </div>
            </div>
          </div>
        );

      case 'price':
        return (
          <div className="p-6 overflow-y-auto">
            <h2 className="text-xl font-semibold mb-6">Stel je prijs in</h2>
            
            <div className="space-y-6">
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
              
              {/* Smart pricing option (similar to Vinted) */}
              <div className="border rounded-lg p-4">
                <div className="flex items-start">
                  <div 
                    className={`mr-3 mt-1 h-5 w-5 border-2 rounded ${smartPricing ? 'bg-[#1EC0A3] border-[#1EC0A3]' : 'border-gray-300'} flex items-center justify-center cursor-pointer`}
                    onClick={() => setSmartPricing(!smartPricing)}
                  >
                    {smartPricing && <Check className="h-3 w-3 text-white" />}
                  </div>
                  <div>
                    <h3 className="font-medium">Slim prijsschema</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      Automatisch de prijs verlagen met 5% per week als je item niet verkoopt. 
                      Dit verhoogt je kans op een verkoop enorm!
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Verkoopprijs</span>
                  <span className="font-bold">€{form.watch('price') || '85.00'}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-500 pb-2 border-b">
                  <span>Servicekosten (10%)</span>
                  <span>- €{form.watch('price') ? (parseFloat(form.watch('price')) * 0.1).toFixed(2) : '8.50'}</span>
                </div>
                <div className="flex justify-between pt-2 font-medium">
                  <span>Je ontvangt</span>
                  <span className="text-[#1EC0A3]">€{form.watch('price') ? (parseFloat(form.watch('price')) * 0.9).toFixed(2) : '76.50'}</span>
                </div>
                <p className="text-xs text-gray-500 mt-3">
                  Verzendkosten worden door de koper betaald en zijn niet inbegrepen in deze berekening.
                </p>
              </div>

              {/* Shipping information */}
              <div className="border-t pt-6 mt-6">
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
                      <p className="text-sm text-gray-500">Koper betaalt verzendkosten</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center mt-4 p-3 rounded-lg border border-blue-100 bg-blue-50">
                  <span className="text-sm text-blue-700">
                    Verzendgegevens worden bij je account instellingen opgeslagen
                  </span>
                </div>
              </div>

              {/* Safe pay badge */}
              <div className="flex items-center p-4 bg-green-50 border border-green-100 rounded-lg">
                <div className="mr-3 text-green-600 text-xl">🔒</div>
                <div className="text-sm text-green-700">
                  <span className="font-medium">BoxStock Safe Pay</span> - Wij houden de betaling vast tot de koper het item heeft ontvangen en goedgekeurd.
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
                      src={selectedProduct ? selectedProduct.image : (photos.length > 0 && photos[0].type === 'image' ? photos[0].url : 'https://placehold.co/150x150?text=No+Image')} 
                      alt="Product" 
                      className="object-cover w-full h-full" 
                    />
                  </AspectRatio>
                </div>
                <div className="ml-4 flex-1">
                  <div className="font-medium flex justify-between">
                    <span>{selectedProduct ? selectedProduct.name : (form.getValues('title') || "Jouw product")}</span>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="h-6 text-xs flex gap-1 items-center text-[#1EC0A3]"
                      onClick={() => editStep('details')}
                    >
                      <Edit className="h-3 w-3" /> Bewerk
                    </Button>
                  </div>
                  <div className="text-sm text-gray-500">
                    {selectedProduct ? selectedProduct.brand : (form.getValues('brand') || customBrand || "Eigen merk")}
                  </div>
                  <div className="text-sm mt-1">
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-600`}>
                      {offerType === 'resell' ? 'Resell' : 'Tweedehands'}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 border-b">
                <div className="flex justify-between">
                  <div className="text-sm text-gray-500">Maat</div>
                  <div className="flex items-center">
                    <span>{selectedSize || form.getValues('size') || 'EU 42'}</span>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="ml-2 h-6 text-xs flex gap-1 items-center text-[#1EC0A3]"
                      onClick={() => editStep('details')}
                    >
                      <Edit className="h-3 w-3" /> 
                    </Button>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="text-sm text-gray-500">Conditie</div>
                  <div className="flex items-center">
                    <span>{offerType === 'resell' ? 'Nieuw met labels' : 
                          secondhandCondition === 'new' ? 'Nieuw met labels' : 
                          secondhandCondition === 'like_new' ? 'Zo goed als nieuw' : 
                          secondhandCondition === 'excellent' ? 'Uitstekend' : 
                          secondhandCondition === 'good' ? 'Goed' : 'Redelijk'}</span>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="ml-2 h-6 text-xs flex gap-1 items-center text-[#1EC0A3]"
                      onClick={() => editStep('details')}
                    >
                      <Edit className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="text-sm text-gray-500">Prijs</div>
                  <div className="flex items-center">
                    <span className="font-semibold">€{form.getValues('price') || '85.00'}</span>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="ml-2 h-6 text-xs flex gap-1 items-center text-[#1EC0A3]"
                      onClick={() => editStep('price')}
                    >
                      <Edit className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="text-sm text-gray-500">Verzending</div>
                  <div className="flex items-center">
                    <span>BoxStock Verzending</span>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="ml-2 h-6 text-xs flex gap-1 items-center text-[#1EC0A3]"
                      onClick={() => editStep('price')}
                    >
                      <Edit className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="text-sm text-gray-500">Uitbetaalmethode</div>
                  <div className="flex items-center">
                    <span>Bankoverschrijving</span>
                  </div>
                </div>
                {smartPricing && (
                  <div className="flex justify-between">
                    <div className="text-sm text-gray-500">Slim prijsschema</div>
                    <div className="flex items-center">
                      <span className="text-green-600 font-medium">Actief</span>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="ml-2 h-6 text-xs flex gap-1 items-center text-[#1EC0A3]"
                        onClick={() => editStep('price')}
                      >
                        <Edit className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Only show photos for secondhand */}
              {offerType === 'secondhand' && photos.length > 0 && (
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-sm text-gray-500">Foto's</div>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="h-6 text-xs flex gap-1 items-center text-[#1EC0A3]"
                      onClick={() => editStep('photos')}
                    >
                      <Edit className="h-3 w-3" /> Bewerk
                    </Button>
                  </div>
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
              <div className="flex items-start mb-8">
                <div 
                  className={`mr-3 mt-1 h-5 w-5 border-2 rounded ${acceptedTerms ? 'bg-[#1EC0A3] border-[#1EC0A3]' : 'border-gray-300'} flex items-center justify-center cursor-pointer`}
                  onClick={() => setAcceptedTerms(!acceptedTerms)}
                >
                  {acceptedTerms && <Check className="h-3 w-3 text-white" />}
                </div>
                <label className="text-sm cursor-pointer" onClick={() => setAcceptedTerms(!acceptedTerms)}>
                  Ik heb de algemene voorwaarden gelezen en ga hiermee akkoord
                </label>
              </div>
              
              <p className="text-sm text-gray-500">
                Door op "Afronden" te klikken, ga je akkoord met onze algemene voorwaarden en bevestig je dat alle informatie die je hebt verstrekt juist is.
              </p>
            </div>
          </div>
        );
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[95%] md:max-w-[85%] lg:max-w-[75%] xl:max-w-[65%] p-0 max-h-[90vh] overflow-hidden flex flex-col" aria-describedby="dialog-description">
        <div id="dialog-description" className="sr-only">Modal voor het toevoegen van een nieuwe aanbieding op BoxStock</div>
        
        {/* Header */}
        <DialogHeader className="p-6 border-b">
          <DialogTitle className="flex items-center justify-between">
            <div className="flex items-center">
              <Button variant="ghost" size="icon" onClick={prevStep} disabled={step === 'start'} className="mr-2">
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <span>Nieuwe aanbieding</span>
            </div>
            <div className="text-sm text-gray-500">
              {getCurrentStepNumber() + 1}/{getTotalSteps() + 1}
            </div>
          </DialogTitle>
          
          {/* Progress bar with labels instead of dots */}
          <div className="mt-6 mb-1">
            <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="absolute top-0 left-0 h-full bg-[#1EC0A3] rounded-full transition-all duration-300"
                style={{ width: `${((getCurrentStepNumber()) / getTotalSteps()) * 100}%` }}
              ></div>
            </div>
            <div className="flex justify-between mt-2">
              {getSteps().slice(1).map((s, i) => (
                <div 
                  key={i} 
                  className={`text-xs ${step === s ? 'text-[#1EC0A3] font-medium' : 
                  getSteps().indexOf(s) < getSteps().indexOf(step) ? 'text-gray-500' : 'text-gray-400'}`}
                >
                  {getStepDisplayName(s)}
                </div>
              ))}
            </div>
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
              <Button variant="outline" onClick={prevStep} className="mr-2" disabled={step === 'start'}>
                Vorige
              </Button>
              <Button 
                className="bg-[#1EC0A3] hover:bg-[#18a88f]"
                onClick={nextStep}
                disabled={
                  (step === 'photos' && photos.length < 3) ||
                  (step === 'details' && !selectedCategory)
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
