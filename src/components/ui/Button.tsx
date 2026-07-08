import { Link } from 'react-router-dom';
import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react';
import { cn } from '../../utils/cn';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'ghost'; children: ReactNode };
type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & { to: string; variant?: 'primary' | 'ghost'; children: ReactNode };

const styles = {
  primary: 'bg-mint text-ink shadow-[inset_0_0_0_1px_rgba(255,255,255,.16)] hover:bg-[#45e079]',
  ghost: 'border border-line bg-[#0b0c0d] text-white hover:border-mint hover:bg-mint/10 hover:text-mint'
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
