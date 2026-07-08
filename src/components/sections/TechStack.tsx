import { skills } from '../../data/skills';
import { Reveal } from '../animations/Reveal';
import { cn } from '../../utils/cn';

export function TechStack() {
  return (
    <section className="mb-[clamp(5rem,8vw,8rem)]">
      <div className="flex flex-col gap-12 md:flex-row">
        <Reveal className="md:w-1/3">
          <h2 className="mb-4 text-title-sm font-bold leading-[1.2] tracking-[-.03em] text-[#e5e1e4]">Technical Stack</h2>
          <p className="mb-6 text-base leading-[1.6] text-muted">
            A curated selection of tools and technologies I've mastered to deliver professional-grade software.
          </p>
          <div className="terminal-border rounded-lg bg-[#0e0e10] p-6">
            <p className="mb-2 font-mono text-xs text-[#22c55e]">Current_Activity:</p>
            <p className="font-mono text-xs italic leading-relaxed text-[#e5e1e4]">"Deepening knowledge in TypeScript architecture and WebGL shaders..."</p>
          </div>
        </Reveal>

        <Reveal className="md:w-2/3">
          <div className="flex flex-wrap gap-4">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className={cn(
                  'skill-chip terminal-border group flex items-center gap-3 rounded-lg bg-surface px-6 py-4 text-[#e5e1e4] transition-all duration-300',
                  skill.featured && 'border-mint text-mint'
                )}
              >
                <skill.icon className="text-xl text-mint transition-transform duration-300 group-hover:scale-110" aria-hidden />
                <span className={cn('font-mono text-sm uppercase', skill.featured && 'text-mint')}>{skill.name}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
