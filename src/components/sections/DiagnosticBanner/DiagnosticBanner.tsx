import React from 'react';
import { Search, Receipt, CheckCircle, ShieldAlert } from 'lucide-react';
import { SectionContainer } from '../../layout/SectionContainer';
import { ResponsiveContainer } from '../../layout/ResponsiveContainer';
import { MotionWrapper } from '../../../animations/MotionWrapper';

export const DiagnosticBanner: React.FC = () => {
  const highlights = [
    { icon: Search, title: 'Free Device Inspection', desc: 'Comprehensive 25-point hardware check' },
    { icon: ShieldAlert, title: 'No Hidden Charges', desc: 'Zero surprise fees on your bill' },
    { icon: Receipt, title: 'Transparent Estimate', desc: 'Itemized quote before repair starts' },
    { icon: CheckCircle, title: 'Fast Diagnosis', desc: 'Diagnostics ready within 30 minutes' },
  ];

  return (
    <SectionContainer padding="md" background="surface" className="border-y border-border">
      <ResponsiveContainer>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((h, idx) => {
            const Icon = h.icon;
            return (
              <MotionWrapper key={h.title} variant="fadeUp" delay={idx * 0.08}>
                <div className="p-4 rounded-2xl bg-surface-secondary/60 border border-border/80 flex items-start gap-3.5 hover:border-accent/40 transition-colors">
                  <div className="p-2.5 rounded-xl bg-accent/15 text-accent shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-text-primary">{h.title}</h4>
                    <p className="text-xs text-text-muted mt-0.5">{h.desc}</p>
                  </div>
                </div>
              </MotionWrapper>
            );
          })}
        </div>
      </ResponsiveContainer>
    </SectionContainer>
  );
};
