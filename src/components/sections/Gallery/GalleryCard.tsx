import React from 'react';
import { motion } from 'framer-motion';
import { Maximize2 } from 'lucide-react';
import { GalleryItem } from '../../../types/gallery';

interface GalleryCardProps {
  item: GalleryItem;
  onOpenLightbox: (item: GalleryItem) => void;
}

export const GalleryCard: React.FC<GalleryCardProps> = ({ item, onOpenLightbox }) => {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      onClick={() => onOpenLightbox(item)}
      className="relative rounded-2xl bg-surface border border-border/80 overflow-hidden shadow-sm hover:border-accent/40 hover:shadow-glow cursor-pointer group transition-all"
    >
      <div className="aspect-[4/3] bg-surface-secondary overflow-hidden relative">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

        <div className="absolute top-3 right-3 p-2 rounded-full bg-black/40 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity">
          <Maximize2 className="w-4 h-4" />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
        <span className="text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider bg-accent/90 text-white">
          {item.category}
        </span>
        <h3 className="text-base font-bold font-display mt-1.5 line-clamp-1">{item.title}</h3>
        <p className="text-xs text-slate-300 line-clamp-1 mt-0.5">{item.description}</p>
      </div>
    </motion.div>
  );
};
