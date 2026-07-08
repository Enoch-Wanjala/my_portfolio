import type { Project } from '../types';

export const projects: Project[] = [
  // Project cards are intentionally data-driven: replace assets/links here without editing UI.
  {
    title: 'Quad Shades',
    category: 'Web Architecture',
    description:
      'Advanced sunglasses e-commerce platform featuring immersive 3D product previews and a custom checkout flow optimized for core web vitals.',
    image: '/project-quad.svg',
    tags: ['React', 'Commerce', '3D'],
    liveUrl: 'https://example.com'
  },
  {
    title: 'Mashujaa Africa',
    category: 'Media & Streaming',
    description:
      'A content-heavy production hub integrating live-streaming capabilities and interactive portfolio galleries for a leading creative agency.',
    image: '/project-mashujaa.svg',
    tags: ['Streaming', 'CMS', 'UX'],
    liveUrl: 'https://example.com'
  },
  {
    title: 'Prescenca',
    category: 'SaaS Dashboard',
    description:
      'A complex data visualization dashboard for real-time presence tracking and workforce management with modular component architecture.',
    image: '/project-prescenca.svg',
    tags: ['SaaS', 'Charts', 'TypeScript'],
    liveUrl: 'https://example.com'
  },
  {
    title: 'Millions Agency',
    category: 'Brand Platform',
    description:
      'A high-conversion marketing platform using kinetic typography and premium motion to drive user engagement and storytelling.',
    image: '/project-millions.svg',
    tags: ['GSAP', 'Brand', 'Performance'],
    liveUrl: 'https://example.com'
  }
];
