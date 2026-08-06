import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SectionContainer } from '../../layout/SectionContainer';
import { ResponsiveContainer } from '../../layout/ResponsiveContainer';
import { MotionWrapper } from '../../../animations/MotionWrapper';
import { ServiceCard } from './ServiceCard';
import { PREVIEW_SERVICES } from '../../../data/servicesPreview';
import { Button } from '../../ui/button';
import { ROUTES } from '../../../constants/routes';

export const ServicesPreview: React.FC = () => {
  return (
    <SectionContainer padding="lg" background="surface">
      <ResponsiveContainer>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <MotionWrapper variant="fadeUp" className="max-w-2xl">
            <span className="text-caption font-semibold text-accent tracking-widest">
              Comprehensive Hardware & Software Solutions
            </span>
            <h2 className="text-h2 text-text-primary mt-2 font-bold">
              Expert Computer Services Tailored For You
            </h2>
          </MotionWrapper>

          <MotionWrapper variant="fadeUp" delay={0.1}>
            <Link to={ROUTES.SERVICES}>
              <Button variant="outline" size="md" className="group">
                <span>Explore All Services</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </MotionWrapper>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PREVIEW_SERVICES.map((service, idx) => (
            <MotionWrapper key={service.id} variant="fadeUp" delay={idx * 0.05}>
              <ServiceCard service={service} />
            </MotionWrapper>
          ))}
        </div>
      </ResponsiveContainer>
    </SectionContainer>
  );
};
