
import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/boxstock/Header';
import Footer from '@/components/boxstock/Footer';
import AccountSidebar from '@/components/account/AccountSidebar';
import AccountOverview from '@/components/account/AccountOverview';
import AccountFavorites from '@/components/account/AccountFavorites';
import AccountNotifications from '@/components/account/AccountNotifications';
import AccountOffers from '@/components/account/AccountOffers';
import AccountOrders from '@/components/account/AccountOrders';
import AccountSettings from '@/components/account/AccountSettings';
import AccountBrands from '@/components/account/AccountBrands';
import AccountRecentlyViewed from '@/components/account/AccountRecentlyViewed';

const Account: React.FC = () => {
  const { section = "overview" } = useParams();
  
  // Render different content based on section
  const renderContent = () => {
    switch (section) {
      case "overview":
        return <AccountOverview />;
      case "favorites":
        return <AccountFavorites />;
      case "notifications":
        return <AccountNotifications />;
      case "brands":
        return <AccountBrands />;
      case "recently-viewed":
        return <AccountRecentlyViewed />;
      case "listings":
      case "offers":
        return <AccountOffers />;
      case "orders":
        return <AccountOrders />;
      case "settings":
        return <AccountSettings />;
      default:
        return <AccountOverview />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto max-w-7xl px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full md:w-1/4 lg:w-1/5">
            <AccountSidebar activeSection={section} />
          </div>
          
          {/* Main content */}
          <div className="w-full md:w-3/4 lg:w-4/5">
            {renderContent()}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Account;
