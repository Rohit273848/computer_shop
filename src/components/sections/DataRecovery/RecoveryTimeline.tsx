import React from 'react';
import { motion } from 'framer-motion';
import { Search, HardDrive, ShieldCheck, CheckCircle2, Lock } from 'lucide-react';

export const RecoveryTimeline: React.FC = () => {
  const steps = [
    { num: '01', title: 'Free Evaluation', desc: 'Non-destructive deep drive analysis', icon: Search },
    { num: '02', title: 'File Tree Mapping', desc: 'Raw sector extraction attempt', icon: HardDrive },
    { num: '03', title: 'Cleanroom Recovery', desc: 'Head replacement & firmware fix', icon: ShieldCheck },
    { num: '04', title: 'File Verification', desc: 'Customer verifies essential files', icon: CheckCircle2 },
    { num: '05', title: 'Encrypted Delivery', desc: 'Extracted data handed over securely', icon: Lock },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 my-8">
      {steps.map((step) => {
        const Icon = step.icon;
        return (
          <motion.div
            key={step.num}
            whileHover={{ y: -4 }}
            className="p-4 rounded-2xl bg-surface border border-border/80 text-center flex flex-col items-center group shadow-sm hover:border-accent/40"
          >
            <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 text-accent flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Icon className="w-6 h-6" />
            </div>
            <span className="text-[10px] font-mono font-bold text-accent px-2 py-0.5 bg-accent/10 rounded-full mb-1">
              Step {step.num}
            </span>
            <h4 className="text-xs font-bold text-text-primary mb-1">{step.title}</h4>
            <p className="text-[11px] text-text-muted leading-snug">{step.desc}</p>
          </motion.div>
        );
      })}
    </div>
  );
};
