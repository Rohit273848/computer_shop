import React from 'react';
import { cn } from '../../utils/cn';

interface SectionContainerProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  background?: 'default' | 'surface' | 'alt' | 'transparent';
}

export const SectionContainer: React.FC<SectionContainerProps> = ({
  children,
  id,
  padding = 'lg',
  background = 'default',
  className = '',
  ...props
}) => {
  const paddings = {
    none: 'py-0',
    sm: 'py-8 sm:py-12',
    md: 'py-12 sm:py-16',
    lg: 'py-16 sm:py-24',
    xl: 'py-20 sm:py-32',
  };

  const backgrounds = {
    default: 'bg-background',
    surface: 'bg-surface border-y border-border',
    alt: 'bg-surface-secondary/50',
    transparent: 'bg-transparent',
  };

  return (
    <section
      id={id}
      className={cn('relative w-full overflow-hidden', paddings[padding], backgrounds[background], className)}
      {...props}
    >
      {children}
    </section>
  );
};
