import React from 'react';
import { SEO } from '../components/common/SEO';
import { PageContainer } from '../components/layout/PageContainer';
import { ResponsiveContainer } from '../components/layout/ResponsiveContainer';

export const ContactPage: React.FC = () => {
  return (
    <>
      <SEO title="Contact Us" description="Get in touch with FixPro Computers near Morya Mangal Karyalay." />
      <PageContainer>
        <ResponsiveContainer>
          <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
            <h1 className="text-h1 text-text-primary font-bold">Contact Us Page</h1>
            <p className="text-body text-text-muted mt-3">Phase 1 Placeholder</p>
          </div>
        </ResponsiveContainer>
      </PageContainer>
    </>
  );
};

export default ContactPage;
