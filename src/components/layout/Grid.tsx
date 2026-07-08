import type { ReactNode } from 'react';
import { cn } from '../../utils/cn';

export function Grid({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn('grid gap-6 sm:grid-cols-2 lg:grid-cols-3', className)}>{children}</div>;
}
