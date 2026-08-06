import React, { useState, useMemo } from 'react';
import { SEO } from '../components/common/SEO';
import { PageContainer } from '../components/layout/PageContainer';
import { ResponsiveContainer } from '../components/layout/ResponsiveContainer';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { MotionWrapper } from '../animations/MotionWrapper';
import { ProductCard } from '../components/sections/SecondHandLaptops/ProductCard';
import { REFURBISHED_PRODUCTS } from '../data/products';
import { Filter, Search, RotateCcw, ArrowUpDown } from 'lucide-react';
import { Button } from '../components/ui/button';

export const SecondHandLaptopsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('All');
  const [selectedRam, setSelectedRam] = useState('All');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc'>('featured');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const brands = ['All', 'Dell', 'HP', 'Lenovo', 'Apple', 'Asus'];
  const ramOptions = ['All', '8GB', '16GB', '32GB'];

  const filteredAndSortedProducts = useMemo(() => {
    let result = REFURBISHED_PRODUCTS.filter((prod) => {
      const matchBrand = selectedBrand === 'All' || prod.brand === selectedBrand;
      const matchRam = selectedRam === 'All' || prod.ram.includes(selectedRam);
      const matchSearch =
        searchQuery === '' ||
        prod.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prod.processor.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prod.brand.toLowerCase().includes(searchQuery.toLowerCase());
      return matchBrand && matchRam && matchSearch;
    });

    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [selectedBrand, selectedRam, searchQuery, sortBy]);

  // Pagination logic
  const totalPages = Math.ceil(filteredAndSortedProducts.length / itemsPerPage);
  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredAndSortedProducts.slice(start, start + itemsPerPage);
  }, [filteredAndSortedProducts, currentPage]);

  const resetFilters = () => {
    setSelectedBrand('All');
    setSelectedRam('All');
    setSearchQuery('');
    setSortBy('featured');
    setCurrentPage(1);
  };

  return (
    <>
      <SEO
        title="Second-Hand & Refurbished Laptops Shop in Chhatrapati Sambhajinagar"
        description="Buy 25-point tested second-hand & refurbished Dell, HP, Lenovo, and Apple MacBooks with a 6-month FixPro warranty."
      />
      <PageContainer className="pt-24 pb-16">
        <ResponsiveContainer>
          <Breadcrumbs items={[{ label: 'Second-Hand Laptops' }]} />

          {/* Header */}
          <MotionWrapper variant="fadeUp" className="text-center max-w-3xl mx-auto my-8">
            <span className="text-caption font-semibold text-accent tracking-widest">
              Certified Pre-Owned Store
            </span>
            <h1 className="text-display text-text-primary font-display font-extrabold mt-2 tracking-tight">
              Verified Refurbished Laptops & MacBooks
            </h1>
            <p className="text-body-lg text-text-muted mt-3">
              Up to 60% off original retail prices. Every laptop is stress-tested, cleaned, fitted with new battery/SSD, and backed by a 6-month FixPro warranty.
            </p>
          </MotionWrapper>

          {/* Filter Bar */}
          <MotionWrapper variant="fadeUp" delay={0.1} className="p-4 rounded-2xl bg-surface border border-border space-y-4 mb-8 shadow-sm">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Search Bar */}
              <div className="relative w-full md:w-80">
                <Search className="w-4 h-4 text-text-muted absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search model, processor, brand..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 rounded-xl bg-surface-secondary border border-border text-xs text-text-primary focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>

              {/* Sort By Dropdown */}
              <div className="flex items-center gap-2 text-xs text-text-muted w-full md:w-auto justify-end">
                <ArrowUpDown className="w-3.5 h-3.5 text-accent" />
                <span>Sort By:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="px-3 py-1.5 rounded-xl bg-surface-secondary border border-border text-xs text-text-primary font-medium focus:outline-none"
                >
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                </select>
              </div>
            </div>

            {/* Chips Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border/50 pt-3">
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-1.5 text-xs font-bold text-text-primary">
                  <Filter className="w-3.5 h-3.5 text-accent" />
                  <span>Brand:</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {brands.map((b) => (
                    <button
                      key={b}
                      onClick={() => {
                        setSelectedBrand(b);
                        setCurrentPage(1);
                      }}
                      className={`text-xs px-3 py-1 rounded-full font-medium transition-all ${
                        selectedBrand === b
                          ? 'bg-accent text-white font-semibold'
                          : 'bg-surface-secondary text-text-secondary hover:bg-surface-tertiary'
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-1.5 border-l border-border pl-4">
                  <span className="text-xs font-bold text-text-primary">RAM:</span>
                  {ramOptions.map((r) => (
                    <button
                      key={r}
                      onClick={() => {
                        setSelectedRam(r);
                        setCurrentPage(1);
                      }}
                      className={`text-xs px-3 py-1 rounded-full font-medium transition-all ${
                        selectedRam === r
                          ? 'bg-accent text-white font-semibold'
                          : 'bg-surface-secondary text-text-secondary hover:bg-surface-tertiary'
                      }`}
                    >
                      {r}
                    </button>
                  ))}
                </div>
              </div>

              <Button variant="ghost" size="sm" onClick={resetFilters} className="text-xs gap-1">
                <RotateCcw className="w-3 h-3" />
                <span>Reset</span>
              </Button>
            </div>
          </MotionWrapper>

          {/* Product Grid */}
          {paginatedProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginatedProducts.map((prod, idx) => (
                <MotionWrapper key={prod.id} variant="fadeUp" delay={idx * 0.05}>
                  <ProductCard product={prod} />
                </MotionWrapper>
              ))}
            </div>
          ) : (
            <div className="p-12 text-center bg-surface rounded-2xl border border-border text-text-muted">
              <p className="text-base font-semibold">No refurbished laptops found matching your criteria.</p>
              <Button variant="outline" size="sm" onClick={resetFilters} className="mt-3">
                Reset Filters
              </Button>
            </div>
          )}

          {/* Pagination UI */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-12">
              <Button
                variant="outline"
                size="sm"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              >
                Previous
              </Button>
              <span className="text-xs font-semibold text-text-muted px-3">
                Page {currentPage} of {totalPages}
              </span>
              <Button
                variant="outline"
                size="sm"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              >
                Next
              </Button>
            </div>
          )}
        </ResponsiveContainer>
      </PageContainer>
    </>
  );
};

export default SecondHandLaptopsPage;
