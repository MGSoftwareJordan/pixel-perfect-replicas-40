
import React, { useState, useEffect } from 'react';
import { format, addDays, isWeekend, nextMonday } from 'date-fns';
import { Truck } from 'lucide-react';

interface DeliveryEstimatorProps {
  country: string;
}

const DeliveryEstimator: React.FC<DeliveryEstimatorProps> = ({ country }) => {
  const [timeRemaining, setTimeRemaining] = useState<{
    hours: number;
    minutes: number;
  }>({ hours: 0, minutes: 0 });
  const [deliveryDate, setDeliveryDate] = useState<Date | null>(null);

  useEffect(() => {
    // Calculate cutoff time (18:00 for next-day delivery)
    const calculateTimeRemaining = () => {
      const now = new Date();
      const cutoffTime = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        18, // 18:00 (6 PM)
        0,
        0
      );
      
      if (now > cutoffTime) {
        // Past cutoff, set to 0
        setTimeRemaining({ hours: 0, minutes: 0 });
        return;
      }
      
      const diffMs = cutoffTime.getTime() - now.getTime();
      const diffHrs = Math.floor(diffMs / (1000 * 60 * 60));
      const diffMins = Math.floor((diffMs / (1000 * 60)) % 60);
      
      setTimeRemaining({ hours: diffHrs, minutes: diffMins });
    };
    
    // Calculate delivery date based on country
    const calculateDeliveryDate = () => {
      const now = new Date();
      const cutoffTime = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        18, // 18:00 (6 PM)
        0,
        0
      );
      
      let deliveryDays = 1; // Default for Netherlands
      
      // Adjust delivery days based on country
      switch (country) {
        case 'nederland':
          deliveryDays = 1; // Next day
          break;
        case 'belgie':
        case 'duitsland':
          deliveryDays = 2; // 2 days
          break;
        default:
          deliveryDays = 3; // 3-5 days for other EU countries
      }
      
      // Start with tomorrow or day after if past cutoff
      let estimatedDelivery = addDays(now, now > cutoffTime ? deliveryDays + 1 : deliveryDays);
      
      // If delivery falls on weekend, move to next Monday
      if (isWeekend(estimatedDelivery)) {
        estimatedDelivery = nextMonday(estimatedDelivery);
      }
      
      setDeliveryDate(estimatedDelivery);
    };
    
    calculateTimeRemaining();
    calculateDeliveryDate();
    
    // Update countdown every minute
    const timer = setInterval(calculateTimeRemaining, 60000);
    
    return () => clearInterval(timer);
  }, [country]);
  
  const getExpectedDeliveryText = () => {
    if (!deliveryDate) return '';
    
    const formattedDate = format(deliveryDate, 'EEEE d MMMM');
    
    switch (country) {
      case 'nederland':
        return `Verwachte levering op ${formattedDate}`;
      case 'belgie':
        return `Livraison prévue le ${formattedDate}`;
      case 'duitsland':
        return `Voraussichtliche Lieferung am ${formattedDate}`;
      default:
        return `Expected delivery on ${formattedDate}`;
    }
  };
  
  const getBeforeText = () => {
    switch (country) {
      case 'nederland':
        return 'Bestel binnen';
      case 'belgie':
        return 'Commandez dans';
      case 'duitsland':
        return 'Bestellen Sie innerhalb von';
      default:
        return 'Order within';
    }
  };
  
  const getForText = () => {
    switch (country) {
      case 'nederland':
        return 'voor';
      case 'belgie':
        return 'pour';
      case 'duitsland':
        return 'für';
      default:
        return 'for';
    }
  };

  return (
    <div className="flex items-center space-x-2 text-sm">
      <Truck size={18} className="text-[#1EC0A3]" />
      <div>
        <div className="font-medium text-[#00262F]">{getExpectedDeliveryText()}</div>
        {timeRemaining.hours > 0 || timeRemaining.minutes > 0 ? (
          <p className="text-gray-500 text-xs">
            {getBeforeText()} {timeRemaining.hours}:{timeRemaining.minutes.toString().padStart(2, '0')} {getForText()} {
              country === 'nederland' ? 'levering morgen' : 
              country === 'belgie' ? 'livraison demain' :
              country === 'duitsland' ? 'Lieferung morgen' : 
              'delivery tomorrow'
            }
          </p>
        ) : (
          <p className="text-gray-500 text-xs">
            {country === 'nederland' ? 'Bestel nu voor snelle verzending' : 
             country === 'belgie' ? 'Commandez maintenant pour une livraison rapide' :
             country === 'duitsland' ? 'Jetzt bestellen für schnellen Versand' :
             'Order now for fast shipping'}
          </p>
        )}
      </div>
    </div>
  );
};

export default DeliveryEstimator;
