
import React, { useState, useEffect } from 'react';
import { format, addDays, isSaturday, isSunday, addMinutes } from 'date-fns';
import { nl } from 'date-fns/locale';
import { Clock } from 'lucide-react';

interface DeliveryDateEstimatorProps {
  className?: string;
}

const DeliveryDateEstimator: React.FC<DeliveryDateEstimatorProps> = ({ className = '' }) => {
  const [timeLeft, setTimeLeft] = useState<{ hours: number; minutes: number; seconds: number }>({ 
    hours: 0, minutes: 0, seconds: 0 
  });
  const [deliveryDate, setDeliveryDate] = useState<Date | null>(null);
  
  useEffect(() => {
    // Calculate delivery date
    const now = new Date();
    const cutoffTime = new Date(now);
    cutoffTime.setHours(16, 0, 0, 0); // Cutoff time at 16:00
    
    let expectedDeliveryDate;
    
    if (now > cutoffTime) {
      // After cutoff, delivery is 2 business days later
      expectedDeliveryDate = addDays(now, 2);
    } else {
      // Before cutoff, delivery is next business day
      expectedDeliveryDate = addDays(now, 1);
    }
    
    // Adjust for weekends
    if (isSaturday(expectedDeliveryDate)) {
      expectedDeliveryDate = addDays(expectedDeliveryDate, 2);
    } else if (isSunday(expectedDeliveryDate)) {
      expectedDeliveryDate = addDays(expectedDeliveryDate, 1);
    }
    
    setDeliveryDate(expectedDeliveryDate);
    
    // Calculate time left until cutoff
    const updateTimeLeft = () => {
      const currentTime = new Date();
      
      if (currentTime > cutoffTime) {
        // After today's cutoff, calculate for tomorrow
        const tomorrowCutoff = new Date(cutoffTime);
        tomorrowCutoff.setDate(tomorrowCutoff.getDate() + 1);
        
        const diffMs = tomorrowCutoff.getTime() - currentTime.getTime();
        
        const hours = Math.floor(diffMs / (1000 * 60 * 60));
        const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diffMs % (1000 * 60)) / 1000);
        
        setTimeLeft({ hours, minutes, seconds });
      } else {
        // Before today's cutoff
        const diffMs = cutoffTime.getTime() - currentTime.getTime();
        
        const hours = Math.floor(diffMs / (1000 * 60 * 60));
        const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diffMs % (1000 * 60)) / 1000);
        
        setTimeLeft({ hours, minutes, seconds });
      }
    };
    
    updateTimeLeft();
    const timerId = setInterval(updateTimeLeft, 1000);
    
    return () => {
      clearInterval(timerId);
    };
  }, []);
  
  if (!deliveryDate) return null;
  
  return (
    <div className={`bg-[#1EC0A3]/10 rounded-lg p-4 ${className}`}>
      <div className="flex items-start gap-3">
        <Clock className="h-5 w-5 text-[#1EC0A3] mt-0.5" />
        <div>
          <p className="font-medium text-[#00262F]">
            Verwachte levering: {format(deliveryDate, 'EEEE d MMMM', { locale: nl })}
          </p>
          <p className="text-sm mt-1 text-gray-600">
            Bestel binnen <span className="font-medium">{timeLeft.hours.toString().padStart(2, '0')}:
            {timeLeft.minutes.toString().padStart(2, '0')}:
            {timeLeft.seconds.toString().padStart(2, '0')}</span> voor verzending vandaag
          </p>
        </div>
      </div>
    </div>
  );
};

export default DeliveryDateEstimator;
