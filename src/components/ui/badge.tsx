import React from 'react';
import { cn } from '../../utils/cn';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'accent' | 'outline' | 'success';
}

export const Badge: React.FC<BadgeProps> = ({
  className,
  variant = 'default',
  children,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center text-[10px] font-semibold px-2 py-0.5 rounded-full uppercase tracking-wider select-none';

  const variants = {
    default: 'bg-surface-tertiary text-text-secondary border border-border',
    accent: 'bg-accent/15 text-accent border border-accent/30',
    outline: 'bg-transparent text-text-muted border border-border',
    success: 'bg-status-success/15 text-status-success border border-status-success/30',
  };

  return (
    <span className={cn(baseStyles, variants[variant], className)} {...props}>
      {children}
    </span>
  );
};
