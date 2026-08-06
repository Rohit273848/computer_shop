import React from 'react';
import { ThemeProvider } from '../context/ThemeContext';
import { SEOProvider } from '../context/SEOContext';

export const AppProviders: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <SEOProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </SEOProvider>
  );
};
