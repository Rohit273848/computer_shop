import React from 'react';
import { Phone, MapPin, Clock } from 'lucide-react';
import { SectionContainer } from '../../layout/SectionContainer';
import { ResponsiveContainer } from '../../layout/ResponsiveContainer';
import { MotionWrapper } from '../../../animations/MotionWrapper';
import { CallButton } from '../../common/CallButton';
import { WhatsAppButton } from '../../common/WhatsAppButton';
import { BUSINESS_INFO } from '../../../constants/business';

export const CTA: React.FC = () => {
  return (
    <SectionContainer padding="lg" background="default" className="relative">
      <ResponsiveContainer>
        <MotionWrapper variant="scale">
          <div className="relative rounded-3xl bg-gradient-to-r from-blue-900 via-indigo-950 to-slate-900 border border-white/15 p-8 sm:p-12 lg:p-16 shadow-2xl overflow-hidden text-center text-white">
            {/* Background Decorative Glow & Mesh */}
            <div className="absolute -top-32 -left-32 w-80 h-80 bg-accent/30 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto space-y-6">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-accent-cyan">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                Emergency Doorstep & Store Repairs Available
              </span>

              <h2 className="text-display text-white font-display font-extrabold tracking-tight">
                Need Your Device Fixed Today?
              </h2>

              <p className="text-body-lg text-slate-300 max-w-xl mx-auto">
                Our experienced engineers are ready to help. Get a fast diagnostic check and same-day turnaround with transparent pricing.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <CallButton variant="primary" size="lg" className="shadow-glow text-base">
                  <Phone className="w-5 h-5 text-emerald-400" />
                  <span>Call Now for Immediate Assistance</span>
                </CallButton>

                <WhatsAppButton
                  variant="glass"
                  size="lg"
                  message="Hi FixPro! I need urgent help repairing my laptop/desktop."
                  className="text-base text-white border-white/20 hover:bg-white/10"
                />
              </div>

              {/* Location & Hours Reminder Footer Bar inside CTA */}
              <div className="pt-8 mt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-accent" />
                  <span>{BUSINESS_INFO.location.landmark}, Garkheda</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-400" />
                  <span>Mon-Sat: {BUSINESS_INFO.hours.weekdays}</span>
                </div>
              </div>
            </div>
          </div>
        </MotionWrapper>
      </ResponsiveContainer>
    </SectionContainer>
  );
};
