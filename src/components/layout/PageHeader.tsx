import { Reveal } from '../animations/Reveal';
import { Badge } from '../ui/Badge';

export function PageHeader({ eyebrow, title, accent, description }: { eyebrow: string; title: string; accent?: string; description: string }) {
  return (
    <Reveal className="max-w-4xl pb-fluid-sm pt-12">
      <Badge>{eyebrow}</Badge>
      <h1 className="mt-7 text-balance text-hero font-black leading-[.95] tracking-[-.06em]">
        {title} {accent && <span className="text-mint">{accent}</span>}
      </h1>
      <p className="mt-7 max-w-2xl text-pretty text-base leading-8 text-muted sm:text-lg">{description}</p>
    </Reveal>
  );
}
