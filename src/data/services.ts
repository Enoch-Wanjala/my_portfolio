import { FiGrid, FiMonitor, FiSettings } from 'react-icons/fi';
import type { Service } from '../types';

export const services: Service[] = [
  {
    title: 'Web Development',
    icon: FiMonitor,
    description:
      'Engineered for speed and precision. I build responsive applications with clean architecture and high performance metrics.'
  },
  {
    title: 'Website Maintenance',
    icon: FiSettings,
    description:
      'Proactive updates, monitoring, security patches, content updates, and optimization to keep digital assets healthy.'
  },
  {
    title: 'UI/UX Design',
    icon: FiGrid,
    description:
      'Human-centric interfaces that balance accessibility, usability, technical feasibility, and modern aesthetics.'
  }
];
