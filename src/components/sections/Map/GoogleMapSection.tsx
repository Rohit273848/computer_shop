import React from 'react';
import { MapPin, Navigation, Car } from 'lucide-react';
import { SectionContainer } from '../../layout/SectionContainer';
import { ResponsiveContainer } from '../../layout/ResponsiveContainer';
import { MotionWrapper } from '../../../animations/MotionWrapper';
import { BUSINESS_INFO } from '../../../constants/business';
import { externalLink } from '../../../utils/link';

export const GoogleMapSection: React.FC = () => {
  const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
    BUSINESS_INFO.location.fullAddress
  )}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <SectionContainer id="location" padding="lg" background="surface">
      <ResponsiveContainer>
        <MotionWrapper variant="fadeUp" className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-caption font-semibold text-accent tracking-widest">
            Locate FixPro Computers
          </span>
          <h2 className="text-h2 text-text-primary mt-2 font-bold">
            Convenient Store Location & Parking
          </h2>
          <p className="text-body text-text-muted mt-2">
            Located right near Morya Mangal Karyalay on Shivaji Nagar Road, Garkheda. Easy access with dedicated customer vehicle parking.
          </p>
        </MotionWrapper>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Map Embed Container */}
          <div className="lg:col-span-8 rounded-3xl overflow-hidden border border-border shadow-xl aspect-[16/9] lg:aspect-auto lg:h-[400px] relative bg-surface-secondary">
            <iframe
              title="FixPro Computers Location Map"
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="filter contrast-[1.05] opacity-90 hover:opacity-100 transition-opacity"
            />
          </div>

          {/* Location Info Overlay Cards */}
          <div className="lg:col-span-4 space-y-4 text-left">
            <div className="p-5 rounded-2xl bg-surface border border-border shadow-sm">
              <div className="flex items-center gap-2 text-accent font-bold text-sm mb-1">
                <MapPin className="w-4 h-4" />
                <span>Store Address</span>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed">
                {BUSINESS_INFO.location.fullAddress}
              </p>
              <p className="text-[11px] text-accent font-medium mt-1">Landmark: {BUSINESS_INFO.location.landmark}</p>
            </div>

            <div className="p-5 rounded-2xl bg-surface border border-border shadow-sm">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm mb-1">
                <Car className="w-4 h-4" />
                <span>Customer Parking</span>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed">
                Ample two-wheeler & four-wheeler parking space available directly outside the shop entrance.
              </p>
            </div>

            <a {...externalLink(BUSINESS_INFO.location.googleMapsUrl)} className="block">
              <button className="w-full py-3.5 px-4 rounded-xl bg-accent text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-glow hover:bg-accent-hover transition-colors">
                <Navigation className="w-4 h-4" />
                <span>Open Directions in Google Maps</span>
              </button>
            </a>
          </div>
        </div>
      </ResponsiveContainer>
    </SectionContainer>
  );
};
