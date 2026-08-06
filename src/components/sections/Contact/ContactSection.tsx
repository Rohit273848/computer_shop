import React from 'react';
import { SectionContainer } from '../../layout/SectionContainer';
import { ResponsiveContainer } from '../../layout/ResponsiveContainer';
import { MotionWrapper } from '../../../animations/MotionWrapper';
import { ContactForm } from './ContactForm';
import { ContactInfoCards } from './ContactInfoCards';

export const ContactSection: React.FC = () => {
  return (
    <SectionContainer id="contact" padding="lg" background="default">
      <ResponsiveContainer>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          <div className="lg:col-span-7">
            <MotionWrapper variant="fadeUp">
              <ContactForm />
            </MotionWrapper>
          </div>
          <div className="lg:col-span-5">
            <MotionWrapper variant="fadeUp" delay={0.1}>
              <ContactInfoCards />
            </MotionWrapper>
          </div>
        </div>
      </ResponsiveContainer>
    </SectionContainer>
  );
};
