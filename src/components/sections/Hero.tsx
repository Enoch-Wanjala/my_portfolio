import { FiArrowUpRight } from 'react-icons/fi';
import { ButtonLink } from '../ui/Button';
import { Reveal } from '../animations/Reveal';
import { CodeWindow } from './CodeWindow';

export function Hero() {
  return (
    <section className="min-h-[calc(100vh-5rem)] py-fluid">
      <Reveal className="max-w-5xl">
        <p className="eyebrow before:mr-3 before:inline-block before:h-px before:w-10 before:bg-mint before:align-middle">
          Frontend engineer & UI developer
        </p>
        <h1 className="mt-6 text-balance text-hero font-black leading-[.92] tracking-[-.07em]">
          Building <span className="text-mint">Modern Websites</span> That Leave Lasting Impressions.
        </h1>
        <p className="mt-7 max-w-2xl text-pretty leading-8 text-muted">
          I help individuals, brands, and businesses establish a strong online presence through clean,
          responsive, and user-friendly websites designed to engage visitors and support business growth.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <ButtonLink to="/projects">View My Work <FiArrowUpRight /></ButtonLink>
          <ButtonLink to="/contact" variant="ghost">WhatsApp</ButtonLink>
          <ButtonLink to="/contact" variant="ghost">Email</ButtonLink>
        </div>
      </Reveal>
      <Reveal className="mt-10 max-w-4xl">
        <CodeWindow />
      </Reveal>
    </section>
  );
}
