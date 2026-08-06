export interface Testimonial {
  id: string;
  name: string;
  location: string;
  avatar: string;
  rating: number;
  date: string;
  deviceRepaired: string;
  reviewText: string;
  verified: boolean;
  source: 'Google Review' | 'Direct Customer';
}
