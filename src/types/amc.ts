export interface AMCPlan {
  id: string;
  name: string;
  targetAudience: string;
  pricePerUnit: string;
  billingCycle: string;
  badge?: string;
  features: string[];
  isPopular?: boolean;
}

export interface AMCComparisonPoint {
  feature: string;
  withoutAMC: string;
  withAMC: string;
}
