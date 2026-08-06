import React from 'react';
import { Star, ShieldCheck, Wrench, Quote } from 'lucide-react';
import { Testimonial } from '../../../types/review';

export const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
  return (
    <div className="p-6 rounded-2xl bg-surface border border-border/80 shadow-md flex flex-col justify-between h-full relative group hover:border-accent/40 transition-colors">
      <Quote className="absolute top-4 right-4 w-8 h-8 text-border/40 pointer-events-none" />

      <div>
        {/* Rating Stars */}
        <div className="flex items-center gap-1 text-amber-400 mb-3">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-current" />
          ))}
          <span className="text-xs text-text-muted ml-2">{testimonial.date}</span>
        </div>

        {/* Review Text */}
        <p className="text-xs sm:text-sm text-text-secondary leading-relaxed italic mb-6">
          "{testimonial.reviewText}"
        </p>
      </div>

      <div>
        {/* Device Repaired Tag */}
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-surface-secondary text-[11px] font-medium text-accent mb-4 border border-border">
          <Wrench className="w-3.5 h-3.5" />
          <span>{testimonial.deviceRepaired}</span>
        </div>

        {/* Author Avatar & Info */}
        <div className="flex items-center gap-3 pt-3 border-t border-border/50">
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="w-10 h-10 rounded-full object-cover border border-accent/30"
          />
          <div>
            <div className="flex items-center gap-1.5">
              <h4 className="text-sm font-bold text-text-primary">{testimonial.name}</h4>
              {testimonial.verified && (
                <span title="Verified Customer">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 fill-emerald-500/10" />
                </span>
              )}
            </div>
            <p className="text-[11px] text-text-muted">{testimonial.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
