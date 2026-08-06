import React from 'react';
import { SectionContainer } from '../../layout/SectionContainer';
import { ResponsiveContainer } from '../../layout/ResponsiveContainer';
import { MotionWrapper } from '../../../animations/MotionWrapper';
import { StatCard } from './StatCard';
import { STATISTICS_ITEMS } from '../../../data/statistics';

export const Statistics: React.FC = () => {
  return (
    <SectionContainer padding="lg" background="default">
      <ResponsiveContainer>
        <MotionWrapper variant="fadeUp" className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-caption font-semibold text-accent tracking-widest">
            Proven Track Record
          </span>
          <h2 className="text-h2 text-text-primary mt-2 font-bold">
            Trusted By Thousands Across Chhatrapati Sambhajinagar
          </h2>
        </MotionWrapper>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {STATISTICS_ITEMS.map((stat, idx) => (
            <MotionWrapper key={stat.label} variant="fadeUp" delay={idx * 0.08}>
              <StatCard stat={stat} />
            </MotionWrapper>
          ))}
        </div>
      </ResponsiveContainer>
    </SectionContainer>
  );
};
