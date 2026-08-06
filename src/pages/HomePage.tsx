import React from 'react';
import { SEO } from '../components/common/SEO';
import { Hero } from '../components/sections/Hero/Hero';
import { TrustBar } from '../components/sections/TrustBar/TrustBar';
import { WhyChoose } from '../components/sections/WhyChoose/WhyChoose';
import { ServicesPreview } from '../components/sections/ServicesPreview/ServicesPreview';
import { Brands } from '../components/sections/Brands/Brands';
import { RepairProcess } from '../components/sections/RepairProcess/RepairProcess';
import { Statistics } from '../components/sections/Statistics/Statistics';
import { DoorstepService } from '../components/sections/DoorstepService/DoorstepService';
import { DiagnosticBanner } from '../components/sections/DiagnosticBanner/DiagnosticBanner';
import { SecondHandLaptops } from '../components/sections/SecondHandLaptops/SecondHandLaptops';
import { AccessoriesShowcase } from '../components/sections/Accessories/AccessoriesShowcase';
import { DataRecoverySection } from '../components/sections/DataRecovery/DataRecoverySection';
import { AMCSection } from '../components/sections/AMC/AMCSection';
import { Testimonials } from '../components/sections/Testimonials/Testimonials';
import { RepairGallery } from '../components/sections/Gallery/RepairGallery';
import { BeforeAfterShowcase } from '../components/sections/BeforeAfter/BeforeAfterShowcase';
import { FAQSection } from '../components/sections/FAQ/FAQSection';
import { EmergencyBanner } from '../components/sections/EmergencyBanner/EmergencyBanner';
import { ContactSection } from '../components/sections/Contact/ContactSection';
import { GoogleMapSection } from '../components/sections/Map/GoogleMapSection';
import { FinalCTA } from '../components/sections/FinalCTA/FinalCTA';

export const HomePage: React.FC = () => {
  return (
    <>
      <SEO
        title="Laptop & Computer Repair Shop in Chhatrapati Sambhajinagar"
        description="FixPro Computers offers fast, reliable laptop & desktop repairs, doorstep service, motherboard micro-soldering, data recovery, refurbished laptops, and accessories near Morya Mangal Karyalay, Garkheda."
      />
      <main className="w-full overflow-hidden space-y-0">
        {/* Phase 2 Sections */}
        <Hero />
        <TrustBar />
        <WhyChoose />
        <ServicesPreview />
        <Brands />
        <RepairProcess />
        <Statistics />

        {/* Phase 3 Sections */}
        <DoorstepService />
        <DiagnosticBanner />
        <SecondHandLaptops />
        <AccessoriesShowcase />
        <DataRecoverySection />
        <AMCSection />

        {/* Phase 4 Trust & Conversion Sections */}
        <Testimonials />
        <RepairGallery />
        <BeforeAfterShowcase />
        <FAQSection />
        <EmergencyBanner />
        <ContactSection />
        <GoogleMapSection />
        <FinalCTA />
      </main>
    </>
  );
};

export default HomePage;
