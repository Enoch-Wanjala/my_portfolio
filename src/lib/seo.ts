import { site } from '../constants/site';
import type { SeoConfig } from '../types';

export function absoluteUrl(path: string) {
  return `${site.url}${path === '/' ? '' : path}`;
}

export function pageSeo(config: SeoConfig) {
  // Centralized defaults keep every page discoverable without duplicating SEO boilerplate.
  return {
    keywords: ['frontend engineer', 'react developer', 'portfolio', 'web performance', ...(config.keywords ?? [])],
    canonical: absoluteUrl(config.path),
    ...config
  };
}

export function personJsonLd() {
  // JSON-LD gives search engines a machine-readable profile for the portfolio owner.
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: site.author,
    url: site.url,
    jobTitle: 'Frontend Engineer',
    email: site.email,
    address: site.location
  };
}
