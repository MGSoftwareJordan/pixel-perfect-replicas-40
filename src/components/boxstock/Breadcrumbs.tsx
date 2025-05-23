
import React from 'react';

interface BreadcrumbItem {
  label: string;
  href: string;
  url?: string; // Adding url for backward compatibility
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb">
      <div className="flex gap-1 text-sm text-[#00262F] font-normal md:ml-0">
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <div className="text-[#00262F] gap-1 whitespace-nowrap leading-6">
              <a href={item.url || item.href}>{item.label}</a>
            </div>
            {index < items.length - 1 && (
              <div className="text-[#6F7184] text-base whitespace-nowrap px-1">
                /
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </nav>
  );
};

export default Breadcrumbs;
