import React from 'react';
import { HardDrive, Cpu, ShieldCheck, Lock, Database, FileCheck } from 'lucide-react';
import { SectionContainer } from '../../layout/SectionContainer';
import { ResponsiveContainer } from '../../layout/ResponsiveContainer';
import { MotionWrapper } from '../../../animations/MotionWrapper';
import { RecoveryTimeline } from './RecoveryTimeline';
import { CallButton } from '../../common/CallButton';
import { WhatsAppButton } from '../../common/WhatsAppButton';

export const DataRecoverySection: React.FC = () => {
  const supportedDevices = [
    { label: 'Mechanical Hard Drives (HDD)', icon: HardDrive },
    { label: 'Solid State Drives (NVMe / SATA SSD)', icon: Cpu },
    { label: 'USB Pen Drives & Flash Memory', icon: Database },
    { label: 'Camera SD Cards & MicroSD', icon: FileCheck },
    { label: 'External Portable Hard Drives', icon: HardDrive },
  ];

  return (
    <SectionContainer id="data-recovery" padding="lg" background="default">
      <ResponsiveContainer>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8">
            <MotionWrapper variant="fadeUp">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-4">
                <Lock className="w-3.5 h-3.5" />
                <span>100% Confidential & Secure Data Recovery</span>
              </div>

              <h2 className="text-h2 text-text-primary font-bold leading-tight">
                Accidentally Formatted or Dead Hard Drive? We Recover Lost Data.
              </h2>
              <p className="text-body-lg text-text-muted mt-3">
                Don’t panic. Our specialized cleanroom environment and PC-3000 extraction tools recover lost photos, business files, accounting ledgers, and documents from corrupted, dropped, or clicking storage media.
              </p>
            </MotionWrapper>

            {/* Process Timeline */}
            <MotionWrapper variant="fadeUp" delay={0.1}>
              <RecoveryTimeline />
            </MotionWrapper>

            {/* Supported Devices List */}
            <MotionWrapper variant="fadeUp" delay={0.2} className="pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-text-primary mb-3">
                Supported Media & Drives
              </h4>
              <div className="flex flex-wrap items-center gap-2">
                {supportedDevices.map((dev) => {
                  const Icon = dev.icon;
                  return (
                    <span
                      key={dev.label}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-surface-secondary border border-border text-xs text-text-primary font-medium"
                    >
                      <Icon className="w-3.5 h-3.5 text-accent" />
                      {dev.label}
                    </span>
                  );
                })}
              </div>
            </MotionWrapper>

            {/* Action Buttons */}
            <MotionWrapper variant="fadeUp" delay={0.3} className="flex flex-wrap items-center gap-4 pt-8">
              <CallButton variant="primary" size="lg" className="shadow-glow">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                <span>Recover My Data Now</span>
              </CallButton>

              <WhatsAppButton
                variant="glass"
                size="lg"
                message="Hi FixPro! I need urgent data recovery for my drive/laptop."
              />
            </MotionWrapper>
          </div>

          {/* Right Column Shield Illustration */}
          <div className="lg:col-span-4 hidden lg:block">
            <MotionWrapper variant="scale">
              <div className="p-8 rounded-3xl bg-gradient-to-br from-surface to-surface-secondary border border-accent/30 shadow-2xl text-center space-y-6">
                <div className="w-20 h-20 mx-auto rounded-2xl bg-accent/15 border border-accent/30 text-accent flex items-center justify-center shadow-glow">
                  <ShieldCheck className="w-10 h-10 animate-pulse" />
                </div>
                <h3 className="text-xl font-bold font-display text-text-primary">
                  Strict Data Privacy Guarantee
                </h3>
                <p className="text-xs text-text-muted leading-relaxed">
                  Your personal & business files are kept strictly confidential. Non-disclosure agreement (NDA) option available for corporate clients.
                </p>
                <div className="p-3 rounded-xl bg-accent/10 border border-accent/20 text-accent text-xs font-semibold">
                  No Data = No Recovery Fee Policy
                </div>
              </div>
            </MotionWrapper>
          </div>
        </div>
      </ResponsiveContainer>
    </SectionContainer>
  );
};
