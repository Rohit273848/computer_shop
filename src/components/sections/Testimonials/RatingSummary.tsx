import React from 'react';
import { Star, ShieldCheck } from 'lucide-react';

export const RatingSummary: React.FC = () => {
  return (
    <div className="p-6 rounded-2xl bg-surface border border-border flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
      <div className="flex items-center gap-4">
        <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
          <span className="text-3xl font-black font-display tracking-tight">4.9</span>
          <div className="flex items-center gap-0.5 mt-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-current text-amber-400" />
            ))}
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-base font-bold text-text-primary">Google Customer Rating</h3>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
              <ShieldCheck className="w-3 h-3" /> Verified Reviews
            </span>
          </div>
          <p className="text-xs text-text-muted mt-1">
            Based on 500+ authentic Google reviews from local computer owners in Chhatrapati Sambhajinagar.
          </p>
        </div>
      </div>

      <a
        href="https://maps.google.com/?q=Near+Morya+Mangal+Karyalay+Shivaji+Nagar+Road+Garkheda+Chhatrapati+Sambhajinagar"
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 rounded-xl bg-surface-secondary border border-border text-xs font-semibold text-text-primary hover:border-accent hover:text-accent transition-colors shrink-0"
      >
        View All Google Reviews →
      </a>
    </div>
  );
};
