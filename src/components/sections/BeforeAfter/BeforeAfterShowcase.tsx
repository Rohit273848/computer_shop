import React from 'react';
import { SectionContainer } from '../../layout/SectionContainer';
import { ResponsiveContainer } from '../../layout/ResponsiveContainer';
import { MotionWrapper } from '../../../animations/MotionWrapper';
import { ImageCompareSlider } from './ImageCompareSlider';
import { BEFORE_AFTER_ITEMS } from '../../../data/beforeAfter';

export const BeforeAfterShowcase: React.FC = () => {
  return (
    <SectionContainer id="before-after" padding="lg" background="default">
      <ResponsiveContainer>
        <MotionWrapper variant="fadeUp" className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-caption font-semibold text-accent tracking-widest">
            Uncompromising Restoration Quality
          </span>
          <h2 className="text-h2 text-text-primary mt-2 font-bold">
            Interactive Before & After Repair Comparison
          </h2>
          <p className="text-body text-text-muted mt-2">
            Drag the handle to see how damaged hardware displays, corroded motherboards, and broken hinges are restored back to factory perfection.
          </p>
        </MotionWrapper>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BEFORE_AFTER_ITEMS.map((item, idx) => (
            <MotionWrapper key={item.id} variant="fadeUp" delay={idx * 0.1}>
              <ImageCompareSlider item={item} />
            </MotionWrapper>
          ))}
        </div>
      </ResponsiveContainer>
    </SectionContainer>
  );
};
