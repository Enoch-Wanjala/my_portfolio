import { NavLink } from 'react-router-dom';
import { socials } from '../../data/socials';
import { BrandLogo } from '../ui/BrandLogo';

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink py-8">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-8 px-5 font-mono text-[.68rem] uppercase tracking-widest text-white sm:px-8 md:flex-row md:items-center md:justify-between">
        <NavLink to="/" className="transition-opacity hover:opacity-90" aria-label="developer mwilwaji home">
          <BrandLogo compact />
        </NavLink>
        <p className="text-muted">© 2026 Enoch Wanjala. Built for performance.</p>
        <div className="flex flex-wrap gap-6">
          {socials.slice(0, 3).map((social) => (
            <a key={social.label} href={social.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-muted transition-colors hover:text-mint">
              <social.icon aria-hidden />
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

