import React from 'react';
import { Phone, Zap } from 'lucide-react';
import { SectionContainer } from '../../layout/SectionContainer';
import { ResponsiveContainer } from '../../layout/ResponsiveContainer';
import { MotionWrapper } from '../../../animations/MotionWrapper';
import { CallButton } from '../../common/CallButton';
import { WhatsAppButton } from '../../common/WhatsAppButton';

export const EmergencyBanner: React.FC = () => {
  return (
    <SectionContainer padding="sm" background="default" className="relative overflow-hidden">
      <ResponsiveContainer size="xl">
        <MotionWrapper variant="scale">
          <div className="relative rounded-2xl bg-gradient-to-r from-amber-500/20 via-accent/20 to-emerald-500/20 border border-amber-500/30 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl backdrop-blur-md">
            {/* Left Content */}
            <div className="flex items-center gap-4 text-left">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/20 border border-amber-500/40 text-amber-400 flex items-center justify-center shrink-0 animate-pulse">
                <Zap className="w-7 h-7" />
              </div>
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30">
                  Rapid Assistance
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-text-primary mt-1">
                  Need Urgent Computer Repair?
                </h3>
                <p className="text-xs sm:text-sm text-text-muted mt-0.5">
                  Our certified engineers are standing by for immediate on-site or store solutions.
                </p>
              </div>
            </div>

            {/* Right Buttons */}
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <CallButton variant="primary" size="md" className="shadow-glow">
                <Phone className="w-4 h-4 text-emerald-400 animate-pulse" />
                <span>Call Emergency Support</span>
              </CallButton>

              <WhatsAppButton
                variant="glass"
                size="md"
                message="EMERGENCY: I need urgent laptop/desktop repair right now!"
              />
            </div>
          </div>
        </MotionWrapper>
      </ResponsiveContainer>
    </SectionContainer>
  );
};
