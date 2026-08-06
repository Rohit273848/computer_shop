import React, { useState } from 'react';
import { SectionContainer } from '../../layout/SectionContainer';
import { ResponsiveContainer } from '../../layout/ResponsiveContainer';
import { MotionWrapper } from '../../../animations/MotionWrapper';
import { AccessoryCard } from './AccessoryCard';
import { ACCESSORIES_LIST } from '../../../data/accessories';

export const AccessoriesShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const categories = ['All', 'SSD', 'RAM', 'Charger', 'Mouse', 'Keyboard', 'Cooling', 'Hub', 'Bag'];

  const filteredAccessories = selectedCategory === 'All'
    ? ACCESSORIES_LIST
    : ACCESSORIES_LIST.filter((acc) => acc.category === selectedCategory);

  return (
    <SectionContainer id="accessories" padding="lg" background="surface">
      <ResponsiveContainer>
        <MotionWrapper variant="fadeUp" className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-caption font-semibold text-accent tracking-widest">
            Genuine Computer Hardware
          </span>
          <h2 className="text-h2 text-text-primary mt-2 font-bold">
            High-Performance Upgrades & Accessories
          </h2>
          <p className="text-body text-text-muted mt-2">
            Top-rated NVMe SSDs, high-speed RAM, genuine laptop chargers, and silent peripherals with warranty support.
          </p>
        </MotionWrapper>

        {/* Category Chips Bar */}
        <MotionWrapper variant="fadeUp" delay={0.1} className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-xs px-4 py-2 rounded-full font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-accent text-white font-semibold shadow-glow'
                  : 'bg-surface-secondary text-text-secondary border border-border hover:bg-surface-tertiary'
              }`}
            >
              {cat}
            </button>
          ))}
        </MotionWrapper>

        {/* Accessories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredAccessories.map((acc, idx) => (
            <MotionWrapper key={acc.id} variant="fadeUp" delay={idx * 0.05}>
              <AccessoryCard accessory={acc} />
            </MotionWrapper>
          ))}
        </div>
      </ResponsiveContainer>
    </SectionContainer>
  );
};
