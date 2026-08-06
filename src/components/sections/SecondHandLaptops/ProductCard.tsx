import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Cpu, MemoryStick, HardDrive, MessageSquare } from 'lucide-react';
import { Product } from '../../../types/product';
import { Button } from '../../ui/button';
import { formatCurrency } from '../../../utils/format';
import { externalLink } from '../../../utils/link';
import { BUSINESS_INFO } from '../../../constants/business';

export const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.contact.whatsappNumber}?text=${encodeURIComponent(
    `Hi FixPro! I am interested in purchasing the refurbished laptop: ${product.brand} ${product.model} priced at ₹${product.price}. Is it available?`
  )}`;

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.25 }}
      className="rounded-2xl bg-surface border border-border/80 shadow-md hover:border-accent/50 hover:shadow-glow flex flex-col justify-between overflow-hidden group transition-all duration-300"
    >
      {/* Product Image Container */}
      <div className="relative aspect-[16/10] bg-surface-secondary overflow-hidden">
        <img
          src={product.image}
          alt={`${product.brand} ${product.model}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Condition & Availability Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider bg-accent text-white shadow-sm">
            {product.condition}
          </span>
          <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-surface/90 backdrop-blur-md text-emerald-400 border border-emerald-500/30">
            {product.availability}
          </span>
        </div>
      </div>

      {/* Product Details */}
      <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
        <div>
          <div className="flex items-center justify-between text-xs text-text-muted mb-1">
            <span className="font-semibold text-accent uppercase tracking-wider">{product.brand}</span>
            <span className="flex items-center gap-1 text-[11px] text-amber-400 font-medium">
              <ShieldCheck className="w-3.5 h-3.5" /> {product.warranty}
            </span>
          </div>

          <h3 className="text-base font-bold text-text-primary line-clamp-1 group-hover:text-accent transition-colors">
            {product.model}
          </h3>

          {/* Key Specs Grid */}
          <div className="grid grid-cols-2 gap-2 my-3 text-xs text-text-muted">
            <div className="flex items-center gap-1.5 bg-surface-secondary/70 p-2 rounded-lg border border-border/50">
              <Cpu className="w-3.5 h-3.5 text-accent shrink-0" />
              <span className="truncate">{product.processor}</span>
            </div>
            <div className="flex items-center gap-1.5 bg-surface-secondary/70 p-2 rounded-lg border border-border/50">
              <MemoryStick className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span className="truncate">{product.ram}</span>
            </div>
            <div className="flex items-center gap-1.5 bg-surface-secondary/70 p-2 rounded-lg border border-border/50 col-span-2">
              <HardDrive className="w-3.5 h-3.5 text-purple-400 shrink-0" />
              <span className="truncate">{product.storage} • {product.display}</span>
            </div>
          </div>
        </div>

        {/* Pricing & CTA */}
        <div className="pt-3 border-t border-border/50 flex items-center justify-between gap-3">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-lg font-black font-display text-text-primary">
                {formatCurrency(product.price)}
              </span>
              <span className="text-xs text-text-muted line-through">
                {formatCurrency(product.originalPrice)}
              </span>
            </div>
            <p className="text-[10px] text-emerald-400 font-medium">Verified 25-Point Tested</p>
          </div>

          <a {...externalLink(whatsappUrl)}>
            <Button variant="accent" size="sm" className="gap-1.5">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Inquire</span>
            </Button>
          </a>
        </div>
      </div>
    </motion.div>
  );
};
