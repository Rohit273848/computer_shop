import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'framer-motion';
import { Laptop, Star, ShieldCheck, Zap, CheckCircle, LucideIcon } from 'lucide-react';
import { StatItem } from '../../../data/statistics';

const iconMap: Record<string, LucideIcon> = {
  Laptop,
  Star,
  ShieldCheck,
  Zap,
  CheckCircle,
};

export const StatCard: React.FC<{ stat: StatItem }> = ({ stat }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const IconComponent = iconMap[stat.iconName] || Laptop;

  return (
    <div
      ref={ref}
      className="p-6 rounded-2xl bg-surface border border-border/80 shadow-sm flex flex-col items-center text-center group hover:border-accent/40 transition-colors"
    >
      <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-4 group-hover:scale-110 transition-transform">
        <IconComponent className="w-6 h-6" />
      </div>

      <div className="text-3xl sm:text-4xl font-extrabold font-display text-text-primary tracking-tight mb-1">
        {stat.prefix}
        {isInView ? (
          <CountUp
            start={0}
            end={stat.value}
            duration={2.5}
            decimals={stat.decimals || 0}
            separator=","
          />
        ) : (
          0
        )}
        <span className="text-accent">{stat.suffix}</span>
      </div>

      <p className="text-sm font-bold text-text-primary mt-1">{stat.label}</p>
      <p className="text-xs text-text-muted mt-0.5">{stat.sublabel}</p>
    </div>
  );
};
