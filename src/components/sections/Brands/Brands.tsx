import React from 'react';
import { motion } from 'framer-motion';
import { SectionContainer } from '../../layout/SectionContainer';
import { ResponsiveContainer } from '../../layout/ResponsiveContainer';
import { MotionWrapper } from '../../../animations/MotionWrapper';
import { SUPPORTED_BRANDS } from '../../../data/brands';
import { Laptop } from 'lucide-react';

export const Brands: React.FC = () => {
  return (
    <SectionContainer padding="lg" background="default">
      <ResponsiveContainer>
        <MotionWrapper variant="fadeUp" className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-caption font-semibold text-accent tracking-widest">
            Multi-Brand Expertise
          </span>
          <h2 className="text-h2 text-text-primary mt-2 font-bold">
            Major Laptop & Desktop Brands We Repair
          </h2>
          <p className="text-body text-text-muted mt-2">
            Genuine spare parts and chip-level expertise for Windows PCs, Gaming Rigs, and Apple MacBooks.
          </p>
        </MotionWrapper>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {SUPPORTED_BRANDS.map((brand, idx) => (
            <MotionWrapper key={brand.name} variant="scale" delay={idx * 0.04}>
              <motion.div
                whileHover={{ scale: 1.05, y: -4 }}
                transition={{ duration: 0.2 }}
                className="p-5 rounded-2xl bg-surface border border-border/80 shadow-sm flex flex-col items-center justify-center text-center group hover:border-accent/50 hover:shadow-glow cursor-default transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-surface-secondary flex items-center justify-center text-text-muted group-hover:bg-accent/15 group-hover:text-accent transition-colors mb-2">
                  <Laptop className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-text-primary group-hover:text-accent transition-colors">
                  {brand.name}
                </h3>
                <p className="text-[10px] text-text-muted mt-0.5 line-clamp-1">
                  {brand.tagline}
                </p>
              </motion.div>
            </MotionWrapper>
          ))}
        </div>
      </ResponsiveContainer>
    </SectionContainer>
  );
};
