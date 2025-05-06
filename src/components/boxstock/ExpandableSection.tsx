
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface ExpandableSectionProps {
  title: string;
  children?: React.ReactNode;
}

const ExpandableSection: React.FC<ExpandableSectionProps> = ({ title, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`w-full ${isExpanded ? 'bg-gray-50' : 'bg-white'} border-t-[#C7C7C7] border-t border-solid max-md:max-w-full transition-colors duration-200`}>
      <div 
        className="flex w-full items-center gap-4 flex-wrap py-5 max-md:max-w-full cursor-pointer hover:bg-gray-50"
        onClick={toggleExpand}
        aria-expanded={isExpanded}
      >
        <div className="text-[#00262F] self-stretch flex-1 shrink basis-[0%] my-auto max-md:max-w-full font-medium">
          {title}
        </div>
        {isExpanded ? (
          <ChevronUp className="h-6 w-6 text-[#00262F]" />
        ) : (
          <ChevronDown className="h-6 w-6 text-[#00262F]" />
        )}
      </div>
      
      {isExpanded && (
        <div className="px-5 pb-5 animate-accordion-down">
          {children || (
            <p className="text-[#00262F] text-sm">
              Meer informatie over {title} komt binnenkort beschikbaar.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default ExpandableSection;
