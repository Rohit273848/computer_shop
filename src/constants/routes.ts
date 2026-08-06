export const ROUTES = {
  HOME: '/',
  SERVICES: '/services',
  LAPTOP_REPAIR: '/services/laptop-repair',
  DESKTOP_REPAIR: '/services/desktop-repair',
  MOTHERBOARD_REPAIR: '/services/motherboard-repair',
  DATA_RECOVERY: '/data-recovery',
  DOORSTEP_REPAIR: '/doorstep-repair',
  AMC_SERVICES: '/amc-services',
  SECOND_HAND_LAPTOPS: '/second-hand-laptops',
  ACCESSORIES: '/accessories',
  ABOUT: '/about',
  CONTACT: '/contact',
} as const;

export type RouteKey = keyof typeof ROUTES;
