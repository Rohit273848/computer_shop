import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BUSINESS_INFO } from '../../constants/business';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description = BUSINESS_INFO.description,
  keywords = [
    'Laptop Repair Chhatrapati Sambhajinagar',
    'Desktop Repair Garkheda',
    'Data Recovery Shivaji Nagar',
    'Doorstep Computer Repair',
    'Second Hand Laptop Dealer',
    'Computer Accessories Shop',
    'FixPro Computers',
  ],
  canonicalUrl = 'https://fixprocomputers.in',
  ogImage = '/favicon.svg',
  ogType = 'website',
}) => {
  const fullTitle = title
    ? `${title} | ${BUSINESS_INFO.name}`
    : `${BUSINESS_INFO.name} | Premium Laptop & Computer Repair Services`;

  const keywordString = keywords.join(', ');

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywordString} />
      <link rel="canonical" href={canonicalUrl} />

      {/* OpenGraph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={BUSINESS_INFO.name} />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Additional Local SEO Geo Tags */}
      <meta name="geo.region" content="IN-MH" />
      <meta name="geo.placename" content="Chhatrapati Sambhajinagar" />
    </Helmet>
  );
};
