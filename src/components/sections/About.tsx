import { stats } from '../../data/stats';
import { AnimatedCounter } from './AnimatedCounter';
import { Reveal } from '../animations/Reveal';

export function About() {
  return (
    <section className="grid items-center gap-20 py-fluid md:grid-cols-2">
      <Reveal>
        <div className="relative">
          <div className="glass-panel relative z-10 aspect-square p-4">
            <img src="/portrait.jpg" alt="Portrait of Enoch Wanjala working on a laptop" className="h-full w-full object-cover object-[50%_18%]" loading="lazy" />
          </div>
          <div className="absolute -bottom-10 -right-10 -z-10 h-full w-full border-2 border-line" aria-hidden />
          <div className="pointer-events-none absolute -left-6 -top-6 select-none text-hero font-black tracking-[-.04em] text-mint opacity-10" aria-hidden>
            WANJALA
          </div>
        </div>
      </Reveal>

      <Reveal className="flex flex-col gap-8">
        <p className="eyebrow">01 // THE BIO</p>
        <h2 className="text-title-sm font-bold leading-[1.2] tracking-[-.03em] text-[#e5e1e4]">
          I create beautiful, fast, and <span className="text-mint">responsive</span> websites.
        </h2>
        <div className="space-y-6 leading-loose text-muted">
          <p>I’m Enoch Wanjala, a Frontend Web Developer passionate about creating beautiful, fast, and responsive websites that offer exceptional user experiences.</p>
          <p>With a deep focus on the intersection of aesthetics and functionality, I leverage modern frameworks to build interfaces that aren’t just pretty, but performant. My goal is to bridge the gap between technical complexity and user delight.</p>
        </div>
        <div className="grid grid-cols-2 gap-8 border-t border-line pt-8 md:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="mb-2 text-stat font-black leading-none text-mint"><AnimatedCounter value={stat.value} />{stat.suffix}</p>
              <p className="font-mono text-xs uppercase tracking-widest text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
