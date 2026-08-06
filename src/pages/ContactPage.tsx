import React from 'react';
import { SEO } from '../components/common/SEO';
import { PageContainer } from '../components/layout/PageContainer';
import { ResponsiveContainer } from '../components/layout/ResponsiveContainer';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { MotionWrapper } from '../animations/MotionWrapper';
import { ContactSection } from '../components/sections/Contact/ContactSection';
import { GoogleMapSection } from '../components/sections/Map/GoogleMapSection';
import { FAQSection } from '../components/sections/FAQ/FAQSection';

export const ContactPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Contact FixPro Computers | Computer Repair Center in Garkheda"
        description="Get in touch with FixPro Computers near Morya Mangal Karyalay, Shivaji Nagar Road, Garkheda. Call +91 98765 43210 or send a WhatsApp inquiry."
      />
      <PageContainer className="pt-24 pb-16">
        <ResponsiveContainer>
          <Breadcrumbs items={[{ label: 'Contact Us' }]} />

          {/* Large Hero Header */}
          <MotionWrapper variant="fadeUp" className="text-center max-w-3xl mx-auto my-8">
            <span className="text-caption font-semibold text-accent tracking-widest">
              We're Here To Help
            </span>
            <h1 className="text-display text-text-primary font-display font-extrabold mt-2 tracking-tight">
              Contact FixPro Computers
            </h1>
            <p className="text-body-lg text-text-muted mt-3">
              Have a question about a computer repair, doorstep booking, or second-hand laptop availability? Reach out via form, phone, or WhatsApp.
            </p>
          </MotionWrapper>

          {/* Contact Section (Form + Cards) */}
          <ContactSection />

          {/* Google Map */}
          <div className="my-12">
            <GoogleMapSection />
          </div>

          {/* FAQ */}
          <FAQSection />
        </ResponsiveContainer>
      </PageContainer>
    </>
  );
};

export default ContactPage;
