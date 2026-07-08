import type { IconType } from 'react-icons';

export type NavItem = { label: string; href: string };
export type Project = {
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
};
export type Skill = { name: string; icon: IconType; featured?: boolean };
export type Service = { title: string; description: string; icon: IconType };
export type ExperienceItem = { role: string; company: string; period: string; description: string };
export type Social = { label: string; href: string; icon: IconType };
export type Stat = { label: string; value: number; suffix?: string };
export type SeoConfig = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};
