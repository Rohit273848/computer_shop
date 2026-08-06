import React from 'react';
import { Laptop } from 'lucide-react';
import { ServiceDetailLayout } from '../components/layout/ServiceDetailLayout';
import { ROUTES } from '../constants/routes';

export const LaptopRepairPage: React.FC = () => {
  return (
    <ServiceDetailLayout
      seoTitle="Laptop Repair Service in Chhatrapati Sambhajinagar"
      seoDescription="Expert laptop repair services for Dell, HP, Lenovo, Asus, Acer, and Apple MacBooks. Screen replacement, battery repair, liquid damage restoration, and hinge fixes."
      breadcrumbItems={[
        { label: 'Services', href: ROUTES.SERVICES },
        { label: 'Laptop Repair' },
      ]}
      title="Laptop Repair Services"
      tagline="Fast, chip-level hardware repairs & display replacements for all major laptop brands."
      icon={Laptop}
      overview="FixPro Computers is Chhatrapati Sambhajinagar's leading specialized laptop repair hub. Whether your laptop has a cracked screen, failing battery, liquid spill damage, broken hinge, or motherboard failure, our certified technicians use ESD-safe workstations and original replacement parts to restore your laptop to peak performance."
      symptomsTitle="Common Laptop Issues We Repair"
      symptoms={[
        'Cracked, flickering, or line-affected laptop displays',
        'Battery not charging or draining rapidly',
        'Overheating, loud fan noise, and sudden thermal shutdown',
        'Broken screen hinges and cracked plastic/aluminum chassis',
        'Non-responsive keyboard keys or liquid spilled trackpad',
        'Laptop not powering on or stuck in continuous boot loop',
      ]}
      processSteps={[
        {
          title: 'Initial 25-Point Diagnostic',
          desc: 'We perform a free comprehensive hardware inspection to pinpoint the exact broken component.',
        },
        {
          title: 'Transparent Upfront Quote',
          desc: 'We present an itemized price breakdown for part costs and labor before starting work.',
        },
        {
          title: 'Precision Component Repair',
          desc: 'Certified engineers replace damaged components or perform micro-soldering on logic boards.',
        },
        {
          title: 'Stress Testing & Quality QA',
          desc: 'Post-repair benchmarking ensures 100% thermal stability, battery health, and display clarity.',
        },
      ]}
      benefits={[
        'Same-Day Screen & Battery Replacements',
        'ESD-Protected Cleanroom Repair Bench',
        'Genuine Grade-A Replacement Parts',
        'Up to 6-Month Repair Warranty',
        'Free Pickup & Doorstep Visit Available',
        '100% Data Confidentiality Guarantee',
      ]}
      supportedBrands={['Dell', 'HP', 'Lenovo', 'Apple MacBook Air/Pro', 'Asus', 'Acer', 'MSI', 'Samsung', 'Microsoft Surface']}
      startingPrice="₹ 350"
      turnaroundTime="2 to 4 Hours (Same Day)"
      faqs={[
        {
          question: 'How long does a laptop screen replacement take?',
          answer: 'Screen replacements for standard 14" and 15.6" Dell, HP, Lenovo, and Asus laptops are completed on the same day within 1 to 2 hours.',
        },
        {
          question: 'Do you repair liquid damage on laptops?',
          answer: 'Yes! We perform ultrasonic board cleaning and power IC micro-soldering to restore water-damaged laptop motherboards.',
        },
        {
          question: 'Will my data remain safe during laptop repair?',
          answer: 'Yes, your hard drive or SSD remains untouched during screen, battery, or hinge repairs.',
        },
      ]}
    />
  );
};

export default LaptopRepairPage;
