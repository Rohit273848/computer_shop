export interface GalleryItem {
  id: string;
  category: 'Laptop Repair' | 'Desktop Repair' | 'Motherboard Repair' | 'Data Recovery' | 'SSD Upgrade' | 'Store Photos';
  title: string;
  description: string;
  image: string;
}

export interface BeforeAfterItem {
  id: string;
  title: string;
  category: string;
  beforeImage: string;
  afterImage: string;
  beforeLabel: string;
  afterLabel: string;
  description: string;
}
