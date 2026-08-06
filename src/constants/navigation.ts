import { NavigationItem } from '../types/navigation';
import { FooterSection } from '../types/footer';
import { ROUTES } from './routes';

export const NAV_ITEMS: NavigationItem[] = [
  { id: 'home', label: 'Home', href: ROUTES.HOME },
  { id: 'services', label: 'Services', href: ROUTES.SERVICES },
  { id: 'second-hand', label: 'Used Laptops', href: ROUTES.SECOND_HAND_LAPTOPS, badge: 'Verified' },
  { id: 'accessories', label: 'Accessories', href: ROUTES.ACCESSORIES },
  { id: 'data-recovery', label: 'Data Recovery', href: ROUTES.DATA_RECOVERY },
  { id: 'amc', label: 'AMC Contracts', href: ROUTES.AMC_SERVICES },
  { id: 'about', label: 'About Us', href: ROUTES.ABOUT },
  { id: 'contact', label: 'Contact', href: ROUTES.CONTACT },
];

export const FOOTER_SECTIONS: FooterSection[] = [
  {
    title: 'Services',
    links: [
      { label: 'Laptop Repair', href: ROUTES.LAPTOP_REPAIR },
      { label: 'Desktop Repair', href: ROUTES.DESKTOP_REPAIR },
      { label: 'Motherboard Repair', href: ROUTES.MOTHERBOARD_REPAIR },
      { label: 'Data Recovery', href: ROUTES.DATA_RECOVERY },
      { label: 'Doorstep Service', href: ROUTES.DOORSTEP_REPAIR },
      { label: 'AMC Maintenance', href: ROUTES.AMC_SERVICES },
    ],
  },
  {
    title: 'Products & Sales',
    links: [
      { label: 'Second-Hand Laptops', href: ROUTES.SECOND_HAND_LAPTOPS },
      { label: 'Computer Accessories', href: ROUTES.ACCESSORIES },
      { label: 'NVMe SSD Upgrades', href: ROUTES.ACCESSORIES },
      { label: 'RAM Memory Modules', href: ROUTES.ACCESSORIES },
      { label: 'Original Chargers', href: ROUTES.ACCESSORIES },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About FixPro', href: ROUTES.ABOUT },
      { label: 'Contact Store', href: ROUTES.CONTACT },
      { label: 'Doorstep Booking', href: ROUTES.DOORSTEP_REPAIR },
      { label: 'Terms & Service', href: ROUTES.CONTACT },
    ],
  },
];
