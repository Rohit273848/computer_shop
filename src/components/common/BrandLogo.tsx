import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import { BUSINESS_INFO } from '../../constants/business';
import { cn } from '../../utils/cn';

interface BrandLogoProps {
  className?: string;
  showTagline?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className,
  showTagline = true,
  size = 'md',
}) => {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-10 sm:h-11',
    lg: 'h-14',
  };

  return (
    <Link
      to={ROUTES.HOME}
      className={cn(
        'inline-flex items-center gap-2 group select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-xl p-1 transition-transform active:scale-95',
        className
      )}
      aria-label={`${BUSINESS_INFO.name} Home`}
    >
      <div className="relative flex items-center justify-center p-1.5 rounded-xl bg-white shadow-sm border border-slate-200/80 dark:border-white/20 dark:bg-slate-900/90 backdrop-blur-md transition-shadow group-hover:shadow-glow">
        <img
          src="/logo.png"
          alt={BUSINESS_INFO.name}
          className={cn('w-auto object-contain transition-transform duration-300 group-hover:scale-105', sizeClasses[size])}
        />
      </div>

      {showTagline && (
        <div className="hidden sm:flex flex-col justify-center text-left">
          <div className="flex items-center font-display font-black tracking-tight text-lg leading-tight">
            <span className="text-[#0097b2]">Fix</span>
            <span className="text-text-primary">Pro</span>
          </div>
          <span className="text-[10px] italic font-serif tracking-normal text-text-muted">
            Get it fixed here
          </span>
        </div>
      )}
    </Link>
  );
};
