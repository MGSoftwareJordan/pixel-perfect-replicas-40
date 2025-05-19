
import React from "react";
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Header from '@/components/attic/Header';
import Footer from '@/components/attic/Footer';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <div className="flex-grow flex items-center justify-center py-16 px-4">
        <div className="text-center max-w-md">
          <h1 className="text-6xl font-bold text-attic-teal mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-attic-black mb-4">Page not found</h2>
          <p className="text-attic-dark-gray mb-8">
            Sorry, we couldn't find the page you're looking for. It might have been removed or doesn't exist.
          </p>
          <Link to="/" className="inline-block bg-attic-black text-white px-6 py-3 font-medium rounded-sm hover:bg-opacity-90 transition-colors">
            BACK TO HOME
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
