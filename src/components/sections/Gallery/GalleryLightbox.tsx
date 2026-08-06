import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Wrench } from 'lucide-react';
import { GalleryItem } from '../../../types/gallery';

interface GalleryLightboxProps {
  item: GalleryItem | null;
  onClose: () => void;
}

export const GalleryLightbox: React.FC<GalleryLightboxProps> = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="relative max-w-4xl w-full rounded-2xl bg-surface border border-border shadow-2xl overflow-hidden"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors"
            aria-label="Close image"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="aspect-[16/10] bg-black">
            <img src={item.image} alt={item.title} className="w-full h-full object-contain" />
          </div>

          <div className="p-6 bg-surface">
            <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider bg-accent/15 text-accent border border-accent/20">
              {item.category}
            </span>
            <h3 className="text-xl font-bold font-display text-text-primary mt-2 flex items-center gap-2">
              <Wrench className="w-5 h-5 text-accent" />
              {item.title}
            </h3>
            <p className="text-sm text-text-muted mt-1 leading-relaxed">{item.description}</p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
