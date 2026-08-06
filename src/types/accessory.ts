export interface Accessory {
  id: string;
  category: 'SSD' | 'RAM' | 'Mouse' | 'Keyboard' | 'Charger' | 'Cooling' | 'Hub' | 'Adapter' | 'Bag' | 'Audio';
  title: string;
  specs: string;
  price: number;
  originalPrice: number;
  badge?: string;
  iconName: string;
  image: string;
}
