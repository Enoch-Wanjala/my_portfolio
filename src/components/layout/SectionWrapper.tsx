import type { ReactNode } from 'react';
import { cn } from '../../utils/cn';

export function SectionWrapper({ children, className }: { children: ReactNode; className?: string }) {
  return <section className={cn('py-fluid', className)}>{children}</section>;
}
