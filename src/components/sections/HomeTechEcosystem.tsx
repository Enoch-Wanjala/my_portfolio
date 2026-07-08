import { FiCode, FiDatabase, FiMonitor } from 'react-icons/fi';
import { SiJavascript, SiReact } from 'react-icons/si';
import { Card } from '../ui/Card';
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
    className: 'md:col-span-2'
  },
  {
    title: 'HTML5, CSS3 & Tailwind',
    icon: FiMonitor,
    meta: 'UI/UX',
    description:
      'Expertise in semantic markup, modern CSS, and utility-first styling to create pixel-perfect, accessible, and responsive interfaces.',
    tags: ['Animation', 'Accessibility'],
    className: 'md:col-span-2'
  },
  {
    title: 'Backend Learning',
    icon: FiDatabase,
    meta: '',
    description: 'Exploring Node.js and Flask for API orchestration and server-side logic.',
    tags: [],
    className: ''
  },
  {
    title: 'JavaScript (ES6+)',
    icon: SiJavascript,
    meta: '',
    description: 'Deep understanding of asynchronous patterns and functional programming.',
    tags: [],
    className: ''
  },
  {
    title: 'Responsive Lifecycle',
    icon: FiCode,
    meta: '',
    description:
      'Ensuring seamless interaction across every device viewport, from ultra-wide monitors to handheld smartphones.',
    tags: [],
    className: 'md:col-span-2'
  }
];

export function HomeTechEcosystem() {
  return (
    <section className="py-fluid-sm">
      <div className="mb-10 grid gap-6 md:grid-cols-[.7fr_1fr]">
        <Reveal>
          <p className="eyebrow">02 // Stack</p>
          <h2 className="mt-3 text-title-sm font-black leading-[.95] tracking-[-.055em]">
            Tech
            <br />
            Ecosystem
          </h2>
        </Reveal>
        <Reveal className="self-end text-right text-sm leading-6 text-muted md:justify-self-end">
          Selecting the right tool for the specific job is my philosophy
          <br className="hidden sm:block" />
          for building scalable web apps.
        </Reveal>
      </div>
      <div className="grid gap-4 md:grid-cols-4">
        {cards.map((card) => (
          <Reveal key={card.title} className={card.className}>
            <Card className="h-full min-h-[12rem] p-7 transition hover:-translate-y-1 hover:border-mint/80">
              <div className="mb-8 flex items-start justify-between">
                <card.icon className="text-xl text-mint" aria-hidden />
                {card.meta && <span className="font-mono text-[9px] uppercase tracking-widest text-mint">{card.meta}</span>}
              </div>
              <h3 className="text-xl font-extrabold">{card.title}</h3>
              <p className="mt-4 text-sm leading-6 text-muted">{card.description}</p>
              {card.tags.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-2">
                  {card.tags.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>
              )}
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
