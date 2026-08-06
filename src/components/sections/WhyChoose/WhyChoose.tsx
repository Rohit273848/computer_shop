import React from 'react';
import { SectionContainer } from '../../layout/SectionContainer';
import { ResponsiveContainer } from '../../layout/ResponsiveContainer';
import { MotionWrapper } from '../../../animations/MotionWrapper';
import { FeatureCard } from './FeatureCard';
import { WHY_CHOOSE_FEATURES } from '../../../data/whyChoose';

export const WhyChoose: React.FC = () => {
  return (
    <SectionContainer padding="lg" background="default">
      <ResponsiveContainer>
        <MotionWrapper variant="fadeUp" className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-caption font-semibold text-accent tracking-widest">
            Why FixPro Computers
          </span>
          <h2 className="text-h2 text-text-primary mt-2 mb-4 font-bold">
            Built On Technical Excellence, Speed & Total Transparency
          </h2>
          <p className="text-body-lg text-text-muted">
            We combine high-grade micro-soldering tools, genuine replacement parts, and upfront flat-rate pricing to deliver an uncompromised repair experience.
          </p>
        </MotionWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_CHOOSE_FEATURES.map((feature, idx) => (
            <MotionWrapper key={feature.id} variant="fadeUp" delay={idx * 0.08}>
              <FeatureCard feature={feature} />
            </MotionWrapper>
          ))}
        </div>
      </ResponsiveContainer>
    </SectionContainer>
  );
};
