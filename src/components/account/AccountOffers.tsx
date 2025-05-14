
import React, { useState } from 'react';
import { Plus, Package, Filter, Eye, CheckCircle, Clock, FileText, Tag, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { cn } from '@/lib/utils';
import { useNavigate } from 'react-router-dom';

// Mock data for offerings
export const offeringsData = [
  {
    id: '001',
    type: 'resell',
    name: 'Nike Air Max 90',
    price: '€120.00',
    status: 'pending',
    date: '12-05-2025',
    image: 'https://placehold.co/150x150?text=Nike',
    downloads: 0,
  },
  {
    id: '002',
    type: 'secondhand',
    name: 'Adidas Yeezy 350',
    price: '€220.00',
    status: 'active',
    date: '10-05-2025',
    image: 'https://placehold.co/150x150?text=Adidas',
    downloads: 2,
  },
  {
    id: '003',
    type: 'resell',
    name: 'Jordan 1 Chicago',
    price: '€320.00',
    status: 'approved',
    date: '08-05-2025',
    image: 'https://placehold.co/150x150?text=Jordan',
    downloads: 1,
  },
  {
    id: '004',
    type: 'secondhand',
    name: 'Puma Suede Classic',
    price: '€65.00',
    status: 'active',
    date: '05-05-2025',
    image: 'https://placehold.co/150x150?text=Puma',
    downloads: 0,
  },
  {
    id: '005',
    type: 'resell',
    name: 'New Balance 574',
    price: '€95.00',
    status: 'rejected',
    date: '03-05-2025',
    image: 'https://placehold.co/150x150?text=NB',
    downloads: 0,
  },
];

// Status badge component
export const StatusBadge = ({ status }: { status: string }) => {
  const getStatusDetails = () => {
    switch (status) {
      case 'active':
        return { text: 'Actief', color: 'bg-green-100 text-green-600' };
      case 'pending':
        return { text: 'In afwachting', color: 'bg-yellow-100 text-yellow-600' };
      case 'approved':
        return { text: 'Goedgekeurd', color: 'bg-blue-100 text-blue-600' };
      case 'rejected':
        return { text: 'Afgekeurd', color: 'bg-red-100 text-red-600' };
      default:
        return { text: status, color: 'bg-gray-100 text-gray-600' };
    }
  };
  
  const { text, color } = getStatusDetails();
  
  return (
    <span className={`px-2 py-1 rounded-full text-xs font-medium ${color}`}>
      {text}
    </span>
  );
};

const AccountOffers: React.FC = () => {
  const [activeTab, setActiveTab] = useState("offerings");
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);
  const navigate = useNavigate();

  const filteredOfferings = offeringsData.filter(offering => {
    const matchesSearch = offering.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          offering.id.includes(searchTerm);
    const matchesType = selectedType ? offering.type === selectedType : true;
    const matchesStatus = selectedStatus ? offering.status === selectedStatus : true;
    
    return matchesSearch && matchesType && matchesStatus;
  });

  const hasOfferings = filteredOfferings.length > 0;
  const offeringCount = offeringsData.length;
  const packingSlipsCount = offeringsData.filter(o => o.downloads > 0).length;

  const handleViewOfferDetail = (offerId: string) => {
    navigate(`/account/offers/${offerId}`);
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#00262F]">Jouw Aanbiedingen</h1>
          <p className="text-gray-500">
            Bekijk je huidige, gepauzeerde aanbiedingen en bijbehorende pakbonnen.
          </p>
        </div>
        
        <span className="px-4 py-2 bg-[#00262F] text-white rounded-full text-center font-bold">
          {offeringCount} Aanbiedingen
        </span>
      </div>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
        <TabsList className="grid grid-cols-2 mb-8">
          <TabsTrigger value="offerings" className="text-center">
            Aanbiedingen ({offeringCount})
          </TabsTrigger>
          <TabsTrigger value="packingSlips" className="text-center">
            Pakbonnen ({packingSlipsCount})
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="offerings">
          <div className="flex flex-col sm:flex-row items-stretch gap-4 mb-8">
            <div className="relative w-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <Input 
                type="text"
                placeholder="Zoek een aanbieding..."
                className="pl-10 border-gray-200"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <button 
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  onClick={() => setSearchTerm('')}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              )}
            </div>
            
            <Button 
              variant="outline" 
              className={cn(
                "flex gap-2 items-center border-gray-200",
                selectedType && "bg-gray-100"
              )}
              onClick={() => setSelectedType(selectedType ? null : "resell")}
            >
              <Tag size={18} />
              <span>{selectedType === "resell" ? "Resell" : "Type"}</span>
              <span className="text-xs ml-1">▼</span>
            </Button>
            
            <Button 
              variant="outline" 
              className={cn(
                "flex gap-2 items-center border-gray-200",
                selectedStatus && "bg-gray-100"
              )}
              onClick={() => setSelectedStatus(selectedStatus ? null : "active")}
            >
              <Filter size={18} />
              <span>{selectedStatus === "active" ? "Actief" : "Status"}</span>
              <span className="text-xs ml-1">▼</span>
            </Button>
          </div>
          
          {hasOfferings ? (
            <div className="bg-white rounded-xl border border-gray-100 p-4">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Product</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Prijs</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Datum</TableHead>
                    <TableHead>Acties</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredOfferings.map((offering) => (
                    <TableRow key={offering.id} className="cursor-pointer hover:bg-gray-50" onClick={() => handleViewOfferDetail(offering.id)}>
                      <TableCell className="font-medium">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-gray-100 rounded overflow-hidden">
                            <AspectRatio ratio={1/1}>
                              <img src={offering.image} alt={offering.name} className="object-cover w-full h-full" />
                            </AspectRatio>
                          </div>
                          <div>
                            <p className="font-medium">{offering.name}</p>
                            <p className="text-xs text-gray-500">#{offering.id}</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          offering.type === 'resell' 
                            ? 'bg-purple-100 text-purple-600'
                            : 'bg-blue-100 text-blue-600'
                        }`}>
                          {offering.type === 'resell' ? 'Resell' : 'Tweedehands'}
                        </span>
                      </TableCell>
                      <TableCell>{offering.price}</TableCell>
                      <TableCell>
                        <StatusBadge status={offering.status} />
                      </TableCell>
                      <TableCell>{offering.date}</TableCell>
                      <TableCell>
                        <div className="flex space-x-2" onClick={(e) => e.stopPropagation()}>
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            onClick={(e) => {
                              e.stopPropagation();
                              handleViewOfferDetail(offering.id);
                            }}
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                          {offering.downloads > 0 && (
                            <Button 
                              variant="ghost" 
                              size="icon"
                              onClick={(e) => {
                                e.stopPropagation();
                                // In a real app, this would trigger a download
                              }}
                            >
                              <Download className="h-4 w-4" />
                            </Button>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-xl border border-gray-100">
              <div className="mx-auto w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-6">
                <Package size={32} className="text-gray-400" />
              </div>
              <h2 className="text-xl font-medium text-[#00262F] mb-2">Geen aanbiedingen gevonden</h2>
              <p className="text-gray-500 mb-6 max-w-md mx-auto">
                Er zijn geen aanbiedingen die voldoen aan de geselecteerde filters.
              </p>
              <Button className="bg-[#1EC0A3] hover:bg-[#18a88f] flex items-center gap-2">
                <Plus size={18} />
                <span>Nieuwe Aanbieding Toevoegen</span>
              </Button>
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="packingSlips">
          <div className="bg-white rounded-xl border border-gray-100 p-6">
            <h2 className="text-lg font-semibold mb-4">Beschikbare pakbonnen</h2>
            {packingSlipsCount > 0 ? (
              <div className="space-y-4">
                {offeringsData
                  .filter(o => o.downloads > 0)
                  .map((offering) => (
                    <div key={`slip-${offering.id}`} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gray-100 rounded overflow-hidden">
                          <img src={offering.image} alt={offering.name} className="object-cover w-full h-full" />
                        </div>
                        <div>
                          <p className="font-medium">{offering.name}</p>
                          <p className="text-xs text-gray-500">Pakbon #{offering.id}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-sm text-gray-500">
                          <Clock className="h-4 w-4 inline mr-1" /> 
                          {offering.date}
                        </span>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="flex items-center gap-2"
                          onClick={() => handleViewOfferDetail(offering.id)}
                        >
                          <Eye className="h-4 w-4" />
                          <span>Bekijken</span>
                        </Button>
                        <Button variant="outline" size="sm" className="flex items-center gap-2">
                          <Download className="h-4 w-4" />
                          <span>Download ({offering.downloads}x)</span>
                        </Button>
                      </div>
                    </div>
                  ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <div className="mx-auto w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-6">
                  <Package size={32} className="text-gray-400" />
                </div>
                <h3 className="text-xl font-medium text-[#00262F] mb-2">Geen pakbonnen beschikbaar</h3>
                <p className="text-gray-500 max-w-md mx-auto">
                  Je hebt momenteel geen actieve aanbiedingen waarvoor pakbonnen beschikbaar zijn.
                </p>
              </div>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AccountOffers;
