export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  badge?: string;
  iconName?: string;
  isExternal?: boolean;
}

export interface HeaderProps {
  sticky?: boolean;
}
