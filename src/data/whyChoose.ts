export interface WhyChooseFeature {
  id: string;
  iconName: string;
  title: string;
  description: string;
  badge?: string;
}

export const WHY_CHOOSE_FEATURES: WhyChooseFeature[] = [
  {
    id: 'engineers',
    iconName: 'ShieldCheck',
    title: 'Professional Engineers',
    description: 'Certified hardware & chip-level technicians with 10+ years of repair experience for all major laptop & desktop brands.',
    badge: 'Certified',
  },
  {
    id: 'parts',
    iconName: 'Cpu',
    title: 'Original Quality Parts',
    description: 'We use genuine grade-A replacement screens, batteries, keyboards, and components backed by official warranty.',
  },
  {
    id: 'pricing',
    iconName: 'Receipt',
    title: 'Transparent Pricing',
    description: 'No hidden diagnostic charges or unexpected costs. We provide a clear cost estimate before starting any repair work.',
    badge: '100% Honest',
  },
  {
    id: 'turnaround',
    iconName: 'Zap',
    title: 'Fast Turnaround',
    description: '95% of common issues like screen replacements, SSD upgrades, and battery changes are completed on the exact same day.',
    badge: 'Same-Day',
  },
  {
    id: 'warranty',
    iconName: 'Award',
    title: 'Warranty Support',
    description: 'All repairs and replaced components come with a hassle-free service warranty for complete peace of mind.',
  },
  {
    id: 'satisfaction',
    iconName: 'HeartHandshake',
    title: 'Customer Satisfaction',
    description: 'Rated 4.9/5 stars on Google by thousands of happy customers in Chhatrapati Sambhajinagar.',
    badge: '⭐ 4.9 Rated',
  },
];
