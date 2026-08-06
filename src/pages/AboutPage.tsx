import React from 'react';
import { SEO } from '../components/common/SEO';
import { PageContainer } from '../components/layout/PageContainer';
import { ResponsiveContainer } from '../components/layout/ResponsiveContainer';

export const AboutPage: React.FC = () => {
  return (
    <>
      <SEO title="About Us" description="Learn more about FixPro Computers in Chhatrapati Sambhajinagar." />
      <PageContainer>
        <ResponsiveContainer>
          <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
            <h1 className="text-h1 text-text-primary font-bold">About Us Page</h1>
            <p className="text-body text-text-muted mt-3">Phase 1 Placeholder</p>
          </div>
        </ResponsiveContainer>
      </PageContainer>
    </>
  );
};

export default AboutPage;
