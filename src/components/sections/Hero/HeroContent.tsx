import React from 'react';
import { motion } from 'framer-motion';
import { Star, ShieldCheck, Zap, Receipt, Wrench, Truck } from 'lucide-react';
import { CallButton } from '../../common/CallButton';
import { WhatsAppButton } from '../../common/WhatsAppButton';
import { fadeUp, staggerContainer } from '../../../animations/variants';

export const HeroContent: React.FC = () => {
  const trustBadges = [
    { icon: Star, text: '4.9/5 Google Rated', color: 'text-amber-400' },
    { icon: Zap, text: 'Same-Day Repairs', color: 'text-accent' },
    { icon: Receipt, text: 'Transparent Pricing', color: 'text-emerald-400' },
    { icon: ShieldCheck, text: 'Certified Engineers', color: 'text-blue-400' },
    { icon: Truck, text: 'Doorstep Service', color: 'text-purple-400' },
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="flex flex-col space-y-6 lg:space-y-8 text-left max-w-2xl"
    >
      {/* Top Pill Badge */}
      <motion.div variants={fadeUp} className="inline-flex">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-secondary border border-border text-xs font-medium text-text-primary shadow-sm hover:border-accent/40 transition-colors">
          <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
          <span className="flex h-2 w-2 rounded-full bg-emerald-500" />
          <span className="text-text-muted">Chhatrapati Sambhajinagar Premier Repair Hub</span>
          <span className="text-border">|</span>
          <span className="flex items-center gap-1 font-semibold text-amber-400">
            <Star className="w-3.5 h-3.5 fill-current" /> 4.9 Rating
          </span>
        </div>
      </motion.div>

      {/* Main Headline */}
      <motion.h1
        variants={fadeUp}
        className="text-display text-text-primary font-display font-extrabold tracking-tight"
      >
        Fast, Reliable{' '}
        <span className="bg-gradient-to-r from-blue-500 via-accent to-cyan-400 bg-clip-text text-transparent">
          Laptop & Computer
        </span>{' '}
        Repairs You Can Trust.
      </motion.h1>

      {/* Subheadline */}
      <motion.p
        variants={fadeUp}
        className="text-body-lg text-text-secondary leading-relaxed"
      >
        Expert repair services for laptops, desktops, motherboards, data recovery, SSD upgrades, and more. Transparent pricing with same-day solutions whenever possible.
      </motion.p>

      {/* Primary Action Buttons */}
      <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 pt-2">
        <CallButton variant="primary" size="lg" className="shadow-glow text-base">
          <Wrench className="w-5 h-5" />
          <span>Book Repair Now</span>
        </CallButton>

        <WhatsAppButton
          variant="glass"
          size="lg"
          message="Hello FixPro Computers! I want to book a repair service for my computer."
          className="text-base"
        />
      </motion.div>

      {/* Quick Trust Highlights Row */}
      <motion.div variants={fadeUp} className="pt-4 border-t border-border/50">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2.5">
          {trustBadges.map((badge, idx) => {
            const Icon = badge.icon;
            return (
              <div key={idx} className="flex items-center gap-1.5 text-xs font-medium text-text-muted">
                <Icon className={`w-3.5 h-3.5 ${badge.color}`} />
                <span>{badge.text}</span>
              </div>
            );
          })}
        </div>
      </motion.div>
    </motion.div>
  );
};
