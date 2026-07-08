import { Link } from 'react-router-dom';
import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react';
import { cn } from '../../utils/cn';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'ghost'; children: ReactNode };
type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & { to: string; variant?: 'primary' | 'ghost'; children: ReactNode };

const styles = {
  primary: 'bg-mint text-ink hover:bg-white',
  ghost: 'border border-line bg-black/30 text-white hover:border-mint hover:text-mint'
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
