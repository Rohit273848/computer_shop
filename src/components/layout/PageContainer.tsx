import React from 'react';
import { cn } from '../../utils/cn';

interface PageContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: string;
}

export const PageContainer: React.FC<PageContainerProps> = ({
  children,
  title,
  subtitle,
  className = '',
  ...props
}) => {
  return (
    <div className={cn('min-h-[70vh] pt-24 pb-16', className)} {...props}>
      {(title || subtitle) && (
        <div className="mb-8 text-center max-w-3xl mx-auto px-4">
          {title && <h1 className="text-h1 text-text-primary mb-3">{title}</h1>}
          {subtitle && <p className="text-body-lg text-text-secondary">{subtitle}</p>}
        </div>
      )}
      {children}
    </div>
  );
};
