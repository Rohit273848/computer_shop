import React, { useState, useMemo } from 'react';
import { Search, HelpCircle } from 'lucide-react';
import { SectionContainer } from '../../layout/SectionContainer';
import { ResponsiveContainer } from '../../layout/ResponsiveContainer';
import { MotionWrapper } from '../../../animations/MotionWrapper';
import { FAQAccordionItem } from './FAQAccordionItem';
import { FAQS } from '../../../data/faq';

export const FAQSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCat, setSelectedCat] = useState('All');

  const categories = ['All', 'General', 'Repair & Warranty', 'Doorstep & Cost', 'Data & Upgrades'];

  const filteredFAQs = useMemo(() => {
    return FAQS.filter((faq) => {
      const matchesCat = selectedCat === 'All' || faq.category === selectedCat;
      const matchesSearch =
        searchQuery === '' ||
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCat && matchesSearch;
    });
  }, [selectedCat, searchQuery]);

  return (
    <SectionContainer id="faq" padding="lg" background="surface">
      <ResponsiveContainer size="lg">
        <MotionWrapper variant="fadeUp" className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-caption font-semibold text-accent tracking-widest">
            Clear Answers
          </span>
          <h2 className="text-h2 text-text-primary mt-2 font-bold">
            Frequently Asked Questions
          </h2>
          <p className="text-body text-text-muted mt-2">
            Have questions about diagnostic charges, warranty coverage, doorstep repairs, or data security? We've got answers.
          </p>
        </MotionWrapper>

        {/* Search & Category Filter Controls */}
        <MotionWrapper variant="fadeUp" delay={0.1} className="space-y-4 mb-10">
          {/* Live Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="w-4 h-4 text-text-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search questions (e.g. warranty, cost, doorstep)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-surface border border-border text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>

          {/* Category Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`text-xs px-3.5 py-1.5 rounded-full font-medium transition-all ${
                  selectedCat === cat
                    ? 'bg-accent text-white font-semibold shadow-sm'
                    : 'bg-surface-secondary text-text-secondary border border-border hover:bg-surface-tertiary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </MotionWrapper>

        {/* Accordion List */}
        <div className="space-y-3 max-w-3xl mx-auto">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((faq, idx) => (
              <MotionWrapper key={faq.id} variant="fadeUp" delay={idx * 0.04}>
                <FAQAccordionItem item={faq} />
              </MotionWrapper>
            ))
          ) : (
            <div className="p-8 text-center bg-surface rounded-2xl border border-border text-text-muted">
              <HelpCircle className="w-8 h-8 text-accent mx-auto mb-2 opacity-50" />
              <p className="text-sm font-semibold">No questions found matching "{searchQuery}".</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCat('All');
                }}
                className="mt-2 text-xs text-accent underline"
              >
                Reset Search
              </button>
            </div>
          )}
        </div>
      </ResponsiveContainer>
    </SectionContainer>
  );
};
