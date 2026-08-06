import React, { useState, useMemo } from 'react';
import { SEO } from '../components/common/SEO';
import { PageContainer } from '../components/layout/PageContainer';
import { ResponsiveContainer } from '../components/layout/ResponsiveContainer';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { MotionWrapper } from '../animations/MotionWrapper';
import { Link } from 'react-router-dom';
import {
  Laptop,
  Monitor,
  Cpu,
  HardDrive,
  Zap,
  MemoryStick,
  Tv,
  Cog,
  Home,
  Building2,
  ShieldCheck,
  Wrench,
  Search,
  ArrowRight,
  LucideIcon,
} from 'lucide-react';
import { ROUTES } from '../constants/routes';
import { Button } from '../components/ui/button';

interface DetailedService {
  id: string;
  title: string;
  category: 'Hardware' | 'Upgrades' | 'Data & OS' | 'Enterprise & On-Site';
  shortDesc: string;
  icon: LucideIcon;
  features: string[];
  route: string;
  startingPrice: string;
}

export const SERVICES_HUB_DATA: DetailedService[] = [
  {
    id: 'laptop-repair',
    title: 'Laptop Repair',
    category: 'Hardware',
    shortDesc: 'Hardware diagnostics, screen replacements, hinge repairs, and liquid damage restoration.',
    icon: Laptop,
    features: ['Display Panel Replacement', 'Battery & Charging Port Fix', 'Hinge & Chassis Repair', 'Liquid Spill Care'],
    route: ROUTES.LAPTOP_REPAIR,
    startingPrice: '₹ 350',
  },
  {
    id: 'desktop-repair',
    title: 'Desktop & Gaming PC Repair',
    category: 'Hardware',
    shortDesc: 'Custom gaming rig troubleshooting, PSU replacement, overheating fixes, and component upgrades.',
    icon: Monitor,
    features: ['Power Supply (PSU) Swap', 'GPU Thermal Repasting', 'BSOD Crash Resolution', 'Custom Rig Cable Routing'],
    route: ROUTES.DESKTOP_REPAIR,
    startingPrice: '₹ 300',
  },
  {
    id: 'motherboard-repair',
    title: 'Chip-Level Motherboard Repair',
    category: 'Hardware',
    shortDesc: 'Advanced BGA micro-soldering, short circuit resolution, power IC replacement, and BIOS flashing.',
    icon: Cpu,
    features: ['Infrared Thermal Diagnostics', 'Power IC & MOSFET Replacement', 'BGA Reballing Workstation', 'Corrosion Ultrasonic Clean'],
    route: ROUTES.MOTHERBOARD_REPAIR,
    startingPrice: '₹ 850',
  },
  {
    id: 'data-recovery',
    title: 'HDD & SSD Data Recovery',
    category: 'Data & OS',
    shortDesc: 'Deep recovery from dead hard drives, corrupted SSDs, formatted partitions, and unreadable flash drives.',
    icon: HardDrive,
    features: ['100% Confidentiality NDA', 'Mechanical Head Replacement', 'PC-3000 Raw Extraction', 'No Data No Fee Policy'],
    route: ROUTES.DATA_RECOVERY,
    startingPrice: '₹ 999',
  },
  {
    id: 'doorstep-repair',
    title: 'Doorstep Repair Service',
    category: 'Enterprise & On-Site',
    shortDesc: 'Certified engineers visit your home or office to diagnose and repair your devices on-site.',
    icon: Home,
    features: ['Same-Day Technician Dispatch', 'Zero Travel Needed', 'Transparent On-Site Fix', 'Full Service Warranty'],
    route: ROUTES.DOORSTEP_REPAIR,
    startingPrice: '₹ 299',
  },
  {
    id: 'amc-services',
    title: 'AMC Annual Maintenance',
    category: 'Enterprise & On-Site',
    shortDesc: 'Comprehensive maintenance contracts for corporate offices, schools, and home businesses.',
    icon: Building2,
    features: ['Priority 4-Hour Response', 'Zero Labor Charges', 'Quarterly Health Audits', 'Assigned Dedicated Tech'],
    route: ROUTES.AMC_SERVICES,
    startingPrice: '₹ 1,499 / PC',
  },
  {
    id: 'ssd-upgrade',
    title: 'High-Speed NVMe SSD Upgrade',
    category: 'Upgrades',
    shortDesc: 'Supercharge your slow computer speed up to 10x with high-speed NVMe M.2 SSD installations.',
    icon: Zap,
    features: ['10x Faster Boot Speed', 'Full Data Cloning Included', '5-Year Manufacturer Warranty', 'Crucial & Samsung Drives'],
    route: ROUTES.ACCESSORIES,
    startingPrice: '₹ 1,850',
  },
  {
    id: 'ram-upgrade',
    title: 'DDR4 / DDR5 RAM Upgrade',
    category: 'Upgrades',
    shortDesc: 'Boost multitasking performance and eliminate lag with high-bandwidth memory modules.',
    icon: MemoryStick,
    features: ['Instant Multitasking Boost', 'DDR4 & DDR5 Dual Channel', 'Corsair & Crucial RAMs', 'Instant Compatibility Check'],
    route: ROUTES.ACCESSORIES,
    startingPrice: '₹ 1,250',
  },
  {
    id: 'screen-replacement',
    title: 'Laptop Screen Replacement',
    category: 'Hardware',
    shortDesc: 'Instant replacement for cracked, flickering, or line-affected FHD and 4K laptop displays.',
    icon: Tv,
    features: ['Genuine Grade-A IPS Panels', 'Same-Day 1-Hour Fitting', 'Glossy & Matte Anti-Glare', '6-Month Display Warranty'],
    route: ROUTES.LAPTOP_REPAIR,
    startingPrice: '₹ 2,450',
  },
  {
    id: 'windows-installation',
    title: 'Genuine Windows OS Setup',
    category: 'Data & OS',
    shortDesc: 'Genuine Windows 10/11 OS installation, driver updates, virus removal, and speed tuning.',
    icon: Cog,
    features: ['Official Digital License', 'Complete Driver Updates', 'Data Backup & Restore', 'Bloatware & Virus Removal'],
    route: ROUTES.SERVICES,
    startingPrice: '₹ 450',
  },
  {
    id: 'virus-removal',
    title: 'Virus & Ransomware Removal',
    category: 'Data & OS',
    shortDesc: 'Complete security audit, spyware removal, rootkit cleaning, and anti-virus installation.',
    icon: ShieldCheck,
    features: ['Deep Registry Scan', 'Malware & Trojan Clean', 'Browser Hijacker Removal', 'Antivirus License Setup'],
    route: ROUTES.SERVICES,
    startingPrice: '₹ 350',
  },
  {
    id: 'fan-repair',
    title: 'Thermal Cleaning & Fan Repair',
    category: 'Hardware',
    shortDesc: 'Dust extraction, fan bearing lubrication, and Arctic MX-4 thermal paste reapplication.',
    icon: Wrench,
    features: ['Overheating Fix', 'Arctic MX-4 Thermal Paste', 'Silent Fan Tuning', 'Heatsink Dust Flush'],
    route: ROUTES.LAPTOP_REPAIR,
    startingPrice: '₹ 400',
  },
];

export const ServicesPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Hardware', 'Upgrades', 'Data & OS', 'Enterprise & On-Site'];

  const filteredServices = useMemo(() => {
    return SERVICES_HUB_DATA.filter((srv) => {
      const matchesCategory = selectedCategory === 'All' || srv.category === selectedCategory;
      const matchesSearch =
        searchQuery === '' ||
        srv.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        srv.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <>
      <SEO
        title="All Computer Repair Services in Chhatrapati Sambhajinagar"
        description="Comprehensive computer repair services: Laptop repair, desktop PC fixing, motherboard micro-soldering, data recovery, SSD upgrades, and doorstep visits."
      />
      <PageContainer className="pt-24 pb-16">
        <ResponsiveContainer>
          <Breadcrumbs items={[{ label: 'Services' }]} />

          {/* Header */}
          <MotionWrapper variant="fadeUp" className="text-center max-w-3xl mx-auto my-8">
            <span className="text-caption font-semibold text-accent tracking-widest">
              Technical Excellence
            </span>
            <h1 className="text-display text-text-primary font-display font-extrabold mt-2 tracking-tight">
              Complete Computer Repair & Upgrade Services
            </h1>
            <p className="text-body-lg text-text-muted mt-3">
              Explore our full spectrum of specialized hardware, software, data recovery, and enterprise maintenance solutions.
            </p>
          </MotionWrapper>

          {/* Search & Filter Controls */}
          <MotionWrapper variant="fadeUp" delay={0.1} className="mb-10 space-y-4">
            <div className="relative max-w-md mx-auto">
              <Search className="w-4 h-4 text-text-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search services (e.g. screen, motherboard, data recovery)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-surface border border-border text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-xs px-4 py-2 rounded-full font-medium transition-all ${
                    selectedCategory === cat
                      ? 'bg-accent text-white font-semibold shadow-glow'
                      : 'bg-surface-secondary text-text-secondary border border-border hover:bg-surface-tertiary'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </MotionWrapper>

          {/* Services Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service, idx) => {
              const IconComp = service.icon;
              return (
                <MotionWrapper key={service.id} variant="fadeUp" delay={idx * 0.04}>
                  <div className="p-6 rounded-2xl bg-surface border border-border/80 shadow-md hover:border-accent/50 hover:shadow-glow flex flex-col justify-between h-full group transition-all">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                          <IconComp className="w-6 h-6" />
                        </div>
                        <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase bg-surface-secondary text-text-muted border border-border">
                          {service.category}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold font-display text-text-primary group-hover:text-accent transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xs text-text-muted mt-1.5 leading-relaxed">{service.shortDesc}</p>

                      {/* Feature Bullet Checklist */}
                      <ul className="my-4 space-y-1.5 text-xs text-text-secondary border-t border-border/40 pt-3">
                        {service.features.map((feat) => (
                          <li key={feat} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-border/50 flex items-center justify-between">
                      <span className="text-xs font-semibold text-text-muted">
                        From <span className="text-text-primary font-bold">{service.startingPrice}</span>
                      </span>
                      <Link to={service.route}>
                        <Button variant="ghost" size="sm" className="gap-1 text-xs text-accent hover:bg-accent hover:text-white">
                          <span>View Page</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </MotionWrapper>
              );
            })}
          </div>
        </ResponsiveContainer>
      </PageContainer>
    </>
  );
};

export default ServicesPage;
