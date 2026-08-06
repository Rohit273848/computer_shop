export interface FAQItem {
  id: string;
  category: 'General' | 'Repair & Warranty' | 'Doorstep & Cost' | 'Data & Upgrades';
  question: string;
  answer: string;
}
