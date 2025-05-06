import React from 'react';

const Breadcrumbs: React.FC = () => {
  const breadcrumbItems = [
    { label: 'Home', url: '/' },
    { label: 'Sneakers', url: '/sneakers' },
    { label: 'Air Jordan', url: '/sneakers/air-jordan' },
    { label: 'Air Jordan 33', url: '/sneakers/air-jordan/air-jordan-33' },
    { label: 'University Red', url: '/sneakers/air-jordan/air-jordan-33/university-red' }
  ];

  return (
    <nav aria-label="Breadcrumb">
      <div className="flex gap-1 text-sm text-[#00262F] font-normal ml-[124px] mt-[17px] max-md:ml-2.5">
        {breadcrumbItems.map((item, index) => (
          <React.Fragment key={index}>
            <div className="text-[#00262F] gap-1 whitespace-nowrap leading-6">
              <a href={item.url}>{item.label}</a>
            </div>
            {index < breadcrumbItems.length - 1 && (
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