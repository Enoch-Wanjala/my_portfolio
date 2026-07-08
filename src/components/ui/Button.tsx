import { Link } from 'react-router-dom';
import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react';
import { cn } from '../../utils/cn';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'ghost'; children: ReactNode };
type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & { to: string; variant?: 'primary' | 'ghost'; children: ReactNode };
type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> & { href: string; variant?: 'primary' | 'ghost'; children: ReactNode };

const styles = {
  primary: 'bg-[#22c55e] text-[#004b1e] hover:bg-[#4be277] active:scale-95',
  ghost: 'border border-line bg-transparent text-[#e5e1e4] hover:border-mint hover:text-mint'
};

export function Button({ className, variant = 'primary', ...props }: ButtonProps) {
  return <button className={cn('btn', styles[variant], className)} {...props} />;
}

export function ButtonLink({ className, variant = 'primary', to, children, ...props }: LinkProps) {
  return (
    <Link className={cn('btn', styles[variant], className)} to={to} {...props}>
      {children}
    </Link>
  );
}

export function ButtonAnchor({ className, variant = 'primary', href, children, ...props }: AnchorProps) {
  return (
    <a className={cn('btn', styles[variant], className)} href={href} {...props}>
      {children}
    </a>
  );
}
