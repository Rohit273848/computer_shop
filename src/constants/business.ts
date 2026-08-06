import { BusinessInfo } from '../types/business';

export const BUSINESS_INFO: BusinessInfo = {
  name: 'FixPro Computers',
  legalName: 'FixPro Computer Sales & Services',
  tagline: 'Fast, Premium & Reliable Computer Repairs',
  description: 'Chhatrapati Sambhajinagar’s premier computer repair center specializing in laptop repair, desktop repair, data recovery, doorstep repair, AMC services, second-hand laptops, and accessories.',
  location: {
    landmark: 'Near Morya Mangal Karyalay',
    street: 'Shivaji Nagar Road',
    area: 'Garkheda',
    city: 'Chhatrapati Sambhajinagar',
    state: 'Maharashtra',
    fullAddress: 'Near Morya Mangal Karyalay, Shivaji Nagar Road, Garkheda, Chhatrapati Sambhajinagar, Maharashtra',
    googleMapsUrl: 'https://maps.google.com/?q=Near+Morya+Mangal+Karyalay+Shivaji+Nagar+Road+Garkheda+Chhatrapati+Sambhajinagar',
  },
  contact: {
    phonePrimary: '+91 98765 43210',
    phoneSecondary: '+91 98765 01234',
    whatsappNumber: '919876543210',
    email: 'support@fixprocomputers.in',
  },
  hours: {
    weekdays: '10:00 AM - 8:30 PM',
    saturday: '10:00 AM - 8:30 PM',
    sunday: '11:00 AM - 4:00 PM (On Call)',
  },
  servicesList: [
    'Laptop Repair',
    'Desktop Repair',
    'Computer Accessories',
    'Second-Hand Laptop Dealer',
    'Doorstep Computer Repair',
    'Data Recovery',
    'AMC Services',
  ],
};

export const SOCIAL_LINKS = [
  {
    platform: 'WhatsApp',
    url: `https://wa.me/${BUSINESS_INFO.contact.whatsappNumber}`,
    ariaLabel: 'Chat on WhatsApp',
    iconName: 'MessageSquare',
  },
  {
    platform: 'Phone',
    url: `tel:${BUSINESS_INFO.contact.phonePrimary.replace(/\s+/g, '')}`,
    ariaLabel: 'Call FixPro Computers',
    iconName: 'Phone',
  },
  {
    platform: 'Google Maps',
    url: BUSINESS_INFO.location.googleMapsUrl,
    ariaLabel: 'Find us on Google Maps',
    iconName: 'MapPin',
  },
];
