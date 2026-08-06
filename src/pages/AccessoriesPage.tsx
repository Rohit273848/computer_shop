import React, { useState, useMemo } from 'react';
import { SEO } from '../components/common/SEO';
import { PageContainer } from '../components/layout/PageContainer';
import { ResponsiveContainer } from '../components/layout/ResponsiveContainer';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { MotionWrapper } from '../animations/MotionWrapper';
import { AccessoryCard } from '../components/sections/Accessories/AccessoryCard';
import { ACCESSORIES_LIST } from '../data/accessories';
import { Search } from 'lucide-react';

export const AccessoriesPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCat, setSelectedCat] = useState('All');

  const categories = ['All', 'SSD', 'RAM', 'Charger', 'Mouse', 'Keyboard', 'Cooling', 'Hub', 'Bag'];

  const filteredAccessories = useMemo(() => {
    return ACCESSORIES_LIST.filter((acc) => {
      const matchCat = selectedCat === 'All' || acc.category === selectedCat;
      const matchSearch =
        searchQuery === '' ||
        acc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        acc.specs.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [selectedCat, searchQuery]);

  return (
    <>
      <SEO
        title="Computer Accessories & Components Shop in Chhatrapati Sambhajinagar"
        description="Buy genuine NVMe SSDs, RAM upgrades, laptop chargers, keyboards, wireless mice, and cooling pads with warranty at FixPro."
      />
      <PageContainer className="pt-24 pb-16">
        <ResponsiveContainer>
          <Breadcrumbs items={[{ label: 'Accessories' }]} />

          {/* Header */}
          <MotionWrapper variant="fadeUp" className="text-center max-w-3xl mx-auto my-8">
            <span className="text-caption font-semibold text-accent tracking-widest">
              Hardware Components & Peripherals
            </span>
            <h1 className="text-display text-text-primary font-display font-extrabold mt-2 tracking-tight">
              Genuine Computer Accessories & Upgrades
            </h1>
            <p className="text-body-lg text-text-muted mt-3">
              Official grade-A laptop power adapters, ultra-fast Crucial & Samsung SSDs, Kingston RAMs, and silent peripherals.
            </p>
          </MotionWrapper>

          {/* Search & Category Filter */}
          <MotionWrapper variant="fadeUp" delay={0.1} className="mb-10 space-y-4">
            <div className="relative max-w-md mx-auto">
              <Search className="w-4 h-4 text-text-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search accessories (e.g. SSD, charger, mouse)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-surface border border-border text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setSelectedCat(c)}
                  className={`text-xs px-4 py-2 rounded-full font-medium transition-all ${
                    selectedCat === c
                      ? 'bg-accent text-white font-semibold shadow-glow'
                      : 'bg-surface-secondary text-text-secondary border border-border hover:bg-surface-tertiary'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </MotionWrapper>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredAccessories.map((acc, idx) => (
              <MotionWrapper key={acc.id} variant="fadeUp" delay={idx * 0.04}>
                <AccessoryCard accessory={acc} />
              </MotionWrapper>
            ))}
          </div>
        </ResponsiveContainer>
      </PageContainer>
    </>
  );
};

export default AccessoriesPage;
