import React from 'react';
import { Home } from 'lucide-react';
import { ServiceDetailLayout } from '../components/layout/ServiceDetailLayout';
import { ROUTES } from '../constants/routes';

export const DoorstepRepairPage: React.FC = () => {
  return (
    <ServiceDetailLayout
      seoTitle="Doorstep Computer Repair Service in Chhatrapati Sambhajinagar"
      seoDescription="Convenient home and office doorstep computer repair services. On-site hardware upgrades, screen replacements, virus removal, and network troubleshooting."
      breadcrumbItems={[
        { label: 'Services', href: ROUTES.SERVICES },
        { label: 'Doorstep Service' },
      ]}
      title="Doorstep Computer Repair Services"
      tagline="Professional hardware engineers visit your home or office for on-site repairs."
      icon={Home}
      overview="Busy with work or unable to visit our service center? FixPro Computers brings certified hardware engineers directly to your doorstep across Chhatrapati Sambhajinagar. We carry mobile diagnostic tools, spare screens, batteries, SSDs, and virus removal utilities to repair your laptop or desktop right in front of your eyes."
      symptomsTitle="Services Performed at Doorstep"
      symptoms={[
        'On-site screen and battery replacements for laptops',
        'High-speed SSD upgrades & RAM memory additions',
        'Windows 10/11 OS installation, driver updates & optimization',
        'Deep virus, spyware & malware cleanup',
        'Office desktop PC assembly, PSU replacement & cabling',
        'Home Wi-Fi router, printer & network troubleshooting',
      ]}
      processSteps={[
        {
          title: 'Schedule Your Visit',
          desc: 'Call us or request via WhatsApp with your location and device issue.',
        },
        {
          title: 'Engineer Arrival',
          desc: 'Our background-verified technician arrives at your home/office with necessary spares.',
        },
        {
          title: 'On-Site Diagnostic & Repair',
          desc: 'Free initial inspection followed by transparent repair execution in front of you.',
        },
        {
          title: 'Testing & Warranty Digital Invoice',
          desc: 'You test the device, receive an official invoice with service warranty, and make payment.',
        },
      ]}
      benefits={[
        'Zero Travel & Zero Loss of Productive Time',
        'Transparent Repair Executed In Your Sight',
        'Background-Verified & Professional Engineers',
        'Same-Day Visit Slot Booking Available',
        'Full Service Warranty Included',
        'Available For Homes, Offices, Clinics & Schools',
      ]}
      supportedBrands={['Garkheda', 'Shivaji Nagar', 'Usmanpura', 'Cidco', 'Nirala Bazar', 'Waluj', 'All Chhatrapati Sambhajinagar Areas']}
      startingPrice="₹ 299 (Visit + Diagnostic)"
      turnaroundTime="Same Day Visit (Within 2-4 Hours)"
      faqs={[
        {
          question: 'What if my computer cannot be fixed at doorstep?',
          answer: 'If the repair requires heavy micro-soldering or BGA cleanroom equipment, our engineer will safely transport the device to our lab, fix it, and return it to your doorstep.',
        },
        {
          question: 'Are doorstep engineers safe for home visits?',
          answer: 'Yes, 100%. All FixPro engineers are full-time employees, background verified, and carry official company ID badges.',
        },
      ]}
    />
  );
};

export default DoorstepRepairPage;
