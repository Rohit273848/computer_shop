import React, { useState, useMemo } from 'react';
import { SectionContainer } from '../../layout/SectionContainer';
import { ResponsiveContainer } from '../../layout/ResponsiveContainer';
import { MotionWrapper } from '../../../animations/MotionWrapper';
import { ProductCard } from './ProductCard';
import { REFURBISHED_PRODUCTS } from '../../../data/products';
import { Filter, RotateCcw } from 'lucide-react';
import { Button } from '../../ui/button';

export const SecondHandLaptops: React.FC = () => {
  const [selectedBrand, setSelectedBrand] = useState<string>('All');
  const [selectedRam, setSelectedRam] = useState<string>('All');

  const brands = ['All', 'Dell', 'HP', 'Lenovo', 'Apple', 'Asus'];
  const ramOptions = ['All', '8GB', '16GB', '32GB'];

  const filteredProducts = useMemo(() => {
    return REFURBISHED_PRODUCTS.filter((product) => {
      const matchBrand = selectedBrand === 'All' || product.brand === selectedBrand;
      const matchRam = selectedRam === 'All' || product.ram.includes(selectedRam);
      return matchBrand && matchRam;
    });
  }, [selectedBrand, selectedRam]);

  const resetFilters = () => {
    setSelectedBrand('All');
    setSelectedRam('All');
  };

  return (
    <SectionContainer id="refurbished" padding="lg" background="default">
      <ResponsiveContainer>
        <MotionWrapper variant="fadeUp" className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-caption font-semibold text-accent tracking-widest">
            Tested & Certified Laptops
          </span>
          <h2 className="text-h2 text-text-primary mt-2 font-bold">
            Premium Second-Hand & Refurbished Laptops
          </h2>
          <p className="text-body text-text-muted mt-2">
            Get high-performance business & gaming laptops at up to 60% off retail prices, complete with a 6-month FixPro warranty.
          </p>
        </MotionWrapper>

        {/* Filter Controls Bar */}
        <MotionWrapper variant="fadeUp" delay={0.1} className="mb-8">
          <div className="p-4 rounded-2xl bg-surface border border-border flex flex-wrap items-center justify-between gap-4 shadow-sm">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2 text-xs font-bold text-text-primary">
                <Filter className="w-4 h-4 text-accent" />
                <span>Filters:</span>
              </div>

              {/* Brand Filter */}
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="text-xs text-text-muted mr-1">Brand:</span>
                {brands.map((brand) => (
                  <button
                    key={brand}
                    onClick={() => setSelectedBrand(brand)}
                    className={`text-xs px-3 py-1 rounded-full font-medium transition-all ${
                      selectedBrand === brand
                        ? 'bg-accent text-white font-semibold shadow-sm'
                        : 'bg-surface-secondary text-text-secondary hover:bg-surface-tertiary'
                    }`}
                  >
                    {brand}
                  </button>
                ))}
              </div>

              {/* RAM Filter */}
              <div className="flex flex-wrap items-center gap-1.5 border-l border-border pl-4">
                <span className="text-xs text-text-muted mr-1">RAM:</span>
                {ramOptions.map((ram) => (
                  <button
                    key={ram}
                    onClick={() => setSelectedRam(ram)}
                    className={`text-xs px-3 py-1 rounded-full font-medium transition-all ${
                      selectedRam === ram
                        ? 'bg-accent text-white font-semibold shadow-sm'
                        : 'bg-surface-secondary text-text-secondary hover:bg-surface-tertiary'
                    }`}
                  >
                    {ram}
                  </button>
                ))}
              </div>
            </div>

            {(selectedBrand !== 'All' || selectedRam !== 'All') && (
              <Button variant="ghost" size="sm" onClick={resetFilters} className="text-xs gap-1.5 text-text-muted">
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </Button>
            )}
          </div>
        </MotionWrapper>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product, idx) => (
              <MotionWrapper key={product.id} variant="fadeUp" delay={idx * 0.06}>
                <ProductCard product={product} />
              </MotionWrapper>
            ))}
          </div>
        ) : (
          <div className="p-12 text-center bg-surface rounded-2xl border border-border text-text-muted">
            <p className="text-base font-semibold">No laptops matching your selected filters.</p>
            <Button variant="outline" size="sm" onClick={resetFilters} className="mt-3">
              Clear Filters
            </Button>
          </div>
        )}
      </ResponsiveContainer>
    </SectionContainer>
  );
};
