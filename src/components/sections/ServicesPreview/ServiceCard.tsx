import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Laptop, Monitor, Cpu, HardDrive, Zap, MemoryStick, Tv, Cog, ArrowRight, LucideIcon } from 'lucide-react';
import { PreviewService } from '../../../data/servicesPreview';
import { cardHover } from '../../../animations/variants';

const iconMap: Record<string, LucideIcon> = {
  Laptop,
  Monitor,
  Cpu,
  HardDrive,
  Zap,
  MemoryStick,
  Tv,
  Cog,
};

export const ServiceCard: React.FC<{ service: PreviewService }> = ({ service }) => {
  const IconComponent = iconMap[service.iconName] || Laptop;

  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      variants={cardHover}
      className="relative p-6 sm:p-7 rounded-2xl bg-surface border border-border/80 shadow-sm flex flex-col justify-between group overflow-hidden"
    >
      {/* Dynamic Background Hover Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <div>
        <div className="flex items-center justify-between mb-5 z-10 relative">
          <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:scale-110 transition-transform duration-300">
            <IconComponent className="w-6 h-6" />
          </div>

          <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider bg-surface-secondary text-text-muted border border-border">
            {service.tag}
          </span>
        </div>

        <h3 className="text-h3 text-text-primary mb-2 font-bold tracking-tight group-hover:text-accent transition-colors">
          {service.title}
        </h3>

        <p className="text-body text-text-muted leading-relaxed">
          {service.shortDescription}
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-border/50 flex items-center justify-between">
        <Link
          to={service.route}
          className="text-xs font-semibold text-text-primary group-hover:text-accent transition-colors inline-flex items-center gap-1.5"
        >
          <span>View Details</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
};
