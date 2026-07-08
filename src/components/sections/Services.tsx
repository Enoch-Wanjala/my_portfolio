import { FiArrowRight } from 'react-icons/fi';
import { services } from '../../data/services';
import { Reveal } from '../animations/Reveal';

const commands: Record<string, string> = {
  'Web Development': 'INITIATE_PROJECT',
  'Website Maintenance': 'SYSTEM_CHECK',
  'UI/UX Design': 'VIEW_CANVAS'
};

export function Services() {
  return (
    <section className="mb-[clamp(5rem,8vw,8rem)]">
      <Reveal>
        <h2 className="mb-12 text-center text-title-sm font-bold leading-[1.2] tracking-[-.03em] text-[#e5e1e4] md:text-left">Strategic Services</h2>
      </Reveal>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {services.map((service) => (
          <Reveal key={service.title}>
            <article className="terminal-border group relative h-full min-h-[24rem] overflow-hidden rounded-lg bg-panel p-8 transition-all duration-500 hover:-translate-y-2">
              <div className="absolute left-0 top-0 h-0 w-1 bg-mint transition-all duration-500 group-hover:h-full" aria-hidden />
              <div className="flex h-full flex-col">
                <div className="mb-8">
                  <service.icon className="text-4xl text-[#22c55e]" aria-hidden />
                </div>
                <h3 className="mb-4 text-2xl font-bold tracking-[-.03em] text-[#e5e1e4] transition-colors group-hover:text-mint">{service.title}</h3>
                <p className="flex-grow text-base leading-[1.6] text-muted">{service.description}</p>
                <div className="mt-8 flex items-center gap-2 font-mono text-xs text-mint opacity-0 transition-opacity group-hover:opacity-100">
                  <span>{commands[service.title] ?? 'OPEN_SERVICE'}</span>
                  <FiArrowRight className="text-sm" aria-hidden />
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
