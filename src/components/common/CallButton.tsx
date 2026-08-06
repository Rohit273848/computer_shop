import React from 'react';
import { Phone } from 'lucide-react';
import { Button, ButtonProps } from '../ui/button';
import { BUSINESS_INFO } from '../../constants/business';

interface CallButtonProps extends Partial<ButtonProps> {
  showLabel?: boolean;
}

export const CallButton: React.FC<CallButtonProps> = ({
  showLabel = true,
  variant = 'outline',
  size = 'md',
  className = '',
  ...props
}) => {
  const phoneUrl = `tel:${BUSINESS_INFO.contact.phonePrimary.replace(/\s+/g, '')}`;

  return (
    <a href={phoneUrl} aria-label="Call FixPro Computers directly">
      <Button variant={variant} size={size} className={className} {...props}>
        <Phone className="w-4 h-4 text-emerald-500 animate-pulse" />
        {showLabel && <span>Call Now</span>}
      </Button>
    </a>
  );
};
