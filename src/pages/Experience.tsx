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
        <div className="grid gap-8 lg:grid-cols-[.28fr_1fr]">
          <h2 className="text-title-sm font-black tracking-[-.05em]">Selected Projects</h2>
          <ProjectGrid />
        </div>
        <ExperienceTimeline />
      </Container>
    </PageTransition>
  );
}
