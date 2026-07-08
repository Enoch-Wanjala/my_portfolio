import { experience } from '../../data/experience';
import { Reveal } from '../animations/Reveal';
import { cn } from '../../utils/cn';

export function ExperienceTimeline() {
  return (
    <section className="py-fluid">
      <div className="mb-12 flex items-center gap-4">
        <h2 className="text-title-sm font-black leading-none tracking-[-.05em]">Career Path</h2>
        <div className="h-px flex-grow bg-line" />
      </div>

      <div className="relative ml-4 md:ml-0">
        <div className="hidden md:block absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-[#22c55e] to-[#27272a] opacity-25" aria-hidden />

        <div className="space-y-16">
          {experience.map((item, index) => {
            const isReversed = index % 2 === 1;

            return (
              <Reveal key={item.role} className={cn('relative flex flex-col items-start justify-between gap-4 md:items-center', isReversed ? 'md:flex-row-reverse' : 'md:flex-row')}>
                <div className="hidden md:block absolute left-1/2 top-8 z-10 size-4 -translate-x-1/2 rounded-full border-4 border-ink bg-mint" aria-hidden />

                <div className={cn('w-full md:w-[45%]', isReversed ? 'text-left' : 'text-left md:text-right')}>
                  <span className="font-mono text-xs uppercase tracking-[.05em] text-mint">{item.period}</span>
                  <h3 className="mt-2 text-2xl font-bold tracking-[-.03em] text-[#e5e1e4]">{item.company}</h3>
                </div>

                <article className="w-full border-l-4 border-[#22c55e] bg-[#111113] p-6 transition duration-300 hover:-translate-y-1 md:w-[45%]">
                  <p className="mb-2 font-mono text-xs text-mint">// Role: {item.role}</p>
                  <p className="text-sm leading-relaxed text-muted">{item.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
