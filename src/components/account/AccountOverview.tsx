
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
        <h1 className="text-2xl font-bold text-[#1A1F2C]">Mijn Account</h1>
        <span className="text-gray-500">14-05-2025</span>
      </div>

      {/* Quick stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="border-gray-100 hover:shadow-md transition-shadow">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="bg-[#E5DEFF] p-3 rounded-lg">
              <ShoppingBag className="h-6 w-6 text-[#9b87f5]" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Bestellingen</p>
              <h3 className="text-xl font-bold text-[#1A1F2C]">7</h3>
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-gray-100 hover:shadow-md transition-shadow">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="bg-[#E5DEFF] p-3 rounded-lg">
              <Heart className="h-6 w-6 text-[#9b87f5]" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Favorieten</p>
              <h3 className="text-xl font-bold text-[#1A1F2C]">12</h3>
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-gray-100 hover:shadow-md transition-shadow">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="bg-[#E5DEFF] p-3 rounded-lg">
              <Bell className="h-6 w-6 text-[#9b87f5]" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Notificaties</p>
              <h3 className="text-xl font-bold text-[#1A1F2C]">1</h3>
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-gray-100 hover:shadow-md transition-shadow">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="bg-[#E5DEFF] p-3 rounded-lg">
              <Package className="h-6 w-6 text-[#9b87f5]" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Aanbiedingen</p>
              <h3 className="text-xl font-bold text-[#1A1F2C]">5</h3>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Recent orders and resell/secondhand section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent orders */}
        <Card className="border-gray-100 hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-[#1A1F2C]">Recente bestellingen</h2>
              <Link to="/account/orders" className="text-[#9b87f5] text-sm font-medium">
                Bekijk alles
              </Link>
            </div>
            
            <div className="space-y-4">
              {recentOrders.map((order) => (
                <div key={order.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div>
                    <p className="font-medium text-[#1A1F2C]">#{order.id}</p>
                    <p className="text-sm text-gray-500">{order.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-[#1A1F2C]">{order.total}</p>
                    <p className="text-sm text-[#7E69AB]">{order.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        {/* Resell and Secondhand section */}
        <Card className="border-gray-100 hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-[#1A1F2C]">Jouw aanbiedingen</h2>
              <Link to="/account/listings" className="text-[#9b87f5] text-sm font-medium">
                Nieuwe aanbieding
              </Link>
            </div>
            
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <div className="flex gap-6 mb-6">
                <div className="text-center flex flex-col items-center">
                  <div className="bg-[#E5DEFF] p-4 rounded-full mb-3">
                    <Repeat className="h-6 w-6 text-[#9b87f5]" />
                  </div>
                  <h3 className="font-medium text-[#1A1F2C] mb-2">
                    Resell
                  </h3>
                  <p className="text-gray-500 text-sm mb-4 max-w-[150px]">
                    Verkoop items uit bestaand assortiment
                  </p>
                  <Link 
                    to="/account/listings/new" 
                    className="bg-[#9b87f5] text-white px-4 py-2 rounded-lg text-sm w-full hover:bg-[#7E69AB] transition-colors"
                  >
                    Resell item
                  </Link>
                </div>
                
                <div className="text-center flex flex-col items-center">
                  <div className="bg-[#E5DEFF] p-4 rounded-full mb-3">
                    <Package className="h-6 w-6 text-[#9b87f5]" />
                  </div>
                  <h3 className="font-medium text-[#1A1F2C] mb-2">
                    Tweedehands
                  </h3>
                  <p className="text-gray-500 text-sm mb-4 max-w-[150px]">
                    Verkoop je eigen items tweedehands
                  </p>
                  <Link 
                    to="/account/listings" 
                    className="border border-[#9b87f5] text-[#9b87f5] hover:bg-[#E5DEFF] px-4 py-2 rounded-lg text-sm w-full transition-colors"
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
