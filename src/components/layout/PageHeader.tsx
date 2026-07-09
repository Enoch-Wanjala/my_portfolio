import { Reveal } from '../animations/Reveal';
import { Badge } from '../ui/Badge';

export function PageHeader({ eyebrow, title, accent, description }: { eyebrow: string; title: string; accent?: string; description: string }) {
  return (
    <Reveal className="max-w-[58rem] pb-fluid-sm pt-14">
      <Badge>{eyebrow}</Badge>
      <h1 className="mt-7 text-balance text-hero font-black leading-[1.08] tracking-[-.04em] text-[#e5e1e4]">
        {title} {accent && <span className="text-mint">{accent}</span>}
      </h1>
      <p className="mt-7 max-w-[43rem] text-pretty text-base leading-[1.6] text-muted">{description}</p>
    </Reveal>
  );
}
