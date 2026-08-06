export interface Product {
  id: string;
  brand: string;
  model: string;
  processor: string;
  ram: string;
  storage: string;
  display: string;
  condition: 'Like New' | 'Certified Refurbished' | 'Excellent';
  warranty: string;
  price: number;
  originalPrice: number;
  availability: 'In Stock' | 'Limited Stock' | 'Reserved';
  image: string;
  features: string[];
}

export interface ProductFilterState {
  brand: string;
  ram: string;
  priceRange: string;
  condition: string;
}
