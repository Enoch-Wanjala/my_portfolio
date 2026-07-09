import { Container } from '../components/layout/Container';
import { SEO } from '../components/common/SEO';
import { PageTransition } from '../components/animations/PageTransition';
import { ProjectGrid } from '../components/sections/ProjectGrid';
import { CTA } from '../components/sections/CTA';
import { Reveal } from '../components/animations/Reveal';
import { pageSeo } from '../lib/seo';

function ProjectsHero() {
  return (
    <section className="mb-12 pt-14">
      <Reveal>
        <div className="mb-6 inline-block rounded-full border border-line px-3 py-1">
          <span className="font-mono text-xs uppercase tracking-widest text-mint">Selected Builds</span>
        </div>
        <h1 className="mb-6 max-w-4xl text-hero font-black leading-[1.08] tracking-[-.04em] text-[#e5e1e4]">
          Project <span className="text-mint">Archive.</span>
        </h1>
        <p className="max-w-2xl text-base leading-[1.6] text-muted">
          A practical view of shipped interfaces, product systems, dashboards, and brand platforms built with performance, clarity, and responsive UX in mind.
        </p>
      </Reveal>
    </section>
  );
}

export default function Projects() {
  const seo = pageSeo({ title: 'Projects — Enoch Wanjala', description: 'Filtered project gallery for frontend engineering and digital product work.', path: '/projects' });
  return (
    <PageTransition>
      <SEO {...seo} />
      <Container>
        <ProjectsHero />
        <ProjectGrid filterable />
        <CTA />
      </Container>
    </PageTransition>
  );
}
