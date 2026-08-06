export interface PreviewService {
  id: string;
  title: string;
  shortDescription: string;
  iconName: string;
  tag: string;
  route: string;
}

export const PREVIEW_SERVICES: PreviewService[] = [
  {
    id: 'laptop-repair',
    title: 'Laptop Repair',
    shortDescription: 'Hardware diagnostics, motherboard chip-level repair, hinge fixing, and liquid damage restoration.',
    iconName: 'Laptop',
    tag: 'Most Popular',
    route: '/services',
  },
  {
    id: 'desktop-repair',
    title: 'Desktop Repair',
    shortDescription: 'Custom PC troubleshooting, PSU replacement, overheating fixes, and component upgrades.',
    iconName: 'Monitor',
    tag: 'Custom PCs',
    route: '/services',
  },
  {
    id: 'motherboard-repair',
    title: 'Motherboard Repair',
    shortDescription: 'Advanced BGA micro-soldering, short circuit resolution, power IC replacement, and bios flashing.',
    iconName: 'Cpu',
    tag: 'Chip Level',
    route: '/services',
  },
  {
    id: 'data-recovery',
    title: 'Data Recovery',
    shortDescription: 'Deep recovery from dead hard drives, corrupted SSDs, formatted partitions, and unreadable flash drives.',
    iconName: 'HardDrive',
    tag: '99% Success',
    route: '/data-recovery',
  },
  {
    id: 'ssd-upgrade',
    title: 'SSD Upgrade',
    shortDescription: 'Supercharge your slow computer speed up to 10x with high-speed NVMe M.2 SSD installations.',
    iconName: 'Zap',
    tag: '10x Speed',
    route: '/accessories',
  },
  {
    id: 'ram-upgrade',
    title: 'RAM Upgrade',
    shortDescription: 'Boost multitasking performance and eliminate lag with high-bandwidth DDR4/DDR5 memory modules.',
    iconName: 'MemoryStick',
    tag: 'Instant Boost',
    route: '/accessories',
  },
  {
    id: 'screen-replacement',
    title: 'Screen Replacement',
    shortDescription: 'Instant replacement for cracked, flickering, or line-affected FHD and 4K laptop displays.',
    iconName: 'Tv',
    tag: 'Same Day',
    route: '/services',
  },
  {
    id: 'windows-installation',
    title: 'Windows Installation',
    shortDescription: 'Genuine Windows 10/11 OS installation, driver updates, virus removal, and optimization.',
    iconName: 'Cog',
    tag: 'Clean OS',
    route: '/services',
  },
];
