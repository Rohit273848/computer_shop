import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Cpu, Receipt, Zap, Award, HeartHandshake, LucideIcon } from 'lucide-react';
import { WhyChooseFeature } from '../../../data/whyChoose';
import { cardHover } from '../../../animations/variants';

const iconMap: Record<string, LucideIcon> = {
  ShieldCheck,
  Cpu,
  Receipt,
  Zap,
  Award,
  HeartHandshake,
};

export const FeatureCard: React.FC<{ feature: WhyChooseFeature }> = ({ feature }) => {
  const IconComponent = iconMap[feature.iconName] || ShieldCheck;

  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      variants={cardHover}
      className="relative p-6 sm:p-7 rounded-2xl bg-surface border border-border/80 shadow-sm transition-all duration-300 flex flex-col justify-between group overflow-hidden"
    >
      {/* Background Subtle Gradient Glow */}
      <div className="absolute -top-12 -right-12 w-32 h-32 bg-accent/10 rounded-full blur-2xl group-hover:bg-accent/20 transition-colors pointer-events-none" />

      <div>
        <div className="flex items-center justify-between mb-5">
          <div className="w-12 h-12 rounded-xl bg-surface-secondary border border-border/80 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300 shadow-sm">
            <IconComponent className="w-6 h-6" />
          </div>

          {feature.badge && (
            <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider bg-accent/15 text-accent border border-accent/20">
              {feature.badge}
            </span>
          )}
        </div>

        <h3 className="text-h3 text-text-primary mb-2.5 font-bold tracking-tight">
          {feature.title}
        </h3>

        <p className="text-body text-text-muted leading-relaxed">
          {feature.description}
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-border/50 flex items-center text-xs font-semibold text-accent group-hover:text-accent-hover transition-colors">
        <span>Learn more</span>
        <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
      </div>
    </motion.div>
  );
};
