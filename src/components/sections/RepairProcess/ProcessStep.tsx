import React from 'react';
import { motion } from 'framer-motion';
import { Search, FileText, Wrench, CheckCircle2, Truck, LucideIcon } from 'lucide-react';
import { ProcessStepItem } from '../../../data/repairProcess';

const iconMap: Record<string, LucideIcon> = {
  Search,
  FileText,
  Wrench,
  CheckCircle2,
  Truck,
};

interface ProcessStepProps {
  step: ProcessStepItem;
  isLast: boolean;
}

export const ProcessStep: React.FC<ProcessStepProps> = ({ step, isLast }) => {
  const IconComponent = iconMap[step.iconName] || Search;

  return (
    <div className="relative flex-1 flex flex-col items-center text-center group px-2">
      {/* Step Icon Node */}
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        className="relative z-10 w-16 h-16 rounded-2xl bg-surface border-2 border-border group-hover:border-accent flex items-center justify-center text-accent shadow-md group-hover:shadow-glow transition-all duration-300 mb-5"
      >
        <IconComponent className="w-7 h-7" />
        <span className="absolute -top-2 -right-2 text-[10px] font-mono font-bold bg-accent text-white w-6 h-6 rounded-full flex items-center justify-center shadow-sm">
          {step.number}
        </span>
      </motion.div>

      {/* Connecting Line (Desktop) */}
      {!isLast && (
        <div className="hidden lg:block absolute top-8 left-[calc(50%+2rem)] right-[calc(-50%+2rem)] h-0.5 bg-border group-hover:bg-accent/50 transition-colors z-0" />
      )}

      {/* Content */}
      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-accent/10 text-accent mb-2">
        {step.detailBadge}
      </span>

      <h3 className="text-h4 font-bold text-text-primary mb-1.5">
        {step.title}
      </h3>

      <p className="text-xs text-text-muted leading-relaxed max-w-xs">
        {step.description}
      </p>
    </div>
  );
};
