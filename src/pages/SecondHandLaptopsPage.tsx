import React from 'react';
import { SEO } from '../components/common/SEO';
import { PageContainer } from '../components/layout/PageContainer';
import { ResponsiveContainer } from '../components/layout/ResponsiveContainer';

export const SecondHandLaptopsPage: React.FC = () => {
  return (
    <>
      <SEO title="Second-Hand Laptops" description="Certified refurbished and used laptops at FixPro Computers." />
      <PageContainer>
        <ResponsiveContainer>
          <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
            <h1 className="text-h1 text-text-primary font-bold">Second-Hand Laptops Page</h1>
            <p className="text-body text-text-muted mt-3">Phase 1 Placeholder</p>
          </div>
        </ResponsiveContainer>
      </PageContainer>
    </>
  );
};

export default SecondHandLaptopsPage;
