import type { HTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

export function Badge({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return <span className={cn('inline-flex rounded px-3 py-1 font-mono text-[10px] uppercase tracking-[.05em] text-mint ring-1 ring-line/80', className)} {...props} />;
}
