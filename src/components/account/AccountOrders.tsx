
import React from 'react';
import { Eye } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const AccountOrders: React.FC = () => {
  // Mock orders data
  const orders = [
    { id: "127", date: "14-04-2025", status: "Betaald", total: "€223.00" },
    { id: "126", date: "14-04-2025", status: "Betaald", total: "€223.00" },
    { id: "102", date: "04-04-2025", status: "Betaald", total: "€20.00" },
    { id: "100", date: "03-04-2025", status: "Betaling mislukt", total: "€251.00" },
    { id: "99", date: "03-04-2025", status: "Geannuleerd", total: "€251.00" },
    { id: "98", date: "03-04-2025", status: "Betaling mislukt", total: "€97.00" },
    { id: "97", date: "03-04-2025", status: "Betaling mislukt", total: "€97.00" }
  ];

  // Helper function to get status color
  const getStatusColor = (status: string) => {
    switch(status) {
      case "Betaald":
        return "text-green-600";
      case "Betaling mislukt":
        return "text-red-600";
      case "Geannuleerd":
        return "text-amber-600";
      default:
        return "text-gray-600";
    }
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#1A1F2C]">Jouw Bestellingen</h1>
          <p className="text-gray-500">Bekijk al je bestelde kledingitems hier.</p>
        </div>
        
        <span className="px-4 py-2 bg-[#1A1F2C] text-white rounded-full text-center font-bold">
          07 Producten
        </span>
      </div>
      
      <div className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
        <Table>
          <TableHeader>
            <TableRow className="bg-[#E5DEFF]">
              <TableHead className="font-medium">Nummer</TableHead>
              <TableHead className="font-medium">Datum</TableHead>
              <TableHead className="font-medium">Status</TableHead>
              <TableHead className="font-medium text-right">Totaal</TableHead>
              <TableHead className="font-medium text-right">Bekijken</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id} className="hover:bg-gray-50 transition-colors">
                <TableCell className="font-medium text-[#9b87f5]">#{order.id}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell className={getStatusColor(order.status)}>{order.status}</TableCell>
                <TableCell className="text-right">{order.total}</TableCell>
                <TableCell className="text-right">
                  <button className="p-2 text-gray-400 hover:text-[#9b87f5] transition-colors">
                    <Eye size={18} />
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AccountOrders;
