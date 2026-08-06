import React from 'react';
import { SectionContainer } from '../../layout/SectionContainer';
import { ResponsiveContainer } from '../../layout/ResponsiveContainer';
import { MotionWrapper } from '../../../animations/MotionWrapper';
import { ProcessStep } from './ProcessStep';
import { REPAIR_PROCESS_STEPS } from '../../../data/repairProcess';

export const RepairProcess: React.FC = () => {
  return (
    <SectionContainer padding="lg" background="surface">
      <ResponsiveContainer>
        <MotionWrapper variant="fadeUp" className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-caption font-semibold text-accent tracking-widest">
            Streamlined Repair Workflow
          </span>
          <h2 className="text-h2 text-text-primary mt-2 font-bold">
            How FixPro Restores Your Device
          </h2>
          <p className="text-body text-text-muted mt-2">
            From initial diagnostic check to post-repair quality certification, experience a hassle-free, professional service.
          </p>
        </MotionWrapper>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4 relative">
          {REPAIR_PROCESS_STEPS.map((step, idx) => (
            <MotionWrapper key={step.number} variant="fadeUp" delay={idx * 0.1}>
              <ProcessStep
                step={step}
                isLast={idx === REPAIR_PROCESS_STEPS.length - 1}
              />
            </MotionWrapper>
          ))}
        </div>
      </ResponsiveContainer>
    </SectionContainer>
  );
};
