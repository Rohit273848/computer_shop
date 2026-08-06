import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { initLenis, destroyLenis } from '../../lib/lenis';
import { scrollToTop } from '../../utils/scroll';

export const MainLayout: React.FC = () => {
  const location = useLocation();

  // Initialize Lenis smooth scrolling globally
  useEffect(() => {
    initLenis();
    return () => {
      destroyLenis();
    };
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    scrollToTop(false);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-background text-text-primary">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
