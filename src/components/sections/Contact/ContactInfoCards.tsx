import React from 'react';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';
import { BUSINESS_INFO } from '../../../constants/business';
import { externalLink } from '../../../utils/link';

export const ContactInfoCards: React.FC = () => {
  return (
    <div className="space-y-6 text-left">
      <div>
        <span className="text-caption font-semibold text-accent tracking-widest">
          Direct Store Contact
        </span>
        <h3 className="text-h2 text-text-primary font-bold mt-1">
          Visit Our Service Hub
        </h3>
        <p className="text-sm text-text-muted mt-2">
          Drop by our store in Garkheda or reach out directly for instant technician guidance.
        </p>
      </div>

      <div className="space-y-3.5">
        {/* Address Card */}
        <div className="p-4 rounded-2xl bg-surface border border-border/80 flex items-start gap-3.5 shadow-sm">
          <div className="p-2.5 rounded-xl bg-accent/15 text-accent shrink-0 mt-0.5">
            <MapPin className="w-5 h-5" />
          </div>
          <div className="flex-1">
            <h4 className="text-xs font-bold text-text-primary uppercase tracking-wider">Address</h4>
            <p className="text-xs text-text-muted mt-0.5 leading-relaxed">
              {BUSINESS_INFO.location.fullAddress}
            </p>
            <a
              {...externalLink(BUSINESS_INFO.location.googleMapsUrl)}
              className="inline-flex items-center gap-1 text-[11px] text-accent font-semibold hover:underline mt-1.5"
            >
              <Navigation className="w-3 h-3" />
              <span>Get Directions on Google Maps</span>
            </a>
          </div>
        </div>

        {/* Phone & WhatsApp Card */}
        <div className="p-4 rounded-2xl bg-surface border border-border/80 flex items-start gap-3.5 shadow-sm">
          <div className="p-2.5 rounded-xl bg-emerald-500/15 text-emerald-400 shrink-0 mt-0.5">
            <Phone className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-text-primary uppercase tracking-wider">Phone & Instant Chat</h4>
            <p className="text-xs text-text-muted mt-0.5">
              Call: <a href={`tel:${BUSINESS_INFO.contact.phonePrimary}`} className="text-text-primary font-semibold hover:text-accent">{BUSINESS_INFO.contact.phonePrimary}</a>
            </p>
            <p className="text-xs text-text-muted">
              WhatsApp: <a href={`https://wa.me/${BUSINESS_INFO.contact.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="text-emerald-400 font-semibold hover:underline">Instant Chat Ready</a>
            </p>
          </div>
        </div>

        {/* Hours & Email */}
        <div className="p-4 rounded-2xl bg-surface border border-border/80 flex items-start gap-3.5 shadow-sm">
          <div className="p-2.5 rounded-xl bg-amber-500/15 text-amber-400 shrink-0 mt-0.5">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-text-primary uppercase tracking-wider">Business Hours</h4>
            <p className="text-xs text-text-muted mt-0.5">Monday - Saturday: {BUSINESS_INFO.hours.weekdays}</p>
            <p className="text-xs text-text-muted">Sunday: {BUSINESS_INFO.hours.sunday}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
