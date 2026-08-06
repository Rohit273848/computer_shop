export interface StatItem {
  value: number;
  suffix: string;
  prefix?: string;
  decimals?: number;
  label: string;
  sublabel: string;
  iconName: string;
}

export const STATISTICS_ITEMS: StatItem[] = [
  {
    value: 5000,
    suffix: '+',
    label: 'Devices Repaired',
    sublabel: 'Laptops, Desktops & MacBooks',
    iconName: 'Laptop',
  },
  {
    value: 4.9,
    suffix: '★',
    decimals: 1,
    label: 'Google Rating',
    sublabel: 'From verified local customers',
    iconName: 'Star',
  },
  {
    value: 10,
    suffix: '+',
    label: 'Years Experience',
    sublabel: 'Serving Chhatrapati Sambhajinagar',
    iconName: 'ShieldCheck',
  },
  {
    value: 95,
    suffix: '%',
    label: 'Same-Day Resolutions',
    sublabel: 'Fastest turnaround in town',
    iconName: 'Zap',
  },
  {
    value: 100,
    suffix: '%',
    label: 'Transparent Pricing',
    sublabel: 'No surprise costs guaranteed',
    iconName: 'CheckCircle',
  },
];
