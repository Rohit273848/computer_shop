export interface ProcessStepItem {
  number: string;
  title: string;
  description: string;
  iconName: string;
  detailBadge: string;
}

export const REPAIR_PROCESS_STEPS: ProcessStepItem[] = [
  {
    number: '01',
    title: 'Diagnosis',
    description: 'Bring your device or schedule a doorstep visit. Our experts perform a thorough 25-point hardware diagnostic.',
    iconName: 'Search',
    detailBadge: 'Free Inspection',
  },
  {
    number: '02',
    title: 'Cost Estimate',
    description: 'We present a transparent, itemized quote detailing part costs and turnaround time before touch starting any repair work.',
    iconName: 'FileText',
    detailBadge: '100% Upfront',
  },
  {
    number: '03',
    title: 'Precision Repair',
    description: 'Our senior chip-level engineers perform repairs using ESD-safe workstations and grade-A original components.',
    iconName: 'Wrench',
    detailBadge: 'Certified Techs',
  },
  {
    number: '04',
    title: 'Quality Testing',
    description: 'Post-repair thermal stress testing, battery health checks, and performance benchmarking ensure 100% stability.',
    iconName: 'CheckCircle2',
    detailBadge: 'Stress Tested',
  },
  {
    number: '05',
    title: 'Delivery & Warranty',
    description: 'Receive your fully restored computer with an official service warranty certificate and maintenance tips.',
    iconName: 'Truck',
    detailBadge: 'With Warranty',
  },
];
