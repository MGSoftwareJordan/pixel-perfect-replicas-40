
import React from 'react';
import { Eye } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';

// Mock data for recently viewed items
const recentlyViewedData = [
  {
    id: 'rv001',
    name: 'Nike Dunk Low',
    price: '€110.00',
    image: 'https://placehold.co/150x150?text=Dunk',
    viewedAt: '13-05-2025',
  },
  {
    id: 'rv002',
    name: 'Adidas Stan Smith',
    price: '€90.00',
    image: 'https://placehold.co/150x150?text=Stan+Smith',
    viewedAt: '13-05-2025',
  },
  {
    id: 'rv003',
    name: 'Converse Chuck Taylor',
    price: '€70.00',
    image: 'https://placehold.co/150x150?text=Converse',
    viewedAt: '12-05-2025',
  },
  {
    id: 'rv004',
    name: 'Puma Suede',
    price: '€85.00',
    image: 'https://placehold.co/150x150?text=Puma',
    viewedAt: '11-05-2025',
  },
  {
    id: 'rv005',
    name: 'New Balance 574',
    price: '€95.00',
    image: 'https://placehold.co/150x150?text=NB',
    viewedAt: '10-05-2025',
  },
  {
    id: 'rv006',
    name: 'Vans Old Skool',
    price: '€75.00',
    image: 'https://placehold.co/150x150?text=Vans',
    viewedAt: '09-05-2025',
  },
];

const AccountRecentlyViewed: React.FC = () => {
  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#00262F]">Recent Bekeken</h1>
          <p className="text-gray-500">
            Bekijk de producten die je recent hebt bekeken.
          </p>
        </div>
        
        <span className="px-4 py-2 bg-[#00262F] text-white rounded-full text-center font-bold">
          {recentlyViewedData.length} Items
        </span>
      </div>
      
      <div className="bg-white rounded-xl border border-gray-100 p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {recentlyViewedData.map((item) => (
            <Card key={item.id} className="overflow-hidden">
              <div className="aspect-w-1 aspect-h-1 w-full">
                <AspectRatio ratio={1/1}>
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="object-cover w-full h-full"
                  />
                </AspectRatio>
              </div>
              <CardContent className="p-4">
                <h3 className="font-medium text-[#00262F]">{item.name}</h3>
                <div className="flex justify-between items-center mt-2">
                  <span className="font-bold">{item.price}</span>
                  <span className="text-xs text-gray-500 flex items-center">
                    <Eye className="h-3 w-3 mr-1" /> {item.viewedAt}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccountRecentlyViewed;
