
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Heart, Bell, Package, Repeat, Search } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AccountOverview: React.FC = () => {
  // Mock data
  const recentOrders = [
    { id: "127", date: "14-04-2025", status: "Betaald", total: "€223.00" },
    { id: "126", date: "14-04-2025", status: "Betaald", total: "€223.00" },
    { id: "102", date: "04-04-2025", status: "Betaald", total: "€20.00" }
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-[#00262F]">Mijn Account</h1>
        <span className="text-gray-500">14-05-2025</span>
      </div>

      {/* Quick stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="border-gray-100">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="bg-blue-50 p-3 rounded-lg">
              <ShoppingBag className="h-6 w-6 text-blue-500" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Bestellingen</p>
              <h3 className="text-xl font-bold text-[#00262F]">7</h3>
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-gray-100">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="bg-red-50 p-3 rounded-lg">
              <Heart className="h-6 w-6 text-red-500" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Favorieten</p>
              <h3 className="text-xl font-bold text-[#00262F]">12</h3>
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-gray-100">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="bg-amber-50 p-3 rounded-lg">
              <Bell className="h-6 w-6 text-amber-500" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Notificaties</p>
              <h3 className="text-xl font-bold text-[#00262F]">1</h3>
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-gray-100">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="bg-green-50 p-3 rounded-lg">
              <Package className="h-6 w-6 text-green-500" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Aanbiedingen</p>
              <h3 className="text-xl font-bold text-[#00262F]">0</h3>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Recent orders and resell/secondhand section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent orders */}
        <Card className="border-gray-100">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-[#00262F]">Recente bestellingen</h2>
              <Link to="/account/orders" className="text-[#1EC0A3] text-sm font-medium">
                Bekijk alles
              </Link>
            </div>
            
            <div className="space-y-4">
              {recentOrders.map((order) => (
                <div key={order.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-[#00262F]">#{order.id}</p>
                    <p className="text-sm text-gray-500">{order.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-[#00262F]">{order.total}</p>
                    <p className="text-sm text-green-500">{order.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        {/* Resell and Secondhand section */}
        <Card className="border-gray-100">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-[#00262F]">Jouw aanbiedingen</h2>
              <Link to="/account/listings" className="text-[#1EC0A3] text-sm font-medium">
                Nieuwe aanbieding
              </Link>
            </div>
            
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <div className="flex gap-6 mb-6">
                <div className="text-center flex flex-col items-center">
                  <div className="bg-blue-50 p-4 rounded-full mb-3">
                    <Repeat className="h-6 w-6 text-blue-500" />
                  </div>
                  <h3 className="font-medium text-[#00262F] mb-2">
                    Resell
                  </h3>
                  <p className="text-gray-500 text-sm mb-4 max-w-[150px]">
                    Verkoop items uit bestaand assortiment
                  </p>
                  <Link 
                    to="/account/listings/new" 
                    className="bg-[#1EC0A3] text-white px-4 py-2 rounded-lg text-sm w-full"
                  >
                    Resell item
                  </Link>
                </div>
                
                <div className="text-center flex flex-col items-center">
                  <div className="bg-amber-50 p-4 rounded-full mb-3">
                    <Package className="h-6 w-6 text-amber-500" />
                  </div>
                  <h3 className="font-medium text-[#00262F] mb-2">
                    Tweedehands
                  </h3>
                  <p className="text-gray-500 text-sm mb-4 max-w-[150px]">
                    Verkoop je eigen items tweedehands
                  </p>
                  <Link 
                    to="/account/listings" 
                    className="border border-[#00262F] text-[#00262F] hover:bg-gray-50 px-4 py-2 rounded-lg text-sm w-full"
                  >
                    Item verkopen
                  </Link>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AccountOverview;
