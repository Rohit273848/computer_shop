import React from 'react';
import { MessageSquare } from 'lucide-react';
import { Button, ButtonProps } from '../ui/button';
import { BUSINESS_INFO } from '../../constants/business';
import { externalLink } from '../../utils/link';

interface WhatsAppButtonProps extends Partial<ButtonProps> {
  showLabel?: boolean;
  message?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  showLabel = true,
  message = 'Hello FixPro Computers, I would like to inquire about computer repair services.',
  variant = 'accent',
  size = 'md',
  className = '',
  ...props
}) => {
  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a {...externalLink(whatsappUrl)} aria-label="Chat with FixPro Computers on WhatsApp">
      <Button variant={variant} size={size} className={className} {...props}>
        <MessageSquare className="w-4 h-4 fill-current" />
        {showLabel && <span>WhatsApp Chat</span>}
      </Button>
    </a>
  );
};
