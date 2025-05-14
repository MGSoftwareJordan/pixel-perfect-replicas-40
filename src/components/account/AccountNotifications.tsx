
import React from 'react';
import { X } from 'lucide-react';
import { Card } from '@/components/ui/card';

const AccountNotifications: React.FC = () => {
  // Mock notifications data
  const notifications = [
    {
      id: 1,
      date: "03-10-2024",
      title: "Welkom bij Boxstock!",
      read: false
    }
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-[#00262F]">Jouw Notificaties</h1>
        <span className="px-2 py-0.5 bg-[#1EC0A3] text-white rounded-full text-sm">
          01
        </span>
      </div>
      
      <p className="text-gray-500 mb-6">
        Bekijk al je nieuws en aanbiedingen hier.
      </p>
      
      {notifications.map((notification) => (
        <Card key={notification.id} className="mb-4 border-gray-100">
          <div className="p-4 flex items-start justify-between">
            <div className="flex items-start gap-4">
              <div className="mt-1 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                  <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                </svg>
              </div>
              <div>
                <div className="flex items-center mb-1">
                  <span className="text-gray-500 text-sm">{notification.date}</span>
                  {!notification.read && (
                    <span className="ml-2 w-2 h-2 bg-[#E41A36] rounded-full"></span>
                  )}
                </div>
                <h3 className="font-medium text-[#00262F]">
                  {notification.title}
                </h3>
              </div>
            </div>
            <button className="p-1 text-gray-400 hover:text-gray-600">
              <X size={18} />
            </button>
          </div>
        </Card>
      ))}
      
      {notifications.length === 0 && (
        <div className="text-center py-16 bg-gray-50 rounded-xl">
          <div className="mx-auto w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
            <Bell size={24} className="text-gray-400" />
          </div>
          <h3 className="font-medium text-[#00262F] mb-1">Geen notificaties</h3>
          <p className="text-gray-500">Je hebt momenteel geen ongelezen notificaties.</p>
        </div>
      )}
    </div>
  );
};

export default AccountNotifications;
