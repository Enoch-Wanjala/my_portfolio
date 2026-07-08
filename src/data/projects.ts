import type { Project } from '../types';

export const projects: Project[] = [
  // Project cards are intentionally data-driven: replace assets/links here without editing UI.
  {
    title: 'Quad Shades',
    category: 'Web Architecture',
    description:
      'Modern shade and outdoor-structure website with a premium hero, refined visual hierarchy, and conversion-focused calls to action.',
    image: '/project-quad.png',
    tags: ['React', 'Brand', 'Performance'],
    liveUrl: 'https://www.quadshades.com/'
  },
  {
    title: 'Mashujaa Africa',
    category: 'Media & Streaming',
    description:
      'A cinematic production company platform presenting film, music, TV, and documentary services through immersive visual storytelling.',
    image: '/project-mashujaa.png',
    tags: ['Media', 'Brand', 'UX'],
    liveUrl: 'https://mashujaaafricaproductions.com/'
  },
  {
    title: 'Prescenca',
    category: 'SaaS Platform',
    description:
      'A clean healthcare SaaS landing experience for therapists, focused on early access, feature clarity, and accessible conversion flows.',
    image: '/project-prescenca.png',
    tags: ['SaaS', 'Healthcare', 'TypeScript'],
    liveUrl: 'https://prescenca.com/'
  },
  {
    title: 'Million Access Agency',
    category: 'Brand Platform',
    description:
      'A relocation and travel platform for Kenya with strong hero messaging, service discovery, and trust-building visual presentation.',
    image: '/project-million.png',
    tags: ['Brand', 'Travel', 'Performance'],
    liveUrl: 'https://millionaccessagency.com/'
  }
];
