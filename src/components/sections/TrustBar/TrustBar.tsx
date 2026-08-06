import React from 'react';
import { motion } from 'framer-motion';
import { Star, Zap, ShieldCheck, Truck, Receipt, CheckCircle } from 'lucide-react';
import { ResponsiveContainer } from '../../layout/ResponsiveContainer';

export const TrustBar: React.FC = () => {
  const trustItems = [
    { icon: Star, label: '4.9 Google Rating', color: 'text-amber-400', isStar: true },
    { icon: Zap, label: 'Same-Day Repair', color: 'text-accent' },
    { icon: Receipt, label: 'No Hidden Charges', color: 'text-emerald-400' },
    { icon: Truck, label: 'Doorstep Service', color: 'text-purple-400' },
    { icon: ShieldCheck, label: 'Professional Engineers', color: 'text-blue-400' },
    { icon: CheckCircle, label: 'All Major Brands Supported', color: 'text-cyan-400' },
  ];

  return (
    <section id="trust-bar" className="py-6 bg-surface/60 border-y border-border/80 relative z-20 backdrop-blur-md">
      <ResponsiveContainer size="xl">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {trustItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -3, borderColor: 'var(--color-accent)' }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-2.5 p-3 rounded-xl bg-surface-secondary/60 border border-border/60 shadow-sm transition-colors group cursor-default"
              >
                <div className={`p-1.5 rounded-lg bg-surface group-hover:scale-110 transition-transform ${item.color}`}>
                  <Icon className={`w-4 h-4 ${item.isStar ? 'fill-current' : ''}`} />
                </div>
                <span className="text-xs font-semibold text-text-primary tracking-tight">
                  {item.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </ResponsiveContainer>
    </section>
  );
};
