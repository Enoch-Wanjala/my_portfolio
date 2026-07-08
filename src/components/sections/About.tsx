import { stats } from '../../data/stats';
import { AnimatedCounter } from './AnimatedCounter';
import { Reveal } from '../animations/Reveal';

export function About() {
  return (
    <section className="grid items-center gap-10 py-fluid lg:grid-cols-[.95fr_1fr]">
      <Reveal>
        <div className="relative border border-line bg-panel p-3">
          <div className="absolute -left-4 -top-4 h-16 w-32 border-l border-t border-mint/40" />
          <img src="/portrait-placeholder.svg" alt="Enoch Wanjala portrait placeholder" className="aspect-[4/5] w-full object-cover" loading="lazy" />
        </div>
      </Reveal>
      <Reveal>
        <p className="eyebrow">01 // The bio</p>
        <h2 className="mt-5 text-title font-black leading-none tracking-[-.05em]">
          I create beautiful, fast, and responsive websites.
        </h2>
        <div className="mt-6 space-y-5 leading-8 text-muted">
          <p>I’m Enoch Wanjala, a frontend web developer passionate about creating beautiful, fast, and responsive websites that offer exceptional user experiences.</p>
          <p>With a deep focus on aesthetics and functionality, I leverage modern frameworks to build interfaces that are not just pretty, but performant.</p>
        </div>
        <div className="mt-8 grid grid-cols-3 gap-4 border-t border-line pt-7">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-stat font-black text-mint"><AnimatedCounter value={stat.value} />{stat.suffix}</p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
