import type { HTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

export function Badge({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return <span className={cn('inline-flex rounded-[4px] border border-line px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-mint', className)} {...props} />;
}

