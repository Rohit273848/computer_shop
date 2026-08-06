import React from 'react';
import { Building2 } from 'lucide-react';
import { ServiceDetailLayout } from '../components/layout/ServiceDetailLayout';
import { ROUTES } from '../constants/routes';

export const AmcServicesPage: React.FC = () => {
  return (
    <ServiceDetailLayout
      seoTitle="Annual Maintenance Contracts (AMC) in Chhatrapati Sambhajinagar"
      seoDescription="Corporate computer AMC services, preventive maintenance, priority 4-hour technical response, and zero labor charges for offices, schools, and clinics."
      breadcrumbItems={[
        { label: 'Services', href: ROUTES.SERVICES },
        { label: 'AMC Contracts' },
      ]}
      title="Annual Maintenance Contracts (AMC)"
      tagline="Preventive computer maintenance & priority on-site IT support for commercial offices."
      icon={Building2}
      overview="Unexpected computer breakdowns in an office environment lead to lost employee productivity and costly emergency repair bills. FixPro Annual Maintenance Contracts (AMC) provide corporate businesses, hospitals, financial firms, and educational institutes with scheduled preventive maintenance, rapid 4-hour on-site engineer response, and zero labor repair charges."
      symptomsTitle="Problems Prevented By FixPro AMC"
      symptoms={[
        'Unplanned office workstation downtime & corrupt operating systems',
        'Sudden virus infections spreading across local office networks',
        'Dust-clogged office PCs leading to thermal shutdown',
        'High unexpected labor repair charges on individual breakdown calls',
        'Missing data backups when hard drives fail unexpectedly',
        'Unmanaged office printers, Wi-Fi routers, and network switches',
      ]}
      processSteps={[
        {
          title: 'Initial Office IT Infrastructure Audit',
          desc: 'We inspect all PCs, laptops, network routers, and printers to log baseline hardware health.',
        },
        {
          title: 'Custom Contract Proposal',
          desc: 'We present a tailored SLA contract detailing response times, preventive schedules, and pricing.',
        },
        {
          title: 'Scheduled Quarterly Health Audits',
          desc: 'Engineers perform routine thermal cleaning, driver updates, and OS optimization.',
        },
        {
          title: 'Priority 4-Hour Breakdown Support',
          desc: 'Dedicated technician assigned to dispatch on priority whenever an issue arises.',
        },
      ]}
      benefits={[
        'Guaranteed Priority 4-Hour On-Site Dispatch',
        'Zero Labor Charges On All Repairs',
        'Quarterly Scheduled Preventive Dust & Thermal Care',
        'Dedicated Senior IT Account Engineer',
        'Monthly Automated Local & Cloud Backup Checks',
        'Loaner Standby PCs Provided During Repairs',
      ]}
      supportedBrands={['Commercial Office Workstations', 'Call Center Terminals', 'School Computer Labs', 'Hospital Administrative PCs', 'Chartered Accountant Firms']}
      startingPrice="₹ 1,499 / PC per Year"
      turnaroundTime="4-Hour Priority SLA On-Site"
      faqs={[
        {
          question: 'Are replacement hardware parts included in the AMC?',
          answer: 'Comprehensive AMC contracts can include spare part replacements, while Non-Comprehensive AMC contracts cover all labor and service charges with parts billed at exact wholesale cost.',
        },
        {
          question: 'What is the minimum number of computers required for an AMC?',
          answer: 'Our Home Office AMC covers starting from 1 to 5 computers, while Corporate AMC covers 5 to 50+ workstations.',
        },
      ]}
    />
  );
};

export default AmcServicesPage;
