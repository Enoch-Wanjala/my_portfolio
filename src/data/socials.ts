import { FaGithub, FaLinkedin, FaWhatsapp, FaXTwitter } from 'react-icons/fa6';
import type { Social } from '../types';
import { site } from '../constants/site';

export const socials: Social[] = [
  { label: 'GitHub', href: 'https://github.com/Enoch-Wanjala', icon: FaGithub },
  { label: 'LinkedIn', href: 'https://linkedin.com/', icon: FaLinkedin },
  { label: 'WhatsApp', href: `https://wa.me/254${site.phone.slice(1)}`, icon: FaWhatsapp },
  { label: 'Twitter', href: 'https://x.com/', icon: FaXTwitter }
];
