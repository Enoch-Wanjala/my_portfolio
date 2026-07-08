import { Reveal } from '../animations/Reveal';
import { Badge } from '../ui/Badge';

export function PageHeader({ eyebrow, title, accent, description }: { eyebrow: string; title: string; accent?: string; description: string }) {
  return (
    <Reveal className="max-w-[58rem] pb-fluid-sm pt-12">
      <Badge>{eyebrow}</Badge>
      <h1 className="mt-7 text-balance text-hero font-black leading-[.94] tracking-[-.065em]">
        {title} {accent && <span className="text-mint">{accent}</span>}
      </h1>
      <p className="mt-7 max-w-[43rem] text-pretty text-[1.03rem] leading-8 text-muted">{description}</p>
    </Reveal>
  );
}

