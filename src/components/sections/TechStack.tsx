import { skills } from '../../data/skills';
import { Card } from '../ui/Card';
import { Reveal } from '../animations/Reveal';
import { cn } from '../../utils/cn';

export function TechStack() {
  return (
    <section className="py-fluid">
      <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr]">
        <Reveal>
          <h2 className="text-title font-black tracking-[-.05em]">Technical Stack</h2>
          <p className="mt-5 max-w-md leading-8 text-muted">A curated selection of tools and technologies I use to deliver professional-grade software.</p>
          <Card className="mt-8 font-mono text-sm italic">
            <p className="text-mint">Current_Activity:</p>
            <p className="mt-2 text-white">"Deepening knowledge in TypeScript architecture and WebGL shaders..."</p>
          </Card>
        </Reveal>
        <Reveal className="grid auto-rows-fr grid-cols-2 gap-4 sm:grid-cols-3">
          {skills.map((skill) => (
            <div key={skill.name} className={cn('flex items-center justify-center gap-3 border border-line bg-panel px-4 py-5 font-bold uppercase text-white transition hover:-translate-y-1 hover:border-mint', skill.featured && 'col-span-2 border-mint/70 text-mint')}>
              <skill.icon className="text-mint" aria-hidden />
              <span>{skill.name}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
