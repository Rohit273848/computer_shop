import React, { useState } from 'react';
import { SectionContainer } from '../../layout/SectionContainer';
import { ResponsiveContainer } from '../../layout/ResponsiveContainer';
import { MotionWrapper } from '../../../animations/MotionWrapper';
import { GalleryCard } from './GalleryCard';
import { GalleryLightbox } from './GalleryLightbox';
import { GALLERY_ITEMS } from '../../../data/gallery';
import { GalleryItem } from '../../../types/gallery';

export const RepairGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const categories = [
    'All',
    'Laptop Repair',
    'Desktop Repair',
    'Motherboard Repair',
    'Data Recovery',
    'SSD Upgrade',
    'Store Photos',
  ];

  const filteredItems = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <SectionContainer id="gallery" padding="lg" background="surface">
      <ResponsiveContainer>
        <MotionWrapper variant="fadeUp" className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-caption font-semibold text-accent tracking-widest">
            Visual Proof Of Work
          </span>
          <h2 className="text-h2 text-text-primary mt-2 font-bold">
            FixPro Repair Gallery & Service Lab
          </h2>
          <p className="text-body text-text-muted mt-2">
            Inspect our cleanroom micro-soldering station, thermal maintenance setups, and completed repairs.
          </p>
        </MotionWrapper>

        {/* Category Filters */}
        <MotionWrapper variant="fadeUp" delay={0.1} className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-xs px-4 py-2 rounded-full font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-accent text-white font-semibold shadow-glow'
                  : 'bg-surface-secondary text-text-secondary border border-border hover:bg-surface-tertiary'
              }`}
            >
              {cat}
            </button>
          ))}
        </MotionWrapper>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <MotionWrapper key={item.id} variant="fadeUp" delay={idx * 0.05}>
              <GalleryCard item={item} onOpenLightbox={setActiveItem} />
            </MotionWrapper>
          ))}
        </div>

        {/* Lightbox Modal */}
        <GalleryLightbox item={activeItem} onClose={() => setActiveItem(null)} />
      </ResponsiveContainer>
    </SectionContainer>
  );
};
