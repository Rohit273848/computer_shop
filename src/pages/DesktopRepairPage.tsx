import React from 'react';
import { Monitor } from 'lucide-react';
import { ServiceDetailLayout } from '../components/layout/ServiceDetailLayout';
import { ROUTES } from '../constants/routes';

export const DesktopRepairPage: React.FC = () => {
  return (
    <ServiceDetailLayout
      seoTitle="Desktop & PC Repair Service in Chhatrapati Sambhajinagar"
      seoDescription="Professional desktop PC repair, custom gaming rig troubleshooting, PSU replacement, liquid cooling, GPU repairs, and Windows OS optimization."
      breadcrumbItems={[
        { label: 'Services', href: ROUTES.SERVICES },
        { label: 'Desktop Repair' },
      ]}
      title="Desktop PC & Gaming Rig Repairs"
      tagline="Hardware troubleshooting, PSU replacements, custom PC builds, and thermal cooling optimization."
      icon={Monitor}
      overview="From custom gaming desktop PCs to commercial office workstations, FixPro Computers offers complete desktop repair services. Our engineers diagnose faulty power supply units (PSU), defective RAM sticks, failing graphic cards (GPU), processor overheating, and motherboard BIOS errors."
      symptomsTitle="Common Desktop Problems We Fix"
      symptoms={[
        'PC turns on but gives no display signal on monitor',
        'Frequent Blue Screen of Death (BSOD) crashes & random reboots',
        'Burnt power supply unit (PSU) or sudden tripping',
        'Graphic card overheating, artifact lines, or fan failure',
        'Slow booting speed, frozen desktop OS, and hard drive clicking',
        'Custom liquid cooling loop leaks and pump failures',
      ]}
      processSteps={[
        {
          title: 'Power & Bench Diagnostic',
          desc: 'We test voltage outputs, RAM integrity, and GPU thermals using hardware diagnostic meters.',
        },
        {
          title: 'Component Inspection Quote',
          desc: 'We recommend component repairs or exact replacement parts with zero hidden fees.',
        },
        {
          title: 'Hardware Repair & Cable Routing',
          desc: 'Installation of high-efficiency PSUs, SSDs, or thermal repasting with clean cable routing.',
        },
        {
          title: 'Stress Testing & Benchmark',
          desc: 'We run 3DMark and Prime95 stress tests to ensure 100% stability under peak gaming/editing loads.',
        },
      ]}
      benefits={[
        'Custom Gaming PC Hardware Specialists',
        'High-Efficiency 80+ Gold Power Supplies',
        'Arctic MX-4 & Liquid Metal Thermal Care',
        'Pro Cable Management & Airflow Optimization',
        'On-Site Office Workstation Repairs',
        'Full Warranty on Replaced Components',
      ]}
      supportedBrands={['Custom Built PCs', 'Dell OptiPlex', 'HP Pavilion Desktop', 'Lenovo ThinkCentre', 'Asus ROG Desktop', 'Acer Predator Rigs']}
      startingPrice="₹ 300"
      turnaroundTime="Same Day Service"
      faqs={[
        {
          question: 'Can you upgrade my old desktop PC for gaming?',
          answer: 'Yes! We can upgrade your processor, add dedicated GPUs (Nvidia RTX/GTX), install NVMe SSDs, and upgrade RAM to handle modern games smoothly.',
        },
        {
          question: 'Do you fix PCs that turn on but show no display?',
          answer: 'Yes, no-display issues are usually caused by faulty RAM, CMOS battery, PSU voltage drop, or GPU contact issues. We fix these within 1 to 2 hours.',
        },
      ]}
    />
  );
};

export default DesktopRepairPage;
