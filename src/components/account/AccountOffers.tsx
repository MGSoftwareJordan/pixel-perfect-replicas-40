
import React, { useState } from 'react';
import { Plus, Package, Filter, Eye, Download, ArrowUpDown, ArrowUp, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { cn } from '@/lib/utils';
import { useNavigate } from 'react-router-dom';
import AddOfferFlow from './AddOfferFlow';
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MoreMenu } from '@/components/ui/more-menu';
import { toast } from 'sonner';
import OfferCard from './OfferCard';

// Mock data for offerings with earnings added
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
    earnings: '€108.00',
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
    earnings: '€198.00',
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
    earnings: '€288.00',
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
    earnings: '€58.50',
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
    earnings: '€85.50',
  },
];

// Status badge component - verbeterd met tooltips
export const StatusBadge = ({ status, onClick }: { status: string; onClick?: () => void }) => {
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
      case 'sold':
        return { text: 'Verkocht', color: 'bg-purple-100 text-purple-600' };
      default:
        return { text: status, color: 'bg-gray-100 text-gray-600' };
    }
  };
  
  const { text, color } = getStatusDetails();
  const tooltipText = {
    active: 'Deze aanbieding is live en zichtbaar voor kopers',
    pending: 'Deze aanbieding wordt momenteel gecontroleerd',
    approved: 'Deze aanbieding is goedgekeurd en wordt binnenkort live gezet',
    rejected: 'Deze aanbieding is afgekeurd',
    sold: 'Deze aanbieding is verkocht'
  }[status] || '';
  
  const badge = (
    <span 
      className={`px-2 py-1 rounded-full text-xs font-medium ${color} ${onClick ? 'cursor-pointer hover:opacity-80' : ''}`}
      onClick={onClick ? (e) => {
        e.stopPropagation();
        onClick();
      } : undefined}
    >
      {text}
    </span>
  );
  
  if (tooltipText) {
    return (
      <TooltipProvider>
        <Tooltip delayDuration={300}>
          <TooltipTrigger asChild>
            {badge}
          </TooltipTrigger>
          <TooltipContent>
            <p>{tooltipText}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  }
  
  return badge;
};

type SortField = 'date' | 'price' | 'status' | null;
type SortDirection = 'asc' | 'desc';

const AccountOffers: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);
  const [isAddOfferOpen, setIsAddOfferOpen] = useState(false);
  const [sortField, setSortField] = useState<SortField>(null);
  const [sortDirection, setSortDirection] = useState<SortDirection>('desc');
  const [viewMode, setViewMode] = useState<'table' | 'cards'>('table');
  const navigate = useNavigate();

  // Helper function for sorting
  const handleSort = (field: SortField) => {
    if (sortField === field) {
      // Toggle direction if same field
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      // Set new field and default to descending
      setSortField(field);
      setSortDirection('desc');
    }
  };

  // Sort the offerings
  const getSortedOfferings = () => {
    if (!sortField) return [...offeringsData];
    
    return [...offeringsData].sort((a, b) => {
      if (sortField === 'date') {
        // Sort by date (format is DD-MM-YYYY)
        const dateA = a.date.split('-').reverse().join('-');
        const dateB = b.date.split('-').reverse().join('-');
        return sortDirection === 'asc' 
          ? dateA.localeCompare(dateB) 
          : dateB.localeCompare(dateA);
      }
      
      if (sortField === 'price') {
        // Extract numeric value from price
        const priceA = parseFloat(a.price.replace('€', '').replace(',', '.'));
        const priceB = parseFloat(b.price.replace('€', '').replace(',', '.'));
        return sortDirection === 'asc' ? priceA - priceB : priceB - priceA;
      }
      
      if (sortField === 'status') {
        // Custom status order: active, approved, pending, rejected
        const statusOrder = { active: 1, approved: 2, pending: 3, rejected: 4 };
        const valueA = statusOrder[a.status as keyof typeof statusOrder] || 5;
        const valueB = statusOrder[b.status as keyof typeof statusOrder] || 5;
        return sortDirection === 'asc' ? valueA - valueB : valueB - valueA;
      }
      
      return 0;
    });
  };

  const filteredOfferings = getSortedOfferings().filter(offering => {
    const matchesSearch = offering.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          offering.id.includes(searchTerm);
    const matchesType = selectedType ? offering.type === selectedType : true;
    const matchesStatus = selectedStatus ? offering.status === selectedStatus : true;
    
    return matchesSearch && matchesType && matchesStatus;
  });

  const hasOfferings = filteredOfferings.length > 0;
  const offeringCount = offeringsData.length;

  const handleViewOfferDetail = (offerId: string) => {
    navigate(`/account/offers/${offerId}`);
  };

  const openAddOfferDialog = () => {
    setIsAddOfferOpen(true);
  };
  
  const handleEditOffer = (offerId: string) => {
    toast.info(`Bewerken van aanbieding #${offerId} is momenteel niet beschikbaar.`);
  };
  
  const handleDuplicateOffer = (offerId: string) => {
    toast.success(`Aanbieding #${offerId} is gedupliceerd.`);
  };
  
  const handlePauseOffer = (offerId: string) => {
    toast.success(`Aanbieding #${offerId} is gepauzeerd.`);
  };
  
  const handleDeleteOffer = (offerId: string) => {
    toast.success(`Aanbieding #${offerId} is verwijderd.`);
  };
  
  const handleDownloadPackingSlip = (offerId: string) => {
    toast.success(`Pakbon voor aanbieding #${offerId} is gedownload.`);
  };
  
  const handleFilterByStatus = (status: string) => {
    setSelectedStatus(selectedStatus === status ? null : status);
  };

  // Detect if we should use cards view on mobile
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const effectiveViewMode = isMobile ? 'cards' : viewMode;

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#00262F]">Jouw Aanbiedingen</h1>
          <p className="text-gray-500">
            Bekijk je huidige en gepauzeerde aanbiedingen en bijbehorende pakbonnen.
          </p>
        </div>
      </div>
      
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
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
            <line x1="7" y1="7" x2="7.01" y2="7"></line>
          </svg>
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
          <span>{selectedStatus ? selectedStatus.charAt(0).toUpperCase() + selectedStatus.slice(1) : "Status"}</span>
          <span className="text-xs ml-1">▼</span>
        </Button>
        
        <Select
          value={sortField?.toString() || ''}
          onValueChange={(value) => handleSort(value as SortField)}
        >
          <SelectTrigger className="w-[180px] border-gray-200">
            <SelectValue placeholder="Sorteren op..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="date">Datum {sortField === 'date' && (sortDirection === 'asc' ? '↑' : '↓')}</SelectItem>
            <SelectItem value="price">Prijs {sortField === 'price' && (sortDirection === 'asc' ? '↑' : '↓')}</SelectItem>
            <SelectItem value="status">Status {sortField === 'status' && (sortDirection === 'asc' ? '↑' : '↓')}</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      {/* New offer count, view toggle and add offer button row */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-4">
          <span className="px-4 py-2 bg-gray-100 text-gray-700 font-medium rounded-lg">
            {offeringCount} Aanbiedingen
          </span>
          
          <div className="hidden md:flex gap-1">
            <Button 
              variant={viewMode === 'table' ? "default" : "outline"} 
              size="sm"
              onClick={() => setViewMode('table')}
              aria-label="Tabelweergave"
              className="h-9"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 3h18v18H3zM21 9H3M21 15H3M12 3v18"/>
              </svg>
            </Button>
            <Button 
              variant={viewMode === 'cards' ? "default" : "outline"} 
              size="sm"
              onClick={() => setViewMode('cards')}
              aria-label="Kaartweergave"
              className="h-9"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7"></rect>
                <rect x="14" y="3" width="7" height="7"></rect>
                <rect x="14" y="14" width="7" height="7"></rect>
                <rect x="3" y="14" width="7" height="7"></rect>
              </svg>
            </Button>
          </div>
        </div>
        
        <Button 
          className="bg-[#1EC0A3] hover:bg-[#18a88f] flex items-center gap-2"
          onClick={openAddOfferDialog}
        >
          <Plus size={18} />
          <span>Aanbieding Toevoegen</span>
        </Button>
      </div>
      
      {hasOfferings ? (
        <>
          {/* Table view for desktop */}
          {effectiveViewMode === 'table' && (
            <div className="bg-white rounded-xl border border-gray-100 p-4">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Product</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>
                      <button 
                        className="flex items-center font-medium text-left"
                        onClick={() => handleSort('price')}
                      >
                        Prijs
                        {sortField === 'price' && (
                          sortDirection === 'asc' ? <ArrowUp size={14} className="ml-1" /> : <ArrowDown size={14} className="ml-1" />
                        )}
                        {!sortField && <ArrowUpDown size={14} className="ml-1" />}
                      </button>
                    </TableHead>
                    <TableHead>Je ontvangt</TableHead>
                    <TableHead>
                      <button 
                        className="flex items-center font-medium text-left"
                        onClick={() => handleSort('status')}
                      >
                        Status
                        {sortField === 'status' && (
                          sortDirection === 'asc' ? <ArrowUp size={14} className="ml-1" /> : <ArrowDown size={14} className="ml-1" />
                        )}
                        {!sortField && <ArrowUpDown size={14} className="ml-1" />}
                      </button>
                    </TableHead>
                    <TableHead>
                      <button 
                        className="flex items-center font-medium text-left"
                        onClick={() => handleSort('date')}
                      >
                        Datum
                        {sortField === 'date' && (
                          sortDirection === 'asc' ? <ArrowUp size={14} className="ml-1" /> : <ArrowDown size={14} className="ml-1" />
                        )}
                        {!sortField && <ArrowUpDown size={14} className="ml-1" />}
                      </button>
                    </TableHead>
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
                      <TableCell className="text-green-600 font-medium">{offering.earnings}</TableCell>
                      <TableCell>
                        <StatusBadge 
                          status={offering.status} 
                          onClick={() => handleFilterByStatus(offering.status)} 
                        />
                      </TableCell>
                      <TableCell>{offering.date}</TableCell>
                      <TableCell>
                        <div className="flex space-x-2" onClick={(e) => e.stopPropagation()}>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button 
                                  variant="ghost" 
                                  size="icon" 
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleViewOfferDetail(offering.id);
                                  }}
                                  className="h-8 w-8"
                                >
                                  <Eye className="h-4 w-4" />
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Bekijken</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                          
                          {offering.downloads > 0 && (
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Button 
                                    variant="ghost" 
                                    size="icon"
                                    className="h-8 w-8"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      handleDownloadPackingSlip(offering.id);
                                    }}
                                  >
                                    <Download className="h-4 w-4" />
                                  </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>Download pakbon</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          )}
                          
                          <MoreMenu
                            offerId={offering.id}
                            onView={handleViewOfferDetail}
                            onEdit={handleEditOffer}
                            onDuplicate={handleDuplicateOffer}
                            onPause={handlePauseOffer}
                            onDelete={handleDeleteOffer}
                          />
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
          
          {/* Cards view for mobile */}
          {effectiveViewMode === 'cards' && (
            <div className="grid grid-cols-1 gap-4">
              {filteredOfferings.map((offering) => (
                <OfferCard
                  key={offering.id}
                  offering={offering}
                  onViewDetails={handleViewOfferDetail}
                  onEditOffer={handleEditOffer}
                  onDuplicateOffer={handleDuplicateOffer}
                  onPauseOffer={handlePauseOffer}
                  onDeleteOffer={handleDeleteOffer}
                  onDownloadPackingSlip={handleDownloadPackingSlip}
                />
              ))}
            </div>
          )}
        </>
      ) : (
        <div className="text-center py-16 bg-white rounded-xl border border-gray-100">
          <div className="mx-auto w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-6">
            <Package size={32} className="text-gray-400" />
          </div>
          <h2 className="text-xl font-medium text-[#00262F] mb-2">Geen aanbiedingen gevonden</h2>
          <p className="text-gray-500 mb-6 max-w-md mx-auto">
            Er zijn geen aanbiedingen die voldoen aan de geselecteerde filters.
          </p>
          <Button 
            className="bg-[#1EC0A3] hover:bg-[#18a88f] flex items-center gap-2"
            onClick={openAddOfferDialog}
          >
            <Plus size={18} />
            <span>Nieuwe Aanbieding Toevoegen</span>
          </Button>
        </div>
      )}
      
      {/* Add offer dialog */}
      <AddOfferFlow 
        open={isAddOfferOpen}
        onClose={() => setIsAddOfferOpen(false)}
      />
    </div>
  );
};

export default AccountOffers;
