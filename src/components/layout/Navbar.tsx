import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { navigation } from '../../data/navigation';
import { useScrollDirection } from '../../hooks/useScrollDirection';
import { ButtonLink } from '../ui/Button';
import { cn } from '../../utils/cn';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const hidden = useScrollDirection();

  return (
    <header className={cn('sticky top-0 z-50 border-b border-line bg-ink/95 backdrop-blur-sm transition-transform', hidden && '-translate-y-full')}>
      <nav className="mx-auto flex h-[4.65rem] max-w-[1120px] items-center justify-between px-5 sm:px-8" aria-label="Primary navigation">
        <NavLink to="/" className="font-mono text-[.82rem] font-bold uppercase tracking-tight text-mint">
          Enoch.dev
        </NavLink>
        <div className="hidden items-center gap-9 md:flex">
          {navigation.map((item) => (
            <NavLink key={item.href} to={item.href} className={({ isActive }) => cn('nav-link', isActive && 'text-mint underline underline-offset-8')}>
              {item.label}
            </NavLink>
          ))}
        </div>
        <ButtonLink to="/contact" className="hidden min-h-11 px-8 md:inline-flex">Contact</ButtonLink>
        <button className="grid size-11 place-items-center border border-line text-white md:hidden" aria-label="Toggle menu" onClick={() => setOpen((value) => !value)}>
          {open ? <FiX /> : <FiMenu />}
        </button>
      </nav>
      <div className={cn('grid border-t border-line bg-panel transition-[grid-template-rows] md:hidden', open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]')}>
        <div className="overflow-hidden">
          <div className="flex flex-col gap-3 p-5">
            {[...navigation, { label: 'Contact', href: '/contact' }].map((item) => (
              <NavLink key={item.href} to={item.href} onClick={() => setOpen(false)} className="border border-line p-4 text-white">
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

