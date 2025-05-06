import React, { useState } from 'react';

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
    <div className={`w-full ${isExpanded ? 'bg-gray-50' : 'bg-white'} border-t-[#C7C7C7] border-t border-solid max-md:max-w-full`}>
      <div 
        className="flex w-full items-center gap-4 flex-wrap py-5 max-md:max-w-full cursor-pointer"
        onClick={toggleExpand}
        aria-expanded={isExpanded}
      >
        <div className="text-[#00262F] self-stretch flex-1 shrink basis-[0%] my-auto max-md:max-w-full">
          {title}
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4b8ebc2af344e0fd521198a4475e8179791b79ce?placeholderIfAbsent=true"
          className={`aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto transition-transform ${isExpanded ? 'rotate-180' : ''}`}
          alt={isExpanded ? "Collapse" : "Expand"}
        />
      </div>
      
      {isExpanded && (
        <div className="px-5 pb-5">
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