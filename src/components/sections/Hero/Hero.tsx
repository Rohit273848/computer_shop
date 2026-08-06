import React from 'react';
import { ChevronDown } from 'lucide-react';
import { HeroContent } from './HeroContent';
import { HeroIllustration } from './HeroIllustration';
import { ResponsiveContainer } from '../../layout/ResponsiveContainer';
import { scrollToSection } from '../../../utils/scroll';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-background">
      {/* Background Animated Gradient Mesh */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-accent/15 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <ResponsiveContainer className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-7">
            <HeroContent />
          </div>
          <div className="lg:col-span-5">
            <HeroIllustration />
          </div>
        </div>
      </ResponsiveContainer>

      {/* Smooth Scroll Indicator */}
      <button
        onClick={() => scrollToSection('trust-bar')}
        aria-label="Scroll to Trust Bar"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 p-2.5 rounded-full bg-surface-secondary/70 border border-border text-text-muted hover:text-accent hover:border-accent/40 transition-all duration-300 animate-bounce cursor-pointer z-10"
      >
        <ChevronDown className="w-4 h-4" />
      </button>
    </section>
  );
};
