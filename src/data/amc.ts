import { AMCPlan, AMCComparisonPoint } from '../types/amc';

export const AMC_PLANS: AMCPlan[] = [
  {
    id: 'amc-basic',
    name: 'Home Office AMC',
    targetAudience: 'Ideal for 1-5 Home & Small Office Computers',
    pricePerUnit: '₹ 1,499',
    billingCycle: 'Per PC / Year',
    features: [
      '2 Comprehensive Preventive Services',
      'Free OS Optimization & Virus Removal',
      'Doorstep Engineer Response within 24 Hours',
      'Zero Labor Charges for Hardware Repairs',
      'Remote Desktop Troubleshooting Support',
    ],
  },
  {
    id: 'amc-pro',
    name: 'Corporate Business AMC',
    targetAudience: 'Ideal for Commercial Offices, Schools & Clinics (5-50 PCs)',
    pricePerUnit: 'Custom Quote',
    billingCycle: 'Annual Enterprise Contract',
    badge: 'Most Popular',
    isPopular: true,
    features: [
      'Quarterly Scheduled Hardware Diagnostics',
      'Guaranteed 4-Hour Priority On-Site Response',
      'Dedicated Account Engineer Assignment',
      'Network, Printer & Router Maintenance',
      'Monthly Data Backup Verification',
      'Unlimited Emergency On-Demand Visits',
    ],
  },
];

export const AMC_COMPARISONS: AMCComparisonPoint[] = [
  {
    feature: 'Response Speed',
    withoutAMC: 'Delayed 24-48 hr queue',
    withAMC: 'Priority 4-hr fast engineer dispatch',
  },
  {
    feature: 'Labor Repair Costs',
    withoutAMC: 'Pay full fee every single visit',
    withAMC: 'Zero labor charges on all repairs',
  },
  {
    feature: 'Preventive Care',
    withoutAMC: 'Only react after complete breakdown',
    withAMC: 'Scheduled quarterly preventive health checks',
  },
  {
    feature: 'System Downtime',
    withoutAMC: 'Unplanned productivity loss',
    withAMC: 'Near zero downtime with backup loaner units',
  },
  {
    feature: 'Dedicated Support',
    withoutAMC: 'Generic support helpline',
    withAMC: 'Assigned senior technical engineer',
  },
];
