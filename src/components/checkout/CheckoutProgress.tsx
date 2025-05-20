
import React from 'react';
import { Progress } from '@/components/ui/progress';

interface CheckoutProgressProps {
  currentStep: number;
  steps: string[];
}

const CheckoutProgress: React.FC<CheckoutProgressProps> = ({ currentStep, steps }) => {
  const progressPercentage = ((currentStep - 1) / (steps.length - 1)) * 100;
  
  return (
    <div className="sticky top-0 z-10 bg-white py-4 border-b border-gray-100 mb-6">
      <div className="container mx-auto px-4 max-w-6xl">
        <Progress 
          value={progressPercentage} 
          className="h-2 bg-gray-100"
        />
        
        <div className="flex justify-between mt-2 text-sm">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`flex flex-col items-center ${
                index + 1 === currentStep 
                  ? 'text-[#1EC0A3] font-medium' 
                  : index + 1 < currentStep 
                    ? 'text-gray-500' 
                    : 'text-gray-400'
              }`}
            >
              <div className={`flex items-center justify-center w-6 h-6 rounded-full mb-1 text-xs
                ${index + 1 === currentStep 
                  ? 'bg-[#1EC0A3] text-white' 
                  : index + 1 < currentStep 
                    ? 'bg-gray-100 text-gray-500' 
                    : 'bg-gray-100 text-gray-400'
                }`}>
                {index + 1 < currentStep ? '✓' : index + 1}
              </div>
              <span className="hidden sm:inline">{step}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CheckoutProgress;
