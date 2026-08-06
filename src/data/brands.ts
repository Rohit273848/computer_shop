export interface Brand {
  name: string;
  category: string;
  tagline: string;
}

export const SUPPORTED_BRANDS: Brand[] = [
  { name: 'Dell', category: 'Laptops & Desktops', tagline: 'XPS, Inspiron, Latitude, Alienware' },
  { name: 'HP', category: 'Laptops & Printers', tagline: 'Spectre, Envy, Pavilion, Omen' },
  { name: 'Lenovo', category: 'Laptops & ThinkPads', tagline: 'ThinkPad, Yoga, IdeaPad, Legion' },
  { name: 'Asus', category: 'Gaming & Ultrabooks', tagline: 'ROG, TUF, ZenBook, VivoBook' },
  { name: 'Acer', category: 'Computers & Monitors', tagline: 'Predator, Nitro, Swift, Aspire' },
  { name: 'MSI', category: 'Gaming Laptops', tagline: 'Stealth, Raider, Katana, Modern' },
  { name: 'Apple', category: 'MacBook & iMac', tagline: 'MacBook Pro, MacBook Air, Mac mini' },
  { name: 'Samsung', category: 'Galaxy Books & Drives', tagline: 'Galaxy Book, SSDs, Displays' },
  { name: 'Microsoft', category: 'Surface Devices', tagline: 'Surface Pro, Surface Laptop, Studio' },
  { name: 'Honor', category: 'MagicBook Series', tagline: 'MagicBook 14, 15, Pro' },
  { name: 'Realme', category: 'RealmeBook Series', tagline: 'Realme Book Slim, Prime' },
];
