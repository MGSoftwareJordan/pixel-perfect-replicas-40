
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, FileText, Package, Clock, Tag, Download, CheckCircle, X, Copy, Pencil, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { StatusBadge } from './AccountOffers';
import { StatusTimeline } from '@/components/ui/status-timeline';
import { useState } from 'react';
import { toast } from 'sonner';

// Import the mock data from AccountOffers
import { offeringsData } from './AccountOffers';

const OfferDetailView: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [showPackingSlip, setShowPackingSlip] = useState(false);
  const [editMode, setEditMode] = useState(false);
  
  // Find the specific offering by ID
  const offering = offeringsData.find(offer => offer.id === id);
  
  if (!offering) {
    return (
      <div className="flex flex-col items-center justify-center py-16">
        <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-6">
          <Package size={32} className="text-gray-400" />
        </div>
        <h2 className="text-xl font-medium text-[#00262F] mb-2">Aanbieding niet gevonden</h2>
        <p className="text-gray-500 mb-6">De aanbieding die je zoekt bestaat niet of is verwijderd.</p>
        <Button onClick={() => navigate('/account/offers')} className="flex items-center gap-2">
          <ArrowLeft size={16} />
          <span>Terug naar aanbiedingen</span>
        </Button>
      </div>
    );
  }
  
  const handleDownloadPackingSlip = () => {
    toast.success("Pakbon is gedownload!");
    // In a real app, this would trigger a download of the packing slip
  };

  const handleCopyId = () => {
    navigator.clipboard.writeText(offering.id);
    toast.success("ID gekopieerd naar klembord");
  };

  const handleEdit = () => {
    setEditMode(true);
    toast.info("Bewerkmodus is momenteel niet volledig geïmplementeerd");
  };
  
  return (
    <div>
      <div className="flex items-center gap-2 mb-6">
        <Button 
          variant="outline" 
          size="sm" 
          onClick={() => navigate('/account/offers')}
          className="flex items-center gap-1"
        >
          <ArrowLeft size={16} />
          <span>Terug</span>
        </Button>
        <h1 className="text-2xl font-bold text-[#00262F]">Aanbieding details</h1>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="flex items-start gap-2">
                  <div>
                    <CardTitle className="text-xl mb-1 flex items-center">
                      {offering.name}
                      <button 
                        className="ml-2 text-gray-400 hover:text-gray-600" 
                        onClick={handleCopyId}
                        aria-label="Kopieer ID"
                      >
                        <div className="flex items-center text-sm font-normal">
                          #{offering.id}
                          <Copy className="h-3.5 w-3.5 ml-1" />
                        </div>
                      </button>
                    </CardTitle>
                    <CardDescription>Geplaatst op: {offering.date}</CardDescription>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    className="flex items-center gap-1"
                    onClick={handleEdit}
                  >
                    <Pencil size={16} />
                    <span>Bewerken</span>
                  </Button>
                  <StatusBadge status={offering.status} />
                </div>
              </div>
            </CardHeader>
            
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="border rounded-lg overflow-hidden mb-4">
                    <AspectRatio ratio={1/1}>
                      <img 
                        src={offering.image} 
                        alt={offering.name} 
                        className="object-cover w-full h-full"
                      />
                    </AspectRatio>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Type</p>
                      <div className="mt-1">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          offering.type === 'resell' 
                            ? 'bg-purple-100 text-purple-600' 
                            : 'bg-blue-100 text-blue-600'
                        }`}>
                          {offering.type === 'resell' ? 'Resell' : 'Tweedehands'}
                        </span>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Prijs</p>
                      <p className="text-lg font-medium">{offering.price}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Je ontvangt</p>
                      <p className="text-lg font-medium text-green-600">{offering.earnings}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Geplaatst op</p>
                      <p className="flex items-center">
                        <Clock size={16} className="mr-1 text-gray-400" /> 
                        {offering.date}
                      </p>
                    </div>
                  </div>
                  
                  {offering.downloads > 0 && (
                    <div className="mt-6">
                      <Button 
                        variant="outline" 
                        className="flex gap-2 w-full"
                        onClick={() => setShowPackingSlip(true)}
                      >
                        <FileText size={18} />
                        <span>Bekijk pakbon</span>
                      </Button>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="mt-8 border-t pt-6">
                <h3 className="font-medium mb-3">Product details</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="text-sm">
                      <span className="text-gray-500">Categorie:</span> Sneakers
                    </div>
                    <div className="text-sm">
                      <span className="text-gray-500">Merk:</span> {offering.name.split(' ')[0]}
                    </div>
                    <div className="text-sm">
                      <span className="text-gray-500">Conditie:</span> Nieuw
                    </div>
                    <div className="text-sm">
                      <span className="text-gray-500">Maat:</span> EU 42
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            
            <CardFooter className="border-t flex justify-between items-center pt-4">
              <div className="flex items-center text-sm text-gray-500">
                <Tag className="h-4 w-4 mr-1" />
                <span>ID: {offering.id}</span>
              </div>
              
              {offering.status === 'active' && (
                <Button variant="outline" className="text-red-500 border-red-200 hover:bg-red-50">
                  <X size={16} className="mr-1" />
                  <span>Deactiveren</span>
                </Button>
              )}
            </CardFooter>
          </Card>
        </div>
        
        <div className="lg:col-span-1">
          <Card className="sticky top-4">
            <CardHeader>
              <CardTitle className="text-lg">Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Timeline component */}
                <StatusTimeline status={offering.status} />
                
                {offering.type === 'resell' && offering.status === 'pending' && (
                  <div className="bg-yellow-50 text-yellow-700 p-3 rounded-md text-sm border border-yellow-100 mt-4">
                    Resell aanbiedingen moeten eerst worden goedgekeurd voordat ze zichtbaar zijn. 
                    Dit duurt ongeveer 24-48 uur.
                  </div>
                )}
                
                {offering.downloads > 0 && (
                  <div className="border-t pt-4 mt-4">
                    <h3 className="font-medium mb-2 text-sm">Pakbon</h3>
                    <Button 
                      variant="outline" 
                      className="flex items-center gap-2 w-full"
                      onClick={handleDownloadPackingSlip}
                    >
                      <Download size={16} />
                      <span>Download pakbon</span>
                      <span className="text-xs ml-auto bg-gray-100 px-1.5 py-0.5 rounded">
                        {offering.downloads}x
                      </span>
                    </Button>
                  </div>
                )}
                
                {/* FAQ Accordion */}
                <div className="border-t pt-4 mt-4">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="faq-1">
                      <AccordionTrigger className="text-sm font-medium">
                        Wat is het verschil tussen Resell en Tweedehands?
                      </AccordionTrigger>
                      <AccordionContent className="text-sm text-gray-600">
                        Resell items zijn nieuwe producten die je doorverkoopt. Tweedehands items zijn gebruikte producten.
                        Resell items worden extra gecontroleerd op authenticiteit.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="faq-2">
                      <AccordionTrigger className="text-sm font-medium">
                        Waarom duurt de goedkeuring zo lang?
                      </AccordionTrigger>
                      <AccordionContent className="text-sm text-gray-600">
                        Onze experts controleren handmatig elk Resell item om authenticiteit te garanderen.
                        Dit duurt gemiddeld 24-48 uur.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="faq-3">
                      <AccordionTrigger className="text-sm font-medium">
                        Waarom is mijn aanbieding afgekeurd?
                      </AccordionTrigger>
                      <AccordionContent className="text-sm text-gray-600">
                        Aanbiedingen kunnen worden afgekeurd als ze niet voldoen aan onze richtlijnen voor 
                        authenticiteit, kwaliteit, of als de afbeeldingen niet duidelijk genoeg zijn.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  
                  <Button variant="link" className="p-0 mt-2 h-auto text-sm text-[#1EC0A3]">
                    Bekijk alle veelgestelde vragen <ChevronRight size={14} className="ml-1" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Additional info card */}
          <Card className="mt-4">
            <CardHeader>
              <CardTitle className="text-lg">Help & Ondersteuning</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500 mb-4">
                Heb je vragen over deze aanbieding of het verkoopproces?
              </p>
              <Button className="w-full bg-[#1EC0A3] hover:bg-[#18a88f]">
                Contact opnemen
              </Button>
            </CardContent>
          </Card>
          
          {offering.status === 'active' && (
            <Card className="mt-4 bg-blue-50 border-blue-100">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg text-blue-700">Promoot je aanbieding</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-blue-600 mb-4">
                  Maak je aanbieding 3x zichtbaarder en krijg meer potentiële kopers.
                </p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Boost deze aanbieding
                </Button>
                <p className="text-xs text-blue-500 mt-2 text-center">
                  Vanaf €2,99 per week
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
      
      {/* Packing Slip Dialog */}
      <Dialog open={showPackingSlip} onOpenChange={setShowPackingSlip}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Pakbon voor {offering.name}</DialogTitle>
            <DialogDescription>
              Pakbon #{offering.id} - Gedownload {offering.downloads}x
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            <div className="border rounded p-6 bg-gray-50">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="font-bold text-lg">BOXSTOCK</h3>
                  <p className="text-sm text-gray-500">Pakbon</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">Datum: {offering.date}</p>
                  <p className="text-sm text-gray-500">Order: #{offering.id}</p>
                </div>
              </div>
              
              <div className="border-t border-dashed py-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gray-100 rounded overflow-hidden">
                    <img src={offering.image} alt={offering.name} className="object-cover w-full h-full" />
                  </div>
                  <div>
                    <p className="font-medium">{offering.name}</p>
                    <p className="text-xs text-gray-500">#{offering.id}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-sm mb-4">
                  <div>
                    <span className="text-gray-500">Type:</span> {offering.type === 'resell' ? 'Resell' : 'Tweedehands'}
                  </div>
                  <div>
                    <span className="text-gray-500">Prijs:</span> {offering.price}
                  </div>
                </div>
              </div>
              
              <div className="border-t pt-4 text-center">
                <p className="text-sm font-medium">Bedankt voor je bestelling bij Boxstock!</p>
              </div>
            </div>
            
            <div className="flex justify-end gap-2">
              <Button 
                variant="outline"
                onClick={() => setShowPackingSlip(false)}
              >
                Sluiten
              </Button>
              <Button
                onClick={handleDownloadPackingSlip}
                className="flex items-center gap-2 bg-[#1EC0A3] hover:bg-[#18a88f]"
              >
                <Download size={16} />
                <span>Download PDF</span>
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      
      {/* Edit Dialog would go here in a full implementation */}
    </div>
  );
};

export default OfferDetailView;
