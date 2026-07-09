import { Container } from '../components/layout/Container';
import { PageHeader } from '../components/layout/PageHeader';
import { SEO } from '../components/common/SEO';
import { PageTransition } from '../components/animations/PageTransition';
import { ProjectGrid } from '../components/sections/ProjectGrid';
import { ExperienceTimeline } from '../components/sections/ExperienceTimeline';
import { pageSeo } from '../lib/seo';

export default function Experience() {
  const seo = pageSeo({ title: 'Work & Experience — Enoch Wanjala', description: 'Selected projects and career path for frontend engineer Enoch Wanjala.', path: '/experience' });
  return (
    <PageTransition>
      <SEO {...seo} />
      <Container>
        <PageHeader eyebrow="portfolio v2.0" title="Work &" accent="Experience." description="A selection of digital products and engineering roles focused on frontend excellence, performance optimization, and scalable UI architectures." />
        <section className="pb-fluid-sm">
          <div className="mb-12 flex items-center gap-4">
            <h2 className="max-w-[12rem] text-title-sm font-black leading-[1.12] tracking-[-.04em] text-[#e5e1e4]">Selected Projects</h2>
            <div className="hidden h-px flex-1 bg-line md:block" aria-hidden />
          </div>
          <ProjectGrid />
        </section>
        <ExperienceTimeline />
      </Container>
    </PageTransition>
  );
}
