import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Zap, Cpu, Mouse, Keyboard, Wind, Box, Briefcase, LucideIcon } from 'lucide-react';
import { Accessory } from '../../../types/accessory';
import { Button } from '../../ui/button';
import { formatCurrency } from '../../../utils/format';
import { externalLink } from '../../../utils/link';
import { BUSINESS_INFO } from '../../../constants/business';

const iconMap: Record<string, LucideIcon> = {
  Zap,
  Cpu,
  Mouse,
  Keyboard,
  Wind,
  Box,
  Briefcase,
};

export const AccessoryCard: React.FC<{ accessory: Accessory }> = ({ accessory }) => {
  const IconComponent = iconMap[accessory.iconName] || ShoppingBag;
  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.contact.whatsappNumber}?text=${encodeURIComponent(
    `Hi FixPro! I want to buy the accessory: ${accessory.title} (Price: ₹${accessory.price}).`
  )}`;

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="p-5 rounded-2xl bg-surface border border-border/80 shadow-sm hover:border-accent/40 hover:shadow-glow flex flex-col justify-between group transition-all"
    >
      <div>
        <div className="relative aspect-[4/3] bg-surface-secondary rounded-xl overflow-hidden mb-4">
          <img
            src={accessory.image}
            alt={accessory.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
          {accessory.badge && (
            <span className="absolute top-2.5 left-2.5 text-[9px] font-bold px-2 py-0.5 rounded-full uppercase bg-accent text-white shadow-sm">
              {accessory.badge}
            </span>
          )}
        </div>

        <div className="flex items-center gap-1.5 text-xs text-accent font-semibold mb-1">
          <IconComponent className="w-3.5 h-3.5" />
          <span>{accessory.category}</span>
        </div>

        <h3 className="text-sm font-bold text-text-primary line-clamp-1 group-hover:text-accent transition-colors">
          {accessory.title}
        </h3>
        <p className="text-xs text-text-muted mt-1 leading-normal line-clamp-2">
          {accessory.specs}
        </p>
      </div>

      <div className="mt-4 pt-3 border-t border-border/50 flex items-center justify-between">
        <div>
          <span className="text-base font-extrabold font-display text-text-primary">
            {formatCurrency(accessory.price)}
          </span>
          <span className="text-xs text-text-muted line-through ml-1.5">
            {formatCurrency(accessory.originalPrice)}
          </span>
        </div>

        <a {...externalLink(whatsappUrl)}>
          <Button variant="ghost" size="sm" className="gap-1 text-xs hover:bg-accent hover:text-white">
            <span>Buy</span>
          </Button>
        </a>
      </div>
    </motion.div>
  );
};
