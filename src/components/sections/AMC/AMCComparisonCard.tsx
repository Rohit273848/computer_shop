import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';
import { AMC_COMPARISONS } from '../../../data/amc';

export const AMCComparisonCard: React.FC = () => {
  return (
    <div className="rounded-2xl border border-border bg-surface overflow-hidden shadow-md">
      <div className="grid grid-cols-12 bg-surface-secondary/80 p-4 border-b border-border text-xs font-bold uppercase tracking-wider text-text-primary">
        <div className="col-span-4 sm:col-span-4">Service Feature</div>
        <div className="col-span-4 sm:col-span-4 text-red-400">Without AMC</div>
        <div className="col-span-4 sm:col-span-4 text-emerald-400">With FixPro AMC</div>
      </div>

      <div className="divide-y divide-border/60">
        {AMC_COMPARISONS.map((comp) => (
          <div key={comp.feature} className="grid grid-cols-12 p-4 text-xs items-center hover:bg-surface-secondary/30 transition-colors">
            <div className="col-span-4 font-semibold text-text-primary pr-2">{comp.feature}</div>
            <div className="col-span-4 text-text-muted flex items-start gap-1.5 pr-2">
              <XCircle className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" />
              <span className="line-through">{comp.withoutAMC}</span>
            </div>
            <div className="col-span-4 text-text-primary font-medium flex items-start gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
              <span>{comp.withAMC}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
