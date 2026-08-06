import React from 'react';
import { Phone, MapPin, Wrench } from 'lucide-react';
import { SectionContainer } from '../../layout/SectionContainer';
import { ResponsiveContainer } from '../../layout/ResponsiveContainer';
import { MotionWrapper } from '../../../animations/MotionWrapper';
import { CallButton } from '../../common/CallButton';
import { WhatsAppButton } from '../../common/WhatsAppButton';
import { BUSINESS_INFO } from '../../../constants/business';

export const FinalCTA: React.FC = () => {
  return (
    <SectionContainer padding="lg" background="default" className="relative">
      <ResponsiveContainer>
        <MotionWrapper variant="scale">
          <div className="relative rounded-3xl bg-gradient-to-br from-accent/25 via-slate-900 to-slate-950 border border-accent/40 p-8 sm:p-14 shadow-2xl overflow-hidden text-center text-white">
            {/* Background Glow */}
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent/30 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto space-y-6">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/20 border border-accent/30 text-xs font-semibold text-accent-cyan">
                <Wrench className="w-3.5 h-3.5" />
                Senior Repair Engineers Standing By
              </span>

              <h2 className="text-display text-white font-display font-black tracking-tight">
                Need Professional Computer Repair?
              </h2>

              <p className="text-body-lg text-slate-300 max-w-xl mx-auto">
                We're ready to get your device back to perfect condition with transparent pricing, original parts, and same-day turnaround.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <CallButton variant="primary" size="lg" className="shadow-glow text-base">
                  <Phone className="w-5 h-5 text-emerald-400" />
                  <span>Call Now for Free Advice</span>
                </CallButton>

                <WhatsAppButton
                  variant="glass"
                  size="lg"
                  message="Hi FixPro! I want to consult a technician about my computer issue."
                  className="text-base text-white border-white/20 hover:bg-white/10"
                />

                <a
                  href={BUSINESS_INFO.location.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-surface/80 border border-white/20 text-white text-base font-medium hover:bg-surface flex items-center gap-2"
                >
                  <MapPin className="w-4 h-4 text-accent" />
                  <span>Visit Store</span>
                </a>
              </div>
            </div>
          </div>
        </MotionWrapper>
      </ResponsiveContainer>
    </SectionContainer>
  );
};
