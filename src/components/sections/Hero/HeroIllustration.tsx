import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, ShieldCheck, Zap, HardDrive, CheckCircle2 } from 'lucide-react';

export const HeroIllustration: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    setMousePosition({ x, y });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMousePosition({ x: 0, y: 0 })}
      className="relative w-full aspect-square max-w-lg mx-auto flex items-center justify-center select-none"
    >
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 via-cyan-500/15 to-transparent rounded-full filter blur-3xl opacity-70 animate-pulse" />

      {/* Main Glass Motherboard Card */}
      <motion.div
        animate={{
          rotateY: mousePosition.x * 20,
          rotateX: -mousePosition.y * 20,
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        style={{ transformStyle: 'preserve-3d' }}
        className="relative w-4/5 h-4/5 rounded-3xl bg-surface/80 backdrop-blur-2xl border border-white/15 p-6 shadow-glass flex flex-col justify-between overflow-hidden"
      >
        {/* Decorative Circuit Paths */}
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]" />

        {/* Top Header Row inside Card */}
        <div className="flex items-center justify-between z-10">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          </div>
          <span className="text-[10px] font-mono text-accent font-semibold px-2 py-0.5 rounded-md bg-accent/10 border border-accent/20">
            CHIP-LEVEL REPAIR READY
          </span>
        </div>

        {/* Center Main Processor Graphic */}
        <div className="relative my-auto flex flex-col items-center justify-center py-6 z-10">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            className="absolute w-36 h-36 rounded-full border border-dashed border-accent/30 pointer-events-none"
          />
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="w-24 h-24 rounded-2xl bg-gradient-to-br from-accent via-blue-600 to-indigo-900 flex items-center justify-center shadow-glow border border-white/20"
          >
            <Cpu className="w-12 h-12 text-white animate-pulse" />
          </motion.div>
          <span className="mt-3 text-xs font-display font-semibold text-text-primary tracking-wide">
            FixPro Diagnostic Engine
          </span>
          <span className="text-[11px] text-text-muted">99.8% Hardware Precision</span>
        </div>

        {/* Bottom Hardware Metric */}
        <div className="flex items-center justify-between z-10 bg-surface-secondary/70 backdrop-blur-md p-3 rounded-xl border border-border">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-medium text-text-primary">Same-Day Diagnostic</span>
          </div>
          <span className="text-xs font-bold text-accent">Active</span>
        </div>
      </motion.div>

      {/* Floating Widget 1: Thermal & Battery Health */}
      <motion.div
        animate={{
          y: [-8, 8, -8],
          x: mousePosition.x * -15,
        }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-2 -left-2 sm:top-4 sm:-left-4 z-20 bg-surface/90 backdrop-blur-xl border border-border p-3.5 rounded-2xl shadow-xl flex items-center gap-3"
      >
        <div className="p-2.5 rounded-xl bg-amber-500/15 text-amber-400">
          <Zap className="w-5 h-5" />
        </div>
        <div>
          <p className="text-xs font-bold text-text-primary">Express Repair</p>
          <p className="text-[10px] text-text-muted">Within 2–4 Hours</p>
        </div>
      </motion.div>

      {/* Floating Widget 2: Data Recovery Status */}
      <motion.div
        animate={{
          y: [8, -8, 8],
          x: mousePosition.x * 15,
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute -bottom-2 -right-2 sm:bottom-4 sm:-right-4 z-20 bg-surface/90 backdrop-blur-xl border border-border p-3.5 rounded-2xl shadow-xl flex items-center gap-3"
      >
        <div className="p-2.5 rounded-xl bg-emerald-500/15 text-emerald-400">
          <HardDrive className="w-5 h-5" />
        </div>
        <div>
          <p className="text-xs font-bold text-text-primary">Data Recovery</p>
          <p className="text-[10px] text-text-muted">High Recovery Rate</p>
        </div>
      </motion.div>

      {/* Floating Widget 3: Certified Quality */}
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute top-1/2 -right-4 -translate-y-1/2 z-20 bg-surface/90 backdrop-blur-xl border border-accent/30 p-2.5 rounded-full shadow-glow flex items-center justify-center text-accent"
      >
        <ShieldCheck className="w-6 h-6" />
      </motion.div>
    </div>
  );
};
