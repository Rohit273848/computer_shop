import React from 'react';
import { motion } from 'framer-motion';
import { Home, Building2, Search, Receipt, ShieldCheck, Zap, Phone } from 'lucide-react';
import { SectionContainer } from '../../layout/SectionContainer';
import { ResponsiveContainer } from '../../layout/ResponsiveContainer';
import { MotionWrapper } from '../../../animations/MotionWrapper';
import { CallButton } from '../../common/CallButton';
import { WhatsAppButton } from '../../common/WhatsAppButton';

export const DoorstepService: React.FC = () => {
  const doorstepFeatures = [
    { icon: Home, title: 'Home Visit', desc: 'Repair at your living room comfort' },
    { icon: Building2, title: 'Office Service', desc: 'Minimizing commercial workstation downtime' },
    { icon: Search, title: 'Quick On-Site Check', desc: '25-point instant diagnostic' },
    { icon: Receipt, title: 'Transparent Pricing', desc: 'Clear quote before work begins' },
    { icon: ShieldCheck, title: 'Certified Techs', desc: 'Background-verified experts' },
    { icon: Zap, title: 'Same-Day Dispatch', desc: 'Fast turnaround in Garkheda & city' },
  ];

  return (
    <SectionContainer id="doorstep" padding="lg" background="surface">
      <ResponsiveContainer>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Interactive Visual Illustration */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <MotionWrapper variant="scale">
              <div className="relative w-full max-w-md aspect-square rounded-3xl bg-gradient-to-br from-accent/15 via-blue-900/10 to-transparent border border-accent/20 p-6 flex flex-col justify-between overflow-hidden shadow-2xl">
                {/* Background Tech Mesh */}
                <div className="absolute inset-0 bg-[radial-gradient(#00b4d8_1px,transparent_1px)] [background-size:20px_20px] opacity-15 pointer-events-none" />

                {/* Top Badge */}
                <div className="flex items-center justify-between z-10">
                  <span className="text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider bg-accent text-white shadow-glow">
                    Doorstep Service Ready
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-semibold bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span>Engineers On Call</span>
                  </div>
                </div>

                {/* Center Doorstep Visual Graphic */}
                <div className="my-auto flex flex-col items-center text-center z-10 py-6">
                  <motion.div
                    animate={{ y: [-6, 6, -6] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    className="w-24 h-24 rounded-3xl bg-surface border border-accent/30 shadow-glow flex items-center justify-center text-accent mb-4"
                  >
                    <Home className="w-12 h-12" />
                  </motion.div>
                  <h3 className="text-xl font-bold font-display text-text-primary">
                    FixPro Express Visit
                  </h3>
                  <p className="text-xs text-text-muted mt-1 max-w-xs">
                    We bring ESD-safe toolkit and spare parts directly to your doorstep.
                  </p>
                </div>

                {/* Bottom Highlight */}
                <div className="z-10 p-3 rounded-2xl bg-surface-secondary/90 border border-border flex items-center justify-between text-xs">
                  <span className="text-text-muted">Serving All Areas in Chhatrapati Sambhajinagar</span>
                  <span className="text-accent font-bold">100% Safe</span>
                </div>
              </div>
            </MotionWrapper>
          </div>

          {/* Right Column: Content & Feature Grid */}
          <div className="lg:col-span-7 space-y-6">
            <MotionWrapper variant="fadeUp">
              <span className="text-caption font-semibold text-accent tracking-widest">
                No Need To Leave Your Desk
              </span>
              <h2 className="text-h2 text-text-primary mt-2 font-bold leading-tight">
                Professional Doorstep Computer Repair Services
              </h2>
              <p className="text-body-lg text-text-muted mt-3">
                Our certified hardware engineers visit your home or office to diagnose and repair your devices on-site, saving your valuable time while guaranteeing high-grade service quality.
              </p>
            </MotionWrapper>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 pt-2">
              {doorstepFeatures.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <MotionWrapper key={item.title} variant="fadeUp" delay={idx * 0.05}>
                    <div className="p-3.5 rounded-xl bg-surface border border-border/80 hover:border-accent/40 transition-colors flex items-start gap-3 shadow-sm group">
                      <div className="p-2 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-colors shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-text-primary">{item.title}</h4>
                        <p className="text-[11px] text-text-muted leading-tight mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  </MotionWrapper>
                );
              })}
            </div>

            {/* CTAs */}
            <MotionWrapper variant="fadeUp" delay={0.3} className="flex flex-wrap items-center gap-4 pt-4">
              <CallButton variant="primary" size="lg" className="shadow-glow">
                <Phone className="w-5 h-5 text-emerald-400" />
                <span>Book Home Visit Now</span>
              </CallButton>

              <WhatsAppButton
                variant="glass"
                size="lg"
                message="Hi FixPro! I would like to book a doorstep computer repair engineer for my home/office."
              />
            </MotionWrapper>
          </div>
        </div>
      </ResponsiveContainer>
    </SectionContainer>
  );
};
