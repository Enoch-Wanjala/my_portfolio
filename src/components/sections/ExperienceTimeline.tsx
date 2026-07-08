import { experience } from '../../data/experience';
import { Reveal } from '../animations/Reveal';

export function ExperienceTimeline() {
  return (
    <section className="py-fluid">
      <div className="grid gap-8 lg:grid-cols-[.35fr_1fr]">
        <h2 className="text-title font-black tracking-[-.05em]">Career Path</h2>
        <div className="relative space-y-12 before:absolute before:left-3 before:top-0 before:h-full before:w-px before:bg-line md:before:left-1/2">
          {experience.map((item, index) => (
            <Reveal key={item.role} className={`relative grid gap-6 md:grid-cols-2 ${index % 2 ? '' : 'md:[&>*:first-child]:col-start-2'}`}>
              <div className="hidden md:block" />
              <article className="relative border-l-4 border-mint bg-panel p-7 shadow-card">
                <span className="absolute -left-[15px] top-8 size-6 rounded-full border-8 border-ink bg-mint" />
                <p className="font-mono text-xs uppercase tracking-widest text-mint">{item.period}</p>
                <h3 className="mt-3 text-2xl font-bold">{item.company}</h3>
                <p className="mt-3 font-mono text-xs text-mint">// Role: {item.role}</p>
                <p className="mt-3 leading-7 text-muted">{item.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
