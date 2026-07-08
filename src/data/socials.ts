import { FaGithub, FaLinkedin, FaWhatsapp, FaXTwitter } from 'react-icons/fa6';
import type { Social } from '../types';
import { site } from '../constants/site';

export const whatsappUrl = `https://wa.me/254${site.phone.slice(1)}?text=${encodeURIComponent('Hi Enoch, I came from your portfolio and would like to discuss a project.')}`;

export const socials: Social[] = [
  { label: 'GitHub', href: 'https://github.com/Enoch-Wanjala', icon: FaGithub },
  { label: 'WhatsApp', href: whatsappUrl, icon: FaWhatsapp },
  { label: 'LinkedIn', href: 'https://linkedin.com/', icon: FaLinkedin },
  { label: 'Twitter', href: 'https://x.com/', icon: FaXTwitter }
];
