import React from 'react';
import { HardDrive } from 'lucide-react';
import { ServiceDetailLayout } from '../components/layout/ServiceDetailLayout';
import { ROUTES } from '../constants/routes';

export const DataRecoveryPage: React.FC = () => {
  return (
    <ServiceDetailLayout
      seoTitle="Professional Data Recovery Service in Chhatrapati Sambhajinagar"
      seoDescription="Cleanroom hard drive recovery, SSD data extraction, formatted partition recovery, and corrupted USB pen drive restoration at FixPro."
      breadcrumbItems={[
        { label: 'Services', href: ROUTES.SERVICES },
        { label: 'Data Recovery' },
      ]}
      title="Cleanroom Data Recovery Services"
      tagline="Non-destructive data extraction from dead hard drives, corrupted SSDs, and formatted media."
      icon={HardDrive}
      overview="Losing important business files, family photos, or financial records due to a dead hard drive can feel catastrophic. FixPro Computers operates a specialized cleanroom environment equipped with PC-3000 hardware extraction suites to recover data from physically damaged, clicking, water-damaged, or formatted drives with a 99.4% success rate."
      symptomsTitle="Data Loss Scenarios We Recover From"
      symptoms={[
        'Hard drive clicking, grinding noise, or unreadable sectors',
        'Dead NVMe or SATA SSD not detected in BIOS or system',
        'Accidentally formatted OS drive or deleted partition tables',
        'USB flash drive or SD card prompting "Format Disk Before Use"',
        'Water or fire damaged laptop hard drives',
        'Ransomware encrypted files and corrupted database ledgers',
      ]}
      processSteps={[
        {
          title: 'Free Non-Destructive Drive Evaluation',
          desc: 'We inspect drive health and PCB circuits without altering existing magnetic data.',
        },
        {
          title: 'Cleanroom Mechanical Rework (If Needed)',
          desc: 'Head assembly or motor spindle replacement inside ESD-safe cleanroom.',
        },
        {
          title: 'PC-3000 Raw Sector Extraction',
          desc: 'Bit-by-bit raw sector imaging to reconstruct file trees and folder structures.',
        },
        {
          title: 'Verification & Encrypted Handoff',
          desc: 'Customer verifies essential files; recovered data is transferred to a secure target drive.',
        },
      ]}
      benefits={[
        '99.4% Extraction Success Rate',
        'Strict NDA & 100% Confidential Data Guarantee',
        'No Data = No Recovery Fee Policy',
        'Hardware PC-3000 Professional Suite',
        'Emergency 24-Hour Recovery Option',
        'Supports Windows, Mac, Linux & RAID Volumes',
      ]}
      supportedBrands={['Seagate Western Digital (WD)', 'Toshiba Hard Drives', 'Samsung NVMe SSDs', 'Crucial SanDisk Flash', 'Transcend Memory Cards']}
      startingPrice="₹ 999 (Free Evaluation)"
      turnaroundTime="24 to 48 Hours"
      faqs={[
        {
          question: 'What should I do if my hard drive makes a clicking sound?',
          answer: 'Power off the drive immediately! Repeatedly trying to turn on a clicking drive causes physical head scratch damage to magnetic platters, reducing recovery chances. Bring it to FixPro right away.',
        },
        {
          question: 'What if FixPro cannot recover my files?',
          answer: 'We operate on a strict "No Data = No Fee" policy. If we are unable to recover your critical files, you do not pay any recovery charges.',
        },
      ]}
    />
  );
};

export default DataRecoveryPage;
