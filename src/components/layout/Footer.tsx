import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ArrowUpRight } from 'lucide-react';
import { BrandLogo } from '../common/BrandLogo';
import { BUSINESS_INFO, SOCIAL_LINKS } from '../../constants/business';
import { FOOTER_SECTIONS } from '../../constants/navigation';
import { ResponsiveContainer } from './ResponsiveContainer';
import { externalLink } from '../../utils/link';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface border-t border-border pt-16 pb-8 text-text-secondary relative overflow-hidden">
      {/* Top subtle glow divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      <ResponsiveContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-border/60">
          {/* Brand Info & Tagline (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <BrandLogo showTagline />
            <p className="text-body text-text-muted max-w-sm">
              {BUSINESS_INFO.description}
            </p>
            <div className="pt-2 flex items-center gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.platform}
                  {...externalLink(social.url)}
                  aria-label={social.ariaLabel}
                  className="p-2.5 rounded-xl bg-surface-secondary border border-border text-text-secondary hover:text-accent hover:border-accent/40 transition-all duration-200"
                >
                  <span className="text-xs font-semibold">{social.platform}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Dynamic Footer Sections */}
          {FOOTER_SECTIONS.map((section) => (
            <div key={section.title} className="space-y-3">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-text-primary">
                {section.title}
              </h3>
              <ul className="space-y-2 text-sm">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-text-muted hover:text-text-primary transition-colors flex items-center gap-1 group"
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-accent" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact & Hours Info */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-text-primary">
              Contact & Hours
            </h3>
            <ul className="space-y-3 text-xs text-text-muted">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.location.fullAddress}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>{BUSINESS_INFO.contact.phonePrimary}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <span>{BUSINESS_INFO.contact.email}</span>
              </li>
              <li className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <p>Mon - Sat: {BUSINESS_INFO.hours.weekdays}</p>
                  <p>Sun: {BUSINESS_INFO.hours.sunday}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted">
          <p>© {currentYear} {BUSINESS_INFO.legalName}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-text-primary cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-text-primary cursor-pointer transition-colors">Terms of Service</span>
            <span className="hover:text-text-primary cursor-pointer transition-colors">Sitemap</span>
          </div>
        </div>
      </ResponsiveContainer>
    </footer>
  );
};
