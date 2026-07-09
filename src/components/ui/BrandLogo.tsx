import { FiCode } from 'react-icons/fi';
import { FaGear } from 'react-icons/fa6';
import { cn } from '../../utils/cn';

export function BrandLogo({ className, compact = false }: { className?: string; compact?: boolean }) {
  return (
    <span className={cn('inline-flex items-center gap-2 text-[#e5e1e4]', className)} aria-label="developer mwilwaji">
      {!compact && (
        <span className="flex flex-col text-left font-sans text-[1.05rem] font-black lowercase leading-[.82] tracking-[-.075em] sm:text-[1.2rem]">
          <span>developer</span>
          <span>mwilwaji</span>
        </span>
      )}
      <span className="relative grid size-9 place-items-center text-[#22c55e] sm:size-10" aria-hidden>
        <FaGear className="absolute inset-0 h-full w-full drop-shadow-[0_0_14px_rgba(34,197,94,.18)]" />
        <span className="relative grid size-[1.55rem] place-items-center rounded-full bg-[#e5e1e4] text-[#004b1e] sm:size-[1.7rem]">
          <FiCode className="text-[1rem] stroke-[3] sm:text-[1.08rem]" />
        </span>
      </span>
    </span>
  );
}
