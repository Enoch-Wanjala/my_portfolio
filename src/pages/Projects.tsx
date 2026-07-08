import { Container } from '../components/layout/Container';
import { PageHeader } from '../components/layout/PageHeader';
import { SEO } from '../components/common/SEO';
import { PageTransition } from '../components/animations/PageTransition';
import { ProjectGrid } from '../components/sections/ProjectGrid';
import { CTA } from '../components/sections/CTA';
import { pageSeo } from '../lib/seo';

export default function Projects() {
  const seo = pageSeo({ title: 'Projects — Enoch Wanjala', description: 'Filtered project gallery for frontend engineering and digital product work.', path: '/projects' });
  return (
    <PageTransition>
      <SEO {...seo} />
      <Container>
        <PageHeader eyebrow="selected builds" title="Project" accent="Archive." description="A practical view of shipped interfaces, product systems, dashboards, and brand platforms." />
        <ProjectGrid filterable />
        <CTA />
      </Container>
    </PageTransition>
  );
}
