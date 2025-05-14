
import React from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Card, CardContent } from "@/components/ui/card";
import { StatusBadge } from './AccountOffers';
import { Eye, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MoreMenu } from '@/components/ui/more-menu';

interface Offering {
  id: string;
  type: string;
  name: string;
  price: string;
  status: string;
  date: string;
  image: string;
  downloads: number;
  earnings?: string;
}

interface OfferCardProps {
  offering: Offering;
  onViewDetails: (id: string) => void;
  onEditOffer?: (id: string) => void;
  onDuplicateOffer?: (id: string) => void;
  onPauseOffer?: (id: string) => void;
  onDeleteOffer?: (id: string) => void;
  onDownloadPackingSlip?: (id: string) => void;
}

const OfferCard: React.FC<OfferCardProps> = ({ 
  offering, 
  onViewDetails,
  onEditOffer,
  onDuplicateOffer,
  onPauseOffer,
  onDeleteOffer,
  onDownloadPackingSlip
}) => {
  return (
    <Card 
      className="cursor-pointer hover:border-gray-300 transition-all" 
      onClick={() => onViewDetails(offering.id)}
    >
      <CardContent className="p-4">
        <div className="flex gap-4">
          <div className="w-20 h-20 bg-gray-100 rounded overflow-hidden flex-shrink-0">
            <AspectRatio ratio={1/1}>
              <img 
                src={offering.image} 
                alt={offering.name} 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </AspectRatio>
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2">
              <div>
                <p className="font-medium text-sm line-clamp-1">{offering.name}</p>
                <p className="text-xs text-gray-500">#{offering.id}</p>
              </div>
              
              <div className="flex items-center gap-1" onClick={(e) => e.stopPropagation()}>
                {offering.downloads > 0 && (
                  <Button 
                    variant="ghost" 
                    size="icon"
                    className="h-8 w-8 p-0"
                    onClick={(e) => {
                      e.stopPropagation();
                      if (onDownloadPackingSlip) {
                        onDownloadPackingSlip(offering.id);
                      }
                    }}
                    aria-label="Download pakbon"
                  >
                    <Download className="h-4 w-4" />
                  </Button>
                )}
                
                <MoreMenu 
                  offerId={offering.id}
                  onView={onViewDetails}
                  onEdit={onEditOffer}
                  onDuplicate={onDuplicateOffer}
                  onPause={onPauseOffer}
                  onDelete={onDeleteOffer}
                />
              </div>
            </div>
            
            <div className="mt-2 grid grid-cols-2 gap-y-2 text-sm">
              <div>
                <span className="text-gray-500">Type:</span>{' '}
                <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                  offering.type === 'resell' 
                    ? 'bg-purple-100 text-purple-600'
                    : 'bg-blue-100 text-blue-600'
                }`}>
                  {offering.type === 'resell' ? 'Resell' : 'Tweedehands'}
                </span>
              </div>
              
              <div>
                <span className="text-gray-500">Prijs:</span> {offering.price}
              </div>
              
              <div>
                <span className="text-gray-500">Status:</span>{' '}
                <StatusBadge status={offering.status} />
              </div>
              
              <div>
                <span className="text-gray-500">Datum:</span> {offering.date}
              </div>
              
              {offering.earnings && (
                <div className="col-span-2 mt-1 text-green-600 font-medium">
                  Je ontvangt: {offering.earnings}
                </div>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default OfferCard;
