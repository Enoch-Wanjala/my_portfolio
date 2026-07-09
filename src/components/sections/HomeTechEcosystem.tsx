import { FiCode, FiDatabase, FiMonitor } from 'react-icons/fi';
import { SiJavascript, SiReact } from 'react-icons/si';
import { Badge } from '../ui/Badge';
import { Reveal } from '../animations/Reveal';

const cards = [
  {
    title: 'React & Next.js',
    icon: SiReact,
    meta: 'Core stack',
    description:
      'Mastery in building high-performance, SEO-optimized web applications using server-side rendering, static generation, and advanced state management.',
    tags: ['TypeScript', 'Redux', 'Zustand'],
    className: 'md:col-span-2',
    featured: true
  },
  {
    title: 'HTML5, CSS3 & Tailwind',
    icon: FiMonitor,
    meta: 'UI/UX',
    description:
      'Expertise in semantic markup, modern CSS (Grid/Flexbox), and utility-first styling to create pixel-perfect, accessible, and responsive interfaces.',
    tags: ['Animations', 'Accessibility'],
    className: 'md:col-span-2',
    featured: true
  },
  {
    title: 'Backend (Learning)',
    icon: FiDatabase,
    meta: '',
    description: 'Exploring Node.js and Flask for API orchestration and server-side logic.',
    tags: [],
    className: 'md:col-span-1 opacity-80',
    featured: false
  },
  {
    title: 'JavaScript (ES6+)',
    icon: SiJavascript,
    meta: '',
    description: 'Deep understanding of asynchronous patterns and functional programming.',
    tags: [],
    className: 'md:col-span-1',
    featured: false
  },
  {
    title: 'Responsive Lifecycle',
    icon: FiCode,
    meta: '',
    description: 'Ensuring seamless interaction across any device viewport from ultra-wide monitors to handheld smartphones.',
    tags: [],
    className: 'md:col-span-2',
    featured: false,
    deviceBlock: true
  }
];

export function HomeTechEcosystem() {
  return (
    <section className="py-20">
      <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <Reveal>
          <p className="eyebrow mb-4">02 // STACK</p>
          <h2 className="text-title-sm font-bold leading-[1.2] tracking-[-.03em] text-[#e5e1e4]">Tech Ecosystem</h2>
        </Reveal>
        <Reveal className="max-w-sm text-sm leading-6 text-muted md:text-right">
          Selecting the right tool for the specific job is my philosophy for building scalable web apps.
        </Reveal>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
        {cards.map((card) => (
          <Reveal key={card.title} className={card.className}>
            <article className={`glass-panel group h-full p-8 transition-colors hover:border-mint ${card.featured ? 'border-mint/40' : ''} ${card.deviceBlock ? 'flex flex-col items-start gap-8 md:flex-row md:items-center' : ''}`}>
              <div className={card.deviceBlock ? 'flex-1' : ''}>
                <div className="mb-6 flex items-start justify-between">
                  <card.icon className={`${card.featured ? 'text-5xl' : 'text-3xl'} text-mint ${card.featured ? '' : 'text-muted group-hover:text-mint'}`} aria-hidden />
                  {card.meta && <span className="rounded bg-mint/10 px-2 py-1 font-mono text-[10px] uppercase tracking-[.05em] text-mint">{card.meta}</span>}
                </div>
                <h3 className={`${card.featured ? 'text-2xl' : 'text-lg'} mb-4 font-bold tracking-[-.03em] text-[#e5e1e4]`}>{card.title}</h3>
                <p className={`${card.featured ? 'mb-6 text-base leading-relaxed' : 'text-sm leading-6'} text-muted`}>{card.description}</p>
                {card.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {card.tags.map((tag) => (
                      <Badge key={tag}>{tag}</Badge>
                    ))}
                  </div>
                )}
              </div>
              {card.deviceBlock && (
                <div className="flex h-24 w-full items-center justify-center rounded border border-mint/20 bg-mint/10 md:w-32">
                  <card.icon className="text-4xl text-mint" aria-hidden />
                </div>
              )}
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
